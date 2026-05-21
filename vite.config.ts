import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Allow external access from any IP
    port: 3000,
    open: true,
    hmr: {
      overlay: false,
    },
    // Additional security for external access
    cors: true,
    strictPort: false, // Allow port fallback if 5173 is busy
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion/react', 'lucide-react', 'react-router'],
    force: true,
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
