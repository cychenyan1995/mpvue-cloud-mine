const cloud = require('wx-server-sdk')
exports.main = (event, context) => {
    const wxContent = cloud.getWXContext()
    return {
        event,
        openid: wxContent.OPENID,
        appid: wxContent.APPID,
        unionid: wxContent.UNIONID
    }
}