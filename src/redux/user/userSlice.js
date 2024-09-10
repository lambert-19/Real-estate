/**
 * User slice of the Redux store.
 *
 * This slice contains the current user, the error from the last sign in attempt, and a flag indicating whether a sign in is in progress.
 */
import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state of the user slice.
 *
 * @property {Object} currentUser - The current user.
 * @property {String} error - The error from the last sign in attempt.
 * @property {Boolean} loading - Whether a sign in is in progress.
 */
const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

/**
 * User slice of the Redux store.
 *
 * @property {Function} signInStart - Starts the sign in process.
 * @property {Function} signInSuccess - Sets the current user and clears the error.
 * @property {Function} signInFailure - Sets the error and clears the current user.
 */
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /**
         * Starts the sign in process.
         *
         * This function sets the `loading` property of the user slice to `true`.
         *
         * @param {Object} state - The current state of the user slice.
         */
        signInStart: (state) => {
            /**
             * The user is currently signing in.
             */
            state.loading = true;
        },
        /**
         * Sets the current user and clears the error.
         *
         * @param {Object} state - The current state of the user slice.
         * @param {Object} action - The action containing the user data.
         */
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        /**
         * Sets the error and clears the current user.
         *
         * @param {Object} state - The current state of the user slice.
         * @param {Object} action - The action containing the error message.
         */
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;
