// http://webdriver.io/api.html
import { server } from '../../src/index'

module.exports = function () {
  const url = `${process.env.TEST_URL}:${process.env.PORT || process.env.DEFAULT_PORT}`

  this.Before(() => {
    server.listen()
  })

  this.After(() => {
    server.close()
  })

  this.Given(/^I open the url "([^"]*)"$/, (path) => {
    browser.url(url + path)
    console.log(`# Navigating to ${url + path}`)
    expect(browser.getUrl()).toEqual(url + path)
  })

  this.Then(/^I should see the text "([^"]*)" inside of "([^"]*)"$/, function (text, selector) {
    expect(browser.getText(selector)).toEqual(text)
  })

  this.Then(/^I should see the "([^"]*)" button with the ID "([^"]*)"$/, function (text, selector) {
    expect(browser.getText(selector)).toEqual(text)
  })
}
