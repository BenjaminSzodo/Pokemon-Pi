import { NavLink } from "react-router-dom";


export default function Nav() {
    return(
        <div>
            <button>
                <NavLink to = '/home'/>
            </button>
        </div>
    )
}