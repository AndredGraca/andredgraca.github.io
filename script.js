const translations = {
    pt: {
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        // HERO
        hero_status: "SYSTEM: ONLINE // ENCRYPTED",
        hero_title: "ANDRÉ GRAÇA",
        hero_role: "Cybersecurity Engineer",
        hero_tagline: "Proteção de Infraestruturas Críticas & Resposta a Incidentes",

        // TERMINAL LINES (Simulated Boot)
        term_line1: "> Initializing Security Protocols...",
        term_line2: "> Loading Modules: SIEM, SOAR, Python...",
        term_line3: "> Scanning Threat Intel Feeds...",
        term_line4: "> ACCESS GRANTED: Welcome, User.",

        // CARDS TITLES
        card_def_title: "Defesa (Blue Team)",
        card_def_desc: "Monitorização ativa, SIEM/XDR e Threat Hunting.",
        
        card_off_title: "Ataque (Red Team)",
        card_off_desc: "Mentalidade ofensiva para fortalecer defesas.",

        card_auto_title: "Engenharia & Automação",
        card_auto_desc: "Scripting Python e Playbooks SOAR para eficiência.",

        card_vuln_title: "Gestão de Vulnerabilidades",
        card_vuln_desc: "Identificação e remediação de riscos críticos (Tenable).",

        card_net_title: "Segurança de Rede",
        card_net_desc: "Defesa de perímetro e análise de tráfego (NDR).",

        card_grc_title: "GRC & Compliance",
        card_grc_desc: "Alinhamento com normas ISO27001, NIST e GDPR.",

        footer_contact: "Entre em contacto via Email."
    },
    en: {
        nav_home: "Home",
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        btn_lang: "PT",
        
        // HERO
        hero_status: "SYSTEM: ONLINE // ENCRYPTED",
        hero_title: "ANDRÉ GRAÇA",
        hero_role: "Cybersecurity Engineer",
        hero_tagline: "Critical Infrastructure Protection & Incident Response",

        // TERMINAL LINES
        term_line1: "> Initializing Security Protocols...",
        term_line2: "> Loading Modules: SIEM, SOAR, Python...",
        term_line3: "> Scanning Threat Intel Feeds...",
        term_line4: "> ACCESS GRANTED: Welcome, User.",

        // CARDS
        card_def_title: "Defense (Blue Team)",
        card_def_desc: "Active monitoring, SIEM/XDR and Threat Hunting.",
        
        card_off_title: "Offense (Red Team)",
        card_off_desc: "Offensive mindset to build stronger defenses.",

        card_auto_title: "Engineering & Auto",
        card_auto_desc: "Python scripting and SOAR Playbooks for efficiency.",

        card_vuln_title: "Vuln Management",
        card_vuln_desc: "Identification and remediation of critical risks (Tenable).",

        card_net_title: "Network Security",
        card_net_desc: "Perimeter defense and traffic analysis (NDR).",

        card_grc_title: "GRC & Compliance",
        card_grc_desc: "Alignment with ISO27001, NIST and GDPR frameworks.",

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
    // Re-run terminal animation on lang change
    runTerminal(lang);
}

// --- TERMINAL ANIMATION ---
function runTerminal(lang) {
    const termContent = document.getElementById('term-content');
    if(!termContent) return;
    
    termContent.innerHTML = ''; // Clear existing
    const lines = [
        translations[lang].term_line1,
        translations[lang].term_line2,
        translations[lang].term_line3,
        "<span class='cmd-success'>" + translations[lang].term_line4 + "</span>"
    ];

    let delay = 0;
    lines.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'cmd-line';
            p.innerHTML = `<span class="cmd-keyword">root@cybersec:~$</span> ${line}`;
            termContent.appendChild(p);
        }, delay);
        delay += 800; // Speed of typing
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
    
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'en';
        changeLanguage(currentLang === 'en' ? 'pt' : 'en');
    });
});