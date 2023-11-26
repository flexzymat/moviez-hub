import { Component, OnInit } from '@angular/core';
import { MoviezService } from '../moviez.service';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.css']
})
export class MoviesCollectionComponent implements OnInit {

  page:any = 1
  pageSize: any = 20
  count: any
  movieArray: any =[]
  favorites: any =[]
  selectedIds: any

  constructor(
    private mz: MoviezService
  ) {} 

  ngOnInit() {
    this.getMovieList(1)
  }
  getItem(id:any){
    // this.router.navigate(['/item/' + id])

  }


  getMovieList(page: any) {
    this.mz.fetchMovies(page).subscribe({
      next: (res:any)=> {
        this.movieArray= res.results
        this.count = res.total_results
        this.getFavoriteMovies()
      },
      error: (err:any)=> {
        console.log(err);
        
      }
    })
  }

  createFavMovies(movie: any) {
    this.mz.createFavorite(movie).subscribe({
      next: (res: any)=> {
        console.log(res);    
        this.getFavoriteMovies()    
      },
      error: (err: any)=> {
        console.log(err);
        
      }
    })
  }

  getFavoriteMovies() {
    this.mz.getFavorite().subscribe({
      next: (res:any)=> {        
        this.favorites= res                 
        this.showSelected()       
      },
      error: (err:any)=> {
        console.log(err);
        
      }
    })
  }

  showSelected() {
    this.movieArray?.forEach((e: any) => {
      this.favorites?.forEach((f: any)=> {        
        if(e.title === f.title) {
          e.checked=true   
        }
      })
    });
  }

  checkAndUncheck(movie:any, e:any) {
    if(e.target.checked) {
      this.selectFavorites(movie)
    }else {
      this.deleteMovie(this.favorites, movie)
    }
    
  }

  deleteMovie(selected:any, movie: any) {        
    selected.forEach((e:any)=> {
      if(movie.title == e.title) {        
        this.mz.deleteFavorite(e._id).subscribe({
          next: (res:any)=> {
            console.log(res); 
            this.getFavoriteMovies()
          },
          error: (err:any)=> {
            console.log(err);
          }
        })
      }
    })
  }

  selectFavorites(movie:any) {
    let favMovie= {
      title: movie.title,
      image: movie.poster_path,
      id: movie.id,
      popularity: movie.popularity,
      release_date: movie.release_date
    }
    this.createFavMovies(favMovie)
  }

  changePage(page: any) {    
    this.page = page
    this.getMovieList(page)
  }
}

