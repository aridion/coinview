webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/app.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/app.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"/* general */\\nbody {\\n  font-family: Helvetica, sans-serif;\\n  margin: 0;\\n  background-color: #f7fffd;\\n  color: #71788a;\\n}\\nh1 {\\n}\\n\\np {\\n  font-size: 1em;\\n  line-height: 1.5;\\n}\\n\\n/* main layout & flexbox */\\n#layout-parent {\\n  margin: 0;\\n  height: 100vh;\\n}\\n\\nmain {\\n  display: inline-block;\\n  padding: 50% 7% 0 7%;\\n}\\n\\n@media (min-width: 768px) {\\n  #layout-parent {\\n    margin: 0;\\n    height: 100vh;\\n  }\\n\\n  main {\\n    height: 100%;\\n    padding: 0;\\n    margin: 0;\\n    display: -moz-box;\\n    display: -webkit-flex;\\n    display: flex;\\n    -webkit-align-items: center;\\n       -moz-box-align: center;\\n            align-items: center;\\n    -webkit-justify-content: center;\\n       -moz-box-pack: center;\\n            justify-content: center;\\n  }\\n\\n  main > * {\\n    width: 30%;\\n    margin: 2%;\\n  }\\n\\n  article section > * {\\n    display: inline-block;\\n  }\\n\\n  select {\\n    margin-left: 5%;\\n  }\\n}\\n\\n/* menu */\\nnav {\\n  background-color: #92b3a8;\\n  padding: 1% 0 1% 0;\\n  position: absolute;\\n  width: 100vw;\\n}\\nul {\\n  padding: 0;\\n}\\n\\nul li {\\n  display: inline;\\n  text-decoration: none;\\n  margin: 0 0 0 5%;\\n}\\n\\nul li a {\\n  font-size: 1.1em;\\n  text-decoration: none;\\n  font-weight: 700;\\n  color: #fff5eb;\\n  border-bottom: 2px solid #fff5eb;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/aron/Documents/code_training/coinview/pages/app.css\"],\"names\":[],\"mappings\":\"AAAA,YAAY;AACZ;EACE,kCAAkC;EAClC,SAAS;EACT,yBAAyB;EACzB,cAAc;AAChB;AACA;AACA;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA,0BAA0B;AAC1B;EACE,SAAS;EACT,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE;IACE,SAAS;IACT,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,SAAS;IAET,iBAAiB;IAEjB,qBAAqB;IACrB,aAAa;IACb,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,+BAAuB;OAAvB,qBAAuB;YAAvB,uBAAuB;EACzB;;EAEA;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA,SAAS;AACT;EACE,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;EAChB,cAAc;EACd,gCAAgC;AAClC\",\"file\":\"app.css\",\"sourcesContent\":[\"/* general */\\nbody {\\n  font-family: Helvetica, sans-serif;\\n  margin: 0;\\n  background-color: #f7fffd;\\n  color: #71788a;\\n}\\nh1 {\\n}\\n\\np {\\n  font-size: 1em;\\n  line-height: 1.5;\\n}\\n\\n/* main layout & flexbox */\\n#layout-parent {\\n  margin: 0;\\n  height: 100vh;\\n}\\n\\nmain {\\n  display: inline-block;\\n  padding: 50% 7% 0 7%;\\n}\\n\\n@media (min-width: 768px) {\\n  #layout-parent {\\n    margin: 0;\\n    height: 100vh;\\n  }\\n\\n  main {\\n    height: 100%;\\n    padding: 0;\\n    margin: 0;\\n    display: -webkit-box;\\n    display: -moz-box;\\n    display: -ms-flexbox;\\n    display: -webkit-flex;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  main > * {\\n    width: 30%;\\n    margin: 2%;\\n  }\\n\\n  article section > * {\\n    display: inline-block;\\n  }\\n\\n  select {\\n    margin-left: 5%;\\n  }\\n}\\n\\n/* menu */\\nnav {\\n  background-color: #92b3a8;\\n  padding: 1% 0 1% 0;\\n  position: absolute;\\n  width: 100vw;\\n}\\nul {\\n  padding: 0;\\n}\\n\\nul li {\\n  display: inline;\\n  text-decoration: none;\\n  margin: 0 0 0 5%;\\n}\\n\\nul li a {\\n  font-size: 1.1em;\\n  text-decoration: none;\\n  font-weight: 700;\\n  color: #fff5eb;\\n  border-bottom: 2px solid #fff5eb;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmNzcz9kNTNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLHVDQUF1QyxjQUFjLDhCQUE4QixtQkFBbUIsR0FBRyxNQUFNLEdBQUcsT0FBTyxtQkFBbUIscUJBQXFCLEdBQUcsaURBQWlELGNBQWMsa0JBQWtCLEdBQUcsVUFBVSwwQkFBMEIseUJBQXlCLEdBQUcsK0JBQStCLG9CQUFvQixnQkFBZ0Isb0JBQW9CLEtBQUssWUFBWSxtQkFBbUIsaUJBQWlCLGdCQUFnQix3QkFBd0IsNEJBQTRCLG9CQUFvQixrQ0FBa0MsZ0NBQWdDLGtDQUFrQyxzQ0FBc0MsK0JBQStCLHNDQUFzQyxLQUFLLGdCQUFnQixpQkFBaUIsaUJBQWlCLEtBQUssMkJBQTJCLDRCQUE0QixLQUFLLGNBQWMsc0JBQXNCLEtBQUssR0FBRyxxQkFBcUIsOEJBQThCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsTUFBTSxlQUFlLEdBQUcsV0FBVyxvQkFBb0IsMEJBQTBCLHFCQUFxQixHQUFHLGFBQWEscUJBQXFCLDBCQUEwQixxQkFBcUIsbUJBQW1CLHFDQUFxQyxHQUFHLFNBQVMsc0hBQXNILEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGdFQUFnRSx1Q0FBdUMsY0FBYyw4QkFBOEIsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLE9BQU8sbUJBQW1CLHFCQUFxQixHQUFHLGlEQUFpRCxjQUFjLGtCQUFrQixHQUFHLFVBQVUsMEJBQTBCLHlCQUF5QixHQUFHLCtCQUErQixvQkFBb0IsZ0JBQWdCLG9CQUFvQixLQUFLLFlBQVksbUJBQW1CLGlCQUFpQixnQkFBZ0IsMkJBQTJCLHdCQUF3QiwyQkFBMkIsNEJBQTRCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEtBQUssZ0JBQWdCLGlCQUFpQixpQkFBaUIsS0FBSywyQkFBMkIsNEJBQTRCLEtBQUssY0FBYyxzQkFBc0IsS0FBSyxHQUFHLHFCQUFxQiw4QkFBOEIsdUJBQXVCLHVCQUF1QixpQkFBaUIsR0FBRyxNQUFNLGVBQWUsR0FBRyxXQUFXLG9CQUFvQiwwQkFBMEIscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsMEJBQTBCLHFCQUFxQixtQkFBbUIscUNBQXFDLEdBQUcsS0FBSztBQUN2eEc7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vcGFnZXMvYXBwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGdlbmVyYWwgKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmZmZkO1xcbiAgY29sb3I6ICM3MTc4OGE7XFxufVxcbmgxIHtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIG1haW4gbGF5b3V0ICYgZmxleGJveCAqL1xcbiNsYXlvdXQtcGFyZW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogNTAlIDclIDAgNyU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgI2xheW91dC1wYXJlbnQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBtYWluID4gKiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbjogMiU7XFxuICB9XFxuXFxuICBhcnRpY2xlIHNlY3Rpb24gPiAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbiAgc2VsZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgfVxcbn1cXG5cXG4vKiBtZW51ICovXFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmIzYTg7XFxuICBwYWRkaW5nOiAxJSAwIDElIDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMCAwIDAgNSU7XFxufVxcblxcbnVsIGxpIGEge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjVlYjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmNWViO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYXJvbi9Eb2N1bWVudHMvY29kZV90cmFpbmluZy9jb2ludmlldy9wYWdlcy9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtFQUNFLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUVULGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDJCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLCtCQUF1QjtPQUF2QixxQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztBQUNsQ1wiLFwiZmlsZVwiOlwiYXBwLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBnZW5lcmFsICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmZmZDtcXG4gIGNvbG9yOiAjNzE3ODhhO1xcbn1cXG5oMSB7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBtYWluIGxheW91dCAmIGZsZXhib3ggKi9cXG4jbGF5b3V0LXBhcmVudCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDUwJSA3JSAwIDclO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICNsYXlvdXQtcGFyZW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgbWFpbiA+ICoge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW46IDIlO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSBzZWN0aW9uID4gKiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG5cXG4gIHNlbGVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIH1cXG59XFxuXFxuLyogbWVudSAqL1xcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiM2E4O1xcbiAgcGFkZGluZzogMSUgMCAxJSAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG51bCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDAgMCAwIDUlO1xcbn1cXG5cXG51bCBsaSBhIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICNmZmY1ZWI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjVlYjtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/app.css\n");

/***/ })

})