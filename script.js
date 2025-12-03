function triggerHaptic() {
    if (navigator.vibrate) navigator.vibrate(15);
}

document.querySelectorAll('.btn-interactive, .theme-toggle, #back-to-top, .mode-toggle').forEach(btn => {
    btn.addEventListener('click', function (e) {
        triggerHaptic();
        if (this.classList.contains('btn-interactive')) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            let clientX = e.clientX || (e.touches && e.touches[0].clientX);
            let clientY = e.clientY || (e.touches && e.touches[0].clientY);
            if (!clientX || !clientY) {
                const rect = this.getBoundingClientRect();
                clientX = rect.left + rect.width / 2;
                clientY = rect.top + rect.height / 2;
            }
            let x = clientX - this.getBoundingClientRect().left;
            let y = clientY - this.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => { ripple.remove(); }, 600);
        }
    });
});

if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    window.addEventListener('deviceorientation', (e) => {
        const tiltX = e.gamma;
        const tiltY = e.beta;
        if (tiltX !== null && tiltY !== null) {
            const x = Math.min(Math.max(tiltX, -45), 45) / 2;
            const y = Math.min(Math.max(tiltY - 45, -45), 45) / 2;
            document.querySelectorAll('.doodle').forEach((doodle, index) => {
                const speed = (index + 1) * 0.5;
                doodle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        }
    });
}

document.addEventListener('click', (e) => {
    createTouchParticle(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
    for (let i = 0; i < e.touches.length; i++) {
        createTouchParticle(e.touches[i].clientX, e.touches[i].clientY);
    }
}, { passive: true });

function createTouchParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('touch-particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);
    setTimeout(() => { particle.remove(); }, 500);
}

const loadingTexts = [
    "Memuat manipulasi pikiran...",
    "Menambahkan micin cinta...",
    "Menghapus opsi 'Aku mau Kopi'...",
    "Menyogok lidah...",
    "Mewarnai hari dengan hijau..."
];
let loadIdx = 0;
const loadTextEl = document.getElementById('loading-text');
const loadInterval = setInterval(() => {
    loadIdx = (loadIdx + 1) % loadingTexts.length;
    loadTextEl.textContent = loadingTexts[loadIdx];
}, 600);

function showCustomModal(message, title = "⚠️ PERINGATAN KERAS ⚠️") {
    const modal = document.getElementById('tc-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('tc-modal').style.display = 'none';
}

window.addEventListener('load', () => {
    setTimeout(() => {
        clearInterval(loadInterval);
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            showCustomModal("Dengan mengakses web ini, Kamu setuju untuk minimal mencicipi satu teguk matcha dalam 24 jam ke depan.");
        }, 500);
    }, 3000);
});

function toggleMatchaMode() {
    const body = document.body;
    const label = document.getElementById('mode-label');
    const isMatcha = body.classList.toggle('mode-matcha');
    if (isMatcha) {
        label.textContent = "Mode Matcha";
        if (!window.hasAlertedMatcha) {
            showCustomModal("Maaf, fitur selain warna hijau sedang rusak karena terlalu cinta matcha.");
            window.hasAlertedMatcha = true;
        }
    } else {
        label.textContent = "Mode Normal";
    }
}

function scrollToReasons() {
    document.getElementById('reasons').scrollIntoView({ behavior: 'smooth', block: 'start' });
    createHearts();
}

function celebrateMatcha(btn) {
    restoreNormalMode();
    btn.textContent = "AKU JUGA SAYANG KAMU 🥰";
    btn.style.backgroundColor = "#e8b4b8";
    btn.disabled = true;
    const noBtn = document.getElementById('dangerTriggerBtn');
    if (noBtn) noBtn.style.display = 'none';
    createGreenConfetti();
    createHearts();
    setTimeout(createGreenConfetti, 500);
    setTimeout(createHearts, 800);
    setTimeout(() => {
        showCustomModal("BWAHAHAHAHA.... Selamat datang di sekte Matcha! 😈");
    }, 1000);
}

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function populateReasons() {
    const container = document.getElementById('reasonsList');
    reasons.forEach((reason, index) => {
        const item = document.createElement('div');
        item.className = 'reason-item';
        item.innerHTML = `<div class="reason-number">${index + 1}.</div><div class="reason-text">${reason}</div>`;
        container.appendChild(item);
        observer.observe(item);
    });
}

const reasons = ["Anggap aja lagi simulasi jadi sapi estetik di Swiss 🐄", "Rasanya unik, seunik kamu (eaaa) 🥰", "Pahitnya dikit kok, lebih banyak manisnya kayak senyum kamu ☺️", "Lidah kamu cuma kaget, belum kenalan aja sama rasanya 😋", "Biar feed Instagram kamu warnanya ijo estetik 📸", "Liat bubuknya deh, halus banget kayak bedak mahal ✨", "Ini bukan jus rumput, sumpah ✌️", "Orang Jepang panjang umur gara-gara ini (katanya) 🙏", "Kalau kamu merem, rasanya mirip cokelat (harus pake imajinasi tinggi) 🍫", "Gak bikin deg-degan, malah bikin tenang 🧘‍♂️", "Teksturnya creamy, lembut banget di tenggorokan 🥛", "Sekali aja. Seteguk. Plis 🥺", "Ini tren global, kamu cobain deh 🌏", "Karena aku udah capek-capek bikin web ini dengan penuh mactha.. ehh cinta 😇", "Kamu gak suka matcha = Gak apa-apa, aku tetap suka kamu 🥰", "Kata ramalan bintang, kita cocok. Matcha cuma pelengkap aja 🔮", "Franky bilang lidah kamu butuh modifikasi SUPER biar bisa ngerasain enaknya Matcha! 🤖", "Dokter bilang sering-sering liat warna hijau itu bagus buat mata. Anggap aja ini terapi mata gratis sambil minum. 🤓", "Rambut Zoro warna hijau dan dia keren banget. Matcha juga hijau, jadi secara logika... Matcha itu keren. ⚔️", "Lampu hijau artinya jalan. Matcha artinya jalanin aja dulu 🚦", "Enakan minum berdua tau daripada aku sendirian 👫", "Semut aja suka yang manis-manis, ini manis lho (udah aku mintain gula) 🐜", "Coba minumnya sambil kayang, pasti sensasinya beda 🤸‍♂️", "Setiap kali ada yang nolak matcha, satu peri teh di dunia kehilangan sayapnya. Tega kamu? 🧚‍♀️", "Jangan benci dulu sebelum kenal deket ✋", "Antioksidannya tinggi, bisa menangkal radikal bebas dan omongan tetangga 🛡️", "Kamu phobia warna hijau apa gimana? 😱", "Kandungan klorofilnya bagus buat fotosintesis (kalau kamu tanaman) 🌱", "Tanda-tanda orang bahagia itu suka nyoba hal baru 😁", "Mungkin selera kamu emang yang manis-manis banget (kayak aku) 🍬", "Rasanya earthy, definisi 'membumi' yang sesungguhnya 🧘‍♀️", "Kata pakar, rasa matcha itu acquired taste (artinya: paksa dulu baru suka) 😈", "Anggap aja ini tanda kecocokan kita 🧩", "Coba liat mataku yang penuh harap ini 🥺", "Kalau gak suka, anggap aja lagi challenge Fear Factor versi lite 🤢", "Ini teh jepang asli, bukan jus rumput tetangga kok 🍵", "Diaduknya pakai perasaan tau, hargai kerja keras sendoknya dong! 🥄", "Kucing lewat aja ngeong, artinya dia dukung kita 🐱", "Petualangan rasa baru biar hidup makin berwarna 🌈", "Kita suit. Kalau aku menang, kamu minum ✌️", "Kalau kamu menang, kamu tetep minum (aturan tetaplah aturann) 📜", "Biar organ dalam kaget dikasih yang sehat, biasanya kan isinya gorengan mulu 🍤", "Sekali seumur hidup kok (besok terserah kamu deh) 🗓️", "Buat menuhin kuota \"Mencoba Hal Baru\" tahun ini ✅", "Zat L-Theanine di dalamnya bikin rileks, cocok buat ngadepin drama hidup 😌", "Minum ini bikin level kultivasi naik ke tingkat Immortal (kata manhwa) ⚡", "Jiwa petualang kayak kamu pasti berani coba 🤠", "Kalau diminum sambil merem, rasanya... tetep rasa matcha sih 🙄", "Ini sebenernya daun teh yang ditumbuk penuh dedikasi (dan emosi) 🌿", "Coba dulu, kalau gak enak... yaudah telen aja buruan 😈", "Rasanya kayak rumput laut tapi versi dessert mahal 🍰", "Biar pencernaan lancar jaya kayak jalan tol jam 3 pagi 🛣️", "Siapa tau habis minum dapet ilham bisa lihat masa depan 🔮", "Kalau minum ini, auto berasa jadi warga lokal Kyoto ⛩️", "Ini ijonya natural, gak kayak janji manis pemerintah 🙏", "Ayo dong, bub...", "Yaudahlah ya, namanya juga usaha 🤷‍♂️", "Iseng aja sih pengen liat ekspresi kamu pas lagi coba 😋", "Rasanya unik, bikin bingung tapi penasaran kan? 🤔", "Kata Google ini sehat, tapi kata aku ini enak 📱", "Luffy kalau ga makan daging pasti minum ini (biar kuat jadi Raja Bajak Laut) 🍖", "Plis dong... 🥺", "Dikit aja... 🤏", "Baunya doang? 👃", "Pegang gelasnya doang? 🤲", "Foto sama gelasnya? 📸", "Masih gak mau juga? 😤", "Aku aja bisa nyasar ke hati kamu, masa matcha enggak? ⚔️", "Aku harus loncat loncat dulu biar kamu mau? 🦘", "Atau salto? 🤸‍♂️", "Dibuat dengan teknik rahasia biar rasanya nyampe ke hati (eaakk) 💘", "Ayolah... 🙏", "Jangan biarkan aku menikmati kelezatan ini sendirian 🍵", "Matcha itu temennya Susu. Kamu suka Susu kan? ehh aku deng yang suka susu 🥛", "Chopper bilang ini obat paling ampuh buat hati yang galau 🦌", "Karena aku sayang kamu ❤️", "Matcha emang pait dikit, tapi kamu penawarnya 💊", "Aku cuma pengen liat kamu ketawa baca ini 📖", "Kamu jauh lebih penting daripada bubuk hijau ini 💚", "Nami pasti minta bayaran mahal buat resep ini, tapi buat kamu gratis 💰", "Kalau enggak, aku tetep sayang kok 🤗", "Makasih udah baca sampe poin 82 📚", "Rajin banget bacanya, pasti sayang aku juga 👀", "Pasti lagi senyum-senyum sendiri kan? 😏", "Tuh kan ketawa 😆", "Cantik tau kalau lagi ketawa ✨", "Rasanya selegendaris One Piece lohh 🏴‍☠️", "Gak maksa kok (tapi berharap) 🤞", "Cintaku cuma buat kamu, Matcha cuma pelengkap suasana 🍵", "Apapun minumannya, yang penting duduknya sama kamu atau di dudukin kamu 😋", "Kalau tetep gak mau, yaudah aku abisin dua-duanya (aku kuat) 💪", "Aku minum matcha, kamu minum senyuman aku aja 😁", "Kita cocok, kayak susu dan matcha yang perfect blend 🍵", "Love you cantikk ❤️", "Udah mau abis nih list-nya 🔚", "Masih gak mau berubah pikiran? 🤔", "Yakin? 🤨", "Beneran yakin? 🔥", "Yaudah deh aku ngalah demi kamu 🏳️", "Coba cek takdir minuman kamu di bawah dehh sayangg 👇"];

const spinItems = ["☕ Kopi Hitam", "🧋 Boba Milk Tea", "🥤 Air Putih", "🍺 Teh Obeng", "🍹 Es Jeruk", "🧉 Kopi Susu"];
const finalResults = ["🍵 Matcha Latte", "💚 Matcha Frappe", "🍦 Es Krim Matcha", "🌿 Pure Matcha"];

function spinGacha() {
    const resultEl = document.getElementById('gachaResult');
    const commentEl = document.getElementById('gachaComment');
    const btn = document.getElementById('spinBtn');
    btn.disabled = true;
    commentEl.classList.remove('show');
    resultEl.classList.add('spinning');
    resultEl.classList.remove('glitch');
    resultEl.style.color = "";
    let spins = 0;
    const spinInterval = setInterval(() => {
        resultEl.textContent = spinItems[Math.floor(Math.random() * spinItems.length)];
        spins++;
        if (spins > 30) {
            clearInterval(spinInterval);
            resultEl.classList.remove('spinning');
            resultEl.classList.add('glitch');
            resultEl.textContent = finalResults[Math.floor(Math.random() * finalResults.length)];
            createGreenConfetti();
            createHearts();
            setTimeout(() => {
                commentEl.textContent = "Ups... tombolnya rusak. Harus Matcha berarti.";
                commentEl.classList.add('show');
                btn.disabled = false;
                resultEl.classList.remove('glitch');
                revealEndContent();
            }, 500);
        }
    }, 50);
}

function revealEndContent() {
    const survey = document.getElementById('surveySection');
    const footer = document.getElementById('footerSection');
    if (survey.classList.contains('hidden-initial')) {
        survey.classList.remove('hidden-initial');
        survey.classList.add('reveal-content');
        footer.classList.remove('hidden-initial');
        footer.classList.add('reveal-content');
        setTimeout(() => {
            survey.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 800);
    }
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'particle heart-rain';
            heart.textContent = ['💚', '🍵', '✨', '🍃'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (2 + Math.random() * 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
}

function createGreenConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'particle confetti';
        confetti.style.left = '50%';
        confetti.style.top = '70%';
        confetti.style.backgroundColor = ['#a8c69f', '#5a6f58', '#00ff00', '#ffffff'][Math.floor(Math.random() * 4)];
        const tx = (Math.random() - 0.5) * 500 + 'px';
        const ty = (Math.random() - 1) * 500 + 'px';
        confetti.style.setProperty('--tx', tx);
        confetti.style.setProperty('--ty', ty);
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1000);
    }
}

function triggerDangerMode() {
    if (navigator.vibrate) navigator.vibrate(500);
    const alertBox = document.getElementById('danger-alert');
    alertBox.classList.add('active');
    alertBox.style.display = 'flex';
    document.body.classList.add('mode-danger');
    document.body.style.animation = 'none';
    void document.body.offsetWidth;
    document.body.style.animation = 'shake 0.5s infinite';
    const btnYes = document.getElementById('btnYes');
    btnYes.style.display = 'inline-block';
    btnYes.classList.add('reveal-content');
    document.getElementById('dangerTriggerBtn').style.display = 'none';
}

function restoreNormalMode() {
    const alertBox = document.getElementById('danger-alert');
    alertBox.classList.remove('active');
    alertBox.style.display = 'none';
    document.body.classList.remove('mode-danger');
    document.body.style.animation = 'none';
}

document.addEventListener('DOMContentLoaded', () => { populateReasons(); });

const originalTitle = document.title;
const angryTitles = ["JANGAN KABUR WOI!", "Balik sini, belum kelar bacanya...", "Dih, ninggalin...", "Matcha-nya nangis lho...", "HEH MAU KEMANA!"];
document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? angryTitles[Math.floor(Math.random() * angryTitles.length)] : originalTitle;
});

const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
