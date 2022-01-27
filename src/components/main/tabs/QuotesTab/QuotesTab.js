import { styles } from "./style.QuotesTab.css";

export const QuotesTab = {
    data() {
        return {
            currentCategory: 'Category 1',
            categories: [
                'Category 1',
                'Category 2',
                'Category 3',
                'Category 4',
                'Category 5',
                'Category 6'
            ]
        };
    },
    methods: {
        pickCategory(category) {
            this.currentCategory = category;
            console.log(this.currentCategory);
        }
    },
    template: `
    <div id="quotes-wrapper">
        <div class="quote-block">
            <button class="previous-quote">previous</button>
            <h3>
                Quote Quote Quote Quote Quote Quote 
                Quote Quote Quote Quote Quote Quote
                Quote Quote Quote Quote Quote Quote
                Quote Quote Quote Quote Quote Quote
                Quote Quote Quote Quote Quote Quote
            </h3>
            <button class="next-quote">next</button>
        </div>
        <div class="quote-categories">
            <ul>
                <li v-for="category in categories" @click="pickCategory(category)">{{ category }}</li>
            </ul>
        </div>
    </div>`
};