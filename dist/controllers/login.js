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
router.post("/access-code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await loginWithPhoneNumber(req.body.phoneNumber);
        res.send(users);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post("/verify-access-code", (req, res) => {
    //   loginWithPhoneNumber(req.body.phoneNumber);
    res.send(users);
});
exports.default = router;
