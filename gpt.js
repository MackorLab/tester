// update voices immediately and whenever they are loaded
updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;
updateOutputs();
function updateOutputs() {
  // display current values of all range inputs
  pitchOutEl.textContent = pitchInEl.value;
  rateOutEl.textContent = rateInEl.value;
  volumeOutEl.textContent = volumeInEl.value;
  // save current values to local storage
  localStorage.setItem('pitch', pitchInEl.value);
  localStorage.setItem('rate', rateInEl.value);
  localStorage.setItem('volume', volumeInEl.value);
}
function updateVoices() {
  // add an option for each available voice that isn't already added
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
  // save current voice to local storage
  localStorage.setItem('voice', voiceInEl.value);
}
function speakText() {
  // stop any speaking in progress
  window.speechSynthesis.cancel();
  // create new utterance with all the properties
  const text = textToSpeak; // здесь нужно указать текст, который нужно проговорить
  const utterance = new SpeechSynthesisUtterance();
  utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
  utterance.pitch = parseFloat(pitchInEl.value);
  utterance.rate = parseFloat(rateInEl.value);
  utterance.volume = parseFloat(volumeInEl.value);
  // разделение текста на предложения
  const sentences = text.split('. ');
  console.log('Текущая часть текста:', sentences);
  // функция для воспроизведения текста по частям
  let currentSentence = 0;
  function speakNextSentence() {
    if (currentSentence < sentences.length) {
      utterance.text = sentences[currentSentence];
      console.log('Текущее предложение:', sentences[currentSentence]); // вывод текущего предложения в консоль
      window.speechSynthesis.speak(utterance);
      currentSentence++;
    } else {
      // Здесь можно выполнить какие-либо действия по завершении воспроизведения текста
      console.log('Воспроизведение текста завершено');
    }
  }
  // вызываем функцию speakNextSentence() для начала воспроизведения первого предложения
  speakNextSentence();
}
// вызываем функцию speakText() для начала воспроизведения текста
speakText()
