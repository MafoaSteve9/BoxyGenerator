import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    
            {
                inputNumber: 1,
                name: "Border raduis",
                value: 25,
                type: "range",
                slice: "boxProperties",
                minMax: [0, 250]
            },
            {
                inputNumber: 2,
                name: "Height",
                value: 250,
                type: "range",
                slice: "boxProperties",
                minMax: [0, 500]
            },
            {
                inputNumber: 3,
                name: "Width",
                value: 250,
                type: "range",
                slice: "boxProperties",
                minMax: [0, 500]
            },
            {
                inputNumber: 4,
                name: "Background color",
                value: "#fff",
                slice: "boxProperties",
                type: "color"
            },
        ]

export const boxSlice = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updatBoxValue: (state, action) => {

      }
    },
})

export const {updatBoxValue} = boxSlice.actions
export default boxSlice.reducer