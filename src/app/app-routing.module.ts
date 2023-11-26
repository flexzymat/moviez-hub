import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCollectionComponent } from './movies-collection/movies-collection.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';

const routes: Routes = [
  {path: 'movies-collection', component: MoviesCollectionComponent},
  {path: '', redirectTo: '/movies-collection', pathMatch: 'full'},
  {path: 'items:id', component: MoviesCollectionComponent },
  {path: 'favorites', component: FavMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
