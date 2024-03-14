import { CopyOutlined } from "@ant-design/icons"
import "./style.less"
interface Props {
  msg: string,
  sendDate: string
}
export function MessageContent(props: Props) {
  return <>
    <div className="messageContent">
      <div className="messageIcon"></div>
      <div className="messageContext">
        <div style={{ display: "inline-block" }} dangerouslySetInnerHTML={{ __html: props.msg }}>
        </div>
        <div className="messageBottom">
          <div className="messageDate">{props.sendDate}</div>
          <CopyOutlined style={{ color: "#007963", cursor: "pointer", fontSize: "14px" }} />
        </div>
      </div>

    </div>
  </>
}
export function MyMessageContent(props: Props) {
  return <>
    <div className="messageContent my">
      <div className="messageContext">
        <div style={{ display: "inline-block" }} dangerouslySetInnerHTML={{ __html: props.msg }}>

        </div>
        <div className="messageBottom">
          <div className="messageDate">{props.sendDate}</div>
          <CopyOutlined style={{ color: "#007963", cursor: "pointer", fontSize: "14px" }} />
        </div>
      </div>
      <div className="messageIcon"></div>
    </div>
  </>
}
export function GeneragorMessageByList(list: any[]) {
  return list.map(item => item.isMy ? <MyMessageContent {...item} /> : <MessageContent {...item} />)
}