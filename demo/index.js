// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleTap() {
    this.setData({
      showMask: true
    })
  },
  close() {
    this.setData({
      showMask: false
    })
  },
  noop() {

  }
})