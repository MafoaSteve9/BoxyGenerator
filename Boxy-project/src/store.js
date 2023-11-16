import {configureStore} from "@reduxjs/toolkit"
import shawdows from "./Layouts/features/shawdows"
import boxProperties from "./Layouts/features/boxProperties"

export const store = configureStore({
    reducer: {
        shawdows,
        boxProperties
    }
})