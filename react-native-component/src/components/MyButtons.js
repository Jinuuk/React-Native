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

    onPress={props.onPress}
  
    > 

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
  dimension : PropTypes.object,
  title : PropTypes.string
}

export default MyButton;