const translations = {
    pt: {
        // NAV
        nav_home: "Início", nav_impact: "Impacto", nav_expertise: "Especialidade", nav_skills: "Competências", nav_tools: "Ferramentas", nav_profile: "Perfil", nav_contact: "Contato", nav_certs: "Certificações", btn_lang: "EN",
        hero_badge: "ENGENHEIRO DE CIBERSEGURANÇA", hero_title: "André Graça", hero_subtitle: "Construindo Defesas Digitais Resilientes", hero_desc: "Especializado em SecOps, inteligência de ameaças e engenharia de segurança.",
        btn_explore: "Explorar Trabalho", btn_contact: "Entrar em Contato",
        stat_vuln_label: "Vulnerabilidades Resolvidas", stat_malware_label: "Redução de Malware", stat_endpoints_label: "Endpoints Seguros", stat_mttr_label: "Melhoria no MTTR",
        expert_tag: "COMPETÊNCIAS PRINCIPAIS", expert_title: "Expertise em Segurança", expert_desc: "Capacidades abrangentes de cibersegurança em defesa, engenharia e inteligência de ameaças.",
        
        // SKILLS PAGE
        skills_badge: "EXPERTISE TÉCNICA", skills_title: "Competências e Capacidades", skills_desc: "Clique nos cartões para expandir os detalhes técnicos.",

        // --- SKILLS COMPLETO (PT) ---
        c1_title: "Defesa (SecOps)",
        c1_full: "Com uma trajetória consolidada em SecOps, desenvolvi uma visão holística das operações de defesa ao atuar progressivamente nos níveis L1, L2 e L3.\nA minha experiência iniciou-se na linha de frente, garantindo a deteção rápida e triagem precisa de alertas (L1). Evoluí para a análise tática e correlação de eventos de segurança (L2), validando incidentes reais e eliminando falsos positivos. Atualmente, possuo competência avançada (L3) para liderar investigações de incidentes complexos, realizar threat hunting proativo e conduzir análises de causa raiz. O meu foco é garantir não apenas a resolução de incidentes, mas a melhoria contínua dos processos de deteção e resposta.",

        c2_title: "Engenharia de Segurança",
        c2_full: "A minha carreira em Engenharia de Segurança é definida pela construção de bases tecnológicas que permitem uma defesa eficaz. O meu foco não é apenas implementar ferramentas, mas integrá-las numa arquitetura coesa e funcional.\nTenho experiência prática na implementação end-to-end de plataformas SIEM e EDR, adaptando as soluções tanto para ambientes cloud quanto legados (on-prem). Mais do que configurar a infraestrutura, atuo fortemente como Detection Engineer: crio e refino regras de deteção baseadas em inteligência de ameaças e desenvolvo automações (via scripts ou SOAR) que reduzem o trabalho manual das equipas de SOC.",

        c3_title: "Avaliação de Segurança",
        c3_full: "A minha atuação em Segurança da Informação situa-se na interseção entre a análise técnica de vulnerabilidades e a gestão de conformidade (GRC).\nNa vertente técnica, participei ativamente em security assessments abrangentes, utilizando metodologias DAST e SAST para identificar falhas em aplicações e infraestruturas, além de colaborar em exercícios de Penetration Testing. O meu papel não termina na identificação; trabalho lado a lado com as equipas do cliente para priorizar e resolver as vulnerabilidades, reduzindo a superfície de ataque.\nNa vertente de gestão e governança, sou responsável pela administração de plataformas de gestão de vulnerabilidades, garantindo a visibilidade contínua através de dashboards personalizados. A minha experiência estende-se à realização de assessments de conformidade (incluindo GDPR), garantindo que os relatórios mensais e auditorias não sejam apenas listas de problemas técnicos, mas avaliações de risco alinhadas com as normas ISO 27001 e as novas diretrizes da NIS2.",

        c4_title: "Gestão de Vulnerabilidades",
        c4_full: "Na Gestão de Vulnerabilidades, o meu foco é garantir visibilidade total e resposta rápida. Administro e opero um stack robusto de ferramentas de deteção, incluindo Tenable, Nessus e Lansweeper, integrando também a telemetria de soluções de endpoint como Defender e Check Point Harmony.\nContudo, o meu valor diferenciador reside na proatividade fora das ferramentas automatizadas. Atuo frequentemente com base em Vulnerability Intelligence: ao identificar novas CVEs críticas no mercado, cruzo manualmente essa informação com a lista de ativos e versões de software dos clientes. Isto permite-me notificar e mobilizar as equipas para um Patch Management imediato, muitas vezes antes de o scan agendado correr.\nComplemento esta atuação técnica com uma forte componente de comunicação, produzindo desde relatórios de incidente e guias técnicos de remediação, até apresentações executivas que traduzem métricas de vulnerabilidade em risco de negócio.",

        c5_title: "Segurança de Rede",
        c5_full: "Na vertente de Segurança de Rede, o meu trabalho vai além da configuração de regras foca-se na visibilidade completa e na defesa em profundidade.\nTenho uma vasta experiência na gestão de perímetro e proteção de aplicações, configurando e otimizando NGFWs e WAFs para criar políticas de segurança robustas e mitigar ameaças externas. Paralelamente, especializei-me em tecnologias baseadas em IA, como a Darktrace, onde lidero implementações completas desde o deploy da appliance física até à configuração dos módulos de Detect & Response.\nUm dos meus pontos fortes é a arquitetura de implementação: analiso a topologia de rede do cliente para identificar estrategicamente os pontos de espelhamento de tráfego (SPAN/Tap), garantindo que a solução de segurança tenha visibilidade total sobre o tráfego Norte-Sul e Leste-Oeste, eliminando pontos cegos na infraestrutura.",

        c6_title: "Segurança na Nuvem",
        c6_full: "Na minha visão de Segurança na Nuvem, a Identidade é o novo perímetro. Por isso, especializei-me profundamente no Microsoft Entra ID, indo muito além da gestão básica de utilizadores.\nA minha experiência abrange a implementação de políticas complexas de Acesso Condicional, autenticação forte (MFA/Passwordless) e Governança de Identidade, incluindo a gestão rigorosa de contas administrativas através de Privileged Identity Management (PIM).\nParalelamente à identidade, asseguro a defesa da infraestrutura e dos dados utilizando o ecossistema Microsoft Defender. Atuo na configuração de políticas de segurança, análise de Secure Score e resposta a incidentes na nuvem, garantindo visibilidade e proteção tanto em aplicações SaaS (Office 365) como em infraestruturas IaaS/PaaS.",

        c7_title: "Compliance",
        c7_full: "Na minha visão, a conformidade não deve ser um obstáculo, mas um guia para a segurança.\nRealizo avaliações detalhadas a aplicações para garantir o cumprimento estrito do RGPD (GDPR), identificando riscos na recolha e tratamento de dados. No entanto, o meu valor acrescentado reside na forma como comunico os resultados.\nNão entrego apenas uma lista de falhas técnicas; mapeio cada vulnerabilidade e recomendação contra as normas ISO 27001 e a diretiva NIS2. Isto permite ao cliente entender não só 'o que' corrigir, mas 'por que' corrigir, alinhando a remediação técnica com as melhores práticas internacionais e o contexto específico da sua organização.",

        c8_title: "Sistemas Operativos",
        c8_full: "A base da minha competência em Cibersegurança é um domínio profundo dos sistemas operativos, o que me permite ir muito além da interface gráfica.\nEm ambientes Linux, opero com fluência na linha de comandos (CLI), gerindo serviços, permissões e automações, essencial tanto para a manutenção de infraestrutura de segurança como para análises forenses.\nNo ecossistema Windows, possuo experiência de 'alto nível' na administração de Servidores e endpoints, utilizando PowerShell e ferramentas de diagnóstico avançado para monitorização e resolução de problemas complexos. Esta versatilidade garante que consigo implementar, proteger e investigar qualquer ativo, independentemente da plataforma.",

        c9_title: "Programação",
        c9_full: "A programação é o multiplicador de força das minhas operações de segurança. A minha experiência vai muito além da utilização de ferramentas de mercado; eu construo soluções para colmatar lacunas tecnológicas.\nUtilizo Python intensivamente para processamento de dados e análise de logs, criando scripts que normalizam eventos para o SIEM ou enriquecem alertas com Threat Intelligence. Com Bash e PowerShell, domino a automação de infraestrutura em Linux e Windows, agilizando tarefas administrativas e de resposta a incidentes em escala.\nAdicionalmente, aplico JavaScript para integrações de sistemas (frequentemente em ambientes SOAR e Cloud), permitindo que ferramentas de segurança dispares comuniquem entre si de forma fluida.",

        c10_title: "IAM",
        c10_full: "Na minha abordagem à segurança de identidades, divido o foco em dois pilares: a higiene operacional e a proteção de privilégios.\nNo pilar de IAM Operacional, trabalho diretamente com clientes para estruturar a gestão do ciclo de vida de utilizadores (Joiner, Mover, Leaver), grupos de segurança e gestão de licenças, sempre aplicando camadas de defesa como MFA e políticas de complexidade de passwords.\nNo pilar de PAM (Privileged Access Management), elevo a segurança ao implementar cofres digitais como o Secret Server. A minha configuração favorita e a mais segura é a que implementei para acessos remotos a Máquinas Virtuais: configurei o sistema para realizar a injeção automática de credenciais. Isto permite que as equipas técnicas acedam aos servidores para trabalhar, sem nunca terem conhecimento da password de root ou admin, eliminando o risco de partilha de senhas ou phishing direcionado.",

        c11_title: "Relatórios",
        c11_full: "Para mim, um trabalho de segurança só está completo quando é bem comunicado. Desenvolvi uma metodologia de reporting robusta que serve dois propósitos distintos: decisão técnica e visão estratégica.\nNa vertente operacional, produzo relatórios de Incidentes, Forenses e de Fuga de Informação detalhados, onde reconstruo cronologias de ataque e forneço provas técnicas irrefutáveis. Para as equipas de TI, os meus relatórios de Assessment são guias práticos de remediação, não apenas listas de problemas.\nNa vertente de gestão, transformo estes dados em Relatórios Executivos e de Compliance. O meu foco é filtrar o ruído técnico para apresentar o risco real, o estado de conformidade (ISO/NIS2) e o retorno do investimento em segurança, permitindo aos decisores atuar com clareza.",

        c12_title: "Gestão de Ativos",
        c12_full: "Acredito que a segurança eficaz começa pela visibilidade: não podemos proteger o que desconhecemos.\nA minha abordagem à Gestão de Ativos vai muito além do inventário tradicional. Utilizo ferramentas como o Lansweeper para infraestrutura e o Microsoft Entra para identidades/cloud, garantindo que nenhum dispositivo ou utilizador passa despercebido (Shadow IT).\nUma vez identificados, todos os ativos são validados e classificados com base em vetores de risco, criticidade para o negócio e nível de exposição. É esta inteligência que guia a minha estratégia de defesa: as políticas de segurança (seja em Firewalls, EDRs ou Acessos) são afinadas (tuned) com base no contexto do ativo, aplicando proteções mais rigorosas onde o risco é maior e otimizando a performance operacional.",

        c13_title: "Inteligência de Ameaças (CTI)",
        c13_full: "A minha visão de segurança baseia-se na antecipação. Através da Inteligência de Ameaças (CTI), procuro entender 'quem' nos ataca e 'como', antes que o incidente ocorra.\nO meu trabalho envolve conectar este 'cérebro' ao mundo exterior: configuro conectores para ingerir feeds de fontes abertas e comerciais (como AlienVault OTX ou Anomali) e integro APIs de reputação como o VirusTotal.\nOperacionalizo a inteligência consumindo e curando feeds de diversas fontes (OSINT, CSIRTs, Vendors), validando a sua relevância para a infraestrutura do cliente. A minha função é garantir que esta informação é acionável: transformo boletins de segurança em regras de bloqueio na Firewall e assinaturas de deteção no SIEM.\nAlém disso, realizo análises estratégicas sobre o cenário de ameaças (Threat Landscape), monitorizando campanhas de Ransomware e vulnerabilidades zero-day, fornecendo à gestão e às equipas técnicas o contexto necessário para priorizar correções e investimentos.",

        c14_title: "Threat Hunting",
        c14_full: "Acredito que para defender bem, é preciso entender como se ataca. Por isso, combino a realização de Penetration Tests com a prática de Threat Hunting.\nEnquanto os testes de intrusão me permitem identificar e validar vulnerabilidades antes que sejam exploradas, o Threat Hunting ajuda-me a procurar proativamente por sinais de atividade suspeita ou anomalias na rede e nos endpoints (EDR).\nO objetivo do meu trabalho não é apenas encontrar falhas, mas sim colaborar com a equipa de engenharia para fechar essas portas. Uso os resultados de cada teste e investigação para sugerir melhorias práticas e criar novas regras de deteção, tornando o ambiente progressivamente mais seguro.",

        c15_title: "Forense Digital",
        c15_full: "A Forense Digital é uma componente central do meu trabalho. Ao longo da carreira, analisei um volume extenso de tentativas de intrusão, o que me permitiu desenvolver uma capacidade rápida de triagem e identificação de padrões de ataque.\nUm dos aspetos mais técnicos da minha experiência é a investigação de incidentes onde os atacantes tentam não deixar rasto no disco. Já atuei em casos onde comandos maliciosos eram executados diretamente na memória RAM. Este tipo de análise exige rapidez e ferramentas específicas para capturar evidências voláteis antes que se percam, permitindo compreender o ataque mesmo quando este é desenhado para ser invisível.",

        c16_title: "Políticas e Prevenção",
        c16_full: "Mais do que reagir a incidentes, o meu objetivo é trabalhar para que eles não aconteçam. A minha abordagem baseia-se na implementação de políticas de prevenção robustas, ajustadas à realidade operacional de cada cliente.\nPara garantir que essas políticas são eficazes, dedico-me à criação de dashboards claros e funcionais. Estes painéis permitem monitorizar o estado da segurança em tempo real, identificar tendências e validar se as medidas preventivas estão a surtir efeito. O objetivo é transformar dados técnicos em informação visual que apoie a decisão e a atuação preventiva.",

        c17_title: "Ferramentas AI",
        c17_full: "Acredito que a IA não substitui o analista, mas amplia as suas capacidades. Por isso, integro ativamente ferramentas baseadas em LLMs no meu fluxo de trabalho diário, utilizando-as como assistentes para troubleshooting avançado, criação de automações e refinamento de código.\nFora do ambiente operacional, mantenho um laboratório pessoal focado na criação de Agentes de IA. Este investimento contínuo na aprendizagem de frameworks de automação e engenharia de prompts permite-me estar sempre um passo à frente, testando como a inteligência artificial pode ser aplicada de forma prática para resolver desafios reais de segurança e gestão de dados.",

        c18_title: "Adaptabilidade",
        c18_full: "Se tivesse de escolher a minha melhor qualidade, seria a adaptabilidade.\nAcredito que, em Cibersegurança, a única constante é a mudança. Por isso, mantenho uma postura profissional destemida perante o desconhecido. Nunca recusei um desafio técnico ou uma nova responsabilidade; pelo contrário, encaro cada proposta complexa com eficiência e foco total na solução.\nSeja a aprender uma nova linguagem de programação, a implementar uma ferramenta nunca antes usada ou a gerir uma crise de segurança, garanto sempre o mesmo nível de empenho e sucesso. O meu compromisso é simples: dar o meu melhor para resolver o problema, seja ele qual for.",

        // PROFILE CARDS
        tools_title: "Stack de Segurança", tools_tag: "ARSENAL",
        profile_tag: "PERFIL", edu_title: "Formação Académica",
        edu_1: "Pós-Graduação: Cloud e Virtualização (ISTEC)",
        edu_2: "Licenciatura: Eng. Informática (Lusófona)",
        edu_3: "CET: Tecnologia de Sistemas (Lusófona)",
        log1_title: "A Origem", log1_text: "A minha jornada começou na Escola José Saramago em Mafra. Foi durante o Curso Profissional de Gestão e Programação de Sistemas Informáticos que descobri a minha verdadeira vocação tecnológica. Apesar das dificuldades financeiras iniciais, sabia que queria ser um profissional 'self-made' na área tecnológica e comecei a juntar dinheiro para investir na minha formação superior.",
        log2_title: "A Crise e o Desvio", log2_text: "A crise financeira de 2011 atingiu Portugal com brutalidade. Fui forçado a interromper os estudos e a trabalhar em fábricas e escritórios para sobreviver. Em 2012, tentei um novo rumo com um curso de CNC no IEFP, mas sentia um vazio profissional. Não era o meu chamamento, mas precisava de continuar a lutar.",
        log3_title: "O Ponto de Viragem", log3_text: "O ponto de rutura aconteceu numa fábrica de queijo. As condições eram desumanas e, numa única semana, escapei da morte em três acidentes de trabalho distintos. Naquele momento, decidi: 'Esta vida não é para mim'. Juntei cada cêntimo que tinha poupado, demiti-me e investi tudo no meu regresso à universidade.",
        log4_title: "O Regresso", log4_text: "Regressei à Universidade Lusófona com determinação total. O meu projeto final, 'Gaming Out of Depression', foi proposto por uma psicóloga: desenvolvi um sistema complexo de Backend e Frontend (estilo Discord) com comunicação de voz e vídeo em tempo real, desenhado especificamente para ajudar pessoas isoladas a socializar.",
        log5_title: "A Evolução Cyber", log5_text: "Durante a pós-graduação no ISTEC, ingressei na Noesis. Iniciei em OutSystems, mas quando surgiu o desafio de migrar para a Cibersegurança, aceitei sem hesitar. Através de formação contínua, moldei-me no engenheiro sólido que sou hoje.",
        
        // NOVO LOG DE PERFIL
        log6_title: "Adaptabilidade & Compromisso", log6_text: "Penso que a minha melhor qualidade é a habilidade de me adaptar a qualquer desafio que me é lançado, sem medo e com eficiência. Nunca recusei um desafio novo; qualquer que seja a proposta, darei sempre o melhor de mim e concluí-la-ei com sucesso.",
        
        footer_text: "Teams ou Email:",
        
        // HOME CARDS
        card_secops_title: "Operações de Segurança", card_secops_desc: "Liderança de equipas L1 e otimização de deteção em SIEM/XDR (ArcSight, Sentinel), reduzindo falsos positivos em 30%.",
        card_eng_title: "Engenharia & Automação", card_eng_desc: "Arquitetura de playbooks SOAR (Thycotic) e integrações API, poupando +15 horas de trabalho manual semanal.",
        card_intel_title: "Inteligência de Ameaças", card_intel_desc: "Recolha estratégica para antecipar TTPs e fortalecer defesas proativamente contra ameaças globais.",
        card_vuln_title: "Gestão de Vulnerabilidades", card_vuln_desc: "Programa proativo com Tenable.io e Landsweeper, remediando +500 vulnerabilidades críticas.",
        card_cloud_title: "Segurança Cloud & Endpoint", card_cloud_desc: "Onboarding de 2000+ endpoints (Defender/Intune) e redução de 40% em incidentes de malware.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Auditorias e evidências técnicas para conformidade com normas críticas como PCI DSS, NIS2 e GDPR."
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
        c1_full: "With a consolidated career in SecOps, I developed a holistic view of defense operations across L1, L2, and L3 levels.\nMy experience began on the front lines, ensuring rapid detection and precise triage of alerts (L1). I evolved to tactical analysis and event correlation (L2), validating real incidents and eliminating false positives. Currently, I possess advanced competence (L3) to lead complex incident investigations, perform proactive threat hunting, and conduct root cause analysis. My focus is ensuring not just incident resolution, but the continuous improvement of detection and response processes.",

        c2_title: "Security Engineering",
        c2_full: "My career involves building technological foundations for effective defense. I have hands-on experience in end-to-end implementation of SIEM and EDR platforms for both cloud and on-prem environments. Acting as a Detection Engineer, I create and refine detection rules based on threat intelligence and develop automations (via scripts or SOAR) that reduce manual workload for SOC teams.",

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
        c8_full: "Deep OS mastery underpins my security competence. In Linux, I operate fluently via CLI for service and automation management. In Windows, I possess high-level experience in Server and endpoint administration using PowerShell. This versatility ensures I can protect and investigate any asset, regardless of the platform.",

        c9_title: "Programming",
        c9_full: "Programming is a force multiplier. I use Python for data processing and log normalization scripts. With Bash and PowerShell, I master infrastructure automation. I apply JavaScript for system integrations in SOAR and Cloud environments, allowing disparate security tools to communicate fluidly.",

        c10_title: "IAM",
        c10_full: "Focused on operational hygiene and privilege protection. I structure user lifecycle management and implement PAM solutions like Secret Server with automatic credential injection, eliminating the risk of password sharing or phishing for privileged accounts.",

        c11_title: "Reporting",
        c11_full: "I developed a robust reporting methodology. Operationally, I produce detailed Incident and Forensic reports with irrefutable technical evidence. For management, I create Executive Reports that filter technical noise to present real risk and ROI, allowing decision-makers to act with clarity.",

        c12_title: "Asset Management",
        c12_full: "Security starts with visibility. I use Lansweeper and Microsoft Entra to ensure no device (Shadow IT) goes unnoticed. I classify assets by risk and criticality to fine-tune contextualized security policies.",

        c13_title: "Threat Intelligence (CTI)",
        c13_full: "Based on anticipation. I configure connectors to ingest feeds (AlienVault, VirusTotal) and curate this info to create Firewall block rules and SIEM signatures. I conduct strategic threat landscape analysis to prioritize fixes.",

        c14_title: "Threat Hunting",
        c14_full: "Combining Pentesting with Threat Hunting, I proactively search for suspicious activity or anomalies in networks and endpoints. The goal is to close doors and create new detection rules to progressively secure the environment.",

        c15_title: "Digital Forensics",
        c15_full: "I have analyzed extensive intrusion attempts, developing rapid triage capabilities. I have experience investigating fileless incidents where attackers left no trace on disk, analyzing malicious commands executed directly in RAM to understand invisible attacks.",

        c16_title: "Policies & Prevention",
        c16_full: "My goal is to prevent incidents. I implement robust policies adjusted to client reality and create functional dashboards to monitor security status in real-time, validating the effectiveness of preventive measures.",

        c17_title: "AI Tools",
        c17_full: "I believe AI amplifies analyst capabilities. I actively integrate LLM-based tools into my workflow for troubleshooting and automation. I maintain a personal lab focused on AI Agents to test how artificial intelligence can practically solve real-world security challenges.",

        c18_title: "Adaptability",
        c18_full: "If I had to choose my best quality, it would be adaptability. Change is the only constant in Cybersecurity. I maintain a fearless posture towards the unknown, facing every technical challenge with a focus on solution. Whether learning a new language or managing a crisis, I guarantee total commitment.",

        // PROFILE & TOOLS
        tools_title: "Security Stack", tools_tag: "ARSENAL",
        profile_tag: "PROFILE", edu_title: "Education",
        edu_1: "Post-Grad ISTEC", edu_2: "BSc Lusófona", edu_3: "CET Lusófona",
        log1_title: "Origin", log1_text: "My journey began at Escola José Saramago in Mafra, where I discovered my true vocation during a Professional Course in IT Systems. Despite early financial hurdles, I was determined to become a self-made professional in the tech world and started saving money to fund my higher education.",
        log2_title: "Crisis & Detour", log2_text: "The 2011 financial crisis hit Portugal hard. I was forced to pause my studies and take on various factory jobs just to survive. In 2012, I tried a CNC course at IEFP, but I felt professionally unfulfilled. I knew deep down this wasn't my calling, but I had to keep fighting.",
        log3_title: "The Turning Point", log3_text: "The breaking point was at a cheese factory. After nearly three serious accidents in one week and facing inhumane conditions, I decided: 'This life is not for me.' I scraped together every single Euro I had saved, quit, and invested everything into returning to college.",
        log4_title: "The Return", log4_text: "I returned to Lusófona University with total focus. My final project, 'Gaming Out of Depression', was a complex Full-Stack system (Discord-style) featuring real-time voice and video communication, specifically designed to help isolated individuals socialize.",
        log5_title: "The Cyber Pivot", log5_text: "During my Post-Grad at ISTEC, I joined Noesis. I started with OutSystems, but when the challenge to pivot to Cybersecurity arose, I took it without hesitation. Through continuous training, I molded myself into the solid engineer I am today.",
        
        // NOVO LOG (EN)
        log6_title: "Adaptability & Commitment", log6_text: "I believe my best quality is the ability to adapt to any challenge thrown at me, fearlessly and efficiently. I have never refused a new challenge; whatever the proposal, I will always give my best and complete it successfully.",
        
        footer_text: "Teams or Email:",
        
        // HOME CARDS
        card_secops_title: "Security Operations", card_secops_desc: "Leading L1 teams and optimizing detection on SIEM/XDR platforms (ArcSight, Sentinel), reducing false positives by 30%.",
        card_eng_title: "Engineering & Automation", card_eng_desc: "Architecting SOAR playbooks (Thycotic) and API integrations, saving 15+ hours of manual work weekly.",
        card_intel_title: "Threat Intelligence", card_intel_desc: "Strategic gathering to anticipate TTPs and proactively strengthen defenses against global threats.",
        card_vuln_title: "Vulnerability Management", card_vuln_desc: "Proactive program using Tenable.io and Landsweeper, remediating 500+ critical vulnerabilities.",
        card_cloud_title: "Cloud & Endpoint Security", card_cloud_desc: "Onboarding 2000+ endpoints (Defender/Intune) and reducing malware incidents by 40%.",
        card_grc_title: "Compliance & GRC", card_grc_desc: "Technical audits and evidence for compliance with critical frameworks like PCI DSS, NIS2, and GDPR."
    }
};

// ... [MANTENHA A LÓGICA DE JAVASCRIPT EXISTENTE AQUI] ...
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Use innerText para respeitar as quebras de linha (\n) do texto longo
            el.innerText = translations[lang][key]; 
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