var pageObject = {
	openSetting : function(e) {
		wx.openSetting();
	},

	getInfo:function(e){
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