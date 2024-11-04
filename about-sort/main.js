import "./style.css";
import "./node_modules/flowbite/dist/flowbite";

const container = document.querySelector(".container");
const dropdownItems = document.querySelectorAll(".dropdown-item");

const videos = [
  {
    title: "Episode 83 - localStorage (Part 2)",
    thumbnail:
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    uploadDate: new Date(2024, 7, 17),
    viewCount: 300,
  },
  {
    title: "Episode 82 - localStorage (Part 1)",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
    uploadDate: new Date(2024, 7, 16),
    viewCount: 1500,
  },
  {
    title: "Episode 85 - JSoN (Part 2)",
    thumbnail:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    uploadDate: new Date(2024, 7, 19),
    viewCount: 1000,
  },
  {
    title: "Episode 84 - JSON (Part 1)",
    thumbnail:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    uploadDate: new Date(2024, 7, 18),
    viewCount: 800,
  },
];

dropdownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener("click", (event) => {
    const sortType = event.target.id;
    if (sortType === "ascending") {
      const videoSortByAscendingOrder = videos.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      updateSortUI(videoSortByAscendingOrder);
    } else if (sortType === "views") {
      const videoSortByViewsOrder = videos.sort(
        (a, b) => b.viewCount - a.viewCount
      );
      updateSortUI(videoSortByViewsOrder);
    } else {
      const videoSortByDescendingOrder = videos.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      updateSortUI(videoSortByDescendingOrder);
    }
  });
});

// const sortedByTitle = videos.sort((a,b) => {
// // return  a.uploadDate.getTime() - b.uploadDate.getTime();
// console.log(a.uploadDate.getTime() - b.uploadDate.getTime());
// console.log("========");
// // console.log(b.uploadDate);

// })

// console.log(sortedByTitle);

const updateSortUI = (videos) => {
  container.innerHTML = "";
  videos.forEach((video) => {
    const videoTag = `
  <div class="my-5 w-[50%] shadow-xl">
    <img src="${video.thumbnail}" class="">
    <h6 class= "text-center py-3 text-[20px]">${video.title}</h6>
    <p class="flex items-center justify-between mb-5 text-gray-700 px-5">
    <span>${video.uploadDate.toLocaleDateString()}</span>
    <span class="border-b-2 border-stone-600">${video.viewCount} views</span>
    </p>
  </div>
  `;

    container.innerHTML += videoTag;
  });
};

updateSortUI(videos);
