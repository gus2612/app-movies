import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});
  readData: any;
  page: number = 1;
  disabled: boolean = false;
  search: string = '';
  control = new FormControl();
  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {
    this.initForm();
    this.getInfoMovies(this.page);
    this.getInfo();
    this.InputChange();
  }

  getInfo() {}

  initForm() {
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
  }

  get infoMovies() {
    return this.movieForm.get('movies') as FormArray;
  }

  getInfoMovies(page: number) {
    let _data: any[] = [];
    this.movieService.getInfoMovies(page).subscribe({
      next: (response: any) => {
        _data = response.results;
        this.infoMovies.clear();
        _data.forEach(async (item) => {
          const form = this.fb.group({
            title: [item?.title ? item.title : item?.name],
            release_date: [
              item?.release_date ? item?.release_date : item?.first_air_date,
            ],
            popularity: [item.popularity],
            vote_average: [item.vote_average],
            overview: [item.overview],
          });

          this.infoMovies.push(form);
        });
      },
      error: () => {},
    });
  }

  lastPage() {
    if (this.page == 2) this.disabled = false;
    this.page = this.page - 1;
    this.getInfoMovies(this.page);
  }

  nextPage() {
    this.page = this.page + 1;
    this.disabled = true;
    this.getInfoMovies(this.page);
  }

  InputChange() {
    let _data: any[] = [];
    this.control.valueChanges.subscribe((query) => {
      if (query) {
        this.movieService.getNameMovie(query).subscribe({
          next: (response: any) => {
            _data = response.results;
            this.infoMovies.clear();
            _data.forEach(async (item) => {
              const form = this.fb.group({
                title: [item?.title ? item.title : item?.name],
                release_date: [
                  item?.release_date
                    ? item?.release_date
                    : item?.first_air_date,
                ],
                popularity: [item.popularity],
                vote_average: [item.vote_average],
                overview: [item.overview],
              });

              this.infoMovies.push(form);
            });
          },
          error: () => {},
        });
      } else {
        this.getInfoMovies(1);
      }
    });
  }
}
