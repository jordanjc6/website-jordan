/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CustomFooter/style.CustomFooter.css":
/*!************************************************************!*\
  !*** ./src/components/CustomFooter/style.CustomFooter.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/CustomHeader/style.CustomHeader.css":
/*!************************************************************!*\
  !*** ./src/components/CustomHeader/style.CustomHeader.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/HomeTab/style.HomeTab.css":
/*!************************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/style.HomeTab.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/HomeTab/style.ProjectSlide.css":
/*!*****************************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/style.ProjectSlide.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/HomeTab/style.QuoteSlide.css":
/*!***************************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/style.QuoteSlide.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/HomeTab/style.SportSlide.css":
/*!***************************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/style.SportSlide.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/ProjectsTab/style.ProjectDisplay.css":
/*!***********************************************************************!*\
  !*** ./src/components/main/tabs/ProjectsTab/style.ProjectDisplay.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/ProjectsTab/style.ProjectsTab.css":
/*!********************************************************************!*\
  !*** ./src/components/main/tabs/ProjectsTab/style.ProjectsTab.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/QuotesTab/style.QuotesTab.css":
/*!****************************************************************!*\
  !*** ./src/components/main/tabs/QuotesTab/style.QuotesTab.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/tabs/SportsTab/style.SportsTab.css":
/*!****************************************************************!*\
  !*** ./src/components/main/tabs/SportsTab/style.SportsTab.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/CustomFooter/CustomFooter.js":
/*!*****************************************************!*\
  !*** ./src/components/CustomFooter/CustomFooter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFooter": () => (/* binding */ CustomFooter)
/* harmony export */ });
/* harmony import */ var _style_CustomFooter_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.CustomFooter.css */ "./src/components/CustomFooter/style.CustomFooter.css");


const CustomFooter = {
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
};

/***/ }),

/***/ "./src/components/CustomHeader/CustomHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/CustomHeader/CustomHeader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomHeader": () => (/* binding */ CustomHeader)
/* harmony export */ });
/* harmony import */ var _style_CustomHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.CustomHeader.css */ "./src/components/CustomHeader/style.CustomHeader.css");


const CustomHeader = {
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
            <ul class="list-items tabs">
                <li class="item tab" v-for="tab in tabs" @click="$emit('switchTab', tab)">
                    {{ tab }}
                </li>
            </ul>
        </header>`
};

/***/ }),

/***/ "./src/components/main/MainTemplate.js":
/*!*********************************************!*\
  !*** ./src/components/main/MainTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainTemplate": () => (/* binding */ MainTemplate)
/* harmony export */ });
/* harmony import */ var _tabs_HomeTab_HomeTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/HomeTab/HomeTab.js */ "./src/components/main/tabs/HomeTab/HomeTab.js");
/* harmony import */ var _tabs_ProjectsTab_ProjectsTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/ProjectsTab/ProjectsTab.js */ "./src/components/main/tabs/ProjectsTab/ProjectsTab.js");
/* harmony import */ var _tabs_QuotesTab_QuotesTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/QuotesTab/QuotesTab.js */ "./src/components/main/tabs/QuotesTab/QuotesTab.js");
/* harmony import */ var _tabs_SportsTab_SportsTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/SportsTab/SportsTab.js */ "./src/components/main/tabs/SportsTab/SportsTab.js");





const MainTemplate = {
    props: {
        currentTabComponent: String
    },
    template: `
    <main>
        <component :is="currentTabComponent"></component>
    </main>`,
    components: {
        HomeTab: _tabs_HomeTab_HomeTab_js__WEBPACK_IMPORTED_MODULE_0__.HomeTab,
        ProjectsTab: _tabs_ProjectsTab_ProjectsTab_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsTab,
        QuotesTab: _tabs_QuotesTab_QuotesTab_js__WEBPACK_IMPORTED_MODULE_2__.QuotesTab,
        SportsTab: _tabs_SportsTab_SportsTab_js__WEBPACK_IMPORTED_MODULE_3__.SportsTab
    }
}

/***/ }),

/***/ "./src/components/main/tabs/HomeTab/HomeTab.js":
/*!*****************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/HomeTab.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTab": () => (/* binding */ HomeTab)
/* harmony export */ });
/* harmony import */ var _ProjectSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSlide.js */ "./src/components/main/tabs/HomeTab/ProjectSlide.js");
/* harmony import */ var _QuoteSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteSlide.js */ "./src/components/main/tabs/HomeTab/QuoteSlide.js");
/* harmony import */ var _SportSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SportSlide.js */ "./src/components/main/tabs/HomeTab/SportSlide.js");
/* harmony import */ var _style_HomeTab_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.HomeTab.css */ "./src/components/main/tabs/HomeTab/style.HomeTab.css");





const HomeTab = {
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
        <img id="display-picture" src="https://i.imgflip.com/58r9dj.jpg" />
        <div id="biography">{{ biography }}</div>
    </div>
    <div id="projects-container">
        <project-slide>
        </project-slide>
    </div>
    <div id="quotes-container">
        <quote-slide>
        </quote-slide>
    </div>
    <div id="sports-container">
        <sport-slide>
        </sport-slide>
    </div>`,
    components: {
        ProjectSlide: _ProjectSlide_js__WEBPACK_IMPORTED_MODULE_0__.ProjectSlide,
        QuoteSlide: _QuoteSlide_js__WEBPACK_IMPORTED_MODULE_1__.QuoteSlide,
        SportSlide: _SportSlide_js__WEBPACK_IMPORTED_MODULE_2__.SportSlide
    }
};

