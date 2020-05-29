import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import notFound from "./404.ts";
import publicRouter from "./routes/public.ts";

const env = config();
const app = new Application();

const HOST = env.APP_HOST || "http://localhost";
const PORT = +env.APP_PORT || 8000;

app.use(oakCors());
app.use(publicRouter.routes())
app.use(notFound);

console.log(`server is started at ${HOST}:${PORT}`);
await app.listen({ port: PORT });
