/**------------------------------ */
// loadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaae",
    "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
    "title": "Inside Amy Schumer",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
            "profile_name": "Amy Schumer",
            "verified": ""
        }
    ],
    "others": {
        "views": "3.6K",
        "posted_date": "15147"
    },
    "description": "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy."
}

// displayVideos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");

    // to get individual object from and array
    videos.forEach(video => {
        console.log(video);

        // dynamically creating div
        const card = document.createElement("div");

        // dynamically giving class
        card.classList = "card card-compact border"

        // dynamically adding innerHTML to div or card
        card.innerHTML = `
        <figure class="h-[200px] relative">
            <img class = "h-full w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
            <span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white">${video.others.posted_date}</span>
        </figure>
        <div class="px-2 py-2 flex gap-2">
            <div class="">
              <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
            </div>
            <div>
              <h2 class="text-xl font-medium">${video.title}</h2>
              <div class="flex items-center mt-2 gap-2">
                <p class=""><a href="">${video.authors[0].profile_name}</a></p>
                ${video.authors[0].verified === true ? `<img class="h-5 w-5" src ="assets/verified.png" >` : ""}
              </div>
              <p class ="mt-2">${video.others.views} views</p>
            </div>
        </div>  
        `
        // append card that we have crated 
        videoContainer.appendChild(card);
    })
}
// calling loadVideos function
loadVideos();