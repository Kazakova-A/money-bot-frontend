/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo, useState } from 'react';
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TablePagination,
  TableBody,
  TableSortLabel,
} from '@material-ui/core';
import { SortDirection } from '@material-ui/core/TableCell';
import { clearLine } from 'readline';

interface TablseProps {
  headers: {
    [key: string]: any;
  }
  rows: {
    [key: string]: any;
  }[]
}

type Sort = 'desc' | 'asc' | undefined;
type Data = {
  [key: string]: any
};

const data: Data[] = [
  {
    category: 'a1', date: 1, total: 1,
  },
  {
    category: 'b', date: 2, total: 2,
  },
];

const headCells: Data[] = [
  {
    id: 'category', numeric: false, disablePadding: true, label: 'Category',
  },
  {
    id: 'date', numeric: true, disablePadding: false, label: 'Date',
  },
  {
    id: 'total', numeric: true, disablePadding: false, label: 'Total costs',
  },
];

const TableComponent = ({
  headers,
  rows,
}: TablseProps): JSX.Element => {
  const [order, setOrder] = useState<SortDirection>('asc');
  const [orderBy, setOrderBy] = useState('amount');

  return (
    <Table>
      <TableHead>
        <TableRow>

          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="left"
              padding={headCell.disablePadding ? 'none' : 'normal'}
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow>
            {headCells.map(({ id }: Data) => (
              <TableCell>
                {item[id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(TableComponent);
