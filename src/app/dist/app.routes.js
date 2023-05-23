"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    {
        path: 'splash',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/splash/splash.page'); }).then(function (m) { return m.SplashPage; }); }
    },
    {
        path: 'login',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/login/login.page'); }).then(function (m) { return m.LoginPage; }); }
    },
    {
        path: 'navs',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/navs/navs.routes'); }).then(function (m) { return m.routes; }); }
    },
    {
        path: 'profile-update',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/modal/profile-update/profileUpdate.page'); }).then(function (m) { return m.ProfileUpdatePage; }); }
    },
    {
        path: 'board-add',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/modal/board-add/boardAdd.page'); }).then(function (m) { return m.BoardAddPage; }); }
    },
    {
        path: 'search',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/modal/search/search.page'); }).then(function (m) { return m.SearchPage; }); }
    },
    {
        path: 'search-detail/:id',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/modal/search-detail/searchDetail.page'); }).then(function (m) { return m.SearchDetailPage; }); }
    },
    {
        path: 'recipe-add',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/modal/recipe-add/recipeAdd.page'); }).then(function (m) { return m.RecipeAddPage; }); }
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
