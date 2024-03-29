import { useLayoutEffect, useRef, useState } from 'react'
import './App.less'
import { MessageBox } from './components/MessageContent'

function App() {
  const [userList] = useState([{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },{
    name: "123131231231231312312312313123123",
    msgCount: '99+'
  },])
  return (
    <>
    <div className='pageBox'>
      <div className='left'>
        <div>
          {userList.map(item=><>
          <div className='user'>
            <div className='userIcon'></div>
            <div className='userContent'>{item.name}</div>
            <div className='userMessage'>{item.msgCount}</div>
            <div className='userSetting'></div>
            </div>
          </>)}
        </div>
      </div>
      <div className='right'>
      <MessageBox />
      </div>
    </div>
    </>
  )
}

export default App
