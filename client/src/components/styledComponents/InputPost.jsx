import React from 'react'
import { View } from 'react-native';
import StyledText from './StyledText';
import { useForm } from 'react-hook-form';


function InputPost() {

    const {register, handleSubmit, formState : {errors} } = useForm();
    const onSubmit = data =>{console.log(data)}

  return (
    <View>
        
    </View>
  )
}

export default InputPost