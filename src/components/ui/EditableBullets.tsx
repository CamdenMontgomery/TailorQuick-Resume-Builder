import { Button, Input, List } from "@chakra-ui/react";

export default function EditableBulletedList({bullets,onChange} : {bullets: string[], onChange : (bullets : string[]) => void}) {

    return (
        <List.Root>
            {bullets.map((bullet, index) => (
                <List.Item><Input placeholder="Text Here" value={bullet} onChange={(e) => {bullets[index] = e.target.value; onChange(bullets)}}></Input></List.Item>
            ))}
            <List.Item><Button onClick={(_e) => onChange([...bullets, ""])}>+ Add Bullet</Button></List.Item>
        </List.Root>
    )
}