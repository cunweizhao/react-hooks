import React,{useState,useEffect} from 'react'
import axiso from 'axios'


const DogShow = () =>{
    const [url,setUrl] = useState('')
    const [loading,setLoading] = useState(false)
    const [fetch,setFetch] = useState(false)
    const style ={
        width:200
    }
    useEffect(() =>{
        setLoading(true)
        axiso.get('https://dog.ceo/api/breeds/image/random').then(result =>{
            setUrl(result.data.message)
            setLoading(false)
        })
    },[fetch])

    return(
        <>
            {loading ? <p>狗读取中</p>
            :<img src={url} alt="dog" style={style}/>}
            <button onClick={() => {setFetch(!fetch)}}>再看一图片</button>
            </>
    )
}
export default DogShow
