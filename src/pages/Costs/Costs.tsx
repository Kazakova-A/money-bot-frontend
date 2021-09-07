import React, {
  memo, useEffect, useMemo, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  CircularProgress,
  TableContainer,
  Paper,
  Button,
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

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dateStart, setDateStart] = useState<number>();
  const [dateEnd, setDateEnd] = useState<number>();

  useEffect(() => {
    CostsActions.getNextPage(currentPage);
  }, [currentPage]);

  const formatedRows : CostsRecord[] = list.map(
    (item: CostsRecord): CostsRecord => ({
      ...item,
      createdAt: moment(item.createdAt).format('MM-DD-YYYY'),
    }),
  );

  const [rows, setRows] = useState<CostsRecord[]>(formatedRows);

  const sortList = (type?: string) => {
    // TODO: change on the filer from thebackend when api will be ready
    const sortedRows = formatedRows.filter((item: CostsRecord) => (type ? item.type === type : item));
    setRows(sortedRows.reverse());
    // dispatch(CostsActions.getCostsRequest({ sortType }));
  };

  const handleDateStartChanging = (date?: string) => {
    console.log('vvvvdate', date);
    setDateStart(parseInt(date || '0', 10));
    console.log(dateStart);
  };

  const handleDateEndChanging = (date?: string) => {
    console.log('vvvvdate', date);
    setDateEnd(parseInt(date || '0', 10));
    // console.log(dateEnd);
  };

  /* const setSortDataValue = () => {
    if (dateStart && dateEnd) {
      const sortedRows = formatedRows.filter((item: CostsRecord) => {
        dateStart && dateEnd ? (Date.parse(item.createdAt) >= dateStart && Date.parse(item.createdAt) <= dateEnd) : item;
      });
      setRows(sortedRows);
    }
  }; */

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(CostsActions.getCostsRequest({
      sortType: '',
      currentPage,
      dateStart,
      dateEnd,
    }));
  }, [dispatch, currentPage, dateStart, dateEnd]);

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
            handleDateStartChanging={handleDateStartChanging}
            handleDateEndChanging={handleDateEndChanging}
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
                Сортировать по
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
      <Button
        variant="contained"
        onClick={goToPrevPage}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={goToNextPage}
      >
        Next
      </Button>
    </Container>
  );
};

export default memo(Costs);