/***/ }),

/***/ "./src/components/main/tabs/HomeTab/ProjectSlide.js":
/*!**********************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/ProjectSlide.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectSlide": () => (/* binding */ ProjectSlide)
/* harmony export */ });
/* harmony import */ var _style_ProjectSlide_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.ProjectSlide.css */ "./src/components/main/tabs/HomeTab/style.ProjectSlide.css");


const ProjectSlide = {
    data() {
        return {
            captionVisible: false,
            currentIndex: 0,
            projects: [
                { 
                    image: 'https://i.imgflip.com/58r9dj.jpg',
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://wallpapercave.com/wp/wp3269246.jpg',
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg',
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                }
            ]
        };
    },
    computed: {
        currentImage() {
            return this.projects[this.currentIndex % this.projects.length].image;
        },
        currentCaption() {
            return this.projects[this.currentIndex % this.projects.length].caption;
        }
    },
    methods: {
        toggleCaption() {
            this.captionVisible = !this.captionVisible;
        },
        startSlide() {
            this.timer = setInterval(this.nextSlide, 6000);
        },
        nextSlide() {
            this.currentIndex += 1;
        }
    },
    mounted() {
        this.startSlide();
    },
    template: `
    <img id="project-image" v-bind:src="currentImage" @click="toggleCaption" />
    <div id="project-caption" v-if="captionVisible">
        {{ currentCaption }}
    </div>`
};

/***/ }),

/***/ "./src/components/main/tabs/HomeTab/QuoteSlide.js":
/*!********************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/QuoteSlide.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteSlide": () => (/* binding */ QuoteSlide)
/* harmony export */ });
/* harmony import */ var _style_QuoteSlide_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.QuoteSlide.css */ "./src/components/main/tabs/HomeTab/style.QuoteSlide.css");


const QuoteSlide = {
    data() {
        return {
            currentIndex: 0,
            quotes: [
                { 
                    text: `Quote 1 Quote Quote Quote Quote Quote`,
                    author: 'Speaker 1' 
                },
                { 
                    text: `
                        Quote 2 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 2' 
                },
                { 
                    text: `
                        Quote 3 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 3' 
                },
                { 
                    text: `
                        Quote 4 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 4' 
                },
                { 
                    text: `
                        Quote 5 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 5' 
                },
                { 
                    text: `Quote 6 Quote Quote Quote Quote Quote`,
                    author: 'Speaker 6' 
                },
            ]
        };
    },
    computed: {
        currentText() {
            return this.quotes[this.currentIndex].text;
        },
        currentAuthor() {
            return this.quotes[this.currentIndex].author;
        }
    },
    methods: {
        randomQuote() {
            let randomIndex;

            do {
                randomIndex = Math.floor(Math.random() * (5 - 0 + 1) + 0);
            } while(randomIndex == this.currentIndex);

            this.currentIndex = randomIndex;
        }
    },
    mounted() {
        this.randomQuote();
    },
    template: `
    <div>
        <div id="quote-text">
            {{ currentText }}
        </div>
        <div id="quote-author">
            {{ currentAuthor }}
        </div>
        <button @click="randomQuote">
            Click
        </button>
    </div>`
};

