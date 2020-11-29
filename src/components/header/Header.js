import { ExcelComponent } from '@core/ExcelComponent';
import { createHeader } from '@/components/header/header.template';
import { $ } from '@core/dom';
import * as action from '@/redux/action';
import { debounce } from '@core/utils';
import { ActiveRoute } from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click'],
            ...options
        });
    }

    static className = 'excel__header';

    prepare() {
        this.onInput = debounce(this.onInput.bind(this), 300);
    }

    init() {
        super.init();
    }

    toHtml() {
        const state = this.store.getState();
        return createHeader(state);
    }

    onInput(event) {
        const $target = $(event.target);
        this.$dispatch(action.changeTitle($target.text()));
    }

    onClick(event) {
        const $target = $(event.target);

        if ($target.data.button === 'remove') {
            const decision =
                confirm('Вы действиетельно хотите удалтить эту таблицу?');
            if (decision) {
                localStorage.removeItem(`excel:${ActiveRoute.param}`);
                ActiveRoute.navigate('');
            }
        } else if ($target.data.button === 'exit') {
            ActiveRoute.navigate('');
        }
    }
}
