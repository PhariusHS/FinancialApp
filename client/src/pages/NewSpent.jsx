import React from 'react'
import { Button, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import Input from '../components/styledComponents/Input'
import { useForm } from 'react-hook-form'

function NewSpent() {

  const {control, handleSubmit} = useForm();
  const onSubmit = data => console.log(data)

  return (
    <>
    <View>

            <Link to="/"><Text>Get Back</Text></Link>
        
    </View>

    <View>
        <Input control={control} name="Bitch"></Input>
        <Button title='submit' onPress={handleSubmit(onSubmit)}/>
    </View>
    </>
  )
}

export default NewSpent