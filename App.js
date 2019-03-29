/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Draggable from 'react-native-draggable';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const messages = ['筋トレ', '勉強', 'カップ麺作るカップ麺作るカップ麺作る'];

    return (
        <View style={styles.container}>
            {
                messages.map((message ,idx) => {
                    return (
                        <Draggable
                            key={ idx }
                            reverse={ false }
                            renderColor='gray'
                            renderShape='square'
                            offsetX={ 0 }
                            offsetY={ 0 }
                            renderText={ message }
                            renderSize={ 50 }
                        />
                    );
                })
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
