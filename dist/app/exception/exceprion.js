"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exception = void 0;
const exception = (res, e, code) => {
    if (e instanceof Error) {
        return res.status(code).json(e.message);
    }
    return res.status(code).json(e);
};
exports.exception = exception;
