// pages/fetch/fetch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    tech_content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(options.content);
    this.setData({
      title: options.content
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let requrl = 'https://fsq.masure.cn/ask?kwd=' + this.data.title;
    let textcontent = '';
    var that = this;
    wx.request({
      url: requrl,
      data: {},
      header: {
        "Content-Type": "application/json" // 默认值
      },
      success(res) {
        console.log(res);
        if(res.data.status != 'ok') {
          that.setData({
            tech_content: res.data.errmsg
          });
          return ;
        }
        for(let i=0;i<res.data.data.length;i++) {
          textcontent += res.data.data[i];
        }
        that.setData({
          tech_content: textcontent
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})