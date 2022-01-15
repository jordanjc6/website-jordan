import { CustomHeader } from "./components/CustomHeader.js";
import { MainTemplate } from "./components/main/MainTemplate.js";
import { CustomFooter } from "./components/CustomFooter.js";

const PageTemplate = {
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Projects', 'Opinions', 'Quotes', 'Sports'],
            links: [
                { name: 'LinkedIn', address: 'https://www.linkedin.com/in/jordan-castro-128bab1b4/' },
                { name: 'Github', address: 'https://github.com/jordanjc6' },
                { name: 'Facebook', address: 'https://www.facebook.com/jordan.castro.737' },
                { name: 'Email', address: 'mailto:jordanjcastro8@gmail.com' }
            ]
        };
    },
    computed: {
        currentTabComponent() {
            return this.currentTab.toLowerCase() + '-tab';
        }
    },
    methods: {
        onSwitchTab(tab) {
            this.currentTab = tab;
        }
    },
    template: `
        <div class="page-container">
            <custom-header v-bind:tabs="tabs" @switch-tab="onSwitchTab">
            </custom-header>
            <main-template v-bind:currentTabComponent="currentTabComponent">
            </main-template>
            <custom-footer v-bind:links="links">
            </custom-footer>
        </div>`,
    components: {
        CustomHeader,
        MainTemplate,
        CustomFooter
    }
};

const app = Vue.createApp(PageTemplate);
app.mount("#page");