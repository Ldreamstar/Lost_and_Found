// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["寻主", "寻物"],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    if (typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        select: 3
      })
    }

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})