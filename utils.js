// Helpers to add and remove items from shopping bag
var helpers = {
    getBag:(a,x,y) => {
        JSON.parse(y).map(function(item) {
                if(item.id === a){
                    item.bag = true;
                    x.push(item)
                }
            }
        );
        return x;
    },
    delBag:(a,b) => {
        return b.filter(function(item) {
            return item.id !== a;
        });
    }
};

module.exports = helpers;

