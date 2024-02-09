import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    '__PUBLIC_URL__': JSON.stringify(process.env.VITE_PUBLIC_URL),
  }
//   ,
//   esbuild: {
//     // Ajouter cette option pour traiter les fichiers .js comme .jsx
//     loader: {
//       '.js': 'jsx',
//     },
// }
})