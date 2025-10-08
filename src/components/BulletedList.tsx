

export default function BulletedList({list = [], onChange}: {list : string[], onChange : (e : object) => void }){
    

    return (
        <>
        {list.map((bulletText, index) => (
            <input
                type="text"
                placeholder="add text here"
                value={bulletText}
                maxLength={50}
                className="bulleted-list-item"
                onChange={(e) => {list[index] = e.target.value; onChange(list)}}
            ></input>
        ))}
        <button type="button" onClick={() => {list.push(""); onChange(list)}}></button>
        </>
    )
}