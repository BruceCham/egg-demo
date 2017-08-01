const Egg = require('egg')

class HomeController extends Egg.Controller {
  * index() {
    this.ctx.body = 'hello world'
  }
}

module.exports = HomeController