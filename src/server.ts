import {parallelExecution, sequentialExecution} from './asyncOperations';

const workload = [
    {name: 'a', ms: 5000},
    {name: 'b', ms: 2500},
    {name:'c', ms: 4000},
    {name:'d', ms: 500}
]

sequentialExecution(workload);
parallelExecution(workload);