/***/ }),

/***/ "./src/components/main/tabs/HomeTab/SportSlide.js":
/*!********************************************************!*\
  !*** ./src/components/main/tabs/HomeTab/SportSlide.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportSlide": () => (/* binding */ SportSlide)
/* harmony export */ });
/* harmony import */ var _style_SportSlide_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.SportSlide.css */ "./src/components/main/tabs/HomeTab/style.SportSlide.css");


const SportSlide = {
    template: `
    <div id="collage-container">
        <img src="https://i.imgflip.com/58r9dj.jpg" />
        <img src="https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png" />
        <img src="https://wallpapercave.com/wp/wp3269246.jpg" />
        <img src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg" />
        <img src="https://i.imgflip.com/58r9dj.jpg" />
        <img src="https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png" />
        <img />
    </div>`
};

/***/ }),

/***/ "./src/components/main/tabs/ProjectsTab/ProjectDisplay.js":
/*!****************************************************************!*\
  !*** ./src/components/main/tabs/ProjectsTab/ProjectDisplay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDisplay": () => (/* binding */ ProjectDisplay)
/* harmony export */ });
/* harmony import */ var _style_ProjectDisplay_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.ProjectDisplay.css */ "./src/components/main/tabs/ProjectsTab/style.ProjectDisplay.css");


const ProjectDisplay = {
    props: {
        description: String,
        pictures: Array
    },
    template: `
    <div class="project">
        <div class="project-description">
            {{ description }}
        </div>
        <div class="project-pictures">
            <img v-for="picture in pictures" v-bind:src="picture" />
        </div>
    </div>`
};

/***/ }),

/***/ "./src/components/main/tabs/ProjectsTab/ProjectsTab.js":
/*!*************************************************************!*\
  !*** ./src/components/main/tabs/ProjectsTab/ProjectsTab.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsTab": () => (/* binding */ ProjectsTab)
/* harmony export */ });
/* harmony import */ var _ProjectDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDisplay.js */ "./src/components/main/tabs/ProjectsTab/ProjectDisplay.js");
/* harmony import */ var _style_ProjectsTab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.ProjectsTab.css */ "./src/components/main/tabs/ProjectsTab/style.ProjectsTab.css");



const ProjectsTab = {
    data() {
        return {
            projects: [
                { 
                    description: `
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.`,
                    pictures: [
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png'
                    ]
                },
                { 
                    description: `
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.`,
                    pictures: [
                        'https://wallpapercave.com/wp/wp3269246.jpg',
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png'
                    ]
                },
                { 
                    description: `
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.`,
                    pictures: [
                        'https://wallpapercave.com/wp/wp3269246.jpg',
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                        'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'
                    ]
                }
            ]
        };
    },
    template: `
    <div id="projects-wrapper">
        <project-display 
            v-for="project in projects"
            v-bind:description="project.description"
            v-bind:pictures="project.pictures"
        ></project-display>
    </div>`,
    components: {
        ProjectDisplay: _ProjectDisplay_js__WEBPACK_IMPORTED_MODULE_0__.ProjectDisplay
    }
};

/***/ }),

/***/ "./src/components/main/tabs/QuotesTab/QuotesTab.js":
/*!*********************************************************!*\
  !*** ./src/components/main/tabs/QuotesTab/QuotesTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotesTab": () => (/* binding */ QuotesTab)
/* harmony export */ });
/* harmony import */ var _style_QuotesTab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.QuotesTab.css */ "./src/components/main/tabs/QuotesTab/style.QuotesTab.css");


const QuotesTab = {
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

/***/ }),

/***/ "./src/components/main/tabs/SportsTab/SportsTab.js":
/*!*********************************************************!*\
  !*** ./src/components/main/tabs/SportsTab/SportsTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsTab": () => (/* binding */ SportsTab)
/* harmony export */ });
/* harmony import */ var _style_SportsTab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.SportsTab.css */ "./src/components/main/tabs/SportsTab/style.SportsTab.css");


