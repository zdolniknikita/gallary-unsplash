import { url, query } from '../constans'

export const PHOTOS_LOADNIG = 'PHOTOS_LOADNIG'
export const PHOTOS_LOADED = 'PHOTOS_LOADED'

export const getPhotos = () => ( dispatch, getState ) => {

    dispatch({ type: PHOTOS_LOADNIG })

    fetch( `${url}/photos${query}&per_page=50` )
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: PHOTOS_LOADED,
                payload: res
            })
        })
        .catch(err => console.log( err ))
} 


