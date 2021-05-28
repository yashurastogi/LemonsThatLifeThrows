
const y = document.getElementById('content')

let article = {
    "article1": {
        date: '25 April, 2021',
        link: 'Uncertanity.html',
        heading: 'Uncertainty: Undesired gift for all?',
        category: 'Questions From Followers'
    },
    "article2": {
        date: '30 April,2021',
        link: 'Trickyboss.html',
        heading: 'Ways to handle tricky boss',
        category: 'Questions From Followers'
    },
    "article3": {
        date: '8 May,2021',
        link: 'tortorise.html',
        heading: ' You know why the tortoise won that race?',
        category: 'Questions From Followers'
    },
    "article4": {
        date: '19th May, 2021',
        link: 'productive.html',
        heading: ' 12 Ways to be more productive',
        category: 'Simpler Life'
    },
    "article4": {
        date: '19th May, 2021',
        link: 'productive.html',
        heading: ' 12 Ways to be more productive',
        category: 'Simpler Life'
    }
}


//setting objects in array 
let arr = [];
let i = 0;
for (const [key, value] of Object.entries(article)) {
    arr[i] = value;
    i++;
};
y.innerHTML = '';

//function area 
displayArticle = function () {

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

//calling for display
displayArticle();

