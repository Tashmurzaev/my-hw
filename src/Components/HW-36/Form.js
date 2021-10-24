import React, {useState} from "react";

const Form = props => {

    const [name , setName] = useState('')
    const [comment , setComment] = useState('')
    const [date , setDate] = useState('')

    const nameHandler = e => {
        setName(e.target.value)
    }

    const commentHandler = e => {
        setComment(e.target.value)
    }

    const dateHandler = e => {
        setDate(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            name , 
            comment,
            date
            // name: name ,
            // comment: comment,
            // date: new Date(date)
        }
        // console.log(data);
        props.onSaveData(data);

        setName('');
        setComment('');
        setDate('');
    }


    return(
        <form onSubmit={submitHandler}>
            <h3>Name</h3>
            <input 
                type="text" 
                onChange={nameHandler} 
                value={name}
            />
            <h3>Comment</h3>
            <input 
                type="text" 
                onChange={commentHandler} 
                value={comment}
            />
            <h3>Date</h3>
            <input 
                type="datetime-local" 
                onChange={dateHandler} 
                value={date}
            />
            <button type="submit">Add Comment</button>
        </form>
    )
}

export default Form;