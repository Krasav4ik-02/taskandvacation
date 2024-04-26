"use strict";
(self["webpackChunktaskhub"] = self["webpackChunktaskhub"] || []).push([["src_app_redux_store_reducers_ActionCreator_ts"],{

/***/ "./src/app/redux/store/reducers/ActionCreator.ts":
/*!*******************************************************!*\
  !*** ./src/app/redux/store/reducers/ActionCreator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeUserData: () => (/* binding */ changeUserData),
/* harmony export */   changeUserTask: () => (/* binding */ changeUserTask),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   fetchUserData: () => (/* binding */ fetchUserData),
/* harmony export */   fetchUserLogin: () => (/* binding */ fetchUserLogin),
/* harmony export */   fetchUserRegistration: () => (/* binding */ fetchUserRegistration),
/* harmony export */   fetchUserRegistrationManager: () => (/* binding */ fetchUserRegistrationManager),
/* harmony export */   selectProject: () => (/* binding */ selectProject),
/* harmony export */   selectTask: () => (/* binding */ selectTask),
/* harmony export */   sendUserTask: () => (/* binding */ sendUserTask),
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var _UserSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSlice */ "./src/app/redux/store/reducers/UserSlice.ts");
/* harmony import */ var shared_lib_changeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/changeTask */ "./src/shared/lib/changeTask.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function getCookie(name) {
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2)
        return parts.pop().split(';').shift();
}
var url = 'http://26.143.202.240:8000';
// const urlErs = 'http://26.209.237.113:8000'  'http://26.143.202.240:8000'
var fetchUserLogin = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetching());
                return [4 /*yield*/, fetch("".concat(url, "/authentication"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    })
                        .then(function (res) {
                        if (!res.ok) {
                            throw new Error('' + res.status);
                        }
                        return res.json();
                    }).then(function (data) {
                        console.log('After fetching', data);
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingSuccess(data.user));
                        // dispatch(userSlice.actions.userProjectsFetchingSuccess(data.projects))
                        // dispatch(userSlice.actions.userTeamleadsFetchingSuccess(data.teamleads))
                        // dispatch(userSlice.actions.userProgrammersFetchingSuccess(data.programmers))
                    })
                    // const user: IUser = response.user
                    // const projects: IProject[] = response.projects
                    // dispatch(userSlice.actions.userFetchingSuccess(user))
                    // dispatch(userSlice.actions.userProjectsFetchingSuccess(projects))
                ]; //.catch(e => dispatch(userSlice.actions.userFetchingError(e.message))) as ILoginResponse
            case 1:
                response = _a.sent() //.catch(e => dispatch(userSlice.actions.userFetchingError(e.message))) as ILoginResponse
                ;
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e_1.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var fetchUserRegistration = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('do fetch');
                return [4 /*yield*/, fetch("".concat(url, "/registration"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationSuccess()); }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationError(e.message)); })
                    // console.log(data)
                    // dispatch(userSlice.actions.userFetchingRegistrationSuccess())
                    // return response
                ]; //.then(() => dispatch(userSlice.actions.userFetchingRegistrationSuccess()))
            case 1:
                response = _a.sent() //.then(() => dispatch(userSlice.actions.userFetchingRegistrationSuccess()))
                ;
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationError(e_2.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var fetchUserRegistrationManager = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(url, "/registration_manager"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationSuccess()); }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationError(e.message)); })
                    // const data = await 
                    // dispatch(userSlice.actions.userFetchingRegistrationSuccess())
                ];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingRegistrationError(e_3.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var fetchUserData = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetching());
                return [4 /*yield*/, fetch("".concat(url, "/home"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) {
                        console.log('After fetching user data HOME', data);
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userProjectsFetchingSuccess(data.projects));
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userTeamleadsFetchingSuccess(data.teamleads));
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userProgrammersFetchingSuccess(data.developers));
                    }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e.message)); })];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e_4.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var createProject = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(url, "/create_project"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            // 'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    })
                        .then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.createProject(data.projects)); }).catch(function (e) { return console.error(e.message); })
                    // const dataParse = await response.json()
                    // console.log(dataParse)
                    // const projects: IProject[] = response.projects
                    // dispatch(userSlice.actions.createProject(projects))
                ];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                console.error(e_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var createTask = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, projects, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch("".concat(url, "/create_task"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            // 'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    })
                        .then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    })
                    //.then(res => res.json())
                    // const dataParse = await response.json()
                ];
            case 1:
                response = _a.sent();
                projects = response.projects;
                console.log(response);
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.createProject(projects));
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var selectTask = function (task) { return function (dispatch) {
    dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.selectTask(task));
}; };
var selectProject = function (project) { return function (dispatch) {
    dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.selectProject(project));
}; };
var changeUserData = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(JSON.stringify(data));
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetching());
                return [4 /*yield*/, fetch("".concat(url, "/edit_profile"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            // 'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingSuccess(data.user_data)); }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e.message)); })
                    // const user: IUser = response.user_data
                    // dispatch(userSlice.actions.userFetchingSuccess(user))
                ];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_7 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e_7.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var changeUserTask = function (data, projects, method) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetching());
                return [4 /*yield*/, fetch("".concat(url, "/edit_task"), {
                        method: "".concat(method),
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            // 'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) {
                        // console.log(data.task_data)
                        var projectsWithChangedTask = (0,shared_lib_changeTask__WEBPACK_IMPORTED_MODULE_1__.changeTask)(projects, data.task_data);
                        // console.log('projectsWithChangedTask: ' , projectsWithChangedTask)
                        // localStorage.setItem('selectedTask', JSON.stringify(data))
                        // dispatch(userSlice.actions.selectTask(data))
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userChangeTask(projectsWithChangedTask));
                    }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e.message)); })];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_8 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e_8.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
