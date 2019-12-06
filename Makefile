install:
	npm install
start:
	npx babel-node src/bin/brain-gcd.js
publish:
	--dry-run
lint:
	npx eslint .
republish:
	sudo npm uninstall -g brain-games
	npm run build
	sudo npm link
