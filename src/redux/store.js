
import { configureStore } from '@reduxjs/toolkit';
import counter from './slicer/counterSlice'
import identifier from  './slicer/autenticateSlice'
import records from  './slicer/recordsSlice'
export default  configureStore({
    reducer:{
        counter,
        identifier,
        records
    }
})


