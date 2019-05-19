var pageObject = {
	openSetting : function(e) {
		wx.openSetting();
	},

	getInfo:function(e){
		wx.login({
			success(res){
				console.log(res);
			}
		})
		wx.getUserInfo({
			success:function(res){
				console.log(res.userInfo);
				wx.showToast({
					title: res.userInfo.nickName,
					icon:"none"
				})
			}
		})
	}
}

Page(pageObject);