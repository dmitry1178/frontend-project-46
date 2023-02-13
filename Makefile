gendiff:
	node bin/gendiff.js

lint: 
	npx eslint

install:
	npm install

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8