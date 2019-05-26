const util = require('util.js');
App({
    globalData: {
        userID: undefined,
        userName: undefined,
        hostName:'https://iamazing.cn:3005/'
    },

    onLaunch(options) {
        util.loadUserIDAndUserName(this);
    }
});