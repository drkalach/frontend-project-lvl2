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
-   разобраться с форматами данных `json`, `yaml`, `ini` - понять структуру, научиться парсить в `js` и обратно;
-   поработать с деревьями - обход, трансформация, формирование АСТ (абстрактное синтаксическое дерево) - немного кода, кипятящего мозг;
-   познакомиться и реализовать на практике архитектурные принципы 'Фасад', 'Адаптер';
-   реализовать полиморфизм подтипов на практике;
-   сделать весь проект в функциональном стиле.

## Описание

В рамках данного проекта необходимо реализовать утилиту для поиска отличий в конфигурационных файлах.

## Возможности утилиты:

-   Поддержка разных форматов - json, yaml, ini;
-   Генерация отчета в виде plain text, pretty и json

## Пример использования:

```
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```

## Установка

`npm i -g project-gendiff`

## Запуск

```
$ gendiff --help
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  Output format (default: "stylish")
  -h, --help           output usage information
```

[![asciicast](https://asciinema.org/a/427913.svg)](https://asciinema.org/a/427913)


[![asciicast](https://asciinema.org/a/428982.svg)](https://asciinema.org/a/428982)


[![asciicast](https://asciinema.org/a/428983.svg)](https://asciinema.org/a/428983)


[![asciicast](https://asciinema.org/a/429440.svg)](https://asciinema.org/a/429440)
