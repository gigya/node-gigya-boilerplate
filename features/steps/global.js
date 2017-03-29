// http://webdriver.io/api.html

module.exports = function () {
  const url = 'http://127.0.0.1:3000'

  this.Given(/^I open the url "([^"]*)"$/, (path) => {
    browser.url(url + path)
    console.log(`# Navigating to ${url + path}`)
    expect(browser.getUrl()).toEqual(url + path)
  })
}
