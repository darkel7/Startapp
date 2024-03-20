import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
export default function Login() {
  return (
    <div>
    <form>
        <ul>
            
            <Input type="text" useridid="email" place='email address'/>
            
            
            <Input type="password" useridid="pswd" place="password"/>
            
            
            <Button status='Login'/>
            
        </ul>
    </form>
</div>
  )
}
