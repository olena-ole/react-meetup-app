import { createContext, useState } from "react"

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([])

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    function addFavoriteHandler(favMeetup) {
        setUserFavorites(prev => [...prev, favMeetup])
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prev => prev.filter(item => item.id !== meetupId))
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(item => item.id === meetupId)
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;