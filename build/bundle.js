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
/* harmony import */ var _tabs_QuotesTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/QuotesTab.js */ "./src/components/main/tabs/QuotesTab.js");
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
        QuotesTab: _tabs_QuotesTab_js__WEBPACK_IMPORTED_MODULE_2__.QuotesTab,
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

/***/ "./src/components/main/tabs/QuotesTab.js":
/*!***********************************************!*\
  !*** ./src/components/main/tabs/QuotesTab.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotesTab": () => (/* binding */ QuotesTab)
/* harmony export */ });
const QuotesTab = {
    template: `
    <div>
        quotes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ055RTtBQUNSO0FBQ1E7QUFDcEM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUZBQW1GO0FBQ3JHLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLHlFQUF5RTtBQUMzRixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL3N0eWxlLkN1c3RvbUZvb3Rlci5jc3M/NDg0ZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUhlYWRlci9zdHlsZS5DdXN0b21IZWFkZXIuY3NzPzEzMTYiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9zdHlsZS5Ib21lVGFiLmNzcz9jNmE0Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUHJvamVjdFNsaWRlLmNzcz9iNTNkIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUXVvdGVTbGlkZS5jc3M/ZDYwYSIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlNwb3J0U2xpZGUuY3NzP2EyYmIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdERpc3BsYXkuY3NzPzIwZmUiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdHNUYWIuY3NzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL0N1c3RvbUZvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUhlYWRlci9DdXN0b21IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL01haW5UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL0hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9Qcm9qZWN0U2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9RdW90ZVNsaWRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvU3BvcnRTbGlkZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0RGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0c1RhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9RdW90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvU3BvcnRzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5DdXN0b21Gb290ZXIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tRm9vdGVyID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBsaW5rczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtcyBsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBsaW5rXCIgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtYmluZDpocmVmPVwibGluay5hZGRyZXNzXCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsaW5rLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZm9vdGVyPmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3N0eWxlLkN1c3RvbUhlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUhlYWRlciA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGFiczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSB0YWJcIiB2LWZvcj1cInRhYiBpbiB0YWJzXCIgQGNsaWNrPVwiJGVtaXQoJ3N3aXRjaFRhYicsIHRhYilcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyB0YWIgfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+YFxyXG59OyIsImltcG9ydCB7IEhvbWVUYWIgfSBmcm9tIFwiLi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qc1wiXHJcbmltcG9ydCB7IFByb2plY3RzVGFiIH0gZnJvbSBcIi4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0c1RhYi5qc1wiO1xyXG5pbXBvcnQgeyBRdW90ZXNUYWIgfSBmcm9tIFwiLi90YWJzL1F1b3Rlc1RhYi5qc1wiO1xyXG5pbXBvcnQgeyBTcG9ydHNUYWIgfSBmcm9tIFwiLi90YWJzL1Nwb3J0c1RhYi5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5UZW1wbGF0ZSA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgY3VycmVudFRhYkNvbXBvbmVudDogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxtYWluPlxyXG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiY3VycmVudFRhYkNvbXBvbmVudFwiPjwvY29tcG9uZW50PlxyXG4gICAgPC9tYWluPmAsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSG9tZVRhYixcclxuICAgICAgICBQcm9qZWN0c1RhYixcclxuICAgICAgICBRdW90ZXNUYWIsXHJcbiAgICAgICAgU3BvcnRzVGFiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0U2xpZGUgfSBmcm9tIFwiLi9Qcm9qZWN0U2xpZGUuanNcIjtcclxuaW1wb3J0IHsgUXVvdGVTbGlkZSB9IGZyb20gXCIuL1F1b3RlU2xpZGUuanNcIjtcclxuaW1wb3J0IHsgU3BvcnRTbGlkZSB9IGZyb20gXCIuL1Nwb3J0U2xpZGUuanNcIjtcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuSG9tZVRhYi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lVGFiID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiaW9ncmFwaHk6IGBcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5YFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgaWQ9XCJkaXNwbGF5LXBpY3R1cmVcIiBzcmM9XCJodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZ1wiIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cImJpb2dyYXBoeVwiPnt7IGJpb2dyYXBoeSB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwicHJvamVjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHByb2plY3Qtc2xpZGU+XHJcbiAgICAgICAgPC9wcm9qZWN0LXNsaWRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwicXVvdGVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxxdW90ZS1zbGlkZT5cclxuICAgICAgICA8L3F1b3RlLXNsaWRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwic3BvcnRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzcG9ydC1zbGlkZT5cclxuICAgICAgICA8L3Nwb3J0LXNsaWRlPlxyXG4gICAgPC9kaXY+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQcm9qZWN0U2xpZGUsXHJcbiAgICAgICAgUXVvdGVTbGlkZSxcclxuICAgICAgICBTcG9ydFNsaWRlXHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUHJvamVjdFNsaWRlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RTbGlkZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2FwdGlvblZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHByb2plY3RzOiBbXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRJbWFnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbdGhpcy5jdXJyZW50SW5kZXggJSB0aGlzLnByb2plY3RzLmxlbmd0aF0uaW1hZ2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50Q2FwdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbdGhpcy5jdXJyZW50SW5kZXggJSB0aGlzLnByb2plY3RzLmxlbmd0aF0uY2FwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZUNhcHRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdGlvblZpc2libGUgPSAhdGhpcy5jYXB0aW9uVmlzaWJsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0U2xpZGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLm5leHRTbGlkZSwgNjAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFNsaWRlKCk7XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxpbWcgaWQ9XCJwcm9qZWN0LWltYWdlXCIgdi1iaW5kOnNyYz1cImN1cnJlbnRJbWFnZVwiIEBjbGljaz1cInRvZ2dsZUNhcHRpb25cIiAvPlxyXG4gICAgPGRpdiBpZD1cInByb2plY3QtY2FwdGlvblwiIHYtaWY9XCJjYXB0aW9uVmlzaWJsZVwiPlxyXG4gICAgICAgIHt7IGN1cnJlbnRDYXB0aW9uIH19XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUXVvdGVTbGlkZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBRdW90ZVNsaWRlID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHF1b3RlczogW1xyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUXVvdGUgMSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciAxJyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgMiBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciAyJyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgMyBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciAzJyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgNCBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciA0JyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgNSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciA1JyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBRdW90ZSA2IFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDYnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50VGV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS50ZXh0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudEF1dGhvcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS5hdXRob3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByYW5kb21RdW90ZSgpIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDAgKyAxKSArIDApO1xyXG4gICAgICAgICAgICB9IHdoaWxlKHJhbmRvbUluZGV4ID09IHRoaXMuY3VycmVudEluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb21RdW90ZSgpO1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdW90ZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIHt7IGN1cnJlbnRUZXh0IH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInF1b3RlLWF1dGhvclwiPlxyXG4gICAgICAgICAgICB7eyBjdXJyZW50QXV0aG9yIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJyYW5kb21RdW90ZVwiPlxyXG4gICAgICAgICAgICBDbGlja1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlNwb3J0U2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3BvcnRTbGlkZSA9IHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiY29sbGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMzI2OTI0Ni5qcGdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb29sYmFja2dyb3VuZHMuaW8vaW1hZ2VzL2JhY2tncm91bmRzL3doaXRlL3B1cmUtd2hpdGUtYmFja2dyb3VuZC04NWEyYTdmZC5qcGdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nXCIgLz5cclxuICAgICAgICA8aW1nIC8+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUHJvamVjdERpc3BsYXkuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdERpc3BsYXkgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgICAgICAgcGljdHVyZXM6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1waWN0dXJlc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHYtZm9yPVwicGljdHVyZSBpbiBwaWN0dXJlc1wiIHYtYmluZDpzcmM9XCJwaWN0dXJlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufTsiLCJpbXBvcnQgeyBQcm9qZWN0RGlzcGxheSB9IGZyb20gXCIuL1Byb2plY3REaXNwbGF5LmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlByb2plY3RzVGFiLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzVGFiID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0czogW1xyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMS4gVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZydcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHByb2plY3QgMi4gVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzMjY5MjQ2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDMuIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMzI2OTI0Ni5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vY29vbGJhY2tncm91bmRzLmlvL2ltYWdlcy9iYWNrZ3JvdW5kcy93aGl0ZS9wdXJlLXdoaXRlLWJhY2tncm91bmQtODVhMmE3ZmQuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgPHByb2plY3QtZGlzcGxheSBcclxuICAgICAgICAgICAgdi1mb3I9XCJwcm9qZWN0IGluIHByb2plY3RzXCJcclxuICAgICAgICAgICAgdi1iaW5kOmRlc2NyaXB0aW9uPVwicHJvamVjdC5kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHYtYmluZDpwaWN0dXJlcz1cInByb2plY3QucGljdHVyZXNcIlxyXG4gICAgICAgID48L3Byb2plY3QtZGlzcGxheT5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgUHJvamVjdERpc3BsYXlcclxuICAgIH1cclxufTsiLCJleHBvcnQgY29uc3QgUXVvdGVzVGFiID0ge1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgcXVvdGVzXHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiZXhwb3J0IGNvbnN0IFNwb3J0c1RhYiA9IHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHNwb3J0c1xyXG4gICAgPC9kaXY+YFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ3VzdG9tSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21IZWFkZXIvQ3VzdG9tSGVhZGVyLmpzXCI7XHJcbmltcG9ydCB7IE1haW5UZW1wbGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi9NYWluVGVtcGxhdGUuanNcIjtcclxuaW1wb3J0IHsgQ3VzdG9tRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUGFnZVRlbXBsYXRlID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50VGFiOiAnSG9tZScsXHJcbiAgICAgICAgICAgIHRhYnM6IFsnSG9tZScsICdQcm9qZWN0cycsICdRdW90ZXMnLCAnU3BvcnRzJ10sXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMaW5rZWRJbicsIGFkZHJlc3M6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9yZGFuLWNhc3Ryby0xMjhiYWIxYjQvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0aHViJywgYWRkcmVzczogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb3JkYW5qYzYnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdGYWNlYm9vaycsIGFkZHJlc3M6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vam9yZGFuLmNhc3Ryby43MzcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFbWFpbCcsIGFkZHJlc3M6ICdtYWlsdG86am9yZGFuamNhc3RybzhAZ21haWwuY29tJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudFRhYkNvbXBvbmVudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRhYi50b0xvd2VyQ2FzZSgpICsgJy10YWInO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25Td2l0Y2hUYWIodGFiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Y3VzdG9tLWhlYWRlciBpZD1cInRlc3RcIiB2LWJpbmQ6dGFicz1cInRhYnNcIiBAc3dpdGNoLXRhYj1cIm9uU3dpdGNoVGFiXCI+XHJcbiAgICAgICAgPC9jdXN0b20taGVhZGVyPlxyXG4gICAgICAgIDxtYWluLXRlbXBsYXRlIHYtYmluZDpjdXJyZW50VGFiQ29tcG9uZW50PVwiY3VycmVudFRhYkNvbXBvbmVudFwiPlxyXG4gICAgICAgIDwvbWFpbi10ZW1wbGF0ZT5cclxuICAgICAgICA8Y3VzdG9tLWZvb3RlciB2LWJpbmQ6bGlua3M9XCJsaW5rc1wiPlxyXG4gICAgICAgIDwvY3VzdG9tLWZvb3Rlcj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEN1c3RvbUhlYWRlcixcclxuICAgICAgICBNYWluVGVtcGxhdGUsXHJcbiAgICAgICAgQ3VzdG9tRm9vdGVyXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBWdWUuY3JlYXRlQXBwKFBhZ2VUZW1wbGF0ZSk7XHJcbmFwcC5tb3VudChcIiNwYWdlXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==