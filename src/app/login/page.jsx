import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
export default function Login() {
  return (
    <div>
    <form>
        <ul>
            <li>
                <Input type="email" name="email" id="email" placeholder='email address' />
            </li>
            <li>
                <Input type="password" name="pswd" id="pswd" placeholder="password" />
            </li>
            <li>
                <Button status='Login'/>
            </li>
        </ul>
    </form>
</div>
  )
}
