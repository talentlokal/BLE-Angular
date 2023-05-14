# BLEAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Change color theme 

Go to [palette generator](http://mcg.mbitson.com/) and choose the colors you like.
Copy the Angular JS 2 theme to _palette.scss.


## Deploy to GitHub Pages
ng build --base-href "https://talentlokal.github.io/BLE-Angular/"

cd dist/ble-angular

git add .

git commit -m "Initial commit"

git checkout -b gh-pages

git push

Result can be seen here https://talentlokal.github.io/BLE-Angular/home
But be aware that the gh-pages branch is not the main branch and therefore not always up to date.