var sendUserTask = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetching());
                return [4 /*yield*/, fetch("".concat(url, "/send_task"), {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json; charset=UTF-8",
                            // 'X-CSRFToken': getCookie('csrftoken')
                        },
                        body: JSON.stringify(data)
                    }).then(function (res) {
                        if (!res.ok) {
                            throw new Error('Ошибка' + res.status);
                        }
                        return res.json();
                    }).then(function (data) {
                        // console.log('projectsWithChangedTask: ' , projectsWithChangedTask)
                        // localStorage.setItem('selectedTask', JSON.stringify(data))
                        // dispatch(userSlice.actions.selectTask(data))
                        // dispatch(userSlice.actions.userChangeTask(projectsWithChangedTask))
                        dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.sendTaskSuccess());
                    }).catch(function (e) { return dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e.message)); })];
            case 1:
                response = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_9 = _a.sent();
                dispatch(_UserSlice__WEBPACK_IMPORTED_MODULE_0__.userSlice.actions.userFetchingError(e_9.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };


/***/ }),

/***/ "./src/shared/lib/changeTask.ts":
/*!**************************************!*\
  !*** ./src/shared/lib/changeTask.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTask: () => (/* binding */ changeTask)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function changeTask(projects, data) {
    // const projects = JSON.parse(localStorage.getItem('projects'))
    // console.log(data)
    // for(let i = 0; i < projects.length; i++) {
    //     let currentProject = projects[i]
    //     for(let j = 0; j < currentProject.tasks.length; j++) {
    //         let currentTask = currentProject.tasks[i]
    //         if(currentTask.task_id == data.task.task_id) {
    //             currentTask = data.task
    //             // console.log(currentTask)
    //         }
    //     }
    // }
    // localStorage.setItem('projects', JSON.stringify(projects))
    // console.log(projects)
    // return projects
    return projects.map(function (project) {
        // if(project.project_id == data.project_id) {
        //     project.tasks.map(task => task.task_id == data.task.task_id ? data.task : task)
        // }
        if (project.tasks.find(function (task) { return task.task_id == data.task_id; })) {
            return __assign(__assign({}, project), { tasks: project.tasks.map(function (task) { return task.task_id == data.task_id ? data : task; }) });
        }
        return project;
    });
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9yZWR1eF9zdG9yZV9yZWR1Y2Vyc19BY3Rpb25DcmVhdG9yX3RzLmMxYWY5MDU1MDk3YzFkOTJmMDI2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGNBQWMsNkJBQTZCLDBCQUEwQixjQUFjLHFCQUFxQjtBQUN4RyxpQkFBaUIsb0RBQW9ELHFFQUFxRSxjQUFjO0FBQ3hKLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1DQUFtQyxTQUFTO0FBQzVDLG1DQUFtQyxXQUFXLFVBQVU7QUFDeEQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSw4R0FBOEcsT0FBTztBQUNySCxpRkFBaUYsaUJBQWlCO0FBQ2xHLHlEQUF5RCxnQkFBZ0IsUUFBUTtBQUNqRiwrQ0FBK0MsZ0JBQWdCLGdCQUFnQjtBQUMvRTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsVUFBVSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3RELG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDd0M7QUFDVztBQUNuRDtBQUNBLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0I7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDTztBQUNQO0FBQ08sdUNBQXVDLDZCQUE2QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFD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Z0JBQWdCLGlEQUFTLHlDQUF5QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoWkQsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQSwwQkFBMEIsaUNBQWlDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0NBQXNDO0FBQ3ZGLHVDQUF1QyxjQUFjLDJDQUEyQyxvREFBb0QsR0FBRztBQUN2SjtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2h1Yi8uL3NyYy9hcHAvcmVkdXgvc3RvcmUvcmVkdWNlcnMvQWN0aW9uQ3JlYXRvci50cyIsIndlYnBhY2s6Ly90YXNraHViLy4vc3JjL3NoYXJlZC9saWIvY2hhbmdlVGFzay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyB1c2VyU2xpY2UgfSBmcm9tIFwiLi9Vc2VyU2xpY2VcIjtcbmltcG9ydCB7IGNoYW5nZVRhc2sgfSBmcm9tIFwic2hhcmVkL2xpYi9jaGFuZ2VUYXNrXCI7XG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IFwiOyBcIi5jb25jYXQoZG9jdW1lbnQuY29va2llKTtcbiAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdChcIjsgXCIuY29uY2F0KG5hbWUsIFwiPVwiKSk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMilcbiAgICAgICAgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbn1cbmV4cG9ydCB2YXIgdXJsID0gJ2h0dHA6Ly8yNi4xNDMuMjAyLjI0MDo4MDAwJztcbi8vIGNvbnN0IHVybEVycyA9ICdodHRwOi8vMjYuMjA5LjIzNy4xMTM6ODAwMCcgICdodHRwOi8vMjYuMTQzLjIwMi4yNDA6ODAwMCdcbmV4cG9ydCB2YXIgZmV0Y2hVc2VyTG9naW4gPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiXCIuY29uY2F0KHVybCwgXCIvYXV0aGVudGljYXRpb25cIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJycgKyByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWZ0ZXIgZmV0Y2hpbmcnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ1N1Y2Nlc3MoZGF0YS51c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyUHJvamVjdHNGZXRjaGluZ1N1Y2Nlc3MoZGF0YS5wcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyVGVhbWxlYWRzRmV0Y2hpbmdTdWNjZXNzKGRhdGEudGVhbWxlYWRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJQcm9ncmFtbWVyc0ZldGNoaW5nU3VjY2VzcyhkYXRhLnByb2dyYW1tZXJzKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdXNlcjogSVVzZXIgPSByZXNwb25zZS51c2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3RzOiBJUHJvamVjdFtdID0gcmVzcG9uc2UucHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nU3VjY2Vzcyh1c2VyKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlclByb2plY3RzRmV0Y2hpbmdTdWNjZXNzKHByb2plY3RzKSlcbiAgICAgICAgICAgICAgICBdOyAvLy5jYXRjaChlID0+IGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ0Vycm9yKGUubWVzc2FnZSkpKSBhcyBJTG9naW5SZXNwb25zZVxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpIC8vLmNhdGNoKGUgPT4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nRXJyb3IoZS5tZXNzYWdlKSkpIGFzIElMb2dpblJlc3BvbnNlXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdFcnJvcihlXzEubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9OyB9O1xuZXhwb3J0IHZhciBmZXRjaFVzZXJSZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgZV8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIGZldGNoJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJcIi5jb25jYXQodXJsLCBcIi9yZWdpc3RyYXRpb25cIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQntGI0LjQsdC60LAnICsgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nUmVnaXN0cmF0aW9uU3VjY2VzcygpKTsgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ1JlZ2lzdHJhdGlvbkVycm9yKGUubWVzc2FnZSkpOyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdSZWdpc3RyYXRpb25TdWNjZXNzKCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZVxuICAgICAgICAgICAgICAgIF07IC8vLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nUmVnaXN0cmF0aW9uU3VjY2VzcygpKSlcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKSAvLy50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ1JlZ2lzdHJhdGlvblN1Y2Nlc3MoKSkpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdSZWdpc3RyYXRpb25FcnJvcihlXzIubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9OyB9O1xuZXhwb3J0IHZhciBmZXRjaFVzZXJSZWdpc3RyYXRpb25NYW5hZ2VyID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2UsIGVfMztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiXCIuY29uY2F0KHVybCwgXCIvcmVnaXN0cmF0aW9uX21hbmFnZXJcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQntGI0LjQsdC60LAnICsgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nUmVnaXN0cmF0aW9uU3VjY2VzcygpKTsgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ1JlZ2lzdHJhdGlvbkVycm9yKGUubWVzc2FnZSkpOyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ1JlZ2lzdHJhdGlvblN1Y2Nlc3MoKSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdSZWdpc3RyYXRpb25FcnJvcihlXzMubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9OyB9O1xuZXhwb3J0IHZhciBmZXRjaFVzZXJEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2UsIGVfNDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIlwiLmNvbmNhdCh1cmwsIFwiL2hvbWVcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQntGI0LjQsdC60LAnICsgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FmdGVyIGZldGNoaW5nIHVzZXIgZGF0YSBIT01FJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyUHJvamVjdHNGZXRjaGluZ1N1Y2Nlc3MoZGF0YS5wcm9qZWN0cykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlclRlYW1sZWFkc0ZldGNoaW5nU3VjY2VzcyhkYXRhLnRlYW1sZWFkcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlclByb2dyYW1tZXJzRmV0Y2hpbmdTdWNjZXNzKGRhdGEuZGV2ZWxvcGVycykpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nRXJyb3IoZS5tZXNzYWdlKSk7IH0pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlXzQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nRXJyb3IoZV80Lm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTsgfTtcbmV4cG9ydCB2YXIgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlLCBlXzU7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIlwiLmNvbmNhdCh1cmwsIFwiL2NyZWF0ZV9wcm9qZWN0XCIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnWC1DU1JGVG9rZW4nOiBnZXRDb29raWUoJ2NzcmZ0b2tlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQntGI0LjQsdC60LAnICsgcmVzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuY3JlYXRlUHJvamVjdChkYXRhLnByb2plY3RzKSk7IH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGFQYXJzZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhUGFyc2UpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByb2plY3RzOiBJUHJvamVjdFtdID0gcmVzcG9uc2UucHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuY3JlYXRlUHJvamVjdChwcm9qZWN0cykpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlXzUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlXzUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07IH07XG5leHBvcnQgdmFyIGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgcHJvamVjdHMsIGVfNjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiXCIuY29uY2F0KHVybCwgXCIvY3JlYXRlX3Rhc2tcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICdYLUNTUkZUb2tlbic6IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCcgKyByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLy50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkYXRhUGFyc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RzID0gcmVzcG9uc2UucHJvamVjdHM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLmNyZWF0ZVByb2plY3QocHJvamVjdHMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlXzYgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07IH07XG5leHBvcnQgdmFyIHNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuc2VsZWN0VGFzayh0YXNrKSk7XG59OyB9O1xuZXhwb3J0IHZhciBzZWxlY3RQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHsgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnNlbGVjdFByb2plY3QocHJvamVjdCkpO1xufTsgfTtcbmV4cG9ydCB2YXIgY2hhbmdlVXNlckRhdGEgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgZV83O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcIlwiLmNvbmNhdCh1cmwsIFwiL2VkaXRfcHJvZmlsZVwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ1gtQ1NSRlRva2VuJzogZ2V0Q29va2llKCdjc3JmdG9rZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCcgKyByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdTdWNjZXNzKGRhdGEudXNlcl9kYXRhKSk7IH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdFcnJvcihlLm1lc3NhZ2UpKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdXNlcjogSVVzZXIgPSByZXNwb25zZS51c2VyX2RhdGFcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nU3VjY2Vzcyh1c2VyKSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfNyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdFcnJvcihlXzcubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9OyB9O1xuZXhwb3J0IHZhciBjaGFuZ2VVc2VyVGFzayA9IGZ1bmN0aW9uIChkYXRhLCBwcm9qZWN0cywgbWV0aG9kKSB7IHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlLCBlXzg7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJcIi5jb25jYXQodXJsLCBcIi9lZGl0X3Rhc2tcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJcIi5jb25jYXQobWV0aG9kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ1gtQ1NSRlRva2VuJzogZ2V0Q29va2llKCdjc3JmdG9rZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCcgKyByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnRhc2tfZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9qZWN0c1dpdGhDaGFuZ2VkVGFzayA9IGNoYW5nZVRhc2socHJvamVjdHMsIGRhdGEudGFza19kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9qZWN0c1dpdGhDaGFuZ2VkVGFzazogJyAsIHByb2plY3RzV2l0aENoYW5nZWRUYXNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkVGFzaycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuc2VsZWN0VGFzayhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJDaGFuZ2VUYXNrKHByb2plY3RzV2l0aENoYW5nZWRUYXNrKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdFcnJvcihlLm1lc3NhZ2UpKTsgfSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfOCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy51c2VyRmV0Y2hpbmdFcnJvcihlXzgubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9OyB9O1xuZXhwb3J0IHZhciBzZW5kVXNlclRhc2sgPSBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgZV85O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMudXNlckZldGNoaW5nKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiXCIuY29uY2F0KHVybCwgXCIvc2VuZF90YXNrXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnWC1DU1JGVG9rZW4nOiBnZXRDb29raWUoJ2NzcmZ0b2tlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign0J7RiNC40LHQutCwJyArIHJlcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9qZWN0c1dpdGhDaGFuZ2VkVGFzazogJyAsIHByb2plY3RzV2l0aENoYW5nZWRUYXNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkVGFzaycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2godXNlclNsaWNlLmFjdGlvbnMuc2VsZWN0VGFzayhkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJDaGFuZ2VUYXNrKHByb2plY3RzV2l0aENoYW5nZWRUYXNrKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnNlbmRUYXNrU3VjY2VzcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ0Vycm9yKGUubWVzc2FnZSkpOyB9KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZV85ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnVzZXJGZXRjaGluZ0Vycm9yKGVfOS5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07IH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhc2socHJvamVjdHMsIGRhdGEpIHtcbiAgICAvLyBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaV1cbiAgICAvLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBjdXJyZW50UHJvamVjdC50YXNrc1tpXVxuICAgIC8vICAgICAgICAgaWYoY3VycmVudFRhc2sudGFza19pZCA9PSBkYXRhLnRhc2sudGFza19pZCkge1xuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gZGF0YS50YXNrXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRhc2spXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgIC8vIHJldHVybiBwcm9qZWN0c1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAoZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgLy8gaWYocHJvamVjdC5wcm9qZWN0X2lkID09IGRhdGEucHJvamVjdF9pZCkge1xuICAgICAgICAvLyAgICAgcHJvamVjdC50YXNrcy5tYXAodGFzayA9PiB0YXNrLnRhc2tfaWQgPT0gZGF0YS50YXNrLnRhc2tfaWQgPyBkYXRhLnRhc2sgOiB0YXNrKVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChwcm9qZWN0LnRhc2tzLmZpbmQoZnVuY3Rpb24gKHRhc2spIHsgcmV0dXJuIHRhc2sudGFza19pZCA9PSBkYXRhLnRhc2tfaWQ7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHByb2plY3QpLCB7IHRhc2tzOiBwcm9qZWN0LnRhc2tzLm1hcChmdW5jdGlvbiAodGFzaykgeyByZXR1cm4gdGFzay50YXNrX2lkID09IGRhdGEudGFza19pZCA/IGRhdGEgOiB0YXNrOyB9KSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==