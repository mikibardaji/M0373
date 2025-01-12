Sessions A2

# Introducció

Scoop.sh és un gestor d'aplicacions escrit en Powershell que et permet instal.lar aplicacions a nivell d'usuari sense permisos d'administrador.

Està pensant sobretot per informàtics.

Obre un terminal de Powershell i instal.la scoop:

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

# Instal.lar una aplicació
Per exemple podem instal.lar git en el nostre espai d'usuari:

```sh
> scoop install git
```
