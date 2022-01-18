import { styles } from './style.CustomHeader.css';

export const CustomHeader = {
    props: {
        tabs: Array
    },
    template: `
        <header>
            <i class="icon"></i>
            <ul class="list-items">
                <li class="item tab" v-for="tab in tabs" @click="$emit('switchTab', tab)">
                    {{ tab }}
                </li>
            </ul>
        </header>`
};