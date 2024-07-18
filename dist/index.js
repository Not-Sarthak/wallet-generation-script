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
const arweave_1 = __importDefault(require("arweave"));
const arweave = arweave_1.default.init({
    host: '127.0.0.1',
    port: 1984,
    protocol: 'http'
});
function generateWallet() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const key = yield arweave.wallets.generate();
            const address = yield arweave.wallets.jwkToAddress(key);
            console.log('Private Key (JWK):', JSON.stringify(key, null, 2));
            console.log('Public Address:', address);
            return { key, address };
        }
        catch (error) {
            console.error('Error generating wallet:', error);
            throw error;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield generateWallet();
    });
}
main();
