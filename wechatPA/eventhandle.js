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
                return '';
                //return scanQrcode(xmsg, retmsg);

            default:
                return "";
        }

    }
}

module.exports = EventHandle;
