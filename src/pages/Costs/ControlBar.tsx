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
  handleDateStartChanging: (date?: string) => void;
  handleDateEndChanging: (date?: string) => void;
}

const ToolBar = ({ handleSort, handleDateStartChanging, handleDateEndChanging }: ToolbarProps): JSX.Element => {
  const [sortType, setSortType] = useState<string | unknown>('');
  const [selectedStartDate, setSelectedStartDate] = useState<moment.Moment | null>(moment());
  const [selectedEndDate, setSelectedEndDate] = useState<moment.Moment | null>(moment());
  const [inputStartValue, setInputStartValue] = useState<string>(moment().format('YYYY-MM-DD'));
  const [inputEndValue, setInputEndValue] = useState<string>(moment().format('YYYY-MM-DD'));

  const handleDateStartChange = (date: React.SetStateAction<moment.Moment | null>, value?: string | null | undefined) => {
    setSelectedStartDate(date);
    setInputStartValue(value as string);
    handleDateStartChanging(moment(value).format('x'));
  };

  const handleDateEndChange = (date: React.SetStateAction<moment.Moment | null>, value?: string | null | undefined) => {
    setSelectedEndDate(date);
    setInputEndValue(value as string);
    handleDateEndChanging(moment(value).format('x'));
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
        От:
        <KeyboardDatePicker
          autoOk
          showTodayButton
          value={selectedStartDate}
          format="YYYY-MM-DD"
          inputValue={inputStartValue}
          onChange={handleDateStartChange}
          rifmFormatter={dateFormatter}
        />
        До:
        <KeyboardDatePicker
          autoOk
          showTodayButton
          value={selectedEndDate}
          format="YYYY-MM-DD"
          inputValue={inputEndValue}
          onChange={handleDateEndChange}
          rifmFormatter={dateFormatter}
        />
      </MuiPickersUtilsProvider>
    </Toolbar>
  );
};

export default memo(ToolBar);
