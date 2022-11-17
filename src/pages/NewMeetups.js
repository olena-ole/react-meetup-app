import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetupsPage() {

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
        )
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={newMeetupHandler}/>
        </section>
    )
}