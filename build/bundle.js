/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/config/swagger.js":
/*!*******************************************!*
  !*** ./src/application/config/swagger.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swaggerConfig": () => /* binding */ swaggerConfig
/* harmony export */ });
var swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'x-access-token',
          "in": 'header'
        }
      }
    },
    security: [{
      ApiKeyAuth: []
    }],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  // Path to the API docs
  apis: ['./src/controllers/**/*.js', './src/controllers/**/*.yml']
};

/***/ }),

/***/ "./src/application/database/index.js":
/*!*******************************************!*
  !*** ./src/application/database/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => /* binding */ db,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database */ "./src/database.js");




var database = _database__WEBPACK_IMPORTED_MODULE_3__.default.database,
    user = _database__WEBPACK_IMPORTED_MODULE_3__.default.user,
    password = _database__WEBPACK_IMPORTED_MODULE_3__.default.password,
    host = _database__WEBPACK_IMPORTED_MODULE_3__.default.host,
    forceCleanDatabase = _database__WEBPACK_IMPORTED_MODULE_3__.default.forceCleanDatabase;
var db = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  query: {
    raw: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(onConnect) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return db.authenticate();

          case 3:
            db.sync({
              force: forceCleanDatabase
            });
            onConnect();
            console.log('Database connection OK!');
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log('Unable to connect to the database:');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/application/documentation/index.js":
/*!************************************************!*
  !*** ./src/application/documentation/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/application/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__.swaggerConfig); // Api entrypoint

  app.use("/docs", (swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().serve), swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().setup(swaggerSpec));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documentation);

/***/ }),

/***/ "./src/application/middlewares/error-handler.js":
/*!******************************************************!*
  !*** ./src/application/middlewares/error-handler.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncHandler": () => /* binding */ asyncHandler,
/* harmony export */   "socketHandler": () => /* binding */ socketHandler
/* harmony export */ });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/application/middlewares/index.js":
/*!**********************************************!*
  !*** ./src/application/middlewares/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);



var Middlewares = function Middlewares(app) {
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());
  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()()); // Use this after the variable declaration

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Middlewares);

/***/ }),

/***/ "./src/application/middlewares/restricted-access.js":
/*!**********************************************************!*
  !*** ./src/application/middlewares/restricted-access.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeader": () => /* binding */ getHeader,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/access */ "./src/utils/access.js");

var getHeader = function getHeader(req, header) {
  return req.headers[header];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {
  var token = getHeader(req, 'x-access-token');

  if (!token) {
    return res.status(400).send('No token provided.');
  }

  return (0,_utils_access__WEBPACK_IMPORTED_MODULE_0__.verifyToken)(token, function (err) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        id = _ref.id;

    if (err) {
      return res.status(401).send('Failed to authenticate token.');
    }

    if (!id) {
      return res.status(403).send('Wrong credentials');
    }

    req.userId = id;
    return next();
  });
});

/***/ }),

/***/ "./src/controllers/api/index.js":
/*!**************************************!*
  !*** ./src/controllers/api/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/controllers/api/users/index.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(app) {
  // Private
  app.use('/users', _users__WEBPACK_IMPORTED_MODULE_0__.default);
  app.use('/', function (req, res) {
    return res.send("Working like a charm \u0669(^\u203F^)\u06F6");
  });
}

/***/ }),

/***/ "./src/controllers/api/users/index.js":
/*!********************************************!*
  !*** ./src/controllers/api/users/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Models_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Models/users */ "./src/models/users/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router(); // GET ALL

router.get('/', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.get();

          case 2:
            data = _context.sent;
            res.send(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}())); // GET BY ID

router.get('/:userId', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(req, res) {
    var userId, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.params.userId;
            _context2.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.getById(userId);

          case 3:
            data = _context2.sent;
            res.send(data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}())); // CREATE

router.post("/", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(req, res) {
    var _req$body, mail, pass;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, mail = _req$body.mail, pass = _req$body.pass;
            _context3.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.create(mail, pass);

          case 3:
            res.send('Usuario creado con éxito');

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}())); // DELETE

