// Insert your JavaScript code´s here (will apply in all pages.)

const JavaScript = `

function calcularAreaTriangulo() {
  const base = document.querySelector('#base');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('span');

    [resultado.innerHTML = parseFloat(base.value) * parseFloat(altura.value) / 2 + 'm²']
};

function calcularAreaQuadrado() {
  const lado1 = document.querySelector('#lado1');
const lado2 = document.querySelector('#lado2');
const resultado = document.querySelector('span');

    resultado.innerHTML = parseFloat(lado1.value) * parseFloat(lado2.value) + 'm²'
};

function calcularAreaTrapezio() {
  const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const h = document.querySelector('#h');
const resultado = document.querySelector('span');

    resultado.innerHTML = [[[parseFloat(b1.value) + parseFloat(b2.value)] * parseFloat(h.value)] / 2] + 'm²'
};

function calcularAreaLosango() {
  const D1 = document.querySelector('#D1');
const d2 = document.querySelector('#d2');
const resultado = document.querySelector('span');

[resultado.innerHTML = parseFloat(D1.value) * parseFloat(d2.value) / 2 + 'm²']

};

function calcularPerimetroTriangulo() {
  const lado1 = document.querySelector('#lado1');
const lado2 = document.querySelector('#lado2');
const lado3 = document.querySelector('#lado3');
const resultado = document.querySelector('span');

    [resultado.innerHTML = parseFloat(lado1.value) + parseFloat(lado2.value) + parseFloat(lado3.value)]
};

function calcularPerimetroLosango() {
  const L = document.querySelector('#L');
  const resultado = document.querySelector('span');

    [resultado.innerHTML = parseFloat(L.value) * 4]
};

function calcularPerimetroRetangulo() {
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  const resultado = document.querySelector('span');

    [resultado.innerHTML = (parseFloat(a.value) + parseFloat(b.value)) * 2]
};

function calcularPerimetroTrapezio() {
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  const c = document.querySelector('#c');
  const d = document.querySelector('#d');
  const resultado = document.querySelector('span');

    [resultado.innerHTML = parseFloat(a.value) + parseFloat(b.value) + parseFloat(c.value) + parseFloat(d.value)]
};

function calcularPerimetroLosango() {
  const L = document.querySelector('#L');
  const resultado = document.querySelector('span');

    [resultado.innerHTML = parseFloat(L.value)* 4]
};


function calcularBhaskara() {
  const a = parseFloat(document.querySelector('#a').value);
  const b = parseFloat(document.querySelector('#b').value);
  const c = parseFloat(document.querySelector('#c').value);
  const x1 = document.querySelector('#x1');
  const x2 = document.querySelector('#x2');

  const delta = (b ** 2) - (4 * a * c);

  if (delta > 0) {
    const x1_resultado = (-b + Math.sqrt(delta)) / (2 * a);
    const x2_resultado = (-b - Math.sqrt(delta)) / (2 * a);

    x1.innerHTML = x1_resultado.toFixed(2);
    x2.innerHTML = x2_resultado.toFixed(2);
  } else if (delta === 0) {
    const x = -b / (2 * a);
    x1.innerHTML = x2.innerHTML = 'Raiz única = ' + x.toFixed(2);
  } else {
    x1.innerHTML = x2.innerHTML = 'Não existem raízes reais';
  }
  };

  function c2() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');

    resultado.innerHTML = Math.sqrt(parseFloat(a.value));
  };

  function c2() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');

    resultado.innerHTML = Math.sqrt(parseFloat(a.value));
  }

  function c3() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');

    resultado.innerHTML = Math.cbrt(parseFloat(a.value));
  }

  function c4() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizQuarta(a) {
      return Math.pow(a, 1/4);
  }
    resultado.innerHTML = raizQuarta(a.value);
  }

  function c5() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizQuinta(a) {
      return Math.pow(a, 1/5);
  }
    resultado.innerHTML = raizQuinta(a.value);
  }

  function c6() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizSexta(a) {
      return Math.pow(a, 1/6);
  }
    resultado.innerHTML = raizSexta(a.value);
  }

  function c7() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizSetima(a) {
      return Math.pow(a, 1/7);
  }
    resultado.innerHTML = raizSetima(a.value);
  }

  function c8() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizOitava(a) {
      return Math.pow(a, 1/8);
  }
    resultado.innerHTML = raizOitava(a.value);
  }

  function c9() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizNona(a) {
      return Math.pow(a, 1/9);
  }
    resultado.innerHTML = raizNona(a.value);
  }

  function c10() {
    const a = document.querySelector('#n');
    const resultado = document.querySelector('span');
    
    function raizDecima(a) {
      return Math.pow(a, 1/10);
  }
    resultado.innerHTML = raizDecima(a.value);
  }


  `;
module.exports = JavaScript;