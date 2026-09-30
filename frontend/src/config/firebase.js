import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { env } from '@/config/env'

const firebaseConfig = {
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId,
  appId: env.firebase.appId,
}

if (import.meta.env.DEV && !firebaseConfig.apiKey) {
  // eslint-disable-next-line no-console
  console.warn(
    '[firebase] Missing Firebase environment variables. Copy frontend/.env.example to ' +
      'frontend/.env and fill in your Firebase project credentials before using authentication.',
  )
}

// Guard against re-initializing the app on hot reloads / repeated imports.
const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

export default firebaseApp