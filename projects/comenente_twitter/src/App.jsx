import "./App.css"
import { TwitterFollowCard } from "./TwiterFollowCard"
export function App () {
    
    return( 
        <section className="App">
        <TwitterFollowCard inicialIsFollowing={false} userName="auronplay" name="Raúl Álvarez Genes" />
        <TwitterFollowCard inicialIsFollowing userName="midudev" name="Miguel Angel Duran" />
        <TwitterFollowCard inicialIsFollowing userName="elxokas" name="Joaquín Domínguez Portela" />
        </section>
    )
}