import { LinkedIcon } from "./LinkedIcon.js"; 
import { styles } from "./style.CustomFooter.css";

export const CustomFooter = {
    props: {
        icon: String,
        links: Array,
    },
    template: `
        <footer>
            <i class="icon" v-bind:style="{ backgroundImage: 'url(' + icon + ')' }"></i>
            <ul class="list-items links">
                <li class="item link" v-for="link in links">
                    <linked-icon v-bind:link="link"></linked-icon>
                </li>
            </ul>
        </footer>`,
    components: {
        LinkedIcon
    }
};