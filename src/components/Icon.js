import React from 'react'
import { ReactComponent as Facebook } from "../Icons/facebook-f.svg"


const Icon = ({link, icon}) => {
    return (
        <div className="flex justify-center items-center bg-mainColor w-fit h-fit p-3 rounded-full">
            <a href={link} target="_blank">{icon}</a>
        </div>
    )
}

export default Icon
