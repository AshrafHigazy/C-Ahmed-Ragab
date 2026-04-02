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
    //introName: "WHO IS COACH RAGAB?",
    introDesc: "An internationally certified personal trainer specializing in body rebuilding and achieving real transformations through meticulously designed, scientifically based training systems.",
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

    howToTitle1: "HOW TO",
    howToTitle2: "SUBSCRIPTION",
    howToSteps: [
      { title: "HOW TO SUBSCRIBE?", desc: "Contact Coach Ahmed Ragab via WhatsApp after choosing your package to complete payment easily inside or outside Egypt." },
      { title: "HOW TO COMMUNICATE?", desc: "You'll have 24/7 follow-up with Coach Ahmed Ragab directly via WhatsApp — anytime, fast reply guaranteed." },
      { title: "HOW TO TRAIN?", desc: "You'll receive a fully customized training plan with video explanations, designed for gym or home, updated monthly." },
      { title: "HOW TO FOLLOW-UP?", desc: "Daily monitoring of your progress with diet and training adjustments every 15 days based on your results." },
    ],

    pricingTitle: "COACHING PACKAGES",
    pricingCategories: [
      {
        title: "Nutrition Plan",
        packages: [
          {
            duration: "30 Days",
            salePrice: "250",
            originalPrice: "500",
            percentage: "50",
            currency: "EGP",
            features: [
              "A meticulously studied nutrition plan for your goal",
              "Daily follow-up via WhatsApp",
              "Diet modified every 15 days"
            ],
            badge: null,
            cta: "Subscribe Now"
          },
          {
            duration: "90 Days",
            salePrice: "1,000",
            originalPrice: "1,500",
            percentage: "33",
            currency: "EGP",
            features: [
              "A meticulously studied nutrition plan for your goal",
              "Daily follow-up via WhatsApp",
              "Diet modified every 15 days"
            ],
            badge: "BEST VALUE",
            featured: true,
            cta: "Subscribe Now"
          }
        ]
      },
      {
        title: "Membership",
        packages: [
          {
            duration: "30 Days",
            salePrice: "750",
            originalPrice: "1,000",
            percentage: "25",
            currency: "EGP",
            features: [
              "Customized training plan with video explanations",
              "A meticulously studied nutrition plan for your goal",
              "Daily follow-up via WhatsApp",
              "Diet modified every 15 days"
            ],
            badge: null,
            cta: "Subscribe Now"
          },
          {
            duration: "90 Days",
            salePrice: "2,000",
            originalPrice: "3,000",
            percentage: "33",
            currency: "EGP",
            features: [
              "Customized training plan with video explanations",
              "A meticulously studied nutrition plan for your goal",
              "Daily follow-up via WhatsApp",
              "Diet modified every 15 days"
            ],
            badge: "BEST VALUE",
            featured: true,
            cta: "Subscribe Now"
          }
        ]
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
    introDesc: "مدرب شخصي معتمد دوليًا متخصص في إعادة بناء الجسم وتحقيق تحولات حقيقية من خلال أنظمة تدريب مصممة بدقة وقائمة على أسس علمية.",
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

    howToTitle1: "كيف",
    howToTitle2: "تشترك؟",
    howToSteps: [
      { title: "كيف تشترك؟", desc: "تواصل مع كابتن أحمد رجب عبر واتساب بعد اختيار باقتك لإتمام الدفع بسهولة داخل أو خارج مصر." },
      { title: "كيف التواصل؟", desc: "هتحظى بمتابعة 24/7 مع الكابتن أحمد رجب مباشرة عبر واتساب — في أي وقت وبرد سريع مضمون." },
      { title: "كيف التدريب؟", desc: "هتستلم خطة تدريبية مخصصة بالكامل مشروحة بالفيديو، مصممة للجيم أو البيت، ومتجددة شهرياً." },
      { title: "كيف المتابعة؟", desc: "متابعة يومية لتقدمك مع تعديل الدايت والتدريب كل 15 يوم بناءً على نتائجك." },
    ],

    pricingTitle: "باقات الاشتراك",
    pricingCategories: [
      {
        title: "خطة التغذية",
        packages: [
          {
            duration: "30 يوم",
            salePrice: "250",
            originalPrice: "500",
            percentage: "50",
            currency: "ج.م",
            features: [
              "خطة تغذية مدروسة لهدفك",
              "متابعة يومية عبر الواتساب",
              "تغيير النظام الغذائي كل 15 يوم"
            ],
            badge: null,
            cta: "اشترك الآن"
          },
          {
            duration: "90 يوم",
            salePrice: "1,000",
            originalPrice: "1,500",
            percentage: "33",
            currency: "ج.م",
            features: [
              "خطة تغذية مدروسة لهدفك",
              "متابعة يومية عبر الواتساب",
              "تغيير النظام الغذائي كل 15 يوم"
            ],
            badge: "الأفضل",
            featured: true,
            cta: "اشترك الآن"
          }
        ]
      },
      {
        title: "الاشتراك الكامل",
        packages: [
          {
            duration: "30 يوم",
            salePrice: "750",
            originalPrice: "1,000",
            percentage: "25",
            currency: "ج.م",
            features: [
              "نظام تدريبي مخصص مشروح بالفيديوهات",
              "خطة تغذية مدروسة لهدفك",
              "متابعة يومية عبر الواتساب",
              "تغيير النظام الغذائي كل 15 يوم"
            ],
            badge: null,
            cta: "اشترك الآن"
          },
          {
            duration: "90 يوم",
            salePrice: "2,000",
            originalPrice: "3,000",
            percentage: "33",
            currency: "ج.م",
            features: [
              "نظام تدريبي مخصص مشروح بالفيديوهات",
              "خطة تغذية مدروسة لهدفك",
              "متابعة يومية عبر الواتساب",
              "تغيير النظام الغذائي كل 15 يوم"
            ],
            badge: "الأفضل",
            featured: true,
            cta: "اشترك الآن"
          }
        ]
      }
    ],

    contactTitle: "مستعد تبدأ؟",
    contactSubtext: "تواصل مع كابتن أحمد رجب مباشرةً",
    whatsappBtn: "واتساب: ٢٠١١١٥٥٨٤٤١٧+",

    footerText: "© 2026 كوتشينج أحمد رجب. جميع الحقوق محفوظة."
  }
};
