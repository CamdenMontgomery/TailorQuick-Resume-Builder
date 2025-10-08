import { Button, HStack, Input, List } from "@chakra-ui/react";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";



/**
 * List of bullet points which can be written too. Initially shows one bullet. Add another blank bullet when previous bullet is written to. Remove any bullet made blank that is not the last bullet in the list
 *
 * @component
 *
 * @param {Object} props - React profile
 * @param {string[]} props.bullets - Array of bullet text. Each index is a seperate bullet
 * @param {(string[]) => void} props.callback - A callback to run whenever a bullet gets changed. 
 * @returns {JSX.Element} Rendered tree view component
 */
export default function EditableBulletedList({bullets,callback} : {bullets: string[], callback : (bullets : string[]) => void}) {

    const handleChange = (value : string, index : number) => {
        bullets[index] = value; 
        if (bullets[index] == "") bullets.splice(index,1)
        if (bullets[bullets.length - 1] != "") bullets.push("")
        callback(bullets)
    }

    const removeBullet = (index: number) => {
        bullets.splice(index, 1)
        callback(bullets)
    }

    //Check on mount for empty bullet list, ensure at least one blank bullet exists for the user to write to
    useEffect(() => {if (bullets.length == 0) bullets.push("")})

    return (
        <List.Root>
            {bullets.map((bullet, index) => (
                <List.Item className="bulleted-list-item">
                    <HStack gap="0">
                    <Input className="bulleted-list-input" placeholder="Text Here" value={bullet} onChange={(e) => handleChange(e.target.value, index)}></Input>
                    { index != bullets.length - 1 && <Button className="bulleted-list-button" onClick={() => {removeBullet(index)}}><RxCross2 /></Button> }
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    )
}