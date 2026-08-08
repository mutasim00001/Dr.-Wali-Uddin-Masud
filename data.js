/**
 * Central Data Store for Dr. Wali Uddin Masud Website
 * Skin Specialist, Hair Specialist & Venereologist
 */

const DOCTOR_DATA = {
  name: {
    en: "Dr. Wali Uddin Masud",
    bn: "ডাঃ ওয়ালী উদ্দিন মাসুদ"
  },
  title: {
    en: "Consultant Dermatologist & Venereologist",
    bn: "কনসালটেন্ট চর্ম, যৌন ও এলার্জি রোগ বিশেষজ্ঞ"
  },
  degrees: {
    en: "MBBS (Dhaka), BCS (Health), DDV (BSMMU), FCPS (Dermatology)",
    bn: "এমবিবিএস (ঢাকা), বিসিএস (স্বাস্থ্য), ডিডিভি (বিএসএমএমইউ), এফসিপিএস (ডার্মাটোলজি)"
  },
  bmdcReg: "A-54892",
  experienceYears: 12,
  patientsTreated: "18,500+",
  satisfactionRate: "99.2%",

  about: {
    bio: {
      en: "Dr. Wali Uddin Masud is a distinguished Consultant Dermatologist, Hair Specialist, and Venereologist in Bangladesh with over 12 years of clinical excellence. Specialized in treating modern skin disorders, chronic hair loss, complex fungal infections, sexual health (STD/VD) conditions, and advanced aesthetic/cosmetic procedures. He utilizes evidence-based medical science and personalized treatment protocols to deliver lasting health and confidence.",
      bn: "ডাঃ ওয়ালী উদ্দিন মাসুদ বাংলাদেশের একজন সুপরিচিত চর্ম, যৌন, চুল ও এলার্জি রোগ বিশেষজ্ঞ। ১২ বছরেরও বেশি সময় ধরে তিনি ত্বক, চুল ও যৌন স্বাস্থ্যজনিত জটিল রোগের আধুনিক ও বিজ্ঞানসম্মত চিকিৎসা প্রদান করছেন। লেজার থেরাপি, পিআরপি এবং কসমোটোলজির অত্যাধুনিক প্রযুক্তি ব্যবহারের মাধ্যমে তিনি রোগীদের সুস্থতা নিশ্চিত করে আসছেন।"
    },
    memberships: [
      { en: "Life Member, Dermatological Society of Bangladesh (DSB)", bn: "লাইফ মেম্বার, ডার্মাটোলজিক্যাল সোসাইটি অফ বাংলাদেশ" },
      { en: "Member, International Society of Dermatology (ISD)", bn: "সদস্য, ইন্টারন্যাশনাল সোসাইটি অফ ডার্মাটোলজি" },
      { en: "Member, European Academy of Dermatology and Venereology (EADV)", bn: "সদস্য, ইউরোপিয়ান একাডেমি অফ ডার্মাটোলজি অ্যান্ড ভেনেরেওলজি" }
    ],
    expertise: [
      { en: "Acne & Acne Scar Management", bn: "ব্রণ ও ব্রণের দাগের স্থায়ী চিকিৎসা" },
      { en: "Hair Loss & Hair Growth PRP Therapy", bn: "চুল পড়া রোধ ও পিআরপি থেরাপি" },
      { en: "Fungal Infection & Ringworm Eradication", bn: "ছত্রাক সংক্রমণ ও দাদের স্থায়ী চিকিৎসা" },
      { en: "Venereal Disease (STD/STI) Treatment", bn: "যৌন ব্যাধি ও গুপ্ত রোগের গোপনীয় চিকিৎসা" },
      { en: "Cosmetic Dermatology & Laser Care", bn: "কসমোটোলজি, বোটক্স ও লেজার ট্রিটমেন্ট" },
      { en: "Psoriasis & Chronic Eczema Care", bn: "সোরাইসিস ও একজিমার বিশেষায়িত পরিচর্যা" }
    ]
  },

  chambers: [
    {
      id: "dhanmondi",
      name: { en: "Popular Diagnostic Center, Dhanmondi", bn: "পপুলার ডায়াগনস্টিক সেন্টার, ধানমন্ডি" },
      branch: { en: "House #16, Road #2, Dhanmondi, Dhaka", bn: "হাউস #১৬, রোড #২, ধানমন্ডি, ঢাকা" },
      days: { en: "Saturday - Wednesday", bn: "শনিবার - বুধবার" },
      time: { en: "5:00 PM - 9:00 PM", bn: "বিকাল ৫:০০ - রাত ৯:০০" },
      phone: "+8801711002233",
      whatsapp: "+8801711002233",
      googleMap: "https://maps.google.com/?q=Dhanmondi+Dhaka",
      serialHelpline: "09611-778899"
    },
    {
      id: "chittagong",
      name: { en: "Labaid Hospital, Agrabad", bn: "ল্যাবএইড হাসপাতাল, আগ্রাবাদ" },
      branch: { en: "Agrabad Access Road, Chittagong", bn: "আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম" },
      days: { en: "Thursday & Friday", bn: "বৃহস্পতিবার ও শুক্রবার" },
      time: { en: "4:00 PM - 8:00 PM", bn: "বিকাল ৪:০০ - রাত ৮:০০" },
      phone: "+8801819994455",
      whatsapp: "+8801819994455",
      googleMap: "https://maps.google.com/?q=Agrabad+Chittagong",
      serialHelpline: "09611-334455"
    }
  ],

  services: [
    {
      id: "acne-treatment",
      icon: "sparkles",
      title: { en: "Acne & Scar Treatment", bn: "ব্রণ ও ব্রণের দাগের চিকিৎসা" },
      desc: { en: "Scientific treatment for severe acne, hormonal breakouts, dark spots, and stubborn ice-pick or pitted acne scars.", bn: "হরমোনাল ব্রণ, সিস্টিক একনে ও ব্রণের গর্ত বা কালো দাগের আধুনিক লেজার ও কেমিক্যাল পিল চিকিৎসা।" },
      details: {
        symptoms: ["Hormonal breakouts", "Cystic acne", "Post-acne hyperpigmentation", "Pitted scars"],
        treatments: ["Chemical Peels (Salicylic / Glycolic)", "Derma Roller & Microneedling", "Oral Isotretinoin Protocols", "Laser Scar Resurfacing"],
        recovery: "Visible reduction in 2-4 weeks with zero downtime."
      }
    },
    {
      id: "hair-fall",
      icon: "user-check",
      title: { en: "Hair Fall & PRP Therapy", bn: "চুল পড়া ও পিআরপি থেরাপি" },
      desc: { en: "Advanced Autologous Platelet-Rich Plasma (PRP) therapy, hair growth serums, and alopecia management.", bn: "চুল পড়া বন্ধ করা, নতুন চুল গজানো এবং পিআরপি (PRP) থেরাপির মাধ্যমে আধুনিক চিকিৎসা।" },
      details: {
        symptoms: ["Excessive hair shedding", "Pattern baldness (Androgenetic Alopecia)", "Thinning scalp hair", "Dandruff & Seborrheic Dermatitis"],
        treatments: ["High-Yield Micro-PRP Injection", "Mesotherapy Scalp Infusion", "Scalp Micropigmentation Guidance", "Nutritional & Hormonal Therapy"],
        recovery: "Noticeable density increase after 3-4 monthly sessions."
      }
    },
    {
      id: "fungal-infection",
      icon: "shield-alert",
      title: { en: "Fungal & Ringworm Care", bn: "ছত্রাক ও দাউদের স্থায়ি চিকিৎসা" },
      desc: { en: "Permanent eradication of recurring ringworm (Tinea Corporis/Cruris), fungal skin rashes, and nail fungus.", bn: "বারবার ফিরে আসা দাদ, চুলকানি, চর্মের ছত্রাক ও নখের ইনফেকশনের কার্যকর অ্যান্টিফাঙ্গাল কোর্স।" },
      details: {
        symptoms: ["Circular red itchy patches", "Groin fungal infection (Jock itch)", "White spots (Tinea Versicolor)", "Brittle discolored nails"],
        treatments: ["Targeted Systemic Antifungal Regimen", "Topical Barrier Repair Cream", "Fungal Culture Analysis", "Hygiene & Relapse Prevention Guide"],
        recovery: "Complete relief from itchiness in 7 days; total clearance in 3 weeks."
      }
    },
    {
      id: "allergy-treatment",
      icon: "activity",
      title: { en: "Allergy & Urticaria Treatment", bn: "এলার্জি ও চর্ম চুলকানি" },
      desc: { en: "Diagnosis and relief for chronic hives, dust/food allergies, skin rashes, and contact dermatitis.", bn: "ধুলোবালি, খাবার ও আবহাওয়াজনিত এলার্জি, আমবাত (Urticaria) এবং দীর্ঘস্থায়ী চুলকানির স্থায়ী আরাম।" },
      details: {
        symptoms: ["Sudden raised red welts (Hives)", "Severe skin itching", "Swelling of eyes/lips", "Allergic contact rashes"],
        treatments: ["Allergen Identification", "Advanced Antihistamine Therapy", "Biologic Immunotherapy Guidance", "Skin Barrier Cream"],
        recovery: "Immediate symptom relief with structured long-term allergy control."
      }
    },
    {
      id: "eczema-care",
      icon: "droplet",
      title: { en: "Eczema & Atopic Dermatitis", bn: "একজিমা ও চর্ম প্রদাহ" },
      desc: { en: "Soothing care for dry, cracked, bleeding skin patches in adults and children (Infantile Eczema).", bn: "ত্বকের শুষ্কতা, লালচে ভাব, ফেটে যাওয়া ও শিশুর একজিমার নিরাপদ সুনির্দিষ্ট চিকিৎসা।" },
      details: {
        symptoms: ["Dry, scaly, thickened skin", "Intense nocturnal itching", "Cracked skin with oozing"],
        treatments: ["Non-steroidal Anti-inflammatory Topicals", "Moisture Seal Emollients", "Phototherapy Guidance"],
        recovery: "Restoration of smooth skin barrier and flare-up prevention."
      }
    },
    {
      id: "psoriasis-treatment",
      icon: "layers",
      title: { en: "Psoriasis Management", bn: "সোরাইসিস চিকিৎসা" },
      desc: { en: "Comprehensive medical management for plaque psoriasis, scalp psoriasis, and nail changes.", bn: "ত্বক ও মাথায় রূপালি রঙের আঁশযুক্ত সোরাইসিসের আধুনিক চিকিৎসা ও রোগ নিয়ন্ত্রণে রাখার কৌশল।" },
      details: {
        symptoms: ["Silver scales on red patches", "Scalp flaking", "Pitted nails", "Joint stiffness"],
        treatments: ["Topical Corticosteroid & Vitamin D3 Analogues", "Systemic Immunomodulators", "Lifestyle & Trigger Management"],
        recovery: "90%+ clearance achievable with continuous medical monitoring."
      }
    },
    {
      id: "std-treatment",
      icon: "heart-pulse",
      title: { en: "Venereology & STD / STI Care", bn: "যৌন ব্যাধি ও গুপ্ত রোগের গোপনীয় চিকিৎসা" },
      desc: { en: "100% Confidential diagnosis and treatment for Syphilis, Gonorrhea, HPV Warts, Herpes, and genital infections.", bn: "সিফিলিস, গনোরিয়া, জননাঙ্গের আঁচিল (HPV), হার্পিস ও গোপন অঙ্গের চুলকানি বা ক্ষতের ১০০% গোপনীয় চিকিৎসা।" },
      details: {
        symptoms: ["Genital ulcers or blisters", "Unusual discharge or burning", "Genital warts/bumps", "Pain during urination"],
        treatments: ["PCR & Serological STI Screening", "Targeted Antibacterial / Antiviral Protocols", "Partner Evaluation Guidance", "Electrocautery / Cryotherapy for Warts"],
        recovery: "Strict patient privacy guaranteed. Complete cure for bacterial STDs."
      }
    },
    {
      id: "pigmentation-treatment",
      icon: "sun",
      title: { en: "Pigmentation & Melasma", bn: "মেচেতা ও কালচে দাগ" },
      desc: { en: "Advanced brightening solutions for pregnancy melasma, sun spots, freckles, and hyperpigmentation.", bn: "মেচেতা (Melasma), রোদে পোড়া কালো দাগ, তিল ও ত্বকের অসমান রঙ দূর করার সুনির্দিষ্ট কেয়ার।" },
      details: {
        symptoms: ["Brown facial patches", "Sun damage freckles", "Post-inflammatory dark spots"],
        treatments: ["Triple Combination Depigmenting Creams", "Q-Switched Laser / Glutathione protocols", "Broad-Spectrum Sun Protection"],
        recovery: "Gradual skin tone evening over 6-8 weeks."
      }
    },
    {
      id: "cosmetic-dermatology",
      icon: "wand-sparkles",
      title: { en: "Cosmetic Dermatology & Anti-Aging", bn: "কসমোটোলজি ও সৌন্দর্য চিকিৎসা" },
      desc: { en: "Non-surgical aesthetic enhancements: Botox for wrinkles, Skin Tag removal, Mole removal, and Glow Peels.", bn: "বলিরেখা দূর করতে বোটক্স, আচিল ও তিল অপসারণ, ফেসিয়াল গ্লো পিল এবং স্কিন রিজুভিনেশন।" },
      details: {
        symptoms: ["Wrinkles & fine lines", "Unwanted moles / skin tags", "Dull lifeless skin tone"],
        treatments: ["Botulinum Toxin Injections", "Radiofrequency / Cautery Tag Removal", "Carbon Glow Peel"],
        recovery: "Instant cosmetic improvement with minimal to no downtime."
      }
    },
    {
      id: "skin-consultation",
      icon: "stethoscope",
      title: { en: "General Skin Consultation", bn: "সাধারণ ত্বক পরামর্শ" },
      desc: { en: "Comprehensive full-body skin checkup, mole monitoring, and preventive skincare advice.", bn: "ত্বকের সার্বিক রোগ নির্ণয়, ক্ষতিকর তিল পরীক্ষা ও সুস্থ ত্বকের সঠিক যত্ন ও পরামর্শ।" },
      details: {
        symptoms: ["New or changing skin lesions", "Unexplained rashes", "Routine skin health review"],
        treatments: ["Dermoscopic Examination", "Individualized Skincare Regimen Setup"],
        recovery: "Personalized digital prescription and clear action plan."
      }
    },
    {
      id: "hair-consultation",
      icon: "scissors",
      title: { en: "Scalp & Hair Consultation", bn: "চুল ও স্কাল্প পরামর্শ" },
      desc: { en: "Trichoscopy evaluation to diagnose hair root health, scalp conditions, and hair transplant advisability.", bn: "ট্রাইকোস্কোপির মাধ্যমে চুলের গোড়ার পুষ্টি ও স্বাস্থ্য পরীক্ষা করে সঠিক সমাধান প্রদান।" },
      details: {
        symptoms: ["Dandruff buildup", "Scalp itch & redness", "Hair density loss assessment"],
        treatments: ["Digital Hair Density Analysis", "Customized Scalp Serum & Shampoo Prescriptions"],
        recovery: "Actionable roadmap for long-term hair preservation."
      }
    }
  ],

  whyChooseUs: [
    {
      icon: "award",
      title: { en: "12+ Years Clinical Excellence", bn: "১২+ বছরের বিশেষজ্ঞ অভিজ্ঞতা" },
      desc: { en: "Extensive experience from top government medical institutes and specialized skin centers.", bn: "দেশের শীর্ষস্থানীয় সরকারি মেডিকেল কলেজ ও ডার্মাটোলজি হাসপাতালের অভিজ্ঞতা।" }
    },
    {
      icon: "heart-handshake",
      title: { en: "Patient-Centered & Friendly", bn: "রোগীর প্রতি সর্বোচ্চ গুরুত্ব" },
      desc: { en: "Attentive listening, clear medical explanations, and zero unnecessary diagnostic test burden.", bn: "রোগীর কথা মনোযোগ দিয়ে শোনা এবং অহেতুক পরীক্ষা ছাড়া সঠিক চিকিৎসা।" }
    },
    {
      icon: "microscope",
      title: { en: "Modern Science & Laser Tech", bn: "আধুনিক চিকিৎসা প্রযুক্তি" },
      desc: { en: "FDA-approved equipment for PRP therapy, electrocautery, and chemical peels.", bn: "আন্তর্জাতিক মানের পিআরপি থেরাপি, ইলেকট্রোকোটারী ও আধুনিক চর্ম চিকিৎসা প্রযুক্তি।" }
    },
    {
      icon: "lock",
      title: { en: "100% Confidential STD Care", bn: "১০০% গোপনীয় যৌন চিকিৎসা" },
      desc: { en: "Empathetic, non-judgmental atmosphere for sensitive sexual health consultations.", bn: "যৌন ব্যাধি ও সংবেদনশীল স্বাস্থ্য সমস্যার গোপনীয় ও সম্মানজনক পরিবেশ।" }
    },
    {
      icon: "badge-percent",
      title: { en: "Affordable Consultation", bn: "সাশ্রয়ী ফি ও পরামর্শ" },
      desc: { en: "Reasonable consultation fees ensuring premium dermatology care is accessible to all.", bn: "সবার জন্য সাশ্রয়ী ফি এবং নির্দিষ্ট সময়ব্যাপী ফ্রি ফলো-আপ সুবিধা।" }
    }
  ],

  blogs: [
    {
      id: "hair-fall-causes",
      category: "Hair Care",
      date: "August 2, 2026",
      readTime: "4 min read",
      title: { en: "Top 5 Causes of Hair Fall in Bangladesh & How PRP Can Help", bn: "বাংলাদেশে অতিরিক্ত চুল পড়ার ৫টি প্রধান কারণ ও পিআরপি থেরাপির ভূমিকা" },
      excerpt: { en: "Hair loss affects over 60% of adults. Learn about hard water, stress, DHT hormone, and how PRP therapy regenerates dead follicles.", bn: "লোনা পানি, দুশ্চিন্তা, পুষ্টির অভাব ও ডিএইচটি হরমোনের কারণে চুল পড়লে কীভাবে ঘরোয়া ও পিআরপি চিকিৎসায় প্রতিরোধ করবেন।" },
      content: `
        <h3>Understanding Hair Loss in Bangladesh</h3>
        <p>Hair fall is a widespread problem influenced by environmental factors such as hard tap water, high humidity, nutritional deficiencies, and genetic predisposition (Androgenetic Alopecia).</p>
        <h4>Key Causes:</h4>
        <ul>
          <li><strong>DHT Hormone Impact:</strong> Dihydrotestosterone causes hair follicles to shrink, resulting in progressive thinning.</li>
          <li><strong>Water Mineral & Salinity Content:</strong> Heavy minerals in tap water weaken the hair root barrier.</li>
          <li><strong>Post-Viral Shedding:</strong> Dengue or typhoid fever often triggers sudden severe hair shedding (Telogen Effluvium).</li>
        </ul>
        <h4>How Autologous PRP Therapy Works:</h4>
        <p>PRP uses concentrated platelets from your own blood, rich in growth factors (PDGF, VEGF), injected gently into the scalp to awaken dormant hair follicles and double hair strand thickness.</p>
      `
    },
    {
      id: "acne-treatment-guide",
      category: "Skin Care",
      date: "July 28, 2026",
      readTime: "5 min read",
      title: { en: "Complete Guide to Acne Treatment & Scar Prevention", bn: "ব্রণ ও ব্রণের জেদি দাগ স্থায়ীভাবে দূর করার সম্পূর্ণ নির্দেশিকা" },
      excerpt: { en: "Stop popping pimples! Discover the medical science behind pimples, chemical peels, and why prescription retinoids outperform home remedies.", bn: "ব্রণ খুঁটবেন না! কেমিক্যাল পিল, স্যালিসিলিক এসিড ও ডাক্তারের প্রেসক্রিপশনের সঠিক ব্যবহার জানুন।" },
      content: `
        <h3>Why Do Pimples Keep Coming Back?</h3>
        <p>Acne occurs when excess sebum (oil), dead skin cells, and Cutibacterium acnes bacteria clog skin pores. Squeezing pimples pushes inflammation deeper, leading to permanent dark spots and pitted scars.</p>
        <h4>Effective Medical Solutions:</h4>
        <ul>
          <li><strong>Salicylic & Glycolic Peels:</strong> Gently exfoliate inside the pores and dissolve blackheads.</li>
          <li><strong>Prescription Retinoids:</strong> Normalize cell turnover and prevent new breakouts.</li>
          <li><strong>Microneedling / Laser:</strong> Stimulates collagen to fill deep acne scars.</li>
        </ul>
      `
    },
    {
      id: "fungal-prevention",
      category: "Dermatology",
      date: "July 15, 2026",
      readTime: "3 min read",
      title: { en: "How to Stop Recurring Ringworm & Fungal Infections in Monsoon", bn: "বর্ষাকালে বারবার দাদ ও ছত্রাক সংক্রমণ প্রতিরোধে করণীয়" },
      excerpt: { en: "Monsoon humidity breeds fungal spores rapidly. Learn why steroid creams worsen ringworm and how proper antifungals cure it.", bn: "দাদের জায়গায় স্টেরয়েড ক্রিম দিলে সংক্রমণ কেন বাড়ে এবং স্থায়ী মুক্তির বিজ্ঞানসম্মত উপায়।" },
      content: `
        <h3>The Hidden Danger of Over-the-Counter Steroid Creams</h3>
        <p>Many patients in Bangladesh buy combination steroid creams without a prescription. While steroids reduce itching temporarily, they suppress local skin immunity, causing the fungal infection to spread deeper (Tinea Incognito).</p>
        <h4>Essential Prevention Tips:</h4>
        <ul>
          <li>Keep underarms and groin completely dry using anti-fungal powders.</li>
          <li>Wash clothes with warm water and iron inside out.</li>
          <li>Complete the full 4-6 week antifungal oral medication course recommended by a specialist.</li>
        </ul>
      `
    },
    {
      id: "std-awareness",
      category: "Venereology",
      date: "June 20, 2026",
      readTime: "6 min read",
      title: { en: "Sexual Health & STD Awareness: Breaking the Stigma", bn: "যৌন স্বাস্থ্য ও সংক্রামক ব্যাধি: ভয় না পেয়ে নিন সঠিক চিকিৎসা" },
      excerpt: { en: "STDs are curable medical conditions when treated early. Learn about symptoms of Syphilis, Gonorrhea, and genital warts.", bn: "লজ্জা বা ভয়ে গোপন রোগ পুষে রাখবেন না। প্রাথমিক পর্যায়ে সঠিক চিকিৎসায় সিফিলিস ও গনোরিয়া সম্পূর্ণ নিরাময়যোগ্য।" },
      content: `
        <h3>Break the Silence: Early Diagnosis Saves Health</h3>
        <p>Venereal diseases affect millions, yet social stigma prevents patients from seeking specialized medical advice until complications arise. Dr. Wali Uddin Masud provides 100% confidential and compassionate care.</p>
        <h4>Common Symptoms to Watch For:</h4>
        <ul>
          <li>Painless sores or genital ulcers (Syphilis)</li>
          <li>Burning sensation during urination or unusual discharge (Gonorrhea/Chlamydia)</li>
          <li>Small flesh-colored bumps or warts (HPV)</li>
        </ul>
        <p>Consult a registered Venereologist promptly. Most bacterial STDs are completely curable with targeted antibiotic therapy.</p>
      `
    }
  ],

  testimonials: [
    {
      name: "Tariqul Islam",
      age: 34,
      location: "Dhanmondi, Dhaka",
      service: "PRP Hair Loss Treatment",
      rating: 5,
      comment: {
        en: "I was suffering from severe hair thinning for 2 years. After taking 4 sessions of PRP with Dr. Wali Uddin Masud, my hair loss stopped completely and new hair growth is visible. Extremely satisfied!",
        bn: "২ বছর ধরে চুল পড়ার সমস্যায় ভুগছিলাম। স্যারের ৪টি পিআরপি সেশনের পর চুল পড়া সম্পূর্ণ বন্ধ হয়েছে এবং নতুন চুল গজাচ্ছে। স্যারের ব্যবহার ও পরামর্শ এক কথায় চমৎকার!"
      }
    },
    {
      name: "Sharmin Sultana",
      age: 27,
      location: "Chittagong",
      service: "Acne & Scar Treatment",
      rating: 5,
      comment: {
        en: "Dr. Masud cured my stubborn acne and melasma within 6 weeks. No unnecessary tests, very genuine advice. Highly recommend him for skin issues in Bangladesh.",
        bn: "আমার মেচেতা ও ব্রণের দাগ ৬ সপ্তাহের চিকিৎসায় দূর হয়ে গেছে। অহেতুক কোন টেস্ট দেননি। ত্বকের যে কোনো সমস্যায় স্যার সেরা ডার্মাটোলজিস্ট।"
      }
    },
    {
      name: "Anonymous Patient",
      age: 31,
      location: "Dhaka",
      service: "Venereology & STD Care",
      rating: 5,
      comment: {
        en: "I was very hesitant and stressed about my condition. Dr. Wali Uddin Masud provided a friendly, confidential environment and cured my infection within 2 weeks. Infinite thanks to Doctor sahib.",
        bn: "প্রথমে খুব ভয় ও দ্বিধায় ছিলাম। স্যার অত্যন্ত গোপনীয়তা বজায় রেখে খুব আন্তরিকভাবে চিকিৎসা করেছেন। মাত্র দুই সপ্তাহে আমার ইনফেকশন সম্পূর্ণ ভালো হয়ে যায়।"
      }
    }
  ],

  faqs: [
    {
      category: "Skin",
      question: { en: "How long does acne treatment take to show results?", bn: "ব্রণের চিকিৎসা কাজ করতে কত দিন সময় লাগে?" },
      answer: { en: "Most patients notice reduced inflammation within 2 to 3 weeks. Complete clearance and scar improvement usually require a structured 8 to 12-week regimen.", bn: "সাধারণত ২ থেকে ৩ সপ্তাহের মধ্যে প্রদাহ ও নতুন ব্রণ আসা কমে। দাগ ও গর্ত দূর হতে ৮ থেকে ১২ সপ্তাহ সময় লাগে।" }
    },
    {
      category: "Hair",
      question: { en: "Is PRP hair treatment painful? How many sessions are needed?", bn: "পিআরপি (PRP) থেরাপি কি যন্ত্রণাদায়ক? কতটি সেশন লাগে?" },
      answer: { en: "Numbing cream is applied to the scalp prior to PRP, making the procedure virtually painless. Typically 3 to 6 sessions spaced one month apart are recommended for optimal growth.", bn: "ইনজেকশনের আগে লোকাল অবশকারী ক্রিম ব্যবহার করায় তেমন কোনো ব্যথা অনুভব হয় না। ভালো ফলাফলের জন্য ১ মাস পর পর ৩ থেকে ৬টি সেশনের প্রয়োজন হয়।" }
    },
    {
      category: "STD",
      question: { en: "Are my consultations and test reports kept confidential?", bn: "আমার রোগ ও রিপোর্টের তথ্য কি সম্পূর্ণ গোপন রাখা হবে?" },
      answer: { en: "Absolute 100% medical privacy and confidentiality is strictly guaranteed for all patients, especially in sexual health and venereal disease consultations.", bn: "হ্যাঁ, ১০০% গোপনীয়তা কঠোরভাবে বজায় রাখা হয়। আপনার ব্যক্তিগত ও চিকিৎসা সংক্রান্ত তথ্য সম্পূর্ণ সুরক্ষিত।" }
    },
    {
      category: "Appointments",
      question: { en: "How can I book an urgent appointment or serial with Dr. Masud?", bn: "ডাক্তার স্যারের সিরিয়াল কীভাবে পাবো?" },
      answer: { en: "You can book directly through our online appointment form on this website, call the chamber serial helplines, or send an instant WhatsApp message.", bn: "আপনি এই ওয়েবসাইটের অনলাইন ফর্ম পূরণ করে, হেল্পলাইনে কল দিয়ে অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ পাঠায়ে সিরিয়াল নিতে পারেন।" }
    }
  ],

  googleReviews: {
    aggregateRating: "4.9",
    totalCount: "420+",
    breakdown: [
      { stars: 5, percent: "94%" },
      { stars: 4, percent: "5%" },
      { stars: 3, percent: "1%" }
    ]
  }
};
