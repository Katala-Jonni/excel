export class Emitter {
    constructor() {
        this.listeners = {};
    }

    // Уведомляем слушателей, если они есть
    // formula:done
    // formula.emit('table:select', {a: 1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false;
        }
        this.listeners[event].forEach(listener => {
            listener(...args);
        });
        return true;
    }

    // Подписываемся на уведомление
    // Добавляем нового слушателя
    // formula.subcribe('table:select', () => {})
    subcribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn);
        };
    }
}
