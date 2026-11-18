(function () {
  const questionSets = {
    minimo: {
      title: 'Seguimiento: bienestar y prevención',
      description: 'Estas preguntas complementarias ayudan a conocer tus hábitos y apoyos actuales. No son un diagnóstico.',
      questions: [
        ['En las últimas dos semanas, ¿cómo describirías tu descanso?', ['Muy reparador', 'Generalmente adecuado', 'Algo irregular', 'Poco reparador']],
        ['¿Con qué frecuencia realizaste actividad física o movimiento que disfrutas?', ['Cinco o más días por semana', 'Tres o cuatro días', 'Uno o dos días', 'Ningún día']],
        ['Cuando sientes estrés, ¿qué tan fácil te resulta encontrar una forma de relajarte?', ['Muy fácil', 'Algo fácil', 'Algo difícil', 'Muy difícil']],
        ['¿Tienes a alguien de confianza con quien puedas hablar si lo necesitas?', ['Sí, con facilidad', 'Sí, aunque casi no lo hago', 'No estoy seguro/a', 'No por ahora']],
        ['¿Con qué frecuencia dedicas tiempo a actividades que disfrutas?', ['Casi todos los días', 'Varias veces por semana', 'Una vez por semana o menos', 'Casi nunca']],
        ['¿Qué tan satisfecho/a estás con el equilibrio entre tus responsabilidades y tu descanso?', ['Muy satisfecho/a', 'Algo satisfecho/a', 'Poco satisfecho/a', 'Nada satisfecho/a']],
        ['¿Te gustaría recibir información para mantener tu bienestar emocional?', ['Sí, me interesa mucho', 'Sí, quizá más adelante', 'No estoy seguro/a', 'No por ahora']]
      ]
    },
    leve: {
      title: 'Seguimiento: estado de ánimo y apoyos',
      description: 'Queremos comprender mejor cómo te has sentido y qué apoyos podrían ser útiles. No hay respuestas correctas o incorrectas.',
      questions: [
        ['En estas dos semanas, ¿cuánto han interferido las molestias emocionales con tus actividades?', ['Nada', 'Un poco', 'Bastante', 'Mucho']],
        ['¿Desde cuándo notas estas molestias con mayor claridad?', ['Menos de dos semanas', 'Entre dos semanas y un mes', 'Más de un mes', 'No estoy seguro/a']],
        ['¿Qué situaciones parecen influir más en cómo te sientes?', ['Estudio o trabajo', 'Relaciones personales', 'Salud o cambios recientes', 'No identifico una causa clara']],
        ['¿Qué haces actualmente cuando tienes un día difícil?', ['Hablo con alguien de confianza', 'Realizo una actividad que me ayuda', 'Intento continuar sin pedir ayuda', 'Aún no encuentro algo que ayude']],
        ['¿Con qué frecuencia puedes convivir o comunicarte con personas que te hacen sentir acompañado/a?', ['Con frecuencia', 'Algunas veces', 'Rara vez', 'No tengo ese apoyo por ahora']],
        ['¿Has hablado con un profesional de salud mental sobre cómo te sientes?', ['Sí, actualmente', 'Sí, anteriormente', 'No, pero me interesa', 'No por ahora']],
        ['¿Qué tipo de apoyo te resultaría más útil en este momento?', ['Orientación profesional', 'Hablar con alguien cercano', 'Información de autocuidado', 'Todavía no lo sé']]
      ]
    },
    moderada: {
      title: 'Seguimiento: necesidades de apoyo',
      description: 'Estas preguntas buscan identificar qué apoyos y próximos pasos podrían servirte. Este formulario no sustituye una valoración profesional.',
      questions: [
        ['¿Cuánto están afectando estas dificultades tus estudios, trabajo o tareas cotidianas?', ['Nada', 'Un poco', 'Bastante', 'Mucho']],
        ['¿Con qué frecuencia el malestar te lleva a alejarte de otras personas?', ['Nunca o casi nunca', 'Algunos días', 'La mayoría de los días', 'Casi todos los días']],
        ['¿Qué tan posible te resulta mantener tus rutinas básicas, como comer y descansar?', ['Muy posible', 'Algo posible', 'Difícil', 'Muy difícil']],
        ['¿Hay una persona de confianza a quien puedas contarle cómo te sientes?', ['Sí, y puedo contactarla', 'Sí, pero me cuesta hablar', 'No estoy seguro/a', 'No por ahora']],
        ['¿Has recibido apoyo de un profesional de salud mental?', ['Sí, actualmente', 'Sí, anteriormente', 'No, y me gustaría buscarlo', 'No por ahora']],
        ['¿Qué podría dificultarte buscar apoyo profesional?', ['Costo o cobertura', 'Tiempo o transporte', 'No sé dónde acudir', 'No identifico una barrera']],
        ['¿Qué paso de apoyo te parece más viable ahora?', ['Solicitar una cita profesional', 'Pedir acompañamiento a alguien cercano', 'Conocer opciones de atención', 'Aún no puedo decidir']]
      ]
    },
    moderadamenteSevera: {
      title: 'Seguimiento: acceso a apoyo oportuno',
      description: 'Tu bienestar importa. Estas preguntas ayudan a conocer qué acompañamiento podría facilitar el acceso a apoyo profesional; no son una evaluación clínica.',
      questions: [
        ['¿Qué tan difícil es realizar tus actividades cotidianas en este momento?', ['Poco difícil', 'Algo difícil', 'Muy difícil', 'No logro realizarlas']],
        ['¿Estás en contacto actualmente con un profesional de salud?', ['Sí, con seguimiento activo', 'Tengo una cita próxima', 'No, pero quiero buscar atención', 'No por ahora']],
        ['¿Hay alguien que pueda acompañarte si decides buscar atención?', ['Sí, disponible ahora', 'Sí, pero tendría que organizarlo', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué obstáculo podría hacer más difícil acceder a atención?', ['Costo o cobertura', 'Tiempo o transporte', 'No sé a dónde acudir', 'Ninguno de estos']],
        ['¿Te sería posible pedir a alguien de confianza que te ayude a encontrar una cita?', ['Sí', 'Quizá, con ayuda para iniciar', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué tipo de atención te gustaría explorar primero?', ['Psicología o psicoterapia', 'Consulta médica', 'Orientación para encontrar servicios', 'Necesito más información']],
        ['¿Qué tan pronto te gustaría recibir apoyo profesional?', ['Lo antes posible', 'En los próximos días', 'Más adelante', 'No estoy seguro/a']]
      ]
    },
    severa: {
      title: 'Seguimiento: acompañamiento y atención',
      description: 'No tienes que resolver esto a solas. Estas preguntas se enfocan en apoyos prácticos y acceso a atención; no sustituyen ayuda profesional.',
      questions: [
        ['¿Hay alguien de confianza que pueda estar contigo o hablar contigo ahora?', ['Sí, está conmigo', 'Sí, puedo contactarle ahora', 'No estoy seguro/a', 'No por ahora']],
        ['¿Estás recibiendo atención de un profesional de salud?', ['Sí, actualmente', 'Tengo una cita próxima', 'No, necesito buscarla', 'No estoy seguro/a']],
        ['¿Qué tan posible te resulta acceder hoy a un servicio de salud si lo necesitas?', ['Sé a dónde acudir y puedo llegar', 'Necesito que alguien me acompañe', 'No sé dónde acudir', 'No puedo acceder por ahora']],
        ['¿Necesitas ayuda de otra persona para actividades cotidianas?', ['No por ahora', 'Sí, con algunas tareas', 'Sí, con muchas tareas', 'Prefiero no responder']],
        ['¿Tienes un lugar donde puedas estar acompañado/a y sentirte atendido/a?', ['Sí', 'Creo que sí, podría confirmarlo', 'No estoy seguro/a', 'No por ahora']],
        ['¿Podrías contactar a alguien para que te ayude a buscar atención profesional?', ['Sí, puedo hacerlo ahora', 'Sí, si me acompaña', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué apoyo práctico te ayudaría más en este momento?', ['Que alguien me acompañe a una consulta', 'Ayuda para contactar un servicio', 'Que alguien de confianza esté conmigo', 'No estoy seguro/a todavía']]
      ]
    }
  };

  const level = document.body.dataset.level;
  const survey = questionSets[level];
  const form = document.getElementById('followUpForm');
  const questionList = document.getElementById('questionList');
  const followUpTitle = document.getElementById('followUpTitle');
  const followUpDescription = document.getElementById('followUpDescription');
  const pageMessage = document.getElementById('pageMessage');
  const statusMessage = document.getElementById('statusMessage');
  const progressText = document.getElementById('progressText');
  const progressFill = document.getElementById('progressFill');

  function showPageMessage(message) {
    pageMessage.textContent = message;
    pageMessage.hidden = false;
    form.hidden = true;
  }

  function getResultLevel(total) {
    if (total <= 4) return 'minimo';
    if (total <= 9) return 'leve';
    if (total <= 14) return 'moderada';
    if (total <= 19) return 'moderadamenteSevera';
    return 'severa';
  }

  if (!survey) {
    showPageMessage('Esta página de seguimiento no está disponible. Vuelve a realizar la encuesta.');
    return;
  }

  let result;
  try {
    const rawResult = localStorage.getItem('phq9Result');
    if (!rawResult) {
      showPageMessage('No encontramos un resultado de encuesta. Completa primero la encuesta inicial.');
      return;
    }
    result = JSON.parse(rawResult);
  } catch (error) {
    showPageMessage('No pudimos leer el resultado guardado. Vuelve a realizar la encuesta para continuar.');
    return;
  }

  const total = Number(result.total);
  if (!Number.isInteger(total) || total < 0 || total > 27 || getResultLevel(total) !== level) {
    showPageMessage('Esta página no corresponde al resultado guardado. Regresa al resultado y continúa desde allí.');
    return;
  }

  form.hidden = false;
  document.title = survey.title;
  followUpTitle.textContent = survey.title;
  followUpDescription.textContent = survey.description;

  survey.questions.forEach(function (item, questionIndex) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question';
    const legend = document.createElement('legend');
    legend.textContent = (questionIndex + 1) + '. ' + item[0];
    fieldset.appendChild(legend);

    const options = document.createElement('div');
    options.className = 'options';
    item[1].forEach(function (answer, answerIndex) {
      const option = document.createElement('label');
      option.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'question' + questionIndex;
      input.value = String(answerIndex);
      input.required = true;
      input.addEventListener('change', updateProgress);
      const text = document.createElement('span');
      text.textContent = answer;
      option.appendChild(input);
      option.appendChild(text);
      options.appendChild(option);
    });

    fieldset.appendChild(options);
    questionList.appendChild(fieldset);
  });

  function updateProgress() {
    const answered = questionList.querySelectorAll('input[type="radio"]:checked').length;
    progressText.textContent = answered + '/7 respondidas';
    progressFill.style.width = Math.round((answered / 7) * 100) + '%';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    statusMessage.hidden = true;

    const answers = survey.questions.map(function (item, questionIndex) {
      const selected = form.querySelector('input[name="question' + questionIndex + '"]:checked');
      if (!selected) return null;
      return {
        question: item[0],
        answer: item[1][Number(selected.value)]
      };
    });

    if (answers.some(function (answer) { return answer === null; })) {
      statusMessage.textContent = 'Responde las siete preguntas antes de continuar.';
      statusMessage.hidden = false;
      return;
    }

    try {
      localStorage.setItem('phq9FollowUp', JSON.stringify({
        level: level,
        answers: answers,
        fecha: new Date().toISOString()
      }));
    } catch (error) {
      statusMessage.textContent = 'No fue posible guardar tus respuestas en este navegador. Revisa su configuración de almacenamiento e inténtalo de nuevo.';
      statusMessage.hidden = false;
      return;
    }

    window.location.href = 'final.html';
  });

  updateProgress();
})();
