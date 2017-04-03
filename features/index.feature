Feature: Index
  Background: as a user I want to view the index page

  Scenario: As a user when I want to be directed to the index page when i visit the site
    Given I open the url "/"
    Then I should see the text "Hello World"

  Scenario: As a user I want to register with my email and password
    Given I open the url "/"

  Scenario: As a user I want to login with Facebook and access the account i just registered
    Given I open the url "/"

  Scenario: As a user when I enter the wrong password i should see a notification
    Given I open the url "/"

  Scenario: As a user I want to delete my account
    Given I open the url "/"
