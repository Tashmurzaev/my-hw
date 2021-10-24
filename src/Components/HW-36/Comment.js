import React from "react";
import { useState } from "react/cjs/react.development";
import Form from "./Form";

const Comment = props => {
    const [save, setSave] = useState([]);

    const saveDataHundler = data => {
        setSave([...save, data ])
        console.log(data);
    }

    return (
        <div>
            <Form onSaveData={saveDataHundler}/>
            {
                save.map((el) => {
                    return (
                        <div>
                            <div>{el.name}</div>
                            <div>{el.comment}</div>
                            <div>{el.date}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comment;