import type { Locale } from './locales';

export type UIStringKey =
  | 'nav.greeting'
  | 'hero.headline'
  | 'hero.subhead'
  | 'hero.bullet2'
  | 'hero.bullet3'
  | 'cta.app_store_alt'
  | 'cta.play_store_alt'
  | 'footer.terms'
  | 'footer.privacy'
  | 'footer.copyright'
  | 'meta.title'
  | 'meta.description'
  | 'r.opening'
  | 'm.opening'
  | 'm.fallback_question'
  | 's.opening'
  | 's.fallback_question';

export const UI_STRINGS: Record<UIStringKey, Record<Locale, string>> = {
  'nav.greeting': {
    es: '¡Hola!',
    en: 'Hi!',
    ca: 'Hola!',
    gl: 'Ola!',
    eu: 'Kaixo!',
    fr: 'Bonjour !',
    de: 'Hallo!',
    pt: 'Olá!',
    zh: '你好！',
    hi: 'नमस्ते!',
    ja: 'こんにちは！',
    it: 'Ciao!',
  },
  'hero.headline': {
    es: 'Prepara tus clases en minutos, no en horas.',
    en: 'Plan your classes in minutes, not hours.',
    ca: 'Prepara les teves classes en minuts, no en hores.', gl: 'Prepara as túas clases en minutos, non en horas.', eu: 'Prestatu zure klaseak minututan, ez orduetan.', fr: 'Préparez vos cours en minutes, pas en heures.', de: 'Bereite deine Unterrichtsstunden in Minuten vor, nicht in Stunden.', pt: 'Prepare suas aulas em minutos, não em horas.', zh: '几分钟内准备课程，而不是几小时。', hi: 'अपनी कक्षाओं को घंटों में नहीं, मिनटों में तैयार करें।', ja: '授業を数時間ではなく、数分で準備しましょう。', it: 'Prepara le tue lezioni in minuti, non in ore.',
  },
  'hero.subhead': {
    es: 'La app para profesores que se adapta a tu currículo y a tu manera.',
    en: 'The teacher app that adapts to your curriculum and your style.',
    ca: 'L\'app per a professors que s\'adapta al teu currículum i a la teva manera.', gl: 'A app para profesores que se adapta ao teu currículo e á túa maneira.', eu: 'Irakasleentzako aplikazioa zure curriculumari eta zure moduari egokitzen zaiona.', fr: 'L\'app pour les enseignants qui s\'adapte à ton curriculum et à ta façon.', de: 'Die App für Lehrer, die sich an deinen Lehrplan und deine Art anpasst.', pt: 'O app para professores que se adapta ao seu currículo e à sua forma.', zh: '适应你的课程和教学方式的教师应用。', hi: 'Tuvi, शिक्षकों के लिए एक ऐप जो आपके पाठ्यक्रम और आपके तरीके के अनुसार ढलता है।', ja: '先生向けアプリで、あなたのカリキュラムとあなたのやり方に適応します。', it: 'L\'app per insegnanti che si adatta al tuo curriculum e al tuo modo.',
  },
  'hero.bullet2': {
    es: 'PDFs listos para imprimir',
    en: 'PDFs ready to print',
    ca: 'PDFs llestos per imprimir', gl: 'PDFs listos para imprimir', eu: 'PDFak inprimatzeko prest', fr: 'PDFs prêts à imprimer', de: 'PDFs druckbereit', pt: 'PDFs prontos para imprimir', zh: 'PDFs 可打印', hi: 'प्रिंट करने के लिए तैयार PDFs', ja: 'PDFs 印刷準備完了', it: 'PDF pronti per la stampa',
  },
  'hero.bullet3': {
    es: 'En español (y 11 idiomas más)',
    en: 'In English (plus 11 more languages)',
    ca: 'En català (i 11 idiomes més)', gl: 'En galego (e 11 idiomas máis)', eu: 'Euskaraz (eta 11 hizkuntza gehiagutan)', fr: 'En français (et 11 langues de plus)', de: 'Auf Spanisch (und 11 weitere Sprachen)', pt: 'Em português (e 11 idiomas mais)', zh: '用西班牙语(以及其他11种语言)', hi: 'हिंदी में (और 11 और भाषाओं में)', ja: '日本語を含む12言語', it: 'In italiano (e 11 lingue in più)',
  },
  'cta.app_store_alt': {
    es: 'Descargar en App Store',
    en: 'Download on the App Store',
    ca: 'Descarregar a l\'App Store', gl: 'Descargar en App Store', eu: 'App Store-n deskargatu', fr: 'Télécharger sur App Store', de: 'Im App Store laden', pt: 'Baixar na App Store', zh: '在 App Store 上下载', hi: 'App Store पर डाउनलोड करें', ja: 'App Storeからダウンロード', it: 'Scarica su App Store',
  },
  'cta.play_store_alt': {
    es: 'Disponible en Google Play',
    en: 'Get it on Google Play',
    ca: 'Disponible a Google Play', gl: 'Dispoñible en Google Play', eu: 'Google Play-n eskuragarri', fr: 'Disponible sur Google Play', de: 'Verfügbar auf Google Play', pt: 'Disponível no Google Play', zh: '在 Google Play 上提供', hi: 'Google Play पर उपलब्ध', ja: 'Google Playで利用可能', it: 'Disponibile su Google Play',
  },
  'footer.terms': {
    es: 'Términos',
    en: 'Terms',
    ca: 'Condicions', gl: 'Termos', eu: 'Baldintzak', fr: 'Conditions', de: 'Bedingungen', pt: 'Termos', zh: '条款', hi: 'शर्तें', ja: '利用規約', it: 'Condizioni',
  },
  'footer.privacy': {
    es: 'Privacidad',
    en: 'Privacy',
    ca: 'Privacitat', gl: 'Privacidade', eu: 'Pribatutasuna', fr: 'Confidentialité', de: 'Datenschutz', pt: 'Privacidade', zh: '隐私', hi: 'गोपनीयता', ja: 'プライバシー', it: 'Privacy',
  },
  'footer.copyright': {
    es: '© 2026 Tuvi · Team Banzai S.L.U.',
    en: '© 2026 Tuvi · Team Banzai S.L.U.',
    ca: '© 2026 Tuvi · Team Banzai S.L.U.',
    gl: '© 2026 Tuvi · Team Banzai S.L.U.',
    eu: '© 2026 Tuvi · Team Banzai S.L.U.',
    fr: '© 2026 Tuvi · Team Banzai S.L.U.',
    de: '© 2026 Tuvi · Team Banzai S.L.U.',
    pt: '© 2026 Tuvi · Team Banzai S.L.U.',
    zh: '© 2026 Tuvi · Team Banzai S.L.U.',
    hi: '© 2026 Tuvi · Team Banzai S.L.U.',
    ja: '© 2026 Tuvi · Team Banzai S.L.U.',
    it: '© 2026 Tuvi · Team Banzai S.L.U.',
  },
  'meta.title': {
    es: 'Tuvi — la app para profesores',
    en: 'Tuvi — the app for teachers',
    ca: 'Tuvi — l\'app per a professors', gl: 'Tuvi — a app para profesores', eu: 'Tuvi — irakasleen aplikazioa', fr: 'Tuvi — l\'app pour les professeurs', de: 'Tuvi — die App für Lehrer', pt: 'Tuvi — o app para professores', zh: 'Tuvi — 教师应用程序', hi: 'Tuvi — शिक्षकों के लिए ऐप', ja: 'Tuvi — 教師向けアプリ', it: 'Tuvi — l\'app per insegnanti',
  },
  'meta.description': {
    es: 'Tuvi es la app móvil que ayuda a profesores a preparar clases con IA: materiales, PDFs y planificación en minutos.',
    en: 'Tuvi is the mobile app that helps teachers plan classes with AI: materials, PDFs and planning in minutes.',
    ca: 'Tuvi és l\'app mòbil que ajuda als professors a preparar classes amb IA: materials, PDFs i planificació en minuts.', gl: 'Tuvi é a app móbil que axuda a profesores a preparar clases con IA: materiais, PDFs e planificación en minutos.', eu: 'Tuvi da gaitasuna duten irakasleei klaseak prestatzeko: materialak, PDFak eta planiifikazioa minututan.', fr: 'Tuvi est l\'app mobile qui aide les professeurs à préparer les cours avec l\'IA : matériels, PDFs et planification en quelques minutes.', de: 'Tuvi ist die mobile App, die Lehrern mit KI hilft, Unterrichtsstunden vorzubereiten: Materialien, PDFs und Planung in Minuten.', pt: 'Tuvi é o app móvel que ajuda professores a preparar aulas com IA: materiais, PDFs e planejamento em minutos.', zh: 'Tuvi是一款移动应用，帮助教师借助人工智能快速准备课程：在几分钟内生成教材、PDF和教学计划。', hi: 'Tuvi वह मोबाइल ऐप है जो शिक्षकों को AI के साथ कक्षाओं को तैयार करने में मदद करता है: सामग्री, PDFs और योजना मिनटों में।', ja: 'Tuvi は、AI を使って教師が授業を準備するのに役立つモバイル アプリです: 教材、PDF、計画が数分で完成します。', it: 'Tuvi è l\'app mobile che aiuta gli insegnanti a preparare le lezioni con l\'IA: materiali, PDF e pianificazione in minuti.',
  },
  'r.opening': {
    es: 'Abriendo Tuvi…',
    en: 'Opening Tuvi…',
    ca: 'Obrint Tuvi…', gl: 'Abrindo Tuvi…', eu: 'Tuvi irekitzen…', fr: 'Ouverture de Tuvi…', de: 'Öffne Tuvi…', pt: 'Abrindo Tuvi…', zh: '正在打开 Tuvi…', hi: 'Tuvi खोल रहे हैं…', ja: 'Tuvi を開いています…', it: 'Apertura di Tuvi…',
  },
  'm.opening': {
    es: 'Abriendo material en la app…',
    en: 'Opening material in the app…',
    ca: 'Obrint material a l\'app…', gl: 'Abrindo material na aplicación…', eu: 'Materiala aplikazioan irekitzen...', fr: 'Ouverture du matériel dans l\'app…', de: 'Material wird in der App geöffnet…', pt: 'Abrindo material no app…', zh: '正在在应用中打开素材…', hi: 'ऐप में सामग्री खोल रहे हैं…', ja: 'アプリでマテリアルを開いています...', it: 'Apertura del materiale nell\'app…',
  },
  'm.fallback_question': {
    es: '¿No tienes Tuvi instalada? Descárgala:',
    en: "Don't have Tuvi installed? Get it:",
    ca: 'No tens Tuvi instal·lada? Descarrega-la:', gl: '¿Non tes Tuvi instalada? Descárgaa:', eu: 'Ez duzu Tuvi instalatuta? Deskargatu:', fr: 'Tu n\'as pas Tuvi installée ? Télécharge-la :', de: 'Hast du Tuvi nicht installiert? Lade es herunter:', pt: 'Você não tem Tuvi instalada? Baixe agora:', zh: '还没有安装Tuvi？下载：', hi: 'क्या आपके पास Tuvi इंस्टॉल नहीं है? इसे डाउनलोड करें:', ja: 'Tuvi がまだインストールされていませんか？ダウンロード：', it: 'Non hai Tuvi installata? Scaricala:',
  },
  's.opening': {
    es: 'Abriendo sesión en la app…',
    en: 'Opening session in the app…',
    ca: 'Obrint sessió a l\'app…', gl: 'Abrindo sesión na app…', eu: 'Saioa zabaltzen ari da aplikazioan…', fr: 'Ouverture de session dans l\'app…', de: 'App wird geladen…', pt: 'Abrindo sessão no app…', zh: '正在登录应用…', hi: 'ऐप में लॉगिन हो रहे हैं…', ja: 'アプリにログイン中…', it: 'Accesso all\'app in corso…',
  },
  's.fallback_question': {
    es: '¿No tienes Tuvi instalada? Descárgala:',
    en: "Don't have Tuvi installed? Get it:",
    ca: '¿No tens Tuvi instal·lada? Descarrega-la:', gl: '¿Non tes Tuvi instalada? Descárgaa:', eu: 'Tuvi instalatuta ez duzu? Deskargatu:', fr: 'Tu n\'as pas Tuvi installée ? Télécharge-la :', de: 'Hast du Tuvi nicht installiert? Lade sie herunter:', pt: 'Não tem Tuvi instalada? Baixe-a:', zh: '还没有安装Tuvi?下载:', hi: 'क्या आपके पास Tuvi इंस्टॉल नहीं है? इसे डाउनलोड करें:', ja: 'Tuviをまだインストールしていませんか？ダウンロード：', it: 'Non hai Tuvi installata? Scaricala:',
  },
};

export function t(key: UIStringKey, locale: Locale): string {
  const value = UI_STRINGS[key]?.[locale];
  if (value) return value;
  return UI_STRINGS[key]?.en ?? '';
}
