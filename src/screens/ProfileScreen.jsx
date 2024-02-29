import { View, Text } from 'react-native'
import React from 'react'
import UserDetail from '../components/molecules/UserDetail'

const ProfileScreen = () => {
  return (
    <View className='pt-16 px-3'>
      <UserDetail/>
    </View>
  )
}

export default ProfileScreen