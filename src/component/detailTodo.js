import {View, Text, Flex, Button, Divider, Input} from 'native-base'
import { useState } from 'react'
import  Axios  from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc214cWp2eGFjbWxveGppY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NjYzODYsImV4cCI6MTk2MDE0MjM4Nn0.tTKjwvAAe_BNUVkOK97zP2FkcrxJrUtykEGVPkEramM"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc214cWp2eGFjbWxveGppY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1NjYzODYsImV4cCI6MTk2MDE0MjM4Nn0.tTKjwvAAe_BNUVkOK97zP2FkcrxJrUtykEGVPkEramM"

const authAxios = Axios.create({
  headers :{
    Authorization : `Bearer ${token}`,
    apiKey : apiKey,
  }
})

const DetailTodo = (props) =>{

    const [isUpdate, setIsupdate] = useState(false)
    const {id, title, description} = props.route.params
    const [todoTitle,setTodotitle ] = useState("")
    const [todoDesc,setTodoDesc] = useState("")

    const deleteTodo = () =>{
      authAxios
      .delete(`https://dqsmxqjvxacmloxjiclc.supabase.co/rest/v1/todo?id=eq.${id}`)
      .then((res) => {
        alert("Delete Todo Succes")
        props.navigation.navigate("TodoApp")
      })
      .catch(() => {
        alert('Error Delete Todo');
        setIsLoading(false);
      });
    }

    const updateTodo = () =>{
      setIsupdate(false)
      const data = {
        title : todoTitle,
        description : todoDesc
      }
      const body = JSON.stringify(data)

      const config ={
        headers : {
          "Content-Type" : "application/json",
          "Prefer" : "return=representation"
        }
      }
      authAxios.patch(`https://dqsmxqjvxacmloxjiclc.supabase.co/rest/v1/todo?id=eq.${id}`, body, config).then((res)=>{
        alert("Update Todo Succes")
        props.navigation.navigate("TodoApp")
      }).catch(()=>{
        alert("Error Update Todo")
      })
      
    }

    return (
        <View flex={1} justifyContent="center" bg="secondary.500" >
          <Text h={30} style={{fontSize:20, fontWeight:"bold", textAlign:"center", color:"white"}}>Todo Detail</Text>
          <View>
          <Flex justifyContent="flex-end" direction="row" mb="2.5" mt="1.5" _text={{
          color: "coolGray.800"
        }}>
            {isUpdate === true ? <></>:<Button h={10} onPress={()=> setIsupdate(true)}>
              Update
            </Button>}
            {isUpdate === true ? <></>:<Button size="16" bg="secondary.900" marginLeft={3} h={10} w={10} marginRight={3} onPress={deleteTodo} >
              X
            </Button>}
          </Flex>
          </View>
          <Text h2 style={{ marginTop: 20, fontWeight: 'bold', fontSize:15}}>Todo Name</Text>
          <Text h2 style={{ marginTop: 20, fontWeight: 'bold', fontSize:20, color:"white"}}>
            {title}
          </Text>
          <Text h2 style={{ marginTop: 20, fontWeight: 'bold', fontSize:15}}>Description</Text>
          {description === null ? <Text mb={4} style={{ marginTop: 20, fontSize:20, color:"white"}}>Please Update description Todo {title}</Text> :<Text style={{ marginTop: 20, fontSize:20, color:"white"}}>{description}</Text>}
          <Divider/>
          {isUpdate === true ? <View marginTop={10} p={5}>
          <Text h={30} style={{fontSize:20, fontWeight:"bold", textAlign:"center", color:"white"}}>Update Todo</Text>
            <Input value={todoTitle} onChangeText={(value) => setTodotitle(value)} color="white" placeholder='Todo Name'/>
            <Input value={todoDesc} onChangeText={(value) => setTodoDesc(value)} color="white" placeholder='Description' mt={2}/>
            <Button mt={2} onPress={updateTodo}>Update</Button>
          </View>:<></>}
          </View>
    )
}

export default DetailTodo