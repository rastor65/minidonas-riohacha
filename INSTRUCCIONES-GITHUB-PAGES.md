# Configuración de GitHub Pages para Mini Donas Riohacha

## Pasos para configurar GitHub Pages:

### 1. Subir el código a GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial commit - Mini Donas Riohacha website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/minidonas-riohacha.git
git push -u origin main
\`\`\`

### 2. Configurar GitHub Pages en el repositorio
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source** (Fuente), selecciona **GitHub Actions**
5. Guarda los cambios

### 3. Verificar el despliegue
- El workflow se ejecutará automáticamente después del push
- Puedes ver el progreso en la pestaña **Actions** de tu repositorio
- Una vez completado, tu sitio estará disponible en: `https://TU-USUARIO.github.io/minidonas-riohacha`

### 4. Solución de problemas comunes
- Si ves el README en lugar de la página web, asegúrate de haber seleccionado **GitHub Actions** como fuente
- Si el workflow falla, revisa los logs en la pestaña **Actions**
- Los cambios pueden tardar unos minutos en reflejarse

### 5. Actualizaciones futuras
Cada vez que hagas push a la rama `main`, el sitio se actualizará automáticamente.
