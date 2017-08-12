# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

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
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add pug template

- **Path**: `node_modules/@angular/cli/models/webpack-configs/common.js`
- **\*Add rules:** *Please re-add the rule when node_modules changes !!!*

```js
module: {
    rules: [
        {
            test: /\.pug$/,
            use: ['raw-loader', 'pug-html-loader']

            // https://github.com/angular/angular-cli/issues/1886#issuecomment-281332399
            // loader: "apply-loader!pug-loader?self"
        }
    ]
}
```

### Pug template compilation error

> angular template reference variables

```pug
//- error
input(#heroName)
//- ok
<input #heroName>
//- ok
<input ref-heroName>
```

![ref var error](./example/img/ref-var-err.png)

<!-- https://hackernoon.com/using-pug-jade-with-angular-with-cli-5592b7ee24e6  -->

## Build (**prod**)

```bash
ng build --prod
```