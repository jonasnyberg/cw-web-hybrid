# CwWebHybrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

# NOTES

## STRUCTURE
```
src/
  app/
		shared/
		tasks/
			tasks.component.ts | less | html 
			tasks.module.ts
			tasks.routing.ts *Guide says: tasks-routing.ts
      task.service.ts
      task.model.ts
			task-list/
				task-list.component.ts | less | html
				task-cell/
					task-cell.component.ts | less | html
      task/
        ?
		ng1/
			hello1/
        ...
			app.js
	assets/
		ng1
			css
			img
		css

		img	
	index.html
```	

## TO LOOK AT
  - font prefix ci
	- figure out less structure, to minimize copy/paste's. ex. cell component less...
	- hash policy investigate
	- avoid insideInspector with more granual architechture
  - batching
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
