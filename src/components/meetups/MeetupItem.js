import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

export default function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavorite() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                image: props.image,
                description: props.description,
            })
        }

    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavorite}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}