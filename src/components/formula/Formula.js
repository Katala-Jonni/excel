import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
        // this.$com = options;
    }

    static className = 'excel__formula';

    toHtml() {
        // console.log(this.$com);
        // this.$com = options.ad
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `;
    }

    onInput(event) {
        console.log(event);
        // console.log('Formula onInput', event.target);
    }

    onClick() {
        console.log('onClick');
    }
}
