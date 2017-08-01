module.exports = app => {
  app.get('/', app.controller.home.index)

  app.post('createPost', '/api/posts', app.controller.post.create )

  app.get('/news', app.controller.news.list)
}