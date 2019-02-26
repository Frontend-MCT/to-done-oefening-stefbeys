const dataAccess=function () {
    const localKey='todo';


    let addItem=function (todo) {
        let items=getAllItems();
        items.push(todo);
        localStorage.setItem(localKey, JSON.stringify(items));
        return items.length-1;
    };
    const getAllItems=()=>{
        return JSON.parse(localStorage.getItem(localKey))||[];
    };

    const removeItem=(key)=>{
        let array=getAllItems();
        let filtered = array.filter(function(value, index, arr){

            return index != key;

        });
        localStorage.setItem(localKey,JSON.stringify(filtered));
    };
    const getCount=()=>{
        return getAllItems().length;
    };
    return{
        addItem:addItem,
        removeItem:removeItem,
        getAllItems:getAllItems
    }
}();