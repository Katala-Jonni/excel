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

function toCell(row) {
    return (_, col) => {
        return `
        <div
            class="cell"
            contenteditable
            data-col=${col}
            data-type="cell"
            data-id="${row}:${col}"
            >
            
        </div>
    `;
    };
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


    rows.push(createRow(cols, ''));
    for (let row = 0; row < rowsCounts; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell(row))
            .join(' ');
        rows.push(createRow(cells, row + 1));
    }

    return rows.join('');
}
