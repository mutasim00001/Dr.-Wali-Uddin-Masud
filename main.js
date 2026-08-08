/**
 * Interactive Application Engine for Dr. Wali Uddin Masud Website
 */

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    renderChambers();
    renderServices();
    renderWhyChoose();
    renderBlogs();
    renderTestimonials();
    renderGallery('all');
    renderFAQs();
    renderGoogleReviews();
    initAppointmentForm();
    initLucideIcons();
    injectSchemaMarkup();
    setupEventListeners();
});

// Helper for translation lookup
function getTranslation(obj) {
    if (typeof obj === 'string') return obj;
    if (!obj) return '';
    return obj[currentLang] || obj['en'] || '';
}

// 1. Language Controller
function initLanguage() {
    const savedLang = localStorage.getItem('dr_masud_lang') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dr_masud_lang', lang);

    if (lang === 'bn') {
        document.body.classList.add('lang-bn');
        document.getElementById('btn-lang-en')?.classList.remove('bg-brand-primary', 'text-white');
        document.getElementById('btn-lang-en')?.classList.add('text-slate-600');
        document.getElementById('btn-lang-bn')?.classList.add('bg-brand-primary', 'text-white');
        document.getElementById('btn-lang-bn')?.classList.remove('text-slate-600');
    } else {
        document.body.classList.remove('lang-bn');
        document.getElementById('btn-lang-bn')?.classList.remove('bg-brand-primary', 'text-white');
        document.getElementById('btn-lang-bn')?.classList.add('text-slate-600');
        document.getElementById('btn-lang-en')?.classList.add('bg-brand-primary', 'text-white');
        document.getElementById('btn-lang-en')?.classList.remove('text-slate-600');
    }

    // Update elements with data-en / data-bn attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.innerHTML = text;
    });

    // Re-render dynamic sections
    renderChambers();
    renderServices();
    renderWhyChoose();
    renderBlogs();
    renderTestimonials();
    renderFAQs();
    initLucideIcons();
}

// 2. Render Chambers
function renderChambers() {
    const container = document.getElementById('chambers-grid');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.chambers.map(chamber => `
    <div class="medical-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
      <div class="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full -z-0 pointer-events-none"></div>
      
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            <i data-lucide="building-2" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">${getTranslation(chamber.name)}</h3>
            <p class="text-sm text-sky-600 font-medium">${getTranslation(chamber.branch)}</p>
          </div>
        </div>

        <div class="space-y-3 text-slate-600 my-6 text-sm">
          <div class="flex items-center gap-3">
            <i data-lucide="calendar" class="w-4 h-4 text-sky-500 shrink-0"></i>
            <span><strong>${currentLang === 'bn' ? 'রোগী দেখার দিন:' : 'Days:'}</strong> ${getTranslation(chamber.days)}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-lucide="clock" class="w-4 h-4 text-sky-500 shrink-0"></i>
            <span><strong>${currentLang === 'bn' ? 'সময়:' : 'Time:'}</strong> ${getTranslation(chamber.time)}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-lucide="phone-call" class="w-4 h-4 text-sky-500 shrink-0"></i>
            <span><strong>${currentLang === 'bn' ? 'সিরিয়াল হেল্পলাইন:' : 'Serial Helpline:'}</strong> <a href="tel:${chamber.serialHelpline}" class="text-slate-900 font-semibold hover:underline">${chamber.serialHelpline}</a></span>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 relative z-10">
        <a href="#appointment-section" onclick="selectChamberInForm('${chamber.id}')" class="flex-1 text-center py-2.5 px-4 bg-brand-primary text-white rounded-lg font-semibold hover:bg-sky-900 transition flex items-center justify-center gap-2 text-sm">
          <i data-lucide="calendar-check" class="w-4 h-4"></i>
          <span>${currentLang === 'bn' ? 'সিরিয়াল বুকিং' : 'Book Serial'}</span>
        </a>
        <a href="https://wa.me/${chamber.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Dr.%20Wali%20Uddin%20Masud,%20I%20want%20to%20book%20an%20appointment%20at%20${encodeURIComponent(chamber.name.en)}" target="_blank" class="py-2.5 px-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center justify-center gap-2 text-sm">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  `).join('');
}

