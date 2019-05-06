(function() {
    // находим элементы в DOM-дереве запишем в константы
    // находим в документе по ID control и записываем в переменную control
    const control = document.getElementById('control');
    const btnStartAnimate = document.getElementById('checkbox-animate');
    const btnHideProgress = document.getElementById('checkbox-hide');
    const progressBar = document.querySelector('.progress-container');
    console.log(progressBar);
    const dataValue = progressBar.getAttribute('data-value');
    const progressValue = progressBar.querySelector('.progress-bar__value');
    const radius = progressValue.getAttribute('r');

    //определение длины окружности 
    let circumference = 2 * Math.PI * radius;
    progressValue.style.strokeDasharray = circumference;
    /**
     * Определяет смещение обводки (длину) относительно начального положения.
     *
     * @function progress
     * @param {number} число получаемое из атрибута data-value (первоначально), для расчета длины - закраски круга
     */
    function progress(value) {
        let progress = value / 100;
        let dashoffset = Math.floor(circumference * (1 - progress));
        //удалить при сдачи / нужно для тестировке
        console.log('progress:', value + '%', '|', 'offset:', dashoffset);

        progressValue.style.strokeDashoffset = dashoffset;
    }
    
    progress(dataValue);

    // Обработчик события для входного события в control. Событие ввода возникает при изменении значения элемента <input>
    control.oninput = function(evt) {
        //вызывается функция с новым значаем параметра, который задает пользователь
        progress(evt.target.value);
    };

    // по нажатию на кнопку, через обработчик события, добавляется/удаляется класс "animate"
    btnStartAnimate.addEventListener('click', function() {
        progressValue.classList.toggle('animate');
    })
    // по нажатию на кнопку добавляется/удаляется класс "visually-hidden"
    btnHideProgress.addEventListener('click', function() {
        progressBar.classList.toggle('visually-hidden');
    })

})();