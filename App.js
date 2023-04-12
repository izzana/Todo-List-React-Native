import React, { useState } from "react";
import AddInput from "./Components/AddInput";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import { View, StatusBar, FlatList, ImageBackground, StyleSheet, Dimensions } from "react-native";
import styled from 'styled-components/native'


export default function App() {
 const [data, setData] = useState([]);

 const submitHandler = (value) => {
  setData((prevTodo) => {
    return [
      {
        value: value,
        key: Math.random().toString(),
      },
      ...prevTodo,
    ];
  });
  }

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };
  
 return (
  <ImageBackground source={background} style={styles.backgroundImage}>
      <ComponentContainer>
        <View>
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="midnightblue" 
          />
        </View>
        <View>
          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem}/>
            )}
          />
        </View>
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </ComponentContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;