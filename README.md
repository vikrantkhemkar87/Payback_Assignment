# Payback_Assignment

This is an assignment given by Payback. The Protractor documents can be found [here](https://www.protractortest.org/#/)

Let's start with the setup required to run the test on your mac machine:

### Install node on machine
  ```console
$ brew install node
```
or Install node by downloading from
 [here](https://nodejs.org/en/)

### Verify the node and npm installed successfully  
  ```console
$ node -v
```
  ```console
$ npm -v
```
### Install required libraries 
  ```console
$ cd Payback_Assignment
$ npm install
```
Check libraries downloaded in node_modules folder and package-lock.json file got created.

### Test execution
Default the scenario gets executed in headless manner. To execute:
  ```console
$ cd e2e
$ protractor cucumberConf.js
```
To run using chrome browser:
remove --headless option from the chromeOptions under cucumberConf.js 
 ```console
args: [ "--window-size=800,600" ]
```
then execute-
```console
$ protractor cucumberConf.js
```
