import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9,
    padding: 30
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
  <TouchableOpacity
      onPress={() => props.onPrevious()}
    >
      <Icons
        style={styles.playButton}
        name={props.paused ? 'rotate-left' : 'rotate-left'}
        color={props.theme}
        size={60}
      />
    </TouchableOpacity>
    
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <Icons
        style={styles.playButton}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
        color={props.theme}
        size={60}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.onNext()} 
    >
      <Icons
        style={styles.playButton}
        name={props.paused ? 'rotate-right' : 'rotate-right'}
        color={props.theme}
        size={60}
      />
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }
