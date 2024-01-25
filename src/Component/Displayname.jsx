import React, { useState } from "react";

const Displayname = () => {
    const[first, setFirst] = useState("")
    const[last, setLast] = useState("")
    const [firstlast, setFirstLast] = useState("")
    const [submit, setSubmit] = useState(false)
    

//   console.log("first=", first, "last=", last);

    const handleSubmit = () =>{
        const flname = `${first} ${last}`
        setFirstLast(flname)
        
    }
    // console.log(firstlast);
  return (
    <div className="font-serif p-5">
      <h1 className="font-bold text-5xl">Full Name Display</h1>
      <form >
        <br />
        <label >
          First Name: <input value={first} onChange={(e)=> setFirst(e.target.value)}  className="outline" type="text" required />
        </label>
        <br />
        <br />
        <label >
          Last Name: <input value={last} onChange={(eve)=> setLast(eve.target.value)} className="outline" type="text" required />
        </label>
        <br />
        <br />
        <button onClick={(e)=> {
            e.preventDefault()
            handleSubmit()
            setSubmit(true)
        }}  className="outline ml-8 w-20">Submit</button>
      </form>
      <br />
      {(submit ? (
        <p>Full Name: <span>{firstlast}</span></p>
      ) : (""))}
    </div>
  );
};

export default Displayname;
