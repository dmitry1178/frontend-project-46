### Hexlet tests and linter status:
[![Actions Status](https://github.com/dmitry1178/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/dmitry1178/frontend-project-46/actions)
[![Linter/Tests](https://github.com/dmitry1178/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/dmitry1178/frontend-project-46/actions/workflows/main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/4107b0d042f321bbe78d/maintainability)](https://codeclimate.com/github/dmitry1178/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4107b0d042f321bbe78d/test_coverage)](https://codeclimate.com/github/dmitry1178/frontend-project-46/test_coverage)
***
# Gendiff
### Description:
Gendiff - a program that displays the differences between two data structures.
### System requirements:
- MacOS/Linux/Windows
- Node.js version 18 and later
- NPM
- Git
### Program Features:
- Supported input formats - json, yml.
- The result is displayed in one of the styles: plain, stylish, json.

***
# Install and Run
### How to Install:
Must be typed on the command line:
1. ```git clone git@github.com:dmitry1178/frontend-project-46.git```
2. ```cd frontend-project-46```
3. ```make install```
4. ```npm link```
### How to run:
- ```gendiff -f plain <filepath1> <filepath2>``` - generate difference in 'plain' format.
- ```gendiff -f stylish <filepath1> <filepath2>``` - generate difference in 'stylish' format.
- ```gendiff -f json <filepath1> <filepath2>``` - generate difference in 'json' format.
- ```gendiff -h``` - display help.
***
# Examples of program operation
#### Finding and displaying differences in JSON files:
[![asciicast](https://asciinema.org/a/558823.svg)](https://asciinema.org/a/558823)
#### Finding and displaying differences in YML/YAML files:
[![asciicast](https://asciinema.org/a/558845.svg)](https://asciinema.org/a/558845)
#### Output in 'plain' format:
[![asciicast](https://asciinema.org/a/559520.svg)](https://asciinema.org/a/559520)
#### Output in 'stylish' format:
[![asciicast](https://asciinema.org/a/559521.svg)](https://asciinema.org/a/559521)
#### Output in 'json' format:
[![asciicast](https://asciinema.org/a/559522.svg)](https://asciinema.org/a/559522)



