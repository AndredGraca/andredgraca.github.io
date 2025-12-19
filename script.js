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

        // Profile
        edu_title: "Formação Académica",
        edu_1: "Pós-Graduação: Cloud e Virtualização (ISTEC)",
        edu_2: "Licenciatura: Eng. Informática (Lusófona)",
        edu_3: "CET: Tecnologia de Sistemas (Lusófona)",
        log1_title: "A Origem", log1_text: "O início na Escola José Saramago e a paixão pelo código.",
        log2_title: "Crise e Desvio", log2_text: "Os desafios da crise de 2011 e o trabalho em fábricas.",
        log3_title: "O Ponto de Viragem", log3_text: "A decisão de mudar de vida após a fábrica de queijo.",
        log4_title: "O Regresso", log4_text: "O projeto 'Gaming Out of Depression' e o regresso à universidade.",
        log5_title: "A Evolução Cyber", log5_text: "A transição de OutSystems para Cibersegurança na Noesis.",

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

        edu_title: "Education",
        edu_1: "Post-Grad: Cloud & Virtualization (ISTEC)",
        edu_2: "BSc: Computer Engineering (Lusófona)",
        edu_3: "CET: Systems Technology (Lusófona)",
        log1_title: "The Origin", log1_text: "Starting at Escola José Saramago and finding my passion for code.",
        log2_title: "Crisis & Detour", log2_text: "Facing the 2011 crisis and working in factories.",
        log3_title: "The Turning Point", log3_text: "The decision to change my life after the cheese factory incident.",
        log4_title: "The Return", log4_text: "The 'Gaming Out of Depression' project and returning to university.",
        log5_title: "The Cyber Pivot", log5_text: "Transitioning from OutSystems to Cybersecurity at Noesis.",

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