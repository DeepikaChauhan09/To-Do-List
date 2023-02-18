import { useState,useEffect } from "react";


// import img1 from "./images/todologo.jpg";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import DeleteIcon from '@material-ui/icons/Delete';



function App()
 {
    
   
    const state=useState();

    const [input, setinput] = useState("")
    // const [display, setdisplay] = useState([])         //**** passing empty array in start. */
    
    const [display, setdisplay] = useState(getItemsfomLocalStorage())  
         // this one for getting from local storage

    function add(e)
    {
        console.log(e.target.value)
        setinput(e.target.value);
       
    }
    function additems()
    {
        if(input)
        {
     
    setdisplay( [...display, input] )
    setinput("")     
    // after adding data to list. remove that data from input field
                //  but this isnt working in code if you dont pu "value" attribute in input filed. the input field still have the last entered data shown. although the field internal becomes empty nd works well
    //   console.log({input});
}

    }

    const deleteitem=(id) =>
    {
        const updated= display.filter((elem,k) =>
        {
            return id!==k  ;
                
           
        })
        setdisplay(updated);
    }

    function deleteAll() {
        setdisplay([]);
        
    }

    useEffect(() => {
       
         localStorage.setItem('list', JSON.stringify(display));
      
    }, [display]);



    function getItemsfomLocalStorage()
    {
       let prevItems=localStorage.getItem('list');
    console.log(prevItems);
       if(prevItems)       //here prevItems==true => this ysntax will give error .
       {
           return JSON.parse(localStorage.getItem('list'));
       }
       else{
           return []
       }
   
   }
    




return(
        <>
        <div className="main-div">
        <div className="center-div">
        
       <br/>
        <h1>To-Do-List </h1>
        <br/>

      
        {/* <img src={img1} alt="i" /> */}

          <figure>
        <img src="./images/todologo.jpg" alt="logo"/>
        <figcaption> Add your List here</figcaption>
        </figure>
       
       <div className="add-items">
       <input type="text" 
     placeholder="✍️  Enter here..."
      
   value={input}
       onChange={add}
      />
       {/* <AddBoxRoundedIcon   onClick={additems} style={{fill: "white", height:"50px", width:"90px",  cursor: "pointer"}}  /> */}
       <AddBoxRoundedIcon   onClick={additems}  className="addbtn"  />
       
          
       </div>

  
       {/* style={{fill: "blue",paddingLeft:"0px", height:"30px", width:"40px"}} */}
    {/* to show items */}
   <div className="displayItems">
           {
            display.map((elem,ind) =>
            {
                return(
                    <>
                    <div className="eachItem">
                    <h2>{elem} </h2>
                    <DeleteIcon    className="deletebtn"
                    onClick={() => deleteitem(ind)}  />
            
      
                    
                  
                    </div>
 
                    </>
   )})
           }
           </div>


           {/* remove all items displayed */}
            <div className="del">
            <button onClick={deleteAll } className="deleteAllbtn">REMOVE ALL </button>

            </div>
            </div>
            </div>



 </>
    );
}

export {App};