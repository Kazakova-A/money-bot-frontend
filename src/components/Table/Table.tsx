import React, { memo } from 'react';
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from '@material-ui/core';

import { CostsRecord } from 'store/types/costs';
import { Headers } from 'pages/Costs/constants';

interface TablseProps {
  headers: Headers[]
  rows: CostsRecord[]
}

const TableComponent = ({
  headers,
  rows,
}: TablseProps): JSX.Element => (
  <Table>
    <TableHead>
      <TableRow>
        {headers.map((headCell) => (
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
      {rows.map((item: CostsRecord) => (
        <TableRow key={item.createdAt}>
          {headers.map(({ id }: Headers) => (
            <TableCell key={id}>
              {item[id]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default memo(TableComponent);
