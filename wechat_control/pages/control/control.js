// pages/control/control.js
const app = getApp()

Page({

 
  data: {
    // Car control images
    "forwardBtn": "/res/forward.png",
    "leftBtn": "/res/left.png",
    "rightBtn": "/res/right.png",
    "backLeftBtn": "/res/back-left.png",
    "backRightBtn": "/res/back-right.png",
    "backBtn": "/res/backward.png",

    // Camera control images
    "upBtn": "/res/forward.png",
    "camLeftBtn": "/res/camLeft.png",
    "camRightBtn": "/res/camRight.png",
    "downBtn": "/res/backward.png",
    "resetBtn": "/res/reset.png"
  },

  carMove: function(event) {
    wx.request({
      url: this.data.postURL,
      data: event.currentTarget.dataset.direction,
      method: "POST",
      success: function(res){

      },
      fail: function(res){
        
      }
    })
  },

  carStop: function(event) {
    wx.request({
      url: this.data.postURL,
      data: "S",
      method: "POST",
      success: function (res) {

      },
      fail: function (res) {

      }
    })
  },

  camMove: function(event) {
    wx.request({
      url: this.data.postURL,
      data: event.currentTarget.dataset.direction,
      method: "POST",
      success: function (res) {

      },
      fail: function (res) {

      }
    })
  },

  onLoad: function (options) {
    //this.data.cameraURL = app.globalData.cameraURL
    this.setData({
      cameraURL: app.globalData.cameraURL,
      postURL: app.globalData.postURL
    })
    console.log(this.data.cameraURL)
    console.log("post url in control page: " + app.globalData.postURL)
  },

  
  onReady: function () {
  
  },

 
  onShow: function () {
    //console.log(wx.getSystemInfoSync().windowWidth)
    //console.log(wx.getSystemInfoSync().windowHeight)
  },


  onHide: function () {
  
  },


  onUnload: function () {
  
  },

 
  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})