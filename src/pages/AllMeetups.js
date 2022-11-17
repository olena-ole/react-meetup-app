import MeetupList from "../components/meetups/MeetupList"
import { useState, useEffect } from "react"

export default function AllMeetupsPage() {

  const [isLoading, setIsLoding] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect( () => {
    setIsLoding(true)
    fetch('https://react-getting-started-2fe0a-default-rtdb.firebaseio.com/meetups.json')
      .then(res => res.json())
      .then(data => {
        const meetups = []

        for (let key in data) {
          const meetup = {
            id: key,
          ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoding(false)
        setLoadedMeetups(meetups)
      })
  }, [])

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}