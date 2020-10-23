const sleep = (ms: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const parallelExecution = async (jobs: any[]): Promise<any> => {
    const startTime = new Date().getTime();
    let promiseArray = jobs.map(async (job) => {
        await sleep(job.ms);
        let currentTime = `${(new Date().getTime() - startTime)*0.001}s`
        return Promise.resolve(`Paralel => ${job.name} : ${currentTime}`);
    });

    let values = await Promise.all(promiseArray);
    values.map(value => console.log(value));
    
}

export const sequentialExecution = async (jobs: any[]): Promise<any> => {
    const startTime = new Date().getTime();
    jobs.reduce(async(acc, data) => {
        await acc;
        await sleep(data.ms);
        let currentTime = `${(new Date().getTime() - startTime)*0.001}s`
        return console.log(`Sequential => ${data.name} : ${currentTime}`);
    }, Promise.resolve([]))
}
