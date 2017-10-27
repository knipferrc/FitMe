const Koa = require('koa')
const serve = require('koa-static')
const send = require('koa-send')
const path = require('path')

const app = new Koa()

app.use(serve(path.resolve(__dirname, '..', 'build')))

app.use(async ctx => {
  await send(ctx, 'build/index.html')
})

app.listen(3000)
