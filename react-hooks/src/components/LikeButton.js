import React, {useEffect, useState} from 'react'
import useMousePosition from "../hooks/useMousePosition";



const LikeButton = () =>{
    const position = useMousePosition()
    const [like, setLike] = useState(0)
    const [on,setOn] = useState(true)
    //dom更新之后调用
    useEffect( () =>{
        document.title = `点击了${like}次`
    })
    return (
        <>
            <p>{position.y}</p>
        <button onClick ={ () =>{setLike(like +1 )}}>
            {like} 点赞
        </button>
        <button onClick={() =>{setOn(!on)}}>
            {on ?'On':'Off'}
        </button>
            </>
    )
}
export default LikeButton
