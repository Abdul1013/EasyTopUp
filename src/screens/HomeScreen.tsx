import { Text, ScrollView } from 'react-native'
import React from 'react'
import Layout from '~/layout/Layout'

const HomeScreen = () => {
  return (
   <Layout scroll>
    <Text> Hello Idris</Text>
    <Text> Your Available balance is: </Text>
    <Text> #15,000</Text>
    <ScrollView>
      <Text> Announcements: Get extra 1gb data on 5gb of da.... </Text>
    </ScrollView>
   </Layout>
  )
}

export default HomeScreen