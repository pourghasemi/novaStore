import 'styled-components';

import type { AppTheme } from '@/styles/theme';

declare module 'styled-components' {
  // Required to augment styled-components' DefaultTheme.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}