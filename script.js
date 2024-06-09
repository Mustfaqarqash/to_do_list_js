let taks = [
    {
        title: "Read Book",
        date: "8/6/2024",
        isDone: true,
    },
    {
        title: "Start project",
        date: "8/6/2024",
        isDone: false,
    },
    {
        title: "End project",
        date: "8/6/2024",
        isDone: true,
    }

];
let task = {
    title: "Read Book",
    date: "8/6/2024",
    isDone: true,
};
document.getElementById("tasks").innerHTML ="";
for (let i = 0; i < taks.length; i++) {
    document.getElementById("tasks").innerHTML += `
    <section>
           <div class="buttons">
               <button class="update">
                   <i class="fa-regular fa-pen-to-square"></i>
               </button>
               <button class="success">
                   <i class="fa-solid fa-check"></i>
               </button>
               <button class="delete">
                   <i class="fa-solid fa-trash"></i>
               </button>
           </div>
           <div class="content">
               <p class="title">${taks[i].title}</p>
               <div class="date">
                   <p>${taks[i].date}</p>
                   <i class="fa-regular fa-calendar"></i>
               </div>
           </div>
       </section>
`
}
