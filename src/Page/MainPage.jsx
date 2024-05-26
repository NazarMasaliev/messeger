import { useEffect, useState } from "react"
import { accounts } from "./components/components"
import { message } from "./components/components"
import $ from 'jquery'
function MainPage() {
  const [first, setfirst] = useState()
  const [second, setsecond] = useState()

  function showmessege() {
    const show = message.filter((i) => i.chat_id == localStorage.getItem('token'))
    if (show.length > 0) {
      setfirst(show)
    }
    const show2 = message.filter((i) => i.chat_id != localStorage.getItem('token'))
    if (show2.length > 0) {
      setsecond(show2)
    }
  }

  const [value, setValue] = useState()
  const add = {
    chat: value
  }
  const addList = () => {
    setfirst([...first, add])
  };







  // theme
  const [theme1, setTheme] = useState(localStorage.getItem('theme'))

  function themelight(th) {
    localStorage.setItem('theme', th);
    setTheme(th)
    themechange();
  }

  function themechange() {
    if (localStorage.getItem('theme') === "light") {
      $('body').css({ "background-color": "white", "color": "black" })
    } else if (localStorage.getItem('theme') === "dark") {
      $('body').css({ "background-color": "black", "color": "white" })
    }
    else {
      localStorage.setItem('theme', 'light');
      $('body').css({ "background-color": "white", "color": "black" })
    }
  }
  

  useEffect(() => {
    showmessege();
    themechange();
  }, [])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-secondary" style={{float:"left"}} onClick={() => window.location.href = '/'}>выход</button>
          {theme1 == 'dark' ?
            <><button className='btn btn-light' style={{float:"right"}} onClick={() => themelight('light')}>Светлый</button></> : <>
              <button className='btn btn-dark' style={{float:"right"}} onClick={() => themelight('dark')}>Темный</button></>}
        </div>
        <div className="col-12 text-center mt-3">
          <h1>Messeges</h1>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4 text-center border" style={{ height: "80vh" }}>
              <div className="row">
                <div className="col-12 border">
                  <h3>Accounts</h3>
                </div>
                <div className="col-12">
                  {second != null ?
                    <>{second.map(i =>

                      <div className="col-12 account">
                        <div style={{ background: "gray", width: "100%", height: "100%", float: "left", padding: "20px" }}>
                          <b >{i.name}</b>
                        </div>
                      </div>
                    )}
                    </>
                    :
                    <>
                    </>
                  }
                </div>
              </div>
            </div>
            <div className="col-7 text-center">
              <div className="row">
                <div className="col-12 border">
                  <h3>Send Message</h3>
                </div>
                <div className="border" style={{ height: "70vh", float: "left" }}>
                  <div className="row">
                    {first != null ?
                      <>
                        {first.map(i =>

                          <div className="col-12" style={{ textAlign: "right" }}>
                            {i.chat}
                          </div>
                        )}
                        {second.map(i =>

                          <div className="col-12" style={{ textAlign: "left" }}>
                            {i.chat}
                          </div>
                        )}

                      </>
                      :
                      <>
                      </>
                    }


                  </div>
                </div>
                <div className="col-12 p-0" >
                  <div className="row">
                    <div className="col-10" style={{ height: "25x" }}>
                      <input onChange={(e) => setValue(e.target.value)} className="p-0 rounded" type="text" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className="col-2">
                      <button onClick={addList} className="rounded" style={{ width: "100%", height: "100%" }}>отправить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainPage