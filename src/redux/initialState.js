import { defaultStyle, defaultTitle } from '@/constans';
import { clone } from '@core/utils';

const defaultState = {
    colState: {},
    rowState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaultStyle,
    title: defaultTitle,
    openedDate: new Date().toJSON()
};

const normalize = state => ({
    ...state,
    currentStyles: defaultStyle,
    currentText: ''
});

export function normalizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState);
}
