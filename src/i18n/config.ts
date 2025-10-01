import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources for all major languages
const resources = {
  en: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Home",
        tools: "Tools",
        about: "About"
      },
      hero: {
        badge: "Global Tools Platform",
        title: "Tolzo",
        subtitle1: "All the Tools You Need",
        subtitle2: "in One Place",
        description: "From calculators to converters, SEO tools to generators—everything you need to work smarter and faster.",
        search: "Find Your Tool Quickly...",
        popular: "Popular",
        features: {
          tools: "50+ Tools",
          free: "Always Free",
          ai: "AI Powered"
        }
      },
      tools: {
        emi: "EMI Calculator",
        bmi: "BMI Calculator",
        currency: "Currency Converter",
        qr: "QR Code",
        loan: "Loan Calculator",
        age: "Age Calculator"
      },
      categories: {
        all: "All Tools",
        finance: "Finance",
        health: "Health",
        text: "Text & Writing",
        developer: "Developer",
        seo: "SEO & Website",
        utility: "Utilities"
      },
      footer: {
        about: "About Tolzo",
        aboutText: "All-in-one platform for essential online tools. Fast, free, and always available.",
        quickLinks: "Quick Links",
        home: "Home",
        tools: "All Tools",
        blog: "Blog",
        contact: "Contact",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        brand: "टोल्ज़ो",
        home: "होम",
        tools: "टूल्स",
        about: "हमारे बारे में"
      },
      hero: {
        badge: "ग्लोबल टूल्स प्लेटफॉर्म",
        title: "टोल्ज़ो",
        subtitle1: "सभी टूल्स एक जगह",
        subtitle2: "आपके लिए",
        description: "कैलकुलेटर से कन्वर्टर तक, SEO टूल्स से जेनरेटर तक—स्मार्ट और तेज़ काम के लिए सब कुछ।",
        search: "अपना टूल तेज़ी से खोजें...",
        popular: "लोकप्रिय",
        features: {
          tools: "50+ टूल्स",
          free: "हमेशा मुफ्त",
          ai: "AI संचालित"
        }
      },
      tools: {
        emi: "EMI कैलकुलेटर",
        bmi: "BMI कैलकुलेटर",
        currency: "करेंसी कन्वर्टर",
        qr: "QR कोड",
        loan: "लोन कैलकुलेटर",
        age: "आयु कैलकुलेटर"
      },
      categories: {
        all: "सभी टूल्स",
        finance: "वित्त",
        health: "स्वास्थ्य",
        text: "टेक्स्ट और लेखन",
        developer: "डेवलपर",
        seo: "SEO और वेबसाइट",
        utility: "उपयोगिताएं"
      },
      footer: {
        about: "टोल्ज़ो के बारे में",
        aboutText: "ऑनलाइन टूल्स के लिए ऑल-इन-वन प्लेटफॉर्म। तेज़, मुफ्त और हमेशा उपलब्ध।",
        quickLinks: "त्वरित लिंक",
        home: "होम",
        tools: "सभी टूल्स",
        blog: "ब्लॉग",
        contact: "संपर्क करें",
        legal: "कानूनी",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        rights: "सर्वाधिकार सुरक्षित"
      }
    }
  },
  es: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Inicio",
        tools: "Herramientas",
        about: "Acerca de"
      },
      hero: {
        badge: "Plataforma Global de Herramientas",
        title: "Tolzo",
        subtitle1: "Todas las Herramientas que Necesitas",
        subtitle2: "en un Solo Lugar",
        description: "Desde calculadoras hasta convertidores, herramientas SEO hasta generadores—todo lo que necesitas para trabajar más inteligente y rápido.",
        search: "Encuentra tu Herramienta Rápidamente...",
        popular: "Popular",
        features: {
          tools: "50+ Herramientas",
          free: "Siempre Gratis",
          ai: "Impulsado por IA"
        }
      },
      tools: {
        emi: "Calculadora EMI",
        bmi: "Calculadora BMI",
        currency: "Convertidor de Moneda",
        qr: "Código QR",
        loan: "Calculadora de Préstamo",
        age: "Calculadora de Edad"
      },
      categories: {
        all: "Todas las Herramientas",
        finance: "Finanzas",
        health: "Salud",
        text: "Texto y Escritura",
        developer: "Desarrollador",
        seo: "SEO y Sitio Web",
        utility: "Utilidades"
      },
      footer: {
        about: "Acerca de Tolzo",
        aboutText: "Plataforma todo en uno para herramientas en línea esenciales. Rápido, gratis y siempre disponible.",
        quickLinks: "Enlaces Rápidos",
        home: "Inicio",
        tools: "Todas las Herramientas",
        blog: "Blog",
        contact: "Contacto",
        legal: "Legal",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        rights: "Todos los derechos reservados"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Accueil",
        tools: "Outils",
        about: "À propos"
      },
      hero: {
        badge: "Plateforme d'Outils Mondiale",
        title: "Tolzo",
        subtitle1: "Tous les Outils dont Vous Avez Besoin",
        subtitle2: "en Un Seul Endroit",
        description: "Des calculatrices aux convertisseurs, des outils SEO aux générateurs—tout ce dont vous avez besoin pour travailler plus intelligemment et plus rapidement.",
        search: "Trouvez Votre Outil Rapidement...",
        popular: "Populaire",
        features: {
          tools: "50+ Outils",
          free: "Toujours Gratuit",
          ai: "Alimenté par IA"
        }
      },
      tools: {
        emi: "Calculateur EMI",
        bmi: "Calculateur BMI",
        currency: "Convertisseur de Devise",
        qr: "Code QR",
        loan: "Calculateur de Prêt",
        age: "Calculateur d'Âge"
      },
      categories: {
        all: "Tous les Outils",
        finance: "Finance",
        health: "Santé",
        text: "Texte et Écriture",
        developer: "Développeur",
        seo: "SEO et Site Web",
        utility: "Utilitaires"
      },
      footer: {
        about: "À propos de Tolzo",
        aboutText: "Plateforme tout-en-un pour des outils en ligne essentiels. Rapide, gratuit et toujours disponible.",
        quickLinks: "Liens Rapides",
        home: "Accueil",
        tools: "Tous les Outils",
        blog: "Blog",
        contact: "Contact",
        legal: "Légal",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        rights: "Tous droits réservés"
      }
    }
  },
  de: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Startseite",
        tools: "Werkzeuge",
        about: "Über uns"
      },
      hero: {
        badge: "Globale Werkzeugplattform",
        title: "Tolzo",
        subtitle1: "Alle Werkzeuge, die Sie Brauchen",
        subtitle2: "an Einem Ort",
        description: "Von Rechnern bis zu Konvertern, SEO-Tools bis zu Generatoren—alles, was Sie brauchen, um intelligenter und schneller zu arbeiten.",
        search: "Finden Sie Ihr Werkzeug Schnell...",
        popular: "Beliebt",
        features: {
          tools: "50+ Werkzeuge",
          free: "Immer Kostenlos",
          ai: "KI-gesteuert"
        }
      },
      tools: {
        emi: "EMI-Rechner",
        bmi: "BMI-Rechner",
        currency: "Währungsrechner",
        qr: "QR-Code",
        loan: "Kreditrechner",
        age: "Altersrechner"
      },
      categories: {
        all: "Alle Werkzeuge",
        finance: "Finanzen",
        health: "Gesundheit",
        text: "Text und Schreiben",
        developer: "Entwickler",
        seo: "SEO und Website",
        utility: "Dienstprogramme"
      },
      footer: {
        about: "Über Tolzo",
        aboutText: "All-in-One-Plattform für wichtige Online-Tools. Schnell, kostenlos und immer verfügbar.",
        quickLinks: "Schnelllinks",
        home: "Startseite",
        tools: "Alle Werkzeuge",
        blog: "Blog",
        contact: "Kontakt",
        legal: "Rechtliches",
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen",
        rights: "Alle Rechte vorbehalten"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "首页",
        tools: "工具",
        about: "关于"
      },
      hero: {
        badge: "全球工具平台",
        title: "Tolzo",
        subtitle1: "您需要的所有工具",
        subtitle2: "尽在一处",
        description: "从计算器到转换器，SEO工具到生成器——让您更智能、更快速地工作所需的一切。",
        search: "快速查找您的工具...",
        popular: "热门",
        features: {
          tools: "50+工具",
          free: "永久免费",
          ai: "AI驱动"
        }
      },
      tools: {
        emi: "EMI计算器",
        bmi: "BMI计算器",
        currency: "货币转换器",
        qr: "二维码",
        loan: "贷款计算器",
        age: "年龄计算器"
      },
      categories: {
        all: "所有工具",
        finance: "财务",
        health: "健康",
        text: "文本与写作",
        developer: "开发者",
        seo: "SEO与网站",
        utility: "实用工具"
      },
      footer: {
        about: "关于Tolzo",
        aboutText: "基本在线工具的一体化平台。快速、免费且始终可用。",
        quickLinks: "快速链接",
        home: "首页",
        tools: "所有工具",
        blog: "博客",
        contact: "联系",
        legal: "法律",
        privacy: "隐私政策",
        terms: "服务条款",
        rights: "版权所有"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        brand: "تولزو",
        home: "الرئيسية",
        tools: "الأدوات",
        about: "معلومات عنا"
      },
      hero: {
        badge: "منصة أدوات عالمية",
        title: "تولزو",
        subtitle1: "جميع الأدوات التي تحتاجها",
        subtitle2: "في مكان واحد",
        description: "من الآلات الحاسبة إلى المحولات، أدوات SEO إلى المولدات—كل ما تحتاجه للعمل بذكاء وسرعة أكبر.",
        search: "ابحث عن أداتك بسرعة...",
        popular: "شائع",
        features: {
          tools: "50+ أداة",
          free: "مجاني دائماً",
          ai: "مدعوم بالذكاء الاصطناعي"
        }
      },
      tools: {
        emi: "حاسبة EMI",
        bmi: "حاسبة BMI",
        currency: "محول العملات",
        qr: "رمز QR",
        loan: "حاسبة القروض",
        age: "حاسبة العمر"
      },
      categories: {
        all: "جميع الأدوات",
        finance: "المالية",
        health: "الصحة",
        text: "النص والكتابة",
        developer: "المطورون",
        seo: "SEO والموقع",
        utility: "المرافق"
      },
      footer: {
        about: "حول تولزو",
        aboutText: "منصة شاملة للأدوات الأساسية عبر الإنترنت. سريع ومجاني ومتاح دائمًا.",
        quickLinks: "روابط سريعة",
        home: "الرئيسية",
        tools: "جميع الأدوات",
        blog: "المدونة",
        contact: "اتصل بنا",
        legal: "قانوني",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        rights: "جميع الحقوق محفوظة"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Главная",
        tools: "Инструменты",
        about: "О нас"
      },
      hero: {
        badge: "Глобальная Платформа Инструментов",
        title: "Tolzo",
        subtitle1: "Все Инструменты, Которые Вам Нужны",
        subtitle2: "в Одном Месте",
        description: "От калькуляторов до конвертеров, инструменты SEO до генераторов—все, что вам нужно для более умной и быстрой работы.",
        search: "Быстро Найдите Свой Инструмент...",
        popular: "Популярное",
        features: {
          tools: "50+ Инструментов",
          free: "Всегда Бесплатно",
          ai: "На основе ИИ"
        }
      },
      tools: {
        emi: "Калькулятор EMI",
        bmi: "Калькулятор BMI",
        currency: "Конвертер Валют",
        qr: "QR-код",
        loan: "Калькулятор Кредита",
        age: "Калькулятор Возраста"
      },
      categories: {
        all: "Все Инструменты",
        finance: "Финансы",
        health: "Здоровье",
        text: "Текст и Письмо",
        developer: "Разработчик",
        seo: "SEO и Веб-сайт",
        utility: "Утилиты"
      },
      footer: {
        about: "О Tolzo",
        aboutText: "Универсальная платформа для основных онлайн-инструментов. Быстро, бесплатно и всегда доступно.",
        quickLinks: "Быстрые Ссылки",
        home: "Главная",
        tools: "Все Инструменты",
        blog: "Блог",
        contact: "Контакт",
        legal: "Юридический",
        privacy: "Политика Конфиденциальности",
        terms: "Условия Использования",
        rights: "Все права защищены"
      }
    }
  },
  ja: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "ホーム",
        tools: "ツール",
        about: "概要"
      },
      hero: {
        badge: "グローバルツールプラットフォーム",
        title: "Tolzo",
        subtitle1: "必要なすべてのツール",
        subtitle2: "1つの場所に",
        description: "電卓からコンバーター、SEOツールからジェネレーターまで—よりスマートで速く作業するために必要なすべて。",
        search: "ツールをすばやく見つける...",
        popular: "人気",
        features: {
          tools: "50+ツール",
          free: "常に無料",
          ai: "AI搭載"
        }
      },
      tools: {
        emi: "EMI計算機",
        bmi: "BMI計算機",
        currency: "通貨換算",
        qr: "QRコード",
        loan: "ローン計算機",
        age: "年齢計算機"
      },
      categories: {
        all: "すべてのツール",
        finance: "ファイナンス",
        health: "健康",
        text: "テキストと執筆",
        developer: "開発者",
        seo: "SEOとウェブサイト",
        utility: "ユーティリティ"
      },
      footer: {
        about: "Tolzoについて",
        aboutText: "必須のオンラインツールのためのオールインワンプラットフォーム。速く、無料で、常に利用可能。",
        quickLinks: "クイックリンク",
        home: "ホーム",
        tools: "すべてのツール",
        blog: "ブログ",
        contact: "お問い合わせ",
        legal: "法的情報",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        rights: "すべての権利を保有"
      }
    }
  },
  ko: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "홈",
        tools: "도구",
        about: "소개"
      },
      hero: {
        badge: "글로벌 도구 플랫폼",
        title: "Tolzo",
        subtitle1: "필요한 모든 도구",
        subtitle2: "한 곳에서",
        description: "계산기에서 변환기, SEO 도구에서 생성기까지—더 스마트하고 빠르게 작업하는 데 필요한 모든 것.",
        search: "도구를 빠르게 찾기...",
        popular: "인기",
        features: {
          tools: "50+개 도구",
          free: "항상 무료",
          ai: "AI 기반"
        }
      },
      tools: {
        emi: "EMI 계산기",
        bmi: "BMI 계산기",
        currency: "통화 변환기",
        qr: "QR 코드",
        loan: "대출 계산기",
        age: "나이 계산기"
      },
      categories: {
        all: "모든 도구",
        finance: "금융",
        health: "건강",
        text: "텍스트 및 작성",
        developer: "개발자",
        seo: "SEO 및 웹사이트",
        utility: "유틸리티"
      },
      footer: {
        about: "Tolzo 소개",
        aboutText: "필수 온라인 도구를 위한 올인원 플랫폼. 빠르고 무료이며 항상 사용 가능합니다.",
        quickLinks: "빠른 링크",
        home: "홈",
        tools: "모든 도구",
        blog: "블로그",
        contact: "문의",
        legal: "법적 정보",
        privacy: "개인정보 보호정책",
        terms: "서비스 약관",
        rights: "모든 권리 보유"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        brand: "Tolzo",
        home: "Início",
        tools: "Ferramentas",
        about: "Sobre"
      },
      hero: {
        badge: "Plataforma Global de Ferramentas",
        title: "Tolzo",
        subtitle1: "Todas as Ferramentas que Você Precisa",
        subtitle2: "em Um Só Lugar",
        description: "De calculadoras a conversores, ferramentas de SEO a geradores—tudo o que você precisa para trabalhar de forma mais inteligente e rápida.",
        search: "Encontre Sua Ferramenta Rapidamente...",
        popular: "Popular",
        features: {
          tools: "50+ Ferramentas",
          free: "Sempre Grátis",
          ai: "Alimentado por IA"
        }
      },
      tools: {
        emi: "Calculadora EMI",
        bmi: "Calculadora BMI",
        currency: "Conversor de Moeda",
        qr: "Código QR",
        loan: "Calculadora de Empréstimo",
        age: "Calculadora de Idade"
      },
      categories: {
        all: "Todas as Ferramentas",
        finance: "Finanças",
        health: "Saúde",
        text: "Texto e Escrita",
        developer: "Desenvolvedor",
        seo: "SEO e Site",
        utility: "Utilitários"
      },
      footer: {
        about: "Sobre Tolzo",
        aboutText: "Plataforma tudo-em-um para ferramentas online essenciais. Rápido, gratuito e sempre disponível.",
        quickLinks: "Links Rápidos",
        home: "Início",
        tools: "Todas as Ferramentas",
        blog: "Blog",
        contact: "Contato",
        legal: "Legal",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        rights: "Todos os direitos reservados"
      }
    }
  }
};

i18n
  .use(LanguageDetector) // Auto-detect user language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
