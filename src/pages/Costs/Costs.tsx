import React, {
  memo, useEffect, useState,
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
    dispatch(CostsActions.getCostsRequest({
      sortType: '',
      currentPage,
      dateStart,
      dateEnd,
    }));
  };

  const handleDateStartChanging = (date?: string) => {
    setDateStart(parseInt(date || '1609448400000', 10));
  };

  const handleDateEndChanging = (date?: string) => {
    setDateEnd(parseInt(date || '3187285200000', 10));
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const submitDate = () => {
    dispatch(CostsActions.getCostsRequest({
      sortType: '',
      currentPage,
      dateStart,
      dateEnd,
    }));
    sortList('');
  };

  const resetDate = () => {
    handleDateStartChanging('1609448400000');
    handleDateEndChanging('3187285200000');
    dispatch(CostsActions.getCostsRequest({
      sortType: '',
      currentPage,
      dateStart,
      dateEnd,
    }));
    submitDate();
  };

  useEffect(() => {
    dispatch(CostsActions.getCostsRequest({
      sortType: '',
      currentPage,
      dateStart,
      dateEnd,
    }));
  }, [dispatch, currentPage, dateStart, dateEnd]);

  /* eslint-disable */
  useEffect(() =>{
    console.log(currentPage, dateStart, dateEnd, formatedRows);
  }, [dateStart, dateEnd, currentPage])
  /* eslint-enable */

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
          <Button
            style={{ float: 'right' }}
            variant="contained"
            onClick={submitDate}
          >
            Submit
          </Button>
          <Button
            style={{ float: 'right' }}
            variant="contained"
            onClick={resetDate}
          >
            Reset
          </Button>
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
