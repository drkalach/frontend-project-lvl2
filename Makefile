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



rec: # записать игру 
	asciinema rec