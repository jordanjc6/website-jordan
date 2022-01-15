const app = Vue.createApp({});

const customHeader = {
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
}

app.component('custom-header', customHeader);

app.component('home-tab', {
    data() {
        return {
            biography: `
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography
                Biography Biography Biography Biography Biography Biography Biography Biography Biography`
        };
    },
    template: `
    <div id="home-container">
        <img id="display-pic" src="https://i.imgflip.com/58r9dj.jpg" />
        <div id="bio">{{ biography }}</div>
    </div>`
});

app.component('projects-tab', {
    template: `
    <div>
        projects
    </div>`
});

app.component('opinions-tab', {
    template: `
    <div>
        opinions
    </div>`
});

app.component('quotes-tab', {
    template: `
    <div>
        quotes
    </div>`
});

app.component('sports-tab', {
    template: `
    <div>
        sports
    </div>`
});

const mainContent = {
    props: {
        currentTabComponent: String
    },
    template: `
    <main>
        <component :is="currentTabComponent"></component>
    </main>`
}

app.component('main-content', mainContent);

const customFooter = {
    props: {
        links: Array
    },
    template: `
        <footer>
            <i class="icon"></i>
            <ul class="list-items links">
                <li class="item link" v-for="link in links" >
                    <a v-bind:href="link.address" target='_blank'>
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </footer>`
}

app.component('custom-footer', customFooter);

const layoutComponent = {
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
            <main-content v-bind:currentTabComponent="currentTabComponent">
            </main-content>
            <custom-footer v-bind:links="links">
            </custom-footer>
        </div>`
};

app.component('layout', layoutComponent);

app.mount("#page");