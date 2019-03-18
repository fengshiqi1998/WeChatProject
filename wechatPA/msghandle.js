var formatTpl = require('./formatTpl.js').formatTpl;
var imageLog = require('./imageLog.js');

var MsgHandle = {
	userMsgHandle : function (wxmsg, retmsg) {
	    if(wxmsg.MsgType == 'text') {
			if(wxmsg.Content == 'help' || /[?|？]/.test(wxmsg.Content)) {
		    	retmsg.msg = '这是一个测试消息';
			    retmsg.msgtype = 'text';
			    return formatTpl(retmsg);
			} else if(wxmsg.Content == 'hello' || wxmsg.Content == '你好') {
			    retmsg.msg = '你好，你可以输入一些关键字测试消息回复，输入help/?获取帮助';
			    retmsg.msgtype = 'text';
		    	return formatTpl(retmsg);
			} else if(/我是/.test(wxmsg.Content)) {
			    retmsg.msg = '最喜欢你了！';
		    	retmsg.msgtype = 'text';
			    return formatTpl(retmsg);
			} else if(wxmsg.Content == '我的图片') {
				var img = imageLog.randImage();
				if( img === null) {
					retmsg.msg = '没有图片';
					retmsg.msgtype = 'text';
					return formatTpl(retmsg);
				} else {
					retmsg.msg = img;
					retmsg.msgtype = 'image';
					return formatTpl(retmsg);
				}
			} else {
			    retmsg.msg = wxmsg.Content;
		    	retmsg.msgtype = wxmsg.MsgType;
			    return formatTpl(retmsg);
	    	}
		}
	    switch(wxmsg.MsgType) {
	        case 'text':
	            retmsg.msg = wxmsg.Content;
	            break;
	        case 'image':
	            retmsg.msg = wxmsg.MediaId;
	            break;
	        case 'voice':
	            retmsg.msg = wxmsg.MediaId;
	            break;

	        default:
	            retmsg.msg = '不支持的消息类型';
	            retmsg.msgtype = 'text';
	    }
	    if (retmsg.msgtype === '') {
	        retmsg.msgtype = wxmsg.MsgType;
	    }
	    return formatTpl(retmsg);
	}
	//help : function() {
	//	return `这是一个消息回复测试程序，会把消息原样返回，但是目前不支持视频音频类型的消息`;
	//}
}

module.exports = MsgHandle;
