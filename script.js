const translations = {
    pt: {
        nav_home: "Início", nav_profile: "Perfil", nav_skills: "Competências", nav_tools: "Ferramentas", btn_lang: "EN",
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA", hero_title: "ANDRÉ GRAÇA", hero_desc: "Portfólio e Biografia",
        
        // Titles (Used in Home & Tools)
        c1_title: "Defense (SecOps)", c2_title: "Engineering", c3_title: "Security Assessment",
        c4_title: "Vulnerability Management", c5_title: "Network Security", c6_title: "Cloud Security",
        c7_title: "Compliance", c8_title: "Software", c9_title: "Programming", c10_title: "IAM",
        c11_title: "Reporting", c12_title: "Asset Management", c13_title: "Threat Intelligence (CTI)",
        c14_title: "Threat Hunting", c15_title: "Digital Forensics",
        
        tools_title: "Arsenal Tecnológico",

        // Descriptions (For Home Page)
        c1_desc: "Monitorização e resposta a incidentes (SIEM/XDR).",
        c2_desc: "Automação SOAR e scripts de segurança.",
        c3_desc: "Avaliações OWASP e DAST/SAST.",
        c4_desc: "Remediação proativa de vulnerabilidades.",
        c5_desc: "Gestão de Firewalls e NDR.",
        c6_desc: "Segurança em Microsoft e Entra ID.",
        c7_desc: "Auditorias técnicas ISO27001 e NIST.",
        c8_desc: "Integração e gestão de ferramentas de segurança.",
        c9_desc: "Desenvolvimento de scripts Python/Bash.",
        c10_desc: "Gestão de acessos privilegiados.",
        c11_desc: "Relatórios técnicos e executivos.",
        c12_desc: "Inventário e visibilidade de ativos.",
        c13_desc: "Recolha e análise de inteligência de ameaças.",
        c14_desc: "Investigação proativa de ameaças.",
        c15_desc: "Análise forense e causa raiz.",

        // PROFILE (Restored Extended Version)
        edu_title: "Formação Académica",
        edu_1: "Pós-Graduação: Cloud e Virtualização (ISTEC)",
        edu_2: "Licenciatura: Eng. Informática (Lusófona)",
        edu_3: "CET: Tecnologia de Sistemas (Lusófona)",

        log1_title: "A Origem",
        log1_text: "A minha jornada começou na Escola José Saramago em Mafra. Foi durante o Curso Profissional de Gestão e Programação de Sistemas Informáticos que descobri a minha verdadeira vocação tecnológica. Apesar das dificuldades financeiras iniciais, sabia que queria ser um profissional 'self-made' na área tecnológica e comecei a juntar dinheiro para investir na minha formação superior.",
        
        log2_title: "A Crise e o Desvio",
        log2_text: "A crise financeira de 2011 atingiu Portugal com brutalidade. Fui forçado a interromper os estudos e a trabalhar em fábricas e escritórios para sobreviver. Em 2012, tentei um novo rumo com um curso de CNC no IEFP, mas sentia um vazio profissional. Não era o meu chamamento, mas precisava de continuar a lutar.",
        
        log3_title: "O Ponto de Viragem",
        log3_text: "O ponto de rutura aconteceu numa fábrica de queijo. As condições eram desumanas e, numa única semana, escapei da morte em três acidentes de trabalho distintos. Naquele momento, decidi: 'Esta vida não é para mim'. Juntei cada cêntimo que tinha poupado, demiti-me e investi tudo no meu regresso à universidade.",
        
        log4_title: "O Regresso",
        log4_text: "Regressei à Universidade Lusófona com determinação total (CET e Licenciatura). O meu projeto final, 'Gaming Out of Depression', foi proposto por uma psicóloga: desenvolvi um sistema complexo de Backend e Frontend (estilo Discord) com comunicação de voz e vídeo em tempo real, desenhado especificamente para ajudar pessoas isoladas a socializar.",

        log5_title: "A Evolução Cyber",
        log5_text: "Durante a pós-graduação no ISTEC, ingressei na Noesis. Iniciei em OutSystems, mas quando surgiu o desafio de migrar para a Cibersegurança, aceitei sem hesitar. Através de formação contínua, moldei-me no engenheiro sólido que sou hoje.",

        footer_contact: "Teams ou Email: andre.d.graca@outlook.com"
    },
    en: {
        nav_home: "Home", nav_profile: "Profile", nav_skills: "Skills", nav_tools: "Tools", btn_lang: "PT",
        hero_badge: "CYBERSECURITY ENGINEER", hero_title: "ANDRÉ GRAÇA", hero_desc: "Portfolio & Bio",
        
        tools_title: "Tech Arsenal",

        c1_title: "Defense (SecOps)", c2_title: "Engineering", c3_title: "Security Assessment",
        c4_title: "Vulnerability Management", c5_title: "Network Security", c6_title: "Cloud Security",
        c7_title: "Compliance", c8_title: "Software", c9_title: "Programming", c10_title: "IAM",
        c11_title: "Reporting", c12_title: "Asset Management", c13_title: "Threat Intelligence (CTI)",
        c14_title: "Threat Hunting", c15_title: "Digital Forensics",

        c1_desc: "SIEM/XDR monitoring and incident response.",
        c2_desc: "SOAR automation and security scripting.",
        c3_desc: "OWASP assessments and DAST/SAST.",
        c4_desc: "Proactive vulnerability remediation.",
        c5_desc: "Firewall and NDR management.",
        c6_desc: "Microsoft Security and Entra ID.",
        c7_desc: "ISO27001 and NIST technical audits.",
        c8_desc: "Security tool integration and management.",
        c9_desc: "Python/Bash script development.",
        c10_desc: "Privileged access management.",
        c11_desc: "Technical and executive reporting.",
        c12_desc: "Asset inventory and visibility.",
        c13_desc: "Threat intelligence gathering and analysis.",
        c14_desc: "Proactive threat hunting.",
        c15_desc: "Forensic analysis and root cause.",

        // Restored Extended Version
        edu_title: "Education",
        edu_1: "Post-Grad: Cloud & Virtualization (ISTEC)",
        edu_2: "BSc: Computer Engineering (Lusófona)",
        edu_3: "CET: Systems Technology (Lusófona)",

        log1_title: "The Origin",
        log1_text: "My journey began at Escola José Saramago in Mafra, where I discovered my true vocation during a Professional Course in IT Systems. Despite early financial hurdles, I was determined to become a self-made professional in the tech world and started saving money to fund my higher education.",
        
        log2_title: "Crisis & Detour",
        log2_text: "The 2011 financial crisis hit Portugal hard. I was forced to pause my studies and take on various factory jobs just to survive. In 2012, I tried a CNC course at IEFP, but I felt professionally unfulfilled. I knew deep down this wasn't my calling, but I had to keep fighting.",
        
        log3_title: "The Turning Point",
        log3_text: "The breaking point was at a cheese factory. After nearly three serious accidents in one week and facing inhumane conditions, I decided: 'This life is not for me.' I scraped together every single Euro I had saved, quit, and invested everything into returning to college.",
        
        log4_title: "The Return",
        log4_text: "I returned to Lusófona University with total focus. My final project, 'Gaming Out of Depression' (proposed by a psychologist), was a complex Full-Stack system (Discord-style) featuring real-time voice and video communication, specifically designed to help isolated individuals socialize.",

        log5_title: "The Cyber Pivot",
        log5_text: "During my Post-Grad at ISTEC, I joined Noesis. I started with OutSystems, but when the challenge to pivot to Cybersecurity arose, I took it without hesitation. Through continuous training, I molded myself into the solid engineer I am today.",

        footer_contact: "Teams or Email: andre.d.graca@outlook.com"
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
    
    // Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.classList.contains('fade-up')) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    });
    document.querySelectorAll('.reveal-entry, .fade-up').forEach(el => observer.observe(el));
});