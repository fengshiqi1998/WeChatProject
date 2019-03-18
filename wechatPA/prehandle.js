var msgApi = require('./msghandle.js');// 消息处理
var eventApi = require('./eventhandle.js');// 事件处理

var PreHandle = {
	msgDispatch : function(wxmsg, retmsg) {
	    if (wxmsg.MsgType === 'event') {
			console.log('eventHandle');
	        return eventApi.eventMsgHandle(wxmsg, retmsg);
	    } else {
			console.log('msgHandle');
	        return msgApi.userMsgHandle(wxmsg, retmsg);
	    }
	}
}

module.exports = PreHandle;
