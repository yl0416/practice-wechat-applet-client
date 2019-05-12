import {hostName} from './config.js'

App({
    onLaunch(options) {
        console.log("onLaunch() called")
    },
    onShow(options) {
        console.log("onShow() called");
        wx.request({
            url:hostName+'echo',
            method:'POST',
            data:{
                value:"HI"
            },
            header:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success(res){
                if(res.statusCode === 200){
                    console.log(res);
                    wx.showToast({
                        title:res.data,
                        duration:2000
                    });
                }
                else{
                    console.log(res.statusCode)
                }
            }
        });
		wx.login({
			success:function(loginRes){
				if(loginRes.code){
					console.log(loginRes.code);
				}
			}
		})
    },
    onHide() {
        console.log("onHide() called")
    },
    onError(msg) {
        console.log(msg)
    }
})