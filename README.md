# Sistema de Gestión de Compras en Consola

## Descripción del Proyecto

Este proyecto es una aplicación desarrollada en **Node.js** y **TypeScript** que permite simular un proceso básico de compra desde la terminal.

El usuario puede:

* Seleccionar un comprador.
* Agregar uno o varios productos al carrito.
* Finalizar la compra cuando lo desee.
* Calcular automáticamente:

  * Subtotal.
  * IVA (12%).
  * Total a pagar.
* Visualizar un resumen detallado de la compra.

---

# Funcionalidades

## Selección de comprador

El sistema muestra una lista de compradores disponibles y solicita al usuario seleccionar uno.

Ejemplo:

```text
1. Juan
2. Maria
3. Pedro
```

---

## Selección de productos

Una vez seleccionado el comprador, el usuario puede agregar productos al carrito.

Ejemplo:

```text
1. Papas - $15
2. Galletas - $10
3. Refresco - $8
```

El usuario puede agregar tantos productos como desee.

---

## Finalización de compra

Cuando el usuario ingresa:

```text
0
```

la compra finaliza y se genera automáticamente un resumen.

---

## Resumen de compra

El sistema muestra:

* Comprador seleccionado.
* Productos agregados.
* Subtotal.
* IVA.
* Total.

Ejemplo:

```text
===== RESUMEN DE COMPRA =====

Comprador: Maria

Productos comprados:
1. Papas - $15.00
2. Galletas - $10.00

Subtotal: $25.00
IVA (12%): $3.00
Total: $28.00
```

---

# Tecnologías Utilizadas

## Node.js

Entorno de ejecución para JavaScript.

## TypeScript

Superset de JavaScript que agrega tipado estático.

## PNPM

Administrador de paquetes utilizado para instalar dependencias.

## Readline

Módulo nativo de Node.js utilizado para interactuar con la terminal.

## Git

Control de versiones del proyecto.

## GitHub

Repositorio remoto para almacenamiento y colaboración.

---

# Arquitectura del Proyecto

```text
src
│
├── index.ts
├── calcular-subtotal.ts
├── calcular-iva.ts
└── calcular-total.ts
```

## index.ts

Contiene toda la interacción con el usuario:

* Selección de comprador.
* Selección de productos.
* Resumen final.

## calcular-subtotal.ts

Contiene la lógica para calcular el subtotal.

## calcular-iva.ts

Contiene la lógica para calcular el IVA.

## calcular-total.ts

Contiene la lógica para calcular el total final.

---

# Requisitos Previos

Antes de ejecutar el proyecto asegúrese de tener instalado:

## Node.js

Verificar instalación:

```bash
node -v
```

## PNPM

Verificar instalación:

```bash
pnpm -v
```

Si no está instalado:

```bash
npm install -g pnpm
```

## Git

Verificar instalación:

```bash
git --version
```

---

# Instalación del Proyecto

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

## 2. Entrar al proyecto

```bash
cd NOMBRE_DEL_PROYECTO
```

## 3. Instalar dependencias

```bash
pnpm install
```

---

# Compilación

Compilar TypeScript a JavaScript:

```bash
pnpm tsc
```

Si la compilación es correcta se generará la carpeta:

```text
dist
```

---

# Ejecución

Ejecutar la aplicación compilada:

```bash
node dist/index.js
```

---

# Flujo de Uso

## Paso 1

Seleccionar un comprador.

Ejemplo:

```text
Opción: 2
```

---

## Paso 2

Agregar productos.

Ejemplo:

```text
Seleccione un producto: 1
```

---

## Paso 3

Continuar agregando productos.

Ejemplo:

```text
Seleccione un producto: 3
```

---

## Paso 4

Finalizar compra.

```text
Seleccione un producto: 0
```

---

## Paso 5

Visualizar resumen.

El sistema mostrará:

* Comprador.
* Productos.
* Subtotal.
* IVA.
* Total.

---

# Posibles Errores y Soluciones

## Error: Cannot find module

Ejemplo:

```text
Cannot find module './subtotal'
```

### Solución

Verificar que existan los archivos:

```text
calcular-subtotal.ts
calcular-iva.ts
calcular-total.ts
```

y que las rutas de importación sean correctas.

---

## Error: pnpm no se reconoce como comando

Ejemplo:

```text
'pnpm' is not recognized as an internal or external command
```

### Solución

Instalar PNPM:

```bash
npm install -g pnpm
```

---

## Error: node no se reconoce como comando

Ejemplo:

```text
'node' is not recognized as an internal or external command
```

### Solución

Instalar Node.js y reiniciar la terminal.

---

## Error: Type 'undefined' is not assignable

### Solución

Asegurarse de que las validaciones de compradores y productos estén presentes antes de acceder a los arreglos.

---

## Error: Cannot find name 'process'

### Solución

Instalar los tipos de Node:

```bash
pnpm add -D typescript @types/node
```

---

## Error: No se genera la carpeta dist

### Solución

Verificar que no existan errores de TypeScript:

```bash
pnpm tsc
```

Corregir los errores mostrados y volver a compilar.

---

# Mantenimiento

Para agregar nuevos productos:

Modificar el arreglo:

```ts
const productos = [
    ...
];
```

Para cambiar el porcentaje de IVA:

Modificar el archivo:

```text
calcular-iva.ts
```

y actualizar el valor:

```ts
return subtotal * 0.16;
```

---

# Autor

Proyecto desarrollado utilizando:

* Node.js
* TypeScript
* PNPM
* Git
* GitHub

como práctica de arquitectura modular y programación orientada a funciones en consola.


