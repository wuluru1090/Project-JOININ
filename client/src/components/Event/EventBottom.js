import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_bottom.scss'
import { devUrl } from '../../config'

<<<<<<< HEAD
function EventBottom(props) {
  const go2Theme = (themeId) => {
    // alert(themeId)
    props.setCondition({
      searchbar: '',
      locate: '',
      time: '',
      theme: themeId,
      type: '',
    })
    var height = window.innerHeight
    height = height - 60
    setTimeout(function () {
      window.scrollTo({ top: height })
    }, 0)
  }

=======
function EventBottom() {
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  return (
    <>
      <div className="event-wrapper">
        <div className="blue-wave-with-couple">
          {/* <img className="couple" src={devUrl + '/Pic/SVG/couple.svg'}></img> */}
          <img
            className="blue-wave"
            src={devUrl + '/Pic/SVG/wave-blue-with-couple-1440-01.svg'}
          ></img>
        </div>
        <div className="wave-height">
          <div className="theme d-flex justify-content-center">
<<<<<<< HEAD
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="1"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              風景攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="2"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              人像攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="3"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              商業攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="4"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              生態攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="5"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              建築攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="6"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              旅遊攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="7"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              美食攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="8"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              夜景攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="9"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              人文攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="10"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              手機攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="11"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              水中攝影
            </button>
            <button
              className="btn rounded-pill theme-button"
              type="button"
              value="12"
              onClick={(e) => {
                go2Theme(e.target.value)
              }}
            >
              其他類型
            </button>
=======
            <a href="#" className="btn rounded-pill theme-button" type="button">
              風景攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              人像攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              商業攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              生態攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              建築攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              旅遊攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              美食攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              夜景攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              人文攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              手機攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              水中攝影
            </a>
            <a href="#" className="btn rounded-pill theme-button" type="button">
              其他類型
            </a>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
          </div>
        </div>
      </div>
    </>
  )
}
export default EventBottom
