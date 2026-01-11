import type { ConfigContext, ExpoConfig } from 'expo/config';
import { version } from './package.json';

const OWNER = 'luxa-digitals';
const PROJECT_ID = 'da8523e0-5bbe-46ba-8a73-73b919fce765';

type AppEnv = 'development' | 'preview' | 'production';
const APP_ENV = (process.env.APP_ENV as AppEnv) ?? 'development';

function ids(env: AppEnv) {
  const baseName = 'Quitting';
  const baseBundle = 'com.luxasolution.quitting';
  const baseScheme = 'quitting';

  if (env === 'production') {
    return {
      name: baseName,
      iosBundleId: baseBundle,
      androidPackage: baseBundle,
      scheme: baseScheme,
    };
  }

  if (env === 'preview') {
    return {
      name: `${baseName} (Preview)`,
      iosBundleId: `${baseBundle}.preview`,
      androidPackage: `${baseBundle}.preview`,
      scheme: `${baseScheme}-preview`,
    };
  }

  return {
    name: `${baseName} (Dev)`,
    iosBundleId: `${baseBundle}.dev`,
    androidPackage: `${baseBundle}.dev`,
    scheme: `${baseScheme}-dev`,
  };
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const { name, iosBundleId, androidPackage, scheme } = ids(APP_ENV);

  return {
    ...config,
    name,
    slug: 'quittingmobile',

    scheme,
    version,

    newArchEnabled: true,
    platforms: ['ios', 'android'],
    orientation: 'portrait',

    plugins: ['expo-router', 'expo-localization', 'expo-font'],

    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },

    userInterfaceStyle: 'automatic',
    assetBundlePatterns: ['**/*'],

    icon: './assets/app-icons/ios-light.png',
    splash: {
      image: './assets/app-icons/splash-icon-light.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
      dark: {
        image: './assets/app-icons/splash-icon-dark.png',
        backgroundColor: '#000000',
      },
    },

    ios: {
      ...config.ios,
      bundleIdentifier: iosBundleId,
      supportsTablet: false,
      icon: './assets/app-icons/ios-light.png',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },

    android: {
      ...config.android,
      package: androidPackage,
      edgeToEdgeEnabled: true,
      adaptiveIcon: {
        foregroundImage: './assets/app-icons/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },

    runtimeVersion: {
      policy: 'fingerprint',
    },

    updates: {
      url: `https://u.expo.dev/${PROJECT_ID}`,
    },

    extra: {
      ...config.extra,
      router: {},
      eas: {
        projectId: PROJECT_ID,
      },
    },

    owner: OWNER,
  };
};
