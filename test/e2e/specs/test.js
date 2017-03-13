// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    '主页测试': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        // const devServer = browser.globals.devServerURL

        browser
            .url("http://localhost:3001")
            .waitForElementVisible('section', 2000)
            .click("#app .app-item", function(res) {})
            // .assert.elementPresent('.app-container')
            // .assert.containsText('h1', 'Welcome to Your Vue.js App')
            // .assert.elementCount('section', 6)
            // .end()
    }
}