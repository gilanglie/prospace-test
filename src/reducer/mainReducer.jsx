import {MAIN} from '../action/type';

const initialState = {
    mainState : {
        furniture_styles: [],
        products: []
    }
}
export const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case MAIN:
            return {
                ...state,
                mainState : action.payload
            } 
        default: 
            return state
    }
}

