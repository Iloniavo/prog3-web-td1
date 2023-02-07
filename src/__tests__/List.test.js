import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react";
import List from "../components/List";
import Render from "../components/Render";

describe("Test list component", function (){

    it("Empty list", function (){
        const component = renderer.create(
            <List title={"To do"} headTestId={"todo-header"}/>
        )
             
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        render( <List title={"To do"} headTestId={"todo-header"} /> )
     
        expect(screen.getByTestId("todo-header")).toHaveTextContent("To do")    
    }) 
     
    it("Render to do list", function (){
        const { getByTestId } = render(
            <List title={"To do"} listTestId={"todo-content"}>
                <li>desc</li>
            </List>
        )
        expect(getByTestId("todo-content")).toHaveTextContent("desc")

    })
    
    it("Render done list", function(){
        const { getByTestId } = render(
            <List title={"Done"} listTestId={"done-content"}>
                <li>desc</li>
            </List>
        )
        expect(getByTestId("done-content")).toHaveTextContent("desc")
    })

    it("add content to to do list", function (){
        const component = render(<Render/>)

        const inputElement = component.getByTestId("input")
        const createButton = component.getByTestId("create-button")

        fireEvent.change(inputElement, { target : { value : "desc" } })
        fireEvent.submit(createButton);
 
        const todo = component.getAllByTestId("todo-content")
        const todoFirstElement = todo[0];

        expect(todoFirstElement.textContent).toBe("desc")

        expect(todo[0]).toBeInTheDocument();

    })

}) 

