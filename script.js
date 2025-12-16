const translations = {
    pt: {
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        // HERO
        hero_sub: "ENGENHEIRO DE CIBERSEGURANÇA",
        hero_title: "ANDRÉ GRAÇA",
        hero_desc: "Especialista em Proteção de Infraestruturas, Resposta a Incidentes e Automação de Segurança.",

        // MASTERY CARDS
        card_1_title: "Defesa (Blue Team)",
        card_1_desc: "Monitorização ativa de ameaças, engenharia de deteção em SIEM/XDR e resposta rápida a incidentes.",
        
        card_2_title: "Ataque (Red Team)",
        card_2_desc: "Utilização de táticas ofensivas e pentesting para identificar falhas e fortalecer as defesas.",

        card_3_title: "Automação & Eng.",
        card_3_desc: "Criação de scripts Python e Playbooks SOAR para eliminar tarefas repetitivas e acelerar respostas.",

        card_4_title: "Gestão de Vuln",
        card_4_desc: "Identificação, análise e remediação de vulnerabilidades críticas em toda a infraestrutura.",

        card_5_title: "Segurança de Rede",
        card_5_desc: "Proteção de perímetro, segmentação de rede e análise de tráfego (NDR/EDR).",

        card_6_title: "GRC & Compliance",
        card_6_desc: "Alinhamento estratégico com normas internacionais ISO27001, NIST e regulamentos GDPR.",

        footer_contact: "Entre em contacto via Email."
    },
    en: {
        nav_home: "Home",
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        btn_lang: "PT",
        
        // HERO
        hero_sub: "CYBERSECURITY ENGINEER",
        hero_title: "ANDRÉ GRAÇA",
        hero_desc: "Specialist in Infrastructure Protection, Incident Response, and Security Automation.",

        // MASTERY CARDS
        card_1_title: "Defense (Blue Team)",
        card_1_desc: "Active threat monitoring, detection engineering on SIEM/XDR, and rapid incident response.",
        
        card_2_title: "Offense (Red Team)",
        card_2_desc: "Using offensive tactics and pentesting to identify gaps and harden defenses.",

        card_3_title: "Automation & Eng.",
        card_3_desc: "Creating Python scripts and SOAR Playbooks to eliminate repetitive tasks and speed up response.",

        card_4_title: "Vuln Management",
        card_4_desc: "Identification, analysis, and remediation of critical vulnerabilities across the infrastructure.",

        card_5_title: "Network Security",
        card_5_desc: "Perimeter protection, network segmentation, and traffic analysis (NDR/EDR).",

        card_6_title: "GRC & Compliance",
        card_6_desc: "Strategic alignment with international standards ISO27001, NIST, and GDPR regulations.",

        footer_contact: "Get in touch via Email."
    }
};

// --- LANGUAGE LOGIC ---
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
}

// --- ANIMATION OBSERVER ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Play animation once
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

    // Initialize Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .mastery-card');
    animatedElements.forEach(el => observer.observe(el));
});