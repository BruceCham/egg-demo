module.exports = app=>{
  class weatherService extends app.Service{
    async check(id=101020100){
      const {serverUrl} = this.app.config.weather
      const weatherInfo = await this.ctx.curl(`${serverUrl}/${id}.html`)
      let res 
      // 获取buffer字段，转换为 String字符，然后解析字符串为对象
      if(weatherInfo && weatherInfo.res && weatherInfo.res.data){
        res = JSON.parse( weatherInfo.res.data.toString() )
      }else{
        res = {
          status: -1,
          message: '请求报错'
        }
      }
      return res
    }
  }
  return weatherService
}