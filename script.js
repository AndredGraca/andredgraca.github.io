const translations = {
    pt: {
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        // HERO
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA",
        hero_title: "Segurança de Infraestruturas & Operações",
        hero_desc: "Especialista em construir sistemas resilientes, automatizar defesas e gerir incidentes críticos.",

        // CARDS
        c1_title: "Defesa (SecOps)",
        c1_desc: "Monitorização 24/7, engenharia de deteção em SIEM e resposta a incidentes em tempo real.",
        
        c2_title: "Engenharia",
        c2_desc: "Automação de segurança (SOAR) e desenvolvimento de scripts Python para otimização de processos.",

        c3_title: "Ofensiva (Red Team)",
        c3_desc: "Simulação de ataques e testes de penetração para identificar pontos cegos na infraestrutura.",

        c4_title: "Gestão de Vuln",
        c4_desc: "Identificação proativa e remediação de vulnerabilidades críticas com Tenable e scanners avançados.",

        c5_title: "Rede e Cloud",
        c5_desc: "Defesa de perímetro, segmentação de rede e hardening de ambientes Azure/Hybrid.",

        c6_title: "GRC",
        c6_desc: "Conformidade técnica com normas ISO27001, NIST e auditorias de segurança.",

        footer: "Entre em contacto via Email."
    },
    en: {
        nav_home: "Home",
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        btn_lang: "PT",
        
        // HERO
        hero_badge: "CYBERSECURITY ENGINEER",
        hero_title: "Infrastructure Security & Operations",
        hero_desc: "Specialist in building resilient systems, automating defenses, and managing critical incidents.",

        // CARDS
        c1_title: "Defense (SecOps)",
        c1_desc: "24/7 monitoring, SIEM detection engineering, and real-time incident response.",
        
        c2_title: "Engineering",
        c2_desc: "Security automation (SOAR) and Python script development for process optimization.",

        c3_title: "Offensive (Red Team)",
        c3_desc: "Attack simulation and penetration testing to identify blind spots in infrastructure.",

        c4_title: "Vuln Management",
        c4_desc: "Proactive identification and remediation of critical vulnerabilities using Tenable.",

        c5_title: "Network & Cloud",
        c5_desc: "Perimeter defense, network segmentation, and hardening of Azure/Hybrid environments.",

        c6_title: "GRC",
        c6_desc: "Technical compliance with ISO27001, NIST standards, and security audits.",

        footer: "Get in touch via Email."
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

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
    
    document.getElementById('lang-toggle').addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'en';
        changeLanguage(currentLang === 'en' ? 'pt' : 'en');
    });
});