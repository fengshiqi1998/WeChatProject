var formatTpl = {
	formatTpl : function(data) {
		console.log('data: ',data);
	    //尽管只处理文本消息，这样写的目的是为了后续添加更多的消息类型。
	    switch(data.msgtype) {
	        case 'text':
	            return `
	                <xml>
	                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
	                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
	                    <MsgType><![CDATA[text]]></MsgType>
	                    <Content><![CDATA[${data.msg}]]></Content>
	                    <CreateTime>${data.msgtime}</CreateTime>
	                </xml>
	            `;

	        case 'image':
	            return `
	                <xml>
	                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
	                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
	                    <MsgType><![CDATA[image]]></MsgType>
	                    <Image>
	                        <MediaId><![CDATA[${data.msg}]]></MediaId>
	                    </Image>
	                    <CreateTime>${data.msgtime}</CreateTime>
	                </xml>
	            `;
	        
	        case 'voice':
	            return `
	                <xml>
	                    <ToUserName><![CDATA[${data.touser}]]></ToUserName>
	                    <FromUserName><![CDATA[${data.fromuser}]]></FromUserName>
	                    <MsgType><![CDATA[voice]]></MsgType>
	                    <Voice>
	                        <MediaId><![CDATA[${data.msg}]]></MediaId>
	                    </Voice>
	                    <CreateTime>${data.msgtime}</CreateTime>
	                </xml>
	            `;
	        default: 
	            return '';
	    }
	}
}

module.exports = formatTpl;
