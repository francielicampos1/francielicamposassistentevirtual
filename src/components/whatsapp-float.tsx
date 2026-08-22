const WHATSAPP_URL =
  "https://wa.me/5514988294067?text=Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20apoio%20administrativo";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 left-5 z-50 flex size-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 ring-1 ring-black/5 transition-all duration-200 hover:scale-105 hover:shadow-xl sm:bottom-7 sm:left-7 sm:size-20"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-8 fill-white sm:size-10"
      >
        <path d="M16.03 4C9.4 4 4.03 9.37 4.03 16c0 2.11.55 4.09 1.5 5.81L4 28l6.35-1.5A11.95 11.95 0 0 0 16.03 28c6.62 0 12-5.37 12-12S22.65 4 16.03 4Zm0 21.85c-1.85 0-3.58-.5-5.06-1.38l-.36-.21-3.77.89.9-3.68-.23-.38a9.79 9.79 0 0 1-1.45-5.09c0-5.44 4.44-9.85 9.97-9.85 5.5 0 9.94 4.41 9.94 9.85 0 5.44-4.44 9.85-9.94 9.85Zm5.6-7.38c-.3-.16-1.78-.88-2.06-.98-.28-.1-.48-.16-.68.16-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.84 1.2 3.03.15.2 2.06 3.28 5.06 4.47 2.51 1 3.02.8 3.57.75.55-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.36Z" />
      </svg>
    </a>
  );
}
