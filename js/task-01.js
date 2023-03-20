
const elList = document.querySelectorAll('.item');
const NumberOfCategories = elList.length;
console.log(`Number of categories: ${NumberOfCategories}`);

let markup = '';

    elList.forEach((x) => {
        markup += 
        `
        Category: ${x.querySelector("h2").textContent};
        Elements: ${x.querySelectorAll("li").length};
        `;
    });

    console.log(markup);

