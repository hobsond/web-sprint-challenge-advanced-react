import React from "react";
import { render } from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText}= render(<CheckoutForm/>)
    const header = getByText(/checkout form/i)
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    const {container} = render(<CheckoutForm/>)
    const testVars = {
        firstName:'bryan',
        lastName:'smith',
        address:'1122 e palmbale',
        city:'city of treason',
        state:'va',
        zip:'2223334'
    }
    const fname= container.querySelector('[name="firstName"] ')
    expect(fname).toBeTruthy()


});
