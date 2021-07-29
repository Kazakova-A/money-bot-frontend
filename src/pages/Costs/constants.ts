export type Headers = {
  id: 'type' | 'title' | 'sum' | 'createdAt';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
};

export type SelectTypes = {
  label: string;
  value: string;
};

export const HEADERS: Headers[] = [
  {
    id: 'type', numeric: false, disablePadding: false, label: 'Тип',
  },
  {
    id: 'title', numeric: true, disablePadding: false, label: 'Трата',
  },
  {
    id: 'sum', numeric: true, disablePadding: false, label: 'Потрачено',
  },
  {
    id: 'createdAt', numeric: true, disablePadding: false, label: 'Дата',
  },
];

export const SORT_TYPES = [
  { label: 'Все', value: '' },
  { label: 'Транспорт', value: 'транспорт' },
  { label: 'Развлечения', value: 'развлечения' },
  { label: 'Продовольствие', value: 'продовольствие' },
  { label: 'Одежда', value: 'одежда' },
];
