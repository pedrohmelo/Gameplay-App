import React from 'react';
import {
  Text, 
  View, 
  Image,
  StatusBar
} from 'react-native';
import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`}
            Suas Jogatinas {`\n`}
            Facilmente
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
        </View>
    </View>
  );
}