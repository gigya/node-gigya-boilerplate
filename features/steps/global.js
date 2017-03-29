module.exports = function () {
  const url = 'http://127.0.0.1'

  this.Given(/^I open the url "([^"]*)"$/, (path) => {
    browser.url(url + path)
    console.log(`# Navigating to ${url + path}`)
    expect(browser.getUrl()).toEqual(url + path)
  })

  this.Then(/^I expect to see the text "([^"]*)"$/, (string) => {
    return pending
  })
}
