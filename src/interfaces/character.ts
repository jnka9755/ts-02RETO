export interface ListCharactes{
    results: Character[]
}

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}


// {
//     "id": 21,
//     "name": "Jorge",
//     "status": "unknown",
//     "species": "Human",
//     "type": "Human with ants in his eyes",
//     "gender": "Male",
//     "origin": {
//         "name": "unknown",
//         "url": ""
//     },
//     "location": {
//         "name": "Interdimensional Cable",
//         "url": "https://rickandmortyapi.com/api/location/6"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
//     "episode": [
//         "https://rickandmortyapi.com/api/episode/8"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/20",
//     "created": "2017-11-04T22:34:53.659Z"
// }