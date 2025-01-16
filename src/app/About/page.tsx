import {data} from "../../../public/Images/images.js"

import Header from "@/Components/Header"
export default function About(){
console.log(data)
    return(
        <>
        <Header  bgColor="bg-transparent"/>
        <h1>
{data?.map((item)=>(
    <h1>{item.name}</h1>
))}
        </h1>
        </>
    )
}