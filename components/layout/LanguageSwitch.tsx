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
      router.replace(segments.join('/'));
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="text-cream opacity-80 hover:opacity-100 transition-opacity font-sans text-sm font-bold uppercase"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
