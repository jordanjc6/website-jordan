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
/* harmony import */ var _tabs_SportsTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/SportsTab.js */ "./src/components/main/tabs/SportsTab.js");





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
        SportsTab: _tabs_SportsTab_js__WEBPACK_IMPORTED_MODULE_3__.SportsTab
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

/***/ "./src/components/main/tabs/SportsTab.js":
/*!***********************************************!*\
  !*** ./src/components/main/tabs/SportsTab.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportsTab": () => (/* binding */ SportsTab)
/* harmony export */ });
const SportsTab = {
    template: `
    <div>
        sports
    </div>`
};

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
        <custom-header id="test" v-bind:tabs="tabs" @switch-tab="onSwitchTab">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055RTtBQUNSO0FBQ1E7QUFDcEM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUZBQW1GO0FBQ3JHLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLHlFQUF5RTtBQUMzRixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL3N0eWxlLkN1c3RvbUZvb3Rlci5jc3M/NDg0ZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUhlYWRlci9zdHlsZS5DdXN0b21IZWFkZXIuY3NzPzEzMTYiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9zdHlsZS5Ib21lVGFiLmNzcz9jNmE0Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUHJvamVjdFNsaWRlLmNzcz9iNTNkIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUXVvdGVTbGlkZS5jc3M/ZDYwYSIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlNwb3J0U2xpZGUuY3NzP2EyYmIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdERpc3BsYXkuY3NzPzIwZmUiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdHNUYWIuY3NzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1F1b3Rlc1RhYi9zdHlsZS5RdW90ZXNUYWIuY3NzPzkxMmIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1Byb2plY3RTbGlkZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1F1b3RlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9TcG9ydFNsaWRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3RzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvU3BvcnRzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5DdXN0b21Gb290ZXIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tRm9vdGVyID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBsaW5rczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtcyBsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBsaW5rXCIgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtYmluZDpocmVmPVwibGluay5hZGRyZXNzXCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsaW5rLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZm9vdGVyPmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3N0eWxlLkN1c3RvbUhlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUhlYWRlciA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGFiczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSB0YWJcIiB2LWZvcj1cInRhYiBpbiB0YWJzXCIgQGNsaWNrPVwiJGVtaXQoJ3N3aXRjaFRhYicsIHRhYilcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyB0YWIgfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+YFxyXG59OyIsImltcG9ydCB7IEhvbWVUYWIgfSBmcm9tIFwiLi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qc1wiXHJcbmltcG9ydCB7IFByb2plY3RzVGFiIH0gZnJvbSBcIi4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0c1RhYi5qc1wiO1xyXG5pbXBvcnQgeyBRdW90ZXNUYWIgfSBmcm9tIFwiLi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanNcIjtcclxuaW1wb3J0IHsgU3BvcnRzVGFiIH0gZnJvbSBcIi4vdGFicy9TcG9ydHNUYWIuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVGVtcGxhdGUgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQ6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImN1cnJlbnRUYWJDb21wb25lbnRcIj48L2NvbXBvbmVudD5cclxuICAgIDwvbWFpbj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEhvbWVUYWIsXHJcbiAgICAgICAgUHJvamVjdHNUYWIsXHJcbiAgICAgICAgUXVvdGVzVGFiLFxyXG4gICAgICAgIFNwb3J0c1RhYlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdFNsaWRlIH0gZnJvbSBcIi4vUHJvamVjdFNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IFF1b3RlU2xpZGUgfSBmcm9tIFwiLi9RdW90ZVNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IFNwb3J0U2xpZGUgfSBmcm9tIFwiLi9TcG9ydFNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLkhvbWVUYWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVRhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmlvZ3JhcGh5OiBgXHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeWBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIGlkPVwiZGlzcGxheS1waWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGdcIiAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiaW9ncmFwaHlcIj57eyBiaW9ncmFwaHkgfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwcm9qZWN0LXNsaWRlPlxyXG4gICAgICAgIDwvcHJvamVjdC1zbGlkZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInF1b3Rlcy1jb250YWluZXJcIj5cclxuICAgICAgICA8cXVvdGUtc2xpZGU+XHJcbiAgICAgICAgPC9xdW90ZS1zbGlkZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInNwb3J0cy1jb250YWluZXJcIj5cclxuICAgICAgICA8c3BvcnQtc2xpZGU+XHJcbiAgICAgICAgPC9zcG9ydC1zbGlkZT5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgUHJvamVjdFNsaWRlLFxyXG4gICAgICAgIFF1b3RlU2xpZGUsXHJcbiAgICAgICAgU3BvcnRTbGlkZVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlByb2plY3RTbGlkZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0U2xpZGUgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhcHRpb25WaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBwcm9qZWN0czogW1xyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzMjY5MjQ2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jb29sYmFja2dyb3VuZHMuaW8vaW1hZ2VzL2JhY2tncm91bmRzL3doaXRlL3B1cmUtd2hpdGUtYmFja2dyb3VuZC04NWEyYTdmZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50SW1hZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudENhcHRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmNhcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVDYXB0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHRpb25WaXNpYmxlID0gIXRoaXMuY2FwdGlvblZpc2libGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0U2xpZGUsIDYwMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRTbGlkZSgpO1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aW1nIGlkPVwicHJvamVjdC1pbWFnZVwiIHYtYmluZDpzcmM9XCJjdXJyZW50SW1hZ2VcIiBAY2xpY2s9XCJ0b2dnbGVDYXB0aW9uXCIgLz5cclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWNhcHRpb25cIiB2LWlmPVwiY2FwdGlvblZpc2libGVcIj5cclxuICAgICAgICB7eyBjdXJyZW50Q2FwdGlvbiB9fVxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlF1b3RlU2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUXVvdGVTbGlkZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBxdW90ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFF1b3RlIDEgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMScgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDIgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMicgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDMgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMycgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDQgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNCcgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNScgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUXVvdGUgNiBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciA2JyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudFRleHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1b3Rlc1t0aGlzLmN1cnJlbnRJbmRleF0udGV4dDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRBdXRob3IoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1b3Rlc1t0aGlzLmN1cnJlbnRJbmRleF0uYXV0aG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFuZG9tUXVvdGUoKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAwICsgMSkgKyAwKTtcclxuICAgICAgICAgICAgfSB3aGlsZShyYW5kb21JbmRleCA9PSB0aGlzLmN1cnJlbnRJbmRleCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHJhbmRvbUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tUXVvdGUoKTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicXVvdGUtdGV4dFwiPlxyXG4gICAgICAgICAgICB7eyBjdXJyZW50VGV4dCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdW90ZS1hdXRob3JcIj5cclxuICAgICAgICAgICAge3sgY3VycmVudEF1dGhvciB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwicmFuZG9tUXVvdGVcIj5cclxuICAgICAgICAgICAgQ2xpY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5TcG9ydFNsaWRlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwb3J0U2xpZGUgPSB7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cImNvbGxhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29vbGJhY2tncm91bmRzLmlvL2ltYWdlcy9iYWNrZ3JvdW5kcy93aGl0ZS9wdXJlLXdoaXRlLWJhY2tncm91bmQtODVhMmE3ZmQuanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZ1wiIC8+XHJcbiAgICAgICAgPGltZyAvPlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlByb2plY3REaXNwbGF5LmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3REaXNwbGF5ID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gICAgICAgIHBpY3R1cmVzOiBBcnJheVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtcGljdHVyZXNcIj5cclxuICAgICAgICAgICAgPGltZyB2LWZvcj1cInBpY3R1cmUgaW4gcGljdHVyZXNcIiB2LWJpbmQ6c3JjPVwicGljdHVyZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiaW1wb3J0IHsgUHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9Qcm9qZWN0RGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Qcm9qZWN0c1RhYi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c1RhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMzI2OTI0Ni5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuYCxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZydcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwicHJvamVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxwcm9qZWN0LWRpc3BsYXkgXHJcbiAgICAgICAgICAgIHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgIHYtYmluZDpkZXNjcmlwdGlvbj1cInByb2plY3QuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2LWJpbmQ6cGljdHVyZXM9XCJwcm9qZWN0LnBpY3R1cmVzXCJcclxuICAgICAgICA+PC9wcm9qZWN0LWRpc3BsYXk+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFByb2plY3REaXNwbGF5XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUXVvdGVzVGFiLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1b3Rlc1RhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudENhdGVnb3J5OiAnQ2F0ZWdvcnkgMScsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAxJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAyJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAzJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA0JyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA1JyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA2J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRRdW90ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyYCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiAnU3BlYWtlciAyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0NhdGVnb3J5IDEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM2AsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAxJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBxdW90ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6ICdTcGVha2VyIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyIFRleHQgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIgVGV4dCAyIFRleHQgMiBUZXh0IDIgVGV4dCAyYCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiAnU3BlYWtlciAyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0NhdGVnb3J5IDEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgMyBUZXh0IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAzIFRleHQgMyBUZXh0IDMgVGV4dCAzIFRleHQgM2AsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAxJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEuMiBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEuMyBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSAzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEuNCBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSA0J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEuNSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSA1J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEuNiBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSA2J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDIuNiBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMSBUZXh0IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCAxIFRleHQgMSBUZXh0IDEgVGV4dCAxIFRleHQgMWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogJ1NwZWFrZXIgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDYXRlZ29yeSA2J1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRUZXh0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS50ZXh0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudFNwZWFrZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRRdW90ZXNbdGhpcy5jdXJyZW50SW5kZXhdLnNwZWFrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBwaWNrQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UXVvdGVzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRDdXJyZW50UXVvdGVzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdW90ZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucXVvdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucXVvdGVzW2ldLmNhdGVnb3J5ID09PSB0aGlzLmN1cnJlbnRDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1b3Rlcy5wdXNoKHRoaXMucXVvdGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dFF1b3RlKCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRJbmRleCA9PT0gKHRoaXMuY3VycmVudFF1b3Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlvdXNRdW90ZSgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50UXVvdGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwicXVvdGVzLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVvdGUtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzLXF1b3RlXCIgQGNsaWNrPVwicHJldmlvdXNRdW90ZVwiPnByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD57eyBjdXJyZW50VGV4dCB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnt7IGN1cnJlbnRTcGVha2VyIH19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHQtcXVvdGVcIiBAY2xpY2s9XCJuZXh0UXVvdGVcIj5uZXh0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1b3RlLWNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiIEBjbGljaz1cInBpY2tDYXRlZ29yeShjYXRlZ29yeSlcIj57eyBjYXRlZ29yeSB9fTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiZXhwb3J0IGNvbnN0IFNwb3J0c1RhYiA9IHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHNwb3J0c1xyXG4gICAgPC9kaXY+YFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ3VzdG9tSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21IZWFkZXIvQ3VzdG9tSGVhZGVyLmpzXCI7XHJcbmltcG9ydCB7IE1haW5UZW1wbGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi9NYWluVGVtcGxhdGUuanNcIjtcclxuaW1wb3J0IHsgQ3VzdG9tRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUGFnZVRlbXBsYXRlID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAnSG9tZScsXHJcbiAgICAgICAgICAgIHRhYnM6IFsnSG9tZScsICdQcm9qZWN0cycsICdRdW90ZXMnLCAnU3BvcnRzJ10sXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMaW5rZWRJbicsIGFkZHJlc3M6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9yZGFuLWNhc3Ryby0xMjhiYWIxYjQvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0aHViJywgYWRkcmVzczogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb3JkYW5qYzYnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdGYWNlYm9vaycsIGFkZHJlc3M6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vam9yZGFuLmNhc3Ryby43MzcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFbWFpbCcsIGFkZHJlc3M6ICdtYWlsdG86am9yZGFuamNhc3RybzhAZ21haWwuY29tJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudFRhYkNvbXBvbmVudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRhYi50b0xvd2VyQ2FzZSgpICsgJy10YWInO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25Td2l0Y2hUYWIodGFiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Y3VzdG9tLWhlYWRlciBpZD1cInRlc3RcIiB2LWJpbmQ6dGFicz1cInRhYnNcIiBAc3dpdGNoLXRhYj1cIm9uU3dpdGNoVGFiXCI+XHJcbiAgICAgICAgPC9jdXN0b20taGVhZGVyPlxyXG4gICAgICAgIDxtYWluLXRlbXBsYXRlIHYtYmluZDpjdXJyZW50VGFiQ29tcG9uZW50PVwiY3VycmVudFRhYkNvbXBvbmVudFwiPlxyXG4gICAgICAgIDwvbWFpbi10ZW1wbGF0ZT5cclxuICAgICAgICA8Y3VzdG9tLWZvb3RlciB2LWJpbmQ6bGlua3M9XCJsaW5rc1wiPlxyXG4gICAgICAgIDwvY3VzdG9tLWZvb3Rlcj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEN1c3RvbUhlYWRlcixcclxuICAgICAgICBNYWluVGVtcGxhdGUsXHJcbiAgICAgICAgQ3VzdG9tRm9vdGVyXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBWdWUuY3JlYXRlQXBwKFBhZ2VUZW1wbGF0ZSk7XHJcbmFwcC5tb3VudChcIiNwYWdlXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==