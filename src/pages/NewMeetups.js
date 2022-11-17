import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetupsPage() {

    function newMeetupHandler(meetupData) {
        console.log(meetupData)
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={newMeetupHandler}/>
        </section>
    )
}