import { createRef, useCallback, useEffect, useRef, useState } from 'react'
import './MessageBox.less'
import moment from "moment"
import { GeneragorMessageByList } from './MessageContent'
import { ImgDialog } from '../ImgDialog'

export function MessageBox() {
  const [dialogVisible, setDialogVisible] = useState(false)
  const [srcData, setSrcData] = useState("")
  const [tm, setTm] = useState("")
  const content = createRef<HTMLDivElement>()
  const messageRef = createRef<HTMLDivElement>()
  const [msgList, setMsgList] = useState<any[]>([])
  const handleInput = (e: any) => {
    console.log(e)
    const msg = (e.target as HTMLDivElement).innerHTML
    setTm(msg)
  }
  const handleSend = () => {
    console.log(msgList)
    const date = moment().format("yyyy-MM-DD HH:mm:ss")
    setMsgList([...msgList, { sendDate: date, msg: tm, isMy: Math.random() * 10 < 5 }])
  }
  const openImgDialog = (src: string) => {
    console.log(123)
    setDialogVisible(true)
    setSrcData(src)
  }

  useEffect(() => {
    if (messageRef.current)
      messageRef.current.scrollTop = 99999999999999
  }, [msgList])
  useEffect(() => {
    if (!content.current) return
    content.current.contentEditable = "true"
  }, [])
  return (
    <>
      <div className="body">
        <div className='messageTop'>
          <div className='userIcon'></div>
          <div className='userContent'>邢乾坤</div>
        </div>
        <div className="message" ref={messageRef}>
          {GeneragorMessageByList(msgList, openImgDialog)}
        </div>
        <div className="textarea-box">
          <div className="textarea-top"></div>
          <div style={{ padding: '0 25px', height: 'calc(100% - 3px)' }}>
            <div className="content" ref={content} onInput={(e) => handleInput(e)}></div>
            <div className="textarea-bottom">
              <div className="button" onClick={() => handleSend()}>发送</div>
            </div>
          </div>
        </div>
      </div >
      <ImgDialog open={dialogVisible} src={srcData} onClose={() => setDialogVisible(false)} onSubmit={() => setDialogVisible(false)}></ImgDialog>
    </>
  )
}

export default MessageBox
