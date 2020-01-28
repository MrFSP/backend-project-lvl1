install:
	npm install

start:
	npx babel-node src/bin/brain-prime.js

publish:
	--dry-run

lint:
	npx eslint .

republish:
	sudo npm uninstall -g brain-games
	npm run build
	npm publish --dry-run
	sudo npm link
	
.PHONY: test
