export default {
    async validate(ctx: any) {
      let errors = [];
      let status;
      const { value } = await ctx.request.body();

      if (!value) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Missed required data" };
        return;
      }
  
      const fields = ["email", "password", "name"];
      for (let index = 0; index < fields.length; index++) {
        if (!value[fields[index]]) {
          status = 400;
          errors.push({ [fields[index]]: `${fields[index]} field is required` });
        }
      }
  
      if (status) {
        ctx.response.body = { errors };
        return;
      }
  
      return value;
    },
    async validateLogin(ctx: any) {
      let errors = [];
      let status;
      const { value } = await ctx.request.body();
      if (!value) {
        ctx.response.status = 400;
        ctx.response.body = {
          errors: { message: "Missed required data" },
        };
        return;
      }
  
      const fields = ["email", "password"];
      for (let index = 0; index < fields.length; index++) {
        if (!value[fields[index]]) {
          status = 400;
          errors.push({ [fields[index]]: `${fields[index]} field is required` });
        }
      }
  
      if (status) {
        ctx.response.status = status;
        ctx.response.body = { errors };
        return false;
      }
      return value;
    }
  };
  