import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';
import { shouldResize } from '@/components/table/table.functions';

export class Table extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }

    static className = 'excel__table';

    toHtml() {
        return createTable(20);
    }

    onClick(event) {
        console.log(event.type);
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('selected'));
        event.target.classList.add('selected');
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    }
}
