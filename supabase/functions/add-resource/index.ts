import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "POST only" }), { status: 405, headers: cors });

  try {
    const body = await req.json();
    const expected = Deno.env.get("UPLOAD_PASSWORD") ?? "";
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";

    if (!expected || !serviceRole || !supabaseUrl) {
      return new Response(JSON.stringify({ error: "Server is not configured." }), { status: 500, headers: cors });
    }

    if (body.password !== expected) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: cors });
    }

    if (body.action === "check") {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
    }

    if (body.action !== "add") {
      return new Response(JSON.stringify({ error: "Unknown action" }), { status: 400, headers: cors });
    }

    const allowedTypes = new Set(["notes","pyq","lab","assignments","ebooks","important","other"]);
    if (!body.subject_id || !body.resource_type || !body.title || !body.url) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400, headers: cors });
    }
    if (!allowedTypes.has(body.resource_type)) {
      return new Response(JSON.stringify({ error: "Invalid resource type." }), { status: 400, headers: cors });
    }
    if (!/^https?:\/\//i.test(body.url)) {
      return new Response(JSON.stringify({ error: "Invalid URL." }), { status: 400, headers: cors });
    }

    const admin = createClient(supabaseUrl, serviceRole);
    const { error } = await admin.from("resources").insert({
      subject_id: String(body.subject_id),
      resource_type: String(body.resource_type),
      title: String(body.title).slice(0, 200),
      url: String(body.url).slice(0, 2000),
      meta: String(body.meta ?? "").slice(0, 200)
    });

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: cors });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Bad request" }), { status: 400, headers: cors });
  }
});
