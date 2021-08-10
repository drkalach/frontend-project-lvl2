### Hexlet tests and linter status:

[![Actions Status](https://github.com/drkalach/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/drkalach/frontend-project-lvl2/actions)

### CodeClimate link

[![Maintainability](https://api.codeclimate.com/v1/badges/e315372da7dc001266f7/maintainability)](https://codeclimate.com/github/drkalach/frontend-project-lvl2/maintainability)

[![Lint](https://github.com/drkalach/frontend-project-lvl2/actions/workflows/main.yml/badge.svg)](https://github.com/drkalach/frontend-project-lvl2/actions/workflows/main.yml)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e315372da7dc001266f7/test_coverage)](https://codeclimate.com/github/drkalach/frontend-project-lvl2/test_coverage)

## Проект #2 GENDIFF

Вычислитель отличий

Это приложение, реализованное в рамках второго проекта при изучении профессии Javascript-разработчика на hexlet.io. Ссылка на проект - Вычислитель отличий https://ru.hexlet.io/projects/46/members/16280?step=4

## Цель

Второй проект является логическим развитием первого https://ru.hexlet.io/projects/44/members/14124/reviews. Он захватывает большую часть синтаксических возможностей js и использует более сложную архитектуру. Требования:

-   научиться создавать полноценные `CLI`-приложения (command-line interface), с парсингом входных параметров, валидацией, и генерацией справки;
-   разобраться с форматами данных `json`, `yaml` - понять структуру, научиться парсить в `js` и обратно;
-   поработать с деревьями - обход, трансформация, формирование АСТ (абстрактное синтаксическое дерево) 
-   сделать весь проект в функциональном стиле.

## Описание

В рамках данного проекта необходимо реализовать утилиту для поиска отличий в конфигурационных файлах.

## Возможности утилиты:

-   Поддержка разных форматов - json, yaml;
-   Генерация отчета в виде plain text, stylish и json

## Пример использования:

```
$ gendiff --format plain file1.json file2.json
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```

## Установка

`npm i -g project-gendiff`

## Запуск

```
$ make gendiff --help
Usage: gendiff [options] <file1> <file2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  Output format (default: "stylish")
  -h, --help           display help for command
```

[![asciicast](https://asciinema.org/a/427913.svg)](https://asciinema.org/a/427913)


[![asciicast](https://asciinema.org/a/428982.svg)](https://asciinema.org/a/428982)


[![asciicast](https://asciinema.org/a/428983.svg)](https://asciinema.org/a/428983)


[![asciicast](https://asciinema.org/a/429440.svg)](https://asciinema.org/a/429440)


[![asciicast](https://asciinema.org/a/429704.svg)](https://asciinema.org/a/429704)


[![asciicast](https://asciinema.org/a/429711.svg)](https://asciinema.org/a/429711)