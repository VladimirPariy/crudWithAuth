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
exports.seed = void 0;
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
const seed = (knex) => __awaiter(void 0, void 0, void 0, function* () {
    yield knex('users_knex').insert([
        {
            login: '111111',
            email: '111111@111.com',
            password: '$2a$07$4e8OreVOWPHzDgO0Z.CfbOipsfaS404j7pS3jhsgaalAZmgitcUAC'
        },
        {
            login: '1111111',
            email: '1111111@111.com',
            password: '$2a$07$CKYaMfd6DEEV1m.Ohbd3uu29CMQOkAUvDb9ckgA6btmSByQW0Ux4y'
        }
    ]);
});
exports.seed = seed;
