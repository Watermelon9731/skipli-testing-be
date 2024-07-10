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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithPhoneNumber = void 0;
const auth_1 = require("firebase/auth");
const database_1 = require("../configs/database");
const firebaseAuth = (0, auth_1.getAuth)(database_1.firebaseApp);
firebaseAuth.useDeviceLanguage();
const loginWithPhoneNumber = (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const appVerifier = new auth_1.RecaptchaVerifier(firebaseAuth, "recaptcha-container", {});
    try {
        const confirmationResult = yield (0, auth_1.signInWithPhoneNumber)(firebaseAuth, phoneNumber, appVerifier);
        console.log(confirmationResult);
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginWithPhoneNumber = loginWithPhoneNumber;
