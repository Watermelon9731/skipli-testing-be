"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = require("../utils/url");
const router = express_1.default.Router();
const users = [
    {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@example.com",
    },
    {
        first_name: "Alice",
        last_name: "Smith",
        email: "alicesmith@example.com",
    },
];
router.get("/search-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get("/search-user-id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const data = yield fetch(url_1.GITHUB_BASE_URL + url_1.FIND_USER);
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post("/liked-profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.default = router;
