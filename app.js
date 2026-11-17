// Audio Tracks Data
const audioTracks = [
  {
    category: "Китай · Li Auto L9",
    title: "Расчет Li L9 Ultra под ключ + растаможка",
    duration: "01:28",
    totalSeconds: 88,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Добрый день! Автоброкер 'Азия-Трейд', меня зовут Алексей. Вы оставляли заявку на расчет Li Auto L9 Ultra из Китая, всё верно?" },
      { speaker: "Клиент", role: "User", text: "Здравствуйте, да. Хочу понять, во сколько он реально выйдет под ключ со всеми расходами и доставкой в Москву." },
      { speaker: "ИИ", role: "AI", text: "Смотрите, на сегодняшний день топовая комплектация Ultra 2024 года с завода в Китае стоит 439 800 юаней. По актуальному курсу с учетом логистики через Хоргос, таможни, СБКТС и льготного утильсбора под ключ в Москве машина выходит в 6 450 000 рублей." },
      { speaker: "Клиент", role: "User", text: "А утильсбор точно льготный будет? Не доначислят коммерческий?" },
      { speaker: "ИИ", role: "AI", text: "Абсолютно точно. Если оформляем на вас как на физлицо для личного пользования и не продаете машину в течение 12 месяцев, ставка утильсбора фиксированная — всего 3 400 рублей. В договоре мы это отдельно гарантируем." },
      { speaker: "Клиент", role: "User", text: "Отлично. А по срокам сколько везти?" },
      { speaker: "ИИ", role: "AI", text: "В среднем 28–35 дней крытым автовозом. Сейчас у нас как раз бронируется рейс на следующую пятницу. Удобно будет, если я пришлю вам 3 варианта с китайских складов в WhatsApp прямо сейчас?" }
    ]
  },
  {
    category: "Отработка возражения",
    title: "«Почему у других на 300 000 ₽ дешевле?»",
    duration: "01:45",
    totalSeconds: 105,
    lines: [
      { speaker: "Клиент", role: "User", text: "Слушайте, мне в другой конторе назвали цену на Geely Monjaro на 300 тысяч дешевле, чем у вас. Почему у вас такая наценка?" },
      { speaker: "ИИ", role: "AI", text: "Понимаю вас, разница существенная. Подскажите, вам назвали расчет через Киргизию с занижением инвойсовой стоимости?" },
      { speaker: "Клиент", role: "User", text: "Ну да, сказали растаможка в Бишкеке, так выгоднее." },
      { speaker: "ИИ", role: "AI", text: "Вот как раз в этом и кроется разница. С 1 апреля вступило в силу постановление: при ввозе через ЕАЭС всю недоплаченную пошлину таможня РФ автоматически включает в утильсбор. То есть клиент экономит 300 тысяч вначале, а через месяц получает требование от ФТС доплатить 800 тысяч или машину аннулируют. Мы таможим напрямую на РФ по белому инвойсу — у вас будет кристально чистый ЭПТС без риска ареста." },
      { speaker: "Клиент", role: "User", text: "Ого, я об этом не знал... Спасибо, что предупредили. Давайте ваш вариант смотреть." }
    ]
  },
  {
    category: "Trade-In + Корея",
    title: "Оценка Kia K5 в зачет нового авто с Encar",
    duration: "01:15",
    totalSeconds: 75,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Здравствуйте, Сергей! Вы интересовались привозом дизельного Santa Fe 2021 года из Кореи. Еще актуально?" },
      { speaker: "Клиент", role: "User", text: "Да, но мне сначала нужно продать свою Kia K5 2020 года. Сами забрать сможете?" },
      { speaker: "ИИ", role: "AI", text: "Да, у нас действует экспресс Trade-In! Мы оцениваем вашу K5 и засчитываем ее стоимость в счет аванса и инвойса за Santa Fe. Подскажите, какой у нее мотор, привод и ориентировочный пробег?" },
      { speaker: "Клиент", role: "User", text: "2.5 литра, передний привод, пробег 68 тысяч. Было одно небольшое ДТП по крылу, всё по каско делали у дилера." },
      { speaker: "ИИ", role: "AI", text: "Отлично. По рынку с учетом окраса крыла вилка предварительной оценки — от 2 100 000 до 2 250 000 рублей. То есть для заказа корейского Santa Fe доплата составит всего около 900 000 рублей. Можем сегодня принять авто на диагностику?" }
    ]
  },
  {
    category: "Лизинг для Юрлиц",
    title: "Zeekr 001 на ООО с полным НДС 20%",
    duration: "01:35",
    totalSeconds: 95,
    lines: [
      { speaker: "Клиент", role: "User", text: "Добрый день. Нам в компанию на баланс нужен Zeekr 001 рестайлинг, обязательно с полным возвратом НДС 20%. Работаете по безналу?" },
      { speaker: "ИИ", role: "AI", text: "Здравствуйте! Да, работаем с юрлицами. Привозим Zeekr с прямой таможней на российскую компанию, выдаем закрывающие УПД с выделенным НДС 20%. По какой схеме планируете: прямая покупка по безналичному расчету или через лизинговую компанию?" },
      { speaker: "Клиент", role: "User", text: "Лучше через лизинг. У нас одобрение в Альфа-Лизинге и Газпромбанк Автолизинг." },
      { speaker: "ИИ", role: "AI", text: "Прекрасно, мы аккредитованы в обеих компаниях. Срок поставки и согласования спецификации — до 30 дней. На какой юрлицо подготовить предварительное коммерческое предложение с графиком платежей?" }
    ]
  }
];

