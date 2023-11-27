import { Component } from '@angular/core';
import { MoviezService } from '../moviez.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent {

 
  page:any = 1
  pageSize: any = 20
  count: any
  movieArray: any =[]
  favorites: any =[]
  router: any;
  constructor(
    private mz: MoviezService,  router: Router
  ) {
    // let movies: any = sessionStorage.getItem(`favoriteMovies`)
    // this.movieArray = JSON.parse(movies)
    
  } 

  ngOnInit() {
    this.getFavoriteMovies()
  }
  getItem(id:any){}

  getFavoriteMovies() {
    this.mz.getFavorite().subscribe({
      next: (res:any)=> {
        this.movieArray= res      
        localStorage.setItem(`favorites`, JSON.stringify(res))  
      },
      error: (err:any)=> {
        console.log(err);
        
      }
    })
  }

  deleteMovie(id: any) {
    this.mz.deleteFavorite(id).subscribe({
      next: (res:any)=> {
        alert(res.message)
        this.getFavoriteMovies()
      },
      error: (err:any)=> {
        console.log(err);
        
      }
    })
  }

  change(page: any) {    
    this.page = page
  }
  
}


