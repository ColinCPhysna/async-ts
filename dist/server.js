"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncOperations_1 = require("./asyncOperations");
const workload = [
    { name: 'a', ms: 5000 },
    { name: 'b', ms: 2500 },
    { name: 'c', ms: 4000 },
    { name: 'd', ms: 500 }
];
asyncOperations_1.sequentialExecution(workload);
asyncOperations_1.parallelExecution(workload);
//# sourceMappingURL=server.js.map