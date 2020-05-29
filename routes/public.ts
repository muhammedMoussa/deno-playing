import { Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import authController from "../controllers/authController.ts";

const publicRouter = new Router();

publicRouter
  .options("/login", oakCors())
  .post("/login", authController.login);

export default publicRouter;
