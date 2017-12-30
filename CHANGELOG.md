# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).  
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Debug

## [0.1.55]
### Removed
- Date format

## [0.1.54]
### Added
- More logs
- New predefined and constant format

## [0.1.53]
### Removed
- Date format

## [0.1.52]
### Added
- More calls for calc +21 days

### Removed
- debugger

## [0.1.51]
### Added
- debugger

## [0.1.50]
### Added
- Utils file
- SafeApply after window click

## [0.1.49]
### Changed
- Window click try to hide the datepicker

## [0.1.48]
### Fixed
- mouseenter

## [0.1.47]
### Added
- Window click handle
- Mouse hover stuff

## [0.1.46]
### Removed
- ng-click from datepicker

## [0.1.45]
### Removed
- ng-click from input

## [0.1.44]
### Added
- Input selected class when the datepicker is down

### Changed
- Styles
- Added more functions to focus, click and enter the input

## [0.1.43]
### Changed
- Execute the toggle of the datepicker on focus on the input

## [0.1.42]
### Added
- `main` controller watcher to calc the date

## [0.1.41]
### Added
- Default date

### Removed
- `main` controller watcher

## [0.1.40]
### Added
- `ng-cloak` to root
- `ng-strict-di` to root
- New config `compileProvider`

### Changed
- Styles

## [0.1.39]
### Added
- New service `keyboard`
- New directive `onEnter`

## [0.1.38]
### Fixed
- Added missing `date` service include

## [0.1.37]
### Fixed
- Datepicker toggle

## [0.1.36]
### Added
- `moment-ferie-fr` as bower dependency
- New service `date` to manage the dates

### Changed
- `main` controller method to calculate at +21 days

## [0.1.35]
### Changed
- `main` controller

## [0.1.34]
### Changed
- Styles

## [0.1.33]
### Changed
- Watcher

## [0.1.32]
### Changed
- Styles

## [0.1.31]
### Added
- New fn to log fn call
- New fn for `main` controller to calc the date at +21 days

### Changed
- Styles

## [0.1.30]
### Changed
- Raw the data for datepicker data-set attr
- Added logs
- Styles

## [0.1.29]
### Added
- Link to `fr` angular-i18n script (datepicker with async loading does not works)

## [0.1.28]
### Changed
- Undo `fr-fr` i18n link

## [0.1.27]
### Removed
- `interpolateProvider` which is now useless
- `fr-fr` i18n link

## [0.1.26]
### Fixed
- Wrong language

## [0.1.25]
### Fixed
- Angular interpolation

## [0.1.24]
### Fixed
- Wrong language

## [0.1.23]
### Fixed
- Removed `angular` filter

## [0.1.22]
### Added
- New config `interpolateProvider` to configure Angular interpolation syntax

### Changed
- Datepicker styles

## [0.1.21]
### Added
- Datepicker custom format

## [0.1.20]
### Changed
- Datepicker styles
- Lang

## [0.1.19]
### Fixed
- Added missing files in the default.html file

## [0.1.18]
### Fixed
- Error with injector in the `main` controller

## [0.1.17]
### Added
- New constant `app` to configure the app globally
- New service `log` to print logs

### Changed
- Datepicker styles
- The controller `main` will print a log on init

## [0.1.16]
### Fixed
- Wrong path for the `tmhDynamicLocale` config

## [0.1.15]
### Added
- New constant `vendors` to inject `moment` as constant

### Changed
- `tmhDynamicLocale` config to add a default language as `fr`

## [0.1.14]
### Added
- New initiator `languages` to set up the language as `fr`
- New config `tmhDynamicLocale` to configure the path for languages

### Changed
- Datepicker styles

## [0.1.13]
### Changed
- Datepicker styles
- Datepicker previous btn
- Datepicker next btn

## [0.1.12]
### Changed
- Datepicker styles
- Datepicker previous and next title 
- Datepicker previous btn

### Fixed
- The first child of the datepicker will no longer have a reduced margin-top

## [0.1.11]
### Changed
- Favicon
- The datepicker is now append to the input
- Config to add `jekyll-angular` plugin
- Refactored static links in default.html

## [0.1.10]
### Changed
- The datepicker is now append to body
- The datepicker now start as monday for the first day of the week
- Added span to wrap the footer text
- Refactored readme html
- The datepicker will now update the model as the user change the date in the input

## [0.1.9]
### Changed
- Main styles
- Readme
- default.html

## [0.1.8]
### Changed
- The release will now also edit the bower package version
- Readme
- The main controller will now watch the initial date changes
- When the initial date is on error, a message will be display

## [0.1.7]
### Added
- New gem to allow jeckyll working with Angular

### Changed
- Main styles
- Readme
- default.html

## [0.1.6]
### Changed
- Main styles
- Readme
- default.html

## [0.1.5]
### Added
- Angular app
- Angular main controller
- Generator-cozen-angular config

### Changed
- Main styles
- Readme

## [0.1.4]
### Added
- Bower dependencies

### Changed
- Main styles

## [0.1.3]
### Fixed
- Wrong folder for the _config file

## [0.1.2]
### Changed
- node_modules files are now ignored by git
- Main styles
- Font family
- Favicon

## [0.1.1]
### Fixed
- Grunt `release` task

## [0.1.0]
### Added
- Scaffolding
- Grunt to create a release

### Changed
- Docs pushed into the sub docs folder