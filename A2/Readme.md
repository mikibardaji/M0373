# Sessions A2  Documents per intercanvi d’informació

## Introducció
Per aquesta Activitat, instal·larem (typescript)[https://es.wikipedia.org/wiki/TypeScript).

Per això necessitarem instal·lar vari software... 

· Scoop.sh és un gestor d'aplicacions escrit en Powershell que et permet instal.lar aplicacions a nivell d'usuari sense permisos d'administrador.

Està pensant sobretot per informàtics.

Obre un terminal de Powershell i instal.la scoop:

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

### Instal.lar una aplicació amb scoop
Per exemple podem instal.lar git en el nostre espai d'usuari:

```sh
> scoop install git
```

### Buscar una aplicació

A la pàgina web de (Scoop.sh)[https://scoop.sh/] pots buscar paquets, per exemple Python:

![image](https://github.com/user-attachments/assets/606905dc-9241-460f-be33-4decf30c8bfe)

## Instal.lació Visual Studio Code
Instal.la Box tal com s'explica en el document:

```sh
Set-ExecutionPolicy Remote -Scope CurrentUser
Install-Module Box -scope CurrentUser -SkipPublisherCheck
```
Instal.la VS Code
```sh
install-code
```

## Bun

Instal.la Bun amb Scoop:

```sh
> scoop install bun
```
Executa l'ordre bun repl per iniciar una sessió REPL:
```sh
 bun repl
3 Welcome to Bun v1.1.34
Type ".help" for more information.
>
```
