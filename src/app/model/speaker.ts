import { SpeakerRestorationDetails } from './speaker-restoration-details';

export class Speaker {
    id: string;
    brand: string;
    name: string;
    year: string;
    cost: string;
    soldFor: string;
    speakerNotes: SpeakerRestorationDetails;
    expanded: boolean;

    public constructor(id: string, brand: string, name: string, year: string, cost:
        string, soldFor: string, speakerNotes: SpeakerRestorationDetails) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.year = year;
        this.cost = cost;
        this.soldFor = soldFor;
        this.speakerNotes = speakerNotes;
        this.expanded = false;
    }

}