const SportsTab = {
    data() {
        return {
            pictures: [
                'https://i.imgflip.com/58r9dj.jpg',
                'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                'https://wallpapercave.com/wp/wp3269246.jpg',
                'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg',
                'https://i.imgflip.com/58r9dj.jpg',
                'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                'https://wallpapercave.com/wp/wp3269246.jpg',
                'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'
            ],
            isImageActive: false,
            activeIndex: null,
            sportsWrapperHeight: null
        };
    },
    methods: {
        zoomImage(index) {
            this.isImageActive = !this.isImageActive;
            this.activeIndex = index;
        }
    },
    template: `
    <div id="sports-wrapper" ref="sports_wrapper">
        <img 
            v-bind:class="{ imageActive: isImageActive && activeIndex === index }" 
            v-for="(picture, index) in pictures" 
            v-bind:src="picture" 
            @click="zoomImage(index)" 
        />
    </div>`
};

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CustomHeader_CustomHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CustomHeader/CustomHeader.js */ "./src/components/CustomHeader/CustomHeader.js");
/* harmony import */ var _components_main_MainTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/MainTemplate.js */ "./src/components/main/MainTemplate.js");
/* harmony import */ var _components_CustomFooter_CustomFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CustomFooter/CustomFooter.js */ "./src/components/CustomFooter/CustomFooter.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_Roboto_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf");






