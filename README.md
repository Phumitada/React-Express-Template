# React-Express-Template

## Professional Web Development Template

A modern, production-ready React + Express template showcasing professional web development practices with complete authentication system.

## 🚀 Features

### 🔐 Authentication System
- **JWT Authentication** with refresh tokens
- **Persistent Sessions** using localStorage
- **Protected Routes** with middleware
- **Silent Error Handling** (no 401 console logs)
- **Auto Token Refresh** on expiration

### 🎨 Modern UI/UX
- **Responsive Design** with Tailwind CSS
- **Component Library** using shadcn/ui
- **Dark Mode Support** ready
- **Professional Layouts** (Auth/Main)
- **Smooth Animations** and transitions

### 🛠️ Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand with persistence
- **Backend**: Express.js, JWT authentication
- **UI Components**: shadcn/ui, Lucide Icons
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios with interceptors
- **Query Management**: TanStack Query

### 📱 Responsive Features
- **Mobile-First** design approach
- **Hamburger Menu** for navigation
- **Adaptive Layouts** per screen size
- **Touch-Friendly** interactions

## 📁 Project Structure

```
📁 client/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 ui/          # shadcn/ui components
│   │   └── 📄 Navbar.tsx    # Main navigation
│   ├── 📁 hooks/
│   │   ├── 📄 useAuth.ts     # Authentication logic
│   │   ├── 📄 useErrorHandler.ts # Error handling
│   │   └── 📄 useSilentAuth.ts # Console filtering
│   ├── 📁 layout/
│   │   ├── 📄 MainLayout.tsx # Layout with navbar
│   │   └── 📄 AuthLayout.tsx  # Layout without navbar
│   ├── 📁 pages/
│   │   ├── 📄 home.tsx       # Landing page
│   │   ├── 📄 login.tsx      # Login form
│   │   ├── 📄 register.tsx   # Registration form
│   │   └── 📄 protected.tsx  # Admin dashboard
│   ├── 📁 stores/
│   │   └── 📄 auth.store.ts  # Zustand store with persistence
│   ├── 📁 api/
│   │   ├── 📄 client.ts      # Axios configuration
│   │   └── 📁 services/
│   │       └── 📄 auth.service.ts # Auth API calls
│   └── 📁 utils/
│       └── 📄 console-filter.ts # 401 error filtering
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
└── 📄 vite.config.ts
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd professional-web-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Authentication Flow

### 1. User Registration
- Visit `/register`
- Fill in email and password
- Account created with JWT tokens
- Redirect to admin dashboard

### 2. User Login
- Visit `/login`
- Enter credentials
- Tokens stored in localStorage
- Redirect to admin dashboard

### 3. Protected Access
- All protected routes require authentication
- Automatic token refresh on expiration
- Silent redirect on token failure

### 4. Session Persistence
- User state persists across browser sessions
- Automatic restoration on page refresh
- Secure logout clears all data

## 🎯 Key Demonstrations

### ✅ Production-Ready Architecture
- **Scalable folder structure**
- **Separation of concerns**
- **Reusable components**
- **Type safety throughout**

### ✅ Security Best Practices
- **JWT token management**
- **Input validation** with Zod
- **Error boundary handling**
- **XSS protection** built-in

### ✅ Performance Optimizations
- **Lazy loading** components
- **Efficient state management**
- **Optimized bundle size**
- **Smooth animations**

### ✅ Developer Experience
- **Hot module replacement**
- **ESLint + Prettier** configured
- **TypeScript** strict mode
- **Clear documentation**

## 📱 Responsive Design

- **Desktop**: Full navigation with all features
- **Tablet**: Adaptive layout with touch support
- **Mobile**: Hamburger menu with optimized flow

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Create `.env` file in root:
```env
VITE_API_URL=http://localhost:3000/api
```

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        hover: '#YOUR_COLOR',
      }
    }
  }
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Use appropriate layout (MainLayout/AuthLayout)

## 📚 Learning Resources

This template demonstrates:
- **Modern React patterns** (hooks, context, composition)
- **State management** with Zustand
- **Form handling** with React Hook Form
- **Authentication flows** with JWT
- **Responsive design** with Tailwind CSS
- **TypeScript** best practices
- **API integration** with Axios

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Add tests if applicable
5. Submit pull request

## 📄 License

MIT License - feel free to use this template for your projects!

---

**Perfect for:**
- 🚀 **Portfolio websites**
- 💼 **Professional resumes**
- 🏗 **Project templates**
- 📚 **Learning purposes**
- 🛠️ **Development demos**

**Showcases:**
- ✅ Modern web development skills
- ✅ Authentication implementation
- ✅ Responsive design capabilities
- ✅ Production-ready codebase
- ✅ Professional project structure