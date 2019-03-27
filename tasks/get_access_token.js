const wxkey = require('./wechatkey.js');
const awyhttp = require('awyhttp');
var dbopt = require('dbopt.js');
//const fs = require('fs');

var token_api = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxkey.appid}&secret=${wxkey.appsecret}`;

//var token_path = '/tmp/fsq_token.save';

module.exports = async function getToken() {
		var token = dbopt.selectToken();
		if(token && (new Date()).getTime() - token.time < 2) {
			return {
				status: true,
				data: token.key
			};
		}
		awyhttp.get(token_api).then(data => {
			dbopt.updateToken(data.access_token);
			return {
				status: true,
				data: data.access_token
			}
		}, err => {
			throw err;
	});
}
