import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react";
import List from "../components/List";
import Render from "../components/Render";
import ListItem from "../components/ListItem";

it("Render input type checkbox correctly", function (){

    const updateStatus = jest.fn()
    const description = ""

    const { getByTestId } = render(
        <input type="checkbox" data-testid="input-checkbox" id={description} onChange={()=> updateStatus(i)}  />
        )
    
    expect(getByTestId("input-checkbox")).toBeInTheDocument();
})