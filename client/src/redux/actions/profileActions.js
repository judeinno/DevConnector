import axios from 'axios'
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
 } from '../types';

 // ProfileLoading
 export const setProfileLoading = () => {
   return {
     type: PROFILE_LOADING
   }
 }

 // Get current profile
 export const getCurrentProfile = () => dispatch => {
   dispatch(setProfileLoading());
   axios.get('/api/profile')
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: GET_PROFILE,
      payload: {}
    }))
 }

 // Clear Profile
 export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}

