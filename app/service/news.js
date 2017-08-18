const Egg = require('egg')

class NewsService extends Egg.Service{
  async list(page=1){
    const {serverUrl, pageSize} = this.app.config.news
    const {data: idList} = await this.ctx.curl(`${serverUrl}/topstories.json`,{
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page-1)}"`,
        endAt: `"${pageSize * page -1}"`
      },
      dataType: 'json'
    })
  
    const newsList = await Object.keys(idList).map(key=>{
      const url = `${serverUrl}/item/${idList[key]}.json`
      return this.ctx.curl( url, {dataType: 'json'} )
    })
    
    return newsList.map(res=>res.data)
  }
}

module.exports = NewsService