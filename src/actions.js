import store from './store';

export const addDishes = (index) => {
    let oldList = store.getState().shopDishes;
    let meme = store.getState().dishes;
    for(let i in meme){
        if(i==index){
            console.log('entreeee');
            let img = meme[i].image;
            let px = meme[i].price;
            let qq = meme[i].count;

            const newList = oldList.concat({
                /* id: oldList.length, */
                image: img,
                price: px,
                count: qq
            });

            store.setState({
                shopDishes: newList
             });
            console.log(newList);
            console.log(index);
        }
    }
};

export const removeDish = (index) =>{
    const oldList = store.getState().shopDishes.filter((item, idx) => idx !== index);

    store.setState({
        shopDishes: oldList
    })
    console.log(oldList);
}
    
export const deleteAll = () => {
    console.log('borrame')
	 store.setState({
		shopDishes: []
	})
}