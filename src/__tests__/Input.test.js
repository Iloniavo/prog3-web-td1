import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Input from "../components/Input";
import {render, screen} from "@testing-library/react";

it("Render input in the screen", function(){

    const setDescriptionMock = jest.fn()
    function descriptionMock(){
        return "description"
    }
    const component = renderer.create(
        <Input setDescription={setDescriptionMock} description={descriptionMock}/>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    render(
        <Input setDescription={setDescriptionMock} description={descriptionMock}/>
    )
    
    const inputField = screen.getByPlaceholderText(descriptionMock);
    expect(inputField).toBeInTheDocument()

})