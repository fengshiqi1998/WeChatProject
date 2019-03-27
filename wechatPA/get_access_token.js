const awyhttp = require('awyhttp');
const fs = require('fs');
var wxkey = require('./weixinkey.js');

const token_path = '/tmp/fsq_token.save';

var tokenApi = {
	token_api: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxkey.appid}&secret=${wxkey.appsecret}`,
	getToken: function() {
		return new Promise((rv) => {
			fs.exists(token_path, (exists) => {
				if(exists) {
					fs.readFile(token_path, {encoding:'utf8'}, (err, data) => {
						console.log('it has read');
						if (err) {
							console.log('err');
                    		rv(null);
                		} else if(!data) {
                			console.log('data is null');
                			rv(null);
                		} else {
                			console.log('data:', data);
	                    	var t = JSON.parse(data);
	                    	console.log('t:',t);
		                    var now_tm = (new Date()).getTime();
		                    if (parseInt(t.get_time) + parseInt(t.expires_in) > parseInt(now_tm/1000)) {
		                        rv(t.access_token);
		                    } else {
		                        rv(null);
		                    }
                		}
					});
				} else {
					rv(null);
				}
			});
		}).then(data => {
			console.log('data:',data);
			if(data) {
				console.log('data has been ..');
				return {
                    status : true,
                    data : data
                };
			}
			console.log('has been data ...');
			return awyhttp.get(this.token_api)
            .then(data => {
            	console.log('awyhttp has been')
                var ret = JSON.parse(data);
                if (ret.errcode === undefined) {
                    ret.get_time = parseInt((new Date()).getTime()/1000);
                    fs.writeFile(token_path, 
                        JSON.stringify(ret),
                        	{encoding:'utf8'},(err) => {
                        }
                    );
                    
                    return {
                        status : true,
                        data : ret.access_token
                    };
                } else {
                    return {
                        status : false,
                        data   : data
                    };
                }
            }, err => {
                throw err;
            });
		}).catch(reason => {
			console.log(reason);
		});
		
	}
}

module.exports = tokenApi;
