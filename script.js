const translations = {
    pt: {
        nav_home: "Início",
        nav_profile: "Sobre Mim",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        nav_certs: "Certificações",
        hero_title: "André Graça",
        hero_role: "Engenheiro de Cibersegurança",
        hero_summary: "Um profissional de cibersegurança versátil. Faço a ponte entre a segurança ofensiva, operações defensivas e engenharia estratégica.", // [cite: 25, 26]
        contact_title: "Contactos",
        btn_lang: "EN",
        // Profile Page Data
        exp_title: "Experiência Profissional",
        exp_role: "Engenheiro de Cibersegurança @ Noesis (2020 - Presente)", // [cite: 29, 30]
        exp_desc_1: "Liderança de Equipa: Redução do MTTR em 15%.", // [cite: 31]
        exp_desc_2: "SIEM/XDR: Redução de falsos positivos em 30% (ArcSight, Cortex, Sentinel).", // 
        exp_desc_3: "Gestão de Vulnerabilidades: Remediação de +500 vulnerabilidades críticas.", // 
        exp_desc_4: "Automação SOAR: Poupança de 15 horas semanais via automação.", // [cite: 34]
        // Skills Page Data
        skill_cat_def: "Segurança Defensiva",
        skill_cat_off: "Segurança Ofensiva",
        skill_cat_grc: "GRC e Conformidade",
        skill_cat_eng: "Engenharia e Automação",
        // Certs
        certs_title: "Certificações"
    },
    en: {
        nav_home: "Home",
        nav_profile: "About Me",
        nav_skills: "Skills",
        nav_tools: "Tools",
        nav_certs: "Certifications",
        hero_title: "André Graça",
        hero_role: "Cybersecurity Engineer",
        hero_summary: "A versatile cybersecurity professional. Bridging the gap between offensive security, defensive operations, and strategic engineering.", // [cite: 25, 26]
        contact_title: "Contact",
        btn_lang: "PT",
        // Profile Page Data
        exp_title: "Professional Experience",
        exp_role: "Cybersecurity Engineer @ Noesis (2020 - Present)", // [cite: 29, 30]
        exp_desc_1: "Team Leadership: Reduced MTTR by 15%.", // [cite: 31]
        exp_desc_2: "SIEM/XDR: Reduced false positives by 30% (ArcSight, Cortex, Sentinel).", // 
        exp_desc_3: "Vuln Management: Remediated 500+ critical vulnerabilities.", // 
        exp_desc_4: "SOAR Automation: Saved 15+ manual hours/week via automation.", // [cite: 34]
        // Skills Page Data
        skill_cat_def: "Defensive Security",
        skill_cat_off: "Offensive Security",
        skill_cat_grc: "GRC & Compliance",
        skill_cat_eng: "Engineering & Automation",
        // Certs
        certs_title: "Certifications"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Toggle Button Logic
document.getElementById('lang-toggle').addEventListener('click', () => {
    const currentLang = localStorage.getItem('lang') || 'en';
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    changeLanguage(newLang);
});

// Load saved language on startup
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
});