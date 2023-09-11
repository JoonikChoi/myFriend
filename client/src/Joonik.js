import axios from "axios";
import React, { useEffect, useState } from "react";

const fetchMyServer = async () => {


    // const response = await fetch("http://localhost:3030", {
    //   method: "GET",
    // });

    const response = await fetch("http://localhost:3030", { // 서버에게 요청을 함
      method: "POST",
      body: JSON.stringify({
        id : '경민',
        password : '1234',
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json(); // 서버로부터 응답을 받음
    console.log(data);
}

function Joonik() {

    useEffect(() => {
        fetchMyServer();
    }, []);


    return (
        <div>
            <h1> I'm Joonik Page </h1>
        </div>
    );
}

export default Joonik;
