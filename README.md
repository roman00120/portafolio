# 🚀 Portafolio Profesional · Roman Velasco Moctezuma

<div align="center">

  [![GitHub Repo](https://img.shields.io/badge/GitHub-roman00120%2Fportafolio-181717?style=for-the-badge&logo=github)](https://github.com/roman00120/portafolio)
  [![Status](https://img.shields.io/badge/Versión-2026_Activa-00f2fe?style=for-the-badge)](https://github.com/roman00120/portafolio)
  [![Bilingual](https://img.shields.io/badge/Idioma-ES_%7C_EN_(Bilingüe)-64ffda?style=for-the-badge)](#-soporte-bilingüe-esen)
  [![WhatsApp](https://img.shields.io/badge/Contacto-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/523320447688)

  <br />

  **Ingeniero en Sistemas Computacionales & Licenciado en Tecnologías de la Información**  
  *Especializado en Software Empresarial (C# / .NET, WPF), IoT Industrial (Modbus/LoRaWAN), Aplicaciones Móviles (Flutter/Android) y Soluciones Web Fullstack.*

</div>

---

## 👨‍💻 Sobre Mí y Mi Portafolio

¡Hola! Soy **Roman Velasco Moctezuma**. Diseñé y construí este portafolio web como un escaparate de alto impacto para exhibir mis capacidades en ingeniería de software, arquitectura de sistemas y desarrollo web/móvil.

El sitio está desarrollado bajo los más altos estándares visuales y de rendimiento: **estética dark ultramoderna**, micro-animaciones fluidas con JavaScript nativo, soporte bilingüe interactivo (Español / Inglés) y una arquitectura ligera sin dependencias externas pesadas, asegurando tiempos de carga inmediatos y compatibilidad universal en cualquier entorno de hosting.

---

## 🌟 Proyectos Insignia Destacados

### ⚡ 1. TOTAL MONITOR v2.0 · Software Empresarial & SCADA
> **Desarrollado para:** Total Ground · An Electrical Company  
> **Tecnologías:** C# / .NET · WPF (XAML) · Modbus RTU / RS485 · LoRaWAN (The Things Network) · Windows Services · Power Quality (THD)

Sistema Operativo de escritorio de grado industrial enfocado en la supervisión continua, diagnóstico y telemetría de calidad de energía eléctrica:
- **Telemetría en Vivo (68 variables):** Monitoreo en tiempo real por medidor de voltajes de fase y línea, corrientes de carga, frecuencia de red (60.0 Hz) y consumo acumulado.
- **Adquisición Híbrida Serial & IoT:** Comunicación directa por hardware serial mediante protocolo industrial **Modbus RTU / RS485 (COM3 a 9600 bps)** para medidores físicos (TOV453) e ingesta remota inalámbrica vía **LoRaWAN / The Things Network (TTN)** para nodos IoT de campo (TOV500).
- **Matriz de Armónicos & THD:** Medición matemática de Distorsión Armónica Total en tensión y corriente, con desglose armónico por fases (11°, 12°, 13°, etc.).
- **Arquitectura Multihilo Desacoplada:** Motor de sondeo persistente en segundo plano que procesa tramas binarias sin bloquear la fluidez del hilo principal de la interfaz de usuario (UI Thread).
- **Visor Interactivo Integrado:** En el portafolio incluí una galería interactiva con capturas reales verificadas (`images/totalmonitor/`), replicando una ventana de sistema operativo con selectores de pestañas y métricas en vivo.

---

### 📱 2. Chambapp · Ecosistema Digital Completo
> **Plataforma:** Aplicación Móvil Android · Portal Web · Backend REST API  
> **Tecnologías:** Flutter · Android · Laravel 11 · MySQL · Mercado Pago · GPS en tiempo real  
> **Sitio Web:** [chambapp.com.mx](https://chambapp.com.mx/)

Plataforma marketplace bajo demanda desarrollada como un ecosistema integral:
- **App Móvil (Flutter):** Diseñada para prestadores de servicios y clientes con geolocalización GPS activa, cotizaciones en vivo y notificaciones push.
- **Backend & API Central (Laravel 11):** Gestión de flujos de pago con checkout Mercado Pago, validación KYC de identidad, control de reservas y webhooks.
- **Plataforma Web Administrativa:** Panel para gestión operativa, soporte y catálogo de oficios.

---

### 💼 3. Catálogo Web Interactivo (14+ Proyectos)
El portafolio integra un sistema de filtrado dinámico en tiempo real que permite explorar mis proyectos por categoría tecnológica:
- **React:** Aplicaciones interactivas como React Studio y herramientas dinámicas.
- **Corporativo & Negocios:** Portales empresariales como el *Portal Corporativo Total Ground*, *MUDAC (Mi Último Deseo A.C.)*, *OPG Mantenimiento Industrial*, *ENM Equipamiento*, entre otros.
- **Sistemas & Web Apps:** Herramientas operativas como el *Sistema de Tickets Total Ground*, *Demo ABC Médica*, *MindTrain* e invitaciones interactivas.
- **Mobile & APIs:** Proyectos multiplataforma y arquitecturas de microservicios.

---

## 🌐 Soporte Bilingüe (ES / EN)

El portafolio cuenta con internacionalización completa con persistencia de idioma:
- **Español:** [`index.html`](index.html)
- **Inglés:** [`index-en.html`](index-en.html)

Ambas versiones cuentan con conmutador dinámico de idiomas (Switch ES / EN) en el encabezado y navegación sincronizada.

---

## 🎨 Características Técnicas & UX/UI

- **Paleta de Colores Curada:** Fondo Dark Navy (`#0a192f` / `#112240`), tipografías técnicas (`JetBrains Mono` y `Space Grotesk`) y acentos de color Neón (`#64ffda`, `#61dafb`).
- **Cursor Magnético Interactivo:** Cursor personalizado reactivo con retardo cinético follower; optimizado con detección inteligente `@media (pointer: coarse)` para desactivarse limpiamente en pantallas táctiles y dispositivos móviles.
- **Animaciones Scroll Reveal:** Efectos visuales de aparición y transformaciones dinámicas impulsadas por la API nativa `IntersectionObserver`.
- **Componentes Glassmorphism:** Barra de navegación superior y tarjetas con efectos de desenfoque de fondo (`backdrop-filter: blur()`).
- **Zero-Dependency Architecture:** Todo el frontend está construido en HTML5 semántico, CSS3 moderno y Vanilla JavaScript sin necesidad de empaquetadores complejos o sobrecarga de librerías.

---

## 📂 Estructura del Repositorio

```bash
Portafolio/
├── index.html                 # Portafolio principal (Versión en Español)
├── index-en.html              # Portafolio bilingüe (Versión en Inglés)
├── README.md                  # Documentación del proyecto
├── .gitignore                 # Reglas de exclusión de Git
└── images/                    # Recursos visuales y assets del portafolio
    ├── icons8-dev-16.png      # Favicon del sitio
    ├── tg.png, abc.png, ...   # Miniaturas de proyectos web
    ├── chambapp/              # Assets y capturas de Chambapp
    └── totalmonitor/          # Evidencia y capturas reales de Total Monitor v2.0
        ├── totalmonitor-dashboard-modbus.jpg
        ├── totalmonitor-dashboard-lorawan.jpg
        ├── totalmonitor-harmonics.jpg
        ├── totalmonitor-login.jpg
        └── totalmonitor-splash.jpg
```

---

## 🛠️ Stack de Tecnologías

| Área | Tecnologías |
| :--- | :--- |
| **Software Empresarial & Desktop** | C# / .NET, WPF (XAML), Windows Services, Multi-threading |
| **IoT & Protocolos Industriales** | Modbus RTU / RS485, LoRaWAN, The Things Network (TTN), Comunicación Serial (COM) |
| **Desarrollo Mobile** | Flutter, Dart, Android SDK, Geolocalización GPS, Push Notifications |
| **Desarrollo Web & Frontend** | HTML5 Semántico, CSS3 (Variables, Flexbox, Grid, Keyframes), JavaScript (ES6+), React |
| **Backend & APIs** | Laravel, PHP, REST APIs, MySQL, Mercado Pago SDK, Webhooks |
| **Herramientas & Entorno** | Git, GitHub, VS Code, Visual Studio, Postman, Figma |

---

## 🚀 Despliegue e Instalación Local

Para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/roman00120/portafolio.git
   cd portafolio
   ```

2. **Abrir en el navegador:**
   - Puedes abrir directamente el archivo `index.html` en tu navegador favorito.
   - O usando cualquier servidor HTTP local:
     ```bash
     # Usando Python 3
     python -m http.server 8000
     
     # O usando Node (npx)
     npx serve .
     ```
   - Abre `http://localhost:8000` en tu navegador.

3. **Despliegue en la nube:**
   El proyecto es 100% compatible con **GitHub Pages**, **Vercel**, **Netlify**, o cualquier hosting tradicional (Apache/cPanel/public_html) arrastrando directamente los archivos.

---

## 📬 Contacto

Si deseas ponerte en contacto conmigo para discutir una propuesta de trabajo, desarrollo a medida o consultoría técnica:

- 💬 **WhatsApp:** [+52 33 2044 7688](https://wa.me/523320447688)
- 🐙 **GitHub:** [@roman00120](https://github.com/roman00120)
- 🌐 **Plataforma Chambapp:** [chambapp.com.mx](https://chambapp.com.mx/)

---

<div align="center">
  <sub>Diseñado, estructurado y desarrollado por <strong>Roman Velasco Moctezuma</strong> © 2026. Todos los derechos reservados.</sub>
</div>
