var Menu = {
	clickKeyMsg : function(wxmsg, retmsg) {
	    if (wxmsg.EventKey == 'about-us') {
	        retmsg.msg = `我们是奋斗的程序员`;
	        retmsg.msgtype = 'text';
	        return formatTpl(retmsg);
	    } else {
	        return "success";
	    }
	},
	viewKeyMsg ： function(wxmsg, retmsg) {
    		console.log(wxmsg.EventKey);
	}
}

module.exports = Menu;
