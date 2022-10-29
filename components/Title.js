import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <Text style={[styles.title, props.style]}>{props.children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
})