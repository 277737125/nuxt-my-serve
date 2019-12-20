// api.js
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")({ prefix: "/api" });
const loginRouter = require('./api/login')
const app = new Koa();
// 设置cookie加密秘钥
app.keys = ["some secret", "another secret"];


app.use(bodyparser());
app.use(loginRouter.routes());
app.listen(8080);
