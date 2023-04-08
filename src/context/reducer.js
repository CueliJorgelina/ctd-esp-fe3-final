export const initialState = { theme: localStorage.getItem('theme') === 'dark', data: [] };

export const reducer = ( state, action ) => {

    switch(action.type){
        case 'light':
            return { theme: false };
        case 'dark':
            return { theme: true };
        default:
            return state;
        
    }
}