export const dummyCarouselWinners: Record<string, string> = {
  "1st": "https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "2nd": "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "3rd": "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "Best Freshers": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "Best UI/UX": "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}

export const VITHackathons = [
  { name: "Yantra Central Hack", title: "YANTRA CENTRAL HACK WINNERS", winners: dummyCarouselWinners },
  { name: "Proctor Proctee Hack", title: "PROCTOR PROCTEE HACK WINNERS", winners: dummyCarouselWinners }
]

export type Result = Record<string, {name: string, regno: string}[]> // { "1st Prize": [ {"regno":, "name":}, {}] }

export const dummyResult: Result = {
  "First Prize": [
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
  ],
  "Second Prize": [
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
  ],
  "Third Prize": [
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
  ],
  "Best Freshers": [
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
  ],
  "Best UI/UX": [
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
    { name: "Aryan Garg", regno: "23BCE0658" },
  ]
}