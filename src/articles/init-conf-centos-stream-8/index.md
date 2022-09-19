---
title: 'Базовая настройка Centos Stream 8'
date: 2022-09-18
author: danil-fedoseev
tags:
    - centos-stream-8
    - linux
    - servers
---

## Создание аккаунта пользователя

1. Например, создание пользователя \[centos\].
    ```bash
    [root@localhost ~]# useradd centos
    [root@localhost ~]# passwd centos
    Changing password for user centos.
    New UNIX password:              # введите любой пароль который хотите установить
    Retype new UNIX password:       # подтвеждене
    passwd: all authentication tokens updated successfully.
    ```
2. Если вы хотите сменить пользователя которого создали ранее на супер пользователя необходимо использовать команду \[su\]
    ```bash
    localhost login: centos         # логинимся за пользователя
    password:                       # вводим пароль пользователя
    [centos@localhost ~]$ su -      # меняем пользователя на root
    Password:                       # вводим пароль от root
    [root@localhost ~]#             # наш пользовтаель теперь root
    ```

3. Если вы хотите запретить пользователям использовать команду \[su\], то необходимо сменить пару настроек. Например, ниже только пользователи группы \[wheel\] могут использовать команду \[su\].
    ```bash
    [root@localhost ~]# usermod -aG wheel centos    # добавляем пользователя centos в группу wheel
    [root@localhost ~]# vi /etc/pam.d/su            # изменяем настройки su
    #%PAM-1.0
    auth            required        pam_env.so
    auth            sufficient      pam_rootok.so
    # Uncomment the following line to implicitly trust users in the "wheel" group.
    #auth           sufficient      pam_wheel.so trust use_uid
    # Uncomment the following line to require a user to be in the "wheel" group.
    # раскоментируем данную строку
    auth            required        pam_wheel.so use_uid
    auth            substack        system-auth
    auth            include         postlogin
    account         sufficient      pam_succeed_if.so uid = 0 use_uid quiet
    account         include         system-auth
    password        include         system-auth
    session         include         system-auth
    session         include         postlogin
    session         optional        pam_xauth.so

    # проверяем настройки от пользователя который не состоит в группе wheel
    [redhat@localhost ~]$ su -
    Password:
    su: Permission denied     # denied normally
    ```
4. Если вам необходимо удалить учетную запись пользователя, то это делается примерно вот так:
    ```bash
    # удалить пользователя [centos] (только удалить учетную запись)
    [root@localhost ~]# userdel centos
    # удалить пользователя [centos] (удалить учетную запись и его домашнюю директорию)
    [root@localhost ~]# userdel -r centos
    ```

## Firewall и SELinux

### Firewall

### SELinux

## Настройки сети

## Включение и отключение сервисов

## Обновление системы

## Использование модульных репозиторий

## Добавление дополнительных репозиториев

## Использование онлайн консоли управления

## Настройка Vim

## Настройка Sudo
