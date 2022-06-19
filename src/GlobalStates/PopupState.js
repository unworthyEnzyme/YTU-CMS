import { atom } from "recoil";

const popupState = atom({
  key: "popup-state",
  default: false
})

export default popupState