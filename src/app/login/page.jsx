import React from 'react'
import Button from '../components/Button'
export default function Login() {
  return (
    <div>
    <form>
        <ul>
            <li>
                <input type="text" name="user" id='user' placeholder='username'/>
            </li>
            <li>
                <input type="email" name="email" id="email" placeholder='email address' />
            </li>
            <li>
                <input type="password" name="pswd" id="pswd" placeholder="password" />
            </li>
            <li>
                <Button status='Login'/>
            </li>
        </ul>
    </form>
</div>
  )
}
