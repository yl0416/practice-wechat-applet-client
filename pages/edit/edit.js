// pages/course/course.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result:'',
    state:''


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('App onLoad');


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('App onReady');
  
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('App onShow');
  

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('App onHide');
  

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('App onUnload');

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('下拉动作');

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log('到底了');

    },
    
    /**
     * 页面滚动
     */
    onPageScroll:function(options){
        console.log('options');
    }

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log('用户点击右上角分享');
        return{
            title:'tst页面',
            path:'/page/tst?id=123'
        }
    }
})
