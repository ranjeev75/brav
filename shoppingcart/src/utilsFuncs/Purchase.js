import axios from 'axios';

//Helpers to perform POST/GET requests to the API server
function Action(query,action) {
    if(action === 'buy') {
        axios.post('/api', {
            item: query
        })
            .then((response) => {
                //console.log(response.data);
                let localStore = JSON.parse(localStorage.getItem('items')) || [];
                localStore.push(query);
                localStorage.setItem('items', JSON.stringify(localStore));
            })
            .catch((error) => {
                console.log(error);
            });
    }else{
        axios.post('/api/shoppingbag', {
            item: query
        })
            .then((response) => {
                //console.log(response.data);
                let localStoreDel = JSON.parse(localStorage.getItem('items'));
                localStoreDel.splice(localStoreDel.indexOf(query), 1);
                localStorage.setItem('items', JSON.stringify(localStoreDel));
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

const Purchase = { Action };
export default Purchase;