router["delete"]("/:id", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__.default, (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(req, res) {
    var id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.remove(id);

          case 3:
            res.send("User id: ".concat(id, " deleted"));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}())); // TOTAL UPDATE

router.put("/:id", /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(req, res) {
    var id, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id, body = req.body;
            _context5.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.update(id, body);

          case 3:
            res.send("User id: ".concat(id, " updated"));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
router.get("/restricted-path", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__.default, (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(req, res) {
    var userId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            userId = req.query.userId;
            res.send("User id: ".concat(req.userId));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()));
router.post("/login", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(req, res) {
    var _req$body2, mail, pass, user, token;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, mail = _req$body2.mail, pass = _req$body2.pass;

            if (!(!mail || !pass)) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", res.send(400));

          case 3:
            _context7.next = 5;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__.getByEmailAndPassword(mail, pass);

          case 5:
            user = _context7.sent;

            if (user) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return", res.sendStatus(403));

          case 8:
            token = createToken({
              id: user.id
            });
            res.send(token);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/database.js":
/*!*************************!*
  !*** ./src/database.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'b84312d7539c93',
  password: '75989781',
  database: 'heroku_36dfd48c92e173b',
  connectionLimit: 10
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _application_middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application/middlewares */ "./src/application/middlewares/index.js");
/* harmony import */ var _controllers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/api */ "./src/controllers/api/index.js");
/* harmony import */ var _application_documentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/documentation */ "./src/application/documentation/index.js");
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application/database */ "./src/application/database/index.js");






var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = 3009;
(0,_application_documentation__WEBPACK_IMPORTED_MODULE_4__.default)(app);
(0,_application_middlewares__WEBPACK_IMPORTED_MODULE_2__.default)(app);
(0,_controllers_api__WEBPACK_IMPORTED_MODULE_3__.default)(app);
(0,_application_database__WEBPACK_IMPORTED_MODULE_5__.default)(function () {
  var server = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);
  server.listen(port, function () {
    return console.log("Server listening to http://localhost:".concat(port));
  });
});

/***/ }),

/***/ "./src/models/users/index.js":
/*!***********************************!*
  !*** ./src/models/users/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "update": () => /* binding */ update,
/* harmony export */   "remove": () => /* binding */ remove,
/* harmony export */   "getByEmailAndPassword": () => /* binding */ getByEmailAndPassword,
/* harmony export */   "getById": () => /* binding */ getById,
/* harmony export */   "get": () => /* binding */ get
/* harmony export */ });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/models/users/schema.js");

var create = function create(mail, password) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.create({
    mail: mail,
    password: password
  });
};
var update = function update(id, data) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.update(data, {
    where: {
      id: id
    }
  });
};
var remove = function remove(id) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.destroy({
    where: {
      id: id
    }
  });
};
var getByEmailAndPassword = function getByEmailAndPassword(mail, password) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.findOne({
    where: {
      mail: mail,
      password: password
    }
  });
};
var getById = function getById(id) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.findOne({
    where: {
      id: id
    }
  });
};
var get = function get() {
  return _schema__WEBPACK_IMPORTED_MODULE_0__.default.findAll();
};

/***/ }),

/***/ "./src/models/users/schema.js":
/*!************************************!*
  !*** ./src/models/users/schema.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

var User = _application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('user', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  mail: DataTypes.STRING
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/utils/access.js":
/*!*****************************!*
  !*** ./src/utils/access.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeToken": () => /* binding */ decodeToken,
/* harmony export */   "createToken": () => /* binding */ createToken,
/* harmony export */   "verifyToken": () => /* binding */ verifyToken
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var secret = 'secret';
var decodeToken = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode);
var createToken = function createToken(data) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(data, secret);
};
var verifyToken = function verifyToken(token, callback) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret, callback);
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "body-parser":
/*!******************************!*
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "sequelize":
/*!****************************!*
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");;

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("swagger-jsdoc");;

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map