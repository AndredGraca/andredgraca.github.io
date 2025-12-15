const translations = {
    pt: {
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        btn_lang: "EN",
        
        hero_title: "André Graça",
        hero_role: "Engenheiro de Cibersegurança",
        hero_sub: "Defesa | Ataque | Automação | Engenharia",
        
        // Category 1: SecOps
        cat_secops_title: "Operações de Segurança (SecOps)",
        cat_secops_desc: "Especialista em detecção de ameaças e resposta a incidentes. Experiência em redução de MTTR e otimização de SIEM/XDR para detectar ameaças sofisticadas.",
        
        // Category 2: Engineering
        cat_eng_title: "Engenharia e Automação",
        cat_eng_desc: "Desenvolvimento de Playbooks SOAR e scripting em Python. Foco em reduzir o trabalho manual e integrar ferramentas via API (Gitlab, Jira).",
        
        // Category 3: GRC
        cat_grc_title: "GRC e Conformidade",
        cat_grc_desc: "Adesão a frameworks NIST, ISO27001 e GDPR. Criação de relatórios de auditoria técnica e evidências de conformidade.",
        
        // Category 4: Cloud
        cat_cloud_title: "Segurança Cloud e Endpoint",
        cat_cloud_desc: "Implementação de políticas de segurança no Microsoft Defender e Intune. Proteção de ambientes híbridos e onboarding de ativos.",

        // Category 5: Vulnerability Management (NEW)
        cat_vuln_title: "Gestão de Vulnerabilidades",
        cat_vuln_desc: "Liderança de programas proativos usando Tenable.io e Landsweeper. Identificação e remediação de mais de 500 vulnerabilidades críticas.",

        // Category 6: Network Security (NEW)
        cat_net_title: "Segurança de Rede",
        cat_net_desc: "Defesa de infraestrutura com Darktrace e Palo Alto. Monitorização de tráfego (NDR) e integração de soluções de segurança na rede corporativa.",

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

        // Category 1: SecOps
        cat_secops_title: "Security Operations (SecOps)",
        cat_secops_desc: "Specialist in threat detection and incident response. Proven track record in reducing MTTR and optimizing SIEM/XDR for sophisticated threats.",

        // Category 2: Engineering
        cat_eng_title: "Engineering & Automation",
        cat_eng_desc: "Development of SOAR Playbooks and Python scripting. Focus on reducing manual toil and API tool integration (Gitlab, Jira).",

        // Category 3: GRC
        cat_grc_title: "GRC & Compliance",
        cat_grc_desc: "Adherence to NIST, ISO27001, and GDPR frameworks. Creation of technical audit reports and compliance evidence.",

        // Category 4: Cloud
        cat_cloud_title: "Cloud & Endpoint Security",
        cat_cloud_desc: "Implementation of security policies in Microsoft Defender and Intune. Securing hybrid environments and asset onboarding.",

        // Category 5: Vulnerability Management (NEW)
        cat_vuln_title: "Vulnerability Management",
        cat_vuln_desc: "Leading proactive programs using Tenable.io and Landsweeper. Identification and remediation of over 500 critical vulnerabilities.",

        // Category 6: Network Security (NEW)
        cat_net_title: "Network Security",
        cat_net_desc: "Infrastructure defense with Darktrace and Palo Alto. Traffic monitoring (NDR) and integration of security solutions into corporate networks.",

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
