// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/megumi.jpg",
    searchContent: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getBatteryInfo({
      success: res => {
        this.setData({
          batteryInfo: res.level
        });
      }
    });

    wx.getSystemInfo({
      success: res => {
        this.setData({
          sys: res
        });
      }
    })
  },

  /**
  * 自定义函数
  */
  goSearch: function () {
    console.log(this.data.searchContent);
    // console.log(this.data.searchContent);
    let childPages = this.data.searchContent;
    wx.navigateTo({
      url: `/pages/search/search?content=${childPages}`,
    });

    this.setData({
      searchContent: ''
    });
  },

  inputSearch: function(e) {
    //console.log(e.detail.value);
    this.setData({
      searchContent: e.detail.value
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

