(function () {
  const questionSets = {
    minimo: {
      title: 'Seguimiento: factores de bienestar',
      description: 'Estas preguntas ayudan a identificar qué aspectos de tu vida se relacionan con tu bienestar. No son un diagnóstico.',
      questions: [
        ['En las últimas dos semanas, ¿cómo ha sido la calidad de tu descanso?', ['Reparador casi todos los días', 'Adecuado la mayoría de los días', 'Irregular', 'Poco reparador']],
        ['¿En qué ámbito notas con más claridad cambios en tu bienestar?', ['Estudio o trabajo', 'Familia o relaciones', 'Salud o cambios personales', 'No identifico un ámbito']],
        ['¿Qué situación parece influir más en cómo te has sentido?', ['Carga de tareas o responsabilidades', 'Conflictos o cambios en una relación', 'Un cambio de salud o en mi vida diaria', 'No identifico una situación concreta']],
        ['Cuando tienes un día difícil, ¿qué haces que te ayuda más?', ['Hablo con alguien de confianza', 'Realizo una actividad que disfruto', 'Descanso o hago una pausa', 'Todavía no encuentro algo que me ayude']],
        ['¿Con qué frecuencia realizas actividades que disfrutas?', ['Casi todos los días', 'Varias veces por semana', 'Una vez por semana o menos', 'Casi nunca']],
        ['¿Qué tan equilibradas sientes tus responsabilidades y tu tiempo de descanso?', ['Muy equilibradas', 'Generalmente equilibradas', 'Poco equilibradas', 'Nada equilibradas']],
        ['¿Qué apoyo te sería más útil para cuidar tu bienestar?', ['Información de autocuidado', 'Hablar con alguien cercano', 'Orientación de un profesional', 'Aún no lo sé']]
      ]
    },
    leve: {
      title: 'Seguimiento: situaciones relacionadas con tu ánimo',
      description: 'Queremos conocer en qué situaciones aparecen o aumentan las molestias y qué apoyos podrían servirte. No hay respuestas correctas o incorrectas.',
      questions: [
        ['En estas dos semanas, ¿cuánto han interferido las molestias con tus actividades cotidianas?', ['Nada', 'Un poco', 'Bastante', 'Mucho']],
        ['¿Desde cuándo notas estas molestias con mayor claridad?', ['Menos de dos semanas', 'Entre dos semanas y un mes', 'Más de un mes', 'No estoy seguro/a']],
        ['¿En qué ámbito notas que suelen comenzar o aumentar las molestias?', ['Estudio o trabajo', 'Familia o relaciones', 'Salud o cambios personales', 'No identifico un ámbito']],
        ['¿Qué suele ocurrir justo antes de que notes que tu ánimo empeora?', ['Aumentan mis tareas o responsabilidades', 'Tengo un conflicto o distancia con alguien', 'Hay un cambio en mi salud o rutina', 'No noto un patrón claro']],
        ['Cuando tienes un día difícil, ¿qué haces actualmente?', ['Hablo con alguien de confianza', 'Realizo una actividad que me ayuda', 'Intento continuar sin pedir ayuda', 'Aún no encuentro algo que ayude']],
        ['¿Con qué frecuencia puedes hablar con alguien que te hace sentir acompañado/a?', ['Con frecuencia', 'Algunas veces', 'Rara vez', 'No tengo ese apoyo por ahora']],
        ['¿Qué tipo de apoyo te resultaría más útil en este momento?', ['Orientación profesional', 'Hablar con alguien cercano', 'Información de autocuidado', 'Todavía no lo sé']]
      ]
    },
    moderada: {
      title: 'Seguimiento: origen e impacto de las dificultades',
      description: 'Estas preguntas buscan identificar en qué situaciones surgen las dificultades y cómo afectan tu vida diaria. Este formulario no sustituye una valoración profesional.',
      questions: [
        ['¿Cuánto están afectando estas dificultades tus estudios, trabajo o tareas cotidianas?', ['Nada', 'Un poco', 'Bastante', 'Mucho']],
        ['¿En qué lugar físico suelen comenzar o intensificarse más estas dificultades?', ['Casa', 'Escuela o facultad', 'Trabajo', 'Traslados o espacios públicos', 'Varios lugares o no identifico uno']],
        ['¿Qué suele pasar en ese lugar justo antes de que aumenten las dificultades?', ['Aumentan las tareas o responsabilidades', 'Ocurre un conflicto o una interacción difícil', 'El ruido, la aglomeración o la falta de privacidad me afectan', 'No identifico una situación concreta']],
        ['¿Con qué frecuencia el malestar te lleva a alejarte de otras personas?', ['Nunca o casi nunca', 'Algunos días', 'La mayoría de los días', 'Casi todos los días']],
        ['¿Qué tan posible te resulta mantener tus rutinas básicas, como comer y descansar?', ['Muy posible', 'Algo posible', 'Difícil', 'Muy difícil']],
        ['¿Hay una persona de confianza a quien puedas contarle cómo te sientes?', ['Sí, y puedo contactarla', 'Sí, pero me cuesta hablar', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué apoyo podría ayudarte más con la situación que identificaste?', ['Orientación profesional', 'Apoyo de alguien cercano', 'Ayuda para organizar mis actividades', 'Aún no lo sé']]
      ]
    },
    moderadamenteSevera: {
      title: 'Seguimiento: factores que afectan tu bienestar',
      description: 'Tu bienestar importa. Estas preguntas ayudan a identificar qué situaciones se relacionan con las dificultades y qué apoyo puede ser útil; no son una evaluación clínica.',
      questions: [
        ['¿Qué tan difícil es realizar tus actividades cotidianas en este momento?', ['Poco difícil', 'Algo difícil', 'Muy difícil', 'No logro realizarlas']],
        ['¿En qué lugar físico comenzaron o se intensifican más las dificultades?', ['Casa', 'Escuela o facultad', 'Trabajo', 'Traslados o espacios públicos', 'Varios lugares o no identifico uno']],
        ['¿Qué suele ocurrir en ese lugar cuando se intensifican las dificultades?', ['Hay presión o acumulación de tareas', 'Tengo conflictos o interacciones difíciles', 'El entorno me resulta ruidoso, aglomerado o poco privado', 'No estoy seguro/a']],
        ['¿Qué actividad cotidiana se ha vuelto más difícil por estas situaciones?', ['Dormir, comer o cuidar de mí', 'Estudiar o trabajar', 'Relacionarme con otras personas', 'Varias actividades por igual']],
        ['¿Hay alguien de confianza con quien puedas hablar hoy?', ['Sí, puedo contactarle', 'Sí, pero me cuesta hacerlo', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué apoyo profesional tienes actualmente?', ['Estoy recibiendo apoyo', 'Recibí apoyo anteriormente', 'Quiero conocer opciones', 'No estoy seguro/a']],
        ['¿Qué apoyo práctico te ayudaría más ahora?', ['Hablar con un profesional', 'Pedir acompañamiento a alguien cercano', 'Recibir ayuda con tareas cotidianas', 'Necesito más información']]
      ]
    },
    severa: {
      title: 'Seguimiento: situaciones y apoyos inmediatos',
      description: 'No tienes que resolver esto a solas. Estas preguntas buscan conocer qué situaciones están influyendo y qué apoyo tienes disponible; no sustituyen ayuda profesional.',
      questions: [
        ['¿Hay alguien de confianza que pueda estar contigo o hablar contigo ahora?', ['Sí, está conmigo', 'Sí, puedo contactarle ahora', 'No estoy seguro/a', 'No por ahora']],
        ['¿En qué lugar físico suelen intensificarse más las dificultades o te resulta más difícil sentirte a salvo?', ['Casa', 'Escuela o facultad', 'Trabajo', 'Traslados o espacios públicos', 'Varios lugares o no identifico uno']],
        ['¿Qué situación de ese lugar parece afectar más tu bienestar o sensación de seguridad?', ['Un conflicto o una interacción difícil', 'El entorno me resulta poco seguro o impredecible', 'Me cuesta atender mis necesidades o salir de ahí', 'No puedo identificarlo ahora']],
        ['¿Qué tan difícil es atender tus necesidades básicas, como comer, descansar o asearte?', ['Poco difícil', 'Algo difícil', 'Muy difícil', 'Necesito ayuda de otra persona']],
        ['¿Tienes un lugar donde puedas estar acompañado/a y sentirte a salvo?', ['Sí', 'Creo que sí, podría confirmarlo', 'No estoy seguro/a', 'No por ahora']],
        ['¿Qué apoyo profesional tienes actualmente?', ['Estoy recibiendo apoyo', 'Recibí apoyo anteriormente', 'Necesito ayuda para encontrar apoyo', 'No estoy seguro/a']],
        ['¿Qué apoyo te ayudaría más en este momento?', ['Que alguien de confianza esté conmigo', 'Que alguien me ayude a contactar un servicio de salud', 'Ayuda con actividades cotidianas', 'No estoy seguro/a todavía']]
      ]
    }
  };

  const secondQuestionSets = {
    moderada: {
      title: 'Segundo seguimiento: entorno y dificultades',
      description: 'A partir del lugar que identificaste, estas preguntas buscan conocer qué ocurre allí y qué cambios o apoyos podrían ayudarte.',
      sourceQuestionIndex: 1,
      questions: [
        ['¿Qué suele ocurrir {{ubicacion}} justo antes de que aumenten las dificultades?', ['Aumentan las tareas o responsabilidades', 'Ocurre un conflicto o una interacción difícil', 'El ruido, la aglomeración o la falta de privacidad me afectan', 'No noto un detonante claro']],
        ['¿Qué aspecto de ese lugar influye más en cómo te sientes o en lo que puedes hacer?', ['Las interacciones con otras personas', 'Las condiciones del entorno físico', 'Las tareas o responsabilidades asociadas a ese lugar', 'No estoy seguro/a']],
        ['¿Qué cambio o apoyo en ese lugar te ayudaría más?', ['Tener un espacio tranquilo para hacer una pausa', 'Contar con apoyo de alguien de confianza', 'Ajustar tareas o responsabilidades', 'Recibir orientación profesional']]
      ]
    },
    moderadamenteSevera: {
      title: 'Segundo seguimiento: situaciones en el entorno',
      description: 'Estas preguntas profundizan en lo que ocurre en el lugar que señalaste y en los apoyos que podrían ayudarte allí.',
      sourceQuestionIndex: 1,
      questions: [
        ['¿Qué suele ocurrir {{ubicacion}} que hace más difícil tu día a día?', ['Se acumulan tareas o exigencias', 'Tengo conflictos o interacciones difíciles', 'El entorno se siente ruidoso, aglomerado o poco privado', 'Varias situaciones a la vez']],
        ['¿Qué actividad se vuelve más difícil para ti en ese lugar?', ['Descansar o cuidar de mí', 'Cumplir con estudio, trabajo o tareas', 'Relacionarme con otras personas', 'Sentirme tranquilo/a o a salvo']],
        ['¿Qué ajuste o apoyo en ese lugar podría ayudarte durante los próximos días?', ['Tener acceso a un espacio más tranquilo', 'Pedir apoyo a una persona de confianza', 'Acordar cambios en tareas o responsabilidades', 'Hablar con un profesional de salud']]
      ]
    },
    severa: {
      title: 'Segundo seguimiento: seguridad y apoyo en el entorno',
      description: 'Estas preguntas se centran en lo que ocurre en el lugar que mencionaste y en cómo recibir apoyo o encontrar un espacio seguro.',
      sourceQuestionIndex: 1,
      questions: [
        ['¿Qué suele ocurrir {{ubicacion}} que afecta más tu bienestar o sensación de seguridad?', ['Tengo un conflicto o una interacción difícil', 'El entorno se siente poco seguro o impredecible', 'Me cuesta atender mis necesidades o salir de ahí', 'No puedo identificarlo ahora']],
        ['¿Qué apoyo necesitas primero cuando estás en ese lugar?', ['Contactar a alguien de confianza', 'Ir a un espacio donde me sienta más seguro/a', 'Pedir ayuda para atender una necesidad inmediata', 'No estoy seguro/a; necesito apoyo para decidir']],
        ['¿Qué persona o recurso podría ayudarte en ese lugar ahora?', ['Una persona de confianza que pueda acompañarme', 'Un profesional o servicio de salud', 'Un servicio de emergencia si hay peligro inmediato', 'Necesito que alguien me ayude a encontrar apoyo']]
      ]
    }
  };

  const level = document.body.dataset.level || new URLSearchParams(window.location.search).get('level');
  const isSecondStage = document.body.dataset.stage === 'second';
  const survey = isSecondStage ? secondQuestionSets[level] : questionSets[level];
  const form = document.getElementById('followUpForm');
  const questionList = document.getElementById('questionList');
  const followUpTitle = document.getElementById('followUpTitle');
  const followUpDescription = document.getElementById('followUpDescription');
  const pageMessage = document.getElementById('pageMessage');
  const statusMessage = document.getElementById('statusMessage');
  const progressText = document.getElementById('progressText');
  const progressFill = document.getElementById('progressFill');
  const answerCount = survey ? survey.questions.length : 0;

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

  let firstFollowUp;
  if (isSecondStage) {
    try {
      const rawFollowUp = localStorage.getItem('phq9FollowUp');
      firstFollowUp = rawFollowUp ? JSON.parse(rawFollowUp) : null;
    } catch (error) {
      showPageMessage('No pudimos leer tus respuestas anteriores. Regresa al resultado y comienza el seguimiento de nuevo.');
      return;
    }
    if (!firstFollowUp || firstFollowUp.level !== level || !Array.isArray(firstFollowUp.answers) || firstFollowUp.answers.length !== 7 ||
        firstFollowUp.answers.some(function (item) {
          return !item || typeof item.question !== 'string' || typeof item.answer !== 'string';
        })) {
      showPageMessage('Completa primero las preguntas iniciales de seguimiento para continuar.');
      return;
    }
  }

  form.hidden = false;
  document.title = survey.title;
  followUpTitle.textContent = survey.title;
  followUpDescription.textContent = survey.description;

  function getQuestionText(question, questionIndex) {
    let text = question;
    if (isSecondStage && questionIndex === 0) {
      const sourceAnswer = firstFollowUp.answers[survey.sourceQuestionIndex].answer;
      const locationByAnswer = {
        'Casa': 'en casa',
        'Escuela o facultad': 'en la escuela o facultad',
        'Trabajo': 'en el trabajo',
        'Traslados o espacios públicos': 'durante los traslados o en espacios públicos',
        'Varios lugares o no identifico uno': 'en varios lugares o en uno que aún no identificas'
      };
      text = text.replace('{{ubicacion}}', locationByAnswer[sourceAnswer] || 'en un lugar que aún no identificas con claridad');
    }
    return text;
  }

  survey.questions.forEach(function (item, questionIndex) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question';
    const legend = document.createElement('legend');
    legend.textContent = (questionIndex + 1) + '. ' + getQuestionText(item[0], questionIndex);
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
    progressText.textContent = answered + '/' + answerCount + ' respondidas';
    progressFill.style.width = Math.round((answered / answerCount) * 100) + '%';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    statusMessage.hidden = true;

    const answers = survey.questions.map(function (item, questionIndex) {
      const selected = form.querySelector('input[name="question' + questionIndex + '"]:checked');
      if (!selected) return null;
      return {
        question: getQuestionText(item[0], questionIndex),
        answer: item[1][Number(selected.value)]
      };
    });

    if (answers.some(function (answer) { return answer === null; })) {
      statusMessage.textContent = 'Responde todas las preguntas antes de continuar.';
      statusMessage.hidden = false;
      return;
    }

    try {
      if (isSecondStage) {
        firstFollowUp.secondAnswers = answers;
        firstFollowUp.secondFecha = new Date().toISOString();
        localStorage.setItem('phq9FollowUp', JSON.stringify(firstFollowUp));
      } else {
        localStorage.setItem('phq9FollowUp', JSON.stringify({
          level: level,
          answers: answers,
          secondAnswers: [],
          fecha: new Date().toISOString()
        }));
      }
    } catch (error) {
      statusMessage.textContent = 'No fue posible guardar tus respuestas en este navegador. Revisa su configuración de almacenamiento e inténtalo de nuevo.';
      statusMessage.hidden = false;
      return;
    }

    window.location.href = isSecondStage || !secondQuestionSets[level] ? 'final.html' : 'seguimiento-profundo.html?level=' + encodeURIComponent(level);
  });

  updateProgress();
})();
