import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

import { RootState } from 'store/reducers';
import { UtilsActions } from 'store/actions/utils';

import styles from './Notification.module.scss';

const Notification = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    isOpen,
    text,
    type,
  } = useSelector((state: RootState) => state.utils.notification);

  const onClose = () => {
    dispatch(UtilsActions.closeNotification());
    setTimeout(() => dispatch(UtilsActions.clearNotification()), 200);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(UtilsActions.closeNotification());
        dispatch(UtilsActions.clearNotification());
      }, 5000);
    }
  }, [dispatch, isOpen]);

  return (
    <>
      {isOpen && (
      <Alert severity={type} onClose={onClose} className={styles.notification}>
        {text}
      </Alert>
      )}
    </>
  );
};

export default memo(Notification);
