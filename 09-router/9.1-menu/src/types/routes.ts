export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Главная',      path: '/'           },
  { label: 'Дрифт-такси', path: '/drift'      },
  { label: 'Time Attack',  path: '/timeattack' },
  { label: 'Forza Karting', path: '/forza'    },
];