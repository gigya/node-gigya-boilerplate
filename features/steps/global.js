// http://webdriver.io/api.html

module.exports = function () {
  const url = `${process.env.TEST_URL}:${process.env.PORT || process.env.DEFAULT_PORT}`

  this.Given(/^I open the url "([^"]*)"$/, (path) => {
    browser.url(url + path)
    console.log(`# Navigating to ${url + path}`)
    expect(browser.getUrl()).toEqual(url + path)
  })

  this.Then(/^I should see the "([^"]*)" button$/, function (selector) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  })
}
