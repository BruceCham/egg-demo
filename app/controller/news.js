const Egg = require('egg')

class NewsController extends Egg.Controller{
  * list(){
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newsList = yield ctx.service.news.list(page)
    
    yield this.ctx.render('news/list.tpl', {list: newsList})
  }
}

module.exports = NewsController