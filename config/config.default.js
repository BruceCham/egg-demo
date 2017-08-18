exports.keys = 'myCookieSafeStrings'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

exports.weather = {
  serverUrl: 'http://www.weather.com.cn/data/sk'
}

exports.middleware = ['robot']

exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i
  ]
}