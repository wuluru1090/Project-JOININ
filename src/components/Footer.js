import React from 'react'
import '../style/footer_custom.scss'
function Footer(props) {
  return (
    <>
      <footer className="footer bg-primary  mt-auto justify-content-center">
        <div className="container">
          <ul className="nav justify-content-around">
            <li className="nav-item">
              <a className="nav-link  subtitle1 " href="#">
                關於我們
              </a>
              <li>
                <a
                  className="nav-link  subtitle2
                 "
                  href="#"
                >
                  品牌故事
                </a>
              </li>
            </li>
            <li className="nav-item">
              <a
                className="nav-link subtitle1
"
                href="#"
              >
                加入會員
              </a>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  註冊會員
                </a>
              </li>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  登入會員
                </a>
              </li>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  推薦會員
                </a>
              </li>
            </li>
            <li className="nav-item ">
              <a className="nav-link subtitle1" href="#">
                下載app
              </a>
              <ul className="nav d-flex justify-content-around ">
                <li className="nav-link">
                  <img src="./pic/pic/btn_app_android.png"></img>
                </li>
                <li className="nav-link">
                  <img src="./pic/pic/btn_app_ios.png"></img>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <a className="nav-link justify-content-around subtitle1" href="#">
                聯絡我們
              </a>
              <ul className="nav d-flex justify-content-around">
                <li>
                  <img className="nav-link icon" src="./pic/SVG/FB.svg"></img>
                </li>
                <li>
                  <img className="nav-link icon" src="./pic/SVG/ig.svg"></img>
                </li>
                <li>
                  <img className="nav-link icon" src="./pic/SVG/Twitter.svg"></img>
                </li>
                <li>
                  <img className="nav-link icon" src="./pic/SVG/Pinterst.svg"></img>
                </li>
              </ul>
            </li>
          </ul>

          <div className="container justify-content-center">
            <p className="text-muted d-flex justify-content-center Overline">
              ©2020 JoinIn All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer