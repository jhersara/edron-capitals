# 🏦 Edron Capitals - Plataforma de Inversión

Plataforma web completa para gestión de fondos de inversión con dashboard de usuario y panel administrativo.

## 📋 Requisitos Previos

- Node.js 18+ instalado
- PostgreSQL instalado (o cuenta en Supabase/Vercel Postgres)
- Cuenta de Stripe para pagos

## 🚀 Instalación

### 1. Clonar/Crear el proyecto

```bash
npx create-next-app@latest edron-capitals
cd edron-capitals
```

### 2. Instalar dependencias

```bash
npm install prisma @prisma/client next-auth bcryptjs stripe react-icons recharts
npm install -D prisma
```

### 3. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus credenciales
```

### 4. Configurar base de datos

```bash
# Inicializar Prisma
npx prisma init

# Copiar el schema.prisma proporcionado a prisma/schema.prisma

# Generar migraciones
npx prisma migrate dev --name init

# Generar el cliente de Prisma
npx prisma generate
```

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
edron-capitals/
├── app/
│   ├── (auth)/              # Rutas de autenticación
│   │   ├── login/
│   │   ├── register/
│   │   └── verify/
│   ├── (public)/            # Rutas públicas
│   │   ├── page.js          # Landing page
│   │   ├── about/
│   │   └── contact/
│   ├── (dashboard)/         # Rutas protegidas
│   │   ├── user/            # Dashboard de usuario
│   │   │   ├── overview/
│   │   │   ├── investments/
│   │   │   ├── transactions/
│   │   │   └── transfer/
│   │   └── admin/           # Panel administrativo
│   │       ├── dashboard/
│   │       ├── announcements/
│   │       ├── users/
│   │       └── performance/
│   ├── api/                 # API Routes
│   │   ├── auth/
│   │   ├── investments/
│   │   ├── transactions/
│   │   └── webhooks/
│   ├── layout.js
│   └── globals.css
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
├── lib/
│   ├── prisma.js            # Cliente de Prisma
│   ├── auth.js              # Configuración NextAuth
│   └── utils.js
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   ├── components/
│   └── pages/
└── .env
```

## 🔐 Seguridad

- ✅ Autenticación con NextAuth.js
- ✅ Encriptación de passwords con bcrypt
- ✅ Verificación KYC en registro
- ✅ Tokens JWT para sesiones
- ✅ Validación de documentos de identidad

## 💳 Pasarela de Pagos

- Integración con Stripe
- Soporte para depósitos y retiros
- Webhooks para confirmación automática

## 🎨 Estilos

- CSS Modules nativos
- Diseño responsive
- Sin librerías de UI externas

## 📊 Features

### Para Usuarios:
- Dashboard con resumen de inversiones
- Visualización de rendimientos diarios
- Gráficas de performance
- Sistema de depósitos/retiros
- Historial de transacciones
- Notificaciones en tiempo real

### Para Administradores:
- Panel de control completo
- Gestión de anuncios
- Actualización de rendimientos del fondo
- Gestión de usuarios
- Reportes y estadísticas
- Monitoreo de transacciones

## 🗄️ Base de Datos

Modelos principales:
- **User**: Usuarios del sistema
- **Investment**: Inversiones de usuarios
- **DailyReturn**: Rendimientos diarios
- **Transaction**: Depósitos y retiros
- **FundPerformance**: Performance del fondo
- **Announcement**: Anuncios del sistema
- **Notification**: Notificaciones a usuarios

## 📝 Scripts Disponibles

```bash
npm run dev          # Ejecutar en desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar en producción
npm run lint         # Linter
npx prisma studio    # Ver base de datos
npx prisma migrate   # Crear migraciones
```

## 🌐 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Configurar en Vercel:
1. Conectar base de datos PostgreSQL
2. Agregar variables de entorno
3. Deploy automático desde Git

## 📧 Contacto

Para soporte: info@edroncapitals.com

## 📄 Licencia

Privado - Edron Capitals © 2025