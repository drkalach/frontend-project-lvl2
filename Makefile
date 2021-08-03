install: # установить зависимости    
	npm ci 

gendiff:
	node bin/gendiff.js -h

publish: 
	npm publish --dry-run

prettier: # запуск проверки утилиты
	npx prettier --write .	
	
lint: # Создайте задачу make lint, которая должна запускать npx eslint .. //   npx eslint --fix .
	 npx eslint --fix .

test: # Запуск тестов.
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch


test-coverage: # Тест на покрытие тестами кода.
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage 


rec: # записать игру 
	asciinema rec