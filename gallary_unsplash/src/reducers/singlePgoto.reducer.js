
import { PHOTO_LOADING, PHOTO_LOADED } from '../actions'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    photo: null
}

export default (state = INITIAL_STATE, action) => {

    switch ( action.type ) {

        case PHOTO_LOADING: 
            return {
                ...state,
                loading: true,
                loaded: false
            }
        
        case PHOTO_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                photo: action.payload
            }

        default:
            return state
    }
}