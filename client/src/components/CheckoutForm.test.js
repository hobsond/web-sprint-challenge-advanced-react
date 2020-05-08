import React from "react";
import { render,fireEvent,screen } from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText}= render(<CheckoutForm/>)
    const header = getByText(/checkout form/i)
    expect(header).toBeTruthy()
});

test('check for Values',()=> {
    const {container} = render(<CheckoutForm/>)
    const testVars = {
    firstName:'bryan',
    lastName:'smith',
    address:'1122 e palmbale',
    city:'city of treason',
    state:'va',
    zip:'2223334'
}
    for(let [key,value] of Object.entries(testVars)){
    const x = container.querySelector(`[name="${key}"] `)
    expect(x).toBeTruthy()
}})

test('input works',()=>{
    const {container} = render(<CheckoutForm/>)
    const testVars = {
        firstName:'bryan',
        lastName:'smith',
        address:'1122 e palmbale',
        city:'city of treason',
        state:'va',
        zip:'2223334'
    }
for(let [key,value] of Object.entries(testVars)){
    const x = container.querySelector(`[name="${key}"] `)
    fireEvent.change(x,{target:{value:value}})
    expect(x.value).toBe(value)

}
  

})

test("form shows success message on submit with form details", async () => {
    const {container,getByText,getByTestId} = render(<CheckoutForm/>)
    const testVars = {
        firstName:'bryan',
        lastName:'smith',
        address:'1122 e palmbale',
        city:'city of treason',
        state:'va',
        zip:'2223334'
    }
    const form = getByTestId('form')
    // const succes = getByTestId('successMessage')

    for(let [key,value] of Object.entries(testVars)){
        const x = container.querySelector(`[name="${key}"] `)
        fireEvent.change(x,{target:{value:value}})
        expect(x.value).toBe(value)
    
    }


    fireEvent.submit(form)
    const succes = getByTestId('successMessage')
     expect(succes).toBeTruthy()


    
    

});