// 3. Render Services
function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.services.map(service => `
    <div class="medical-card p-6 flex flex-col justify-between group cursor-pointer" onclick="openServiceModal('${service.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="service-icon-wrapper">
            <i data-lucide="${service.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full group-hover:bg-sky-600 group-hover:text-white transition">
            ${currentLang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'} &rarr;
          </span>
        </div>
        <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-primary transition">
          ${getTranslation(service.title)}
        </h3>
        <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          ${getTranslation(service.desc)}
        </p>
      </div>
    </div>
  `).join('');
}

// 4. Render Why Choose
function renderWhyChoose() {
    const container = document.getElementById('why-choose-grid');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.whyChooseUs.map(item => `
    <div class="p-6 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition">
      <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
        <i data-lucide="${item.icon}" class="w-6 h-6"></i>
      </div>
      <div>
        <h4 class="font-bold text-base text-slate-900 mb-1">${getTranslation(item.title)}</h4>
        <p class="text-slate-600 text-xs leading-relaxed">${getTranslation(item.desc)}</p>
      </div>
    </div>
  `).join('');
}

// 5. Render Blogs
function renderBlogs() {
    const container = document.getElementById('blogs-grid');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.blogs.map(blog => `
    <article class="medical-card overflow-hidden flex flex-col justify-between group">
      <div class="p-6">
        <div class="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span class="bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full font-semibold">${blog.category}</span>
          <span>${blog.readTime}</span>
        </div>
        <h3 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-sky-600 transition leading-snug">
          ${getTranslation(blog.title)}
        </h3>
        <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
          ${getTranslation(blog.excerpt)}
        </p>
      </div>
      <div class="px-6 pb-6">
        <button onclick="openBlogModal('${blog.id}')" class="w-full py-2 bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2">
          <span>${currentLang === 'bn' ? 'সম্পূর্ণ নিবন্ধ পড়ুন' : 'Read Full Article'}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </article>
  `).join('');
}

// 6. Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.testimonials.map(item => `
    <div class="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-3">
          ${Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>').join('')}
        </div>
        <p class="text-slate-700 text-sm italic leading-relaxed mb-4">
          "${getTranslation(item.comment)}"
        </p>
      </div>
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h5 class="font-bold text-sm text-slate-900">${item.name} (${item.age})</h5>
          <p class="text-xs text-slate-500">${item.location}</p>
        </div>
        <span class="text-xs px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full font-medium">${item.service}</span>
      </div>
    </div>
  `).join('');
}

// 7. Render Gallery
function renderGallery(filter = 'all') {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    const items = [
        { type: 'clinic', title: 'Modern Consultation Room', img: 'images/clinic.png' },
        { type: 'procedure', title: 'Advanced Laser & Skin Setup', img: 'images/procedure.png' },
        { type: 'clinic', title: 'Dr. Wali Uddin Masud', img: 'images/doctor.png' },
        { type: 'awareness', title: 'Free Skin Health Campaign', img: 'images/clinic.png' }
    ];

    const filtered = filter === 'all' ? items : items.filter(i => i.type === filter);

    container.innerHTML = filtered.map(item => `
    <div class="relative group rounded-xl overflow-hidden shadow-sm aspect-video bg-slate-100">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
        <span class="text-white text-sm font-semibold">${item.title}</span>
      </div>
    </div>
  `).join('');

    // Update tabs visual state
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        if (tab.getAttribute('data-filter') === filter) {
            tab.classList.add('bg-brand-primary', 'text-white');
            tab.classList.remove('bg-white', 'text-slate-600');
        } else {
            tab.classList.remove('bg-brand-primary', 'text-white');
            tab.classList.add('bg-white', 'text-slate-600');
        }
    });

    initLucideIcons();
}

// 8. Render FAQs
function renderFAQs() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;

    container.innerHTML = DOCTOR_DATA.faqs.map((faq, index) => `
    <div class="accordion-item border border-slate-200 rounded-xl bg-white overflow-hidden">
      <button onclick="toggleFAQ(${index})" class="w-full p-5 text-left font-bold text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition">
        <span>${getTranslation(faq.question)}</span>
        <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${index}"></i>
      </button>
      <div class="accordion-content px-5 pb-5 text-slate-600 text-sm leading-relaxed" id="faq-content-${index}">
        <div class="pt-2 border-t border-slate-100">
          ${getTranslation(faq.answer)}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
    const item = document.querySelectorAll('.accordion-item')[index];
    const icon = document.getElementById(`faq-icon-${index}`);

    if (item.classList.contains('active')) {
        item.classList.remove('active');
        icon?.classList.remove('rotate-180');
    } else {
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('[id^="faq-icon-"]').forEach(ic => ic.classList.remove('rotate-180'));
        item.classList.add('active');
        icon?.classList.add('rotate-180');
    }
}

