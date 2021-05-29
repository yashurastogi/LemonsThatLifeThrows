import { article } from './artilce.js'
// document.write('<script type="text/javascript" src="artilce.js" ></script>');


const y = document.getElementById('content')


//setting objects in array 
let arr = [];
let i = 0;
for (const [key, value] of Object.entries(article)) {
    arr[i] = value;
    i++;
};
y.innerHTML = '';

//function area 
export const displayArticle = function () {
    y.innerHTML = '';
    arr.forEach((item, i) => {
        let border = 'border-bottom'
        i < arr.length - 1 ? createDiv(item, border) : createDiv(item);
    }
    )
}
//creating div
const createDiv = function (item, border) {
    const contain = document.createElement('div');
    contain.classList.add('pb-2');

    contain.innerHTML = `
        
            <a href="${item.link}">
                <h6 class="${border} pb-2 secondary-content-meta">
                    ${item.heading}
                    </h6>
            </a>
        `
    y.appendChild(contain);
}

//recent post 




//calling for display
displayArticle();
