# Instruccions per poder compilar tsx amb Bun

Executa la comanda
```sh
bun add -g typescript
```

Un cop instal·lat et comentarà que ho afegeixis al Path del sistema, com nosaltres no tenim permissos d'administrador ho afegirem al path de powershell per no tenir que ficar-ho cada cop que obrim.

- Primer pas
```sh
notepad $PROFILE
``` 
Crear-lo si no existeix i ficar-li la següent comanda (aquí la ruta serà la teva---)

```sh
$env:PATH += ";C:\ruta_carpetes\bin"
``` 
Guardar-ho i comprovar si s'ha guardat, tancant powershell i tornar-lo a obrir i posar

```sh
echo $env:PATH
```

Hauria de sortir la teva ruta al final del path.

Llavors ja podem compilar el element tsx que sigui, que el convertirà amb .js

```sh 
tsc script.ts
```
