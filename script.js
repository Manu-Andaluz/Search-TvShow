const form = document.querySelector('#form');
const button = document.querySelector('#button');
const input = document.querySelector('#input');
const movie = document.querySelector('.movie');
const movieTitle = document.querySelector('.movie-title');

let ul = document.createElement('ul');
movie.append(ul);

form.addEventListener('submit', async function(e){
    //Prevent default (refresh de page)
    e.preventDefault();
    //find de img
    let searchValue = form.elements.query.value;
    const serchResult = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
    console.log(serchResult);
    //saving the result to a variable
    const searchImg = serchResult.data[0].show.image.medium;
    let movieTitle = serchResult.data[0].show.name;
    let OfficialSite = serchResult.data[0].show.officialSite;

    //creating html
    let li = document.createElement('li');

    let showImg = document.createElement('img');
    showImg.src = searchImg;

    let movieName = document.createElement('h2');
    movieName.append(movieTitle);
    
    let button = document.createElement('button');
    button.innerText = 'Sitio Oficial';
    button.classList.add('btn','btn-dark');
    button.addEventListener('click',() => {
        window.open(OfficialSite,'_blank')
    })

    let movieSite = document.createElement('p');
    movieSite.append(OfficialSite);
 
    //append
    ul.append(li);
    li.append(showImg);
    li.append(movieName);
    li.append(button);
    form.reset();
});