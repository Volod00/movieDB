document.addEventListener('DOMContentLoaded', () => {

const title = document.querySelector('.promo__interactive-title');
const list = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('form.add');
const input = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');
const promoAdv = document.querySelectorAll('.promo__adv img');
const promoTitle = document.querySelector('.promo_adv-title');
const genre = document.querySelector('.promo__genre');
const promoBG = document.querySelector('.promo__bg');
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteAdd = (arr) =>{
     arr.forEach(element =>{
        element.remove();
        });
    };
deleteAdd(promoAdv);
     
const makeChanges = () =>{
    genre.textContent = "Drama";
    promoBG.style.backgroundImage = 'url("img/mars.webp")';
};
makeChanges();

const sortArray = (array) =>{
    array.sort();
};
sortArray(movieDB.movies);

function createMovieList(films, parent){
    parent.innerHTML = "";
    sortArray(films);
    films.forEach((film,item)=>{
    parent.innerHTML += `
    <li class="promo__interactive-item">${item+1}:${film}
            <div class="delete"></div>
        </li> `;
    });
    
    document.querySelectorAll('.delete').forEach((btn, i) =>{
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);

            createMovieList(films, parent)
        });
    });
};
createMovieList(movieDB.movies, list);

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newFilm = input.value;
    let fauvorite = checkbox.checked;
    
    if (fauvorite){
        console.log("favourite movie");
    }
    
        if (newFilm){
        if (newFilm.length>21){
            newFilm = `${newFilm.substring(0,22)}...`;
        }
    movieDB.movies.push(newFilm);
    sortArray(movieDB.movies);
    createMovieList(movieDB.movies, list);
    }
    e.target.reset();
});


});






