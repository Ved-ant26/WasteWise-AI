import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '@/config/firebase'

// Maps Firebase Authentication error codes to user-friendly messages.
// Raw Firebase error codes / messages are never shown to the user.
const ERROR_MESSAGES = {
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/user-disabled': 'This account has been disabled. Please contact support.',
  'auth/user-not-found': 'The email or password is incorrect.',
  'auth/wrong-password': 'The email or password is incorrect.',
  'auth/invalid-credential': 'The email or password is incorrect.',
  'auth/invalid-login-credentials': 'The email or password is incorrect.',
  'auth/missing-password': 'Please enter your password.',
  'auth/email-already-in-use': 'An account with this email already exists.',
  'auth/weak-password': 'Your password is too weak. Please choose a stronger password.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/network-request-failed': 'Network error. Please check your connection and try again.',
  'auth/operation-not-allowed': 'Email/password sign-in is not enabled for this project.',
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again.'

function toFriendlyError(error) {
  const code = error?.code ?? ''
  const message = ERROR_MESSAGES[code] ?? DEFAULT_ERROR_MESSAGE
  return new Error(message)
}

/**
 * Registers a new user with email/password and sets their display name.
 * Does not persist any data outside Firebase Authentication.
 */
export async function registerUser({ fullName, email, password }) {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password)

    if (fullName) {
      await updateProfile(credential.user, { displayName: fullName })
    }

    return credential.user
  } catch (error) {
    throw toFriendlyError(error)
  }
}

/**
 * Signs a user in with email/password.
 * rememberMe controls whether the session survives a browser restart
 * (local persistence) or ends when the browser/tab closes (session persistence).
 */
export async function loginUser({ email, password, rememberMe = true }) {
  try {
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
    const credential = await signInWithEmailAndPassword(auth, email, password)
    return credential.user
  } catch (error) {
    throw toFriendlyError(error)
  }
}

/** Signs the current user out. */
export async function logoutUser() {
  try {
    await signOut(auth)
  } catch (error) {
    throw toFriendlyError(error)
  }
}

/** Sends a password reset email for the given address. */
export async function resetUserPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw toFriendlyError(error)
  }
}