type Menuobj = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createObj = (active:Menuobj)=>{
    let returnObj = {
        all:false,
        dog:false,
        cat:false,
        fish:false,
    };

    if(active !== ''){
        returnObj[active]=true;
    }
    return returnObj;
}