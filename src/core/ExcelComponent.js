import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
    }

    // возвращает шаблон компонента
    toHtml() {
        return 'Temlate';
    }

    init() {
        this.initDomListeners();
    }

    destroy() {
        this.removeDomListeners();
    }
}