const translations = {
    pt: {
        // Navigation
        nav_home: "Início",
        nav_profile: "Perfil",
        nav_skills: "Competências",
        nav_tools: "Ferramentas",
        nav_certs: "Certificações",
        btn_lang: "EN",
        
        // Homepage / Hero
        hero_title: "André Graça",
        hero_role: "Engenheiro de Cibersegurança",
        hero_sub: "Defesa | Ataque | Automação | Engenharia",
        
        // --- 6 Core Categories (Used in Index & Skills) ---
        // 1. SecOps
        cat_secops_title: "Operações de Segurança (SecOps)",
        cat_secops_desc: "Especialista em deteção de ameaças e resposta a incidentes. Redução do MTTR e otimização de SIEM/XDR (ArcSight, Sentinel).",
        // 2. Engineering
        cat_eng_title: "Engenharia e Automação",
        cat_eng_desc: "Desenvolvimento de Playbooks SOAR e scripts Python. Integração de API (Gitlab, Jira) poupando 15h+ semanais.",
        // 3. Vulnerability Mgmt
        cat_vuln_title: "Gestão de Vulnerabilidades",
        cat_vuln_desc: "Liderança de programas proativos com Tenable.io e Landsweeper. Remediação de +500 vulnerabilidades críticas.",
        // 4. Network Sec
        cat_net_title: "Segurança de Rede",
        cat_net_desc: "Defesa de infraestrutura com Darktrace e Palo Alto. Monitorização de tráfego (NDR) e segmentação.",
        // 5. GRC
        cat_grc_title: "GRC e Conformidade",
        cat_grc_desc: "Adesão a frameworks NIST, ISO27001 e GDPR. Relatórios de auditoria técnica e evidências de conformidade.",
        // 6. Cloud
        cat_cloud_title: "Segurança Cloud e Endpoint",
        cat_cloud_desc: "Políticas de segurança no Microsoft Defender e Intune. Proteção de ambientes híbridos e onboarding de ativos.",

        // --- Profile Page (Experience) ---
        page_profile_title: "O Meu Percurso",
        role_noesis: "Engenheiro de Cibersegurança @ Noesis",
        date_noesis: "2020 - Presente",
        exp_lead: "Liderança de Equipa: Redução do MTTR em 15% via formação.",
        exp_detect: "Otimização de Deteção: Redução de falsos positivos em 30% em plataformas SIEM/XDR.",
        exp_vuln: "Gestão de Risco: Remediação massiva de vulnerabilidades críticas.",
        exp_soar: "Automação SOAR: Implementação de playbooks para resposta a incidentes.",
        exp_cloud: "Endpoint & Cloud: Onboarding de 2000+ endpoints no Microsoft Defender.",

        // --- Tools Page ---
        page_tools_title: "Stack Tecnológica",
        tool_siem: "SIEM & XDR",
        tool_vuln: "Gestão de Vuln",
        tool_auto: "Automação & Dev",
        tool_net: "Rede & Segurança",

        // --- Certs Page ---
        page_certs_title: "Certificações",

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
        
        // Homepage / Hero
        hero_title: "André Graça",
        hero_role: "Cybersecurity Engineer",
        hero_sub: "Defense | Offense | Automation | Engineering",

        // --- 6 Core Categories ---
        // 1. SecOps
        cat_secops_title: "Security Operations (SecOps)",
        cat_secops_desc: "Specialist in threat detection and incident response. Reduced MTTR and optimized SIEM/XDR (ArcSight, Sentinel).",
        // 2. Engineering
        cat_eng_title: "Engineering & Automation",
        cat_eng_desc: "Development of SOAR Playbooks and Python scripts. API integration (Gitlab, Jira) saving 15h+ weekly.",
        // 3. Vulnerability Mgmt
        cat_vuln_title: "Vulnerability Management",
        cat_vuln_desc: "Leading proactive programs using Tenable.io and Landsweeper. Remediation of 500+ critical vulnerabilities.",
        // 4. Network Sec
        cat_net_title: "Network Security",
        cat_net_desc: "Infrastructure defense with Darktrace and Palo Alto. Traffic monitoring (NDR) and segmentation.",
        // 5. GRC
        cat_grc_title: "GRC & Compliance",
        cat_grc_desc: "Adherence to NIST, ISO27001, and GDPR frameworks. Technical audit reports and compliance evidence.",
        // 6. Cloud
        cat_cloud_title: "Cloud & Endpoint Security",
        cat_cloud_desc: "Security policies in Microsoft Defender and Intune. Securing hybrid environments and asset onboarding.",

        // --- Profile Page (Experience) ---
        page_profile_title: "My Journey",
        role_noesis: "Cybersecurity Engineer @ Noesis",
        date_noesis: "2020 - Present",
        exp_lead: "Team Leadership: Reduced MTTR by 15% through training.",
        exp_detect: "Detection Optimization: Reduced false positives by 30% on SIEM/XDR platforms.",
        exp_vuln: "Risk Management: Massive remediation of critical vulnerabilities.",
        exp_soar: "SOAR Automation: Implemented playbooks for incident response.",
        exp_cloud: "Endpoint & Cloud: Onboarding of 2000+ endpoints in Microsoft Defender.",

        // --- Tools Page ---
        page_tools_title: "Tech Stack",
        tool_siem: "SIEM & XDR",
        tool_vuln: "Vuln Management",
        tool_auto: "Automation & Dev",
        tool_net: "Network & Security",

        // --- Certs Page ---
        page_certs_title: "Certifications",

        // Footer
        footer_contact: "Get in touch via Email."
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

// Event Listeners
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
});
