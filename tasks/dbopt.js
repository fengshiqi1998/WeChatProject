const mysql = create('mysql');
const cofig = require('./config.json');

var db = mysql.createPool(config);

module.exports = {
	selectToken : function() {
		db.query('select * from token', (err, result) => {
			if(err) {
				console.log(err);
			}
			return result;
		})
	}
	updateToken : function(token) {
		db.query('update token set access_token = ?', [token], (err, result) {
			if(err) console.log(err);
			return result;
		}
	}
}

