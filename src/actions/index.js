import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  // redux expects us to return a single action here

  // redux-thunk allows us to return a function instead of a action
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_USERS, payload: data })
    })
  }
}