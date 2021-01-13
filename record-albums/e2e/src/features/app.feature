Feature: Go to homepage
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title "Carly's Record Collection"