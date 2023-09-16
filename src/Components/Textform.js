import React,{useState} from 'react'

export default function Textform(props) {
    
    const upfunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lofunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const upchange =(event)=>{
        // console.log("Onchange"); // not necessary only for understand 
        setText(event.target.value);
    }
    
    
    const [text,setText]= useState('Enter Text Here');
    // text = "Wrong way to update"
    // setText("Enter The Text"); // this is the correct way to updatye in react 
  return (
    <form>
        <>
        <div className="container">
            <h2>{props.heading}</h2>

            <div className="mb-3">
                {/* I need only one box thats why i remove all things  */}
                <textarea className="form-control" id="myBox" onChange={upchange} value={text} cols="30" rows="10"></textarea>
                {/* by default value aa jaegii text ki */} 
            </div>

            <button type="submit" className="btn btn-primary mx-2" onClick={upfunc}>Convert To Uppercase</button>
            <button type="submit" className="btn btn-primary mx-2" onClick={lofunc}>Convert To Lowercase</button>
        </div>

        <div className="container my-2">
            <h2>Your Text has</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> character</p>
            <p><b>{0.008 * text.split(" ").length}</b> Min Read</p>

            <h2>Preview</h2>
            <p><i>{text}</i></p>
        </div>
        </>
</form>
  )
}
