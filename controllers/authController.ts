import db from "../utils/db.ts";
import validator from "../utils/validator.ts";

const userCollection = db.collection("users");

export default {
  async login(ctx: any) {
    const value = await validator.validateLogin(ctx);
    if (!value) {
      return;
    }

   const user = await userCollection.findOne({ email: value.email });
    if (!user) {
      ctx.response.status = 422;
      ctx.response.body = {
        errors: { message: "Credentials doesn't match out record" },
      };
      return;
    }

    ctx.response.body = value;
  }
};
