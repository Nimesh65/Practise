const people = [
  {
    id: "0",
    name: "Sofia Martinez",
    role: "UI/UX Designer",
    desc: "Sofia creates intuitive and visually engaging user interfaces by combining creative design with user research. She focuses on accessibility, usability, and consistent design systems to enhance overall user experience.",
  },
  {
    id: "1",
    name: "Maya Patel",
    role: "ML Engineer",
    desc: "Maya designs and deploys machine learning models that transform complex datasets into meaningful insights. She works on improving model accuracy, scalability, and reliability while applying AI solutions to real-world business problems.",
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Web Developer",
    desc: "Alex specializes in building responsive and visually appealing websites using modern web technologies. He focuses on clean, maintainable code and performance optimization to deliver fast, user-friendly digital experiences across devices.",
  },
  {
    id: "3",
    name: "Chris Walker",
    role: "Software Engineer",
    desc: "Chris develops robust and scalable software systems with a strong emphasis on problem-solving and system architecture. He enjoys writing efficient, maintainable code and collaborating with teams to build long-lasting applications.",
  },
  {
    id: "4",
    name: "Daniel Kim",
    role: "Backend Developer",
    desc: "Daniel builds secure and scalable backend services, focusing on APIs, databases, and server-side logic. He ensures system reliability, data integrity, and smooth communication between frontend applications and backend infrastructure.",
  },
  {
    id: "5",
    name: "Emma Brown",
    role: "Frontend Developer",
    desc: "Emma transforms design concepts into interactive user interfaces using modern frontend frameworks. She prioritizes performance, accessibility, and cross-browser compatibility to deliver smooth and engaging web experiences.",
  },
  {
    id: "6",
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    desc: "Rahul works across both frontend and backend technologies to deliver complete web solutions. He focuses on clean architecture, performance optimization, and building scalable applications that meet real business needs.",
  },
  {
    id: "7",
    name: "Olivia Wilson",
    role: "Data Scientist",
    desc: "Olivia analyzes large and complex datasets to uncover patterns, trends, and actionable insights. She applies statistical modeling and data visualization techniques to support informed, data-driven decision-making.",
  },
  {
    id: "8",
    name: "Noah Anderson",
    role: "DevOps Engineer",
    desc: "Noah automates deployment pipelines and manages cloud infrastructure to ensure reliable and efficient systems. He focuses on improving deployment speed, system monitoring, and collaboration between development and operations teams.",
  },
  {
    id: "9",
    name: "Aisha Khan",
    role: "Mobile App Developer",
    desc: "Aisha develops high-quality mobile applications with a focus on performance, usability, and clean design. She creates seamless experiences across Android and iOS platforms while following best practices in mobile development.",
  },
];
let employee = people[0];
let num = 0;
const surprise = document.getElementById("random");
const nam = document.querySelector(".name h3");
const role = document.querySelector(".role h3");
const description = document.querySelector(".description h4");
const imageElement = document.getElementById("myImage");
const toggle = document.querySelector(".toggle");
let mode = null;
imageElement.setAttribute("src", `images/${num}.jpg`);
//   imageElement.src = `images/${num}.jpg`;
nam.textContent = people[num].name;
role.textContent = people[num].role;
description.textContent = people[num].desc;
function Generate() {
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  return randomPerson;
}
toggle.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  mode = e.target.id;
  if (mode === "prev") {
    if (num == 0) {
      num = 9;
      imageElement.setAttribute("src", `images/${num}.jpg`);
      //   imageElement.src = `images/${num}.jpg`;
      nam.textContent = people[num].name;
      role.textContent = people[num].role;
      description.textContent = people[num].desc;
    } else {
      num--;
      imageElement.setAttribute("src", `images/${num}.jpg`);
      //   imageElement.src = `images/${num}.jpg`;
      nam.textContent = people[num].name;
      role.textContent = people[num].role;
      description.textContent = people[num].desc;
    }
  } else if (mode === "reset") {
    num = 0;
    imageElement.setAttribute("src", `images/${num}.jpg`);
    //   imageElement.src = `images/${num}.jpg`;
    nam.textContent = people[num].name;
    role.textContent = people[num].role;
    description.textContent = people[num].desc;
  } else if (mode === "next") {
    if (num == 9) {
      num = 0;
      imageElement.setAttribute("src", `images/${num}.jpg`);
      //   imageElement.src = `images/${num}.jpg`;
      nam.textContent = people[num].name;
      role.textContent = people[num].role;
      description.textContent = people[num].desc;
    } else {
      num++;
      imageElement.setAttribute("src", `images/${num}.jpg`);
      //   imageElement.src = `images/${num}.jpg`;
      nam.textContent = people[num].name;
      role.textContent = people[num].role;
      description.textContent = people[num].desc;
    }
  }
});
surprise.addEventListener("click", function () {
  const randompeople = Generate();
  num = randompeople.id;
  imageElement.setAttribute("src", `images/${randompeople.id}.jpg`);
  //   imageElement.src = `images/${num}.jpg`;
  nam.textContent = randompeople.name;
  role.textContent = randompeople.role;
  description.textContent = randompeople.desc;
});
