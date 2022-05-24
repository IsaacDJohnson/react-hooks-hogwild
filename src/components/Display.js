import React, {useState} from 'react'

function Display({hogs}){

    const {name, specialty, weight, award, image, greased} = hogs

    const [data, setData] = useState(
        <div>
        </div>
    )

    function handleClick(){
        setData(
        <div>
            <p>specialty: {specialty}</p>
            <p>weight: {weight}</p>
            <p>award: {award}</p>
        </div>
        )
        console.log(award)
    }

    return (
        <div className={'ui eight wide column'}>
            <h1>{name}</h1>
            <img src={image} alt={name} height={'150px'} onClick={handleClick}/>
            <div>{data}</div>
        </div>
    )
}

export default Display;