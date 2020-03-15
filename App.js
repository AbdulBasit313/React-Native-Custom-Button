import React from 'react';
import { View } from 'react-native';
import Button from './src/components/Button';
import Spacer from './src/components/Spacer';
import Center from './src/components/Center';


const App = () => {

  const onPress = () => {
    alert('clicked')
  }

  return (
    <Center>
      <Button
        text='Submit'
        type='outlined'
        bordered
        size='small'
        onPress={onPress}
      />
      <Spacer />
      <Button
        text='Submit'
        type='outlined'
        bordered
        onPress={onPress}
      />
      <Spacer />
      <Button
        text='Submit'
        type='outlined'
        onPress={onPress}
      />
      <Spacer />
      <Button
        text='Submit'
        size='small'
        onPress={onPress}
      />
      <Spacer />
      <Button
        text='Submit'
        bordered
        onPress={onPress}
      />
      <Spacer />
      <Button
        text='Submit'
        onPress={onPress}
      />
    </Center>
  );
};


export default App
