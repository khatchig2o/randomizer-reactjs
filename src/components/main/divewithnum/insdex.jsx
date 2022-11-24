import React from "react";

export default function Divewithnum({number,nums,deleteitem}){

    return<div className={'number-div'}>
        <button className={"div-exit"} onClick={()=> deleteitem(nums)}>X</button>
       <div className={"center-text G-flex"}>
           <p>
               {number.number}
           </p>
       </div>
    </div>
}