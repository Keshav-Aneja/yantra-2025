import { EventCardProps } from "@/components/event-card";

export const eventTypes = [
  "ALL",
  "HACKATHON",
  "WORKSHOP",
  "TECH TALK",
  "TECH COMPETITION",
];

export const eventsWithResultType = [
  "ALL",
  "HACKATHON",
  "TECH COMPETITION",
]

export const getEventColor = (eventType: string)=>{
  switch(eventType){
    case "HACKATHON": return "#E0AC00";
    case "WORKSHOP": return "#00E00F";
    case "TECH TALK": return "#E00004";
    case "TECH COMPETITION": return "#AC47FF";
    default: return "#ffffff";
  }
}

// export const events: EventCardProps[] = [
//   {
//     id: 1,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Proident quis deserunt quis quis non. Anim occaecat ex est enim laboris culpa consectetur eiusmod et qui Lorem. Esse cupidatat nulla do anim sint adipisicing sunt cupidatat nulla veniam ipsum. Culpa minim nulla eiusmod ex sint sunt sint adipisicing in exercitation anim nisi aute voluptate.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 2,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "WORKSHOP",
//       typeColor: "#00E00F",
//       startDate: "2025-02-05T11:00:00Z",
//       endDate: "2025-02-05T13:00:00Z",
//     },
//   },
//   {
//     id: 3,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH TALK",
//       typeColor: "#E00004",
//       startDate: "2025-02-06T14:00:00Z",
//       endDate: "2025-02-06T16:00:00Z",
//     },
//   },
//   {
//     id: 4,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH COMPETITION",
//       typeColor: "#AC47FF",
//       startDate: "2025-02-07T09:00:00Z",
//       endDate: "2025-02-09T17:00:00Z",
//     },
//   },
//   {
//     id: 5,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 6,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Proident quis deserunt quis quis non. Anim occaecat ex est enim laboris culpa consectetur eiusmod et qui Lorem. Esse cupidatat nulla do anim sint adipisicing sunt cupidatat nulla veniam ipsum. Culpa minim nulla eiusmod ex sint sunt sint adipisicing in exercitation anim nisi aute voluptate.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 7,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "WORKSHOP",
//       typeColor: "#00E00F",
//       startDate: "2025-02-05T11:00:00Z",
//       endDate: "2025-02-05T13:00:00Z",
//     },
//   },
//   {
//     id: 8,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH TALK",
//       typeColor: "#E00004",
//       startDate: "2025-02-06T14:00:00Z",
//       endDate: "2025-02-06T16:00:00Z",
//     },
//   },
//   {
//     id: 9,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH COMPETITION",
//       typeColor: "#AC47FF",
//       startDate: "2025-02-07T09:00:00Z",
//       endDate: "2025-02-09T17:00:00Z",
//     },
//   },
//   {
//     id: 10,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 11,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Proident quis deserunt quis quis non. Anim occaecat ex est enim laboris culpa consectetur eiusmod et qui Lorem. Esse cupidatat nulla do anim sint adipisicing sunt cupidatat nulla veniam ipsum. Culpa minim nulla eiusmod ex sint sunt sint adipisicing in exercitation anim nisi aute voluptate.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 12,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "WORKSHOP",
//       typeColor: "#00E00F",
//       startDate: "2025-02-05T11:00:00Z",
//       endDate: "2025-02-05T13:00:00Z",
//     },
//   },
//   {
//     id: 13,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH TALK",
//       typeColor: "#E00004",
//       startDate: "2025-02-06T14:00:00Z",
//       endDate: "2025-02-06T16:00:00Z",
//     },
//   },
//   {
//     id: 14,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH COMPETITION",
//       typeColor: "#AC47FF",
//       startDate: "2025-02-07T09:00:00Z",
//       endDate: "2025-02-09T17:00:00Z",
//     },
//   },
//   {
//     id: 15,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 16,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Proident quis deserunt quis quis non. Anim occaecat ex est enim laboris culpa consectetur eiusmod et qui Lorem. Esse cupidatat nulla do anim sint adipisicing sunt cupidatat nulla veniam ipsum. Culpa minim nulla eiusmod ex sint sunt sint adipisicing in exercitation anim nisi aute voluptate.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
//   {
//     id: 17,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "WORKSHOP",
//       typeColor: "#00E00F",
//       startDate: "2025-02-05T11:00:00Z",
//       endDate: "2025-02-05T13:00:00Z",
//     },
//   },
//   {
//     id: 18,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH TALK",
//       typeColor: "#E00004",
//       startDate: "2025-02-06T14:00:00Z",
//       endDate: "2025-02-06T16:00:00Z",
//     },
//   },
//   {
//     id: 19,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "TECH COMPETITION",
//       typeColor: "#AC47FF",
//       startDate: "2025-02-07T09:00:00Z",
//       endDate: "2025-02-09T17:00:00Z",
//     },
//   },
//   {
//     id: 20,
//     organisation: {
//       name: "ISTE",
//       logo: "/images/iste.svg",
//     },
//     event: {
//       name: "TECHNICA '25",
//       image: "/images/technica.png",
//       description:
//         "Welcome to Technica, a 48-hour hackathon by ISTE-VIT, where innovators collaborate to tackle real-world challenges and shape the future of tech.",
//       type: "HACKATHON",
//       typeColor: "#E0AC00",
//       startDate: "2025-02-03T10:00:00Z",
//       endDate: "2025-02-05T10:00:00Z",
//     },
//   },
// ];
