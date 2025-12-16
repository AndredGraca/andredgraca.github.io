const translations = {
    pt: {
        // Navigation
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        nav_certs: "Certificações",
        btn_lang: "EN",
        
        // Identity
        hero_title: "André Graça",
        hero_role: "Engenheiro de Cibersegurança",
        hero_sub: "Defesa | Ataque | Automação | Engenharia",

        // Categories (Home/Skills Pages)
        cat_secops_title: "Operações de Segurança (SecOps)",
        cat_secops_desc: "Especialista em deteção de ameaças e resposta a incidentes. Redução do MTTR e otimização de SIEM/XDR.",
        cat_eng_title: "Engenharia e Automação",
        cat_eng_desc: "Desenvolvimento de Playbooks SOAR e scripts Python. Integração de API (Gitlab, Jira).",
        cat_vuln_title: "Gestão de Vulnerabilidades",
        cat_vuln_desc: "Liderança de programas proativos com Tenable.io. Remediação de +500 vulnerabilidades.",
        cat_net_title: "Segurança de Rede",
        cat_net_desc: "Defesa de infraestrutura com Darktrace e Palo Alto. Monitorização de tráfego (NDR).",
        cat_grc_title: "GRC e Conformidade",
        cat_grc_desc: "Adesão a frameworks NIST, ISO27001 e GDPR.",
        cat_cloud_title: "Segurança Cloud",
        cat_cloud_desc: "Políticas de segurança no Microsoft Defender e Intune.",

        // --- PROFILE STORY (LOGS) ---
        bio_title: "Sobre Mim",
        bio_subtitle: "Uma jornada de resiliência: Do chão de fábrica à Engenharia de Cibersegurança.",
        
        // Log 1
        story_start_title: "O Início & A Paixão",
        story_start_text: "A minha jornada começou na Escola José Saramago em Mafra, no curso profissional de Técnico de Gestão e Programação de Sistemas Informáticos. Foi aqui que descobri a minha paixão pela tecnologia.",
        
        // Log 2
        story_struggle_title: "Resiliência na Crise",
        story_struggle_text: "Com a crise de 2011, fui forçado a trabalhar em fábricas e fiz um curso de CNC no IEFP. O ponto de viragem foi numa fábrica de queijo: após quase perder a vida três vezes numa semana e ver o tratamento precário dos trabalhadores, decidi que aquela vida não era para mim. Juntei cada Euro que tinha e voltei a estudar.",
        
        // Log 3
        story_return_title: "O Regresso à Engenharia",
        story_return_text: "Completei o CET e a Licenciatura na Universidade Lusófona. No projeto final, criei o 'Gaming Out of Depression' (proposto por uma psicóloga): um sistema estilo Discord com vídeo/voz em tempo real para ajudar pessoas isoladas a socializar.",
        
        // Log 4
        story_current_title: "A Evolução Cyber",
        story_current_text: "Durante a pós-graduação no ISTEC, entrei na Noesis. Comecei em OutSystems, mas aceitei o desafio de migrar para Cibersegurança. Hoje sou um profissional sólido, focado em manter-me à frente das ameaças emergentes.",

        // Education Sidebar
        edu_title: "Formação Académica",
        edu_1: "Pós-Graduação: Cloud e Virtualização (ISTEC)",
        edu_2: "Licenciatura: Eng. Informática (Lusófona)",
        edu_3: "CET: Tecnologia de Sistemas (Lusófona)",

        // Footer
        footer_contact: "Entre em contacto via Email."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        nav_certs: "Certs",
        btn_lang: "PT",
        
        // Identity
        hero_title: "André Graça",
        hero_role: "Cybersecurity Engineer",
        hero_sub: "Defense | Offense | Automation | Engineering",

        // Categories
        cat_secops_title: "Security Operations (SecOps)",
        cat_secops_desc: "Specialist in threat detection and incident response. Reduced MTTR and optimized SIEM/XDR.",
        cat_eng_title: "Engineering & Automation",
        cat_eng_desc: "Development of SOAR Playbooks and Python scripts. API integration (Gitlab, Jira).",
        cat_vuln_title: "Vulnerability Management",
        cat_vuln_desc: "Leading proactive programs using Tenable.io. Remediation of 500+ vulnerabilities.",
        cat_net_title: "Network Security",
        cat_net_desc: "Infrastructure defense with Darktrace and Palo Alto. Traffic monitoring (NDR).",
        cat_grc_title: "GRC & Compliance",
        cat_grc_desc: "Adherence to NIST, ISO27001, and GDPR frameworks.",
        cat_cloud_title: "Cloud Security",
        cat_cloud_desc: "Security policies in Microsoft Defender and Intune.",

        // --- PROFILE STORY (LOGS) ---
        bio_title: "About Me",
        bio_subtitle: "A journey of resilience: From the factory floor to Cybersecurity Engineering.",

        // Log 1
        story_start_title: "The Beginning",
        story_start_text: "My journey started at Escola José Saramago in Mafra, taking a professional course in IT Systems. This is where I found my true passion for technology.",

        // Log 2
        story_struggle_title: "Resilience in Crisis",
        story_struggle_text: "Due to the 2011 crisis, I worked blue-collar jobs and took a CNC course. The turning point was at a cheese factory: after nearly losing my life three times in a week, I decided that life wasn't for me. I saved every single Euro I had and went back to college.",

        // Log 3
        story_return_title: "Return to Engineering",
        story_return_text: "I completed my BSc at Lusófona University. For my final project, I built 'Gaming Out of Depression' (proposed by a psychologist): a real-time voice/video chat system (Discord-style) designed to help isolated people socialize.",

        // Log 4
        story_current_title: "The Cyber Pivot",
        story_current_text: "During my Post-Grad at ISTEC, I joined Noesis. I started with OutSystems but accepted a challenge to pivot to Cybersecurity. I am now a solid professional, always staying ahead of the curve.",

        // Education Sidebar
        edu_title: "Education",
        edu_1: "Post-Grad: Cloud & Virtualization (ISTEC)",
        edu_2: "BSc: Computer Engineering (Lusófona)",
        edu_3: "CET: Systems Technology (Lusófona)",

        // Footer
        footer_contact: "Get in touch via Email."
    }
};

// --- LANGUAGE LOGIC ---
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// --- SCROLL ANIMATION LOGIC ---
const observerOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Language
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
    
    // 2. Setup Toggle Button
    const btn = document.getElementById('lang-toggle');
    if(btn) {
        btn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'pt' : 'en';
            changeLanguage(newLang);
        });
    }

    // 3. Setup Animations
    const hiddenElements = document.querySelectorAll('.reveal-entry');
    hiddenElements.forEach((el) => scrollObserver.observe(el));
});
