/**
 * Created by lilei on 2018/3/20.
 */
const util = require('./lib/util')

//生成菜单数据
let data = util.createComponents()
module.exports = {
    "getComponents": {
        type: 'POST',
        httpCode: 200,
        result: function (params) {
            return data
        }
    }
}