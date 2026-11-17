// Reactivation Audio Tracks Data
const reactivationTracks = [
  {
    category: "Инфоповод: Курс валюты",
    title: "«Юань упал — цена на Geely Monjaro снизилась на 230 000 ₽»",
    duration: "01:20",
    totalSeconds: 80,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Алексей, добрый день! Это автоброкер 'Азия-Трейд', меня зовут Роман. Вы в конце лета интересовались Geely Monjaro из Китая, помните?" },
      { speaker: "Клиент", role: "User", text: "Здравствуйте. Да, помню, но тогда курс подскочил, и цена для меня была высоковата." },
      { speaker: "ИИ", role: "AI", text: "Вот как раз поэтому и звоню! За последние недели курс юаня скорректировался, плюс мы открыли прямой маршрут без посредников. В итоге Monjaro в максимальной комплектации Exclusive под ключ в Москве сейчас выходит на 230 000 рублей дешевле, чем в августе — ровно 3 420 000 рублей со всеми расходами и утильсбором." },
      { speaker: "Клиент", role: "User", text: "О, это уже интереснее... А цвет изумрудный с замшей есть в наличии на складе?" },
      { speaker: "ИИ", role: "AI", text: "Да, как раз два таких автомобиля сейчас забронированы на складе в Маньчжурии. Могу прямо сейчас скинуть вам в WhatsApp актуальный расчет и фото-видео отчет по ним. Номер к WhatsApp привязан?" },
      { speaker: "Клиент", role: "User", text: "Да, привязан, присылайте, посмотрю." }
    ]
  },
  {
    category: "Корея: Проходной год",
    title: "«Santa Fe 2021 стал проходным — пошлина упала в 1.8 раза»",
    duration: "01:35",
    totalSeconds: 95,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Сергей, здравствуйте! Звоню из компании 'Восток-Авто'. Вы у нас в начале года присматривали дизельный Santa Fe из Кореи." },
      { speaker: "Клиент", role: "User", text: "Да, было дело. Но тогда таможня была драконовская, потому что машине не было трех лет." },
      { speaker: "ИИ", role: "AI", text: "Именно так! А с ноября автомобили 2021 года официально перешли в категорию 'от 3 до 5 лет'. Таможенная ставка на объем 2.2 литра снизилась почти в два раза! Теперь такой Santa Fe под ключ во Владивостоке выходит от 2 950 000 рублей вместо прежних 3.7 млн." },
      { speaker: "Клиент", role: "User", text: "Серьезно? На Encar уже есть проходные варианты?" },
      { speaker: "ИИ", role: "AI", text: "Да, у нас сейчас более 40 проверенных вариантов с зелеными отчетами страховой. Сергей, давайте я пришлю вам подборку из трех лучших машин до 3.1 млн под ключ, чтобы вы оценили комплектации?" },
      { speaker: "Клиент", role: "User", text: "Да, скиньте в Telegram, если не сложно. Очень вовремя позвонили." }
    ]
  },
  {
    category: "Спящий Trade-In",
    title: "«Повышенный выкуп авто в счет заказа из Китая»",
    duration: "01:15",
    totalSeconds: 75,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Михаил, добрый день! Автоцентр 'Премиум-Импорт'. Вы месяц назад оставляли заявку на Li Auto L7, но тогда решили отложить, пока не продадите свой Volkswagen Tiguan." },
      { speaker: "Клиент", role: "User", text: "Да, машина пока не продалась, рынок вторички сейчас вялый, перекупы копейки предлагают." },
      { speaker: "ИИ", role: "AI", text: "Понимаю вас. У нас до конца месяца действует спецпрограмма: мы принимаем ваш Tiguan в экспресс Trade-In по рыночной оценке и сразу засчитываем эту сумму в счет аванса за Li L7. То есть вам не нужно ждать покупателя и терять время." },
      { speaker: "Клиент", role: "User", text: "А сколько за мой Tiguan 2019 года дадите?" },
      { speaker: "ИИ", role: "AI", text: "По вашей комплектации и пробегу вилка предварительной оценки — 2 450 000 – 2 600 000 рублей. Доплата за новый Li L7 составит меньше полутора миллионов. Удобно будет, если наш оценщик свяжется с вами и сделает точный расчет за 10 минут?" },
      { speaker: "Клиент", role: "User", text: "Давайте, пусть наберет, условия хорошие." }
    ]
  },
  {
    category: "Мягкий аудит базы",
    title: "«Уже купили автомобиль или вопрос еще актуален?»",
    duration: "00:58",
    totalSeconds: 58,
    lines: [
      { speaker: "ИИ", role: "AI", text: "Дмитрий, здравствуйте! Это брокер 'Авто-Альянс'. Звоню буквально на полминуты: вы ранее интересовались привозом авто под заказ. Подскажите, вопрос еще актуален или уже подобрали себе машину?" },
      { speaker: "Клиент", role: "User", text: "Здравствуйте. Да еще не купил, на работе завал был, руки не доходили." },
      { speaker: "ИИ", role: "AI", text: "Отлично, что застал! У нас как раз на следующей неделе формируется закрытый автовоз, освободилось 2 места со скидкой на доставку. Вы тогда смотрели BMW X3 из Германии. По-прежнему его рассматриваете или другие варианты приглянулись?" },
      { speaker: "Клиент", role: "User", text: "Вообще стал к Zeekr 001 присматриваться. Что по нему сейчас?" },
      { speaker: "ИИ", role: "AI", text: "Zeekr 001 — отличный выбор, сейчас один из лидеров по заказам. Сброшу вам подробный сравнительный расчет комплектаций и реальные сроки в WhatsApp. Хорошо?" },
      { speaker: "Клиент", role: "User", text: "Да, отлично, буду ждать!" }
    ]
  }
];

