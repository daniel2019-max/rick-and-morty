export interface CharacterInterface {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: LocationInterface,
    location: LocationInterface,
    image: string,
    episode: string[],
    url: string,
    created: string,
}

export interface LocationInterface {
    name: string,
    url: string,
}
