const Egg = require('egg')

class PostController extends Egg.Controller{
  async create(){
    const {ctx, service} = this
    const createRule = {
      title: {
        type: 'string'
      },
      content: {
        type: 'string'
      }
    }
    // 校验参数
    ctx.validate( createRule )
    // 组装参数
    const author = ctx.session.userId
    const req = Object.assign(ctx.request.body, {author})
    const res = await service.post.create(req)
    ctx.body = {
      id: res.id
    }
    ctx.status = 201
  }
}

module.exports = PostController