/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];

        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.textContent);
        });

        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let isClicked = false;

    link.addEventListener('click', function (event) {
        if (!isClicked) {
            event.preventDefault();
            link.textContent = link.textContent + ' ' + link.href;
            isClicked = true;
        }
    });

    document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function createLi() {
        let li = document.createElement('li');
        li.textContent = 'Пункт';

        li.addEventListener('click', function () {
            li.textContent = li.textContent + '!';
        });

        return li;
    }

    ul.appendChild(createLi());

    button.addEventListener('click', function () {
        ul.appendChild(createLi());
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
