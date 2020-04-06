
import { PHOTOS_LOADED, PHOTOS_LOADNIG } from '../actions'

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    photos: []
}

export default ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        case PHOTOS_LOADNIG: 
            return {
                ...state,
                loading: true,
                loaded: false
            }
        
        case PHOTOS_LOADED:
            return {
                ...state,
                loading: false,
                loaded: true,
                photos: action.payload
            }

        default:
            return state
    }
}