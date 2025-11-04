import React, { useState } from "react";

const TagInput = ({tags}) => {
    const [tagData,setTagData] = useState(tags || [])

    const removeData = (idx) => {
        setTagData([...tagData.filter((_,index)=> index !== idx)])
    }

    const addTag = (item) => {
        if(item !== ''){
            console.log('--->'+ item)
            setTagData([...tagData,item])
            item = ''
        }
    }

    return(
<>  
        <div className="tag-input">
        <ul className="tags">
            {tagData.map((item,index) => (
                    <li  key={index} className="tag">
                        <span className="tag-title">{item}</span>
                        <span className="tag-close-icon"
                        onClick={()=>(removeData(index))}
                        >X</span>
                    </li>
            ))}
        </ul>

        <input type="text"
            placeholder="Enter to add a tag"
            onKeyUp={(e)=> e.key == 'Enter' ? addTag(e.currentTarget.value) : null}

        />
        </div>
   </>
    )
}

export default TagInput