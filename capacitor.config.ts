import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.gallery.com',
  appName: 'gallery-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
