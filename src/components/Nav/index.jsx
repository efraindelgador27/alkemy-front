// redux

import {logOut}from '../../redux/slicer/autenticateSlice';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import style from './nav.module.css'
import React from 'react';
import {Link} from "react-router-dom"
import { useState } from 'react';



export function Nav() {
  const history=useHistory();

  const dispatch= useDispatch();
  const userId= useSelector((state)=>state.identifier.user_id);
  const [open,setOpen]=useState(false);

  return (
    <div className={style.menu}>
      <div className={style.header}>
        
          <svg onClick={()=>{setOpen(!open)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <h4>My personal balance</h4>
       
      </div>
        {open?<nav onClick={()=>{setOpen(!open)}} className={style.nav}>
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link"to={`/records/${userId}`}>Records</Link>
          <Link className="nav-link" to='/login'>Login</Link>
          <Link className="nav-link" to='/sigin'>check in</Link>
          <Link className="nav-link" to="" onClick={
            ()=>{dispatch(logOut());
                history.push('/')}}>LogOut
          </Link>
       </nav>:""}
    </div>
  )
};

export default Nav;