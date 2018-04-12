# SpaceJanitor

#### Space Janitor is a multiplayer text adventure game set on a space station. 4/12/18

#### By Ian Goodrich, Mike Albers, Sara Hamilton, and Hamza Naeem

## Current Functionality
* User logs in
* User profile is created
* Player stats including user name are displayed
* A scenario is presented
* There is a total of 30 rooms
* Each room has up to 3 different scenarios - for a total of about 90 different scenarios
* User has options to choose how to react
* User will be routed to different rooms with different scenarios depending on the choices made
* Multiple players can play the same game at the same time on different computers
* Choices made by each user will affect what other user(s) see

## Future Functionality
* A log describing choices and movements made by players will be used to keep players updated about the actions of other players
* More player stats including health and inventory
* Players can acquire items and save them in their inventory
* Ability to save a game and resume playing later
* Roving AI monster moving about the game and encountering players
* Definitive endings to the game
* Cap the total number of players in one instance of the game at 4
* Ability to create multiple instances of the game that can be played simultaneously

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* Node JS
* Angular
* Firebase

## Run the Application  

1. ### Visit Deployed Website
```
XXX-ENTER WEB ADDRESS HERE-XXX
```

2. ### Install and Host Locally

  clone the github respository
  ```
  $ git clone https://github.com/mikealbers/Space-Janitor
  ```
  #### Add Firebase Credentials
  Create an account and get credentials from Firebase. https://firebase.google.com/   
  Create a new project.  
  Give it the name of your choice.  
  Select your Country/Region.  
  Choose the add Firebase to your web app option.  
  Add a file named api-keys.ts in the src/app directory.  

  Add the following code to the file with your credentials in place of xxxx.
  ```
  export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
  ```
  move into the directory
  ```
  $ cd Space-Janitor
  ```
  install npm
  ```
  $ npm install
  ```
  run the program
  ```
  $ ng serve --open
  ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

*MIT License*

Copyright (c) 2018 **_Ian Goodrich, Mike Albers, Sara Hamilton, and Hamza Naeem_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
