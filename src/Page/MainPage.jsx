import { useEffect, useState } from "react"
import { accounts } from "./components/components"
import { message } from "./components/components"
import $ from 'jquery'
function MainPage() {













  const [showmessage, setshowmessage] = useState([]);
  const [value, setValue] = useState()
  const addList = (user) => {
    setshowmessage([...showmessage, {
      message: value,
      user: user
    }])
  };
  const [value2, setValue2] = useState()
  const addList2 = (user) => {
    setshowmessage([...showmessage, {
      message: value2,
      user: user
    }])
  }







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
      $('body input').css({ "background-color": "white", "color": "black", "border": "solid 1px" })
      $('.stylebackground').css({ "background-image": "url(https://catherineasquithgallery.com/uploads/posts/2021-02/1613362914_175-p-bezhevii-fon-anime-248.jpg)" })
      $('.jq').css({ "background": "white" })
      $('.chataccount').css({ "background": "white" })
    } else if (localStorage.getItem('theme') === "dark") {
      $('body').css({ "background-color": "black", "color": "white" })
      $('body input').css({ "background-color": "#2a3b44", "color": "white", "border": "none" })
      $('.stylebackground').css({ "background-image": "url(https://ichip.ru/images/cache/2020/1/23/q90_376032_c421fa4fa7c5ab98752e33e97.png)" })
      $('.jq').css({ "background": " #111B21" })
      $('.chataccount').css({ "background": "#2a3b44" })


    }
    else {
      localStorage.setItem('theme', 'light');
      $('body').css({ "background-color": "white", "color": "black" })
    }
  }


  useEffect(() => {
    // themechange();

  }, [])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-secondary" style={{ float: "left" }} onClick={() => window.location.href = '/'}>выход</button>
          {theme1 == 'dark' ?
            <>
              <button className='btn btn-light' style={{ float: "right" }} onClick={() => themelight('light')}>Светлый</button>
            </>
            :
            <>
              <button className='btn btn-dark' style={{ float: "right" }} onClick={() => themelight('dark')}>Темный</button>
            </>}
        </div>
        <div className="col-12 text-center mt-3">
          <h1>Messeges</h1>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-3 text-center border rounded jq" style={{ height: "70vh", backgroundColor: "#111B21" }}>
                  <div className="row">
                    <div className="col-12 border" style={{ height: "50px" }}>
                      <h3>Accounts</h3>
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center rounded">
                  <div className="row">
                    <div className="border stylebackground">
                      {showmessage.length > 0 ?
                        <>
                          {showmessage.map(i =>
                            i.user != 1 ?
                              <div className="col-12 mt-4" style={{ textAlign: "right", height: "50px", width: "100%" }}>
                                <b style={{ padding: "10px", background: "green", color: "white" }} className="rounded">{i.message}</b>
                              </div>

                              :
                              <div className="col-12 mt-4" style={{ textAlign: "left", height: "50px", width: "100%" }}>
                                <b style={{ padding: "10px", background: "gray", color: "white" }} className="rounded">{i.message}</b>
                              </div>
                          )}
                        </>
                        :
                        <>
                        </>
                      }
                    </div>
                    <div className="col-12 p-0" >
                      <div style={{ height: "35px", width: "97%", float: "left" }}>
                        <input className="inpsend" onChange={(e) => setValue2(e.target.value)} type="text" placeholder="введите текс" />
                        <button onClick={() => addList2(2)} style={{ width: "20%", border: "none", color: "white", background: "darkgreen", height: "100%" }}>отправить</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3 text-center border rounded jq" style={{ height: "70vh", backgroundColor: "#111B21" }}>
                  <div className="row">
                    <div className="col-12 border rounded" style={{ height: "50px" }}>
                      <h3>Accounts</h3>
                    </div>
                  </div>
                </div>
                <div className="col-8 text-center rounded">
                  <div className="row">
                    <div className="border stylebackground">
                      {showmessage.length > 0 ?
                        <>
                          {showmessage.map(i =>
                            i.user != 2 ?
                              <div className="col-12 mt-4" style={{ textAlign: "right", height: "50px", width: "100%" }}>
                                <b style={{ padding: "10px", background: "green", color: "white" }} className="rounded">{i.message}</b>
                              </div>
                              :
                              <div className="col-12 mt-4" style={{ textAlign: "left", height: "50px", width: "100%" }}>
                                <b style={{ padding: "10px", background: "gray", color: "white" }} className="rounded">{i.message}</b>
                              </div>
                          )}
                        </>
                        :
                        <>
                        </>
                      }
                    </div>
                    <div className="col-12 p-0" >
                      <div style={{ height: "35px", width: "97%", float: "left" }}>
                        <input className="inpsend" onChange={(e) => setValue(e.target.value)} type="text" placeholder="введите текс" />
                        <button onClick={() => addList(1)} style={{ width: "20%", border: "none", color: "white", background: "darkgreen", height: "100%" }}>отправить</button>
                      </div>
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
export default MainPage;