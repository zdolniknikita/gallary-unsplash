import { url, query } from '../constans'

export const PHOTO_LOADED = 'PHOTO_LOADED'
export const PHOTO_LOADING = 'PHOTO_LOADING'

export const getPhoto = ( id ) => ( dispatch, getState ) => {

    dispatch({ type: PHOTO_LOADING })

    fetch( `${url}/photos/${id}${query}` )
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: PHOTO_LOADED,
                payload: res
            })
        
        })
        .catch(err => console.log( err ))
        
}



