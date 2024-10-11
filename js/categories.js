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
        button.classList = "btn";

        // button names
        button.innerText = item.category;

        // now append buttons
        categoryContainer.appendChild(button);
    })

}
// calling function
loadCategories2();