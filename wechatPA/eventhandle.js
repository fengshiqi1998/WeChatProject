var formatTpl = require('./formatTpl.js').formatTpl;

var EventHandle = {
    eventMsgHandle : function(wxmsg, retmsg) {
        switch (wxmsg.Event) {
            case 'LOCATION':
                //console.log(xmsg);
                retmsg.msg = `Latitude: ${wxmsg.Latitude}\nLongitude: ${wxmsg.Longitude}\n`;
                retmsg.msgtype = 'text';
                return formatTpl(retmsg);

            case 'subscribe':
								if(wxmsg.EventKey !== undefined) {
										console.log('用户关注，场景值：', wxmsg.EventKey);
								}
                console.log('User subscribe, OpenID:', wxmsg.FromUserName);
                retmsg.msg = '你好，欢迎关注本公众号，这是一个教学用的测试号';
                retmsg.msgtype = 'text';
                // regUserOpenID(wxmsg.FromUserName);
                return formatTpl(retmsg);

            case 'unsubscribe':
                console.log(`取消关注：${wxmsg.FromUserName}`);
                // setUserUnsubscribe(wxmsg.FromUserName);
                return ;

            case 'CLICK':
                return clickKeyMsg(wxmsg, retmsg);

            case 'VIEW':
                return viewKeyMsg(wxmsg, retmsg);

            case 'SCAN':
                console.log('用户扫码，key：', wxmsg.EventKey);
								retmsg.msg = wxmsg.EventKey;
								retmsg.msgtype = 'text';
								return formatTpl(retmsg);
                //return scanQrcode(xmsg, retmsg);

            default:
                return "";
        }

    }
}

function clickKeyMsg(wxmsg, retmsg) {
    if (wxmsg.EventKey == 'about-us') {
        retmsg.msg = `我们是奋斗的程序员`;
        retmsg.msgtype = 'text';
        return formatTpl(retmsg);
    } else {
        return "success";
    }
}

function viewKeyMsg(wxmsg, retmsg) {
    console.log(wxmsg.EventKey);
}


module.exports = EventHandle;
