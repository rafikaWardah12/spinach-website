// import "server-only";

// Import your dictionary files
import en from "./dictionaries/en.json";
import id from "./dictionaries/id.json";

export type Locale = "en" | "id";

// Create a dictionary object with imported language files
const dictionaries = {
  en,
  id,
};

export const getDictionary = (locale: Locale) => {
  if (locale in dictionaries) {
    return dictionaries[locale];
  }
  
  console.warn(`Locale '${locale}' not found. Falling back to English.`);
  return dictionaries.id; // Fallback to English if the locale is not found
};
