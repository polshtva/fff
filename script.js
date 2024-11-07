// Алгоритм: 

//1) Разметка
// 2) стили
// 3) Инициализация переменные (name, phone, email, btn, data-res)
// 4) функция создания и добавления новой карточки
// 5) редактирование
// 6) удалить элемент


const surname = document.getElementById("surname");
const name = document.getElementById("name");
const patronymic = document.getElementById("patronymic");
const tel = document.getElementById("phone");

const addBtn = document.getElementById("addBtn");
const resContacts = document.getElementById("contancts");


// console.log(surname);

// console.log(surname.value.trim())

//добавлять
function addCard(){
    const surnameValue =  surname.value.trim();
    const nameValue = name.value.trim();
    const patronymicValue = patronymic.value.trim();
    const telValue = tel.value.trim()

    if(surnameValue && nameValue && patronymicValue && telValue){
        const contactCard = createCard();
        resContacts.append(contactCard);
    }   

}

//создавать
function createCard(){

}

//Добавляем обработчик события для кнопки добавления данных
addBtn.addEventListener("click", addCard)