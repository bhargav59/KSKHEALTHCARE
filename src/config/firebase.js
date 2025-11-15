import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Validate Firebase config and prevent initialization if values are missing
const requiredFields = [
  { key: 'apiKey', value: firebaseConfig.apiKey },
  { key: 'authDomain', value: firebaseConfig.authDomain },
  { key: 'projectId', value: firebaseConfig.projectId },
  { key: 'appId', value: firebaseConfig.appId }
];

const missing = requiredFields.filter(f => !f.value || String(f.value).trim() === '');
const looksLikePlaceholder = (val) => {
  if (!val) return false;
  const v = String(val);
  // Common placeholder pattern used in docs -> "AIzaSy..." or 'AIzaSy...'
  return v.includes('AIza') && v.length <= 40 && v.includes('...');
};

if (missing.length > 0) {
  console.error('[Firebase] Missing required environment variables:', missing.map(m => m.key));
}

if (looksLikePlaceholder(firebaseConfig.apiKey)) {
  console.error('[Firebase] Detected a placeholder API key in environment variable VITE_FIREBASE_API_KEY. Please update your .env with a real key.');
}

let app = null;
let auth = null;
let db = null;
let storage = null;
let analytics = null;

if (missing.length === 0 && !looksLikePlaceholder(firebaseConfig.apiKey)) {
  try {
    app = initializeApp(firebaseConfig);
    // Initialize Firebase services
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (err) {
    console.error('[Firebase] Initialization failed:', err);
    // keep exports as null to avoid runtime exceptions elsewhere
  }
} else {
  console.warn('[Firebase] Firebase is not initialized due to missing/invalid configuration. Some features will be disabled.');
}

export { auth, db, storage, analytics };
export default app;
