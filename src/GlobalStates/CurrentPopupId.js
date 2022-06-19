import { atom } from "recoil";

const popupId = atom({
  key: "id",
  default: -1
})

export default popupId