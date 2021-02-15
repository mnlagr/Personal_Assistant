# Personal-Assistant (with more features)

Personal-Assistant is a web based application for busy professionals of modern day. Here is a functional prototype for the same. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.
* This is a refined prototype with more new features


# Run Project Locally
* Assumes local installation of [Node.js and NPM](https://www.techomoro.com/install-node-js-and-npm-on-windows-10/#:~:text=Install%20Node.js%20and%20NPM%20on%20Windows%2010%201,Choose%20the%20installation%20directory.%20...%20More%20items...) 
* Install Angular CLI --> `npm install -g @angular/cli`
* Clone or fork this repository.
* Open the Personal-Assistant project using VS code or any other editor.
* Run  following commands in terminal install all the dependencies
  * `npm install`
  * `npm i ngx-smooth-dnd`
* Run `ng serve` in terminal to run the project on localhost.

# Technologies Used
* Angular Framework
* HTML
* CSS
* TypeScript

# How it works
* It provides 3 features.
* Plan Your Day: Allows user to add their tasks against appropriate time. Get a proper visual of their whole day and plan accordingly
* Prioritize Tasks: Drop the less urgent tasks here and rearrange based on priority (drag-drop to do this)
* Heath Check: Keep a check of your health routine by checking the tasks

# Future Work
* Refine "plan your day" module to block only 30 or 20 minute slots. Can generalize the module to hold data about a month rather than a day.
* Submit button for heath tracker feature. On Clicking submit user gets a suggestion based on his tasks done.
* Connecting the three modules(features)
  * Less important tasks can move from "plan your day" to "prioritize list" 
  * Un checked parts of "health tracker" go to "prioritize list".
  * Prioritize the task using "prioritize list" and put important tasks back to "plan your day".



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
