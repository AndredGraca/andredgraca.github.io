const translations = {
    pt: {
        nav_home: "Início", nav_impact: "Impacto", nav_expertise: "Especialidade", nav_skills: "Competências", nav_tools: "Ferramentas", nav_profile: "Perfil", nav_contact: "Contato", nav_certs: "Certificações", btn_lang: "EN",
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA", hero_title: "André Graça", hero_subtitle: "Construindo Defesas Digitais Resilientes", hero_desc: "Especializado em SecOps, inteligência de ameaças e engenharia de segurança. Protegendo organizações através de estratégias de defesa proativas e soluções de segurança de ponta.",
        btn_explore: "Explorar Trabalho", btn_contact: "Entrar em Contato",
        stat_vuln_label: "Vulnerabilidades Resolvidas", stat_malware_label: "Redução de Malware", stat_endpoints_label: "Endpoints Seguros", stat_mttr_label: "Melhoria no MTTR",
        expert_tag: "COMPETÊNCIAS PRINCIPAIS", expert_title: "Expertise em Segurança", expert_desc: "Capacidades abrangentes de cibersegurança em defesa, engenharia e inteligência de ameaças.",
        skills_badge: "EXPERTISE TÉCNICA", skills_title: "Competências e Capacidades", skills_desc: "Detalhamento técnico das áreas de atuação e impacto profissional.",
        tools_tag: "ARSENAL", tools_title: "Stack de Segurança",
        
        // Cards da Home
        card_secops_title: "Operações de Segurança", card_secops_desc: "Liderança de equipas L1 e otimização de deteção em SIEM/XDR (ArcSight, Sentinel), reduzindo falsos positivos em 30%.",
        card_eng_title: "Engenharia & Automação", card_eng_desc: "Arquitetura de playbooks SOAR (Thycotic) e integrações API, poupando +15 horas de trabalho manual semanal.",
        card_intel_title: "Inteligência de Ameaças", card_intel_desc: "Recolha estratégica para antecipar TTPs e fortalecer defesas proativamente contra ameaças globais.",
        card_vuln_title: "Gestão de Vulnerabilidades", card_vuln_desc: "Programa proativo com Tenable.io e Landsweeper, remediando +500 vulnerabilidades críticas.",
        card_cloud_title: "Segurança Cloud & Endpoint", card_cloud_desc: "Onboarding de 2000+ endpoints (Defender/Intune) e redução de 40% em incidentes de malware.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Auditorias e evidências técnicas para conformidade com normas críticas como PCI DSS, NIS2 e GDPR.",
        
        // Titles for Tools/Skills Cards
        c1_title: "Defesa (SecOps)", c1_desc: "Liderança de equipas L1.", 
        c2_title: "Engenharia de Segurança", c2_desc: "Arquitetura SOAR.",
        c3_title: "Avaliação de Segurança", c3_desc: "Avaliações OWASP e testes Red Team.", 
        c4_title: "Gestão de Vulnerabilidades", c4_desc: "Programa com Tenable.io.",
        c5_title: "Segurança de Rede", c5_desc: "Darktrace e Palo Alto.", 
        c6_title: "Segurança na Nuvem", c6_desc: "Defender e Intune.",
        c7_title: "Compliance", c7_desc: "Auditorias PCI DSS/NIS2.", 
        c8_title: "Software", c8_desc: "ArcSight, Cortex, Sentinel.", 
        c_software_title: "Software", // NEW
        c9_title: "Programação", c9_desc: "Python e automação.", 
        c10_title: "IAM", c10_desc: "Identidade Microsoft.",
        c11_title: "Relatórios", c11_desc: "Relatórios Blue Team.", 
        c12_title: "Gestão de Ativos", c12_desc: "Landsweeper e Tenable.",
        c13_title: "Inteligência de Ameaças (CTI)", c13_desc: "Antecipar TTPs.", 
        c14_title: "Threat Hunting", c14_desc: "Investigação proativa.",
        c15_title: "Forense Digital", c15_desc: "Análise forense e causa raiz.",
        c_app_title: "Aplicações", // NEW
        c_frameworks_title: "Frameworks", // NEW
        c_email_title: "Segurança de Email", // NEW

        profile_tag: "PERFIL", edu_title: "Formação Académica",
        edu_1: "Pós-Graduação: Cloud e Virtualização (ISTEC)",
        edu_2: "Licenciatura: Eng. Informática (Lusófona)",
        edu_3: "CET: Tecnologia de Sistemas (Lusófona)",
        log1_title: "A Origem", log1_text: "A minha jornada começou na Escola José Saramago em Mafra. Foi durante o Curso Profissional de Gestão e Programação de Sistemas Informáticos que descobri a minha verdadeira vocação tecnológica. Apesar das dificuldades financeiras iniciais, sabia que queria ser um profissional 'self-made' na área tecnológica e comecei a juntar dinheiro para investir na minha formação superior.",
        log2_title: "A Crise e o Desvio", log2_text: "A crise financeira de 2011 atingiu Portugal com brutalidade. Fui forçado a interromper os estudos e a trabalhar em fábricas e escritórios para sobreviver. Em 2012, tentei um novo rumo com um curso de CNC no IEFP, mas sentia um vazio profissional. Não era o meu chamamento, mas precisava de continuar a lutar.",
        log3_title: "O Ponto de Viragem", log3_text: "O ponto de rutura aconteceu numa fábrica de queijo. As condições eram desumanas e, numa única semana, escapei da morte em três acidentes de trabalho distintos. Naquele momento, decidi: 'Esta vida não é para mim'. Juntei cada cêntimo que tinha poupado, demiti-me e investi tudo no meu regresso à universidade.",
        log4_title: "O Regresso", log4_text: "Regressei à Universidade Lusófona com determinação total. O meu projeto final, 'Gaming Out of Depression', foi proposto por uma psicóloga: desenvolvi um sistema complexo de Backend e Frontend (estilo Discord) com comunicação de voz e vídeo em tempo real, desenhado especificamente para ajudar pessoas isoladas a socializar.",
        log5_title: "A Evolução Cyber", log5_text: "Durante a pós-graduação no ISTEC, ingressei na Noesis. Iniciei em OutSystems, mas quando surgiu o desafio de migrar para a Cibersegurança, aceitei sem hesitar. Através de formação contínua, moldei-me no engenheiro sólido que sou hoje.",
        footer_text: "Teams ou Email:"
    },
    en: {
        nav_home: "Home", nav_impact: "Impact", nav_expertise: "Expertise", nav_skills: "Skills", nav_tools: "Tools", nav_profile: "Profile", nav_contact: "Contact", nav_certs: "Certs", btn_lang: "PT",
        hero_badge: "CYBERSECURITY ENGINEER", hero_title: "André Graça", hero_subtitle: "Building Resilient Digital Defenses", hero_desc: "Specialized in SecOps, threat intelligence, and security engineering. Protecting organizations through proactive defense strategies and cutting-edge security solutions.",
        btn_explore: "Explore Work", btn_contact: "Get In Touch",
        stat_vuln_label: "Vulnerabilities Resolved", stat_malware_label: "Malware Reduction", stat_endpoints_label: "Endpoints Secured", stat_mttr_label: "MTTR Improvement",
        expert_tag: "CORE COMPETENCIES", expert_title: "Security Expertise", expert_desc: "Comprehensive cybersecurity capabilities across defense, engineering, and threat intelligence.",
        skills_badge: "TECHNICAL EXPERTISE", skills_title: "Skills & Capabilities", skills_desc: "Detailed technical breakdown of operational areas and professional impact.",
        tools_tag: "ARSENAL", tools_title: "Security Stack",
        
        // Home Cards
        card_secops_title: "Security Operations", card_secops_desc: "Leading L1 teams and optimizing detection on SIEM/XDR platforms (ArcSight, Sentinel), reducing false positives by 30%.",
        card_eng_title: "Engineering & Automation", card_eng_desc: "Architecting SOAR playbooks (Thycotic) and API integrations, saving 15+ hours of manual work weekly.",
        card_intel_title: "Threat Intelligence", card_intel_desc: "Strategic gathering to anticipate TTPs and proactively strengthen defenses against global threats.",
        card_vuln_title: "Vulnerability Management", card_vuln_desc: "Proactive program using Tenable.io and Landsweeper, remediating 500+ critical vulnerabilities.",
        card_cloud_title: "Cloud & Endpoint Security", card_cloud_desc: "Onboarding 2000+ endpoints (Defender/Intune) and reducing malware incidents by 40%.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Technical audits and evidence for compliance with critical frameworks like PCI DSS, NIS2, and GDPR.",
        
        // Titles for Tools/Skills Cards
        c1_title: "Defense (SecOps)", c1_desc: "Leading L1 teams.", 
        c2_title: "Security Engineering", c2_desc: "Architecting SOAR.",
        c3_title: "Security Assessment", c3_desc: "OWASP & Red Team.", 
        c4_title: "Vulnerability Management", c4_desc: "Tenable.io program.",
        c5_title: "Network Security", c5_desc: "Darktrace & Palo Alto.", 
        c6_title: "Cloud Security", c6_desc: "Defender & Intune.",
        c7_title: "Compliance", c7_desc: "PCI DSS/NIS2 audits.", 
        c8_title: "Software", c8_desc: "ArcSight, Cortex, Sentinel.", 
        c_software_title: "Software", // NEW
        c9_title: "Programming", c9_desc: "Python & Automation.", 
        c10_title: "IAM", c10_desc: "Microsoft Identity.",
        c11_title: "Reporting", c11_desc: "Blue Team reporting.", 
        c12_title: "Asset Management", c12_desc: "Landsweeper & Tenable.",
        c13_title: "Threat Intelligence (CTI)", c13_desc: "Anticipating TTPs.", 
        c14_title: "Threat Hunting", c14_desc: "Proactive investigation.",
        c15_title: "Digital Forensics", c15_desc: "Root cause analysis.",
        c_app_title: "Application", // NEW
        c_frameworks_title: "Frameworks", // NEW
        c_email_title: "Email Security", // NEW

        profile_tag: "PROFILE", edu_title: "Education",
        edu_1: "Post-Grad: Cloud & Virtualization (ISTEC)",
        edu_2: "BSc: Computer Engineering (Lusófona)",
        edu_3: "CET: Systems Technology (Lusófona)",
        log1_title: "The Origin", log1_text: "My journey began at Escola José Saramago in Mafra, where I discovered my true vocation during a Professional Course in IT Systems. Despite early financial hurdles, I was determined to become a self-made professional in the tech world and started saving money to fund my higher education.",
        log2_title: "Crisis & Detour", log2_text: "The 2011 financial crisis hit Portugal hard. I was forced to pause my studies and take on various factory jobs just to survive. In 2012, I tried a CNC course at IEFP, but I felt professionally unfulfilled. I knew deep down this wasn't my calling, but I had to keep fighting.",
        log3_title: "The Turning Point", log3_text: "The breaking point was at a cheese factory. After nearly three serious accidents in one week and facing inhumane conditions, I decided: 'This life is not for me.' I scraped together every single Euro I had saved, quit, and invested everything into returning to college.",
        log4_title: "The Return", log4_text: "I returned to Lusófona University with total focus. My final project, 'Gaming Out of Depression', was a complex Full-Stack system (Discord-style) featuring real-time voice and video communication, specifically designed to help isolated individuals socialize.",
        log5_title: "The Cyber Pivot", log5_text: "During my Post-Grad at ISTEC, I joined Noesis. I started with OutSystems, but when the challenge to pivot to Cybersecurity arose, I took it without hesitation. Through continuous training, I molded myself into the solid engineer I am today.",
        footer_text: "Teams or Email:"
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

    // --- LÓGICA DO MENU MOBILE ---
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