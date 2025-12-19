const translations = {
    pt: {
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        // HERO
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA",
        hero_title: "ANDRÉ GRAÇA",
        hero_desc: "Portfólio e Biografia",

        // TOOLS PAGE
        tools_header: "Arsenal Tecnológico",
        tools_sub: "Ferramentas e tecnologias utilizadas em operações e engenharia.",
        
        cat_secops: "01 // Ecossistema de Defesa (SecOps & Rede)",
        cat_appsec: "02 // Gestão de Vulnerabilidades & AppSec",
        cat_eng: "03 // Engenharia, Automação & Código",
        cat_infra: "04 // Identidade, Cloud & Intel",

        footer_contact_type: "Teams ou Email:"
    },
    en: {
        nav_home: "Home",
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        btn_lang: "PT",
        
        // HERO
        hero_badge: "CYBERSECURITY ENGINEER",
        hero_title: "ANDRÉ GRAÇA",
        hero_desc: "Portfolio & Bio",

        // TOOLS PAGE
        tools_header: "Tech Arsenal",
        tools_sub: "Tools and technologies leveraged in operations and engineering.",

        cat_secops: "01 // Defense Ecosystem (SecOps & Network)",
        cat_appsec: "02 // Vuln Management & AppSec",
        cat_eng: "03 // Engineering, Automation & Code",
        cat_infra: "04 // Identity, Cloud & Intel",

        footer_contact_type: "Teams or Email:"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
}

const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
    
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'en';
        changeLanguage(currentLang === 'en' ? 'pt' : 'en');
    });

    document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));
});