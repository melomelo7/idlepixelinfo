

class plant{
    constructor(
        label=undefined,
        buy=1,
        sell=2,
        time=60,
        exp=1
    )
    {
        this.label=label
        this.buy=buy
        this.sell=sell
        this.time=time
        this.exp=exp
    }
}

class runner{
    constructor(
        label=undefined,
        time=undefined,
        endFunc=undefined
    )
    {
        this.label=label
        this.time=time
        this.endFunc = endFunc
    }
}

let player = {
    farmLv:0,
    farmXp:0,
    patchCt:0,
    patches:[],
    inventory:[],
}

let plants = []
let  queue = []

plants.push(new plant("pepper",1,2,60,1))

console.log(plants)