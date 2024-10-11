/**------------------------------------------------------- */
// create loadCategories
const loadCategories = () => {
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
// calling loadCategories function
loadCategories();
