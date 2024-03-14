import { CopyOutlined } from "@ant-design/icons"
import "./style.less"
interface Props {
  msg: string
  sendDate: string
  openImgDialog: (src: string) => void
}
export function MessageContent(props: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dom = e.target as HTMLElement
    switch (dom.nodeName) {
      case "IMG":
        const src = (dom as HTMLImageElement).src
        props.openImgDialog(src)
        console.log(src)

        break;
    }
  }
  return <>
    <div className="messageContent">
      <div className="messageIcon"></div>
      <div className="messageContext">
        <div onClick={(e) => handleClick(e)} style={{ display: "inline-block" }} dangerouslySetInnerHTML={{ __html: props.msg }}>
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
export function GeneragorMessageByList(list: any[], openImgDialog: (src: string) => void) {
  return list.map(item => item.isMy ? <MyMessageContent {...item} openImgDialog={openImgDialog} /> : <MessageContent {...item} openImgDialog={openImgDialog} />)
}