const PageTemplate = {
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Projects', 'Quotes', 'Sports'],
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
        <custom-header v-bind:tabs="tabs" @switch-tab="onSwitchTab">
        </custom-header>
        <main-template v-bind:currentTabComponent="currentTabComponent">
        </main-template>
        <custom-footer v-bind:links="links">
        </custom-footer>`,
    components: {
        CustomHeader: _components_CustomHeader_CustomHeader_js__WEBPACK_IMPORTED_MODULE_0__.CustomHeader,
        MainTemplate: _components_main_MainTemplate_js__WEBPACK_IMPORTED_MODULE_1__.MainTemplate,
        CustomFooter: _components_CustomFooter_CustomFooter_js__WEBPACK_IMPORTED_MODULE_2__.CustomFooter
    }
};

const app = Vue.createApp(PageTemplate);
app.mount("#page");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmtEO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyw2QkFBNkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ21EO0FBQ2E7QUFDTjtBQUNBO0FBQzFEO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJpRDtBQUNKO0FBQ0E7QUFDQTtBQUM3QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRrRDtBQUNsRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVnRDtBQUNoRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWdEO0FBQ2hEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNib0Q7QUFDcEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJxRDtBQUNKO0FBQ2pEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUQrQztBQUMvQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLFdBQVc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BNK0M7QUFDL0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFxRDtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUU7QUFDUjtBQUNRO0FBQ3BDO0FBQ3VCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1GQUFtRjtBQUNyRyxrQkFBa0IseURBQXlEO0FBQzNFLGtCQUFrQix5RUFBeUU7QUFDM0Ysa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUZvb3Rlci9zdHlsZS5DdXN0b21Gb290ZXIuY3NzPzQ4NGQiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21IZWFkZXIvc3R5bGUuQ3VzdG9tSGVhZGVyLmNzcz8xMzE2Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuSG9tZVRhYi5jc3M/YzZhNCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlByb2plY3RTbGlkZS5jc3M/YjUzZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlF1b3RlU2xpZGUuY3NzP2Q2MGEiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9zdHlsZS5TcG9ydFNsaWRlLmNzcz9hMmJiIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL3N0eWxlLlByb2plY3REaXNwbGF5LmNzcz8yMGZlIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL3N0eWxlLlByb2plY3RzVGFiLmNzcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9RdW90ZXNUYWIvc3R5bGUuUXVvdGVzVGFiLmNzcz85MTJiIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Nwb3J0c1RhYi9zdHlsZS5TcG9ydHNUYWIuY3NzP2UyMDIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1Byb2plY3RTbGlkZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1F1b3RlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9TcG9ydFNsaWRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3RzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvU3BvcnRzVGFiL1Nwb3J0c1RhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuQ3VzdG9tRm9vdGVyLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUZvb3RlciA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbGlua3M6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaXRlbXMgbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gbGlua1wiIHYtZm9yPVwibGluayBpbiBsaW5rc1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8YSB2LWJpbmQ6aHJlZj1cImxpbmsuYWRkcmVzc1wiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGluay5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Zvb3Rlcj5gXHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9zdHlsZS5DdXN0b21IZWFkZXIuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21IZWFkZXIgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxQb3NpdGlvbjogMFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB0YWJzOiBBcnJheVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoY3VycmVudFNjcm9sbFBvc2l0aW9uIC0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24pIDwgNTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93SGVhZGVyID0gY3VycmVudFNjcm9sbFBvc2l0aW9uIDwgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gY3VycmVudFNjcm9sbFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXIgdi1iaW5kOmNsYXNzPVwieyAnaGlkZS1oZWFkZXInIDogIXNob3dIZWFkZXIgfVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaXRlbXMgdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSB0YWJcIiB2LWZvcj1cInRhYiBpbiB0YWJzXCIgQGNsaWNrPVwiJGVtaXQoJ3N3aXRjaFRhYicsIHRhYilcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyB0YWIgfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+YFxyXG59OyIsImltcG9ydCB7IEhvbWVUYWIgfSBmcm9tIFwiLi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qc1wiXHJcbmltcG9ydCB7IFByb2plY3RzVGFiIH0gZnJvbSBcIi4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0c1RhYi5qc1wiO1xyXG5pbXBvcnQgeyBRdW90ZXNUYWIgfSBmcm9tIFwiLi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanNcIjtcclxuaW1wb3J0IHsgU3BvcnRzVGFiIH0gZnJvbSBcIi4vdGFicy9TcG9ydHNUYWIvU3BvcnRzVGFiLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblRlbXBsYXRlID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjdXJyZW50VGFiQ29tcG9uZW50OiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJjdXJyZW50VGFiQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcbiAgICA8L21haW4+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBIb21lVGFiLFxyXG4gICAgICAgIFByb2plY3RzVGFiLFxyXG4gICAgICAgIFF1b3Rlc1RhYixcclxuICAgICAgICBTcG9ydHNUYWJcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3RTbGlkZSB9IGZyb20gXCIuL1Byb2plY3RTbGlkZS5qc1wiO1xyXG5pbXBvcnQgeyBRdW90ZVNsaWRlIH0gZnJvbSBcIi4vUXVvdGVTbGlkZS5qc1wiO1xyXG5pbXBvcnQgeyBTcG9ydFNsaWRlIH0gZnJvbSBcIi4vU3BvcnRTbGlkZS5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Ib21lVGFiLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVUYWIgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJpb2dyYXBoeTogYFxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlgXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cImhvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBpZD1cImRpc3BsYXktcGljdHVyZVwiIHNyYz1cImh0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnXCIgLz5cclxuICAgICAgICA8ZGl2IGlkPVwiYmlvZ3JhcGh5XCI+e3sgYmlvZ3JhcGh5IH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cclxuICAgICAgICA8cHJvamVjdC1zbGlkZT5cclxuICAgICAgICA8L3Byb2plY3Qtc2xpZGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJxdW90ZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHF1b3RlLXNsaWRlPlxyXG4gICAgICAgIDwvcXVvdGUtc2xpZGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJzcG9ydHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNwb3J0LXNsaWRlPlxyXG4gICAgICAgIDwvc3BvcnQtc2xpZGU+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFByb2plY3RTbGlkZSxcclxuICAgICAgICBRdW90ZVNsaWRlLFxyXG4gICAgICAgIFNwb3J0U2xpZGVcclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Qcm9qZWN0U2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFNsaWRlID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXB0aW9uVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogMCxcclxuICAgICAgICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMzI2OTI0Ni5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY29vbGJhY2tncm91bmRzLmlvL2ltYWdlcy9iYWNrZ3JvdW5kcy93aGl0ZS9wdXJlLXdoaXRlLWJhY2tncm91bmQtODVhMmE3ZmQuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudEltYWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLmN1cnJlbnRJbmRleCAlIHRoaXMucHJvamVjdHMubGVuZ3RoXS5pbWFnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRDYXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLmN1cnJlbnRJbmRleCAlIHRoaXMucHJvamVjdHMubGVuZ3RoXS5jYXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlQ2FwdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXB0aW9uVmlzaWJsZSA9ICF0aGlzLmNhcHRpb25WaXNpYmxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRTbGlkZSgpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMubmV4dFNsaWRlLCA2MDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRTbGlkZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0U2xpZGUoKTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGltZyBpZD1cInByb2plY3QtaW1hZ2VcIiB2LWJpbmQ6c3JjPVwiY3VycmVudEltYWdlXCIgQGNsaWNrPVwidG9nZ2xlQ2FwdGlvblwiIC8+XHJcbiAgICA8ZGl2IGlkPVwicHJvamVjdC1jYXB0aW9uXCIgdi1pZj1cImNhcHRpb25WaXNpYmxlXCI+XHJcbiAgICAgICAge3sgY3VycmVudENhcHRpb24gfX1cclxuICAgIDwvZGl2PmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5RdW90ZVNsaWRlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1b3RlU2xpZGUgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogMCxcclxuICAgICAgICAgICAgcXVvdGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBRdW90ZSAxIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDEnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSAyIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDInIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSAzIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDMnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSA0IFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDQnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSA1IFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDUnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFF1b3RlIDYgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNicgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRUZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdW90ZXNbdGhpcy5jdXJyZW50SW5kZXhdLnRleHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50QXV0aG9yKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdW90ZXNbdGhpcy5jdXJyZW50SW5kZXhdLmF1dGhvcjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJhbmRvbVF1b3RlKCkge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXg7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1IC0gMCArIDEpICsgMCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUocmFuZG9tSW5kZXggPT0gdGhpcy5jdXJyZW50SW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSByYW5kb21JbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLnJhbmRvbVF1b3RlKCk7XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInF1b3RlLXRleHRcIj5cclxuICAgICAgICAgICAge3sgY3VycmVudFRleHQgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicXVvdGUtYXV0aG9yXCI+XHJcbiAgICAgICAgICAgIHt7IGN1cnJlbnRBdXRob3IgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInJhbmRvbVF1b3RlXCI+XHJcbiAgICAgICAgICAgIENsaWNrXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuU3BvcnRTbGlkZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcG9ydFNsaWRlID0ge1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJjb2xsYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzMjY5MjQ2LmpwZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmdcIiAvPlxyXG4gICAgICAgIDxpbWcgLz5cclxuICAgIDwvZGl2PmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Qcm9qZWN0RGlzcGxheS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0RGlzcGxheSA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICAgICAgICBwaWN0dXJlczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICB7eyBkZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXBpY3R1cmVzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgdi1mb3I9XCJwaWN0dXJlIGluIHBpY3R1cmVzXCIgdi1iaW5kOnNyYz1cInBpY3R1cmVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IFByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vUHJvamVjdERpc3BsYXkuanNcIjtcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUHJvamVjdHNUYWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNUYWIgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuYCxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuYCxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZydcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzMjY5MjQ2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9jb29sYmFja2dyb3VuZHMuaW8vaW1hZ2VzL2JhY2tncm91bmRzL3doaXRlL3B1cmUtd2hpdGUtYmFja2dyb3VuZC04NWEyYTdmZC5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzLXdyYXBwZXJcIj5cclxuICAgICAgICA8cHJvamVjdC1kaXNwbGF5IFxyXG4gICAgICAgICAgICB2LWZvcj1cInByb2plY3QgaW4gcHJvamVjdHNcIlxyXG4gICAgICAgICAgICB2LWJpbmQ6ZGVzY3JpcHRpb249XCJwcm9qZWN0LmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdi1iaW5kOnBpY3R1cmVzPVwicHJvamVjdC5waWN0dXJlc1wiXHJcbiAgICAgICAgPjwvcHJvamVjdC1kaXNwbGF5PlxyXG4gICAgPC9kaXY+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQcm9qZWN0RGlzcGxheVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlF1b3Rlc1RhYi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBRdW90ZXNUYWIgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDYXRlZ29yeTogJ0NhdGVnb3J5IDEnLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgMScsXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgMicsXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgMycsXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgNCcsXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgNScsXHJcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnkgNidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50UXVvdGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxYCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiAnU3BlYWtlciAxJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0NhdGVnb3J5IDEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMmAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAxJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcXVvdGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxYCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiAnU3BlYWtlciAxJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0NhdGVnb3J5IDEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMmAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAxJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxLjIgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxLjMgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxLjQgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgNCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxLjUgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgNSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxLjYgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgNidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyLjYgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgNidcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50VGV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFF1b3Rlc1t0aGlzLmN1cnJlbnRJbmRleF0udGV4dDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRTcGVha2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS5zcGVha2VyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcGlja0NhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFF1b3RlcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Q3VycmVudFF1b3RlcygpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVvdGVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnF1b3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1b3Rlc1tpXS5jYXRlZ29yeSA9PT0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdW90ZXMucHVzaCh0aGlzLnF1b3Rlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRRdW90ZSgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50SW5kZXggPT09ICh0aGlzLmN1cnJlbnRRdW90ZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZpb3VzUXVvdGUoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudFF1b3Rlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cInF1b3Rlcy13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1b3RlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmV2aW91cy1xdW90ZVwiIEBjbGljaz1cInByZXZpb3VzUXVvdGVcIj5wcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVvdGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3sgY3VycmVudFRleHQgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57eyBjdXJyZW50U3BlYWtlciB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0LXF1b3RlXCIgQGNsaWNrPVwibmV4dFF1b3RlXCI+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZS1jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiBAY2xpY2s9XCJwaWNrQ2F0ZWdvcnkoY2F0ZWdvcnkpXCI+e3sgY2F0ZWdvcnkgfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlNwb3J0c1RhYi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcG9ydHNUYWIgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICdodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZycsXHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICdodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZydcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaXNJbWFnZUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBudWxsLFxyXG4gICAgICAgICAgICBzcG9ydHNXcmFwcGVySGVpZ2h0OiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgem9vbUltYWdlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbWFnZUFjdGl2ZSA9ICF0aGlzLmlzSW1hZ2VBY3RpdmU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJzcG9ydHMtd3JhcHBlclwiIHJlZj1cInNwb3J0c193cmFwcGVyXCI+XHJcbiAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgdi1iaW5kOmNsYXNzPVwieyBpbWFnZUFjdGl2ZTogaXNJbWFnZUFjdGl2ZSAmJiBhY3RpdmVJbmRleCA9PT0gaW5kZXggfVwiIFxyXG4gICAgICAgICAgICB2LWZvcj1cIihwaWN0dXJlLCBpbmRleCkgaW4gcGljdHVyZXNcIiBcclxuICAgICAgICAgICAgdi1iaW5kOnNyYz1cInBpY3R1cmVcIiBcclxuICAgICAgICAgICAgQGNsaWNrPVwiem9vbUltYWdlKGluZGV4KVwiIFxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCB7IEN1c3RvbUhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBNYWluVGVtcGxhdGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzXCI7XHJcbmltcG9ydCB7IEN1c3RvbUZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL0N1c3RvbUZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgUm9ib3RvIH0gZnJvbSBcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIjtcclxuXHJcbmNvbnN0IFBhZ2VUZW1wbGF0ZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudFRhYjogJ0hvbWUnLFxyXG4gICAgICAgICAgICB0YWJzOiBbJ0hvbWUnLCAnUHJvamVjdHMnLCAnUXVvdGVzJywgJ1Nwb3J0cyddLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGlua2VkSW4nLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvcmRhbi1jYXN0cm8tMTI4YmFiMWI0LycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0dpdGh1YicsIGFkZHJlc3M6ICdodHRwczovL2dpdGh1Yi5jb20vam9yZGFuamM2JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmFjZWJvb2snLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pvcmRhbi5jYXN0cm8uNzM3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRW1haWwnLCBhZGRyZXNzOiAnbWFpbHRvOmpvcmRhbmpjYXN0cm84QGdtYWlsLmNvbScgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudG9Mb3dlckNhc2UoKSArICctdGFiJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uU3dpdGNoVGFiKHRhYikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGN1c3RvbS1oZWFkZXIgdi1iaW5kOnRhYnM9XCJ0YWJzXCIgQHN3aXRjaC10YWI9XCJvblN3aXRjaFRhYlwiPlxyXG4gICAgICAgIDwvY3VzdG9tLWhlYWRlcj5cclxuICAgICAgICA8bWFpbi10ZW1wbGF0ZSB2LWJpbmQ6Y3VycmVudFRhYkNvbXBvbmVudD1cImN1cnJlbnRUYWJDb21wb25lbnRcIj5cclxuICAgICAgICA8L21haW4tdGVtcGxhdGU+XHJcbiAgICAgICAgPGN1c3RvbS1mb290ZXIgdi1iaW5kOmxpbmtzPVwibGlua3NcIj5cclxuICAgICAgICA8L2N1c3RvbS1mb290ZXI+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBDdXN0b21IZWFkZXIsXHJcbiAgICAgICAgTWFpblRlbXBsYXRlLFxyXG4gICAgICAgIEN1c3RvbUZvb3RlclxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gVnVlLmNyZWF0ZUFwcChQYWdlVGVtcGxhdGUpO1xyXG5hcHAubW91bnQoXCIjcGFnZVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=