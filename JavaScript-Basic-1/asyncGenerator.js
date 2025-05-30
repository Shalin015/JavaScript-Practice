"use strict";

let range = {
    from : 1,
    to : 5,
    [Symbol.asyncIterator]()
    {
        return {
            current : this.from,
            last : this.to,
            async next(){
                await new Promise(resolve => setTimeout(resolve,2000));
                if(this.current <= this.last)
                {
                    return {value:this.current++, done:false};
                }
                else
                {
                    return{done : true};
                }
            }
        };
    }
};
(async () => {
    for await(let value of range)
    {
        console.log(value);
    }
})()