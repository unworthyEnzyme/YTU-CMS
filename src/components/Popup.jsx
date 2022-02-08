import { useRecoilState } from "recoil";
import popupId from "../GlobalStates/CurrentPopupId";
import popupState from "../GlobalStates/PopupState";

export default function Popup(props) {
  const [show, setShow] = useRecoilState(popupState);
  const [infoId, setInfoId] = useRecoilState(popupId)

  return (
    <>
      {show ? ( 
        <div className="overlay flex justify-center items-center absolute w-screen h-screen bg-[#00000033] top-0 left-0" onClick={(e) => {
            if (e.target.classList[0] === "overlay") { // Bu yontemin bokunu cikar knk
                setShow(!show)
                setInfoId(-1)
            }
        }}>
          <div>
            {props.children}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
