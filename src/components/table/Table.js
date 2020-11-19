import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.template';

export class Table extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click', 'input']
        });
    }

    static className = 'excel__table';

    toHtml() {
        return createTable(20);
    }

    onClick(event) {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    onInput(event) {
        console.log(event.target);
    }
}