let currentReTrack = 0;
let isReAudioPlaying = false;
let reAudioTimer = null;
let reCurrentSeconds = 0;

function selectReactivationTrack(index) {
  stopReAudio();
  currentReTrack = index;
  reCurrentSeconds = 0;

  document.querySelectorAll('.re-track-card').forEach((el, idx) => {
    if (idx === index) {
      el.classList.add('active', 'bg-slate-50', 'border-amber-400', 'shadow-sm');
      el.classList.remove('bg-white', 'border-slate-200');
    } else {
      el.classList.remove('active', 'bg-slate-50', 'border-amber-400', 'shadow-sm');
      el.classList.add('bg-white', 'border-slate-200');
    }
  });

  const track = reactivationTracks[index];
  document.getElementById('re-player-category').textContent = track.category;
  document.getElementById('re-player-title').textContent = track.title;
  document.getElementById('re-audio-total-time').textContent = track.duration;
  document.getElementById('re-audio-current-time').textContent = '00:00';
  document.getElementById('re-audio-progress').style.width = '0%';

  renderReTranscript(track.lines);
}

function renderReTranscript(lines) {
  const container = document.getElementById('re-player-transcript');
  if (!container) return;

  container.innerHTML = lines.map((line, idx) => {
    const isAI = line.role === 'AI';
    return `
      <div id="re-transcript-line-${idx}" class="p-3 rounded-xl transition-colors ${isAI ? 'bg-amber-50/70 border border-amber-200/60' : 'bg-white border border-slate-200'}">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded ${isAI ? 'bg-amber-600 text-white' : 'bg-slate-700 text-white'}">${line.speaker}</span>
          ${isAI ? '<span class="text-[10px] text-amber-700 font-medium">Голосовой ИИ</span>' : ''}
        </div>
        <p class="text-slate-800 text-xs sm:text-sm leading-relaxed">${line.text}</p>
      </div>
    `;
  }).join('');
}

function toggleReactivationAudio() {
  if (isReAudioPlaying) {
    stopReAudio();
  } else {
    startReAudio();
  }
}

function startReAudio() {
  isReAudioPlaying = true;
  const icon = document.getElementById('re-audio-icon');
  const playBtn = document.getElementById('re-audio-play-btn');

  icon.setAttribute('data-lucide', 'pause');
  playBtn.classList.remove('bg-amber-600', 'hover:bg-amber-700');
  playBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');

  const track = reactivationTracks[currentReTrack];

  reAudioTimer = setInterval(() => {
    reCurrentSeconds++;
    if (reCurrentSeconds >= track.totalSeconds) {
      stopReAudio();
      reCurrentSeconds = 0;
    }

    const mins = Math.floor(reCurrentSeconds / 60);
    const secs = reCurrentSeconds % 60;
    document.getElementById('re-audio-current-time').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const percent = (reCurrentSeconds / track.totalSeconds) * 100;
    document.getElementById('re-audio-progress').style.width = percent + '%';
  }, 1000);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function stopReAudio() {
  isReAudioPlaying = false;
  const icon = document.getElementById('re-audio-icon');
  const playBtn = document.getElementById('re-audio-play-btn');

  if (icon) icon.setAttribute('data-lucide', 'play');
  if (playBtn) {
    playBtn.classList.add('bg-amber-600', 'hover:bg-amber-700');
    playBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
  }

  clearInterval(reAudioTimer);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function seekReactivationAudio(e) {
  const progressBar = e.currentTarget;
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickX / rect.width));

  const track = reactivationTracks[currentReTrack];
  reCurrentSeconds = Math.floor(ratio * track.totalSeconds);

  const mins = Math.floor(reCurrentSeconds / 60);
  const secs = reCurrentSeconds % 60;
  document.getElementById('re-audio-current-time').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('re-audio-progress').style.width = (ratio * 100) + '%';
}

// Reactivation ROI Calculator
function calculateReactivationROI() {
  const leads = parseInt(document.getElementById('input-re-leads').value, 10);
  const margin = parseInt(document.getElementById('input-re-margin').value, 10);
  const rate = parseFloat(document.getElementById('input-re-rate').value);

  document.getElementById('re-leads-val').textContent = leads.toLocaleString('ru-RU') + ' лидов';
  document.getElementById('re-margin-val').textContent = margin.toLocaleString('ru-RU') + ' ₽';
  document.getElementById('re-rate-val').textContent = `~${rate}%`;

  const reactivatedCount = Math.round(leads * (rate / 100));
  // In car brokerage, ~20% of reactivated warm leads convert to closed deal
  const estimatedDeals = Math.max(1, Math.round(reactivatedCount * 0.20));
  const estimatedProfit = estimatedDeals * margin;

  document.getElementById('re-deals-count').textContent = `~${reactivatedCount} клиентов`;
  document.getElementById('re-profit-total').textContent = `от ${estimatedProfit.toLocaleString('ru-RU')} ₽`;
}

function handleReactivationSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('re-lead-form');
  const successMsg = document.getElementById('re-form-success');

  form.classList.add('opacity-50', 'pointer-events-none');
  setTimeout(() => {
    form.classList.add('hidden');
    successMsg.classList.remove('hidden');
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  calculateReactivationROI();
  selectReactivationTrack(0);
});
