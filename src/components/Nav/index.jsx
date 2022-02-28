// redux

import {logOut}from '../../redux/slicer/autenticateSlice';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import React from 'react';
import {Link} from "react-router-dom"

export function Nav() {
  const history=useHistory();

  const dispatch= useDispatch();
  const userId= useSelector((state)=>state.identifier.user_id);
  return (
    <div>
      <nav class="nav nav-pills nav-fill">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link"to={`/records/${userId}`}>Records</Link>
          <Link className="nav-link" to='/login'>Login</Link>
          <Link className="nav-link" to='/sigin'>check in</Link>
          <Link className="nav-link" onClick={
            ()=>{dispatch(logOut());
                history.push('/')}}>LogOut
          </Link>

       </nav>
    </div>
  )
};

export default Nav;