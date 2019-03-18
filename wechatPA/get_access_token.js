const awyhttp = require('awyhttp');
const wxkey = require('./weixinkey.js');

var tokenApi = {
	getToken: function() {
		var token_api = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxkey.appid}&secret=${wxkey.appsecret}`;
		awyhttp.get(token_api).then(data => {
		    console.log(data);
		    return data;
		}, err => {
		    console.log(err);
		    return err;
		});
	}
}
module.exports = tokenApi;
