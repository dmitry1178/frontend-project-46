gendiff:
	node bin/gendiff.js

lint: 
	npx eslint

install:
	npm ci

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8