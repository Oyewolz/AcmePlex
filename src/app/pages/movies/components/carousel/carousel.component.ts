import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MovieDto } from '../../dto';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  private _movies: MovieDto[] = [];

  currentIndex: number = 0;
  safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.updateVideoUrl();
  }

  updateVideoUrl(): void {
    if (this._movies.length === 0) {
      return;
    }
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movies[this.currentIndex].movieTrailer + '&autoplay=1&mute=0'
    );
  }

  prevMovie(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    this.updateVideoUrl();
  }

  nextMovie(): void {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    this.updateVideoUrl();
  }

  goToMovie(index: number): void {
    this.currentIndex = index;
    this.updateVideoUrl();
  }

  get movies(): any[] {
    return this._movies;
  }

  @Input()
  set movies(value: any[]) {
    this._movies = value;
    console.log(this._movies, "movies");
    this.updateVideoUrl();
  }
}
