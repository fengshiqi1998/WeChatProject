const awyhttp = require('awyhttp');
var token = require('./get_access_token.js');

async function setMenu(menu_data) {
	tokenJs = await token();
	var create_menu_api = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${tokenJs.access_token}`;
	awyhttp.post(create_menu_api, {
  	data : menu_data,
    headers : {
    	'Content-Type'  : 'text/plain'
    }
  }).then(data => {
    console.log(data);
  }, err => {
    console.log(err);
  });
}

module.exports = setMenu;
