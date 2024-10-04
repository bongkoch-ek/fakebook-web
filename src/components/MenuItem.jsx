import React from 'react'

export default function MenuItem(props) {
    const { icon: Icon, text, ...restProps } = props
    return (
        <div>
            <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20 ">
                <Icon {...restProps}/>
                {text}
            </button>
        </div>
    )
}
