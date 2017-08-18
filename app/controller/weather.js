module.exports = app=>{
  class Weather extends app.Controller{
    async check(){
      const {ctx, service} = this
      const id = ctx.query.id
      const weatherData = await service.weather.check(id)
      await ctx.render('/weather/check.tpl',{weather: JSON.stringify(weatherData)})
    }
  }
  return Weather
}