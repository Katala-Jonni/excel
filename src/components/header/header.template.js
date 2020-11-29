export function createHeader(state) {
    return `
            <input type="text" class="input" value="${state.title}"/>
            <div>
                <div class="button" data-button="remove">
                    <span
                        class="material-icons"
                        data-button="remove"
                        >
                            delete
                        </span>
                </div>
                <div class="button" data-button="exit">
                    <span
                        class="material-icons"
                        data-button="exit"
                    >
                    exit_to_app
                    </span>
                </div>
            </div>`;
}
