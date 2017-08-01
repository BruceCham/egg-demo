<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="news-view view">
      {% for item in list %}
        <div class="item">
          <a href="{{ item.url }}">{{ item.title + "  " + helper.relativeTime(item.time)}}</a>
        </div>
        <div class="item">
          <span>{{helper.relativeTime(item.time)}}</span>
        </div>
      {% endfor %}
    </div>
    <script src="/public/js/news.js"></script>  
  </body>
</html>