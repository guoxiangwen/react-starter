// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    '弹幕测试': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        // const devServer = browser.globals.devServerURL

        browser
            .url("http://www.panda.tv/all")
            .waitForElementVisible(".pd-sc-container", 3000)
            .maximizeWindow()
            .setWindowPosition(0, 0)            
            .resizeWindow(1280, 800)
            //进入熊猫星秀tab
            .click("ul.list-header-hots > li:nth-child(3) > a", function (res) {
                console.log(res)
            })
            //点击登录
            .click(".sidebar-userinfo-login-btn", function (res) {})
            //login
            .setValue('#ruc_dialog_container input[type=text].ruc-input-login-name', '15008187156')
            .setValue('#ruc_dialog_container input[type=password].ruc-input-login-passport', ['guoxiangwen', browser.Keys.ENTER])

            .waitForElementVisible('ul#later-play-list > li:first-child > a >div.video-cover', 3000)
            .pause(3000)
            //进入第一个房间
            .click("ul#later-play-list > li:first-child > a >div.video-cover", function (res) {
                console.log(res);
            })
            //刷新
            .refresh()
            .setValue('textarea.room-chat-texta', '~~~~~~主播跳支舞~~~~~~')
            .click('div.room-chat-send',function(){})
            
            // .assert.elementPresent('.app-container')
            // .assert.containsText('h1', 'Welcome to Your Vue.js App')
            // .assert.elementCount('section', 6)
            // .end()
    }
}