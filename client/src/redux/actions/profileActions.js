import axios from 'axios'
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_PROFILES
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

 // Get profile by handle
 export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios.get(`/api/profile/handle/${handle}`)
   .then(res => dispatch({
     type: GET_PROFILE,
     payload: res.data
   }))
   .catch(error => dispatch({
     type: GET_PROFILE,
     payload: null
   }))
}

 // Create Profile
 export const createProfile = (profileData, history) => dispatch => {
   axios.post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
 }

 // Clear Profile
 export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}
// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios.post('/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}

// Add Education
export const addEducation = (eduData, history) => dispatch => {
  axios.post('/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}

export const deleteExperience = (id) => dispatch => {
  axios.delete(`/api/profile/experience/${id}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}

export const deleteEducation = (id) => dispatch => {
  axios.delete(`/api/profile/education/${id}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    }))
}

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile/all')
    .then(res => dispatch({
      type: GET_PROFILES,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: GET_PROFILES,
      payload: null
    }))
}

// Delete account and profile
export const deleteAccount = () => dispatch => {
  if(window.confirm('Are you sure? This can not be undone!')) {
    axios.delete('/api/profile')
      .then(res => dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      }))
      .catch(error => dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      }))
  }
}
