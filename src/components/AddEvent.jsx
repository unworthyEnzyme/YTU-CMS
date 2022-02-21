import { useState, useEffect } from "react"
import displayedDraftEventsState from "../GlobalStates/displayedEvents"
import { useRecoilState } from "recoil"

export default function AddEvent({ onClose }) {
    const [displayedEvents, setDisplayedEvents] = useRecoilState(displayedDraftEventsState)
    const clubId = JSON.parse(localStorage.getItem('user')).clubId
    const handlePut = (e) => {
        const postData = {
            name: e.target[0].value,
            description: e.target[1].value,
            startDate: e.target[2].value,
            endDate: e.target[3].value,
            clubId: clubId
        };
        e.preventDefault()
        const jwt = localStorage.getItem('jwt')
        fetch("http://localhost:8080/api/events/", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify(postData)
        }).then((res) => {
            if (res.ok) {
                onClose()
                return res.json()
            } else {
                throw new Error("Couldn't edited the event")
            }
        }).then((data) => {
            setDisplayedEvents([...displayedEvents, { id: data.id, name: data.name }])
        }).catch((e) => {
            throw new Error(e)
        })
    }


    return (
    <div>
        <form onSubmit={handlePut} className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input name="name" className="border-black border-2 rounded-lg" />
            <label htmlFor="description">Description</label>
            <input name="description" className="border-black border-2 rounded-lg" />
            <label htmlFor="startDate">Start Date</label>
            <input name="startDate" type="date" className="border-black border-2 rounded-lg" />
            <label htmlFor="endDate">End Date</label>
            <input name="endDate" type="date" className="border-black border-2 rounded-lg" />
            <button type="submit" className="border-black border-2 bg-red-400">Submit</button>
        </form>
    </div>
    )
}


