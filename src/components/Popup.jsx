
export default function Popup(props){

    return(
        <div>
            <div className="absolute top-0 left-0 bg-black opacity-20 w-screen h-screen"></div>
            <div className="w-screen h-screen flex justify-center items-center">
                {props.children}
            </div>
        </div>
    )
}