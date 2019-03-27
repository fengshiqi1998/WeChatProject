var upload = require('./upload_menu.js');

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
                    name : "awy",
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

var JSON_menu = JSON.stringify(menu_data);
upload(menu_data);
