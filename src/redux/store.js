
import { configureStore } from '@reduxjs/toolkit';

import identifier from  './slicer/autenticateSlice'
import records from  './slicer/recordsSlice'
export default  configureStore({
    reducer:{
     
        identifier,
        records,        
    }
})


