const modal = document.querySelector(".mob-menu");
console.log(modal);
const btnClose = document.querySelector(".button-mob-menu");
console.log(btnClose);
const openModal = document.querySelector(".menu-open-btn");
console.log(openModal);

openModal.addEventListener("click", () => {
  modal.classList.add("is-open");
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

const imgOur = document.querySelectorAll(".taste-item-image");
const titleOur = document.querySelectorAll(".taste-subtitle");
const textOur = document.querySelectorAll(".taste-item-text");
// imgOur[0].srcset =
//   "https://nbookpart.com.ua/wp-content/uploads/2023/10/krutye-kartinki-dzhoker-hit-ledzher-oboi-na-telefon-00c20ad.jpg";
// imgOur[0].setAttribute("width", 444);
// titleOur[0].textContent = "Joker";
// textOur[0].textContent = "Evil hero";

// imgOur[1].srcset =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOvryIe0Mh74Hdo368fJdPpB-rR7wF5hpDA&s";
// imgOur[1].setAttribute("width", 444);
// titleOur[1].textContent = "Batman";
// textOur[1].textContent = "Hero";

const car = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CYX5-44L-4DKcMW73pmqe5UgQXTIQhVULw&s",
    title: "Audi",
    text: "Price: 35000 $",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0o7QCLLqPGM5e3Gq8qn6Y-qLCncxvOj6Xg&s",
    title: "BMV",
    text: "Price: 40000 $",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6qMLRYLVdYjwivk6G3Sd3H8EG12RRLeScA&s",
    title: "Mersedes",
    text: "Price: 50000 $",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCs8A0HybrAhJ7Y9fvebkzIRrqeiI39NY9Q&s",
    title: "Porsche",
    text: "Price: 60000 $",
  },
];

car.forEach((car, index) => {
  imgOur[index].srcset = car.img;

  titleOur[index].textContent = car.title;
  textOur[index].textContent = car.text;
});

const heroTiotle = document.querySelector(".hero-btn");
