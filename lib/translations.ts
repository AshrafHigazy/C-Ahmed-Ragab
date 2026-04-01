// Lib: Static bilingual (AR/EN) content dictionary for all landing page text
export const translations = {
  en: {

    heroName: "AHMED RAGAB",
    heroTag: "[ BE YOURSELF ]",
    heroQuote: "Just like I helped them change their lifestyle, live a healthy life, and become the best version of yourself.",

    navLinks: {
      home: "Home",
      about: "About",
      transformations: "Transformations",
      services: "Services",
      packages: "Packages",
      contact: "Contact",
    },

    introTitle: "WHO IS COACH RAGAB?",
    introName: "AHMED RAGAB",
    introDesc: "An elite online fitness & nutrition coach dedicated to transforming your body and lifestyle through tailored, science-based approaches.",
    stats: {
      clients: { count: "500+", label: "Clients" },
      experience: { count: "5+", label: "Years Experience" },
      support: { count: "24/7", label: "Support" },
      packages: { count: "3", label: "Coaching Packages" },
    },

    transformationsTitle: "Transformations",

    whatIsTitle: "WHAT IS ONLINE COACHING?",
    whatIsCards: [
      { icon: "💬", text: "Personal WhatsApp / Telegram contact after payment to collect all your details" },
      { icon: "📋", text: "Full daily schedule assessment to tailor everything to your lifestyle" },
      { icon: "🏋️", text: "Solve any training & nutrition challenges you face" },
      { icon: "🍎", text: "Add your favorite foods to your custom nutrition plan" },
      { icon: "💪", text: "Identify and target your body's weak points" },
    ],

    whatYouGetTitle: "WHAT YOU GET",
    whatYouGetCards: [
      { icon: "🥗", title: "Custom Nutrition Plan", text: "A personalized nutrition plan built around your schedule and body type" },
      { icon: "🎥", title: "Full Training Plan with Videos", text: "A complete training plan with exercise demo videos" },
      { icon: "💊", title: "Supplements Plan", text: "A complete, tailored supplements recommendation plan" },
      { icon: "📱", title: "24/7 Follow-Up", text: "Round-the-clock support — message anytime, get a reply ASAP" },
    ],

    pricingTitle: "COACHING PACKAGES",
    pricingPackages: [
      {
        duration: "30 Days", price: "750", currency: "EGP",
        desc: "Perfect start — get your custom plan and begin your transformation",
        cta: "Get Started", primary: false
      },
      {
        duration: "90 Days", price: "2,300", currency: "EGP",
        desc: "Build real habits and see serious results with consistent coaching",
        cta: "Most Popular", primary: true, badge: "BEST VALUE"
      },
      {
        duration: "180 Days", price: "4,500", currency: "EGP",
        desc: "The full transformation — maximum results, maximum support",
        cta: "Go All In", primary: false
      }
    ],

    contactTitle: "READY TO START?",
    contactSubtext: "Contact Coach Ahmed Ragab directly",
    whatsappBtn: "WhatsApp: +20 111 558 4417",

    footerText: "© 2026 Ahmed Ragab Coaching. All rights reserved."
  },
  ar: {
    heroName: "أحمد رجب",
    heroTag: "[ كن نفسك ]",
    heroQuote: "زى ما ساعدتهم يغيرو طريقة حياتهم , عيش بطريقة صحية , واوصل انت كمان لاحسن نسخة من نفسك.",

    navLinks: {
      home: "الرئيسية",
      about: "عن الكابتن",
      transformations: "التحولات",
      services: "خدماتي",
      packages: "الباقات",
      contact: "تواصل معي",
    },

    introTitle: "من هو كابتن رجب؟",
    introName: "أحمد رجب",
    introDesc: "مدرب لياقة بدنية وتغذية أونلاين محترف، مكرس لتغيير جسمك وأسلوب حياتك من خلال خطط مصممة خصيصاً على أسس علمية.",
    stats: {
      clients: { count: "+500", label: "عميل" },
      experience: { count: "+5", label: "سنوات خبرة" },
      support: { count: "24/7", label: "متابعة" },
      packages: { count: "3", label: "باقات" },
    },

    transformationsTitle: "التحولات",

    whatIsTitle: "ما هو الكوتشينج الأونلاين؟",
    whatIsCards: [
      { icon: "💬", text: "بعد التحويل، التواصل عبر واتساب أو تيليجرام الشخصي لجمع كل تفاصيلك" },
      { icon: "📋", text: "تقييم كامل ليومك عشان نوفرلك كل حاجة على حسب يومك" },
      { icon: "🏋️", text: "حل أي مشاكل في التدريب والتغذية" },
      { icon: "🍎", text: "إضافة الأطعمة المفضلة في خطة التغذية الخاصة بك" },
      { icon: "💪", text: "تحديد نقاط الضعف في جسمك والعمل عليها" },
    ],

    whatYouGetTitle: "ماذا ستحصل؟",
    whatYouGetCards: [
      { icon: "🥗", title: "خطة تغذية مخصصة", text: "خطة تغذية خاصة بك على حسب يومك وطبيعة جسمك" },
      { icon: "🎥", title: "خطة تدريب مشروحة", text: "خطة تدريب كاملة مشروحة بالفيديوهات" },
      { icon: "💊", title: "خطة مكملات", text: "خطة مكملات غذائية كاملة" },
      { icon: "📱", title: "متابعة 24 ساعة", text: "متابعة 24 ساعة — ابعت في أي وقت وهيوصلك رد في أسرع وقت" },
    ],

    pricingTitle: "باقات الكوتشينج",
    pricingPackages: [
      {
        duration: "٣٠ يوم", price: "750", currency: "ج.م",
        desc: "بداية مثالية — احصل على خطتك وابدأ رحلة التحول",
        cta: "ابدأ الآن", primary: false
      },
      {
        duration: "٩٠ يوم", price: "2,300", currency: "ج.م",
        desc: "بني عادات حقيقية وشوف نتائج مع متابعة مستمرة",
        cta: "الأكثر طلباً", primary: true, badge: "القيمة الأفضل"
      },
      {
        duration: "١٨٠ يوم", price: "4,500", currency: "ج.م",
        desc: "التحول الكامل — أقصى نتائج وأقصى متابعة",
        cta: "الباقة الكاملة", primary: false
      }
    ],

    contactTitle: "مستعد تبدأ؟",
    contactSubtext: "تواصل مع كابتن أحمد رجب مباشرةً",
    whatsappBtn: "واتساب: ٢٠١١١٥٥٨٤٤١٧+",

    footerText: "© 2026 كوتشينج أحمد رجب. جميع الحقوق محفوظة."
  }
};
