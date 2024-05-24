import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'JustSendIt',
          short_name: 'JustSendIt',
          description: 'JustSendIt',
          theme_color: '#1E6D80',
          screenshots: [
            {
              src: 'screenshot.png',
              sizes: '384x840',
              type: 'image/png',
              form_factor: 'wide',
              label: 'JustSendIt'
            },
            {
              src: 'screenshot.png',
              sizes: '384x840',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'JustSendIt'
            }
          ],
          icons: [
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png'
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        // devOptions: {
        //   enabled: true
        // }
      })
  ],
  // base: '/just-send-it/'
})

