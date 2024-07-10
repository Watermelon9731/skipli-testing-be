"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND_USER = exports.SEARCH_USER = exports.GITHUB_BASE_URL = void 0;
exports.GITHUB_BASE_URL = process.env.GITHUB_BASE_URL;
exports.SEARCH_USER = "/search/users";
const FIND_USER = (userId) => `/users/${userId}`;
exports.FIND_USER = FIND_USER;
// export const LIKE_USER = "/users";
// export const USER_PROFILE = '/'
