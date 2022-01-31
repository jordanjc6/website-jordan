import { styles } from './style.CustomHeader.css';

export const CustomHeader = {
    data() {
        return {
            showHeader: true,
            lastScrollPosition: 0
        };
    },
    props: {
        tabs: Array
    },
    methods: {
        onScroll() {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

            if(currentScrollPosition < 0) {
                return;
            }

            if(Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
                return;
            }

            this.showHeader = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    template: `
        <header v-bind:class="{ 'hide-header' : !showHeader }">
            <i class="icon"></i>
            <ul class="list-items">
                <li class="item tab" v-for="tab in tabs" @click="$emit('switchTab', tab)">
                    {{ tab }}
                </li>
            </ul>
        </header>`
};