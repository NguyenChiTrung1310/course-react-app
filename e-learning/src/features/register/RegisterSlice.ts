import { createSlice } from '@reduxjs/toolkit';
import {AUTH_REDUCER} from '../../constants';

const registerSlice = createSlice({
    name: AUTH_REDUCER.REGISTER,
    initialState:{
        user: null
    },
    reducers:{
        // contains reducer function name
        registerSuccess: (state, action) => {
            state.user = action.payload;
        },
    }
});

const {actions, reducer} = registerSlice;
const {registerSuccess} = actions;

export {registerSuccess};
export default reducer;