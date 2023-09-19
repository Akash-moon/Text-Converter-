import React,{useState} from 'react'

export default function Textform(props) {
    
    const upfunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Successfully Changes to uppercase","success");
    }
    const lofunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showalert("Successfully Changes to lowercase","success");
    }

    const clearfunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let newText = '';
        setText(newText);
        props.showalert("Successfully Cleared the text","success");
    }

    const speakfunc =()=>{
        // console.log("Uppercase was clicked"); // console pr show hoga yeh
            //    props.settext(props.text.toUpperCase());
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        // setText(newText);
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
        <div className="container" style = {{color : props.mode === 'light' ? '#042b55' : 'white'} }>
            <h2>{props.heading}</h2>

            <div className="mb-3">
                {/* I need only one box thats why i remove all things  */}
                <textarea className="form-control" id="myBox" onChange={upchange} value={text} style= {{backgroundColor : props.mode === 'light' ? 'white' : '#042b55',color:props.mode === 'light' ? '#110bba' : 'white'}} cols="25" rows="10"></textarea>
                {/* by default value aa jaegii text ki */} 
            </div>

            <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-2 my-2" onClick={upfunc}>Convert To Uppercase</button>
            <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-2 my-2" onClick={lofunc}>Convert To Lowercase</button>
            <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-2 my-2" onClick={clearfunc}>Tap to Clear</button>
            <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-2 my-2" onClick={speakfunc}>Tap to Speak </button>
        </div>

        <div className="container my-2" style = {{color : props.mode === 'light' ? '#042b55' : 'white'} }>
            <h2>Your Text has</h2>
            <p><b>{text.split(/\s+/).filter((x)=>{return x.length !== 0}).length}</b> words and <b>{text.length}</b> character</p>
            {/* (/\s+/) ---> yeh regex hai \s = means white space + next line  */}
            <p><b>{0.008 * text.split(" ").filter((x)=>{return x.length !== 0}).length}</b> Min Read</p>

            <h2>Preview</h2>
            <p><i>{text}</i></p>
        </div>
        </>
</form>
  )
}
