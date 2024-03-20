import React from 'react'
import Button from '../components/Button'
export default function SignUp() {
  return (
    <div>
        <form>
            <ul>
                <Input type-="text" name="user" id="user" place="your username"/>
                <Input type-="email" name="email" id="email" place="your email address"/>
                <Input type-="password" name="pwd" id="pwd" place="your password"/>

                <Button status="signUp"/>
            </ul>
            
            
        </form>
    </div>
  )
}
