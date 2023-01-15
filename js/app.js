const body = document.body;
const button = document.querySelector('#night_day');
const web = document.getElementById('webTab');
const html = document.getElementById('htmlTab');
const css = document.getElementById('cssTab');
const js = document.getElementById('jsTab');
const links = document.querySelectorAll('a');

function nightDayHandler() {
    if (button.value === 'night') {
        body.classList.add('dark');
        button.value = 'day';
    } else if (button.value === 'day') {
        body.classList.remove('dark');
        button.value = 'night';
    }
}

// tabview
button.addEventListener('click', nightDayHandler);
web.addEventListener('click', function () {
    document.getElementById('web').classList.add('on');
    document.getElementById('html').classList.remove('on');
    document.getElementById('css').classList.remove('on');
    document.getElementById('js').classList.remove('on');
});
html.addEventListener('click', function () {
    document.getElementById('web').classList.remove('on');
    document.getElementById('html').classList.add('on');
    document.getElementById('css').classList.remove('on');
    document.getElementById('js').classList.remove('on');
});
css.addEventListener('click', function () {
    document.getElementById('web').classList.remove('on');
    document.getElementById('html').classList.remove('on');
    document.getElementById('css').classList.add('on');
    document.getElementById('js').classList.remove('on');
});
js.addEventListener('click', function () {
    document.getElementById('web').classList.remove('on');
    document.getElementById('html').classList.remove('on');
    document.getElementById('css').classList.remove('on');
    document.getElementById('js').classList.add('on');
});
