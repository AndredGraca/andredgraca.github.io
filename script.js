const translations = {
    pt: {
        // NAV
        nav_home: "Início", nav_impact: "Impacto", nav_expertise: "Especialidade", nav_skills: "Competências", nav_tools: "Ferramentas", nav_profile: "Perfil", nav_contact: "Contato", nav_certs: "Certificações", btn_lang: "EN",
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA", hero_title: "André Graça", hero_subtitle: "Construindo Defesas Digitais Resilientes", hero_desc: "Especializado em SecOps, inteligência de ameaças e engenharia de segurança.",
        btn_explore: "Explorar Trabalho", btn_contact: "Entrar em Contato",
        expert_tag: "COMPETÊNCIAS PRINCIPAIS", expert_title: "Expertise em Segurança", expert_desc: "Capacidades abrangentes de cibersegurança.",
        
        // SKILLS PAGE
        skills_badge: "EXPERTISE TÉCNICA", skills_title: "Competências e Capacidades", skills_desc: "Clique nos cartões para ver os detalhes técnicos completos.",

        // --- CONTEÚDO DETALHADO (PT) ---
        c1_title: "Defesa (SecOps)",
        c1_full: "Com uma trajetória consolidada em SecOps, desenvolvi uma visão holística das operações de defesa ao atuar progressivamente nos níveis L1, L2 e L3. A minha experiência iniciou-se na linha de frente, garantindo a deteção rápida e triagem precisa de alertas (L1). Evoluí para a análise tática e correlação de eventos de segurança (L2), validando incidentes reais e eliminando falsos positivos. Atualmente, possuo competência avançada (L3) para liderar investigações de incidentes complexos, realizar threat hunting proativo e conduzir análises de causa raiz. O meu foco é garantir não apenas a resolução de incidentes, mas a melhoria contínua dos processos de deteção e resposta.",

        c2_title: "Engenharia de Segurança",
        c2_full: "A minha carreira em Engenharia de Segurança é definida pela construção de bases tecnológicas que permitem uma defesa eficaz. Tenho experiência prática na implementação end-to-end de plataformas SIEM e EDR, adaptando as soluções tanto para ambientes cloud quanto on-prem. Mais do que configurar a infraestrutura, atuo fortemente como Detection Engineer: crio e refino regras de deteção baseadas em inteligência de ameaças e desenvolvo automações (via scripts ou SOAR) que reduzem o trabalho manual das equipas de SOC.",

        c3_title: "Avaliação de Segurança",
        c3_full: "A minha atuação situa-se na interseção entre a análise técnica de vulnerabilidades e a gestão de conformidade (GRC). Na vertente técnica, participei ativamente em security assessments abrangentes, utilizando metodologias DAST e SAST para identificar falhas em aplicações e infraestruturas. Trabalho lado a lado com as equipas do cliente para priorizar e resolver vulnerabilidades, reduzindo a superfície de ataque. Na vertente de governança, sou responsável pela administração de plataformas de gestão de vulnerabilidades e pela criação de dashboards personalizados.",

        c4_title: "Gestão de Vulnerabilidades",
        c4_full: "Na Gestão de Vulnerabilidades, garanto visibilidade total e resposta rápida. Administro um stack robusto (Tenable, Nessus, Lansweeper) e atuo com base em Vulnerability Intelligence: cruzo manualmente CVEs críticas com a lista de ativos dos clientes para um Patch Management imediato. Complemento esta atuação com forte comunicação, produzindo desde relatórios de incidente a apresentações executivas de risco.",

        c5_title: "Segurança de Rede",
        c5_full: "Foco-me na visibilidade completa e defesa em profundidade. Tenho vasta experiência na gestão de perímetro (NGFWs, WAFs) e especializei-me em tecnologias baseadas em IA como a Darktrace. Um dos meus pontos fortes é a arquitetura de implementação: identifico estrategicamente pontos de espelhamento de tráfego (SPAN/Tap) para eliminar pontos cegos na infraestrutura.",

        c6_title: "Segurança na Nuvem",
        c6_full: "Na Cloud, a Identidade é o novo perímetro. Especializei-me no Microsoft Entra ID (MFA, Acesso Condicional, PIM) e asseguro a defesa da infraestrutura com o ecossistema Microsoft Defender. Garanto visibilidade e proteção tanto em aplicações SaaS (Office 365) como em infraestruturas IaaS/PaaS.",

        c7_title: "Compliance",
        c7_full: "A conformidade deve ser um guia para a segurança. Realizo avaliações RGPD e mapeio cada vulnerabilidade técnica contra normas como ISO 27001 e NIS2. Isto permite ao cliente entender 'por que' corrigir, alinhando a remediação técnica com as melhores práticas internacionais.",

        c8_title: "Sistemas Operativos",
        c8_full: "Domínio profundo de SOs é a base da minha competência. Em Linux, opero fluentemente na CLI para gerir serviços e automações. Em Windows, possuo experiência avançada na administração de Servidores e endpoints via PowerShell. Esta versatilidade garante que consigo proteger e investigar qualquer ativo.",

        c9_title: "Programação",
        c9_full: "A programação é um multiplicador de força. Utilizo Python para processamento de dados e scripts de normalização de logs. Com Bash e PowerShell, domino a automação de infraestrutura. Aplico JavaScript para integrações de sistemas em ambientes SOAR e Cloud.",

        c10_title: "IAM",
        c10_full: "Divido o foco em dois pilares: higiene operacional (ciclo de vida de utilizadores, MFA) e PAM (Privileged Access Management). Implemento cofres digitais como Secret Server e injeção automática de credenciais, eliminando o risco de partilha de senhas ou phishing de contas privilegiadas.",

        c11_title: "Relatórios",
        c11_full: "Desenvolvi uma metodologia de reporting robusta. Na vertente operacional, produzo relatórios de Incidentes e Forenses detalhados. Na vertente de gestão, crio Relatórios Executivos que filtram o ruído técnico para apresentar o risco real e o retorno do investimento.",

        c12_title: "Gestão de Ativos",
        c12_full: "A segurança começa pela visibilidade. Utilizo Lansweeper e Microsoft Entra para garantir que nenhum dispositivo (Shadow IT) passa despercebido. Classifico ativos por risco e criticiadade para afinar políticas de segurança contextualizadas.",

        c13_title: "Inteligência de Ameaças (CTI)",
        c13_full: "Baseio-me na antecipação. Configuro conectores para ingerir feeds (AlienVault, VirusTotal) e curo essa informação para criar regras de bloqueio na Firewall e assinaturas no SIEM. Realizo análises estratégicas sobre o cenário de ameaças para priorizar correções.",

        c14_title: "Threat Hunting",
        c14_full: "Combino Pentesting com Threat Hunting. Procuro proativamente por sinais de atividade suspeita ou anomalias na rede e endpoints. O objetivo é fechar portas e criar novas regras de deteção para tornar o ambiente mais seguro.",

        c15_title: "Forense Digital",
        c15_full: "Analisei um volume extenso de intrusões, desenvolvendo capacidade rápida de triagem. Tenho experiência em investigar incidentes sem rasto no disco (fileless), analisando comandos executados diretamente na memória RAM para compreender ataques invisíveis.",

        c16_title: "Políticas e Prevenção",
        c16_full: "O meu objetivo é prevenir incidentes. Implemento políticas robustas ajustadas à realidade do cliente e crio dashboards funcionais para monitorizar o estado da segurança em tempo real, validando se as medidas preventivas são eficazes.",

        c17_title: "Ferramentas AI",
        c17_full: "Integro ativamente ferramentas baseadas em LLMs no meu fluxo de trabalho para troubleshooting e automação. Mantenho um laboratório pessoal focado em Agentes de IA para testar como a inteligência artificial pode resolver desafios reais de segurança.",

        c18_title: "Adaptabilidade",
        c18_full: "Em Cibersegurança, a constante é a mudança. Mantenho uma postura destemida perante o desconhecido, encarando cada desafio técnico com foco na solução. Seja aprender uma nova linguagem ou gerir uma crise, garanto empenho total.",

        // PROFILE & TOOLS (Manter as traduções existentes para tools/profile)
        tools_title: "Stack de Segurança",
        tools_tag: "ARSENAL",
        profile_tag: "PERFIL",
        edu_title: "Formação",
        edu_1: "Pós-Graduação ISTEC", edu_2: "Licenciatura Lusófona", edu_3: "CET Lusófona",
        log1_title: "Origem", log1_text: "Início...", footer_text: "Teams ou Email:"
    },
    en: {
        // NAV
        nav_home: "Home", nav_impact: "Impact", nav_expertise: "Expertise", nav_skills: "Skills", nav_tools: "Tools", nav_profile: "Profile", nav_contact: "Contact", nav_certs: "Certs", btn_lang: "PT",
        hero_badge: "CYBERSECURITY ENGINEER", hero_title: "André Graça", hero_subtitle: "Building Resilient Digital Defenses", hero_desc: "Specialized in SecOps, threat intelligence, and security engineering.",
        btn_explore: "Explore Work", btn_contact: "Get In Touch",
        expert_tag: "CORE COMPETENCIES", expert_title: "Security Expertise", expert_desc: "Comprehensive capabilities.",
        
        // SKILLS PAGE
        skills_badge: "TECHNICAL EXPERTISE", skills_title: "Skills & Capabilities", skills_desc: "Click on cards to expand full technical details.",

        // --- DETAILED CONTENT (EN TRANSLATION) ---
        c1_title: "Defense (SecOps)",
        c1_full: "With a consolidated career in SecOps, I developed a holistic view of defense operations across L1, L2, and L3 levels. Starting on the front lines with rapid detection and triage (L1), I evolved to tactical analysis and event correlation (L2). Currently, I possess advanced competence (L3) to lead complex incident investigations, perform proactive threat hunting, and conduct root cause analysis, ensuring continuous improvement of detection processes.",

        c2_title: "Security Engineering",
        c2_full: "My career involves building technological foundations for effective defense. I have hands-on experience in end-to-end implementation of SIEM and EDR platforms for both cloud and on-prem environments. Acting as a Detection Engineer, I create and refine detection rules based on threat intelligence and develop automations (via scripts or SOAR) to reduce manual workload for SOC teams.",

        c3_title: "Security Assessment",
        c3_full: "I operate at the intersection of technical vulnerability analysis and compliance management (GRC). I actively participate in security assessments using DAST and SAST to identify flaws, working alongside client teams to prioritize and resolve vulnerabilities. On the governance side, I manage vulnerability platforms and ensure compliance reporting aligns with ISO 27001 and NIS2 standards.",

        c4_title: "Vulnerability Management",
        c4_full: "I ensure total visibility and rapid response managing a robust stack (Tenable, Nessus, Lansweeper). My value lies in proactive Vulnerability Intelligence: manually crossing critical CVEs with asset lists for immediate Patch Management. I complement this with strong communication, producing everything from incident reports to executive risk presentations.",

        c5_title: "Network Security",
        c5_full: "Focused on complete visibility and defense in depth. I have extensive experience managing perimeters (NGFWs, WAFs) and specialize in AI-based tech like Darktrace. A key strength is implementation architecture: identifying strategic traffic mirroring points (SPAN/Tap) to eliminate infrastructure blind spots.",

        c6_title: "Cloud Security",
        c6_full: "In the Cloud, Identity is the new perimeter. I specialize in Microsoft Entra ID (MFA, Conditional Access, PIM) and ensure infrastructure defense using the Microsoft Defender ecosystem. I guarantee visibility and protection for both SaaS apps (Office 365) and IaaS/PaaS infrastructures.",

        c7_title: "Compliance",
        c7_full: "Compliance should guide security, not hinder it. I conduct GDPR assessments and map every technical vulnerability against standards like ISO 27001 and NIS2. This allows clients to understand 'why' to fix issues, aligning technical remediation with international best practices.",

        c8_title: "Operating Systems",
        c8_full: "Deep OS mastery underpins my security competence. In Linux, I operate fluently via CLI for service and automation management. In Windows, I possess high-level experience in Server and endpoint administration using PowerShell. This versatility ensures I can protect and investigate any asset.",

        c9_title: "Programming",
        c9_full: "Programming is a force multiplier. I use Python for data processing and log normalization scripts. With Bash and PowerShell, I master infrastructure automation. I apply JavaScript for system integrations in SOAR and Cloud environments.",

        c10_title: "IAM",
        c10_full: "Focused on operational hygiene and privilege protection. I structure user lifecycle management and implement PAM solutions like Secret Server with automatic credential injection, eliminating the risk of password sharing or phishing for privileged accounts.",

        c11_title: "Reporting",
        c11_full: "I developed a robust reporting methodology. Operationally, I produce detailed Incident and Forensic reports. For management, I create Executive Reports that filter technical noise to present real risk and return on investment.",

        c12_title: "Asset Management",
        c12_full: "Security starts with visibility. I use Lansweeper and Microsoft Entra to ensure no device (Shadow IT) goes unnoticed. I classify assets by risk and criticality to fine-tune contextualized security policies.",

        c13_title: "Threat Intelligence (CTI)",
        c13_full: "Based on anticipation. I configure connectors to ingest feeds (AlienVault, VirusTotal) and curate this info to create Firewall block rules and SIEM signatures. I conduct strategic threat landscape analysis to prioritize fixes.",

        c14_title: "Threat Hunting",
        c14_full: "Combining Pentesting with Threat Hunting, I proactively search for suspicious activity or anomalies in networks and endpoints. The goal is to close doors and create new detection rules to progressively secure the environment.",

        c15_title: "Digital Forensics",
        c15_full: "I have analyzed extensive intrusion attempts, developing rapid triage capabilities. I have experience investigating fileless incidents, analyzing commands executed directly in RAM to understand invisible attacks.",

        c16_title: "Policies & Prevention",
        c16_full: "My goal is to prevent incidents. I implement robust policies adjusted to client reality and create functional dashboards to monitor security status in real-time, validating the effectiveness of preventive measures.",

        c17_title: "AI Tools",
        c17_full: "I actively integrate LLM-based tools into my workflow for troubleshooting and automation. I maintain a personal lab focused on AI Agents to test how artificial intelligence can solve real-world security challenges.",

        c18_title: "Adaptability",
        c18_full: "Change is the only constant in Cybersecurity. I maintain a fearless professional posture towards the unknown, facing every technical challenge with a focus on solution. Whether learning a new language or managing a crisis, I guarantee total commitment.",

        // PROFILE & TOOLS
        tools_title: "Security Stack",
        tools_tag: "ARSENAL",
        profile_tag: "PROFILE",
        edu_title: "Education",
        edu_1: "Post-Grad ISTEC", edu_2: "BSc Lusófona", edu_3: "CET Lusófona",
        log1_title: "Origin", log1_text: "Started...", footer_text: "Teams or Email:"
    }
};

// ... [MANTENHA A LÓGICA DE FUNÇÕES JS AQUI (changeLanguage, scrollObserver, Menu Mobile)] ...
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

    // --- MOBILE MENU ---
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
        if (logo) logo.addEventListener('click', closeMenu);
    }
});