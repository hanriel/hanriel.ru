---
title: 'Изменение имени компьютера под Windows с помощью контролера домена'
date: 2022-09-19
author: danil-fedoseev
tags:
- windows
- с
featured: true
preview: 'Итак, как переименовать компьютер в домене из командной строки?'
---

Итак, как переименовать компьютер в домене из командной строки?
Заходим в командную строку на контроллере домена и выполняем команду:
    ```
    netdom renamecomputer <текущее имя> /newname:<новое имя> /userd:<домен>\<Админ домена> /passwordd:*
    ```

Например:
    ```
    netdom renamecomputer pc-123 /newname:pc-001 /userd:hdsystems.local\Admin01 /passwordd:*
    ```

После выполнения команды вводим пароль от администратора домена

Следует отметить, что после переименования компьютер пользователя необходимо будет перезагрузить во избежание всевозможных глюков. Дать команду на удаленную перезагрузку можно ключом /reboot:ВремяВСекундахДоПерезагрузки
