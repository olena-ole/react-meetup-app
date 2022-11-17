import { useContext } from "react"
import FavoritesContext from "../store/favorites-context"
import MeetupList from "../components/meetups/MeetupList"

export default function FavoitesPage() {
    const favoritesCtx = useContext(FavoritesContext)
    const content = favoritesCtx.totalFavorites === 0 ?
                    <p>You have no favorites yet... Start adding some?</p> : 
                    <MeetupList meetups={favoritesCtx.favorites}/>

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}