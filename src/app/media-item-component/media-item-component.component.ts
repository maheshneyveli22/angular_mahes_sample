import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item-component',
  templateUrl: './media-item-component.component.html',
  styleUrls: ['./media-item-component.component.css']
})
export class MediaItemComponentComponent {
name='The Redemption'
 @Input() mediaItem;
 @Output() delete= new EventEmitter();

isWatched()
{
  return "Today";
}

onDelete()
{
  console.log('deleted using delete button')
  this.delete.emit(this.mediaItem);
}
}
