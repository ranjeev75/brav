import axios from 'axios';

//Helpers to perform POST/GET requests to the API server
function Action(query,action) {
    if(action === 'buy') {
        var localStore = JSON.parse(localStorage.getItem('items')) || [];
        localStore.push(query);
        localStorage.setItem('items', JSON.stringify(localStore));

        axios.post('/api', {
            item: query
        })
            .then(function (response) {
                //console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }else{
        var localStoreDel = JSON.parse(localStorage.getItem('items'));
        localStoreDel.splice(localStoreDel.indexOf(query), 1);
        localStorage.setItem('items', JSON.stringify(localStoreDel));

        axios.post('/api/shoppingbag', {
            item: query
        })
            .then(function (response) {
                //console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

const Purchase = { Action };
export default Purchase;