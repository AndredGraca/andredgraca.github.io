const translations = {
    // ... [MANTENHA AQUI O DICIONÁRIO COMPLETO] ...
    // Certifique-se de que o dicionário "pt" e "en" está completo como nas versões anteriores.
    pt: {
        nav_home: "Início", nav_impact: "Impacto", nav_expertise: "Especialidade", nav_skills: "Competências", nav_tools: "Ferramentas", nav_profile: "Perfil", nav_contact: "Contato", nav_certs: "Certificações", btn_lang: "EN",
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA", hero_title: "André Graça", hero_subtitle: "Construindo Defesas Digitais Resilientes", hero_desc: "Especializado em SecOps, inteligência de ameaças e engenharia de segurança.",
        btn_explore: "Explorar Trabalho", btn_contact: "Entrar em Contato",
        stat_vuln_label: "Vulnerabilidades Resolvidas", stat_malware_label: "Redução de Malware", stat_endpoints_label: "Endpoints Seguros", stat_mttr_label: "Melhoria no MTTR",
        expert_tag: "COMPETÊNCIAS PRINCIPAIS", expert_title: "Expertise em Segurança", expert_desc: "Capacidades abrangentes de cibersegurança em defesa, engenharia e inteligência de ameaças.",
        skills_badge: "EXPERTISE TÉCNICA", skills_title: "Competências e Capacidades", skills_desc: "Detalhamento técnico das áreas de atuação e impacto profissional.",
        tools_tag: "ARSENAL", tools_title: "Stack de Segurança",
        card_secops_title: "Operações de Segurança", card_secops_desc: "Liderança de equipas L1 e otimização de deteção em SIEM/XDR.",
        card_eng_title: "Engenharia & Automação", card_eng_desc: "Arquitetura de playbooks SOAR e integrações API.",
        card_intel_title: "Inteligência de Ameaças", card_intel_desc: "Recolha estratégica para antecipar TTPs.",
        card_vuln_title: "Gestão de Vulnerabilidades", card_vuln_desc: "Programa proativo com Tenable.io e Landsweeper.",
        card_cloud_title: "Segurança Cloud & Endpoint", card_cloud_desc: "Onboarding de 2000+ endpoints.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Auditorias para PCI DSS, NIS2 e GDPR.",
        c1_title: "Defesa (SecOps)", c1_desc: "Liderança de equipas L1.", c2_title: "Engenharia", c2_desc: "Arquitetura SOAR.",
        c3_title: "Security Assessment", c3_desc: "Avaliações OWASP e testes Red Team.", c4_title: "Vulnerability Management", c4_desc: "Programa com Tenable.io.",
        c5_title: "Network Security", c5_desc: "Darktrace e Palo Alto.", c6_title: "Cloud Security", c6_desc: "Defender e Intune.",
        c7_title: "Compliance", c7_desc: "Auditorias PCI DSS/NIS2.", c8_title: "Software", c8_desc: "ArcSight, Cortex, Sentinel.",
        c9_title: "Programming", c9_desc: "Python e automação.", c10_title: "IAM", c10_desc: "Identidade Microsoft.",
        c11_title: "Reporting", c11_desc: "Relatórios Blue Team.", c12_title: "Asset Management", c12_desc: "Landsweeper e Tenable.",
        c13_title: "Threat Intelligence", c13_desc: "Antecipar TTPs.", c14_title: "Threat Hunting", c14_desc: "Investigação proativa.",
        c15_title: "Digital Forensics", c15_desc: "Análise forense e causa raiz.",
        profile_tag: "PERFIL", edu_title: "Formação Académica", edu_1: "Pós-Graduação ISTEC", edu_2: "Licenciatura Lusófona", edu_3: "CET Lusófona",
        log1_title: "A Origem", log1_text: "Início em Mafra...", log2_title: "A Crise", log2_text: "Desafios financeiros...",
        log3_title: "O Ponto de Viragem", log3_text: "Decisão de mudar...", log4_title: "O Regresso", log4_text: "Universidade Lusófona...",
        log5_title: "A Evolução Cyber", log5_text: "Entrada na Noesis...", footer_text: "Teams ou Email:"
    },
    en: {
        nav_home: "Home", nav_impact: "Impact", nav_expertise: "Expertise", nav_skills: "Skills", nav_tools: "Tools", nav_profile: "Profile", nav_contact: "Contact", nav_certs: "Certs", btn_lang: "PT",
        hero_badge: "CYBERSECURITY ENGINEER", hero_title: "André Graça", hero_subtitle: "Building Resilient Digital Defenses", hero_desc: "Specialized in SecOps, threat intelligence, and security engineering.",
        btn_explore: "Explore Work", btn_contact: "Get In Touch",
        stat_vuln_label: "Vulnerabilities Resolved", stat_malware_label: "Malware Reduction", stat_endpoints_label: "Endpoints Secured", stat_mttr_label: "MTTR Improvement",
        expert_tag: "CORE COMPETENCIES", expert_title: "Security Expertise", expert_desc: "Comprehensive cybersecurity capabilities.",
        skills_badge: "TECHNICAL EXPERTISE", skills_title: "Skills & Capabilities", skills_desc: "Detailed technical breakdown.",
        tools_tag: "ARSENAL", tools_title: "Security Stack",
        card_secops_title: "Security Operations", card_secops_desc: "Leading L1 teams and optimizing detection.",
        card_eng_title: "Engineering & Automation", card_eng_desc: "Architecting SOAR playbooks.",
        card_intel_title: "Threat Intelligence", card_intel_desc: "Strategic gathering to anticipate TTPs.",
        card_vuln_title: "Vulnerability Management", card_vuln_desc: "Proactive program using Tenable.io.",
        card_cloud_title: "Cloud & Endpoint Security", card_cloud_desc: "Onboarding 2000+ endpoints.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Technical audits for PCI DSS & GDPR.",
        c1_title: "Defense (SecOps)", c1_desc: "Leading L1 teams.", c2_title: "Engineering", c2_desc: "Architecting SOAR.",
        c3_title: "Security Assessment", c3_desc: "OWASP & Red Team.", c4_title: "Vulnerability Management", c4_desc: "Tenable.io program.",
        c5_title: "Network Security", c5_desc: "Darktrace & Palo Alto.", c6_title: "Cloud Security", c6_desc: "Defender & Intune.",
        c7_title: "Compliance", c7_desc: "PCI DSS/NIS2 audits.", c8_title: "Software", c8_desc: "ArcSight, Cortex, Sentinel.",
        c9_title: "Programming", c9_desc: "Python & Automation.", c10_title: "IAM", c10_desc: "Microsoft Identity.",
        c11_title: "Reporting", c11_desc: "Blue Team reporting.", c12_title: "Asset Management", c12_desc: "Landsweeper & Tenable.",
        c13_title: "Threat Intelligence", c13_desc: "Anticipating TTPs.", c14_title: "Threat Hunting", c14_desc: "Proactive investigation.",
        c15_title: "Digital Forensics", c15_desc: "Root cause analysis.",
        profile_tag: "PROFILE", edu_title: "Education", edu_1: "Post-Grad ISTEC", edu_2: "BSc Lusófona", edu_3: "CET Lusófona",
        log1_title: "The Origin", log1_text: "My journey began...", log2_title: "Crisis & Detour", log2_text: "Financial challenges...",
        log3_title: "The Turning Point", log3_text: "Decision to change...", log4_title: "The Return", log4_text: "Lusófona University...",
        log5_title: "The Cyber Pivot", log5_text: "Joining Noesis...", footer_text: "Teams or Email:"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    const btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = translations[lang].btn_lang;
}

const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
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
    
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'pt' : 'en';
            changeLanguage(newLang);
        });
    }

    document.querySelectorAll('.reveal-entry, .fade-up').forEach(el => scrollObserver.observe(el));

    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // LÓGICA DO MENU MOBILE
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    if (hamburger && navLinks) {
        function closeMenu() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            }
        }

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        if (logo) {
            logo.addEventListener('click', closeMenu);
        }
    }
});