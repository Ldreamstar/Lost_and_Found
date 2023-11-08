// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 展示的两列数据
    multiArray: [
      ['卡片证件类', '生活用品类', '数码产品类', '其他'], 
      ['身份证', '校园卡', '学生证', '公交卡', '银行卡', '其他']
    ],
    // 第二列的储备数据源
    pickerList: [
      ['身份证', '校园卡', '学生证', '公交卡', '银行卡', '其他'],
      ['水杯', '雨伞', '钥匙', '其他'],
      ['手机', 'U盘/硬盘', '平板电脑', '手写笔', '耳机', '其他'],
      ['其他']
    ],
    multiIndex: [0, 0],
    select: false,
    name: '',
    date: '',
    region: '',
    phone: '',
    desc: '',
    imgList: [],
    type: ''
  },

  backPage() {
    // wx.navigateBack();
    wx.switchTab({
      url: '../index/index',
    })
  },

  selectType(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      type: id
    })
  },

  deleteImg(e) {
    let { index } = e.currentTarget.dataset;
    let { imgList } = this.data;
    imgList.splice(index, 1);
    this.setData({
      imgList
    })
  },

  uploadImg() {
    let { imgList } = this.data;
    wx.chooseMedia({
      count: 9 - imgList.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const { tempFiles } = res;
        tempFiles.forEach(item => {
          imgList.unshift(item.tempFilePath)
        })

        this.setData({
          imgList
        })
      }
    })
  },

  deleteDesc() {
    this.setData({
      desc: ''
    })
  },

  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },

  getDate(e) {
    this.setData({
      date: e.detail.value
    })
  },

  getRegion(e) {
    this.setData({
      region: e.detail.value
    })
  },

  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  getDesc(e) {
    // 如果不希望去掉多余空格，就去掉.trim()
    this.setData({
      desc: e.detail.value.trim()
    })
  },

  closeSelect() {
    this.setData({
      select: false,
      multiIndex: [0, 0],
    })
  },

  bindMultiPickerChange(e) {
    this.setData({
      select: true
    })
  },

  bindMultiPickerColumnChange(e) {
    let { column, value } = e.detail;
    let data = this.data;
    let { multiArray, pickerList } = this.data;
    if (column === 0) {
      // 替换展示的数据源
      multiArray[1] = pickerList[value];
    }
    data.multiArray = multiArray;
    data.multiIndex[column] = value;
    this.setData(data);
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