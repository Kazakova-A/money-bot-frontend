export type Headers = {
  id: 'type' | 'title' | 'sum' | 'createdAt';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
};

export const HEADERS: Headers[] = [
  {
    id: 'type', numeric: false, disablePadding: true, label: 'Тип',
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
