import { Component, Input, OnInit } from '@angular/core';
import { SpeakerRestorationDetails } from 'src/app/model/speaker-restoration-details';

@Component({
  selector: 'app-speaker-restoration-details-component',
  templateUrl: './speaker-restoration-details-component.component.html',
  styleUrls: ['./speaker-restoration-details-component.component.css']
})
export class SpeakerRestorationDetailsComponentComponent implements OnInit {

  @Input() speakerDetails: SpeakerRestorationDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
