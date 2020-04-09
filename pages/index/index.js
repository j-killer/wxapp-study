//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: [],
    hasUserInfo: false,
    isShow:true
  },
  onLoad: function (options) {
    console.log('onLoad 页面开始加载')
    this.userInfo();
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        console.log(data)
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          })
        } else {
          this.setData({
            isShow: true
          });
        }
      }
    })
    wx.getUserInfo({
      success: (data) => {
        console.log(data)
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  },
  handlegetUserinfo(data){
   console.log('用户点击',data)
   if(data.detail.rawData){
     this.getUserInfo();
   }
  }

  
})
