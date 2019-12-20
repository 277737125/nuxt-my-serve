const loginRouter = require("koa-router")({ prefix: "/api" });

loginRouter.post("/login", ctx => {
  const user = ctx.request.body;
  
  if (user.username === "yange" && user.password === "123") {
    // 将token存⼊cookie
    const token = "a mock token";
    ctx.cookies.set("token", token);
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
});

module.exports = loginRouter