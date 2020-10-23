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
exports.sequentialExecution = exports.parallelExecution = void 0;
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
exports.parallelExecution = (jobs) => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = new Date().getTime();
    let promiseArray = jobs.map((job) => __awaiter(void 0, void 0, void 0, function* () {
        yield sleep(job.ms);
        let currentTime = `${(new Date().getTime() - startTime) * 0.001}s`;
        return Promise.resolve(`Paralel => ${job.name} : ${currentTime}`);
    }));
    let values = yield Promise.all(promiseArray);
    values.map(value => console.log(value));
});
exports.sequentialExecution = (jobs) => __awaiter(void 0, void 0, void 0, function* () {
    const startTime = new Date().getTime();
    jobs.reduce((acc, data) => __awaiter(void 0, void 0, void 0, function* () {
        yield acc;
        yield sleep(data.ms);
        let currentTime = `${(new Date().getTime() - startTime) * 0.001}s`;
        return console.log(`Sequential => ${data.name} : ${currentTime}`);
    }), Promise.resolve([]));
});
//# sourceMappingURL=asyncOperations.js.map