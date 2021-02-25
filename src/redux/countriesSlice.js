import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
import {INIT_URL} from "../utils/urls";

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    const response = await axios.get(INIT_URL)
    return response.data
})

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        list: [],
        status: 'sleeping',
        error: null
    },
    reducers: {
        sortByName(state, action) {
            console.log(action.payload)
            if (action.payload === 'ZA') {
                state.list.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
            } else {
                state.list.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            }
        },
        changePosition(state, action) {
            state.list = action.payload
        }
    },
    extraReducers: {
        [fetchCountries.pending]: state => {
            state.status = 'loading'
        },
        [fetchCountries.fulfilled]: (state, action) => {
            state.status = 'ready'
            state.list = state.list.concat(action.payload)
        },
        [fetchCountries.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
});

export const {changePosition, sortByName} = countriesSlice.actions;
export const selectCountries = state => state.countries.list
export default countriesSlice.reducer
