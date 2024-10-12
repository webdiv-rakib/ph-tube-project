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
        .then(data => displayVideos(data.category))
        .catch(error => console.log(error))
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
            <button onclick = "loadCategoriesVideos(${item.category_id})" class = "btn">
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
