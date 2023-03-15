//variable targeting all elements with class of fa-trash
const deleteBtn = document.querySelectorAll('.fa-trash')

const item = document.querySelectorAll('.item span')//variable that targets all elements with the item class that are in a span tag 
const itemCompleted = document.querySelectorAll('.item span.completed')//variable targeting elements the class of item that also have a span with span of completed 

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})//creating an array from the delete button and iterating through the array, adding an event listener that listens for a click and runs the deleteItem function 

Array.from(item).forEach((element)=>{//creating an array from the item and looping it 
    element.addEventListener('click', markComplete)//adding an event listener that listens for a click and runs the markComplete function 
})

Array.from(itemCompleted).forEach((element)=>{//create an array from itemCompleted variable and loop through it
    element.addEventListener('click', markUnComplete)//add an event listener that listens for a clikc and runs the markUncomplete function
})



async function deleteItem(){//declaring an async function
    const itemText = this.parentNode.childNodes[1].innerText// grab the innertext of the specified element asnd assign it to a variable
    try{//starting a catch blocka
        //creatinc a variable that holds the data recieved from the fetch API(delete item route)
        const response = await fetch('deleteItem', {
            method: 'delete',// setting method for the route
            //declaring the type of content expected
            headers: {'Content-Type': 'application/json'},
            // declaring the body propety od the response and turning it to a string
            body: JSON.stringify({
                //setting the body to the innerText of the list item and naming it itemFromJS
              'itemFromJS': itemText
            })
          })
          //declaring the variable that holds the converted json response being waited on
        const data = await response.json()
        //logging response to console
        console.log(data)
        //reloads the page to display the updated page
        location.reload()

    }catch(err){//starting the catch block
        //if an error occurs pas into the catch block
        //log error in the console
        console.log(err)
    }
}

async function markComplete(){//declaring async function
    //assigning variable that holds inner text of list item
    const itemText = this.parentNode.childNodes[1].innerText
    try{//starting a try block
        //declaring a variable and waiting a fetch on the mark complete route
        const response = await fetch('markComplete', {
            //setting the method on the route
            method: 'put',
             //declaring the type of content expected
            headers: {'Content-Type': 'application/json'},
            // declaring the body propety od the response and turning it to a string
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
          //declaring the variable that holds the converted json response being waited on
        const data = await response.json()
       //logging response to console
        console.log(data)
        //reloads the page to display the updated page
        location.reload()

    }catch(err){//starting the catch block
    //if an error occurs pas into the catch block
    //log error in the console
        console.log(err)
    }
}
//declaring an async function
async function markUnComplete(){
     //assigning variable that holds inner text of list item
    const itemText = this.parentNode.childNodes[1].innerText
    try{//starting a try block
        //declaring a variable and waiting a fetch on the mark uncomplete route
        const response = await fetch
        ('markUnComplete', {
             //setting the method on the route
            method: 'put',
             //declaring the type of content expected
            headers: {'Content-Type': 'application/json'},
             // declaring the body propety od the response and turning it to a string
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
          //declaring the variable that holds the converted json response being waited on
        const data = await response.json()
          //logging response to console
        console.log(data)
        //reloads the page to display the updated page
        location.reload()

    }catch(err){//starting the catch block
        //if an error occurs pas into the catch block
        //log error in the console
        console.log(err)
    }
}