import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

import { getPhotos } from '../actions/photos.actions'

class PhotoList extends Component {

componentDidMount() {

    this.props.getPhotos()
}

render() {
    
    const { loading, photos, loaded, onPress } = this.props

    return(
        <SafeAreaView>
                <ScrollView>
                            
                    <View style={styles.list}>
                        {
                            loaded ? (
                                photos.map(item => <ListItem key={item.id} photo={item} onPress={onPress}/>)
                            ) : ( 
                                <ActivityIndicator animating={true} size={'large'}/>
                            )
                        }
                    </View>

            </ScrollView>
         </SafeAreaView>
    )
}

}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
})

 /*
    Redux
 */

 const mapStateToProps = ( state, ownProps ) => {

    return {
        photos: state.photos.photos,
        loading: state.photos.loading,
        loaded: state.photos.loaded
    }
 }

 const mapDispatchToProps = {
    getPhotos
 }

 export default connect( mapStateToProps, mapDispatchToProps )( PhotoList )