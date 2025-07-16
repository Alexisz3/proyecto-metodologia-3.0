const preguntas = {
    musica: [
        {
            pregunta: "¿Quién es considerado el máximo exponente de la música tradicional cuencana?",
            opciones: ["Gerardo Guevara", "Segundo Bautista", "Carlos Rubira Infante", "Nicasio Safadi"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es el nombre del tradicional género musical cuencano interpretado con rondadores y guitarras?",
            opciones: ["Sanjuanito", "Albazo", "Pasillo", "Yaraví"],
            respuesta: 2
        },
        {
            pregunta: "¿Cuál de estos artistas ha interpretado la canción “Chola Cuencana”?",
            opciones: ["Paulina Tamayo", "Julio Jaramillo", "Pepe Jaramillo", "Margarita Laso"],
            respuesta: 0
        },
        {
            pregunta: "¿Qué instrumento andino es típico en la música tradicional cuencana?",
            opciones: ["Quena", "Rondador", "Zampoña", "Charango"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es el festival musical más representativo de Cuenca?",
            opciones: ["Festival de la Luz", "Festival de Música Sacra", "Festival de la Lira", "Festival de Jazz"],
            respuesta: 1
        },
        {
            pregunta: "¿Quién compuso la famosa canción “Vasija de Barro”, tan interpretada en Cuenca?",
            opciones: ["Gonzalo Benítez", "Benjamín Carrión", "Gonzalo Llona", "Jorge Carrera Andrade"],
            respuesta: 3
        },
        {
            pregunta: "¿En qué mes se realiza tradicionalmente el Festival Internacional de la Cultura en Cuenca?",
            opciones: ["Febrero", "Abril", "Noviembre", "Agosto"],
            respuesta: 2
        },
        {
            pregunta: "¿Cuál es un género musical que se escucha en las fiestas de Cuenca?",
            opciones: ["Marinera", "Danzante", "Cumbia", "Tango"],
            respuesta: 2
        },
        {
            pregunta: "¿Qué canción es considerada un himno no oficial de Cuenca?",
            opciones: ["Linda Cuenca", "Chola Cuencana", "Vasija de Barro", "El Aguacate"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué agrupación cuencana ha representado a la ciudad en el exterior?",
            opciones: ["Trío Colonial", "Los Trovadores", "Los Hermanos Miño Naranjo", "Dúo Benítez-Valencia"],
            respuesta: 1
        }
    ],
    comida: [
        {
            pregunta: "¿Cuál es el plato típico por excelencia en Cuenca durante el Carnaval?",
            opciones: ["Hornado", "Fanesca", "Mote Pata", "Encebollado"],
            respuesta: 2
        },
        {
            pregunta: "¿Cuál de estos ingredientes es indispensable en el “mote pillo”?",
            opciones: ["Pollo", "Huevo", "Carne de res", "Pescado"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es el postre tradicional de Cuenca preparado con higos?",
            opciones: ["Higos con queso", "Dulce de higos", "Helado de paila", "Queso de hoja"],
            respuesta: 1
        },
        {
            pregunta: "¿Cómo se llama la bebida de maíz fermentado típica de Cuenca?",
            opciones: ["Chicha", "Canelazo", "Colada morada", "Morocho"],
            respuesta: 0
        },
        {
            pregunta: "¿Qué tipo de pan es famoso en Cuenca y se suele comer en la merienda?",
            opciones: ["Pan de yuca", "Pan de agua", "Pan de cebada", "Pan de trigo"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál de estos platos es una sopa tradicional de Cuenca?",
            opciones: ["Locro", "Mote sucio", "Encebollado", "Caldo de patas"],
            respuesta: 3
        },
        {
            pregunta: "¿Qué alimento acompaña siempre al “hornado” cuencano?",
            opciones: ["Choclo", "Mote", "Yuca", "Arroz"],
            respuesta: 1
        },
        {
            pregunta: "¿Cómo se llama el bocadillo de dulce típico de Cuenca preparado con leche y azúcar?",
            opciones: ["Natilla", "Turrón", "Rosquillas", "Queso de hoja"],
            respuesta: 0
        },
        {
            pregunta: "¿Cuál es el platillo preparado con sangre de cerdo, arroz y especias?",
            opciones: ["Chorizo", "Morcilla", "Salchicha", "Seco"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué fruta es típica en los mercados de Cuenca durante la temporada de Corpus Christi?",
            opciones: ["Frutilla", "Capulí", "Granadilla", "Mango"],
            respuesta: 1
        }
    ],
    arte: [
        {
            pregunta: "¿En qué museo de Cuenca se encuentra la famosa “Vasija de Barro”?",
            opciones: ["Museo Remigio Crespo", "Museo Pumapungo", "Museo de Arte Moderno", "Museo de las Conceptas"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es la técnica artesanal famosa en Cuenca y reconocida por la UNESCO?",
            opciones: ["Cerámica", "Sombrero de paja toquilla", "Bordado", "Orfebrería"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué artista cuencano es conocido por su obra en acuarela y paisajismo?",
            opciones: ["Oswaldo Guayasamín", "Eduardo Segovia", "Hernán Illescas", "Enrique Tábara"],
            respuesta: 2
        },
        {
            pregunta: "¿Qué color predomina en las fachadas coloniales del centro histórico de Cuenca?",
            opciones: ["Azul", "Amarillo", "Blanco", "Verde"],
            respuesta: 2
        },
        {
            pregunta: "¿Qué evento artístico se realiza en noviembre con instalaciones en toda la ciudad?",
            opciones: ["Bienal de Cuenca", "Fiesta de la Mama Negra", "Carnaval de las Flores", "Festival Internacional de Danza"],
            respuesta: 0
        },
        {
            pregunta: "¿Qué escultura es característica de la Plaza San Sebastián?",
            opciones: ["Ángel de la Paz", "El Perro Callejero", "El Monumento a la Chola Cuencana", "Fuente de los Leones"],
            respuesta: 3
        },
        {
            pregunta: "¿Cuál es el principal teatro de la ciudad?",
            opciones: ["Teatro Sucre", "Teatro CCE", "Teatro Bolívar", "Teatro Pumapungo"],
            respuesta: 2
        },
        {
            pregunta: "¿Qué pintor cuencano realizó murales en la Catedral Nueva?",
            opciones: ["Eduardo Segovia", "Miguel Illescas", "Humberto Moré", "Jaime Andrade"],
            respuesta: 2
        },
        {
            pregunta: "¿Cuál es una artesanía típica de Cuenca aparte del sombrero de paja toquilla?",
            opciones: ["Juguetes de madera", "Orfebrería de plata", "Tapices", "Tallado en piedra"],
            respuesta: 1
        },
        {
            pregunta: "¿Dónde se exhibe la Bienal de Arte de Cuenca?",
            opciones: ["Museo de las Conceptas", "Antiguo Hospital Militar", "Casa de la Cultura", "Diferentes espacios públicos y privados"],
            respuesta: 3
        }
    ],
    cultura: [
        {
            pregunta: "¿En qué año fue declarada Cuenca Patrimonio Cultural de la Humanidad por la UNESCO?",
            opciones: ["1989", "1999", "2002", "2012"],
            respuesta: 1
        },
        {
            pregunta: "¿Cómo se llama el río más largo que cruza Cuenca?",
            opciones: ["Tomebamba", "Yanuncay", "Tarqui", "Machángara"],
            respuesta: 0
        },
        {
            pregunta: "¿Cuál es el nombre oficial de la catedral más grande de Cuenca?",
            opciones: ["Catedral Nueva", "Catedral de la Inmaculada Concepción", "Catedral Vieja", "Basílica del Voto Nacional"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuántos ríos principales atraviesan la ciudad de Cuenca?",
            opciones: ["Dos", "Tres", "Cuatro", "Cinco"],
            respuesta: 2
        },
        {
            pregunta: "¿Cómo se llama la fiesta tradicional más importante en noviembre?",
            opciones: ["Semana Santa", "Carnaval", "Fiestas de Fundación", "Fiestas de Independencia"],
            respuesta: 3
        },
        {
            pregunta: "¿Qué universidad es la más antigua de Cuenca?",
            opciones: ["Universidad Católica", "Universidad de Cuenca", "Universidad Politécnica Salesiana", "Universidad del Azuay"],
            respuesta: 1
        },
        {
            pregunta: "¿Qué famoso parque es conocido por sus lagunas en Cuenca?",
            opciones: ["Parque Nacional Podocarpus", "Parque Nacional Cajas", "Parque Calderón", "Parque El Paraíso"],
            respuesta: 1
        },
        {
            pregunta: "¿Cómo se llama el mercado más antiguo de Cuenca?",
            opciones: ["Mercado 9 de Octubre", "Mercado 10 de Agosto", "Mercado 27 de Febrero", "Mercado 3 de Noviembre"],
            respuesta: 1
        },
        {
            pregunta: "¿Cuál es la principal actividad económica tradicional de Cuenca?",
            opciones: ["Minería", "Agricultura", "Artesanía", "Pesca"],
            respuesta: 2
        },
        {
            pregunta: "¿Cuál es el apodo de la ciudad de Cuenca?",
            opciones: ["La Atenas del Ecuador", "La Sultana de los Andes", "La Perla del Pacífico", "La Tierra del Sol"],
            respuesta: 0
        }
    ]
};

const audioCorrect = new Audio('mp3/correct.mp3');
const audioWrong = new Audio('mp3/incorrect.mp3');
// ====== Variables globales ======
const audioBg = new Audio('mp3/oriental.mp3');
audioBg.loop = true;
audioBg.volume = 0.5;

// Habilitar el audio tras la primera interacción del usuario
window.addEventListener('click', () => {
    if (audioBg.paused) {
        audioBg.play().catch(()=>{});
    }
}, { once: true });

const homeBtn = document.getElementById('home-btn');
if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        // Oculta todas las pantallas
        startScreen.classList.add('active');
        quizScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        // Puedes reiniciar variables aquí si lo necesitas
    });
}

const categoryImages = {
    musica: 'img/logo.png',
    comida: 'img/logo.png',
    arte:   'img/logo.png',
    cultura:'img/logo.png'
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const quizCategory = document.getElementById('quiz-category');
const quizProgress = document.getElementById('quiz-progress');
const progressBar = document.getElementById('progress-bar');
const quizImage = document.getElementById('quiz-image');
const musicBtn = document.getElementById('music-btn');
const scoreCurrent = document.getElementById('score-current');
const quizTimer = document.getElementById('quiz-timer');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const confettiCanvas = document.getElementById('confetti-canvas');

let currentCategory = "", currentIndex = 0, score = 0, timer = null, timeLeft = 30;
let saltoUsado = false, respuestas = [];

// =============== Eventos ===============
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category;
        currentIndex = 0;
        score = 0;
        saltoUsado = false;
        respuestas = [];
        showSection(quizScreen);
        mostrarPregunta();
        if(musicOn) audioBg.play();
    });

    

});
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < preguntas[currentCategory].length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});
skipBtn.addEventListener('click', () => {
    if (!saltoUsado) {
        saltoUsado = true;
        currentIndex++;
        if (currentIndex < preguntas[currentCategory].length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
        skipBtn.disabled = true;
        skipBtn.classList.add('hidden');
    }
});
restartBtn.addEventListener('click', () => {
    showSection(startScreen);
    audioBg.pause();
});
musicBtn.onclick = () => {
    musicOn = !musicOn;
    if (musicOn) {
        audioBg.play();
        musicBtn.classList.remove('music-off');
    } else {
        audioBg.pause();
        musicBtn.classList.add('music-off');
    }
};




function showSection(section) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    section.classList.add('active');
    nextBtn.classList.add('hidden');
    clearInterval(timer);
    quizTimer.textContent = "";

    // Música SOLO en la pantalla principal
    if (section === startScreen) {
        audioBg.play().catch(() => {}); // Intenta reproducir
    } else {
        audioBg.pause();
        audioBg.currentTime = 0;
    }
}


function setTheme() {
    document.body.classList.remove('tema-musica', 'tema-comida', 'tema-arte', 'tema-cultura');
    document.body.classList.add('tema-' + currentCategory);
}

function updateProgressBar() {
    const percent = ((currentIndex+1) / preguntas[currentCategory].length) * 100;
    progressBar.style.width = percent + '%';
}

function fadeInPregunta() {
    quizQuestion.classList.add('fade-enter');
    setTimeout(() => {
        quizQuestion.classList.add('fade-enter-active');
        setTimeout(() => quizQuestion.classList.remove('fade-enter', 'fade-enter-active'), 600);
    }, 10);
}

function mostrarPregunta() {
    clearInterval(timer);
    timeLeft = 30;
    quizOptions.innerHTML = "";
    nextBtn.classList.add('hidden');
    quizTimer.textContent = `⏰ ${timeLeft}s`;
    setTheme();
    updateProgressBar();
    fadeInPregunta();
    skipBtn.classList.remove('hidden');
    skipBtn.disabled = saltoUsado;
    quizImage.src = categoryImages[currentCategory];
    scoreCurrent.innerHTML = `Puntaje: ${score} / ${preguntas[currentCategory].length}`;
    const preguntaObj = preguntas[currentCategory][currentIndex];
    quizCategory.textContent = {
        musica: 'Música 🎶',
        comida: 'Comida 🍲',
        arte: 'Arte 🎨',
        cultura: 'Cultura General 🌎'
    }[currentCategory];
    quizProgress.textContent = `${currentIndex + 1}/${preguntas[currentCategory].length}`;
    quizQuestion.textContent = preguntaObj.pregunta;
    preguntaObj.opciones.forEach((opcion, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opcion;
        btn.addEventListener('click', () => seleccionarRespuesta(btn, idx, true));
        quizOptions.appendChild(btn);
    });
    respuestas[currentIndex] = null;
    // Iniciar cronómetro
    timer = setInterval(() => {
        timeLeft--;
        quizTimer.textContent = `⏰ ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            seleccionarRespuesta(null, preguntaObj.respuesta, false);
        }
    }, 1000);
}

function seleccionarRespuesta(btn, idx, userClicked = true) {
    clearInterval(timer);
    const preguntaObj = preguntas[currentCategory][currentIndex];
    const correcta = preguntaObj.respuesta;
    document.querySelectorAll('.option-btn').forEach((b, i) => {
        b.classList.add('disabled');
        if (i === correcta) b.classList.add('correct');
        if (userClicked && i === idx && idx !== correcta) b.classList.add('incorrect');
    });
    if (userClicked) {
        respuestas[currentIndex] = { esc: idx, correcto: idx === correcta };
        if (idx === correcta) { audioCorrect.currentTime = 0; audioCorrect.play(); score++; }
        else { audioWrong.currentTime = 0; audioWrong.play(); }
    } else {
        respuestas[currentIndex] = { esc: null, correcto: false };
        audioWrong.currentTime = 0; audioWrong.play();
    }
    scoreCurrent.innerHTML = `Puntaje: ${score} / ${preguntas[currentCategory].length}`;
    nextBtn.classList.remove('hidden');
    skipBtn.classList.add('hidden');
}

// =============== Confeti ===============
function confettiExplosion() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const pieces = Array.from({length: 120}, () => ({
        x: Math.random()*confettiCanvas.width,
        y: Math.random()*confettiCanvas.height/2,
        r: 3+Math.random()*4,
        c: `hsl(${Math.random()*360},80%,60%)`,
        dx: -2+Math.random()*4,
        dy: 2+Math.random()*5
    }));
    let t = 0;
    function draw() {
        ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
            ctx.fillStyle=p.c; ctx.fill();
            p.x+=p.dx; p.y+=p.dy;
            p.dy+=0.13;
            if(p.y>confettiCanvas.height) p.y=confettiCanvas.height+30;
        });
        t++;
        if(t<70) requestAnimationFrame(draw);
        else ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    }
    draw();
}

// =============== Resultados y resumen ===============
function mostrarResultado() {
    showSection(resultScreen);
    clearInterval(timer);
    let resHtml = `<b>${score}</b> de <b>${preguntas[currentCategory].length}</b> puntos.<br><br>`;
    resHtml += `<button onclick="mostrarRespuestas()">Ver Respuestas</button><br><br>`;
    resHtml += score === preguntas[currentCategory].length ? '¡Eres un/a crack cuencano/a!' : '¡Intenta mejorar tu puntaje!';
    finalScore.innerHTML = resHtml;
    if(score === preguntas[currentCategory].length) confettiExplosion();
}

window.mostrarRespuestas = function() {
    let lista = '<ol style="text-align:left">';
    preguntas[currentCategory].forEach((preg, i) => {
        let r = respuestas[i];
        let correct = preg.opciones[preg.respuesta];
        let esc = r && r.esc !== null ? preg.opciones[r.esc] : "<i>No contestó</i>";
        let color = r && r.correcto ? '#06d6a0' : '#ff006e';
        lista += `<li><b>${preg.pregunta}</b><br>
        <span style="color:${color};">Tu respuesta: ${esc}</span><br>
        <span style="color:#ffbe0b;">Correcta: ${correct}</span></li><br>`;
    });
    finalScore.innerHTML = `<h3>Resumen</h3>${lista}</ol>
    <button onclick="location.reload()">Volver al inicio</button>`;
};

