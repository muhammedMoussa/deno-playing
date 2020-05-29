import { config } from "https://deno.land/x/dotenv/mod.ts";
import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const env = config();

const HOST = env.APP_HOST || "http://localhost";
const PORT = +env.APP_PORT || 8000;
const s = serve({ port: PORT });
console.log(`server is started at ${HOST}:${PORT}`);

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}