import {isSupportedLocale, SupportedLocale} from '../types';

// Helper that only accepts a SupportedLocale
function acceptSupportedLocale(l: SupportedLocale) {
  return l;
}

// Valid locales compile
acceptSupportedLocale('en');
acceptSupportedLocale('sw');

// Invalid locale must fail type checking
// @ts-expect-error "xx" is not an allowed locale
acceptSupportedLocale('xx');

// Type guard should narrow string | undefined to SupportedLocale
let maybeLocale: string | undefined;
maybeLocale = 'en';
if (isSupportedLocale(maybeLocale)) {
  const narrowed: SupportedLocale = maybeLocale;
  void narrowed;
}

// When not supported, it should NOT narrow
let badLocale: string | undefined = 'xx';
if (isSupportedLocale(badLocale)) {
  // This block should not narrow for 'xx' at runtime, but type system
  // can only see the guard; we ensure direct assignment without guard fails.
}

// Direct assignment from unknown/undefined should fail
// @ts-expect-error cannot assign unknown/undefined to SupportedLocale
const mustFailAssignment: SupportedLocale = (undefined as unknown as string | undefined);
void mustFailAssignment;
