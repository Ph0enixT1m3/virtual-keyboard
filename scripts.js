const form = document.createElement('form')
form.id = 'form'
form.setAttribute("onsubmit", "return false");
const virtual = document.createElement('div')
virtual.classList.add('virtual_container')
virtual.id = 'kinput'
virtual.innerHTML = `<div>
<div class="row">
    <div class="button simple Backquote">
        <p>\`</p>
    </div>
    <div class="button simple Digit1">
        <p>1</p>
    </div>
    <div class="button simple Digit2">
        <p>2</p>
    </div>
    <div class="button simple Digit3">
        <p>3</p>
    </div>
    <div class="button simple Digit4">
        <p>4</p>
    </div>
    <div class="button simple Digit5">
        <p>5</p>
    </div>
    <div class="button simple Digit6">
        <p>6</p>
    </div>
    <div class="button simple Digit7">
        <p>7</p>
    </div>
    <div class="button simple Digit8">
        <p>8</p>
    </div>
    <div class="button simple Digit9">
        <p>9</p>
    </div>
    <div class="button simple Digit0">
        <p>0</p>
    </div>
    <div class="button simple Minus">
        <p>-</p>
    </div>
    <div class="button simple Equal">
        <p>=</p>
    </div>
    <div class="button Backspace">
        <p>Backspace</p>
    </div>
</div>
<div class="row">
    <div class="button Tab">
        <p>Tab</p>
    </div>
    <div class="button simple KeyQ">
        <p>q</p>
    </div>
    <div class="button simple KeyW">
        <p>w</p>
    </div>
    <div class="button simple KeyE">
        <p>e</p>
    </div>
    <div class="button simple KeyR">
        <p>r</p>
    </div>
    <div class="button simple KeyT">
        <p>t</p>
    </div>
    <div class="button simple KeyY">
        <p>y</p>
    </div>
    <div class="button simple KeyU">
        <p>u</p>
    </div>
    <div class="button simple KeyI">
        <p>i</p>
    </div>
    <div class="button simple KeyO">
        <p>o</p>
    </div>
    <div class="button simple KeyP">
        <p>p</p>
    </div>
    <div class="button simple BracketLeft">
        <p>[</p>
    </div>
    <div class="button simple BracketRight">
        <p>]</p>
    </div>
    <div class="button simple Backslash">
        <p>\\</p>
    </div>
</div>
<div class="row">
    <div class="button CapsLock">
        <p>CapsLock</p>
    </div>
    <div class="button simple KeyA">
        <p>a</p>
    </div>
    <div class="button simple KeyS">
        <p>s</p>
    </div>
    <div class="button simple KeyD">
        <p>d</p>
    </div>
    <div class="button simple KeyF">
        <p>f</p>
    </div>
    <div class="button simple KeyG">
        <p>g</p>
    </div>
    <div class="button simple KeyH">
        <p>h</p>
    </div>
    <div class="button simple KeyJ">
        <p>j</p>
    </div>
    <div class="button simple KeyK">
        <p>k</p>
    </div>
    <div class="button simple KeyL">
        <p>l</p>
    </div>
    <div class="button simple Semicolon">
        <p>;</p>
    </div>
    <div class="button simple Quote">
        <p>'</p>
    </div>
    <div class="button Enter">
        <p>Enter</p>
    </div>
</div>
<div class="row">
    <div class="button ShiftLeft">
        <p>Shift</p>
    </div>
    <div class="button simple KeyZ">
        <p>z</p>
    </div>
    <div class="button simple KeyX">
        <p>x</p>
    </div>
    <div class="button simple KeyC">
        <p>c</p>
    </div>
    <div class="button simple KeyV">
        <p>v</p>
    </div>
    <div class="button simple KeyB">
        <p>b</p>
    </div>
    <div class="button simple KeyN">
        <p>n</p>
    </div>
    <div class="button simple KeyM">
        <p>m</p>
    </div>
    <div class="button simple Comma">
        <p>,</p>
    </div>
    <div class="button simple Period">
        <p>.</p>
    </div>
    <div class="button simple Slash">
        <p>/</p>
    </div>
    <div class="button ShiftRight">
        <p>Shift</p>
    </div>
</div>
<div class="row">
    <div class="button ControlLeft">
        <p>ctrl</p>
    </div>
    <div class="button MetaLeft">
        <p>win</p>
    </div>
    <div class="button AltLeft">
        <p>Alt</p>
    </div>
    <div class="button Space">
        <p>space</p>
    </div>
    <div class="button AltRight">
        <p>Alt</p>
    </div>
    <div class="button ControlRight">
        <p>ctrl</p>
    </div>
    <div class="button ArrowLeft">
        <p>left</p>
    </div>
    <div class="group">
        <div class="button ArrowUp">
            <p>up</p>
        </div>
        <div class="button ArrowDown">
            <p>down</p>
        </div>
    </div>
    <div class="button ArrowRight">
        <p>right</p>
    </div>
</div>
<textarea id="area" name="area" readonly="true"></textarea>
<p class="change_lang">change language: alt + shift</p>
</div>`


document.body.prepend(form)
form.prepend(virtual)

kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(e) {
    let currentBtn = document.querySelector('.' + e.code);
    console.log(currentBtn);
  let text = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '') +
    "\n";

  if (area.value && Date.now() - lastTime > 250) {
    area.value += new Array(81).join('-') + '\n';
  }
  lastTime = Date.now();

  area.value += text;
}


alert('Привет! Дай мне, пожалуйста, ещё немного времени (всё доделаю до дедлайна кросс-чека), давай будем на связи - напиши мне в дискорд Ph0enixT1m3#7647 , или в телеграм https://t.me/Zhdan_D_ke , у меня из-за работы не хватило времени :) Спасибо за понимание! ')