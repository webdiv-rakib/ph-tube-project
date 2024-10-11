/**------------------------------ */
// loadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
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
        card.classList = "card card-compact"

        // dynamically adding innerHTML to div or card
        card.innerHTML = `
        <figure>
            <img
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>  
        `

        // append card that we have crated 
        videoContainer.appendChild(card);
    })
}
// calling loadVideos function
loadVideos();