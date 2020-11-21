const CODES = {
    A: 65,
    Z: 90
};

function createRow(content, index = '') {
    // eslint-disable-next-line max-len
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
    // console.log(index, 'createRow');
    return `
        <div class="row" data-type="resizable">
        <div class="row-info">
            ${index}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
        </div>`;
}

function toCell(content, idx) {
    return `
        <div class="cell" contenteditable data-col=${idx}>${content}</div>
    `;
}

function toColumn(content, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${content}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCounts = 20) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join(' ');

    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join(' ');

    rows.push(createRow(cols, ''));
    for (let i = 0; i < rowsCounts; i++) {
        rows.push(createRow(cells, i + 1));
    }

    return rows.join('');
}
