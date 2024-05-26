import { useState } from "react"
import { accounts } from "./components/components"
function LoginF(){
 const [login, setlogin] = useState();
 const [password, setPassword] = useState();

 const LoginF = () => {
    const Search = accounts.filter((i) => i.login == login && i.password == password)
    if(Search.length > 0){
      localStorage.setItem('token', Search[0].id)
      window.location.href = '/MainPage'
    }
    else{
      alert('Неправильный логин или пароль!')
    }
 }

 return(
  <div className="container-fluid" style={{textAlign:"center"}}>
    <div className="row">
      <div className="col-12 mt-3">
        <h1>Login</h1>
      </div>
      <div className="col-12 mt-3">
        <input onChange={(e) => setlogin(e.target.value)} type="text" placeholder="login" className="rounded"/>
      </div>
      <div className="col-12 mt-3">
        <input type="text" placeholder="password" className="rounded" onChange={(e) =>setPassword(e.target.value)}/>
      </div>
      <div className="col-12 mt-3">
        <button className="btn btn-success" onClick={LoginF}>Войти</button>
      </div>
      <div className="col-12 mt-5">
        <h1>Users</h1>
      </div>
      <div className="col-12">
        Login:Nazar<br/>
        password:12345
      </div>
      <div className="col-12">
        login:John<br/>
        password:12345
      </div>
    </div>
  </div>
 )
}
export default LoginF