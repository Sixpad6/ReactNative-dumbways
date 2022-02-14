import React ,{useState}from "react"
import { Box,Flex ,Text, Button,Input, Heading, VStack } from "native-base"


export default function Calculator(){

  const [Nilai, setNilai] = useState(0)

  const inputNilai = (value) =>{
    if(Nilai === 0 ){
      setNilai(value)
    }else{
      setNilai(Nilai + '' +value)
    }
  }

  const hitungNilai = () =>{
    setNilai(eval(Nilai))

  }
  
  return(
    <Box bg="secondary.500" flex={1} padding={10}>
      <Heading color="white" marginBottom={5} marginTop={5}>Display</Heading>
      <Box backgroundColor="#aba9a9" borderRadius={10}>
          <Text   padding={5} fontSize={30} color="white">{Nilai}</Text>
      </Box>
      <Flex direction="row" mb="2.5" mt="4" _text={{
          color: "white"
        }}>
            <Button mr={2} borderRadius={10} FontColor="white" size="16" bg="secondary.700" onPress={()=>inputNilai(1)} >
              1
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.700" onPress={()=>inputNilai(2)}>
              2
            </Button>
            <Button mr={2} borderRadius={10}  bg="secondary.700" size="16" onPress={()=>inputNilai(3)}>
              3
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.900" onPress={()=>inputNilai("+")}>
              +
            </Button>
          </Flex>
          <Flex direction="row" mb="2.5"  _text={{
          color: "white"
        }}>
            <Button mr={2} borderRadius={10} FontColor="white" size="16" bg="secondary.700" onPress={()=>inputNilai(4)}>
              4
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.700" onPress={()=>inputNilai(5)}>
              5
            </Button>
            <Button mr={2} borderRadius={10}  bg="secondary.700" size="16" onPress={()=>inputNilai(6)}>
              6
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.900" onPress={()=>inputNilai("-")}>
              -
            </Button>
          </Flex>
          <Flex direction="row" mb="2.5"  _text={{
          color: "white"
        }}>
            <Button mr={2} borderRadius={10} FontColor="white" size="16" bg="secondary.700" onPress={()=>inputNilai(7)}>
              7
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.700" onPress={()=>inputNilai(8)}>
              8
            </Button>
            <Button mr={2} borderRadius={10}  bg="secondary.700" size="16" onPress={()=>inputNilai(9)}>
              9
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.900" onPress={()=>inputNilai("/")}>
              /
            </Button>
          </Flex>
          <Flex direction="row" mb="2.5" _text={{
          color: "white"
        }}>
            <Button mr={2} borderRadius={10} FontColor="white" size="16" bg="secondary.900" onPress={()=>setNilai(0)}>
              C
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.700" onPress={()=>inputNilai(0)}>
              0
            </Button>
            <Button mr={2} borderRadius={10}  bg="secondary.900" size="16" onPress={()=>inputNilai("*")}>
              *
            </Button>
            <Button mr={2} borderRadius={10}  size="16" bg="secondary.900" onPress={()=> hitungNilai()}>
              =
            </Button>
          </Flex>

    </Box>
  )
}