// 9. Render Google Reviews
function renderGoogleReviews() {
    const badge = document.getElementById('google-reviews-badge');
    if (!badge) return;
    badge.innerHTML = `
    <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
      <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
      <span class="font-bold text-sm text-slate-900">${DOCTOR_DATA.googleReviews.aggregateRating}</span>
      <div class="flex text-amber-400">
        <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
      </div>
      <span class="text-xs text-slate-500 font-medium">(${DOCTOR_DATA.googleReviews.totalCount} ${currentLang === 'bn' ? 'রিভিউ' : 'reviews'})</span>
    </div>
  `;
}

// 10. Appointment Form Logic & WhatsApp Generator
function initAppointmentForm() {
    const chamberSelect = document.getElementById('appt-chamber');
    const serviceSelect = document.getElementById('appt-service');

    if (chamberSelect) {
        chamberSelect.innerHTML = DOCTOR_DATA.chambers.map(c => `
      <option value="${c.id}">${getTranslation(c.name)} (${getTranslation(c.days)})</option>
    `).join('');
    }

    if (serviceSelect) {
        serviceSelect.innerHTML = DOCTOR_DATA.services.map(s => `
      <option value="${s.id}">${getTranslation(s.title)}</option>
    `).join('');
    }

    const dateInput = document.getElementById('appt-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

function selectChamberInForm(chamberId) {
    const chamberSelect = document.getElementById('appt-chamber');
    if (chamberSelect) chamberSelect.value = chamberId;
}

function handleAppointmentSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('appt-name').value.trim();
    const phone = document.getElementById('appt-phone').value.trim();
    const chamberId = document.getElementById('appt-chamber').value;
    const serviceId = document.getElementById('appt-service').value;
    const date = document.getElementById('appt-date').value;
    const problem = document.getElementById('appt-problem').value.trim();

    const selectedChamber = DOCTOR_DATA.chambers.find(c => c.id === chamberId);
    const selectedService = DOCTOR_DATA.services.find(s => s.id === serviceId);

    if (!name || !phone || !date) {
        alert(currentLang === 'bn' ? 'দয়া করে নাম, মোবাইল নম্বর ও তারিখ পূরণ করুন।' : 'Please complete your name, phone number, and preferred date.');
        return;
    }

    // Generate WhatsApp Message
    const waMsg = `Hello Dr. Wali Uddin Masud Chamber,\nI would like to request an appointment serial.\n\n👤 *Patient Name:* ${name}\n📞 *Phone:* ${phone}\n🏥 *Chamber:* ${selectedChamber ? selectedChamber.name.en : 'Dhanmondi'}\n🩺 *Service:* ${selectedService ? selectedService.title.en : 'Skin Consultation'}\n📅 *Preferred Date:* ${date}\n📝 *Problem Details:* ${problem || 'N/A'}`;

    const targetWaNumber = selectedChamber ? selectedChamber.whatsapp.replace(/[^0-9]/g, '') : '8801711002233';
    const waUrl = `https://wa.me/${targetWaNumber}?text=${encodeURIComponent(waMsg)}`;

    // Display Success Modal
    const successModal = document.getElementById('appointment-success-modal');
    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) waBtn.href = waUrl;
    if (successModal) successModal.classList.remove('hidden');
}

