Feature: Go to homepage

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title "Carly's Record Collection"
    Then I should see the following artists
        | artist            |
        | The Killers       |
        | Paramore          |
        | Three Days Grace  |