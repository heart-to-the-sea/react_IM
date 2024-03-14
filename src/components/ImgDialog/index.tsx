import { Modal } from "antd"

interface Props {
  open: boolean
  src: string
  onClose: () => void,
  onSubmit: () => void
}
export function ImgDialog(props: Props) {
  return <>
  <Modal
    title="Modal 1000px width"
    centered
    open={props.open}
    onOk={() => props.onSubmit()}
    onCancel={() => props.onClose()}
    width={'90vw'}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={props.src} style={{ margin: "auto", maxWidth: "90vw" }}></img>

    </div>
  </Modal>
  </>
}