

export default function BulletedList({list = [], onChange}: {list : string[], onChange : (data : object) => void }){
    

    return (
        <>
        {list.map((bulletText, index) => (
            <input
                type="text"
                placeholder="add text here"
                value={bulletText}
                maxLength={50}
                onChange={(e) => {list[index] = e.target.value; onChange(list)}}
            ></input>
        ))}
        <button type="button" onClick={() => {list.push(""); onChange(list)}}></button>
        </>
    )
}