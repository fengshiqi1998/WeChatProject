var tokenApi = require('./get_access_token.js');// token
var msgApi = require('./msghandle.js');// 消息处理
var eventApi = require('./eventhandle.js');// 事件处理
var menuApi = require('./menu.js');// 菜单
var preApi = require('./prehandle.js');// 预处理
var imageLog = require('./imageLog.js');
const awy = require('awy');// awy框架
const parsexml = require('xml2js').parseString;

var ant = new awy();// awy实例化

// ant add
ant.add(async (rr, next) => {
	if (rr.weixinMsg.wxmsg.MsgType == 'image') {
        imageLog.list.push(rr.weixinMsg.wxmsg.MediaId);
    }
    await next(rr);
}, '/wx/talk');

ant.add(async (rr, next) => {
	console.log('promise');    
    await new Promise((rv, rj) => {
        parsexml(rr.req.GetBody(), {explicitArray : false}, (err, result) => {
            if (err) {
                rr.res.Body = '';
                rj(err);
            } else {
                var xmlmsg = result.xml;

                var data = {
                    touser      : xmlmsg.FromUserName,
                    fromuser    : xmlmsg.ToUserName,
                    msg         : '',
                    msgtime     : parseInt((new Date()).getTime() / 1000),
                    msgtype     : ''
                };

                rv({
                    wxmsg : xmlmsg,
                    retmsg : data
                });
            }
        });
    }).then((data) => {
        rr.weixinMsg = data;
    }, err=> {
        throw err;
    }).catch(err => {
        console.log(err);
    });

    await next(rr);

}, '/wx/talk');

// 服务器请求
ant.post('/wx/talk', async rr => {
    
    console.log(rr.req.GetBody());
    
    if (rr.weixinMsg !== undefined) {
        rr.res.Body = preApi.msgDispatch(
                        rr.weixinMsg.wxmsg,
                        rr.weixinMsg.retmsg
                      );
    } else {
        rr.res.Body = '';
    }

});

module.exports = ant;
