import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { CostsActions } from 'store/actions/costs';
import Table from 'components/Table';

import styles from './Costs.module.scss';

const Costs = (): JSX.Element => {
  const dispatch = useDispatch();

  const sortData = () => {
    console.log('sort');
  };

  useEffect(() => {
    dispatch(CostsActions.getCostsRequest({}));
  }, [dispatch]);

  return (
    <Container className={styles.container}>
      <Table headers={[]} rows={[]} />
    </Container>
  );
};

export default memo(Costs);
