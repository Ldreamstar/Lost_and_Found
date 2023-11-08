Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['../../images/banner1.png', '../../images/banner2.png'],
    tabList: ['寻主', '寻物'],
    select: 0,
    list: [
      {
        image: "../../images/banner1.png",
        name: "身份证",
        region: "东校区",
        date: "5月20日",
        describe: "谁的校园卡！",
        publish_time: "2023年11月5日"
      },
      {
        image: "../../images/banner1.png",
        name: "身份证",
        region: "东校区",
        date: "5月20日",
        describe: "谁的校园卡！",
        publish_time: "2023年11月5日"
      },
      {
        image: "../../images/banner1.png",
        name: "身份证",
        region: "东校区",
        date: "5月20日",
        describe: "谁的校园卡！",
        publish_time: "2023年11月5日"
      }
    ]
  },

  toSearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  toDetail() {
    wx.navigateTo({
      url: '../infoDetail/infoDetail',
    })
  },

  selectTab(e) {
    console.log(e);
    const { id } = e.currentTarget.dataset;
    this.setData({
      select: id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        select: 0
      })
    }
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