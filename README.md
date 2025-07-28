# 🚀 Rick & Morty Character App

Una aplicación web moderna para explorar y gestionar personajes de Rick & Morty, construida con las últimas tecnologías web.

![Rick & Morty](https://img.shields.io/badge/Rick%20%26%20Morty-API-green)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Zustand](https://img.shields.io/badge/Zustand-5.0.6-purple)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Testing](#-testing)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Diseño Responsivo](#-diseño-responsivo)
- [Reflexiones del Desarrollo](#-reflexiones-del-desarrollo)

## ✨ Características

- 🔍 **Búsqueda de Personajes** - Filtrado en tiempo real
- ❤️ **Sistema de Favoritos** - Gestión persistente con Zustand
- 📱 **Diseño Responsivo** - Optimizado para desktop y mobile
- 🎨 **UI Moderna** - Interfaz intuitiva con estados visuales
- 🏷️ **Estados de Personajes** - Indicadores LIVE/DEAD dinámicos
- 🧪 **Testing Completo** - Cobertura de funcionalidades críticas
- ⚡ **Performance Optimizada** - Next.js con Turbopack

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Next.js 15.4.4** - Framework de React con SSR
- **TypeScript 5.0** - Tipado estático para JavaScript
- **CSS Modules** - Estilos modulares y encapsulados

### Estado y Datos
- **Zustand 5.0.6** - Gestión de estado global
- **Rick & Morty API** - Datos de personajes
- **Session Storage** - Persistencia de favoritos

### Testing
- **Jest 30.0.5** - Framework de testing
- **ts-jest** - Soporte TypeScript para Jest
- **jest-environment-jsdom** - Entorno DOM para testing

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **React Icons** - Iconografía moderna
- **Turbopack** - Bundler de desarrollo rápido

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd aeromx
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con Turbopack
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción

# Testing
npm test             # Ejecuta todos los tests
npm run test:watch   # Ejecuta tests en modo watch

# Linting
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
aeromx/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página principal
│   │   └── globals.css        # Estilos globales
│   ├── components/
│   │   ├── features/          # Componentes de funcionalidad
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── CharacterList.tsx
│   │   │   ├── SelectedCharacter.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── FavoritesDropdown.tsx
│   │   └── ui/                # Componentes de UI
│   ├── hooks/
│   │   └── useCharacters.ts   # Hook personalizado para datos
│   ├── services/
│   │   ├── api.ts             # Servicios de API
│   │   └── favoritesService.ts # Lógica de favoritos
│   ├── store/
│   │   └── favoritesStore.ts  # Store Zustand
│   ├── utils/
│   │   └── stringUtils.ts     # Utilidades de strings
│   └── types/
│       └── api.ts             # Tipos TypeScript
├── public/                    # Assets estáticos
└── tests/                     # Archivos de testing
```

## 🧪 Testing

### Cobertura de Tests

La aplicación incluye tests para las funcionalidades críticas:

- ✅ **Store de Favoritos** - Agregar, remover y verificar favoritos
- ✅ **Utilidades de Strings** - Limpieza de texto y extracción de nombres
- ✅ **Estructura de Datos** - Validación de tipos Character

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests específicos
npm test -- --testNamePattern="favorites"
```

### Resultados de Tests
```
Test Suites: 3 passed, 3 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        8.187 s
```

## 🎯 Funcionalidades Implementadas

### ✅ Requerimientos Cumplidos

- **React 19 + Next.js** ✅
- **TypeScript** ✅
- **CSS Modules** ✅
- **Gestión de Personajes** ✅
- **Sistema de Favoritos** ✅
- **Estados de Botones** ✅
- **Estados de Personajes (Alive/Dead)** ✅
- **Diseño Responsivo** ✅
- **Unit Tests** ✅

### 🎨 Características Adicionales

- **Búsqueda en Tiempo Real** - Filtrado instantáneo de personajes
- **Persistencia de Datos** - Favoritos guardados en sessionStorage
- **UI/UX Moderna** - Diseño limpio y intuitivo
- **Estados Visuales** - Hover, active, selected states
- **Optimización de Performance** - Lazy loading y bundling optimizado

## 📱 Diseño Responsivo

### Desktop
- Layout horizontal con grid de personajes
- Panel lateral para personaje seleccionado
- Navegación con scroll personalizado

### Mobile
- Layout vertical optimizado
- Grid de 2 columnas para personajes
- Navegación táctil mejorada
- Logo reposicionado para mejor UX

## 🤔 Reflexiones del Desarrollo

### ❤️ Lo que más me gustó del desarrollo

**1. Arquitectura Modular y Clean Code**
Implementar una estructura de carpetas bien organizada siguiendo principios SOLID fue muy gratificante. La separación clara entre componentes, servicios, hooks y stores hizo que el código fuera mantenible y escalable.

**2. TypeScript y Type Safety**
El uso de TypeScript transformó completamente la experiencia de desarrollo. La detección temprana de errores, autocompletado inteligente y la documentación implícita del código hicieron que el desarrollo fuera más seguro y eficiente.

**3. Zustand como State Management**
La simplicidad y potencia de Zustand superó mis expectativas. Comparado con Redux, la curva de aprendizaje fue mínima y la implementación del sistema de favoritos fue elegante y eficiente.

**4. CSS Modules y Diseño Responsivo**
La implementación de CSS Modules permitió crear estilos encapsulados y reutilizables. El diseño responsivo fue un desafío técnico interesante que resultó en una experiencia de usuario consistente.

### 🚀 Lo que habría mejorado con más tiempo

**1. Testing más Completo**
- Implementar tests de integración con React Testing Library
- Agregar tests de componentes con interacciones de usuario
- Cobertura de tests para hooks personalizados
- Tests de accesibilidad (a11y)

**2. Optimización de Performance**
- Implementar virtualización para listas grandes de personajes
- Lazy loading de imágenes con Next.js Image
- Implementar Service Workers para cache offline
- Optimización de bundle size

**3. Funcionalidades Avanzadas**
- Implementar JSON Server como requería la prueba
- Sistema de filtros avanzados (especie, género, ubicación)
- Paginación infinita
- Modo offline con PWA

**4. Mejoras de UX**
- Animaciones y transiciones suaves
- Loading states más elaborados
- Error boundaries para mejor manejo de errores
- Tooltips y microinteracciones

### 🐛 Pain Point Principal y Solución

**Problema: Configuración de Jest con TypeScript y ES Modules**

**Desafío:**
La configuración inicial de Jest fue problemática debido a conflictos entre TypeScript, ES Modules y la configuración de Next.js. Los errores incluían:
- `SyntaxError: Cannot use import statement outside a module`
- Problemas con `jest-environment-jsdom`
- Conflictos entre `ts-jest` y la configuración de módulos

**Solución Implementada:**
1. **Instalación de dependencias correctas:**
   ```bash
   npm install --save-dev jest jest-environment-jsdom ts-jest @types/jest
   ```

2. **Configuración simplificada de Jest:**
   ```javascript
   module.exports = {
     testEnvironment: 'jest-environment-jsdom',
     testMatch: ['**/*.test.(ts|tsx)'],
     transform: {
       '^.+\\.(ts|tsx)$': 'ts-jest',
     },
   }
   ```

3. **Eliminación de configuraciones problemáticas:**
   - Removí `setupFilesAfterEnv` que causaba conflictos
   - Simplifiqué `moduleNameMapping` 
   - Eliminé configuraciones de ESM que no eran necesarias

**Resultado:**
- ✅ Tests ejecutándose correctamente
- ✅ 9 tests pasando exitosamente
- ✅ Configuración estable y mantenible

**Aprendizaje:**
Este problema me enseñó la importancia de mantener configuraciones simples y la necesidad de entender profundamente las dependencias y sus interacciones antes de implementar configuraciones complejas.

---

## 📞 Contacto

Para preguntas o sugerencias sobre este proyecto, no dudes en contactarme.

**¡Gracias por revisar mi trabajo! 🚀**
