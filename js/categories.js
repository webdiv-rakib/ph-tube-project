// console.log('categories');
// 1. Fetch, load and show categories on html

/**----------------------------------------------------- */
// create loadCategories
// const loadCategories = () => {
//     // console.log('loadCategories created');
//     // fetch the data
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then((res) => res.json(res))
//         .then((data) => displayCategories(data.categories))
//         .catch((error) => console.log(error))
// };

// create DisplayCategories
// const displayCategories = (categories) => {
//     const categoryContainer = document.getElementById("categories");
//     // add data in html
//     categories.forEach((item) => {
//         console.log(item);
//         // create button
//         const button = document.createElement("button");
//         button.classList = "btn"
//         button.innerText = item.category;
//         // add button to categories
//         categoryContainer.appendChild(button);
//     })
// };
// calling function
// loadCategories();

/**------------------------------------------------------- */
// create loadCategories2
const loadCategories2 = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories2(data.categories))
        .catch(error => console.log(error))
}

// displayCategories2
const displayCategories2 = (categories) => {
    const categoryContainer = document.getElementById("categories");
    // to get specific item
    categories.forEach(item => {
        console.log(item);

        // now create button dynamic
        const button = document.createElement("button");

        // assign a class to the button
        button.classList = "btn bg-red-400 rounded-full";

        // button names
        button.innerText = item.category;

        // now append buttons
        categoryContainer.appendChild(button);
    })

}

/**----------------------------------------------------------- */
// loadVideos 
// const loadVideos = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
//         .then(res => res.json())
//         .then(data => displayVideos(data.videos))
//         .catch(error => console.log(error))
// }

// const cardDemo =
// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }



// // displayVideos
// const displayVideos = (videos) => {
//     const videoContainer = document.getElementById("videos");
//     videos.forEach(video => {
//         console.log(video);
//         const card = document.createElement("div");
//         card.classList = "card card-compact"
//         card.innerHTML = `
//         <figure>
//         <img
//          src="${video.thumbnail}
//          alt="Shoes" />
//        </figure>
//        <div class="card-body">
//            <h2 class="card-title">Shoes!</h2>
//            <p>If a dog chews shoes whose shoes does he choose?</p>
//            <div class="card-actions justify-end">
//            <button class="btn btn-primary">Buy Now</button>
//            </div>
//        </div>
//         `
//         videoContainer.appendChild(card);
//     })
// }

/**---------------------------------------------------------------------------- */
// loadVideos
const loadVideos = () => {
    // fetch link
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')

        // convert fetch what we got and covert it to json
        .then(res => res.json())

        // to show data what we convert into json
        .then(data => displayVideos(data.videos))

        // to catch error if we got any
        .catch(error => console.log(error))
}
/**------------------------------------------------------------------------------ */
// displayVideos
const displayVideos = (videos) => {
    // where we will show our video details section or div
    const videoContainer = document.getElementById("videos");

    // for individual video object
    videos.forEach(video => {
        console.log(video);

        // dynamically added div or we san say to show as a card
        const card = document.createElement("div");

        // added class for our new div
        card.classList = "card card-compact";

        // added dynamic innerHTML what will show inside card
        card.innerHTML = `
        <figure>
            <img
            src= ${video.thumbnail}
            alt="Shoes" />
       </figure>
      <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
      </div>
        `
        // now appending our card to the video section
        videoContainer.appendChild(card);
    })
}




















































































// calling function
loadCategories2();
loadVideos();

