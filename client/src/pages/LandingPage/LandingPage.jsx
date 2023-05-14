import { NavLink } from "react-router-dom"


export default function LandingPage () {
    return(
        <div>
        <h1>Pokedex</h1>
        <NavLink to = '/homeSpa'>
            <button>Go!</button>
        </NavLink>
        </div>
    )
}