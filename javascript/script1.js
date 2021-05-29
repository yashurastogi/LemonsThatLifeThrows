import { article } from './artilce.js'
import { displayArticle } from './script.js'


let arr = [];
let i = 0;
for (const [key, value] of Object.entries(article)) {
    arr[i] = value;
    i++;
};


const recentImage = document.getElementById('recentImage');
const recentPost = function () {
    recentImage.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `<a href="${arr[arr.length - 1].link}">
                <img src="${arr[arr.length - 1].img}" class="img-fluid" alt="Path of Uncertainty">
      
                <h2 class="py-2">
                ${arr[arr.length - 1].heading}
                </h2>
              </a>`
    const div1 = document.createElement('div');
    div1.classList.add('row');
    div1.innerHTML = `   <div class="col-md-2 meta-info">
                  <p class="text-muted m-0">by Sujata Singh</p>
                  <p class="text-muted m-0">Posted on ${arr[arr.length - 1].date}</p>
                  <p class="mb-1"> in ${arr[arr.length - 1].category}</a></p>
                </div>
         
                <div class="col-md-10 primary-content px-3 primary-font">

                  <p>
                    ${arr[arr.length - 1].content}


                  </p>

                  <a href="${arr[arr.length - 1].link}" class="text-muted secondary-content-meta">Read More</a>

`;
    recentImage.appendChild(div);
    div.appendChild(div1);
}
recentPost();
displayArticle();
