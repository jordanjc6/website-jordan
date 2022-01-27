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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055RTtBQUNSO0FBQ1E7QUFDcEM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUZBQW1GO0FBQ3JHLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLHlFQUF5RTtBQUMzRixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL3N0eWxlLkN1c3RvbUZvb3Rlci5jc3M/NDg0ZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUhlYWRlci9zdHlsZS5DdXN0b21IZWFkZXIuY3NzPzEzMTYiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9zdHlsZS5Ib21lVGFiLmNzcz9jNmE0Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUHJvamVjdFNsaWRlLmNzcz9iNTNkIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuUXVvdGVTbGlkZS5jc3M/ZDYwYSIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlNwb3J0U2xpZGUuY3NzP2EyYmIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdERpc3BsYXkuY3NzPzIwZmUiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIvc3R5bGUuUHJvamVjdHNUYWIuY3NzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1F1b3Rlc1RhYi9zdHlsZS5RdW90ZXNUYWIuY3NzPzkxMmIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1Byb2plY3RTbGlkZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1F1b3RlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvSG9tZVRhYi9TcG9ydFNsaWRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Byb2plY3RzVGFiL1Byb2plY3RzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvU3BvcnRzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5DdXN0b21Gb290ZXIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tRm9vdGVyID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBsaW5rczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtcyBsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBsaW5rXCIgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtYmluZDpocmVmPVwibGluay5hZGRyZXNzXCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsaW5rLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZm9vdGVyPmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3N0eWxlLkN1c3RvbUhlYWRlci5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUhlYWRlciA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGFiczogQXJyYXlcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSB0YWJcIiB2LWZvcj1cInRhYiBpbiB0YWJzXCIgQGNsaWNrPVwiJGVtaXQoJ3N3aXRjaFRhYicsIHRhYilcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyB0YWIgfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+YFxyXG59OyIsImltcG9ydCB7IEhvbWVUYWIgfSBmcm9tIFwiLi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qc1wiXHJcbmltcG9ydCB7IFByb2plY3RzVGFiIH0gZnJvbSBcIi4vdGFicy9Qcm9qZWN0c1RhYi9Qcm9qZWN0c1RhYi5qc1wiO1xyXG5pbXBvcnQgeyBRdW90ZXNUYWIgfSBmcm9tIFwiLi90YWJzL1F1b3Rlc1RhYi9RdW90ZXNUYWIuanNcIjtcclxuaW1wb3J0IHsgU3BvcnRzVGFiIH0gZnJvbSBcIi4vdGFicy9TcG9ydHNUYWIuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVGVtcGxhdGUgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQ6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImN1cnJlbnRUYWJDb21wb25lbnRcIj48L2NvbXBvbmVudD5cclxuICAgIDwvbWFpbj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEhvbWVUYWIsXHJcbiAgICAgICAgUHJvamVjdHNUYWIsXHJcbiAgICAgICAgUXVvdGVzVGFiLFxyXG4gICAgICAgIFNwb3J0c1RhYlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdFNsaWRlIH0gZnJvbSBcIi4vUHJvamVjdFNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IFF1b3RlU2xpZGUgfSBmcm9tIFwiLi9RdW90ZVNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IFNwb3J0U2xpZGUgfSBmcm9tIFwiLi9TcG9ydFNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLkhvbWVUYWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVRhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmlvZ3JhcGh5OiBgXHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeWBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIGlkPVwiZGlzcGxheS1waWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGdcIiAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiaW9ncmFwaHlcIj57eyBiaW9ncmFwaHkgfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwcm9qZWN0LXNsaWRlPlxyXG4gICAgICAgIDwvcHJvamVjdC1zbGlkZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInF1b3Rlcy1jb250YWluZXJcIj5cclxuICAgICAgICA8cXVvdGUtc2xpZGU+XHJcbiAgICAgICAgPC9xdW90ZS1zbGlkZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInNwb3J0cy1jb250YWluZXJcIj5cclxuICAgICAgICA8c3BvcnQtc2xpZGU+XHJcbiAgICAgICAgPC9zcG9ydC1zbGlkZT5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgUHJvamVjdFNsaWRlLFxyXG4gICAgICAgIFF1b3RlU2xpZGUsXHJcbiAgICAgICAgU3BvcnRTbGlkZVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlByb2plY3RTbGlkZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0U2xpZGUgPSB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhcHRpb25WaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBwcm9qZWN0czogW1xyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3AzMjY5MjQ2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jb29sYmFja2dyb3VuZHMuaW8vaW1hZ2VzL2JhY2tncm91bmRzL3doaXRlL3B1cmUtd2hpdGUtYmFja2dyb3VuZC04NWEyYTdmZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50SW1hZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudENhcHRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmNhcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVDYXB0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHRpb25WaXNpYmxlID0gIXRoaXMuY2FwdGlvblZpc2libGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0U2xpZGUsIDYwMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRTbGlkZSgpO1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aW1nIGlkPVwicHJvamVjdC1pbWFnZVwiIHYtYmluZDpzcmM9XCJjdXJyZW50SW1hZ2VcIiBAY2xpY2s9XCJ0b2dnbGVDYXB0aW9uXCIgLz5cclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWNhcHRpb25cIiB2LWlmPVwiY2FwdGlvblZpc2libGVcIj5cclxuICAgICAgICB7eyBjdXJyZW50Q2FwdGlvbiB9fVxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlF1b3RlU2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUXVvdGVTbGlkZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBxdW90ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFF1b3RlIDEgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMScgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDIgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMicgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDMgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMycgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDQgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNCcgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIDUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNScgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUXVvdGUgNiBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciA2JyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY3VycmVudFRleHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1b3Rlc1t0aGlzLmN1cnJlbnRJbmRleF0udGV4dDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRBdXRob3IoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1b3Rlc1t0aGlzLmN1cnJlbnRJbmRleF0uYXV0aG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFuZG9tUXVvdGUoKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleDtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAwICsgMSkgKyAwKTtcclxuICAgICAgICAgICAgfSB3aGlsZShyYW5kb21JbmRleCA9PSB0aGlzLmN1cnJlbnRJbmRleCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHJhbmRvbUluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tUXVvdGUoKTtcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicXVvdGUtdGV4dFwiPlxyXG4gICAgICAgICAgICB7eyBjdXJyZW50VGV4dCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdW90ZS1hdXRob3JcIj5cclxuICAgICAgICAgICAge3sgY3VycmVudEF1dGhvciB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwicmFuZG9tUXVvdGVcIj5cclxuICAgICAgICAgICAgQ2xpY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PmBcclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5TcG9ydFNsaWRlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwb3J0U2xpZGUgPSB7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBpZD1cImNvbGxhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZ1wiIC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmdcIiAvPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29vbGJhY2tncm91bmRzLmlvL2ltYWdlcy9iYWNrZ3JvdW5kcy93aGl0ZS9wdXJlLXdoaXRlLWJhY2tncm91bmQtODVhMmE3ZmQuanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnXCIgLz5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZ1wiIC8+XHJcbiAgICAgICAgPGltZyAvPlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlByb2plY3REaXNwbGF5LmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3REaXNwbGF5ID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gICAgICAgIHBpY3R1cmVzOiBBcnJheVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtcGljdHVyZXNcIj5cclxuICAgICAgICAgICAgPGltZyB2LWZvcj1cInBpY3R1cmUgaW4gcGljdHVyZXNcIiB2LWJpbmQ6c3JjPVwicGljdHVyZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiaW1wb3J0IHsgUHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9Qcm9qZWN0RGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Qcm9qZWN0c1RhYi5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0c1RhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDEuIFRoaXMgaXMgcHJvamVjdCAxLiBUaGlzIGlzIHByb2plY3QgMS5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3d3dy5mcmVkcm9nZXJzY2VudGVyLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9kYXJrLWdyZXktYmFja2dyb3VuZC1GUkMtR3JleS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBwcm9qZWN0IDIuIFRoaXMgaXMgcHJvamVjdCAyLiBUaGlzIGlzIHByb2plY3QgMi5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMzI2OTI0Ni5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZnJlZHJvZ2Vyc2NlbnRlci5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTEvZGFyay1ncmV5LWJhY2tncm91bmQtRlJDLUdyZXkucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcHJvamVjdCAzLiBUaGlzIGlzIHByb2plY3QgMy4gVGhpcyBpcyBwcm9qZWN0IDMuYCxcclxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaS5pbWdmbGlwLmNvbS81OHI5ZGouanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2Nvb2xiYWNrZ3JvdW5kcy5pby9pbWFnZXMvYmFja2dyb3VuZHMvd2hpdGUvcHVyZS13aGl0ZS1iYWNrZ3JvdW5kLTg1YTJhN2ZkLmpwZydcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwicHJvamVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxwcm9qZWN0LWRpc3BsYXkgXHJcbiAgICAgICAgICAgIHYtZm9yPVwicHJvamVjdCBpbiBwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgIHYtYmluZDpkZXNjcmlwdGlvbj1cInByb2plY3QuZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2LWJpbmQ6cGljdHVyZXM9XCJwcm9qZWN0LnBpY3R1cmVzXCJcclxuICAgICAgICA+PC9wcm9qZWN0LWRpc3BsYXk+XHJcbiAgICA8L2Rpdj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFByb2plY3REaXNwbGF5XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuUXVvdGVzVGFiLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1b3Rlc1RhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudENhdGVnb3J5OiAnQ2F0ZWdvcnkgMScsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAxJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAyJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSAzJyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA0JyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA1JyxcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yeSA2J1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcGlja0NhdGVnb3J5KGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENhdGVnb3J5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJxdW90ZXMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXMtcXVvdGVcIj5wcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBcclxuICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0LXF1b3RlXCI+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdW90ZS1jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiBAY2xpY2s9XCJwaWNrQ2F0ZWdvcnkoY2F0ZWdvcnkpXCI+e3sgY2F0ZWdvcnkgfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImV4cG9ydCBjb25zdCBTcG9ydHNUYWIgPSB7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICBzcG9ydHNcclxuICAgIDwvZGl2PmBcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEN1c3RvbUhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBNYWluVGVtcGxhdGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzXCI7XHJcbmltcG9ydCB7IEN1c3RvbUZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL0N1c3RvbUZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFBhZ2VUZW1wbGF0ZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudFRhYjogJ0hvbWUnLFxyXG4gICAgICAgICAgICB0YWJzOiBbJ0hvbWUnLCAnUHJvamVjdHMnLCAnUXVvdGVzJywgJ1Nwb3J0cyddLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGlua2VkSW4nLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvcmRhbi1jYXN0cm8tMTI4YmFiMWI0LycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0dpdGh1YicsIGFkZHJlc3M6ICdodHRwczovL2dpdGh1Yi5jb20vam9yZGFuamM2JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmFjZWJvb2snLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pvcmRhbi5jYXN0cm8uNzM3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRW1haWwnLCBhZGRyZXNzOiAnbWFpbHRvOmpvcmRhbmpjYXN0cm84QGdtYWlsLmNvbScgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudG9Mb3dlckNhc2UoKSArICctdGFiJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uU3dpdGNoVGFiKHRhYikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGN1c3RvbS1oZWFkZXIgaWQ9XCJ0ZXN0XCIgdi1iaW5kOnRhYnM9XCJ0YWJzXCIgQHN3aXRjaC10YWI9XCJvblN3aXRjaFRhYlwiPlxyXG4gICAgICAgIDwvY3VzdG9tLWhlYWRlcj5cclxuICAgICAgICA8bWFpbi10ZW1wbGF0ZSB2LWJpbmQ6Y3VycmVudFRhYkNvbXBvbmVudD1cImN1cnJlbnRUYWJDb21wb25lbnRcIj5cclxuICAgICAgICA8L21haW4tdGVtcGxhdGU+XHJcbiAgICAgICAgPGN1c3RvbS1mb290ZXIgdi1iaW5kOmxpbmtzPVwibGlua3NcIj5cclxuICAgICAgICA8L2N1c3RvbS1mb290ZXI+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBDdXN0b21IZWFkZXIsXHJcbiAgICAgICAgTWFpblRlbXBsYXRlLFxyXG4gICAgICAgIEN1c3RvbUZvb3RlclxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gVnVlLmNyZWF0ZUFwcChQYWdlVGVtcGxhdGUpO1xyXG5hcHAubW91bnQoXCIjcGFnZVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=