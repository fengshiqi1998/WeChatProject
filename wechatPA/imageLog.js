var imageLog =  {
    list: [],
    randImage: function() {
        if (this.list.length == 0) {
            return null;
        }
        var ind = Math.random() * 1024;
        ind = parseInt(ind % this.list.length);
        console.log(ind);
        return this.list[ ind ];
    }
};

module.exports = imageLog;
