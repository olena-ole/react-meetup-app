import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    console.log(classes)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
                <li><Link to='/new-meetups'>New Meetups</Link></li>
            </ul>
        </header>
    )
}