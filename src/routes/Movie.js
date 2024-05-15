import {Component} from "../core/heropy";
import {getMovieDetails, movieStore} from "../store/movie";

export default class Movie extends Component {
    constructor() {
        super();
    }
    async render() {
        await getMovieDetails(history.state.id)
        console.log(movieStore.state.movie)
    }
}