/**------------------------------------------------------- */
// create loadCategories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories2(data.categories))
        .catch(error => console.log(error))
}

const loadCategoriesVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            // remove active class from all
            removeActiveClass();
            // id er class active kora
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add("active");
            displayVideos(data.category)
        })
        .catch(error => console.log(error))
}

const loadDetails = async (videoId) => {
    console.log(videoId);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url)
    const data = await res.json()
    displayDetails(data.video);
}

const displayDetails = (video) => {
    console.log(video);
    const detailsContainer = document.getElementById("modal-content")
    detailsContainer.innerHTML = `
    <img src="${video.thumbnail}" />
    <p>${video.description}</p>
    
    `
    //  way-1
    // document.getElementById("showModalData").click();
    // way-2
    document.getElementById("customModal").showModal();
}


const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons);
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
}


// displayCategories2
const displayCategories2 = (categories) => {
    const categoryContainer = document.getElementById("categories");
    // to get specific item
    categories.forEach(item => {
        console.log(item);

        // working on categorical button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick = "loadCategoriesVideos(${item.category_id})" class = "btn category-btn">
            ${item.category}
            </button>
        `;

        // now create button dynamic
        // const button = document.createElement("button");

        // assign a class to the button
        // button.classList = "btn bg-red-400 rounded-full";

        // button names
        // button.innerText = item.category;

        // we will use this later
        // button.onclick =()=>{alert("Hello")} ;

        // now append buttons
        categoryContainer.appendChild(buttonContainer);
    })

}
// calling loadCategories function
loadCategories();
