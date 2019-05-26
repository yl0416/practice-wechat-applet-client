const app = getApp();

Page({
    getUserInfo:function(event){
        if(event.detail.userInfo){
            const userName = event.detail.userInfo.userName;
            app.globalData.userName = userName;
            wx.setStorageSync("userName", userName);
            console.log("Get userName: "+userName);
            wx.switchTab({
                url: '/pages/home/home',
            });
        }
    }
})