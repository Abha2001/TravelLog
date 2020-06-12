import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {addEntry} from '../api/placesAPI';

const NewPostForm=({latitude, longitude, onClose})=>{
    const {register, handleSubmit}=useForm();
    const [error, setError]= useState(null);

    const onSubmit=async(data)=>
    {
        console.log("hey");
        data.latitude=latitude;
        data.longitude=longitude;
        console.log(data);
        addEntry(data)
        .then((created)=>{
            console.log("created",created);
            onClose();
        })
        .catch((error)=>setError({
            error
        }));
    }

    return(
        <div className="form">
            {error?<div className="error">{error.error}</div>:null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input ref={register} type="text" name="name" placeholder="Name of place" required/>
                <label htmlFor="image">image</label>
                <input ref={register} type="text" name="image" placeholder="Put image url"/>
                <label htmlFor="comment">Comment</label>
                <input ref={register} type="textarea" name="comment" placeholder="Reviews about the place" required/>
                <label htmlFor="dateOfVisit">Date OF Visit</label>
                <input ref={register} type="date" name="dateOfVisit" required/>
                <label htmlFor="rating">Rating</label>
                <input ref={register} type="number" name="rating" placeholder="Rating on a scale of 1-5"required/>
                <input type="submit" value="Add Entry"/>
            </form>
        </div>
    )
}

export default NewPostForm;