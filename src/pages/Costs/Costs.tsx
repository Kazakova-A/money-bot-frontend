import React, {
  memo, useEffect, useMemo, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  CircularProgress,
  TableContainer,
  Paper,
} from '@material-ui/core';
import moment from 'moment';

import Table from 'components/Table';
import { CostsActions } from 'store/actions/costs';
import { RootState } from 'store/reducers';
import { CostsRecord } from 'store/types/costs';
import ToolBar from './ControlBar';

import { HEADERS } from './constants';
import styles from './Costs.module.scss';

const Costs = (): JSX.Element => {
  const dispatch = useDispatch();

  const isLoading = useSelector<RootState, boolean>(
    (state: RootState) => state.costs.isLoading,
  );
  const list = useSelector<RootState, CostsRecord[]>(
    (state: RootState) => state.costs.list,
  );

  const formatedRows = useMemo(
    (): CostsRecord[] => list.map(
      (item: CostsRecord): CostsRecord => ({
        ...item,
        createdAt: moment(item.createdAt).format('MM-DD-YYYY'),
      }),
    ),
    [list],
  );

  const [rows, setRows] = useState<CostsRecord[]>(formatedRows);

  const sortList = (type?: string) => {
    // TODO: change on the filer from thebackend when api will be ready
    const sortedRows = formatedRows.filter((item: CostsRecord) => (type ? item.type === type : item));

    setRows(sortedRows);
    // dispatch(CostsActions.getCostsRequest({ sortType }));
  };

  const handleDateChanging = (date?: string) => {
    console.log('vvvvdate', date);
    // dispatch(CostsActions.getCostsRequest({ sortType, time: date}));
  };

  useEffect(() => {
    dispatch(CostsActions.getCostsRequest({ sortType: '' }));
  }, [dispatch]);

  return (
    <Container className={styles.container}>
      {isLoading && (
        <div className={styles.container}>
          <CircularProgress />
        </div>
      )}
      {!isLoading && (
        <Paper className={styles.tableContainer}>
          <ToolBar
            handleSort={sortList}
            handleDateChanging={handleDateChanging}
          />
          {/* <Toolbar>
            <Select
              value={sortType}
              onChange={handleSortChange}
              label="select"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="" disabled>
                ?????????????????????? ????
              </MenuItem>
              {SORT_TYPES.map((item: SelectTypes) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Toolbar> */}
          <TableContainer>
            <Table headers={HEADERS} rows={rows} />
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
};

export default memo(Costs);
