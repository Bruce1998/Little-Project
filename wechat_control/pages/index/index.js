//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    logo: "/res/rasp-logo.png",
    welcome: "这个是我们的时代",
    enterBtn: "进入",
    PromoteMsg: "Please enter the server address (eg: http://x.x.x.x:8080)",
    reqURL: ""
  },
  // 从输入框中获取用户输入的服务器地址信息
  getURL: function(e) {
    this.setData({
      reqURL: e.detail.value
    })
  },
  enterClicked: function(e) {
   
    console.log(this.data.reqURL)

    if (this.data.reqURL == '') {
      wx.showModal({
        title: '提示',
        content: '请先输入正确的服务器地址！',
      })
      return
    }

    
    wx.request({
      url: this.data.reqURL,
      success: function(res) {
      
        console.log(res.data.match(/url = \"(\S*)\"/)[1])
        console.log(res.data.match(/src=\"(\S*)\"/)[1])
        app.globalData.postURL = res.data.match(/url = \"(\S*)\"/)[1]
        app.globalData.cameraURL = res.data.match(/src=\"(\S*)\"/)[1]

       
        wx.navigateTo({
          url: '/pages/control/control',
        })
      },
      fail: function(res) {
        wx.showModal({
          title: '提示',
          content: '请检查输入的服务器地址！',
        })
      }
    })
  },

  playVideo: function(e) {
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },

  saveImage: function(e) {
    const query = wx.createSelectorQuery()
    query.select("#logo-id").boundingClientRect()
    query.exec(function(res) {
      console.log(res[0].src)
    })

    wx.saveImageToPhotosAlbum({
      filePath: this.data.logo,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})