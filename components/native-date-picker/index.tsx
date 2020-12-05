import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import NativePicker from '../native-picker';

const startYear = new Date().getFullYear();

function getDays(year: string, month: string) {
  const days = [];
  month = String(parseInt(month, 10));
  const date = new Date(Number(year), Number(month), 0);
  const maxDay = date.getDate();
  for (let i = 1; i <= maxDay; i++) {
    const day = i < 10 ? '0' + i : String(i);
    days.push(day);
  }
  return days;
}

function getRange(format: string) {
  const date = new Date();
  const years = [];
  const months = [];
  const range = [];

  const currentYear = startYear;
  const currentMonth = date.getMonth();
  const days = getDays(String(currentYear), String(currentMonth + 1));
  const hours = [...new Array(24).keys()].map(i => (i < 10 ? '0' + i : String(i)));
  const minutes = [...new Array(60).keys()].map(i => (i < 10 ? '0' + i : String(i)));

  for (let i = currentYear; i <= currentYear + 10; i++) {
    years.push(i);
  }

  for (let i = 1; i <= 12; i++) {
    const month = i < 10 ? '0' + i : String(i);
    months.push(month);
  }

  if (format.includes('YYYY')) {
    range.push(years);
  }
  if (format.includes('MM')) {
    range.push(months);
  }
  if (format.includes('DD')) {
    range.push(days);
  }
  if (format.includes('HH')) {
    range.push(hours);
  }
  if (format.includes('mm')) {
    range.push(minutes);
  }

  return range;
}

function getInitValue(format: string) {
  return dayjs().format(format);
}

function getFormat(type: string, format?: string) {
  let rangeFormat = 'YYYY-MM-DD';
  if (format && typeof format === 'string') {
    rangeFormat = format;
  } else {
    if (type === 'date') {
      rangeFormat = 'YYYY-MM-DD';
    }
    if (type === 'time') {
      rangeFormat = 'HH:mm';
    }
    if (type === 'datetime') {
      rangeFormat = 'YYYY-MM-DD HH:mm';
    }
  }
  return rangeFormat;
}

function transformDate2Index(
  value: string,
  format: string,
  additionalOptions: any[],
  hasAdditionalOptions: boolean,
) {
  if (!value) {
    return null;
  }
  let date = value;
  let additionalValue = '';
  if (hasAdditionalOptions) {
    const splitDate = value.split(' ');
    date = splitDate?.[0];
    additionalValue = splitDate?.[1];
  }
  const o: any = dayjs(date);
  const indexArray = [];
  if (format.includes('YYYY')) {
    indexArray.push(o.$y - startYear);
  }
  if (format.includes('MM')) {
    indexArray.push(o.$M);
  }
  if (format.includes('DD')) {
    indexArray.push(o.$D - 1);
  }
  if (format.includes('HH')) {
    const hourIndex = date.indexOf(':');
    const H = Number(date.slice(hourIndex - 2, hourIndex));
    indexArray.push(isNaN(o.$H) ? H : o.$H);
  }
  if (format.includes('mm')) {
    const minuteIndex = format.includes('HH') ? date.indexOf(':') + 3 : date.indexOf(':');
    const m = Number(date.slice(minuteIndex - 2, minuteIndex));
    indexArray.push(isNaN(o.$m) ? m : o.$m);
  }
  if (hasAdditionalOptions) {
    const additionalIndex = additionalOptions?.[0].indexOf(additionalValue);
    indexArray.push(additionalIndex);
  }

  return indexArray?.map(i => String(i));
}

export interface DatePickerProps {
  value?: string;
  type?: 'date' | 'time' | 'datetime';
  format?: string;
  disabled?: boolean;
  rangeColumnsFlex?: number[];
  additionalOptions?: any[];
  children?: React.ReactNode;
  onChange?: (v: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const {
    type = 'date',
    format,
    value = getInitValue(getFormat(type, format)),
    additionalOptions = [],
    rangeColumnsFlex,
    disabled,
    children,
    onChange,
  } = props;

  const hasAdditionalOptions = useMemo(() => {
    if (Array.isArray(additionalOptions) && additionalOptions.length > 0) {
      return true;
    }
    return false;
  }, [additionalOptions]);
  const rangeFormat = useMemo(() => getFormat(type, format), [type, format]);
  const range = useMemo(() => getRange(rangeFormat).concat(additionalOptions), [
    rangeFormat,
    additionalOptions,
  ]);

  const handleChange = (v: number | number[]) => {
    const columnSelectedData = (v as number[])?.map((i, columnIndex) => range?.[columnIndex]?.[i]);

    let dateArray = columnSelectedData;
    let additionalArray: any = [];
    if (hasAdditionalOptions) {
      dateArray = columnSelectedData.slice(0, -additionalOptions.length);
      additionalArray = columnSelectedData.slice(-additionalOptions.length);
    }

    if (dateArray.length < 5 && rangeFormat.includes('mm')) {
      const filledLength = 5 - dateArray.length;
      const insert = dayjs().format('YYYY-MM-DD').split('-').slice(0, filledLength);
      dateArray.unshift(...insert);
    }
    dateArray[1] = (dateArray[1] as number) - 1;
    // @ts-ignore
    const date = dayjs(new Date(...dateArray)).format(rangeFormat);
    const text = `${date}${hasAdditionalOptions ? ' ' + additionalArray?.join(' ') : ''}`;
    onChange?.(text);
  };

  const pickerValue = useMemo(
    () => transformDate2Index(value, rangeFormat, additionalOptions, hasAdditionalOptions),
    [value, rangeFormat, additionalOptions, hasAdditionalOptions],
  );

  return (
    <NativePicker
      value={pickerValue}
      onChange={handleChange}
      range={range}
      disabled={disabled}
      rangeColumnsFlex={rangeColumnsFlex}
    >
      {children}
    </NativePicker>
  );
};

export default DatePicker;
