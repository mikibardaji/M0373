# Instal·lació Diferents Software necessari pel Modul

## Software A1

#### **Instal·lacio eina scoop**
  - Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser (opció S)
  - Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
  - scoop install git (instal·lem el git)
  - Set-ExecutionPolicy Remote -Scope CurrentUser

#### **Instal·lació paquet box**
  - Install-Module Box -scope CurrentUser -SkipPublisherCheck
  - Update-Module Box
 *Tancar la sessió i tornar a obrir*

#### **Instal·lació Vscode**
  - install-code

#### **Install bun**
  - scoop install bun
Para provar que s'ha instal·lat executar
  - bun repl(al terminal per sortir escriure .exit)


#### **Modul validador Json**
  - bun add ajv
