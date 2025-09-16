/*import { useEffect, useRef, useState } from "react"
import StorageService from "../services/storageService"

export default function ApiKeyIntake(){
    
    const [key, setKey] = useState<string>("")
    const inputRef = useRef(null)

    useEffect(() => {
        StorageService.getApiKey().then((res) => {
            setKey(res)
        })
    }, [])

    const onsubmit = () => {
        if (inputRef.current && inputRef.current)
        StorageService.storeApiKey(inputRef.current)
    console.log(inputRef.current)
    }
    
    return (
        <div style={styles.container}>
            <span></span>
            <h3></h3>
            <input ref={inputRef} type="text" value={key}></input>
            <button onClick={onsubmit}></button>
        </div>
    )
}

const styles = {
    container: {

    }
}*/