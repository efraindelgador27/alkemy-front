import axios from "axios";

export async  function handleSubmite(e,fields,URl){
  e.preventDefault();
  let user;
  console.log(fields)
  await axios.post(URl,fields)
  .then((res)=>{     
    user=res.data;    
    console.table(user)  
  })
  .catch((err)=>{console.log(err)})
  return user;
}


export function handleChange(e,cv,currentState){

    const initial=currentState;

    initial[e.target.name]=e.target.value;

    cv(initial);    
}




