import {Stack, Button, Input} from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export default function SubsectionHeader(){
    return (
        <Stack background="white" padding="1rem" direction="row">
            <Input flex="1" placeholder="Seach..."/>
            <Button aspectRatio="1" background="black" color="white"><FaSearch/></Button>
        </Stack>
    )
}