import React from 'react';


export default function ListItem({list, setList, i, description }) {

    function updateStatus(id){
        let item = list.filter((item) => item.id === id);
        
        const itemToAdd = {
            id: item[0].id,
            description: item[0].description,
            done: true
        }
        
        setList(list.filter(item => item.id !== id))

        setList( (list) => [...list, itemToAdd ])
      }

    return (
        <li key={i} >
            <input type="checkbox" data-testid="input-checkbox" id={description} onChange={()=> updateStatus(i)}  />
            <label htmlFor={description}>{description}</label>
        </li>
    )
};
