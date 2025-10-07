import {Stack, Button, Input, Text} from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export default function SubsectionHeader(){
    return (
        <Stack background="#f9f9f9" padding="3rem" direction="row">
            <Input borderColor="#dfdfdf" background="white" flex="1" placeholder="Seach..."/>
            <Button background="black" color="white"><Text>Search</Text><FaSearch className="button-icon"/></Button>
        </Stack>
    )
}