import { Injectable } from '@angular/core';
import { Speaker } from '../model/speaker';
import { SpeakerRestorationDetails } from '../model/speaker-restoration-details';

@Injectable ({
    providedIn: 'root'
})

export class SpeakerListGetter {
    getSpeakerList(): Speaker[] {
        let speakerListRet: Speaker[] = [];
        speakerListRet.push(new Speaker('1', 'Klipsch', 'KG2', '1984', '-', '200', 
        new SpeakerRestorationDetails('No crossover modifications made.', 'Replaced 1 tweeter@$17',
        'Old English Shine used on cabinets', 'Photos coming soon')));

        speakerListRet.push(new Speaker('2', 'Klipsch', 'Tangent 400', '1984', '100', '-',
        new SpeakerRestorationDetails('No crossover modifications made.', 'Replaced 1 tweeter@$17',
        'Old English Shine used on cabinets', 'Photos coming soon')));

        speakerListRet.push(new Speaker('3', 'Advent', 'Maestro', '1988', '30', '-',
        new SpeakerRestorationDetails('No crossover modifications made.', 'Replaced 1 tweeter@$17',
        'Old English Shine used on cabinets', 'Photos coming soon')));

        speakerListRet.push(new Speaker('4', 'Klipsch', 'KG4', '1984', '50', '-',
        new SpeakerRestorationDetails('No crossover modifications made.', 'Replaced 1 tweeter@$17',
        'Old English Shine used on cabinets', 'Photos coming soon')));
        return speakerListRet;
      }
}

