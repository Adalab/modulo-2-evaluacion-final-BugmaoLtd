# Anime Series Favorites

Este proyecto es una aplicación web que permite a los usuarios buscar series de anime, ver los resultados y agregar series a su lista de favoritos. Los favoritos se guardan de manera persistente utilizando `localStorage`, lo que permite que la lista de favoritos se mantenga incluso después de recargar la página.

## Funcionalidades

- **Búsqueda de series de anime:** Los usuarios pueden buscar series de anime utilizando el nombre de la serie. Los resultados se obtienen de la API de Jikan.
- **Visualización de series:** Se muestran los resultados de la búsqueda con imágenes y títulos de las series.
- **Agregar/Eliminar de favoritos:** Los usuarios pueden agregar series a su lista de favoritos y eliminar las que ya no deseen en su lista.
- **Persistencia en `localStorage`:** La lista de favoritos se guarda en `localStorage`, por lo que permanece disponible después de recargar la página.

## Tecnologías

- **HTML5**
- **CSS3** (Puedes usar cualquier framework de tu elección, como Bootstrap)
- **JavaScript (Vanilla)** para la lógica de la aplicación
- **API de Jikan:** API pública para obtener datos de series de anime.

## Instalación

Para comenzar a usar el proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**

   Si aún no tienes el repositorio, clónalo usando Git:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. **Accede a la carpeta del proyecto:**

   ```bash
   cd nombre-del-repositorio
   ```

3. **Abre el archivo HTML:**

   Abre el archivo `index.html` en tu navegador favorito.

   ```bash
   open index.html  # en MacOS
   start index.html # en Windows
   xdg-open index.html # en Linux
   ```

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

## Capturas de Pantalla

_(Aquí puedes agregar capturas de pantalla de la aplicación en acción)_

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

### Notas adicionales:

- Si tienes imágenes, puedes agregar una sección de capturas de pantalla para mostrar cómo luce la aplicación.
- Puedes personalizar la parte de instalación y contribución según el flujo de trabajo de tu equipo.

Este archivo `README.md` debería ser útil tanto para usuarios que quieran usar la aplicación como para desarrolladores que deseen contribuir al proyecto. ¡Espero que te sea de ayuda!
