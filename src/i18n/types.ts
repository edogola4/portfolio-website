export const supportedLocales = ['en', 'sw'] as const;
export type SupportedLocale = typeof supportedLocales[number];

export function isSupportedLocale(l: string | undefined): l is SupportedLocale {
  return !!l && (supportedLocales as readonly string[]).includes(l);
}
