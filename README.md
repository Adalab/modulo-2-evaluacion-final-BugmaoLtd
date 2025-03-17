# Anime Series Favorites

Este proyecto es una aplicación web que permite a los usuarios buscar series de anime, ver los resultados y agregar series a su lista de favoritos. Los favoritos se guardan de manera persistente utilizando `localStorage`, lo que permite que la lista de favoritos se mantenga incluso después de recargar la página.

## Funcionalidades

- **Búsqueda de series de anime:** Los usuarios pueden buscar series de anime utilizando el nombre de la serie. Los resultados se obtienen de la API de Jikan.
- **Visualización de series:** Se muestran los resultados de la búsqueda con imágenes y títulos de las series.
- **Agregar/Eliminar de favoritos:** Los usuarios pueden agregar series a su lista de favoritos y eliminar las que ya no deseen en su lista.
- **Persistencia en `localStorage`:** La lista de favoritos se guarda en `localStorage`, por lo que permanece disponible después de recargar la página.


## Uso

1. **Buscar series:**

   - En la barra de búsqueda, ingresa el nombre de una serie de anime y presiona el botón de búsqueda.
   - Se mostrarán los resultados de la búsqueda con las imágenes y los títulos de las series.

2. **Agregar a favoritos:**

   - Haz clic en cualquier serie de la lista de resultados para agregarla a tu lista de favoritos.
   - Las series seleccionadas aparecerán en la sección de favoritos en la parte superior o en un contenedor designado de la página.

3. **Eliminar de favoritos:**

   - Si ya has agregado una serie a tus favoritos, puedes eliminarla haciendo clic en la serie dentro de la lista de favoritos.

4. **Recargar la página:**
   - La lista de favoritos se guarda en el `localStorage`, por lo que aunque recargues la página, los favoritos permanecerán intactos.

## Ejemplo de Uso

1. Busca por ejemplo `Naruto` en el cuadro de búsqueda.
2. Haz clic en la serie de la lista de resultados para agregarla a tus favoritos.
3. Puedes eliminarla de los favoritos simplemente haciendo clic sobre ella nuevamente.


