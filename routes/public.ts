import { Router } from "https://deno.land/x/oak/mod.ts";
import authController from "../controllers/authController.ts";

const publicRouter = new Router();

publicRouter.get("/login", authController.login);

export default publicRouter;
