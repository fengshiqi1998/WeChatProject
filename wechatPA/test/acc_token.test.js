//var tokenApi = require('../get_access_token.js');
var tokenApi = require('../weixinToken.js');
async function getTok() {
	var token = await tokenApi.getToken();
console.log(token);
}
