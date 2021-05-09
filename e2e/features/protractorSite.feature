
Feature: Scenarios to automate Protractor webportal

    Scenario: Check the  navigation for navigation to Tutorial page
        When I hit the "Protractor" page URL
        Then I verify the "Protractor" page title and URL
        When I click on Tutorial page link "under_Quick_Start" and should get redirected to Tutorial page
        When I click on Tutorial page link "on_Home_Page" and should get redirected to Tutorial page
        When I click on Tutorial page link "under_Protractor_tests" and should get redirected to Tutorial page

    Scenario: Verify the redirection to Github and Protractor Twitter page
        When I hit the "Protractor" page URL
        Then I verify the "Protractor" page title and URL
        When I click on git button and I should get redirected to gitHub page
        When I click on twitter button and Twitter page should get opened in new tab











