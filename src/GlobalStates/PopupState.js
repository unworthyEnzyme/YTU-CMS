import { atom } from "recoil";

const popupState = atom({
  key: "popup-state",
  default: true
})

export default popupState