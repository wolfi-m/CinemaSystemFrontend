import { Component } from '@angular/core';
import { LocalDatabase } from '../model/localDatabase';
import { Movie } from '../model/movieInterface';

@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrls: ['./movie-browser.component.css']
})
export class MovieBrowserComponent {
  movies: Movie[] = []

  constructor(
    private readonly database : LocalDatabase
  ) {
    this.movies = database.getMovies()
  }

  goToMovie(movie : Movie) {
    
  }
}
