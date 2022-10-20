import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Card from "./Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ContentForm from "./ContentForm"

// Produce content form (username, photo, comment)





// Produce toastr for successful upload
// Function to generate content cards from content form)
// Function to count likes on content 
// Function to add stars according to number of likes
// Function to order content by popularity
// Function to add comments to content cards

function App() { 
  const [values, setValues] = useState ([{Title:"", Text: ""}])

  const [userName, setUserName] = useState([])
  const [comment, setComment] = useState([])






  useEffect (() => {
    document.title = "Rate My Plate"
  }, [])

  function handleNameChange(event){
    // const userName = userNameRef.current.value
    // const userComment = userCommentRefs.current.value
    // console.log(userName, userComment)
    // console.log(e.target.value)
    setUserName(event)
  }

  function handleCommentChange(event) {
    setComment(event)
  }

  function uploadContentForm(value) {
    // this value is the result of passing said value up from the child component
    setValues((prevValue) => {
      let newState = [...prevValue, {Title: userName, Text: comment}];
      
      localStorage.setItem("list", JSON.stringify(newState));
      return newState;


    })

  

  }


  
// Store the values from input in Local storage
//Create storage (called storedForms.js) for values to pass (using props) completed forms to storage
//Call Stored values from storage on page


 //import uploadContentForm(Value) from "App.js"
 
 
// Create like button to order stored forms/cards in order of popularity





  useEffect(() => {
    const stringFromLS = localStorage.getItem("list");
    setValues(JSON.parse(stringFromLS) || []);
  }, []);




  return (
    <> 
      <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <h1>Rate My Plate</h1>
      </div>    
    
      {values?.map(item => {return <Card Title={item.Title} Text={item.Text}/>})}  
  
    
    <form>
    <label for="username">Username</label>
        <input id="username" type="text" onChange={(e) => handleNameChange(e.target.value)}/>
        <label for="imgURL">Enter Image URL</label>
        <input type="text" id="imgURL" className="formInputFields"></input>

        
        <label for="Comment">Comment</label>
        <input type="text" id="Comment" className="formInputFields" onChange={(e) => handleCommentChange(e.target.value)} />
        
        <label for="submit"></label>
        <button onClick={()=> uploadContentForm()} type="submit">Submit</button> 
    
        


    </form>

{/* <button onClick={()=> localStorage.setItem("list", JSON.stringify([]))}>Clear All</button> */}


    {/* <ContentForm></ContentForm> */}
 
 
    {/* <Card Title="testing"/>
    <Card Title="testing 2"/> */}
    </>
  );
}

export default App;
