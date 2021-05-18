import React from 'react'

const Counter = (props,{...obj}) => {
    return (
        <div>
        {/* <h1>count {obj.count}</h1> */}
        <h1>name {obj.title}</h1>
        <h1>age {obj.age}</h1>
        <h1>age {props.count}</h1>
        </div>
    )
}

export default Counter
