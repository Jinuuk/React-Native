import React from 'react';
import {TouchableOpacity,Text, Image} from 'react-native';
import PropTypes from 'prop-types'


const MyButton = (props) => {
  console.log(props)
  return (
    <TouchableOpacity style={{
      backgroundColor:'lightblue',
      paddingHorizontal:props.dimension.width,
      paddingVertical:props.dimension.height,
      margin:16,
      borderRadius:8
    }}


    activeOpacity={0.7}
    onPress={props.onPress}
  
    > 
    {/* <Image 
      source={require('/assets/cloud.png')}
      style={{width:80,height80}}
    >
      
    </Image> */}

      <Text style={{fontSize:props.fsize, color:'white',padding:10}}>
        {props.title ?? props.children}
      </Text>
    </TouchableOpacity>
  )
}

MyButton.defaultProps = {
  dimension:{
    width:10, height:10
  },

  title:'임시'
}

MyButton.propTypes = {
  dimension : PropTypes.object.isRequired,
  title : PropTypes.string
}

export default MyButton;