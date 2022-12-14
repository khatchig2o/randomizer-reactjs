import React, {useState} from "react";
import Divewithnum from "./divewithnum/insdex";

export default function Main(){
    const [divs,setdiv]=useState([])
    const [view,setView]=useState("none")
    const [numbers,setnumbers]=useState()

    const random=()=>{
        let x= Math.floor(Math.random()*999 +1)
        setdiv(divs=>[...divs,x])
    }

    const deleteitem=(nums)=>{
        setView("block")
        setnumbers(nums)
    }
    const no=()=>{
        setView("none")
        setnumbers('')
    }
    const yes=()=>{
        //splice or filter both work
        divs.splice(numbers,1)
        // setdiv(prevdev => prevdev.filter((elemrn, i) => i !== numbers))

        setView("none")
        setnumbers('')
    }
    const  deleteall=()=>{
        setdiv([])
    }

    return <>
        <header>
            <button onClick={random}>
                add div
            </button>
            <button onClick={deleteall}>Delete all divs</button>
        </header>
        <section className="G-flex">
            <div className={"main-div G-flex-wrap parent"}>
                {divs.map((number,index)=>(
                    <Divewithnum
                        number={number}
                        key={index}
                        nums={index}
                        deleteitem={deleteitem}
                    />
                ))}
            </div>
            <div className={"side-div"}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={{display :view }} className={"dleting-div"}>
                <p>Are you sure you want to delete this num ?</p>
                <button onClick={yes}>yes</button>
                <button onClick={no}>no</button>
            </div>
        </section>


    </>
}