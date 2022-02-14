import React ,{useState, useEffect} from "react"
import {View, Input, Button, Text, Flex, FlatList, Divider } from 'native-base'
import {ListItem} from "react-native-elements"
import Axios from "axios"


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc214cWp2eGFjbWxveGppY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NjYzODYsImV4cCI6MTk2MDE0MjM4Nn0.tTKjwvAAe_BNUVkOK97zP2FkcrxJrUtykEGVPkEramM"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc214cWp2eGFjbWxveGppY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NjYzODYsImV4cCI6MTk2MDE0MjM4Nn0.tTKjwvAAe_BNUVkOK97zP2FkcrxJrUtykEGVPkEramM"

const authAxios = Axios.create({
  headers :{
    Authorization : `Bearer ${token}`,
    apiKey : apiKey,
  }
})


export default function TodoApp(props){
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState ("")
  

  
  useEffect(() => {
    
    getTodos();
  }, []);

  
  const getTodos = () => {
    setIsLoading(true);
    authAxios
      .get('https://dqsmxqjvxacmloxjiclc.supabase.co/rest/v1/todo?select=*')
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert('Error Fetch Data');
        setIsLoading(false);
      });
  };

  const AddTodo = () =>{

    const data = {
      title : title
    }
    
    const body = JSON.stringify(data)
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    }
    setIsLoading(true);
    authAxios
      .post('https://dqsmxqjvxacmloxjiclc.supabase.co/rest/v1/todo', body, config)
      .then((res) => {
        alert("Add todo Succes")
        getTodos()
        setTitle("")
      })
      .catch(() => {
        alert('Error add Data');
        setIsLoading(false);
      });
  }



  //   Create Component List
  const _renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={() => props.navigation.navigate('DetailTodo', item)}
        key={item.id.toString()}
        bottomDivider
      >

        <ListItem.Content >
          <ListItem.Title h4 numberOfLines={1}>
            {item.title}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View flex={1} justifyContent="center" p={5} bg="secondary.500" >
       <Flex direction="row" mb="2.5" mt="1.5" _text={{
          color: "coolGray.800"
        }}>
            <Input placeholder="Add Todo" w="70%" color="white" value={title} onChangeText={(value)=> setTitle(value)} />
            <Button size="16" bg="secondary.900" marginLeft={5} onPress={AddTodo}>
              Add
            </Button>
          </Flex>
          <Divider />
          <Text textAlign="center" color="white" fontSize={20} mt={3} mb={1}>Todo List</Text>
      <View >
        <FlatList
          data={todos}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={isLoading}
          onRefresh={getTodos}
        />
      </View>
    </View>
  );
}
