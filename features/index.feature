Feature: Index
  Background: as a user i want to view the index page

  Scenario: As a user when I want to be directed to the index page when i visit the site
    Given I open the url "/"
    Then I expect to see the text "hello world"
