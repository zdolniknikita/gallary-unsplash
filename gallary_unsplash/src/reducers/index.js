import { combineReducers } from 'redux'

import photosReducer from './photos.reducer'
import singlePhotoReducer from './singlePgoto.reducer'

export default combineReducers ({
    photos: photosReducer,
    photo: singlePhotoReducer
})