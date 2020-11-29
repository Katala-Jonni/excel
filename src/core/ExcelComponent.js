import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emitter = options.emitter;
        this.subscribe = options.subscribe || [];
        this.store = options.store;
        this.unsubscribers = [];

        this.prepare();
    }

    // Настраиваем компонент до init
    prepare() {

    }

    // возвращает шаблон компонента
    toHtml() {
        return 'Temlate';
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    isWatching(key) {
        return this.subscribe.includes(key);
    }

    // Подписываемся на события event
    $on(event, fn) {
        const unsub = this.emitter.subcribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    // Инициализация компонента
    // Добавляем слушателей в DOM
    init() {
        this.initDomListeners();
    }

    // Удаляем компонент
    // Чистим слушателей
    destroy() {
        this.removeDomListeners();
    }
}
