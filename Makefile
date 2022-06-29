githooks:
	rm -rf $(PWD)/.git/hooks
	ln -s $(PWD)/hooks $(PWD)/.git/hooks

lint:
	yarn eslint --config .eslintrc.js --ignore-path .eslintignore .
