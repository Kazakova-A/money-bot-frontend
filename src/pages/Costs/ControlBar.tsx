import React, { memo, useState } from 'react';
import {
  Select,
  Toolbar,
  MenuItem,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import { SORT_TYPES, SelectTypes } from './constants';

import styles from './Costs.module.scss';

interface ToolbarProps {
  handleSort: (type?: string) => void;
  handleDateChanging: (date?: string) => void;
}

const ToolBar = ({ handleSort, handleDateChanging }: ToolbarProps): JSX.Element => {
  const [sortType, setSortType] = useState<string | unknown>('');
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(moment());
  const [inputValue, setInputValue] = useState<string>(moment().format('YYYY-MM-DD'));

  const handleDateChange = (date: React.SetStateAction<moment.Moment | null>, value?: string | null | undefined) => {
    setSelectedDate(date);
    setInputValue(value as string);
    handleDateChanging(moment(value).format('x'));
  };

  const handleSortChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>,
  ) => {
    setSortType(event.target.value);
    handleSort(event.target.value as string);
  };

  const dateFormatter = (str: string): string => str;

  return (
    <Toolbar className={styles.toolbar}>
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
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <KeyboardDatePicker
          autoOk
          showTodayButton
          value={selectedDate}
          format="YYYY-MM-DD"
          inputValue={inputValue}
          onChange={handleDateChange}
          rifmFormatter={dateFormatter}
        />
      </MuiPickersUtilsProvider>
    </Toolbar>
  );
};

export default memo(ToolBar);
