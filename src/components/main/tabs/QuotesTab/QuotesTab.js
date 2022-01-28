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
            ],
            currentIndex: 0,
            currentQuotes: [
                { 
                    text: `
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 1'
                },
                { 
                    text: `
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2`,
                    speaker: 'Speaker 2',
                    category: 'Category 1'
                },
                { 
                    text: `
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3`,
                    speaker: 'Speaker 3',
                    category: 'Category 1'
                }
            ],
            quotes: [
                { 
                    text: `
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 1'
                },
                { 
                    text: `
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2
                        Text 2 Text 2 Text 2 Text 2 Text 2`,
                    speaker: 'Speaker 2',
                    category: 'Category 1'
                },
                { 
                    text: `
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3
                        Text 3 Text 3 Text 3 Text 3 Text 3`,
                    speaker: 'Speaker 3',
                    category: 'Category 1'
                },
                { 
                    text: `
                        Text 1.2 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 2'
                },
                { 
                    text: `
                        Text 1.3 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 3'
                },
                { 
                    text: `
                        Text 1.4 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 4'
                },
                { 
                    text: `
                        Text 1.5 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 5'
                },
                { 
                    text: `
                        Text 1.6 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 1',
                    category: 'Category 6'
                },
                { 
                    text: `
                        Text 2.6 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1
                        Text 1 Text 1 Text 1 Text 1 Text 1`,
                    speaker: 'Speaker 2',
                    category: 'Category 6'
                }               
            ]
        };
    },
    computed: {
        currentText() {
            return this.currentQuotes[this.currentIndex].text;
        },
        currentSpeaker() {
            return this.currentQuotes[this.currentIndex].speaker;
        }
    },
    methods: {
        pickCategory(category) {
            this.currentCategory = category;
            this.setCurrentQuotes();
        },
        setCurrentQuotes() {
            this.currentQuotes = [];
            this.currentIndex = 0;
            
            for(let i = 0; i < this.quotes.length; i++) {
                
                if(this.quotes[i].category === this.currentCategory) {
                    this.currentQuotes.push(this.quotes[i]);
                }
            }
        },
        nextQuote() {
            if(this.currentIndex === (this.currentQuotes.length - 1)) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        previousQuote() {
            if(this.currentIndex === 0) {
                this.currentIndex = this.currentQuotes.length - 1;
            } else {
                this.currentIndex--;
            }
        }
    },
    template: `
    <div id="quotes-wrapper">
        <div class="quote-block">
            <button class="previous-quote" @click="previousQuote">previous</button>
            <div class="quote-wrapper">
                <p>{{ currentText }}</p>
                <p>{{ currentSpeaker }}</p>
            </div>
            <button class="next-quote" @click="nextQuote">next</button>
        </div>
        <div class="quote-categories">
            <ul>
                <li v-for="category in categories" @click="pickCategory(category)">{{ category }}</li>
            </ul>
        </div>
    </div>`
};