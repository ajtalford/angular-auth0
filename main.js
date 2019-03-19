(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"], {

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
      /*!**********************************************************!*\
        !*** ./src/$$_lazy_route_resource lazy namespace object ***!
        \**********************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

        /***/
      }),

    /***/
    "./src/app/app.component.css":
      /*!***********************************!*\
        !*** ./src/app/app.component.css ***!
        \***********************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n  }\n  \n  mat-sidenav {\n    width: 250px;\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n  \n  a:hover,\n  a:active {\n    color: lightgray;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n  }\n  \n  .icon {\n    display: inline-block;\n    height: 30px;\n    margin: 0 auto;\n    padding-right: 5px;\n    text-align: center;\n    vertical-align: middle;\n    width: 15%;\n  }\n  \n  .label {\n    display: inline-block;\n    line-height: 30px;\n    margin: 0;\n    width: 85%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBOztJQUVFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgbWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICBcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgYTpob3ZlcixcbiAgYTphY3RpdmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiAgXG4gIC5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogODUlO1xuICB9Il19 */"

        /***/
      }),

    /***/
    "./src/app/app.component.html":
      /*!************************************!*\
        !*** ./src/app/app.component.html ***!
        \************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "\n<mat-sidenav-container>\n  <mat-sidenav  #sidenav role=\"navigation\">\n   <mat-nav-list>\n    <a mat-list-item \n        *ngIf=\"!auth.isAuthenticated()\"\n        (click)=\"auth.login()\">\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">Login</span>\n    </a>\n    <a mat-list-item\n        *ngIf=\"auth.isAuthenticated()\"\n        routerLink=\"/\">\n      <mat-icon class=\"icon\">home</mat-icon>  \n        <span class=\"label\">Home</span>\n    </a>\n    <a mat-list-item\n      routerLink=\"/dashboard\">\n      <mat-icon class=\"icon\">dashboard</mat-icon>  \n      <span class=\"label\">Dashboard</span>\n    </a>\n    <a  mat-list-item \n      *ngIf=\"auth.isAuthenticated()\"\n      (click)=\"auth.logout()\" type=\"button\">\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">LogOut</span>\n    </a>  \n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n     <div fxHide.gt-xs>\n       <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n     <div>\n       <a routerLink=\"/\">\n          Material Blog\n       </a>\n     </div>\n     <div fxFlex fxLayout fxLayoutAlign=\"flex-end\"  fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n            <li>\n                <a\n                  *ngIf=\"!auth.isAuthenticated()\"\n                  (click)=\"auth.login()\">\n                  <mat-icon class=\"icon\">input</mat-icon>\n                  <span  class=\"label\">Login</span>\n                 </a>\n            </li>\n            <li>\n              <a\n                *ngIf=\"auth.isAuthenticated()\"\n                routerLink=\"/\">\n                  <mat-icon class=\"icon\">home</mat-icon>\n                  <span class=\"label\">Home</span>\n              </a>\n            </li>\n            <li>\n                <a\n                  routerLink=\"/dashboard\">\n                    <mat-icon class=\"icon\">dashboard</mat-icon>\n                    <span class=\"label\">Dashboard</span>\n                </a>\n              </li>\n            <li>\n                <a\n                *ngIf=\"auth.isAuthenticated()\"\n                (click)=\"auth.logout()\" type=\"button\"\n                >\n                  <mat-icon class=\"icon\">input</mat-icon>\n                  <span class=\"label\">LogOut</span>\n                 </a>\n            </li>\n        </ul>\n     </div>\n    </mat-toolbar>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

        /***/
      }),

    /***/
    "./src/app/app.component.ts":
      /*!**********************************!*\
        !*** ./src/app/app.component.ts ***!
        \**********************************/
      /*! exports provided: AppComponent */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
          return AppComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./auth.service */ "./src/app/auth.service.ts");



        var AppComponent = /** @class */ (function () {
          function AppComponent(auth) {
            this.auth = auth;
            auth.handleAuthentication();
          }
          AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: 'app-root',
              template: __webpack_require__( /*! ./app.component.html */ "./src/app/app.component.html"),
              styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
          ], AppComponent);
          return AppComponent;
        }());



        /***/
      }),

    /***/
    "./src/app/app.module.ts":
      /*!*******************************!*\
        !*** ./src/app/app.module.ts ***!
        \*******************************/
      /*! exports provided: AppModule */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
          return AppModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
        /* harmony import */
        var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./material.module */ "./src/app/material.module.ts");
        /* harmony import */
        var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
        /* harmony import */
        var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
        /* harmony import */
        var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
        /* harmony import */
        var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./app.routes */ "./src/app/app.routes.ts");
        /* harmony import */
        var _data_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./data/data.service */ "./src/app/data/data.service.ts");
        /* harmony import */
        var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./auth.service */ "./src/app/auth.service.ts");
        /* harmony import */
        var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");














        var AppModule = /** @class */ (function () {
          function AppModule() {}
          AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PostDialogComponent"]
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_9__["AppRouters"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
              ],
              providers: [_data_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
              bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
              entryComponents: [
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_12__["PostDialogComponent"]
              ],
            })
          ], AppModule);
          return AppModule;
        }());



        /***/
      }),

    /***/
    "./src/app/app.routes.ts":
      /*!*******************************!*\
        !*** ./src/app/app.routes.ts ***!
        \*******************************/
      /*! exports provided: AppRouters */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRouters", function () {
          return AppRouters;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
        /* harmony import */
        var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





        var routes = [{
            path: '',
            component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
          },
          {
            path: 'dashboard',
            component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
          }
        ];
        var AppRouters = /** @class */ (function () {
          function AppRouters() {}
          AppRouters = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            })
          ], AppRouters);
          return AppRouters;
        }());



        /***/
      }),

    /***/
    "./src/app/auth.service.ts":
      /*!*********************************!*\
        !*** ./src/app/auth.service.ts ***!
        \*********************************/
      /*! exports provided: AuthService */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AuthService", function () {
          return AuthService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
        /* harmony import */
        var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");




        // why do you need defining window as any?
        // check this: https://github.com/aws/aws-amplify/issues/678#issuecomment-389106098
        window.global = window;
        var AuthService = /** @class */ (function () {
          function AuthService(router) {
            this.router = router;
            this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
              clientID: 'dua7sHNhlu29393PeCrEjKuF14Hq3OYt',
              domain: 'angularauth1.auth0.com',
              responseType: 'token',
              redirectUri: 'https://angular1-d2553.firebaseapp.com/dashboard',
              scope: 'openid'
            });
          }
          AuthService.prototype.login = function () {
            this.auth0.authorize();
          };
          AuthService.prototype.handleAuthentication = function () {
            var _this = this;
            this.auth0.parseHash(function (err, authResult) {
              if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this.accessToken = authResult.accessToken;
                _this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
                _this.router.navigate(['/dashboard']);
              } else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
              }
            });
          };
          AuthService.prototype.logout = function () {
            // Remove tokens and expiry time from localStorage
            this.accessToken = null;
            this.expiresAt = null;
            // Go back to the home route
            this.router.navigate(['/']);
          };
          AuthService.prototype.isAuthenticated = function () {
            // Check whether the current time is past the
            // Access Token's expiry time
            return new Date().getTime() < this.expiresAt;
          };
          AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
          ], AuthService);
          return AuthService;
        }());



        /***/
      }),

    /***/
    "./src/app/dashboard/dashboard.component.css":
      /*!***************************************************!*\
        !*** ./src/app/dashboard/dashboard.component.css ***!
        \***************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = ".card {\n    min-width: 80%;\n  }\n  \n  .example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  a {\n    cursor: pointer;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBtaW4td2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBcbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4iXX0= */"

        /***/
      }),

    /***/
    "./src/app/dashboard/dashboard.component.html":
      /*!****************************************************!*\
        !*** ./src/app/dashboard/dashboard.component.html ***!
        \****************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "<div>\n  <br>\n    <div class=\"container\">\n        <div class=\"container\">\n          <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\"  fxLayoutAlign=\"space-around center\" class=\"content\">\n              <!-- <div class=\"blocks\">\n                  <button button=\"submit\" mat-raised-button color=\"primary\">\n                      <mat-icon>add</mat-icon> Add Post\n                  </button>\n              </div> -->\n              <div class=\"blocks\" *ngIf=\"auth.isAuthenticated()\">\n                <button button=\"submit\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n                  <mat-icon>add</mat-icon> Add Post\n                </button>\n              </div>\n              <div class=\"blocks\">\n                <a button mat-raised-button color=\"primary\" (click)=\"auth.login()\" *ngIf=\"!auth.isAuthenticated()\">\n                  <mat-icon>input</mat-icon>Login to Add Post\n                </a>\n              </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"container\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\n        <mat-card class=\"card\" >\n          <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n            <h3>Recent Posts</h3>\n          </mat-card-title>\n          <mat-card-content>\n              <div class=\"example-container mat-elevation-z8\">\n                  <mat-table #table [dataSource]=\"dataSource\">\n                  <ng-container matColumnDef=\"date_posted\">\n                    <mat-header-cell *matHeaderCellDef> Date Posted </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.date_posted  | date: 'd/M/y'}} </mat-cell>\n                  </ng-container>\n                    <ng-container matColumnDef=\"title\">\n                      <mat-header-cell *matHeaderCellDef> Title </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"category\">\n                      <mat-header-cell *matHeaderCellDef> Category </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.category}} </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"delete\">\n                      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\">\n                        <!-- <a\n                            type=\"button\">\n                          <mat-icon class=\"icon\">delete</mat-icon>\n                        </a>  -->\n                        <a (click)=\"deletePost(element.position)\" type=\"button\">\n                          <mat-icon class=\"icon\">delete</mat-icon>\n                        </a>\n                      </mat-cell>\n                    </ng-container>   \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n                </div> \n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>"

        /***/
      }),

    /***/
    "./src/app/dashboard/dashboard.component.ts":
      /*!**************************************************!*\
        !*** ./src/app/dashboard/dashboard.component.ts ***!
        \**************************************************/
      /*! exports provided: DashboardComponent, PostDataSource */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
          return DashboardComponent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PostDataSource", function () {
          return PostDataSource;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../data/data.service */ "./src/app/data/data.service.ts");
        /* harmony import */
        var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
        /* harmony import */
        var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../auth.service */ "./src/app/auth.service.ts");
        /* harmony import */
        var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







        var DashboardComponent = /** @class */ (function () {
          function DashboardComponent(auth, dialog, dataService) {
            this.auth = auth;
            this.dialog = dialog;
            this.dataService = dataService;
            this.displayedColumns = ['date_posted', 'title', 'category', 'delete'];
            this.dataSource = new PostDataSource(this.dataService);
          }
          DashboardComponent.prototype.deletePost = function (id) {
            if (this.auth.isAuthenticated()) {
              this.dataService.deletePost(id);
              this.dataSource = new PostDataSource(this.dataService);
            } else {
              alert('Login in Before');
            }
          };
          DashboardComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PostDialogComponent"], {
              width: '600px',
              data: 'Add Post'
            });
            dialogRef.componentInstance.event.subscribe(function (result) {
              _this.dataService.addPost(result.data);
              _this.dataSource = new PostDataSource(_this.dataService);
            });
          };
          DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: 'app-dashboard',
              template: __webpack_require__( /*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
              styles: [__webpack_require__( /*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
          ], DashboardComponent);
          return DashboardComponent;
        }());

        var PostDataSource = /** @class */ (function (_super) {
          tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PostDataSource, _super);

          function PostDataSource(dataService) {
            var _this = _super.call(this) || this;
            _this.dataService = dataService;
            return _this;
          }
          PostDataSource.prototype.connect = function () {
            return this.dataService.getData();
          };
          PostDataSource.prototype.disconnect = function () {};
          return PostDataSource;
        }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



        /***/
      }),

    /***/
    "./src/app/data/data.service.ts":
      /*!**************************************!*\
        !*** ./src/app/data/data.service.ts ***!
        \**************************************/
      /*! exports provided: DataService */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DataService", function () {
          return DataService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



        var DataService = /** @class */ (function () {
          function DataService() {
            this.ELEMENT_DATA = [{
                position: 0,
                title: 'Post One',
                category: 'Web Development',
                date_posted: new Date(),
                body: 'Body 1'
              },
              {
                position: 1,
                title: 'Post Two',
                category: 'Angular Development',
                date_posted: new Date(),
                body: 'Body 2'
              },
              {
                position: 2,
                title: 'Post Three',
                category: 'DevOps',
                date_posted: new Date(),
                body: 'Body 3'
              },
              {
                position: 3,
                title: 'Post Four',
                category: 'DevOps',
                date_posted: new Date(),
                body: 'Body 4'
              },
              {
                position: 4,
                title: 'Post Five',
                category: 'Angular Development',
                date_posted: new Date(),
                body: 'Body 5'
              },
              {
                position: 5,
                title: 'Post Six',
                category: 'React Development',
                date_posted: new Date(),
                body: 'Body 6'
              },
            ];
            this.categories = [{
                value: 'Web-Development',
                viewValue: 'Web Development'
              },
              {
                value: 'DevOps',
                viewValue: 'DevOps'
              },
              {
                value: 'Angular Development',
                viewValue: 'Angular Development'
              },
              {
                value: 'React Development',
                viewValue: 'React Development'
              }
            ];
          }
          DataService.prototype.getData = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.ELEMENT_DATA);
          };
          DataService.prototype.getCategories = function () {
            return this.categories;
          };
          DataService.prototype.addPost = function (data) {
            this.ELEMENT_DATA.push(data);
          };
          DataService.prototype.deletePost = function (index) {
            this.ELEMENT_DATA = this.ELEMENT_DATA.slice(0, index).concat(this.ELEMENT_DATA.slice(index + 1));
          };
          DataService.prototype.dataLength = function () {
            return this.ELEMENT_DATA.length;
          };
          DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
          ], DataService);
          return DataService;
        }());



        /***/
      }),

    /***/
    "./src/app/material.module.ts":
      /*!************************************!*\
        !*** ./src/app/material.module.ts ***!
        \************************************/
      /*! exports provided: MaterialModule */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
          return MaterialModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



        var MaterialModule = /** @class */ (function () {
          function MaterialModule() {}
          MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
              imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
              ],
              exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
              ]
            })
          ], MaterialModule);
          return MaterialModule;
        }());



        /***/
      }),

    /***/
    "./src/app/post-dialog/post-dialog.component.css":
      /*!*******************************************************!*\
        !*** ./src/app/post-dialog/post-dialog.component.css ***!
        \*******************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = ".example-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.example-form > * {\n    width: 100%;\n}\n\n.close{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kaWFsb2cvcG9zdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWRpYWxvZy9wb3N0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1mb3JtID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbG9zZXtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

        /***/
      }),

    /***/
    "./src/app/post-dialog/post-dialog.component.html":
      /*!********************************************************!*\
        !*** ./src/app/post-dialog/post-dialog.component.html ***!
        \********************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "<h1 mat-dialog-title>{{data}}</h1>\n<div mat-dialog-content>\n  <form class=\"example-form\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input matInput placeholder=\"Post Title\" type=\"text\" required [(ngModel)]=\"blogPost.title\" name=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Post Body\" required [(ngModel)]=\"blogPost.body\" name=\"body\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select matInput placeholder=\"Post Category\" required [(ngModel)]=\"blogPost.category\" name=\"category\">\n        <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.value\">\n          {{ cat.viewValue }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button class=\"close\" (click)=\"onNoClick()\" color=\"warn\">Cancel</button>\n</div>\n"

        /***/
      }),

    /***/
    "./src/app/post-dialog/post-dialog.component.ts":
      /*!******************************************************!*\
        !*** ./src/app/post-dialog/post-dialog.component.ts ***!
        \******************************************************/
      /*! exports provided: PostDialogComponent */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function () {
          return PostDialogComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
        /* harmony import */
        var _data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../data/data.service */ "./src/app/data/data.service.ts");




        var PostDialogComponent = /** @class */ (function () {
          function PostDialogComponent(dialogRef, data, dataService) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.dataService = dataService;
            this.blogPost = {
              title: '',
              body: '',
              category: '',
              position: 0,
              date_posted: new Date()
            };
            this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.categories = this.dataService.getCategories();
          }
          PostDialogComponent.prototype.onNoClick = function () {
            this.dialogRef.close();
          };
          PostDialogComponent.prototype.onSubmit = function () {
            this.blogPost.position = this.dataService.dataLength();
            this.event.emit({
              data: this.blogPost
            });
            this.dialogRef.close();
          };
          PostDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: 'app-post-dialog',
              template: __webpack_require__( /*! ./post-dialog.component.html */ "./src/app/post-dialog/post-dialog.component.html"),
              styles: [__webpack_require__( /*! ./post-dialog.component.css */ "./src/app/post-dialog/post-dialog.component.css")]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
          ], PostDialogComponent);
          return PostDialogComponent;
        }());



        /***/
      }),

    /***/
    "./src/app/welcome/welcome.component.css":
      /*!***********************************************!*\
        !*** ./src/app/welcome/welcome.component.css ***!
        \***********************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

        /***/
      }),

    /***/
    "./src/app/welcome/welcome.component.html":
      /*!************************************************!*\
        !*** ./src/app/welcome/welcome.component.html ***!
        \************************************************/
      /*! no static exports found */
      /***/
      (function (module, exports) {

        module.exports = "<div style=\"text-align:center\">\n  <h1>Angular Content Management System</h1>\n  <p>\n    This is a platform for technical writers to manage their blog post contents related to angular.\n    <br> Click on Login to get Started!!!\n  </p>\n</div>\n"

        /***/
      }),

    /***/
    "./src/app/welcome/welcome.component.ts":
      /*!**********************************************!*\
        !*** ./src/app/welcome/welcome.component.ts ***!
        \**********************************************/
      /*! exports provided: WelcomeComponent */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
          return WelcomeComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


        var WelcomeComponent = /** @class */ (function () {
          function WelcomeComponent() {}
          WelcomeComponent.prototype.ngOnInit = function () {};
          WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: 'app-welcome',
              template: __webpack_require__( /*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
              styles: [__webpack_require__( /*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
          ], WelcomeComponent);
          return WelcomeComponent;
        }());



        /***/
      }),

    /***/
    "./src/environments/environment.ts":
      /*!*****************************************!*\
        !*** ./src/environments/environment.ts ***!
        \*****************************************/
      /*! exports provided: environment */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
          return environment;
        });
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        var environment = {
          production: false
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


        /***/
      }),

    /***/
    "./src/main.ts":
      /*!*********************!*\
        !*** ./src/main.ts ***!
        \*********************/
      /*! no exports provided */
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! hammerjs */ "./node_modules/hammerjs/hammer.js");
        /* harmony import */
        var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
        /* harmony import */
        var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");





        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
          .catch(function (err) {
            return console.error(err);
          });


        /***/
      }),

    /***/
    0:
      /*!***************************!*\
        !*** multi ./src/main.ts ***!
        \***************************/
      /*! no static exports found */
      /***/
      (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! /Users/a1/Desktop/Firebase/angularBlogAuth0/src/main.ts */ "./src/main.ts");


        /***/
      })

  },
  [
    [0, "runtime", "vendor"]
  ]
]);
//# sourceMappingURL=main.js.map
