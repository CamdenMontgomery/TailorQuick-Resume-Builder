import { Stack, Input } from '@chakra-ui/react'
import type { SectionType } from '../types/SectionType'
import type Education from '../interfaces/Education'
import type Experience from '../interfaces/Experience'
import type Project from '../interfaces/Project'
//import { FaSearch } from "react-icons/fa";




export default function SubsectionHeader({ section, data }: { section: SectionType, data: (Education | Experience | Project)[] }) {



    const handleSearchChange = (value: string) => {


        switch (section) {
            case 'EDUCATION': {
                const filteredKeepList: boolean[] = data.map((ed) => (ed as Education).school.toLowerCase().includes(value.toLowerCase())) //A list of boolean indicating whether the subsection would be kept should the list be filtered on the same criteria
                const index = filteredKeepList.indexOf(true)
                const scrollto = new CustomEvent('scrollto', { detail: { index: index } })
                window.dispatchEvent(scrollto)
                break;
            }
            case 'EXPERIENCE': {
                const filteredKeepList: boolean[] = data.map((ed) => (ed as Experience).position.toLowerCase().includes(value.toLowerCase())) //A list of boolean indicating whether the subsection would be kept should the list be filtered on the same criteria
                const index = filteredKeepList.indexOf(true)
                const scrollto = new CustomEvent('scrollto', { detail: { index: index } })
                window.dispatchEvent(scrollto)
                break;
            }
            case 'PROJECTS': {
                const filteredKeepList: boolean[] = data.map((ed) => (ed as Project).title.toLowerCase().includes(value.toLowerCase())) //A list of boolean indicating whether the subsection would be kept should the list be filtered on the same criteria
                const index = filteredKeepList.indexOf(true)
                const scrollto = new CustomEvent('scrollto', { detail: { index: index } })
                window.dispatchEvent(scrollto)
                break;
            }
            default: return;
        }

    }

    return (
        <Stack background="#f9f9f9" padding="3rem" direction="row">
            <Input borderColor="#dfdfdf" background="white" flex="1" onChange={(e) => { handleSearchChange(e.target.value) }} placeholder={`Seach ${section}...`} />
            {/*<Button background="black" color="white"><Text>Search</Text><FaSearch className="button-icon"/></Button>*/}
        </Stack>
    )
}