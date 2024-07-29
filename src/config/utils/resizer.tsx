import type CustomTheme from '../../types/CustomTheme';

export function sizeOf(size: 'sm' | 'med' | 'lg', theme: CustomTheme): number {
  switch (size) {
    case 'sm':
      return theme.text.sm;
    case 'med':
      return theme.text.med;
    case 'lg':
      return theme.text.lg;
  }
}