function closeSuccessModal() {
    document.getElementById('appointment-success-modal')?.classList.add('hidden');
}

// 11. Modals for Services & Blogs
function openServiceModal(serviceId) {
    const service = DOCTOR_DATA.services.find(s => s.id === serviceId);
    if (!service) return;

    const modal = document.getElementById('info-modal');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    titleEl.innerText = getTranslation(service.title);

    bodyEl.innerHTML = `
    <div class="space-y-4">
      <p class="text-slate-700 leading-relaxed">${getTranslation(service.desc)}</p>
      
      <div class="bg-sky-50 p-4 rounded-xl">
        <h4 class="font-bold text-sky-900 text-sm mb-2">${currentLang === 'bn' ? 'উপসর্গ ও লক্ষণসমূহ:' : 'Common Symptoms:'}</h4>
        <ul class="list-disc list-inside text-xs text-sky-800 space-y-1">
          ${service.details.symptoms.map(sym => `<li>${sym}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-slate-900 text-sm mb-2">${currentLang === 'bn' ? 'আধুনিক চিকিৎসা পদ্ধতি:' : 'Available Treatments:'}</h4>
        <ul class="list-disc list-inside text-xs text-slate-600 space-y-1">
          ${service.details.treatments.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>

      <div class="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-lg font-medium">
        <strong>${currentLang === 'bn' ? 'ফলাফল:' : 'Expected Outcome:'}</strong> ${service.details.recovery}
      </div>

      <div class="pt-4 border-t border-slate-100 flex justify-end">
        <a href="#appointment-section" onclick="closeInfoModal(); selectServiceInForm('${service.id}')" class="py-2.5 px-5 bg-brand-primary text-white rounded-lg text-sm font-semibold hover:bg-sky-900 transition">
          ${currentLang === 'bn' ? 'এই চিকিৎসার সিরিয়াল বুক করুন' : 'Book Serial for this Treatment'}
        </a>
      </div>
    </div>
  `;

    modal.classList.remove('hidden');
    initLucideIcons();
}

function selectServiceInForm(serviceId) {
    const serviceSelect = document.getElementById('appt-service');
    if (serviceSelect) serviceSelect.value = serviceId;
}

function openBlogModal(blogId) {
    const blog = DOCTOR_DATA.blogs.find(b => b.id === blogId);
    if (!blog) return;

    const modal = document.getElementById('info-modal');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    titleEl.innerText = getTranslation(blog.title);
    bodyEl.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-3 text-xs text-slate-500">
        <span class="bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full font-semibold">${blog.category}</span>
        <span>${blog.date}</span>
        <span>${blog.readTime}</span>
      </div>
      <div class="prose prose-slate text-sm max-w-none leading-relaxed space-y-3">
        ${blog.content}
      </div>
    </div>
  `;

    modal.classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('info-modal')?.classList.add('hidden');
}

// 12. Lucide Icons Setup
function initLucideIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// 13. Event Listeners
function setupEventListeners() {
    // Mobile nav drawer
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');

    menuBtn?.addEventListener('click', () => {
        drawer?.classList.toggle('hidden');
    });

    // Gallery tabs
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const filter = e.currentTarget.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

// 14. Inject SEO JSON-LD Schema
function injectSchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Wali Uddin Masud",
        "image": "https://drwalimasud.com/images/doctor.png",
        "medicalSpecialty": [
            "Dermatology",
            "Venereology",
            "CosmeticDermatology"
        ],
        "description": "Specialist Dermatologist, Hair Specialist, and Venereologist in Dhaka & Chittagong, Bangladesh.",
        "telephone": "+8801711002233",
        "priceRange": "৳৳",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "House #16, Road #2, Dhanmondi",
            "addressLocality": "Dhaka",
            "addressCountry": "BD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "420"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}
