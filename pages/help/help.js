// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取屏幕高度
    const query = wx.createSelectorQuery();
    query.selectViewport().boundingClientRect();
    query.exec((res) => {
      const screenHeight = res[0].height;
      this.setData({
        componentHeight: screenHeight + 'px'
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  // 分享给好友
  onShareAppMessage: function () {
    return {
      title: '蜜悦儿玩具',
      path: '/pages/help/help',  // 分享的路径
      // imageUrl: '/assets/switch.png',  // 分享的图片
    }
  },
  // 分享到朋友圈
  onShareTimeline: function () {
    return {
      title: '蜜悦儿玩具',
      // query: 'key=value', // 可选，携带的参数
      // imageUrl: '/assets/switch.png',  // 可选，分享的图片
    }
  },
})