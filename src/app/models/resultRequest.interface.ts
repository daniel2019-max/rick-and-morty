import {CharacterInterface} from "./character.interface";

export interface ResultRequestInterface {
    info: InfoInterface;
    results: CharacterInterface[];
}

export interface InfoInterface {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

