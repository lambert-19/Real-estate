import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
// create the server proxy
server:{
  proxy:{
    '/api':{
      target:"http://localhost:5000",
      secure:false,
    },
  },
},

  plugins: [react()],
})
