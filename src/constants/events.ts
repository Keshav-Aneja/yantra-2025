import { EventCardProps } from "@/components/event-card";

export const eventTypes = [
    "ALL",
    "HACKATHON",
    "WORKSHOP",
    "TECH TALK",
    "TECH COMPETITION",
]

export const events: EventCardProps[] = [
  {
    id: 1,
    organisation: {
      name: "ISTE",
      logo: "/images/iste.svg",
    },
    event: {
      name: "TECHNICA '25",
      image: "/images/technica.png",
      description:
        "Proident quis deserunt quis quis non. Anim occaecat ex est enim laboris culpa consectetur eiusmod et qui Lorem. Esse cupidatat nulla do anim sint adipisicing sunt cupidatat nulla veniam ipsum. Culpa minim nulla eiusmod ex sint sunt sint adipisicing in exercitation anim nisi aute voluptate.",  type: "HACKATHON",
      typeColor: "#E0AC00",
      startDate: "2025-02-03T10:00:00Z",
      endDate: "2025-02-05T10:00:00Z",
    },
  },
  {
    id: 2,
    organisation: {
      name: "ISTE",
      logo: "/images/iste.svg",
    },
    event: {
      name: "TECHNICA '25",
      image: "/images/technica.png",
      description:
        "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
      type: "WORKSHOP",
      typeColor: "#00E00F",
      startDate: "2025-02-05T11:00:00Z",
      endDate: "2025-02-05T13:00:00Z",
    },
  },
  {
    id: 3,
    organisation: {
      name: "ISTE",
      logo: "/images/iste.svg",
    },
    event: {
      name: "TECHNICA '25",
      image: "/images/technica.png",
      description:
        "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
      type: "TECH TALK",
      typeColor: "#E00004",
      startDate: "2025-02-06T14:00:00Z",
      endDate: "2025-02-06T16:00:00Z",
    },
  },
  {
    id: 4,
    organisation: {
      name: "ISTE",
      logo: "/images/iste.svg",
    },
    event: {
      name: "TECHNICA '25",
      image: "/images/technica.png",
      description:
        "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
      type: "TECH COMPETITION",
      typeColor: "#AC47FF",
      startDate: "2025-02-07T09:00:00Z",
      endDate: "2025-02-09T17:00:00Z",
    },
  },
  {
    id: 5,
    organisation: {
      name: "ISTE",
      logo: "/images/iste.svg",
    },
    event: {
      name: "TECHNICA '25",
      image: "/images/technica.png",
      description:
        "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
      type: "HACKATHON",
      typeColor: "#E0AC00",
      startDate: "2025-02-03T10:00:00Z",
      endDate: "2025-02-05T10:00:00Z",
    },
  },
];
