if (
  !import.meta.env.VITE_GOOGLE_BOOKS_API_URL ||
  !import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
) {
  throw new Error(
    "Please initialize the Google API settings in your environment",
  );
}

export const BOOKS_API_URL = import.meta.env.VITE_GOOGLE_BOOKS_API_URL;
export const BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET = import.meta.env
  .VITE_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGE_SENDER_ID = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID = import.meta.env
  .VITE_FIREBASE_MEASUREMENT_ID;
