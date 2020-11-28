function toButton(button) {
    const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
    `;
    return `
         <div
         class="button ${button.active ? 'active' : ''}"
         ${meta}
         >
            <span
            class="material-icons"
             ${meta}
            >
                ${button.icon}
            </span>
         </div>
    `;
}

function getButtons(state) {
    return [
        {
            icon: 'format_align_left',
            active: state['textAlign'] === 'left',
            value: { textAlign: 'left' }
        },
        {
            icon: 'format_align_center',
            active: state['textAlign'] === 'center',
            value: { textAlign: 'center' }
        },
        {
            icon: 'format_align_right',
            active: state['textAlign'] === 'right',
            value: { textAlign: 'right' }
        },
        {
            icon: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {
                fontWeight: state['fontWeight'] === 'bold'
                    ? 'normal'
                    : 'bold'
            }
        },
        {
            icon: 'format_italic',
            active: state['fontStyle'] === 'italic',
            value: {
                fontStyle: state['fontStyle'] === 'italic'
                    ? 'normal'
                    : 'italic'
            }
        },
        {
            icon: 'format_underlined',
            active: state['textDecoration'] === 'underline',
            value: {
                textDecoration: state['textDecoration'] === 'underline'
                    ? 'none'
                    : 'underline'
            }
        }
    ];
}

// const buttons = [
//     {
//         icon: 'format_align_left',
//         active: false,
//         value: { textAlign: 'left' }
//     },
//     {
//         icon: 'format_align_center',
//         active: false,
//         value: { textAlign: 'center' }
//     },
//     {
//         icon: 'format_align_right',
//         active: false,
//         value: { textAlign: 'right' }
//     },
//     {
//         icon: 'format_bold',
//         active: false,
//         value: { fontWeight: 'bold' }
//     },
//     {
//         icon: 'format_italic',
//         active: false,
//         value: { fontStyle: 'italic' }
//     },
//     {
//         icon: 'format_underlined',
//         active: false,
//         value: { textDecoration: 'underline' }
//     }
// ];

export function createToolbar(state) {
    const buttons = getButtons(state);
    return buttons.map(toButton).join('');
}
