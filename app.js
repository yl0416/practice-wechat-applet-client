import {hostName} from './config.js'

App({
    globalData:{
      userID:undefined  
    },
    onLaunch(options) {
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userInfo']) {
                    wx.showToast({
                        title: '请授权！',
                        icon: 'none'
                    });
                    wx.switchTab({
                      url: '/pages/me/me'
                    })
                }
            }
        });
    },
    onShow(options) {
        const that = this;
        wx.getStorage({
            key: 'userID',
            success: res => {
                this.globalData.userID = res.data;
                console.log("userID: " + this.globalData.userID);
            },

            fail: res => {
                wx.login({
                    success: function (loginRes) {
                        if (loginRes.code) {
                            wx.getUserInfo({
                                success(res) {
                                    wx.request({
                                        url: hostName + 'register?code=' + loginRes.code + '&userName=' + res.userInfo.nickName,
                                        success(res) {
                                            if (res.statusCode === 200) {
                                                wx.setStorage({
                                                    key: "userID",
                                                    data: res.data
                                                });
                                                that.globalData.userID = res.data;
                                                console.log("userID: " + that.globalData.userID);
                                            } else {
                                                console.log(res.statusCode);
                                            }
                                        }
                                    });

                                }
                            });
                        } else {
                            wx.showToast({
                                title: "获取code失败：" + res.errorMsg,
                                duration: 2000,
                                icon:"none"
                            });
                        }
                    }
                })
            }
        });
    },

    onHide() {

    }
    ,
    onError(msg) {
        console.log(msg)
    }
})
;