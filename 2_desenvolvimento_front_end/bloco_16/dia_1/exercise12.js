const array = [0, 1, 2, 3, 4, 5];

const immutableReducer = (state = array, action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      const newArray = [...state]
      newArray.splice(action.index, 1);
      return newArray;
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

store.dispatch(removeItem)