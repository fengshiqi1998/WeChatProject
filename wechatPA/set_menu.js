const awyhttp = require('awyhttp');
var wxkey = require('./weixinkey.js');
// var tokenApi = require('./get_access_token.js');
var tokenApi = require('./weixinToken.js');

var appid = wxkey.appid;
var appsecret = wxkey.appsecret;

var token_api = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`;

var menu_data = {
    button : [
        {
            name : "科技",
            sub_button : [
                {
                    name : "Linux",
                    type : "view",
                    url  : "https://www.linux.org/"
                },
                {
                    name : "NodeDoc",
                    type : "view",
                    url  : "https://nodejs.org/dist/latest-v10.x/docs/api/"
                },
                {
                    name : "awy-use",
                    type : "view",
                    url  : "https://awy.linuslinux.com"
                },

            ]
        },
        {
            name : "发图",
            type : "pic_weixin",
            key  : "my-image"
        },
        {
            name : "功能",
            sub_button : [
                {
                    name : "关于我们",
                    type : "click",
                    key  : "about-us"
                },

            ]
        }
        
    ]
};
asyc function getTok() {
	return tokenApi.getToken();
}
getTok().then(ret => {
    var json_menu = JSON.stringify(menu_data);
    console.log(ret);
    var create_menu_api = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${ret.data}`;

    return awyhttp.post(create_menu_api, {
        data : json_menu,
        headers : {
            'Content-Type'  : 'text/plain'
        }
    }).then(data => {
        console.log(data);
    }, err => {
        console.log(err);
    });
});
