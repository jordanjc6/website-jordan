import { CustomHeader } from "./components/CustomHeader/CustomHeader.js";
import { MainTemplate } from "./components/main/MainTemplate.js";
import { CustomFooter } from "./components/CustomFooter/CustomFooter.js";
import { styles } from "./style.css";
import { Roboto } from "./assets/Roboto/Roboto-Regular.ttf";
import soccerballIcon from "./assets/soccer-ball-icon.png";
import linkedinIcon from "./assets/linkedin-icon.png";
import githubIcon from "./assets/github-icon.png";
import facebookIcon from "./assets/facebook-icon.png";
import mailIcon from "./assets/mail-icon.png";

const PageTemplate = {
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Projects', 'Quotes', 'Sports'],
            soccerballIcon: soccerballIcon,
            projectsTabLocation: null,
            links: [
                { 
                    name: 'LinkedIn',
                    address: 'https://www.linkedin.com/in/jordan-castro-128bab1b4/',
                    icon: linkedinIcon
                },
                { 
                    name: 'Github', 
                    address: 'https://github.com/jordanjc6',
                    icon: githubIcon 
                },
                { 
                    name: 'Facebook', 
                    address: 'https://www.facebook.com/jordan.castro.737',
                    icon: facebookIcon
                },
                { 
                    name: 'Email', 
                    address: 'mailto:jordanjcastro8@gmail.com',
                    icon: mailIcon 
                }
            ]
        };
    },
    computed: {
        currentTabComponent() {
            return this.currentTab.toLowerCase() + '-tab';
        }
    },
    methods: {
        onSwitchTab(tab, currentCaption) {
            this.currentTab = tab;
            this.projectsTabLocation = currentCaption;
        }
    },
    provide() {
        return {
            projectsTabLocation: Vue.computed(() => this.projectsTabLocation.replace(/\s+/g, '').toLowerCase())
        };
    },
    template: `
        <custom-header v-bind:icon="soccerballIcon" v-bind:tabs="tabs" @switch-tab="onSwitchTab">
        </custom-header>
        <main-template 
            v-bind:currentTabComponent="currentTabComponent"
            @switch-tab="onSwitchTab"
        ></main-template>
        <custom-footer v-bind:icon="soccerballIcon" v-bind:links="links">
        </custom-footer>`,
    components: {
        CustomHeader,
        MainTemplate,
        CustomFooter
    }
};

const app = Vue.createApp(PageTemplate);
app.mount("#page");