import { toInlineStyles } from '@core/utils';
import { defaultStyle } from '@/constans';
import { parse } from '@core/parse';

const CODES = {
    A: 65,
    Z: 90
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;
const DEFAULT_TEXT = '';

function getWidth(state, index) {
    return (state[index] || DEFAULT_WIDTH) + 'px';
}

function getHeight(state, index) {
    return (state[index] || DEFAULT_HEIGHT) + 'px';
}

function createRow(content, index = '', state = {}) {
    // eslint-disable-next-line max-len
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
    const height = getHeight(state, index);
    return `
        <div
        class="row"
        data-type="resizable"
        data-row="${index}"
        style="height: ${height}"
        >
        <div class="row-info">
            ${index}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
        </div>`;
}

function toCell(row, state) {
    return (_, col) => {
        const width = getWidth(state.colState, col);
        const id = `${row}:${col}`;
        const text = `${state.dataState[id] || DEFAULT_TEXT}`;
        const styles = toInlineStyles({
            ...defaultStyle,
            ...state.stylesState[id]
        });
        return `
        <div
            class="cell"
            contenteditable
            data-col=${col}
            style="width: ${width};${styles}"
            data-type="cell"
            data-id="${id}"
            data-value="${text}"
            >
            ${parse(text)}
        </div>
    `;
    };
}

function toColumn({ col, index, width }) {
    return `
        <div
        class="column"
        data-type="resizable"
        data-col="${index}"
        style="width: ${width}"
        >
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

function withFromState(state) {
    return (col, index) => {
        return {
            col,
            index,
            width: getWidth(state.colState, index)
        };
    };
}

export function createTable(rowsCounts = 20, state = {}) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(withFromState(state))
        .map(toColumn)
        .join(' ');


    rows.push(createRow(cols, ''));
    for (let row = 0; row < rowsCounts; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell(row, state))
            .join(' ');
        rows.push(createRow(cells, row + 1, state.rowState));
    }

    return rows.join('');
}
