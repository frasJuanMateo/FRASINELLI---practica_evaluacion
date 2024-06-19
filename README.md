# Práctica para evaluación de React

<!-- Realizado por: Virgolini Federico (2024) -->

En este proyecto se presentan una serie de ejercicios que servirán de práctica para fortalecer los conceptos que serán evaluados.

El presente práctico plantea implementar una página web para realizar una lista de elementos para comprar en el supermercado.
La página web está parcialmente implementada y su trabajo será finalizar esta implementación.

Al finalizar el usuario será capaz de:
- Agregar un nuevo elemento a su lista de supermercado, indicando su nombre y categoría a la que pertenece.
- Ver listados todos los elementos que se encuentran el la lista de supermercado.

A continuación se presentan las actividades a realizar.

## 1. Forkear el esqueleto del proyecto

Esta actividad se realizará a partir de un proyecto base que se encuentra en [este url](https://github.com/fedevirgolini-itr/practica_evaluacion).
Para realizar las siguientes actividades se debe forkear este repositorio, de forma tal que cada uno pueda trabajar en su usuario y de forma independiente.

El proyecto está implementado principalmente en dos componentes:
- `App` es la componente principal del proyecto, donde se encuentra un estado denominado `items` para guardar los distintos elementos de nuestra lista. Esta componente renderiza tanto el formulario para agregar un nuevo elemento (esta parte está modularizada en la componente `ShoppingForm`) como también los items que se encuentran en la lista (todavía no implementado).
- `ShoppingForm` es una componente hija de `App`. Esta se encarga de modularizar el formulario que se encarga de agregar un nuevo elemento a la lista de supermercado. Notar que el `onSubmit` del formulario ya está implementado.

## 2. Crear una nueva branch

Una vez forkeado el repositorio, se deberá crear una nueva branch en la cual se realizará el desarrollo del práctico.
Esta nueva branch tiene el objetivo de establecer un orden al desarrollo del práctico (y por supuesto ejercitar el uso de branches con git).
No es necesario que esta nueva rama tenga un nombre en específico, pero algunas ideas para nombres pueden ser: "desarrollo_practico", "resolucion_apellido", "branch_resolucion", etc.

## 3. Implementar inputs

En el formulario de la componente `ShoppingForm` se deben crear dos inputs (como lo indican los comentarios en el proyecto):
- El primero de ellos será para ingresar el nombre del producto que se desea agregar a la lista.
- El segundo input será una lista desplegable que permitirá establecer la categoría de dicho producto. Las categorías posibles son:
    - Lacteo
    - Despensa
    - Higiene
    - Bebida
    - Limpieza  
    - Otro

Una vez finalizado, realizar un commit.

## 4. Inicializando el estado newElement

Determinar en qué valor debe ser inicializado el estado `newElement` de la componenete `ShoppingForm`.
Completar el código.

Una vez finalizado, realizar un commit.

## 5. Implementar función de cambio

Implementar una función en la componente `ShoppingForm` que modifique correctamente el estado `newElement` según lo que el usuario ingresa en el formulario.

Una vez finalizado, realizar un commit.

## 6. Resetear el estado `newElement`

Notar que dentro de la función `handleSubmit()` de la componente `ShoppingForm` se debe completar la implementación mediante el vaciado del estado `newElement`.
Esto se debe a que una vez que el usuario agrega un elemento, se debe vaciar el formulario para que el mismo quede disponible para agregar nuevos elementos.
Completar la implemetación de la función `handleSubmit()`.

Una vez finalizado, realizar un commit.

## 7. Implementar la lista de los elementos

Para esta altura del proyecto, ya deberíamos tener lista nuestra componente `ShoppingForm`, por lo que ahora terminaremos de implementar la componente `App`.

Implementar el listado de todos los elementos que hay en la lista.
Se debe especificar tanto el nombre del producto como también la categoría a la que pertenece.

Ayuda: pueden comenzar por solo mostrar el nombre y luego modificar la implementación para que también se indique su categoría.

Una vez finalizado, realizar un commit.

## 8. Modularización

Modularizar la lista anterior en una componente denominada `ShoppingList`.
Esta componente recibirá a través de sus propiedades la lista completa de elementos y se encargará de renderizarlos en una lista.

Una vez finalizado, realizar un commit.
