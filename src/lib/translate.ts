export function changeLanguage(langCode: "fr" | "mg" | "en") {
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

  if (!select) {
    // Le widget Google Translate n'est pas encore chargé, on réessaie un peu plus tard
    setTimeout(() => changeLanguage(langCode), 300);
    return;
  }

  select.value = langCode;
  select.dispatchEvent(new Event("change"));
}