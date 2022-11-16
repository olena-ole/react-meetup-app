import { Link } from "react-router-dom"

export default function MainNavigation() {
    return (
        <header>
            <div>React Meetups</div>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li>
                <li><Link to='/new-meetups'>New Meetups</Link></li>
            </ul>
        </header>
    )
}