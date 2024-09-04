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