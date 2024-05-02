import React, { useState } from "react";
import ConsumerService from "../service/ConsumerService";
import { useSearchParams } from "react-router-dom";

export default function Testdata() {

    const[dataa, setDataa] = useState("");

    const handleData =() =>{

        ConsumerService.
        getHello().
        then((resp)=>{
            console.log(resp.data);
            setDataa(resp.data);

        })
        .catch((error)=>{
            console.log("Error" +error);
        })

    }
  return <div>Data Test
    <button className="mt-5"
    onClick={handleData}>
        Click
    </button>
  </div>;
}
