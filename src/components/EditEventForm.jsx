import { useState, useEffect } from "react"
import displayedDraftEventsState from "../GlobalStates/displayedEvents"
import { useRecoilState } from "recoil"

export default function EditEventForm({ id, onClose }) {
    const [defaultValues, setDefaultValues] = useState({})
    const [displayedEvents, setDisplayedEvents] = useRecoilState(displayedDraftEventsState)

    const handlePut = (e) => {
        const putData = {
            name: e.target[0].value,
            description: e.target[1].value,
            startDate: e.target[2].value,
            endDate: e.target[3].value
        };
        e.preventDefault()
        const jwt = localStorage.getItem('jwt')
        fetch(`http://localhost:8080/api/events/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify(putData)
        }).then((res) => {
            if (res.ok) {
                onClose()
                return res.json()
            } else {
                throw new Error("Couldn't edited the event")
            }
        }).then((data) => {
            setDisplayedEvents(displayedEvents.map((event) => {
                if (event.id === id) {
                    return { id: id, name: data.name, description: data.description }
                } else {
                    return event
                }
            }))
        }).catch((e) => {
            throw new Error(e)
        })
    }
    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        fetch(`http://localhost:8080/api/events/${id}`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("couldn't get this event")
            }
        }).then((data) => {
            setDefaultValues(data)
        }).catch((e) => {
            throw new Error(e)
        })
    }, [])

    return (
        <div>
            <form onSubmit={handlePut} className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input name="name"  defaultValue={defaultValues.name} className="border-black border-2 rounded-lg" />
                <label htmlFor="description">Description</label>
                <input name="description" defaultValue={defaultValues.description} className="border-black border-2 rounded-lg" />
                <label htmlFor="startDate">Start Date</label>
                <input name="startDate" type="date" defaultValue={defaultValues.startDate} className="border-black border-2 rounded-lg" />
                <label htmlFor="endDate">End Date</label>
                <input name="endDate" type="date" defaultValue={defaultValues.endDate} className="border-black border-2 rounded-lg" />
                <button type="submit" className="border-black border-2 bg-red-400">Submit</button>
            </form>
        </div>
    )
}