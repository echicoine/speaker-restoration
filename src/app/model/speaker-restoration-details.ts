export class SpeakerRestorationDetails {

    crossoverNotes: string;
    speakerNotes: string;
    cabinetNotes: string;
    photo: string;

    public constructor(crossoverNotes: string,
        speakerNotes: string,
        cabinetNotes: string,
        photo: string) {
        this.crossoverNotes = crossoverNotes;
        this.speakerNotes = speakerNotes;
        this.cabinetNotes = cabinetNotes;
        this.photo = photo

    }

}