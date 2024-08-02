import React from 'react'

function SignIn() {
  return (
      <form> 
    <div className='login'>
<label >Email </label>
<input type='email' name='email' id='email' required />

<label >Mot de Passe </label>
<input type='password' name='password' id='password' required />
    </div>
    </form>
  )
}

export default SignIn