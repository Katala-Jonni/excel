import { storage } from '@core/utils';
import { defaultStyle, defaultTitle } from '@/constans';

const defaultState = {
    colState: {},
    rowState: {},
    dataState: {}, // {'0:1' ddd},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyle,
    title: defaultTitle
};

export const initialState = storage('excel-state')
    ? storage('excel-state')
    : defaultState;
