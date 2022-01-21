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
/* harmony import */ var _tabs_ProjectsTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/ProjectsTab.js */ "./src/components/main/tabs/ProjectsTab.js");
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
        ProjectsTab: _tabs_ProjectsTab_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsTab,
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
/* harmony import */ var _style_HomeTab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.HomeTab.css */ "./src/components/main/tabs/HomeTab/style.HomeTab.css");




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
    </div>`,
    components: {
        ProjectSlide: _ProjectSlide_js__WEBPACK_IMPORTED_MODULE_0__.ProjectSlide,
        QuoteSlide: _QuoteSlide_js__WEBPACK_IMPORTED_MODULE_1__.QuoteSlide
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
                    caption: `Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                    caption: `Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://wallpapercave.com/wp/wp3269246.jpg',
                    caption: `Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: 'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg',
                    caption: `Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
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
                    text: `Quote 2 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 2' 
                },
                { 
                    text: `Quote 3 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 3' 
                },
                { 
                    text: `Quote 4 Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote
                        Quote Quote Quote Quote Quote Quote`,
                    author: 'Speaker 4' 
                },
                { 
                    text: `Quote 5 Quote Quote Quote Quote Quote
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

/***/ "./src/components/main/tabs/ProjectsTab.js":
/*!*************************************************!*\
  !*** ./src/components/main/tabs/ProjectsTab.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsTab": () => (/* binding */ ProjectsTab)
