import React from 'react'
import PropTypes from 'prop-types'

import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { ToggleIcon } from './'
import { checkSource } from './utils'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Orientation from 'react-native-orientation'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25
  },
  back: {
    marginLeft: 10,
    height: 25,
    width: 25
  }
})

const TopBar = (props) => {
  const {logo, more, title, theme, onMorePress,navigation } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0)']} style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.back} activeOpacity={0.5} onPress={() => {
          Orientation.unlockAllOrientations();
          navigation.goBack(null)
        }}>
          <Ionicons name='ios-arrow-back' size={25} color='white' />
        </TouchableOpacity>
        {logo && <Image style={styles.logo} resizeMode='contain' {...checkSource(logo)} />}
        <Text style={[styles.title, { color: theme.title }]} numberOfLines={1} ellipsizeMode='tail'>
          {title}
        </Text>
        {more &&
                                   <ToggleIcon
                                     style={styles.more}
                                     onPress={() => onMorePress()}
                                     paddingRight
                                     iconOff="more-horiz"
                                     iconOn="more-horiz"
                                     theme={theme.more}
                                     size={25}
                                   />}
      </View>
    </LinearGradient>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export { TopBar }
