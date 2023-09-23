import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'angular_sep4';
  firstMediaItem=
  {
    id:1,
    name:'Firebug',
    medium:'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn:'09-6-2023',
    isFavorite: false
  };

  onMediaItemDelete(mediaItem)
  {}
 
}
