import {hostName} from './config.js'

App({
    globalData: {
        userID: undefined,
        userName: undefined
    },
    onLaunch(options) {
        const that = this;
        wx.getUserInfo({
            success(res) {
                that.globalData.userName = res.userInfo.nickName;
            },
            fail(res) {
                console.log("用户不同意授权！");
            }
        });
    },
    onShow(options) {
        const that = this;
        wx.getStorage({ // 从存储中获取code，如果不存在，则向服务器端发送请求获取
            key: 'userID',
            success: res => {
                this.globalData.userID = res.data;
                console.log("userID: " + this.globalData.userID);
            },
            fail: res => {
                wx.login({
                    success: function (loginRes) {
                        if (loginRes.code) {
                            wx.request({
                                url: hostName + 'register?code=' + loginRes.code + '&userName=' + that.globalData.userName,
                                success(res) {
                                    if (res.statusCode === 200) {
                                        wx.setStorage({
                                            key: "userID",
                                            data: res.data
                                        });
                                        that.globalData.userID = res.data;
                                        console.log("userID: " + that.globalData.userID);
                                    } else {
                                        console.error(res.statusCode);
                                    }
                                }
                            });
                        } else {
                            console.error("获取code失败：" + res.errorMsg);
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