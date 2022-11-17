import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetupsPage() {
    const history = useHistory()
    console.dir(history)


    function newMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-2fe0a-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then( () => {
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={newMeetupHandler}/>
        </section>
    )
}