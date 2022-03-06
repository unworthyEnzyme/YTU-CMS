import { Button } from "@chakra-ui/react"
import { useState } from "react"
import { useRecoilState } from "recoil"
import displayedDraftEventsState from "../GlobalStates/displayedEvents"



export default function PublishButton({ id, onClose }) {
    const [displayedEvents, setDisplayedEvents] = useRecoilState(displayedDraftEventsState)
    const [success, setSuccess] = useState(null)
    const jwt = localStorage.getItem("jwt")

    function handlePublish() {
        fetch(`http://localhost:8080/api/events/${id}/publish`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then((response) => {
            if (response.ok) {
                setSuccess(true)
                const newDisplayedEvents = displayedEvents.filter(event => event.id !== id)
                setDisplayedEvents(newDisplayedEvents)
            } else {
                throw new Error("Cant Publish")
            }
        }).catch(e => {
            throw new Error(e)
        })
        onClose()
    }

return (
    <>
        <button className="bg-slate-300 rounded-md p-2" onClick={handlePublish}>Publish</button>    
    </>
)
}












/*

const [success, setSuccess] = useState(null)

const jwt = localStorage.getItem("jwt")    

function handlePublish(){
    const {data, error}= useFetch(`http://localhost:8080/api/events/${id}/publish`, {
        headers: {
            "Authorization": `Bearer ${jwt}`
          }
    })
    if (error){
        setSuccess(false)
    }
}

if(success === null){
    return(
        <Button onClick={handlePublish}>Publish</Button>
    )
}else if(success === true){
    console.log("Success")
    return(
        <>
            <Button onClick={handlePublish}>Publish</Button>
            <p>Success</p>
        </>
    )
}else{
    return(
        <>
            <Button onClick={handlePublish}>Publish</Button>
            <p>Error</p>
        </>
    )
}
*/