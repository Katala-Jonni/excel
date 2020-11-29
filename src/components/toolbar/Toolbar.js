import { createToolbar } from '@/components/toolbar/toolbar.template';
import { $ } from '@core/dom';
import { ExcelStateComponent } from '@core/ExcelStateComponent';
import { defaultStyle } from '@/constans';

export class Toolbar extends ExcelStateComponent {
    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            subscribe: ['currentStyles'],
            ...options
        });
    }

    prepare() {
        this.initState(defaultStyle);
    }

    static className = 'excel__toolbar';

    toHtml() {
        return this.template;
    }

    get template() {
        return createToolbar(this.state);
    }

    onClick(event) {
        const $target = $(event.target);
        if ($target.data.type === 'button') {
            const value = JSON.parse($target.data.value);
            this.$emit('toolbar:applyStyle', value);
        }
    }

    storeChanged(changes) {
        this.setState(changes.currentStyles);
    }
}
