import React,{useState} from 'react'

const LikeButton = () =>{
    const [like, setLike] = useState(0)
    const [on,setOn] = useState(true)
    return (
        <>
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
