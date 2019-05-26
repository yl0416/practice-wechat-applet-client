module.exports = {
    loadUserIDAndUserName: function(app){
        const that = app;
        that.globalData.userID = wx.getStorageSync('userID');
        that.globalData.userName = wx.getStorageSync('userName');

        if (that.globalData.userName) {
            console.log("从存储中读取出userName: " + that.globalData.userName);
        }
        else{
            console.log("跳转到授权页面")
            wx.redirectTo({
                url: 'pages/auth/auth',
            });
        }

        if (that.globalData.userID) {
            console.log("从存储中读取出userID: " + that.globalData.userID);
        }else{
            console.log("从服务器端重新获取userID");
            wx.login({
                success: function (loginRes) {
                    if (loginRes.code) {
                        wx.request({
                            url: that.globalData.hostName + 'user/userID?code=' + loginRes.code,
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

    }
}
