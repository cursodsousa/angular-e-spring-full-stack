function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clientes-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./template/template.module */
    "./src/app/template/template.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./clientes/clientes.module */
    "./src/app/clientes/clientes.module.ts");
    /* harmony import */


    var _clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./clientes.service */
    "./src/app/clientes.service.ts");
    /* harmony import */


    var _servico_prestado_servico_prestado_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./servico-prestado/servico-prestado.module */
    "./src/app/servico-prestado/servico-prestado.module.ts");
    /* harmony import */


    var _servico_prestado_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./servico-prestado.service */
    "./src/app/servico-prestado.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./token.interceptor */
    "./src/app/token.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ClientesService"], _servico_prestado_service__WEBPACK_IMPORTED_MODULE_11__["ServicoPrestadoService"], _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_6__["TemplateModule"], _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_8__["ClientesModule"], _servico_prestado_servico_prestado_module__WEBPACK_IMPORTED_MODULE_10__["ServicoPrestadoModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_6__["TemplateModule"], _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_8__["ClientesModule"], _servico_prestado_servico_prestado_module__WEBPACK_IMPORTED_MODULE_10__["ServicoPrestadoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_6__["TemplateModule"], _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_8__["ClientesModule"], _servico_prestado_servico_prestado_module__WEBPACK_IMPORTED_MODULE_10__["ServicoPrestadoModule"]],
          providers: [_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ClientesService"], _servico_prestado_service__WEBPACK_IMPORTED_MODULE_11__["ServicoPrestadoService"], _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var authenticated = this.authService.isAuthenticated();

          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURLBase + "/api/usuarios";
        this.tokenURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURLBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].obterTokenUrl;
        this.clientID = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientId;
        this.clientSecret = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientSecret;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
      }

      _createClass(AuthService, [{
        key: "obterToken",
        value: function obterToken() {
          var tokenString = localStorage.getItem('access_token');

          if (tokenString) {
            var token = JSON.parse(tokenString).access_token;
            return token;
          }

          return null;
        }
      }, {
        key: "encerrarSessao",
        value: function encerrarSessao() {
          localStorage.removeItem('access_token');
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.obterToken();

          if (token) {
            var is = this.jwtHelper.isTokenExpired(token);
            return !is;
          }

          return false;
        }
      }, {
        key: "getUsuarioLogado",
        value: function getUsuarioLogado() {
          var tokenString = localStorage.getItem('access_token');

          if (tokenString) {
            return JSON.parse(tokenString);
          }
        }
      }, {
        key: "salvar",
        value: function salvar(usuario) {
          return this.http.post(this.apiURL, usuario);
        }
      }, {
        key: "tentarLogar",
        value: function tentarLogar(username, password) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('username', username).set('password', password).set('grant_type', 'password');
          var headers = {
            'Authorization': 'Basic ' + btoa("".concat(this.clientID, ":").concat(this.clientSecret)),
            'Content-Type': 'application/x-www-form-urlencoded'
          };
          return this.http.post(this.tokenURL, params.toString(), {
            headers: headers
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clientes.service.ts":
  /*!*************************************!*\
    !*** ./src/app/clientes.service.ts ***!
    \*************************************/

  /*! exports provided: ClientesService */

  /***/
  function srcAppClientesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesService", function () {
      return ClientesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ClientesService = /*#__PURE__*/function () {
      function ClientesService(http) {
        _classCallCheck(this, ClientesService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURLBase + '/api/clientes';
      }

      _createClass(ClientesService, [{
        key: "salvar",
        value: function salvar(cliente) {
          return this.http.post("".concat(this.apiURL), cliente);
        }
      }, {
        key: "atualizar",
        value: function atualizar(cliente) {
          return this.http.put("".concat(this.apiURL, "/").concat(cliente.id), cliente);
        }
      }, {
        key: "getClientes",
        value: function getClientes() {
          return this.http.get(this.apiURL);
        }
      }, {
        key: "getClienteById",
        value: function getClienteById(id) {
          return this.http.get("".concat(this.apiURL, "/").concat(id));
        }
      }, {
        key: "deletar",
        value: function deletar(cliente) {
          return this.http["delete"]("".concat(this.apiURL, "/").concat(cliente.id));
        }
      }]);

      return ClientesService;
    }();

    ClientesService.ɵfac = function ClientesService_Factory(t) {
      return new (t || ClientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ClientesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientesService,
      factory: ClientesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clientes/cliente.ts":
  /*!*************************************!*\
    !*** ./src/app/clientes/cliente.ts ***!
    \*************************************/

  /*! exports provided: Cliente */

  /***/
  function srcAppClientesClienteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cliente", function () {
      return Cliente;
    });

    var Cliente = function Cliente() {
      _classCallCheck(this, Cliente);
    };
    /***/

  },

  /***/
  "./src/app/clientes/clientes-form/clientes-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/clientes/clientes-form/clientes-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ClientesFormComponent */

  /***/
  function srcAppClientesClientesFormClientesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesFormComponent", function () {
      return ClientesFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cliente */
    "./src/app/clientes/cliente.ts");
    /* harmony import */


    var _clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../clientes.service */
    "./src/app/clientes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientesFormComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cliente salvo/atualizado com sucesso! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientesFormComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var erro_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erro_r17, " ");
      }
    }

    function ClientesFormComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data Cadastro:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.cliente.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.cliente.dataCadastro);
      }
    }

    function ClientesFormComponent_button_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salvar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClientesFormComponent_button_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Atualizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ClientesFormComponent = /*#__PURE__*/function () {
      function ClientesFormComponent(service, router, activatedRoute) {
        _classCallCheck(this, ClientesFormComponent);

        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.success = false;
        this.cliente = new _cliente__WEBPACK_IMPORTED_MODULE_1__["Cliente"]();
      }

      _createClass(ClientesFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var params = this.activatedRoute.params;
          params.subscribe(function (urlParams) {
            _this.id = urlParams['id'];

            if (_this.id) {
              _this.service.getClienteById(_this.id).subscribe(function (response) {
                return _this.cliente = response;
              }, function (errorResponse) {
                return _this.cliente = new _cliente__WEBPACK_IMPORTED_MODULE_1__["Cliente"]();
              });
            }
          });
        }
      }, {
        key: "voltarParaListagem",
        value: function voltarParaListagem() {
          this.router.navigate(['/clientes/lista']);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          if (this.id) {
            this.service.atualizar(this.cliente).subscribe(function (response) {
              _this2.success = true;
              _this2.errors = null;
            }, function (errorResponse) {
              _this2.errors = ['Erro ao atualizar o cliente.'];
            });
          } else {
            this.service.salvar(this.cliente).subscribe(function (response) {
              _this2.success = true;
              _this2.errors = null;
              _this2.cliente = response;
            }, function (errorResponse) {
              _this2.success = false;
              _this2.errors = errorResponse.error.errors;
            });
          }
        }
      }]);

      return ClientesFormComponent;
    }();

    ClientesFormComponent.ɵfac = function ClientesFormComponent_Factory(t) {
      return new (t || ClientesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ClientesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientesFormComponent,
      selectors: [["app-clientes-form"]],
      decls: 31,
      vars: 8,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], [1, "container"], [3, "ngSubmit"], ["clienteForm", "ngForm"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "name", "nome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cpf", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"], [1, "fa", "fa-arrow-alt-circle-left"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "text", "name", "id", "disabled", "true", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "dataCadastro", "disabled", "true", 1, "form-control", 3, "ngModel"], ["type", "submit", 1, "btn", "btn-success"], [1, "fa", "fa-save"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-sync-alt"]],
      template: function ClientesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientesFormComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientesFormComponent_div_10_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientesFormComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientesFormComponent_div_12_Template, 11, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nome: *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientesFormComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.cliente.nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CPF: *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientesFormComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.cliente.cpf = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClientesFormComponent_button_26_Template, 3, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientesFormComponent_button_27_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesFormComponent_Template_button_click_28_listener() {
            return ctx.voltarParaListagem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cliente.id ? "Edi\xE7\xE3o" : "Cadastro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cliente.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente.cpf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cliente.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cliente.id);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLWZvcm0vY2xpZW50ZXMtZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clientes-form',
          templateUrl: './clientes-form.component.html',
          styleUrls: ['./clientes-form.component.css']
        }]
      }], function () {
        return [{
          type: _clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clientes/clientes-lista/clientes-lista.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/clientes/clientes-lista/clientes-lista.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ClientesListaComponent */

  /***/
  function srcAppClientesClientesListaClientesListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesListaComponent", function () {
      return ClientesListaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../clientes.service */
    "./src/app/clientes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientesListaComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.mensagemSucesso, " ");
      }
    }

    function ClientesListaComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.mensagemErro, " ");
      }
    }

    function ClientesListaComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesListaComponent_tr_31_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var cliente_r22 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.preparaDelecao(cliente_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cliente_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cliente_r22.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cliente_r22.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cliente_r22.cpf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cliente_r22.dataCadastro);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/clientes/form/", cliente_r22.id, "");
      }
    }

    function ClientesListaComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirma a dele\xE7\xE3o do(a) Cliente ", ctx_r21.clienteSelecionado.nome, "? ");
      }
    }

    var ClientesListaComponent = /*#__PURE__*/function () {
      function ClientesListaComponent(service, router) {
        _classCallCheck(this, ClientesListaComponent);

        this.service = service;
        this.router = router;
        this.clientes = [];
      }

      _createClass(ClientesListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.service.getClientes().subscribe(function (resposta) {
            return _this3.clientes = resposta;
          });
        }
      }, {
        key: "novoCadastro",
        value: function novoCadastro() {
          this.router.navigate(['/clientes/form']);
        }
      }, {
        key: "preparaDelecao",
        value: function preparaDelecao(cliente) {
          this.clienteSelecionado = cliente;
        }
      }, {
        key: "deletarCliente",
        value: function deletarCliente() {
          var _this4 = this;

          this.service.deletar(this.clienteSelecionado).subscribe(function (response) {
            _this4.mensagemSucesso = 'Cliente deletado com sucesso!';

            _this4.ngOnInit();
          }, function (erro) {
            return _this4.mensagemErro = 'Ocorreu um erro ao deletar o cliente.';
          });
        }
      }]);

      return ClientesListaComponent;
    }();

    ClientesListaComponent.ɵfac = function ClientesListaComponent_Factory(t) {
      return new (t || ClientesListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ClientesListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientesListaComponent,
      selectors: [["app-clientes-lista"]],
      decls: 44,
      vars: 4,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "col-md-2"], [1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-plus"], [1, "table", "table-condensed", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "modalDelecao", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], ["data-dismiss", "modal", 1, "btn", "btn-default"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-edit"], ["data-toggle", "modal", "data-target", "#modalDelecao", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-body"]],
      template: function ClientesListaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientesListaComponent_div_8_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientesListaComponent_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesListaComponent_Template_button_click_12_listener() {
            return ctx.novoCadastro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Novo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CPF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Data Cadastro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientesListaComponent_tr_31_Template, 14, 5, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Confirma\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ClientesListaComponent_div_38_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesListaComponent_Template_button_click_40_listener() {
            return ctx.deletarCliente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensagemSucesso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensagemErro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clienteSelecionado);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLWxpc3RhL2NsaWVudGVzLWxpc3RhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientesListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clientes-lista',
          templateUrl: './clientes-lista.component.html',
          styleUrls: ['./clientes-lista.component.css']
        }]
      }], function () {
        return [{
          type: _clientes_service__WEBPACK_IMPORTED_MODULE_1__["ClientesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clientes/clientes-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/clientes/clientes-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ClientesRoutingModule */

  /***/
  function srcAppClientesClientesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesRoutingModule", function () {
      return ClientesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./clientes-form/clientes-form.component */
    "./src/app/clientes/clientes-form/clientes-form.component.ts");
    /* harmony import */


    var _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clientes-lista/clientes-lista.component */
    "./src/app/clientes/clientes-lista/clientes-lista.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: 'clientes',
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      children: [{
        path: 'form',
        component: _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__["ClientesFormComponent"]
      }, {
        path: 'form/:id',
        component: _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__["ClientesFormComponent"]
      }, {
        path: 'lista',
        component: _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_3__["ClientesListaComponent"]
      }, {
        path: '',
        redirectTo: '/clientes/lista',
        pathMatch: 'full'
      }]
    }];

    var ClientesRoutingModule = function ClientesRoutingModule() {
      _classCallCheck(this, ClientesRoutingModule);
    };

    ClientesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientesRoutingModule
    });
    ClientesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientesRoutingModule_Factory(t) {
        return new (t || ClientesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clientes/clientes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/clientes/clientes.module.ts ***!
    \*********************************************/

  /*! exports provided: ClientesModule */

  /***/
  function srcAppClientesClientesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesModule", function () {
      return ClientesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clientes-routing.module */
    "./src/app/clientes/clientes-routing.module.ts");
    /* harmony import */


    var _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clientes-form/clientes-form.component */
    "./src/app/clientes/clientes-form/clientes-form.component.ts");
    /* harmony import */


    var _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clientes-lista/clientes-lista.component */
    "./src/app/clientes/clientes-lista/clientes-lista.component.ts");

    var ClientesModule = function ClientesModule() {
      _classCallCheck(this, ClientesModule);
    };

    ClientesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientesModule
    });
    ClientesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientesModule_Factory(t) {
        return new (t || ClientesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientesModule, {
        declarations: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientesFormComponent"], _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_5__["ClientesListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientesFormComponent"], _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_5__["ClientesListaComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientesFormComponent"], _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_5__["ClientesListaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClientesFormComponent"], _clientes_lista_clientes_lista_component__WEBPACK_IMPORTED_MODULE_5__["ClientesListaComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 0,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bem vindo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../template/navbar/navbar.component */
    "./src/app/template/navbar/navbar.component.ts");
    /* harmony import */


    var _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../template/sidebar/sidebar.component */
    "./src/app/template/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          (function ($) {
            "use strict"; // Add active state to sidbar nav links

            var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

            $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
              if (this.href === path) {
                $(this).addClass("active");
              }
            }); // Toggle the side navigation

            $("#sidebarToggle").on("click", function (e) {
              e.preventDefault();
              $("body").toggleClass("sb-sidenav-toggled");
            });
          })(jquery__WEBPACK_IMPORTED_MODULE_1___default.a);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 18,
      vars: 0,
      consts: [["id", "layoutSidenav"], ["id", "layoutSidenav_content"], [1, "container-fluid"], [1, "py-4", "bg-light", "mt-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "#"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Copyright \xA9 Meus Clientes 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \xB7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./usuario */
    "./src/app/login/usuario.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.mensagemSucesso, " ");
      }
    }

    function LoginComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var erro_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erro_r6, " ");
      }
    }

    function LoginComponent_button_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enviar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_26_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.cadastrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cadastrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_button_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_27_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.cancelaCadastro();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancelar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.authService.tentarLogar(this.username, this.password).subscribe(function (response) {
            var access_token = JSON.stringify(response);
            localStorage.setItem('access_token', access_token);

            _this5.router.navigate(['/home']);
          }, function (errorResponse) {
            _this5.errors = ['Usuário e/ou senha incorreto(s).'];
          });
        }
      }, {
        key: "preparaCadastrar",
        value: function preparaCadastrar(event) {
          event.preventDefault();
          this.cadastrando = true;
        }
      }, {
        key: "cancelaCadastro",
        value: function cancelaCadastro() {
          this.cadastrando = false;
        }
      }, {
        key: "cadastrar",
        value: function cadastrar() {
          var _this6 = this;

          var usuario = new _usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
          usuario.username = this.username;
          usuario.password = this.password;
          this.authService.salvar(usuario).subscribe(function (response) {
            _this6.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
            _this6.cadastrando = false;
            _this6.username = '';
            _this6.password = '';
            _this6.errors = [];
          }, function (errorResponse) {
            _this6.mensagemSucesso = null;
            _this6.errors = errorResponse.error.errors;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 32,
      vars: 8,
      consts: [[1, "bg-primary"], ["id", "layoutAuthentication"], ["id", "layoutAuthentication_content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "shadow-lg", "border-0", "rounded-lg", "mt-5"], [1, "card-header"], [1, "text-center", "font-weight-light", "my-4"], [1, "card-body"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngFor", "ngForOf"], [3, "submit"], ["loginForm", "ngForm"], [1, "form-group"], [1, "small", "mb-1"], ["type", "text", "name", "username", "autocomplete", "off", "placeholder", "Digite seu login", 1, "form-control", "py-4", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Digite sua Senha", 1, "form-control", "py-4", 3, "ngModel", "ngModelChange"], [1, "form-group", "align-items-center", "justify-content-between", "mt-4", "mb-0"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], [1, "card-footer", "text-center"], [1, "small"], ["href", "#", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_14_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_button_25_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_button_26_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_button_27_Template, 2, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener($event) {
            return ctx.preparaCadastrar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " N\xE3o possui Usu\xE1rio? Cadastre-se! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cadastrando ? "Cadastro de Novo Usu\xE1rio" : "Entrar", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensagemSucesso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cadastrando);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cadastrando);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cadastrando);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/usuario.ts":
  /*!**********************************!*\
    !*** ./src/app/login/usuario.ts ***!
    \**********************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppLoginUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = function Usuario() {
      _classCallCheck(this, Usuario);
    };
    /***/

  },

  /***/
  "./src/app/servico-prestado.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/servico-prestado.service.ts ***!
    \*********************************************/

  /*! exports provided: ServicoPrestadoService */

  /***/
  function srcAppServicoPrestadoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestadoService", function () {
      return ServicoPrestadoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var ServicoPrestadoService = /*#__PURE__*/function () {
      function ServicoPrestadoService(http) {
        _classCallCheck(this, ServicoPrestadoService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURLBase + "/api/servicos-prestados";
      }

      _createClass(ServicoPrestadoService, [{
        key: "salvar",
        value: function salvar(servicoPrestado) {
          return this.http.post(this.apiURL, servicoPrestado);
        }
      }, {
        key: "buscar",
        value: function buscar(nome, mes) {
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("nome", nome).set("mes", mes ? mes.toString() : '');
          var url = this.apiURL + "?" + httpParams.toString();
          return this.http.get(url);
        }
      }]);

      return ServicoPrestadoService;
    }();

    ServicoPrestadoService.ɵfac = function ServicoPrestadoService_Factory(t) {
      return new (t || ServicoPrestadoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ServicoPrestadoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServicoPrestadoService,
      factory: ServicoPrestadoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicoPrestadoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servico-prestado/servico-prestado-form/servico-prestado-form.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/servico-prestado/servico-prestado-form/servico-prestado-form.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ServicoPrestadoFormComponent */

  /***/
  function srcAppServicoPrestadoServicoPrestadoFormServicoPrestadoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestadoFormComponent", function () {
      return ServicoPrestadoFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicoPrestado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../servicoPrestado */
    "./src/app/servico-prestado/servicoPrestado.ts");
    /* harmony import */


    var _clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../clientes.service */
    "./src/app/clientes.service.ts");
    /* harmony import */


    var _servico_prestado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servico-prestado.service */
    "./src/app/servico-prestado.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ServicoPrestadoFormComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Servi\xE7o Prestado salvo com sucesso! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ServicoPrestadoFormComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var erro_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", erro_r29, " ");
      }
    }

    function ServicoPrestadoFormComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cliente_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", cliente_r30.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cliente_r30.nome, " ");
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var ServicoPrestadoFormComponent = /*#__PURE__*/function () {
      function ServicoPrestadoFormComponent(clienteService, service) {
        _classCallCheck(this, ServicoPrestadoFormComponent);

        this.clienteService = clienteService;
        this.service = service;
        this.clientes = [];
        this.success = false;
        this.servico = new _servicoPrestado__WEBPACK_IMPORTED_MODULE_1__["ServicoPrestado"]();
      }

      _createClass(ServicoPrestadoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.clienteService.getClientes().subscribe(function (response) {
            return _this7.clientes = response;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.service.salvar(this.servico).subscribe(function (response) {
            _this8.success = true;
            _this8.errors = null;
            _this8.servico = new _servicoPrestado__WEBPACK_IMPORTED_MODULE_1__["ServicoPrestado"]();
          }, function (errorResponse) {
            _this8.success = false;
            _this8.errors = errorResponse.error.errors;
          });
        }
      }]);

      return ServicoPrestadoFormComponent;
    }();

    ServicoPrestadoFormComponent.ɵfac = function ServicoPrestadoFormComponent_Factory(t) {
      return new (t || ServicoPrestadoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_prestado_service__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoService"]));
    };

    ServicoPrestadoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicoPrestadoFormComponent,
      selectors: [["app-servico-prestado-form"]],
      decls: 46,
      vars: 9,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrum-bitem", "active"], [1, "container"], [3, "submit"], ["form", "ngForm"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], [1, "form-group"], [1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "descricao", "id", "inputDescricao", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["type", "text", "name", "data", "id", "inputData", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "preco", "id", "inputPreco", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], ["type", "submit", 1, "btn", "btn-success"], [1, "fa", "fa-save"], ["type", "button", "routerLink", "/servicos-prestados/lista", 1, "btn", "btn-danger", "ml-1"], [1, "fa", "fa-arrow-alt-circle-left"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], [3, "ngValue"]],
      template: function ServicoPrestadoFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Servi\xE7o Prestado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ServicoPrestadoFormComponent_Template_form_submit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServicoPrestadoFormComponent_div_10_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServicoPrestadoFormComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cliente: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoFormComponent_Template_select_ngModelChange_17_listener($event) {
            return ctx.servico.idCliente = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Selecione...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ServicoPrestadoFormComponent_option_20_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Descri\xE7\xE3o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoFormComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.servico.descricao = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Data:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoFormComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.servico.data = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pre\xE7o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoFormComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.servico.preco = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("ngModel", ctx.servico.idCliente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.servico.descricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.servico.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.servico.preco);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY28tcHJlc3RhZG8vc2Vydmljby1wcmVzdGFkby1mb3JtL3NlcnZpY28tcHJlc3RhZG8tZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicoPrestadoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-servico-prestado-form',
          templateUrl: './servico-prestado-form.component.html',
          styleUrls: ['./servico-prestado-form.component.css']
        }]
      }], function () {
        return [{
          type: _clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"]
        }, {
          type: _servico_prestado_service__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servico-prestado/servico-prestado-lista/servico-prestado-lista.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/servico-prestado/servico-prestado-lista/servico-prestado-lista.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ServicoPrestadoListaComponent */

  /***/
  function srcAppServicoPrestadoServicoPrestadoListaServicoPrestadoListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestadoListaComponent", function () {
      return ServicoPrestadoListaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servico_prestado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servico-prestado.service */
    "./src/app/servico-prestado.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ServicoPrestadoListaComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mes_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mes_r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mes_r35, " ");
      }
    }

    function ServicoPrestadoListaComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.message, " ");
      }
    }

    function ServicoPrestadoListaComponent_tr_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r36.cliente.nome, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r36.descricao, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r36.valor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r36.data, " ");
      }
    }

    var ServicoPrestadoListaComponent = /*#__PURE__*/function () {
      function ServicoPrestadoListaComponent(service) {
        _classCallCheck(this, ServicoPrestadoListaComponent);

        this.service = service;
        this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      }

      _createClass(ServicoPrestadoListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "consultar",
        value: function consultar() {
          var _this9 = this;

          this.service.buscar(this.nome, this.mes).subscribe(function (response) {
            _this9.lista = response;

            if (_this9.lista.length <= 0) {
              _this9.message = "Nenhum Registro encontrado.";
            } else {
              _this9.message = null;
            }
          });
        }
      }]);

      return ServicoPrestadoListaComponent;
    }();

    ServicoPrestadoListaComponent.ɵfac = function ServicoPrestadoListaComponent_Factory(t) {
      return new (t || ServicoPrestadoListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servico_prestado_service__WEBPACK_IMPORTED_MODULE_1__["ServicoPrestadoService"]));
    };

    ServicoPrestadoListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicoPrestadoListaComponent,
      selectors: [["app-servico-prestado-lista"]],
      decls: 46,
      vars: 5,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrum-bitem", "active"], [1, "container"], [3, "submit"], ["consultaForm", "ngForm"], [1, "row"], [1, "col-md-6"], ["for", "inputNome"], ["type", "text", "name", "nome", "id", "inputNome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputMes"], ["name", "mes", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], ["type", "button", "routerLink", "/servicos-prestados/form", 1, "btn", "btn-warning", "ml-1"], [1, "fa", "fa-plus"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [1, "col-md-12"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "value"], ["role", "alert", 1, "alert", "alert-warning"]],
      template: function ServicoPrestadoListaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Servi\xE7o Prestado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ServicoPrestadoListaComponent_Template_form_submit_6_listener() {
            return ctx.consultar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nome Cliente:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoListaComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "M\xEAs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicoPrestadoListaComponent_Template_select_ngModelChange_16_listener($event) {
            return ctx.mes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Selecione...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ServicoPrestadoListaComponent_option_19_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Consultar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Novo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ServicoPrestadoListaComponent_div_31_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pre\xE7o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ServicoPrestadoListaComponent_tr_45_Template, 9, 4, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lista);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY28tcHJlc3RhZG8vc2Vydmljby1wcmVzdGFkby1saXN0YS9zZXJ2aWNvLXByZXN0YWRvLWxpc3RhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicoPrestadoListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-servico-prestado-lista',
          templateUrl: './servico-prestado-lista.component.html',
          styleUrls: ['./servico-prestado-lista.component.css']
        }]
      }], function () {
        return [{
          type: _servico_prestado_service__WEBPACK_IMPORTED_MODULE_1__["ServicoPrestadoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servico-prestado/servico-prestado-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/servico-prestado/servico-prestado-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ServicoPrestadoRoutingModule */

  /***/
  function srcAppServicoPrestadoServicoPrestadoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestadoRoutingModule", function () {
      return ServicoPrestadoRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./servico-prestado-form/servico-prestado-form.component */
    "./src/app/servico-prestado/servico-prestado-form/servico-prestado-form.component.ts");
    /* harmony import */


    var _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./servico-prestado-lista/servico-prestado-lista.component */
    "./src/app/servico-prestado/servico-prestado-lista/servico-prestado-lista.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: 'servicos-prestados',
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      children: [{
        path: 'form',
        component: _servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_2__["ServicoPrestadoFormComponent"]
      }, {
        path: 'lista',
        component: _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoListaComponent"]
      }, {
        path: '',
        redirectTo: '/servicos-prestados/lista',
        pathMatch: 'full'
      }]
    }];

    var ServicoPrestadoRoutingModule = function ServicoPrestadoRoutingModule() {
      _classCallCheck(this, ServicoPrestadoRoutingModule);
    };

    ServicoPrestadoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicoPrestadoRoutingModule
    });
    ServicoPrestadoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicoPrestadoRoutingModule_Factory(t) {
        return new (t || ServicoPrestadoRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicoPrestadoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicoPrestadoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/servico-prestado/servico-prestado.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/servico-prestado/servico-prestado.module.ts ***!
    \*************************************************************/

  /*! exports provided: ServicoPrestadoModule */

  /***/
  function srcAppServicoPrestadoServicoPrestadoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestadoModule", function () {
      return ServicoPrestadoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _servico_prestado_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./servico-prestado-routing.module */
    "./src/app/servico-prestado/servico-prestado-routing.module.ts");
    /* harmony import */


    var _servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./servico-prestado-form/servico-prestado-form.component */
    "./src/app/servico-prestado/servico-prestado-form/servico-prestado-form.component.ts");
    /* harmony import */


    var _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./servico-prestado-lista/servico-prestado-lista.component */
    "./src/app/servico-prestado/servico-prestado-lista/servico-prestado-lista.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ServicoPrestadoModule = function ServicoPrestadoModule() {
      _classCallCheck(this, ServicoPrestadoModule);
    };

    ServicoPrestadoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicoPrestadoModule
    });
    ServicoPrestadoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicoPrestadoModule_Factory(t) {
        return new (t || ServicoPrestadoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _servico_prestado_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicoPrestadoModule, {
        declarations: [_servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_4__["ServicoPrestadoFormComponent"], _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_5__["ServicoPrestadoListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _servico_prestado_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_4__["ServicoPrestadoFormComponent"], _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_5__["ServicoPrestadoListaComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicoPrestadoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_4__["ServicoPrestadoFormComponent"], _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_5__["ServicoPrestadoListaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _servico_prestado_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicoPrestadoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          exports: [_servico_prestado_form_servico_prestado_form_component__WEBPACK_IMPORTED_MODULE_4__["ServicoPrestadoFormComponent"], _servico_prestado_lista_servico_prestado_lista_component__WEBPACK_IMPORTED_MODULE_5__["ServicoPrestadoListaComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/servico-prestado/servicoPrestado.ts":
  /*!*****************************************************!*\
    !*** ./src/app/servico-prestado/servicoPrestado.ts ***!
    \*****************************************************/

  /*! exports provided: ServicoPrestado */

  /***/
  function srcAppServicoPrestadoServicoPrestadoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicoPrestado", function () {
      return ServicoPrestado;
    });

    var ServicoPrestado = function ServicoPrestado() {
      _classCallCheck(this, ServicoPrestado);
    };
    /***/

  },

  /***/
  "./src/app/template/navbar/navbar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/navbar/navbar.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppTemplateNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 5,
      vars: 0,
      consts: [[1, "sb-topnav", "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0"], [1, "fas", "fa-bars"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meus Clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/sidebar/sidebar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/template/sidebar/sidebar.component.ts ***!
    \*******************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppTemplateSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(authService, router) {
        _classCallCheck(this, SidebarComponent);

        this.authService = authService;
        this.router = router;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = this.authService.obterToken();

          if (token) {
            this.usuarioLogado = this.jwtHelper.decodeToken(token).user_name;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.encerrarSessao();
          this.router.navigate(['/login']);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 30,
      vars: 1,
      consts: [["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu"], [1, "nav"], [1, "sb-sidenav-menu-heading"], ["routerLink", "/home", 1, "nav-link"], [1, "sb-nav-link-icon"], [1, "fas", "fa-tachometer-alt"], ["routerLink", "/clientes", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "fas", "fa-columns"], ["routerLink", "/servicos-prestados", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "fas", "fa-address-card"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "sb-sidenav-footer"], [1, "small"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sistema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cadastros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Clientes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Servi\xE7os Prestados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_22_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sair ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Logado como:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.usuarioLogado, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/template.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/template/template.module.ts ***!
    \*********************************************/

  /*! exports provided: TemplateModule */

  /***/
  function srcAppTemplateTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
      return TemplateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/template/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/template/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TemplateModule = function TemplateModule() {
      _classCallCheck(this, TemplateModule);
    };

    TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TemplateModule
    });
    TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TemplateModule_Factory(t) {
        return new (t || TemplateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, {
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/token.interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/token.interceptor.ts ***!
    \**************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor() {
        _classCallCheck(this, TokenInterceptor);
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var tokenString = localStorage.getItem('access_token');
          var url = request.url;

          if (tokenString && !url.endsWith('/oauth/token')) {
            var token = JSON.parse(tokenString);
            var jwt = token.access_token;
            request = request.clone({
              setHeaders: {
                Authorization: 'Bearer ' + jwt
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)();
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiURLBase: 'http://localhost:8080',
      clientId: 'my-angular-app',
      clientSecret: '@321',
      obterTokenUrl: '/oauth/token'
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Ambiente de Desenvolvimento\Projetos\Cursos\angular-e-spring-full-stack\clientes-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map