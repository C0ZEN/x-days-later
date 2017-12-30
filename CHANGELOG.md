# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).  
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
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