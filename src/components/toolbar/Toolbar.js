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

            // const key = Object.keys(value)[0];
            // console.log({ [key]: value[key] }, 'onClick');
            // this.setState({ [key]: value[key] });
        }
    }

    storeChanged(changes) {
        console.log(changes.currentStyles, 'storeChanged');
        this.setState(changes.currentStyles);
    }
}
