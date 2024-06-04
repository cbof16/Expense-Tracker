export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                // payload is the data that we want to send to the reduce
                // filter() method creates a new array with all elements that pass the test implemented by the provided function.
                // In this case, we are filtering out the transaction with the id that matches the payload
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

