import React, { useState } from "react";
import styled from 'styled-components/native'
import {View, TextInput, Text, TouchableOpacity} from 'react-native'


export default function AddInput({submitHandler}) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
        <InputContainer>
          <Input placeholder="Add Task..." onChangeText={onChangeText} />
        </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
        }}
      >
        <Text>Submit</Text>
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 100px;
  border-radius: 10px;
`

const SubmitButton = styled.TouchableOpacity` 
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`
