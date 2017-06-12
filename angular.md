### Why Angular
- Building SPA
- Can be build in Moduler , Maintainable and testable way
- Rewritten with best practices
- Typescript is super set of java script > ES6 > ES5 - Can catch programming error in compile time.


### Architecture of App

#### Components
* Encapsulates the template, data & the behaviour of a view.  
  * Plan Typescript class which has properties and methods
  * These components are  completely decoupled with DOM. Angular use binding to update DOM. In view bind to properties and method to methods of components. ** This make Components unit testable.**

#### Directives
* Similar to components to work with DOM. To modify DOM elements and/or extend their behaviour. Does not have template or html markp for view. This often use used for add behaviour to existing DOM elements.

#### Routers
* Responsible for navigation based on url this figured what component to present to user.

#### Services
* It just a plan class that encapsulates any non user interface logic. Eg HTTP Call,  Logging, Data access , Business logic


#### Modules
##### imports
##### decalarations
##### exports
##### providers


npm install -g anguar-cli
ng new name
ng serve


#### Commands
npm install
npm run start

#### Angular Features
 * interpolation binding expression or 1-way binding - {{pageTitle}}
  * property binding [elementProperty]="classProperty"
 * interpolation binding expression or 2-way binding - [{ngModel}] = "bindValue"
 * Event binding (click) = "hideImage()"

#### References
* [angular/quickstart](https://github.com/angular/quickstart)
* [guide/setup](https://angular.io/docs/ts/latest/guide/setup.html)
* [QuickStart live-coding](https://angular.io/resources/live-examples/setup/ts/eplnkr.html)

