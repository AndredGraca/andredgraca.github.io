const translations = {
    pt: {
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        hero_title: "André Graça",
        hero_role: "Engenheiro de Cibersegurança",
        hero_sub: "Defesa | Ataque | Automação | Engenharia",
        
        // Category 1: SecOps [cite: 16, 32, 40]
        cat_secops_title: "Operações de Segurança (SecOps)",
        cat_secops_desc: "Especialista em detecção de ameaças e resposta a incidentes. Experiência em redução de MTTR e otimização de SIEM/XDR para detectar ameaças sofisticadas.",
        
        // Category 2: Engineering [cite: 19, 34]
        cat_eng_title: "Engenharia e Automação",
        cat_eng_desc: "Desenvolvimento de Playbooks SOAR e scripting em Python. Foco em reduzir o trabalho manual e integrar ferramentas via API (Gitlab, Jira).",
        
        // Category 3: GRC [cite: 17, 33, 38]
        cat_grc_title: "GRC e Gestão de Risco",
        cat_grc_desc: "Gestão de vulnerabilidades e conformidade. Experiência com frameworks NIST, ISO27001, PCI DSS e relatórios de auditoria técnica.",
        
        // Category 4: Cloud [cite: 18, 35, 46]
        cat_cloud_title: "Segurança Cloud e Endpoint",
        cat_cloud_desc: "Implementação de políticas de segurança no Microsoft Defender e Intune. Proteção de ambientes híbridos e onboarding de ativos.",

        contact_text: "Entre em contacto via Email ou LinkedIn."
    },
    en: {
        nav_profile: "Profile",
        nav_skills: "Skills",
        nav_tools: "Tools",
        btn_lang: "PT",
        
        hero_title: "André Graça",
        hero_role: "Cybersecurity Engineer",
        hero_sub: "Defense | Offense | Automation | Engineering",

        // Category 1: SecOps [cite: 16, 32, 40]
        cat_secops_title: "Security Operations (SecOps)",
        cat_secops_desc: "Specialist in threat detection and incident response. Proven track record in reducing MTTR and optimizing SIEM/XDR for sophisticated threats.",

        // Category 2: Engineering [cite: 19, 34]
        cat_eng_title: "Engineering & Automation",
        cat_eng_desc: "Development of SOAR Playbooks and Python scripting. Focus on reducing manual toil and API tool integration (Gitlab, Jira).",

        // Category 3: GRC [cite: 17, 33, 38]
        cat_grc_title: "GRC & Risk Management",
        cat_grc_desc: "Vulnerability management and compliance. Experience with NIST, ISO27001, PCI DSS frameworks and technical audit reporting.",

        // Category 4: Cloud [cite: 18, 35, 46]
        cat_cloud_title: "Cloud & Endpoint Security",
        cat_cloud_desc: "Implementation of security policies in Microsoft Defender and Intune. Securing hybrid environments and asset onboarding.",

        contact_text: "Get in touch via Email or LinkedIn."
    }
};

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

document.getElementById('lang-toggle').addEventListener('click', () => {
    const currentLang = localStorage.getItem('lang') || 'en';
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    changeLanguage(newLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    changeLanguage(savedLang);
});
