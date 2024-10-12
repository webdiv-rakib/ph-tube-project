/**------------------------------ */
// loadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}

function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    let remainingMinutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hour ${remainingMinutes} Minutes ${remainingSecond} Seconds Ago`;
}
console.log(getTimeString(7865));

// displayVideos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = "";

    // if there is nothing to show up
    if (videos.length === 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
        <div class = " mx-auto h-[600px] w-full flex flex-col gap-5 justify-center items-center">
           <img src = "assets/Icon.png" />
           <h2 class = "text-6xl font-extrabold">Oops!! Sorry, There is no content here</h2>
        </div>
        
        `
        return;
    }
    else{
        videoContainer.classList = "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10"
    }





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

            ${video.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white text-xs">${getTimeString(video.others.posted_date)}</span>`}
            
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
        // append card that we have created 
        videoContainer.appendChild(card);
    })
}
// calling loadVideos function
loadVideos();