/* harmony export */ });
const ProjectsTab = {
    template: `
    <div>
        projects
    </div>`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUU7QUFDUjtBQUNRO0FBQ3BDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1GQUFtRjtBQUNyRyxrQkFBa0IseURBQXlEO0FBQzNFLGtCQUFrQix5RUFBeUU7QUFDM0Ysa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUZvb3Rlci9zdHlsZS5DdXN0b21Gb290ZXIuY3NzPzQ4NGQiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21IZWFkZXIvc3R5bGUuQ3VzdG9tSGVhZGVyLmNzcz8xMzE2Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvc3R5bGUuSG9tZVRhYi5jc3M/YzZhNCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlByb2plY3RTbGlkZS5jc3M/YjUzZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL3N0eWxlLlF1b3RlU2xpZGUuY3NzP2Q2MGEiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9DdXN0b21Gb290ZXIvQ3VzdG9tRm9vdGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL0hvbWVUYWIvSG9tZVRhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1Byb2plY3RTbGlkZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi8uL3NyYy9jb21wb25lbnRzL21haW4vdGFicy9Ib21lVGFiL1F1b3RlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUHJvamVjdHNUYWIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vLi9zcmMvY29tcG9uZW50cy9tYWluL3RhYnMvUXVvdGVzVGFiLmpzIiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL2NvbXBvbmVudHMvbWFpbi90YWJzL1Nwb3J0c1RhYi5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1qb3JkYW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWpvcmRhbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtam9yZGFuLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIi4vc3R5bGUuQ3VzdG9tRm9vdGVyLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUZvb3RlciA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbGlua3M6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaXRlbXMgbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gbGlua1wiIHYtZm9yPVwibGluayBpbiBsaW5rc1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8YSB2LWJpbmQ6aHJlZj1cImxpbmsuYWRkcmVzc1wiIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGluay5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Zvb3Rlcj5gXHJcbn07IiwiaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9zdHlsZS5DdXN0b21IZWFkZXIuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21IZWFkZXIgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRhYnM6IEFycmF5XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gdGFiXCIgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIEBjbGljaz1cIiRlbWl0KCdzd2l0Y2hUYWInLCB0YWIpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgdGFiIH19XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPmBcclxufTsiLCJpbXBvcnQgeyBIb21lVGFiIH0gZnJvbSBcIi4vdGFicy9Ib21lVGFiL0hvbWVUYWIuanNcIlxyXG5pbXBvcnQgeyBQcm9qZWN0c1RhYiB9IGZyb20gXCIuL3RhYnMvUHJvamVjdHNUYWIuanNcIjtcclxuaW1wb3J0IHsgUXVvdGVzVGFiIH0gZnJvbSBcIi4vdGFicy9RdW90ZXNUYWIuanNcIjtcclxuaW1wb3J0IHsgU3BvcnRzVGFiIH0gZnJvbSBcIi4vdGFicy9TcG9ydHNUYWIuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVGVtcGxhdGUgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQ6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImN1cnJlbnRUYWJDb21wb25lbnRcIj48L2NvbXBvbmVudD5cclxuICAgIDwvbWFpbj5gLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEhvbWVUYWIsXHJcbiAgICAgICAgUHJvamVjdHNUYWIsXHJcbiAgICAgICAgUXVvdGVzVGFiLFxyXG4gICAgICAgIFNwb3J0c1RhYlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdFNsaWRlIH0gZnJvbSBcIi4vUHJvamVjdFNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IFF1b3RlU2xpZGUgfSBmcm9tIFwiLi9RdW90ZVNsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLkhvbWVUYWIuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVRhYiA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmlvZ3JhcGh5OiBgXHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHlcclxuICAgICAgICAgICAgICAgIEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeSBCaW9ncmFwaHkgQmlvZ3JhcGh5IEJpb2dyYXBoeWBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGlkPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aW1nIGlkPVwiZGlzcGxheS1waWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9pLmltZ2ZsaXAuY29tLzU4cjlkai5qcGdcIiAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJiaW9ncmFwaHlcIj57eyBiaW9ncmFwaHkgfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwcm9qZWN0LXNsaWRlPlxyXG4gICAgICAgIDwvcHJvamVjdC1zbGlkZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInF1b3Rlcy1jb250YWluZXJcIj5cclxuICAgICAgICA8cXVvdGUtc2xpZGU+XHJcbiAgICAgICAgPC9xdW90ZS1zbGlkZT5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgUHJvamVjdFNsaWRlLFxyXG4gICAgICAgIFF1b3RlU2xpZGVcclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5Qcm9qZWN0U2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdFNsaWRlID0ge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXB0aW9uVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogMCxcclxuICAgICAgICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1nZmxpcC5jb20vNThyOWRqLmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LmZyZWRyb2dlcnNjZW50ZXIub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzExL2RhcmstZ3JleS1iYWNrZ3JvdW5kLUZSQy1HcmV5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDMyNjkyNDYuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb25gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY29vbGJhY2tncm91bmRzLmlvL2ltYWdlcy9iYWNrZ3JvdW5kcy93aGl0ZS9wdXJlLXdoaXRlLWJhY2tncm91bmQtODVhMmE3ZmQuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBgQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbiBDYXB0aW9uIENhcHRpb24gQ2FwdGlvbmBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50SW1hZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudENhcHRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudEluZGV4ICUgdGhpcy5wcm9qZWN0cy5sZW5ndGhdLmNhcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVDYXB0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHRpb25WaXNpYmxlID0gIXRoaXMuY2FwdGlvblZpc2libGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0U2xpZGUsIDYwMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dFNsaWRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRTbGlkZSgpO1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aW1nIGlkPVwicHJvamVjdC1pbWFnZVwiIHYtYmluZDpzcmM9XCJjdXJyZW50SW1hZ2VcIiBAY2xpY2s9XCJ0b2dnbGVDYXB0aW9uXCIgLz5cclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0LWNhcHRpb25cIiB2LWlmPVwiY2FwdGlvblZpc2libGVcIj5cclxuICAgICAgICB7eyBjdXJyZW50Q2FwdGlvbiB9fVxyXG4gICAgPC9kaXY+YFxyXG59OyIsImltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuL3N0eWxlLlF1b3RlU2xpZGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUXVvdGVTbGlkZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwLFxyXG4gICAgICAgICAgICBxdW90ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFF1b3RlIDEgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgMScgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUXVvdGUgMiBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciAyJyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBRdW90ZSAzIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDMnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFF1b3RlIDQgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGUgUXVvdGVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJ1NwZWFrZXIgNCcgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUXVvdGUgNSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZSBRdW90ZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnU3BlYWtlciA1JyBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBRdW90ZSA2IFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlIFF1b3RlYCxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICdTcGVha2VyIDYnIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjdXJyZW50VGV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS50ZXh0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudEF1dGhvcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVvdGVzW3RoaXMuY3VycmVudEluZGV4XS5hdXRob3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByYW5kb21RdW90ZSgpIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4O1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDAgKyAxKSArIDApO1xyXG4gICAgICAgICAgICB9IHdoaWxlKHJhbmRvbUluZGV4ID09IHRoaXMuY3VycmVudEluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb21RdW90ZSgpO1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdW90ZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIHt7IGN1cnJlbnRUZXh0IH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInF1b3RlLWF1dGhvclwiPlxyXG4gICAgICAgICAgICB7eyBjdXJyZW50QXV0aG9yIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJyYW5kb21RdW90ZVwiPlxyXG4gICAgICAgICAgICBDbGlja1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YFxyXG59OyIsImV4cG9ydCBjb25zdCBQcm9qZWN0c1RhYiA9IHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHByb2plY3RzXHJcbiAgICA8L2Rpdj5gXHJcbn07IiwiZXhwb3J0IGNvbnN0IFF1b3Rlc1RhYiA9IHtcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHF1b3Rlc1xyXG4gICAgPC9kaXY+YFxyXG59OyIsImV4cG9ydCBjb25zdCBTcG9ydHNUYWIgPSB7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICBzcG9ydHNcclxuICAgIDwvZGl2PmBcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEN1c3RvbUhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tSGVhZGVyL0N1c3RvbUhlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBNYWluVGVtcGxhdGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4vTWFpblRlbXBsYXRlLmpzXCI7XHJcbmltcG9ydCB7IEN1c3RvbUZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tRm9vdGVyL0N1c3RvbUZvb3Rlci5qc1wiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFBhZ2VUZW1wbGF0ZSA9IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudFRhYjogJ0hvbWUnLFxyXG4gICAgICAgICAgICB0YWJzOiBbJ0hvbWUnLCAnUHJvamVjdHMnLCAnUXVvdGVzJywgJ1Nwb3J0cyddLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGlua2VkSW4nLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvcmRhbi1jYXN0cm8tMTI4YmFiMWI0LycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0dpdGh1YicsIGFkZHJlc3M6ICdodHRwczovL2dpdGh1Yi5jb20vam9yZGFuamM2JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmFjZWJvb2snLCBhZGRyZXNzOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pvcmRhbi5jYXN0cm8uNzM3JyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRW1haWwnLCBhZGRyZXNzOiAnbWFpbHRvOmpvcmRhbmpjYXN0cm84QGdtYWlsLmNvbScgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGN1cnJlbnRUYWJDb21wb25lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUYWIudG9Mb3dlckNhc2UoKSArICctdGFiJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uU3dpdGNoVGFiKHRhYikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGN1c3RvbS1oZWFkZXIgaWQ9XCJ0ZXN0XCIgdi1iaW5kOnRhYnM9XCJ0YWJzXCIgQHN3aXRjaC10YWI9XCJvblN3aXRjaFRhYlwiPlxyXG4gICAgICAgIDwvY3VzdG9tLWhlYWRlcj5cclxuICAgICAgICA8bWFpbi10ZW1wbGF0ZSB2LWJpbmQ6Y3VycmVudFRhYkNvbXBvbmVudD1cImN1cnJlbnRUYWJDb21wb25lbnRcIj5cclxuICAgICAgICA8L21haW4tdGVtcGxhdGU+XHJcbiAgICAgICAgPGN1c3RvbS1mb290ZXIgdi1iaW5kOmxpbmtzPVwibGlua3NcIj5cclxuICAgICAgICA8L2N1c3RvbS1mb290ZXI+YCxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBDdXN0b21IZWFkZXIsXHJcbiAgICAgICAgTWFpblRlbXBsYXRlLFxyXG4gICAgICAgIEN1c3RvbUZvb3RlclxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gVnVlLmNyZWF0ZUFwcChQYWdlVGVtcGxhdGUpO1xyXG5hcHAubW91bnQoXCIjcGFnZVwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=