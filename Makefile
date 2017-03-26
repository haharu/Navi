NODETESTS ?= test/*.js test/node/*.js
BROWSERTESTS ?= test/*.js test/client/*.js

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
		--require should \
		--compilers js:babel-register \
		--growl \
		$(NODETESTS)

test-browser:
	./node_modules/.bin/zuul --local 4000 -- $(BROWSERTESTS)

.PHONY: lint test
