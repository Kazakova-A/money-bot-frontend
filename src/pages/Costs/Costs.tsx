import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import moment from 'moment';

import Table from 'components/Table';
import { CostsActions } from 'store/actions/costs';
import { RootState } from 'store/reducers';
import { CostsRecord } from 'store/types/costs';

import { HEADERS } from './constants';
import styles from './Costs.module.scss';

const Costs = (): JSX.Element => {
  const dispatch = useDispatch();
  const isLoading = useSelector<RootState, boolean>((state: RootState) => state.costs.isLoading);
  const list = useSelector<RootState, CostsRecord[]>((state: RootState) => state.costs.list);
  const rows = useMemo((): CostsRecord[] => list.map((item: CostsRecord): CostsRecord => ({
    ...item,
    createdAt: moment(item.createdAt).format('MM-DD-YYYY'),
  })), [list]);

  useEffect(() => {
    dispatch(CostsActions.getCostsRequest({}));
  }, [dispatch]);

  return (
    <Container className={styles.container}>
      {isLoading && <div className={styles.container}><CircularProgress /></div>}
      {!isLoading && (
        <Table headers={HEADERS} rows={rows} />
      )}
    </Container>
  );
};

export default memo(Costs);
