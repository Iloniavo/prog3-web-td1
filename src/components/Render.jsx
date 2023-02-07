
import React from 'react';
import { useState } from 'react';
import Input from './Input';
import List from './List';
import ListItem from './ListItem';

export default function Render() {
    const [ list, setList ] = useState([]);    
    const [ description, setDescription ] = useState("")
    const [ id, setId ] = useState(0);


    function checkInput(e){
        e.preventDefault()
        description === "" ? alert("Check your input") : addItem(e)
    }

    function addItem(e){
        e.preventDefault()
       
        let item = {
            id: id,
            description: description,
            done: false
        }
        console.table("all in one "+item);
        setList([...list, item])
        setDescription("");
        setId(id + 1)
    
    }

    return (
        <div>

            <form action="" onSubmit={(e) => checkInput(e)} >
                <Input description={description} setDescription={setDescription} />
                <button type='submit' data-testid="create-button" >Ajouter</button>
            
            </form>
            <List title={"To do :"}  listTestId= "todo-content" headTestId={"todo-header"}>
                    {list.filter((item) => item.done === false ).map((item, i) => 
                        <ListItem key={ `${item.description} - ${item.id}` } list={list} setList={setList} i={item.id} description={item.description}/>
                    )}
            </List> 
            <List title={ "Done :" } listTestId="done-content" headTestId={"done-header"} >
                 {list.filter(item => item.done === true).map((item, index) => <li key={index} >{item.description}</li>)}
            </List>           
        
        </div>
    )

};