let currentTrackIndex = 0;
let isAudioPlaying = false;
let audioTimer = null;
let currentSeconds = 0;

// Switch Main Demo Mode (Audio vs Chat)
function switchMainDemo(mode) {
  const audioBlock = document.getElementById('demo-mode-audio');
  const chatBlock = document.getElementById('demo-mode-chat');
  const btnAudio = document.getElementById('btn-mode-audio');
  const btnChat = document.getElementById('btn-mode-chat');

  if (mode === 'audio') {
    audioBlock.classList.remove('hidden');
    chatBlock.classList.add('hidden');
    btnAudio.classList.add('active', 'bg-white', 'shadow-sm', 'border', 'border-slate-200', 'text-slate-900');
    btnAudio.classList.remove('text-slate-600');
    btnChat.classList.remove('active', 'bg-white', 'shadow-sm', 'border', 'border-slate-200', 'text-slate-900');
    btnChat.classList.add('text-slate-600');
  } else {
    audioBlock.classList.add('hidden');
    chatBlock.classList.remove('hidden');
    btnChat.classList.add('active', 'bg-white', 'shadow-sm', 'border', 'border-slate-200', 'text-slate-900');
    btnChat.classList.remove('text-slate-600');
    btnAudio.classList.remove('active', 'bg-white', 'shadow-sm', 'border', 'border-slate-200', 'text-slate-900');
    btnAudio.classList.add('text-slate-600');
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Select an audio track
function selectAudioTrack(index) {
  stopAudio();
  currentTrackIndex = index;
  currentSeconds = 0;

  // Update track cards
  document.querySelectorAll('.audio-track-card').forEach((el, idx) => {
    if (idx === index) {
      el.classList.add('active', 'bg-white', 'border-sky-300', 'shadow-sm');
      el.classList.remove('bg-white/70', 'border-slate-200');
    } else {
      el.classList.remove('active', 'bg-white', 'border-sky-300', 'shadow-sm');
      el.classList.add('bg-white/70', 'border-slate-200');
    }
  });

  const track = audioTracks[index];
  document.getElementById('player-category').textContent = track.category;
  document.getElementById('player-title').textContent = track.title;
  document.getElementById('audio-total-time').textContent = track.duration;
  document.getElementById('audio-current-time').textContent = '00:00';
  document.getElementById('audio-progress').style.width = '0%';

  renderTranscript(track.lines);
}

// Render transcript
function renderTranscript(lines) {
  const container = document.getElementById('player-transcript');
  if (!container) return;

  container.innerHTML = lines.map((line, idx) => {
    const isAI = line.role === 'AI';
    return `
      <div id="transcript-line-${idx}" class="p-3 rounded-xl transition-colors ${isAI ? 'bg-sky-50/70 border border-sky-100' : 'bg-slate-50 border border-slate-100'}">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded ${isAI ? 'bg-sky-600 text-white' : 'bg-slate-700 text-white'}">${line.speaker}</span>
          ${isAI ? '<span class="text-[10px] text-sky-700 font-medium">ИИ-агент</span>' : ''}
        </div>
        <p class="text-slate-800 text-xs sm:text-sm leading-relaxed">${line.text}</p>
      </div>
    `;
  }).join('');
}

// Toggle audio play/pause
function toggleAudioDemo() {
  if (isAudioPlaying) {
    stopAudio();
  } else {
    startAudio();
  }
}

function startAudio() {
  isAudioPlaying = true;
  const icon = document.getElementById('audio-icon');
  const playBtn = document.getElementById('audio-play-btn');

  icon.setAttribute('data-lucide', 'pause');
  playBtn.classList.remove('bg-sky-600', 'hover:bg-sky-700');
  playBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');

  const track = audioTracks[currentTrackIndex];

  audioTimer = setInterval(() => {
    currentSeconds++;
    if (currentSeconds >= track.totalSeconds) {
      stopAudio();
      currentSeconds = 0;
    }

    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    document.getElementById('audio-current-time').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const percent = (currentSeconds / track.totalSeconds) * 100;
    document.getElementById('audio-progress').style.width = percent + '%';
  }, 1000);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function stopAudio() {
  isAudioPlaying = false;
  const icon = document.getElementById('audio-icon');
  const playBtn = document.getElementById('audio-play-btn');

  if (icon) icon.setAttribute('data-lucide', 'play');
  if (playBtn) {
    playBtn.classList.add('bg-sky-600', 'hover:bg-sky-700');
    playBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
  }

  clearInterval(audioTimer);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function seekAudio(e) {
  const progressBar = e.currentTarget;
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickX / rect.width));

  const track = audioTracks[currentTrackIndex];
  currentSeconds = Math.floor(ratio * track.totalSeconds);

  const mins = Math.floor(currentSeconds / 60);
  const secs = currentSeconds % 60;
  document.getElementById('audio-current-time').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('audio-progress').style.width = (ratio * 100) + '%';
}

// ROI & Lost Revenue Calculator
function calculateROI() {
  const leads = parseInt(document.getElementById('input-leads').value, 10);
  const margin = parseInt(document.getElementById('input-margin').value, 10);
  const delay = parseInt(document.getElementById('input-delay').value, 10);

  document.getElementById('leads-val').textContent = leads + ' лидов';
  document.getElementById('margin-val').textContent = margin.toLocaleString('ru-RU') + ' ₽';
  document.getElementById('delay-val').textContent = '~' + delay + ' минут';

  const dropRatio = Math.min(0.60, (delay / 50) * 0.45 + 0.10);
  const potentialDeals = leads * 0.045;
  const lostDeals = potentialDeals * dropRatio;
  const lostMoney = Math.round(lostDeals * margin);

  const recoveredDeals = Math.max(1, Math.round(lostDeals * 0.75 + (leads * 0.015)));
  const gainedMoney = recoveredDeals * margin;

  document.getElementById('lost-revenue').textContent = '~' + lostMoney.toLocaleString('ru-RU') + ' ₽';
  document.getElementById('gain-revenue').textContent = '+' + gainedMoney.toLocaleString('ru-RU') + ' ₽ / мес';
}

// FAQ Accordion Toggle
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('[data-lucide="chevron-down"]');
  const isHidden = content.classList.contains('hidden');
  
  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}

// Form Submission Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('lead-form');
  const successMsg = document.getElementById('form-success-msg');

  form.classList.add('opacity-50', 'pointer-events-none');
  
  setTimeout(() => {
    form.classList.add('hidden');
    successMsg.classList.remove('hidden');
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 600);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  calculateROI();
  selectAudioTrack(0);
});
