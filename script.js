const translations = {
    pt: {
        // Navigation
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
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
        
        // Log 1: Origins
        log1_title: "A Origem",
        log1_text: "Tudo começou na Escola José Saramago em Mafra. Foi no curso profissional de Gestão e Programação de Sistemas Informáticos que toquei na primeira linha de código e descobri a minha paixão. Sabia que era este o meu caminho.",
        
        // Log 2: The Hardship
        log2_title: "A Crise e o Desvio",
        log2_text: "A crise financeira de 2011 atingiu Portugal com força. Fui obrigado a pausar os estudos e trabalhar em fábricas e escritórios para sobreviver. Em 2012, fiz um curso de CNC no IEFP, mas sentia que não estava onde pertencia.",
        
        // Log 3: The Catalyst (Cheese Factory)
        log3_title: "O Ponto de Viragem",
        log3_text: "O momento decisivo aconteceu numa fábrica de queijo. As condições eram desumanas e, numa única semana, quase perdi a vida três vezes em acidentes de trabalho. Percebi que aquela vida não era para mim. Juntei cada Euro que tinha poupado, demiti-me e decidi voltar a estudar.",
        
        // Log 4: The Return & The Project
        log4_title: "O Regresso: Gaming Out of Depression",
        log4_text: "Voltei à Universidade Lusófona (CET e Licenciatura). O meu projeto final foi o 'Gaming Out of Depression', proposto por uma psicóloga: criei uma plataforma completa (estilo Discord) com chat de voz e vídeo em tempo real para ajudar pessoas isoladas a socializar. Finalizei o curso em 2019.",

        // Log 5: The Pivot
        log5_title: "A Evolução na Noesis",
        log5_text: "Durante a pós-graduação no ISTEC, entrei na Noesis. Comecei a trabalhar com OutSystems, mas quando surgiu o desafio de mudar para Cibersegurança, aceitei sem hesitar. Moldei-me através de formação intensiva e tornei-me no engenheiro sólido que sou hoje.",

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
        log1_title: "The Origin",
        log1_text: "It started at Escola José Saramago in Mafra. During my professional course in IT Systems Management & Programming, I wrote my first lines of code and found my passion. I knew this was my path.",

        // Log 2
        log2_title: "Crisis & Detour",
        log2_text: "The 2011 financial crisis hit Portugal hard. I was forced to pause my studies and work in factories to survive. In 2012, I took a CNC course at IEFP, but I knew deep down I didn't belong there.",

        // Log 3
        log3_title: "The Turning Point",
        log3_text: "The deciding moment happened at a cheese factory. Conditions were inhumane, and in a single week, I nearly lost my life three times in work accidents. I realized that life wasn't for me. I scraped together every single Euro I had saved, quit, and went back to school.",

        // Log 4
        log4_title: "The Return: Gaming Out of Depression",
        log4_text: "I returned to Lusófona University. My final project was 'Gaming Out of Depression', proposed by a psychologist: I built a full-stack platform (Discord-style) with real-time video/voice chat to help isolated people socialize. I graduated in 2019.",

        // Log 5
        log5_title: "The Pivot at Noesis",
        log5_text: "During my Post-Grad at ISTEC, I joined Noesis. I started with OutSystems, but when the challenge to pivot to Cybersecurity appeared, I took it. Through intense training and experience, I molded myself into the solid engineer I am today.",

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
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

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
    
    const btn = document.getElementById('lang-toggle');
    if(btn) {
        btn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'pt' : 'en';
            changeLanguage(newLang);
        });
    }

    const hiddenElements = document.querySelectorAll('.reveal-entry');
    hiddenElements.forEach((el) => scrollObserver.observe(el));
});