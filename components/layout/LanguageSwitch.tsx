'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    startTransition(() => {
      // Very basic locale switcher for next-intl (assuming prefix-based routing)
      const segments = pathname.split('/');
      segments[1] = nextLocale;
      router.replace(segments.join('/') + window.location.search + window.location.hash);
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      disabled={isPending}
      lang={locale === 'es' ? 'en' : 'es'}
      aria-label={locale === 'es' ? 'View site in English' : 'Ver el sitio en español'}
      className="text-cream opacity-90 hover:opacity-100 transition-opacity font-sans text-sm font-bold uppercase min-w-[44px] min-h-[44px] px-2 inline-flex items-center justify-center"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
