(()=>{"use strict";const a={data:()=>({currentTab:"Home",tabs:["Home","Projects","Opinions","Quotes","Sports"],links:[{name:"LinkedIn",address:"https://www.linkedin.com/in/jordan-castro-128bab1b4/"},{name:"Github",address:"https://github.com/jordanjc6"},{name:"Facebook",address:"https://www.facebook.com/jordan.castro.737"},{name:"Email",address:"mailto:jordanjcastro8@gmail.com"}]}),computed:{currentTabComponent(){return this.currentTab.toLowerCase()+"-tab"}},methods:{onSwitchTab(a){this.currentTab=a}},template:'\n        <custom-header id="test" v-bind:tabs="tabs" @switch-tab="onSwitchTab">\n        </custom-header>\n        <main-template v-bind:currentTabComponent="currentTabComponent">\n        </main-template>\n        <custom-footer v-bind:links="links">\n        </custom-footer>',components:{CustomHeader:{props:{tabs:Array},template:'\n        <header>\n            <i class="icon"></i>\n            <ul class="list-items">\n                <li class="item tab" v-for="tab in tabs" @click="$emit(\'switchTab\', tab)">\n                    {{ tab }}\n                </li>\n            </ul>\n        </header>'},MainTemplate:{props:{currentTabComponent:String},template:'\n    <main>\n        <component :is="currentTabComponent"></component>\n    </main>',components:{HomeTab:{data:()=>({biography:"\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography\n                Biography Biography Biography Biography Biography Biography Biography Biography Biography"}),template:'\n    <div id="home-container">\n        <img id="display-picture" src="https://i.imgflip.com/58r9dj.jpg" />\n        <div id="biography">{{ biography }}</div>\n    </div>'},ProjectsTab:{template:'\n    <div id="projects-container">\n        projects\n    </div>'},OpinionsTab:{template:'\n    <div id="opinions-container">\n        opinions\n    </div>'},QuotesTab:{template:'\n    <div id="quotes-container">\n        quotes\n    </div>'},SportsTab:{template:'\n    <div id="sports-container">\n        sports\n    </div>'}}},CustomFooter:{props:{links:Array},template:'\n        <footer>\n            <i class="icon"></i>\n            <ul class="list-items links">\n                <li class="item link" v-for="link in links" >\n                    <a v-bind:href="link.address" target=\'_blank\'>\n                        {{ link.name }}\n                    </a>\n                </li>\n            </ul>\n        </footer>'}}};Vue.createApp(a).mount("#page")})();