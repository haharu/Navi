NODETESTS ?= test/*.js test/node/*.js
BROWSERTESTS ?= test/*.js test/client/*.js
REQUIRED = --require should

lint:
	@./node_modules/.bin/eslint ./lib --debug

deploy: build build-min\

build:
	./node_modules/.bin/rollup -c

build-min:
	./node_modules/.bin/rollup -c ./rollup.min.config.js

watch:
	./node_modules/.bin/rollup -c -w

test:
	@if [ "x$(BROWSER)" = "x" ]; then make test-node; else make test-browser; fi

test-node:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony \
		--reporter spec \
		$(REQUIRED) \
		--compilers js:babel-register \
		--growl \
		$(NODETESTS)

test-browser:
	./node_modules/.bin/zuul --local 4000 -- $(BROWSERTESTS)

test-cov:
	./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha \
		--report lcovonly \
		-- -R spec \
		$(REQUIRED) \
		$(NODETESTS)

.PHONY: lint test
