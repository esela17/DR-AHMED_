import type { ServiceData } from '@/types';

export const services: ServiceData[] = [
  {
    id: 'comprehensive-exam',
    icon: 'Eye',
    titleAr: 'كشف طبي شامل للعيون',
    titleEn: 'Comprehensive Eye Examination',
    descAr: 'فحص طبي متكامل للعين وقاع العين والشبكية يستغرق من 10 إلى 15 دقيقة لتحديد حالة الإبصار وتشخيص المشاكل الطبية بدقة وأمانة.',
    descEn: 'A complete medical examination of the eye, fundus, and retina taking 10 to 15 minutes to diagnose refractive and medical issues with precision and honesty.',
    benefitsAr: [
      'فحص دقيق ومفصل يستغرق من 10 إلى 15 دقيقة',
      'قياس ضغط العين والحدقة وفحص قاع العين بالمجهر',
      'تحديد قياسات النظارة الطبية بدقة متناهية',
      'تشخيص مبكر للمياه البيضاء والزرقاء ومشاكل الشبكية'
    ],
    benefitsEn: [
      'Detailed examination taking 10 to 15 minutes',
      'Intraocular pressure measurement & slit lamp fundus exam',
      'Highly precise prescription of corrective eyeglasses',
      'Early detection of cataracts, glaucoma & retinal diseases'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'الكشف الطبي الشامل هو الخطوة الأولى والأساسية للحفاظ على صحة وسلامة عينيك. يلتزم أ.د. أحمد عبدالله مهلهل بإعطاء كل مريض الوقت الكافي للكشف الكامل (من 10 إلى 15 دقيقة)، مستخدماً أحدث أجهزة الفحص والتشخيص العالمية.',
        contentEn: 'A comprehensive medical exam is the first essential step in preserving your vision. Prof. Dr. Ahmed Abdullah Mohelhel dedicates 10 to 15 minutes to fully examine each patient, employing state-of-the-art diagnostic equipment.'
      },
      {
        type: 'h2',
        contentAr: 'ماذا يشمل الكشف الطبي بالعيادة؟',
        contentEn: 'What Does the Medical Examination Include?'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'فحص حدة الإبصار وتحديد عيوب الانكسار (طول/قصر النظر والاستجماتيزم).',
            contentEn: 'Visual acuity testing and precise refraction measurement (myopia, hyperopia, astigmatism).'
          },
          {
            contentAr: 'فحص الجزء الأمامي للعين باستخدام مجهر المصباح الشقي (Slit Lamp).',
            contentEn: 'Slit Lamp microscope examination of the anterior segment of the eye.'
          },
          {
            contentAr: 'قياس ضغط العين الوقائي للكشف المبكر عن الجلوكوما (المياه الزرقاء).',
            contentEn: 'Intraocular pressure testing for early detection of glaucoma.'
          },
          {
            contentAr: 'فحص قاع العين المباشر وتوسيع حدقة العين للاطمئنان على الشبكية والعصب البصري والجسم الزجاجي.',
            contentEn: 'Dilated fundus examination to evaluate the retina, optic nerve, and vitreous humor.'
          }
        ]
      },
      {
        type: 'p',
        contentAr: 'نحرص دائماً على أن يحصل المريض على معرفة كاملة ودقيقة بحالته الصحية بأمانة تامة، مع تقديم أفضل الحلول الطبية أو الجراحية الملائمة له بناءً على تاريخ طويل وخبرة تقترب من 30 عاماً.',
        contentEn: 'We ensure that every patient receives a complete and honest explanation of their condition, offering optimal medical or surgical solutions backed by nearly 30 years of clinical expertise.'
      }
    ]
  },
  {
    id: 'lasik',
    icon: 'ScanEye',
    titleAr: 'عمليات الليزك، وتصحيح الأبصار، والفيمتوليزك، والألتراليزك',
    titleEn: 'LASIK, Vision Correction, Femto-LASIK & Ultra-LASIK',
    descAr: 'تصحيح عيوب انكسار العين المختلفة (قصر النظر، طول النظر، والاستجماتيزم) بأحدث أجهزة الليزر العالمية للتخلص تماماً من النظارات الطبية والعدسات اللاصقة.',
    descEn: 'Correction of various refractive errors (myopia, hyperopia, and astigmatism) using state-of-the-art laser machines to completely eliminate the need for spectacles and contact lenses.',
    benefitsAr: [
      'عملية سريعة تستغرق أقل من ١٠ دقائق للعينين',
      'بدون ألم أثناء الإجراء وبمخدر موضعي بالقطرة',
      'تحسن فوري في حدة الإبصار خلال ساعات معدودة',
      'أمان تام ودقة متناهية تحت إشراف أ.د. أحمد مهلهل'
    ],
    benefitsEn: [
      'Quick procedure taking under 10 minutes for both eyes',
      'Completely painless under local drop anesthesia',
      'Immediate vision improvement within hours',
      'Maximum safety and extreme precision under Prof. Ahmed'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'تعتبر عيوب انكسار العين من المشكلات الشائعة التي تعيق ممارسة الحياة الطبيعية بحرية. بفضل التطور التكنولوجي الهائل في جراحات الليزر، أصبح بإمكانك استعادة نظرك الطبيعي في دقائق معدودة وبنسب أمان تصل إلى ١٠٠٪.',
        contentEn: 'Refractive errors are common problems that hinder normal lifestyle freedom. Thanks to the massive technological advancements in laser surgeries, you can restore your natural vision in a few minutes with up to 100% safety rates.'
      },
      {
        type: 'h2',
        contentAr: 'التقنيات الحديثة المستخدمة في تصحيح الإبصار:',
        contentEn: 'Modern Technologies Used in Vision Correction:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'الليزك التقليدي (LASIK): لإعادة تشكيل سطح القرنية وتصحيح الدرجات المعتدلة من قصر وطول النظر.',
            contentEn: 'Traditional LASIK: To reshape the corneal surface and correct moderate degrees of myopia and hyperopia.'
          },
          {
            contentAr: 'الفيمتوليزك (Femto-LASIK): يتم فيه استخدام ليزر الفيمتوثانية لرفع طبقة القرنية الرقيقة بدون استخدام أي شفرات جراحية، مما يضمن أماناً فائقاً وتعافياً أسرع.',
            contentEn: 'Femto-LASIK: Uses a femtosecond laser to create the corneal flap without any surgical blades, guaranteeing supreme safety and faster recovery.'
          },
          {
            contentAr: 'الفيمتو سمايل (Femto-SMILE): أحدث ما توصل إليه الطب، حيث يتم تصحيح النظر من خلال فتحة ميكروسكوبية دون رفع أي شريحة من القرنية، وهي مثالية لأصحاب القرنيات الرقيقة والرياضيين.',
            contentEn: 'Femto-SMILE: The latest breakthrough where vision is corrected through a microscopic incision without creating a corneal flap, ideal for thin corneas and athletes.'
          },
          {
            contentAr: 'الآلتراليزك (Ultra-LASIK): تقنية تعتمد على بصمة العين التفصيلية لتفادي التشوهات البصرية الليلية وتوفير جودة رؤية ممتازة.',
            contentEn: 'Ultra-LASIK: A technology customized based on the eye\'s unique fingerprint to avoid night glare and deliver superb visual quality.'
          }
        ]
      },
      {
        type: 'p',
        contentAr: 'يقوم الأستاذ الدكتور أحمد عبدالله مهلهل بإجراء فحص طبوغرافي وتفصيلي كامل للقرنية قبل العملية لتحديد التقنية الأكثر ملاءمة لكل مريض لضمان الحصول على أفضل جودة إبصار ممكنة.',
        contentEn: 'Prof. Dr. Ahmed Abdullah Mohelhel performs a complete corneal topography and detailed mapping before the procedure to select the most suitable technology for each patient, ensuring the best possible visual outcome.'
      }
    ]
  },
  {
    id: 'cataract',
    icon: 'Droplets',
    titleAr: 'جراحة المياه البيضاء (إزالة الكتاركت بالتفتيت) وزراعة العدسات',
    titleEn: 'Cataract Surgery & Lens Implantation',
    descAr: 'إزالة عتامة عدسة العين الطبيعية (المياه البيضاء) بأحدث تقنيات الموجات فوق الصوتية (الفاكو) وزراعة عدسات مرنة داخل العين لاستعادة الرؤية النقية.',
    descEn: 'Removal of the eye\'s cloudy natural lens (cataract) using advanced ultrasound (Phaco) and implanting flexible intraocular lenses (IOLs) to restore crystal-clear vision.',
    benefitsAr: [
      'إزالة المياه البيضاء بالتفتيت (الفاكو) بدون غرز جراحية',
      'تخدير موضعي بسيط باستخدام القطرة فقط',
      'زراعة عدسات مطورة (أحادية أو متعددة البؤر)',
      'العودة الفورية للحياة اليومية بمتابعة دقيقة'
    ],
    benefitsEn: [
      'Cataract removal using Phaco technology without stitches',
      'Simple local anesthesia using drops only',
      'Implantation of advanced lenses (monofocal or multifocal)',
      'Immediate return to daily activities with careful follow-up'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'تحدث المياه البيضاء (الكتاركت) نتيجة تغيرات طبيعية في بروتينات عدسة العين تجعلها معتمة وتدريجياً تحجب الضوء عن الوصول للشبكية. هذه المشكلة شائعة مع تقدم العمر ولكن حلها الجراحي أصبح يسيراً ومضموناً بفضل التقنيات الحديثة.',
        contentEn: 'Cataracts occur due to natural changes in the lens proteins, making it cloudy and gradually blocking light from reaching the retina. This issue is common with aging, but its surgical solution has become simple and guaranteed thanks to modern technology.'
      },
      {
        type: 'h2',
        contentAr: 'كيف تتم جراحة المياه البيضاء بالفاكو؟',
        contentEn: 'How is Phaco Cataract Surgery Performed?'
      },
      {
        type: 'p',
        contentAr: 'من خلال فتحة جراحية متناهية الصغر لا تتعدى ٢.٢ مليمتر، يتم إدخال مسبار الموجات فوق الصوتية لتفتيت العدسة المعتمة وشفطها بدقة. بعد ذلك، يتم زرع عدسة مطوية لينة داخل العين تتفرد وتثبت تلقائياً لتقوم بدور العدسة الطبيعية وبكفاءة أعلى.',
        contentEn: 'Through a micro-incision not exceeding 2.2 millimeters, an ultrasound probe is inserted to emulsify and aspirate the cloudy lens. Next, a foldable soft lens is implanted inside the eye, which unfolds and locks into place automatically to replace the natural lens with higher efficiency.'
      },
      {
        type: 'h2',
        contentAr: 'خيارات العدسات المزروعة المتوفرة بالعيادة:',
        contentEn: 'Available IOL (Intraocular Lens) Options at our Clinics:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'العدسات أحادية البؤرة: تمنح المريض رؤية ممتازة للمسافات البعيدة ويحتاج معها نظارة للقراءة فقط.',
            contentEn: 'Monofocal Lenses: Offer excellent distance vision; the patient will only need glasses for reading.'
          },
          {
            contentAr: 'العدسات متعددة البؤر (Multifocal): تتيح للمريض رؤية واضحة للمسافات القريبة والبعيدة والمتوسطة، مما يغنيه عن النظارات نهائياً.',
            contentEn: 'Multifocal Lenses: Enable clear vision at near, far, and intermediate distances, completely eliminating the need for glasses.'
          },
          {
            contentAr: 'عدسات تصحيح الاستجماتيزم (Toric Lenses): تعالج المياه البيضاء والاستجماتيزم في آن واحد لنتائج بصرية مثالية.',
            contentEn: 'Toric Lenses: Treat both cataracts and astigmatism simultaneously for ideal visual results.'
          }
        ]
      }
    ]
  },
  {
    id: 'retina',
    icon: 'Eye',
    titleAr: 'جراحة الشبكية والجسم الزجاجي',
    titleEn: 'Retina & Vitreous Surgery',
    descAr: 'تدخلات جراحية دقيقة ومتقدمة لعلاج حالات انفصال الشبكية، استئصال الجسم الزجاجي، وإصلاح ثقوب مركز الإبصار باستخدام أحدث الميكروسكوبات العالمية.',
    descEn: 'Highly precise and advanced surgical interventions to treat retinal detachment, vitreous humor removal, and macular hole repairs using the latest global operating microscopes.',
    benefitsAr: [
      'إجراء عمليات استئصال الجسم الزجاجي الدقيقة (27G)',
      'استخدام غاز أو زيت السيلكون لإعادة تثبيت الشبكية',
      'إصلاح ثقوب مركز الإبصار واستعادة النظر',
      'نسب نجاح ممتازة تحت إشراف أستاذ بقصر العيني'
    ],
    benefitsEn: [
      'Micro-incision vitrectomy surgery (27G)',
      'Use of gas or silicone oil to re-attach the retina',
      'Repairing macular holes and restoring central vision',
      'Excellent success rates supervised by Kasr Al-Ainy Professor.'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'تعد جراحات الشبكية والجسم الزجاجي من أدق الجراحات التخصصية في طب العيون، حيث تتطلب مهارة جراحية استثنائية وأجهزة متطورة للغاية. يقدم أ.د. أحمد عبدالله مهلهل رعاية جراحية فائقة الدقة للتعامل مع مختلف اعتلالات الشبكية والجزء الخلفي من العين.',
        contentEn: 'Retinal and vitreous surgeries are among the most delicate specialties in ophthalmology, requiring exceptional surgical skill and highly advanced devices. Prof. Dr. Ahmed Abdullah Mohelhel offers high-precision surgical care to manage various disorders of the retina and posterior segment.'
      },
      {
        type: 'h2',
        contentAr: 'أهم الحالات التي تتطلب تدخل جراحة الشبكية:',
        contentEn: 'Key Cases Requiring Retinal Surgical Intervention:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'انفصال الشبكية (Retinal Detachment): حالة طارئة تنفصل فيها الشبكية عن الأنسجة المغذية لها، ويتم علاجها فورياً بتثبيت الشبكية بالليزر أو حزام العين أو حقن الغاز/السيليكون.',
            contentEn: 'Retinal Detachment: An emergency where the retina peels away from its underlying support tissue. It is treated urgently using lasers, scleral buckling, or gas/silicone injection.'
          },
          {
            contentAr: 'نزيف الجسم الزجاجي: نتيجة مضاعفات السكر أو الجلطات الوريدية، حيث يتم إجراء عملية استئصال الجسم الزجاجي لتنظيف الرؤية.',
            contentEn: 'Vitreous Hemorrhage: Caused by diabetes complications or vein occlusions, requiring vitrectomy to clear the visual pathway.'
          },
          {
            contentAr: 'ثقوب وتليف مركز الإبصار (Macular Hole): يتسبب في تشوه الرؤية وفقدان القدرة على القراءة، ويتم إصلاحه ميكروسكوبياً بنتائج مبشرة.',
            contentEn: 'Macular Hole & Epiretinal Membrane: Causes distorted vision and reading loss, repaired microscopically with highly promising results.'
          }
        ]
      },
      {
        type: 'p',
        contentAr: 'نعتمد في الجراحات على تقنية الـ 27G وهي تقنية فائقة الدقة لعمل فتحات جراحية ميكروسكوبية تلتئم تلقائياً بدون غرز، مما يقلل بشكل كبير من شعور المريض بالضيق بعد العملية ويسرع عملية التعافي.',
        contentEn: 'We implement 27G sutureless vitrectomy technology, allowing microscopic entry ports that heal spontaneously without stitches, greatly reducing post-operative discomfort and accelerating recovery.'
      }
    ]
  },
  {
    id: 'diabetic-retinopathy',
    icon: 'Activity',
    titleAr: 'علاج مضاعفات مرض السكر على الشبكية (الرشح السكري)',
    titleEn: 'Diabetic Retinopathy & Macular Edema Treatment',
    descAr: 'تشخيص دقيق وعلاجات متكاملة للحد من تأثير السكري على العين، بما في ذلك علاج الرشح السكري وعقد جلسات ليزر الشبكية الوقائي.',
    descEn: 'Precise diagnosis and integrated treatments to limit the impact of diabetes on the eye, including diabetic macular edema therapy and protective retinal laser sessions.',
    benefitsAr: [
      'فحص قاع العين والماكولا بجهاز التصوير الطبقي OCT',
      'حقن المواد الدوائية الحديثة لوقف ارتشاح مركز الإبصار',
      'استخدام الليزر الضوئي الأرجون لتثبيت الأوعية الدموية',
      'تجنب التدهور البصري والمحافظة على سلامة النظر'
    ],
    benefitsEn: [
      'Fundus and macular screening using advanced OCT scanners',
      'Injections of modern therapeutics to halt macular edema',
      'Argon photocoagulation laser to stabilize leaking vessels',
      'Preventing visual deterioration and preserving eyesight'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'يعد مرض السكري من أكثر الأمراض المزمنة تأثيراً على سلامة شبكية العين. يسبب الارتفاع المستمر لنسبة السكر في الدم ضعفاً في جدران الشعيرات الدموية المغذية للشبكية، مما يؤدي إلى تسريب السوائل والدم وظهور ما يسمى بالارتشاح السكري بمركز الإبصار.',
        contentEn: 'Diabetes is one of the chronic conditions that impact the retina most severely. Persistent high blood sugar weakens the walls of the tiny blood vessels nourishing the retina, leading to fluid/blood leakage and diabetic macular edema (DME).'
      },
      {
        type: 'h2',
        contentAr: 'بروتوكول علاج الشبكية السكرية بالعيادة:',
        contentEn: 'Diabetic Retinopathy Treatment Protocols at Our Clinic:'
      },
      {
        type: 'ol',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'التصوير الطبقي للشبكية (OCT): جهاز عالي الدقة يصور طبقات مركز الإبصار بالميكرون لقياس مدى سماكة الارتشاح وتحديد خطة العلاج بدقة.',
            contentEn: 'Optical Coherence Tomography (OCT): A micro-precision device that scans retinal layers to measure edema thickness and plan therapy.'
          },
          {
            contentAr: 'الحقن داخل العين (Anti-VEGF): حقن مواد دوائية متطورة تعمل على تثبيط نمو الأوعية الدموية غير الطبيعية وامتصاص الارتشاح بسرعة وأمان.',
            contentEn: 'Intravitreal Injections (Anti-VEGF): Injecting advanced agents that inhibit abnormal blood vessel growth and promote rapid absorption of edema.'
          },
          {
            contentAr: 'ليزر الشبكية (Argon Laser): لعزل المناطق المصابة بنقص التروية الدموية ومنع حدوث نزيف متكرر بالعين.',
            contentEn: 'Retinal Laser (Argon Laser): To seal ischemic areas and prevent recurrent hemorrhages inside the vitreous cavity.'
          }
        ]
      }
    ]
  },
  {
    id: 'retinal-injection',
    icon: 'Droplets',
    titleAr: 'علاج أمراض الشبكية بالحقن (مضادات الالتهاب، الكورتيزون)',
    titleEn: 'Retinal Injections (Anti-VEGF & Corticosteroids)',
    descAr: 'حقن الأدوية المتخصصة ومضادات عامل النمو الوعائي (Anti-VEGF) أو الكورتيزون داخل العين لعلاج ارتشاح مركز الإبصار والاعتلال البقعي.',
    descEn: 'Intravitreal injections of specialized medications, anti-VEGF agents, or corticosteroids inside the eye to treat macular edema and maculopathy.',
    benefitsAr: [
      'إجراء بسيط وسريع يتم داخل غرفة عمليات معقمة',
      'تخدير موضعي بالكامل ولا يسبب أي ألم للمريض',
      'نتائج سريعة ومباشرة في تحسن الرؤية وامتصاص الرشح',
      'تقليل التورم والالتهابات داخل أنسجة العين العميقة'
    ],
    benefitsEn: [
      'Simple, rapid procedure performed in a sterile setting',
      'Full local anesthesia causing absolutely no pain',
      'Rapid, direct results in vision enhancement and fluid absorption',
      'Reduces swelling and deep intraocular inflammation'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'أحدثت تقنية الحقن داخل الجسم الزجاجي طفرة طبية هائلة في علاج أمراض الشبكية التي كانت تؤدي سابقاً لفقدان البصر. من خلال هذه التقنية، يتم إيصال الدواء مباشرة إلى بؤرة المرض بجرعات دقيقة جداً وبأقصى فاعلية ممكنة.',
        contentEn: 'Intravitreal injection technology has brought about a major medical breakthrough in treating retinal diseases that previously led to blindness. This technique delivers medication directly to the target tissue with precise dosing and maximum effectiveness.'
      },
      {
        type: 'h2',
        contentAr: 'أنواع الحقن العلاجية المستخدمة:',
        contentEn: 'Types of Therapeutic Injections Administered:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'مضادات عامل النمو البطاني الوعائي (Anti-VEGF): مثل أيلیا، لوسنتس، وغيرها. تعمل على إيقاف نمو الأوعية الدموية الضعيفة التي تسبب النزيف والرشح.',
            contentEn: 'Anti-VEGF Agents: Such as Eylea, Lucentis, etc. These stop the growth of fragile abnormal blood vessels that cause bleeding and leakage.'
          },
          {
            contentAr: 'حقن الكورتيزون طويلة المفعول: لعلاج حالات الالتهاب المناعي الشديد داخل العين أو الارتشاحات السكرية المستعصية التي لم تستجب للمضادات التقليدية.',
            contentEn: 'Long-acting Corticosteroids: Used to treat severe intraocular inflammation or stubborn diabetic macular edema that is non-responsive to anti-VEGF therapy.'
          }
        ]
      },
      {
        type: 'p',
        contentAr: 'تتم عملية الحقن بالكامل تحت ظروف تعقيم مشددة ووفقاً للمعايير الطبية الدولية المعتمدة لضمان تجنب أي مضاعفات والحصول على أقصى فائدة علاجية.',
        contentEn: 'The injection process is performed under strict sterile conditions following global medical standards to prevent complications and maximize clinical benefit.'
      }
    ]
  },
  {
    id: 'macular-degeneration',
    icon: 'Activity',
    titleAr: 'علاج التغيرات السنية بمركز الإبصار (الاعتلال البقعي السني)',
    titleEn: 'Age-Related Macular Degeneration (AMD) Treatment',
    descAr: 'تشخيص ومتابعة حالات ضمور مركز الإبصار المرتبط بتقدم العمر (النوع الجاف والرطب) وتقديم بروتوكول الحقن العلاجي.',
    descEn: 'Diagnosis and follow-up of age-related macular degeneration (Dry and Wet AMD) and providing advanced therapeutic injection protocols.',
    benefitsAr: [
      'تشخيص دقيق باستخدام الأشعة والصبغات المتطورة وOCT',
      'الحقن الدوري للنوع الرطب للسيطرة على تدهور النظر',
      'إعطاء المكملات الغذائية والفيتامينات للنوع الجاف',
      'إرشادات وقائية ونمط حياة لحماية الخلايا البصرية'
    ],
    benefitsEn: [
      'Accurate diagnosis using advanced imaging and OCT scans',
      'Periodic injections for Wet AMD to control vision loss',
      'Prescribing specific nutritional supplements for Dry AMD',
      'Preventive guidelines and lifestyle advice to shield visual cells'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'يعتبر التحلل البقعي المرتبط بالسن (AMD) المسبب الرئيسي لضعف البصر الحاد لدى كبار السن فوق سن الستين. يؤثر هذا المرض على "البقعة" وهي الجزء المركزي من الشبكية المسؤول عن الرؤية الحادة والتفاصيل الدقيقة كالقراءة والتعرف على الوجوه.',
        contentEn: 'Age-related macular degeneration (AMD) is the leading cause of severe vision loss in adults over 60. It affects the "macula", the central part of the retina responsible for sharp, detailed central vision used for reading and recognizing faces.'
      },
      {
        type: 'h2',
        contentAr: 'أنواع الاعتلال البقعي السني وعلاجها:',
        contentEn: 'Types of AMD and Their Treatments:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'النوع الجاف (Dry AMD): وهو الأكثر شيوعاً، ويتطور ببطء نتيجة تآكل خلايا البقعة. يتم إدارته بالمكملات الغذائية والفيتامينات المخصصة للشبكية لتبطئ تقدم المرض.',
            contentEn: 'Dry AMD: The most common type, developing slowly as macular cells break down. It is managed with specific retinal supplements and vitamins to delay progression.'
          },
          {
            contentAr: 'النوع الرطب (Wet AMD): وهو الأخطر، حيث تنمو أوعية دموية غير طبيعية تحت الشبكية تسرب سوائل ودم وتؤدي لفقدان مفاجئ للنظر. علاجه الأساسي هو الحقن المتكرر بمضادات الـ VEGF لوقف التسريب فوراً.',
            contentEn: 'Wet AMD: The more severe type, where abnormal blood vessels grow beneath the retina, leaking fluid and blood, causing rapid vision loss. Its primary treatment is repeated anti-VEGF injections to dry the leakage.'
          }
        ]
      }
    ]
  },
  {
    id: 'cornea',
    icon: 'Hexagon',
    titleAr: 'جراحة القرنية وتأهيل الإبصار',
    titleEn: 'Corneal Surgery & Vision Rehabilitation',
    descAr: 'تشخيص وعلاج القرنية المخروطية بعمليات التثبيت الضوئي وزراعة الحلقات، بالإضافة لعمليات ترقيع وزراعة القرنية الحديثة.',
    descEn: 'Diagnosis and treatment of keratoconus via cross-linking and intracorneal ring segments (ICRS), alongside modern partial/full corneal transplants.',
    benefitsAr: [
      'تصوير طبوغرافيا القرنية Pentacam بدقة ميكرونية',
      'عملية تثبيت القرنية المخروطية بالفلوريسين والـ UV',
      'زراعة حلقات القرنية بالليزر لتعديل انحنائها',
      'زراعة القرنية الطبقية (DALK/DMEK) ونسب نجاح عالية'
    ],
    benefitsEn: [
      'Pentacam corneal topography with micron-level accuracy',
      'Corneal Cross-Linking (CXL) using Riboflavin & UV light',
      'Femtosecond laser-assisted corneal ring implantation',
      'Lamellar corneal transplantation (DALK/DMEK) with high success'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'القرنية هي الطبقة الشفافة الخارجية للعين وتعمل كعدسة أساسية تركز الضوء. تسبب أمراض القرنية تعتيماً أو تشوهاً في شكلها مما يؤدي لضعف نظر شديد لا يمكن تصحيحه بالنظارات التقليدية.',
        contentEn: 'The cornea is the clear outer layer of the eye acting as the primary window focusing light. Corneal diseases cause opacification or structural distortion, leading to severe vision loss that cannot be corrected by standard glasses.'
      },
      {
        type: 'h2',
        contentAr: 'القرنية المخروطية (Keratoconus):',
        contentEn: 'Keratoconus:'
      },
      {
        type: 'p',
        contentAr: 'مرض يؤدي إلى ترقق تدريجي للقرنية وتحدبها للخارج بشكل مخروطي. تشمل خيارات العلاج المتاحة لدينا عملية تثبيت القرنية (Cross-linking) لإيقاف تدهور المرض، أو زراعة الحلقات بالفيمتوليزر لتحسين جودة الرؤية.',
        contentEn: 'A disease causing progressive thinning and outward bulging of the cornea into a cone shape. Available treatments include Corneal Cross-Linking (CXL) to arrest progression, or ICRS ring implantation to reshape the cornea and improve vision.'
      },
      {
        type: 'h2',
        contentAr: 'زراعة القرنية (ترقيع القرنية):',
        contentEn: 'Corneal Transplantation (Grafting):'
      },
      {
        type: 'p',
        contentAr: 'في حالات العتامات الشديدة أو الندبات، يقوم أ.د. أحمد مهلهل بإجراء عمليات ترقيع القرنية، مستخدماً أحدث الطرق مثل زراعة القرنية الطبقية للحفاظ على طبقات العين السليمة للمريض وتقليل احتمالية رفض الجسم للرقعة.',
        contentEn: 'In cases of severe scarring or opacification, Prof. Dr. Ahmed Mohelhel performs corneal transplants, utilizing advanced lamellar grafting (DALK/DMEK) to preserve the patient\'s healthy corneal layers and reduce tissue rejection risk.'
      }
    ]
  },
  {
    id: 'glaucoma',
    icon: 'Activity',
    titleAr: 'جراحة الجلوكوما (المياه الزرقاء) والمياه الزرقاء المضاعفة',
    titleEn: 'Glaucoma & Complicated Glaucoma Surgery',
    descAr: 'السيطرة التامة على ضغط العين المرتفع لحماية العصب البصري من التلف، من خلال العلاج الدوائي، الليزر، والعمليات الجراحية الدقيقة للمياه الزرقاء.',
    descEn: 'Total control of elevated intraocular pressure to shield the optic nerve from damage, using medical, laser, and advanced surgical interventions.',
    benefitsAr: [
      'فحص ضغط العين والزاوية والمجال البصري بدقة',
      'عمليات تصريف سائل العين التقليدية Trabeculectomy',
      'زرع صمامات الجلوكوما الحديثة للحالات المضاعفة',
      'الحفاظ التام على ما تبقى من النظر ومنع التدهور'
    ],
    benefitsEn: [
      'Precise checking of intraocular pressure, angles, and visual field',
      'Traditional Trabeculectomy drainage operations',
      'Implanting advanced glaucoma valves for complicated cases',
      'Complete preservation of remaining vision to prevent progression'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'تسمى المياه الزرقاء (الجلوكوما) بـ "لص النظر الصامت" نظراً لأنها تتلف ألياف العصب البصري تدريجياً دون أن يشعر المريض بألم أو ضبابية واضحة في البداية. الحفاظ على العصب البصري هو الهدف الأساسي لكافة خططنا العلاجية.',
        contentEn: 'Glaucoma is dubbed the "silent thief of sight" since it destroys optic nerve fibers gradually without initial pain or noticeable blurring. Preserving the optic nerve is the focal point of all our treatment schemes.'
      },
      {
        type: 'h2',
        contentAr: 'متى نلجأ للجراحة؟',
        contentEn: 'When Do We Resort to Surgery?'
      },
      {
        type: 'p',
        contentAr: 'عندما يفشل العلاج بالقطرات في خفض ضغط العين للحد الآمن، أو في حالات المياه الزرقاء الحادة والمضاعفة. نقوم بإجراء عمليات لتسهيل تصريف السوائل خارج العين، أو تركيب صمام جلوكوما متطور (مثل صمام أحمد) لتنظيم الضغط بكفاءة.',
        contentEn: 'When eyedrops fail to lower intraocular pressure to a safe level, or in acute and complicated glaucoma cases. We perform surgeries to ease fluid drainage outside the eye, or implant advanced shunt valves (like the Ahmed Valve) to efficiently regulate pressure.'
      }
    ]
  },
  {
    id: 'eyelid-plastic',
    icon: 'Search',
    titleAr: 'جراحة تجميل الجفون وشد الجفون بالخيوط',
    titleEn: 'Eyelid Blepharoplasty & Thread Lift',
    descAr: 'علاج ترهلات الجفون، إزالة الأكياس الدهنية المنتفخة حول العين، وشد الجفون التجميلي بالخيوط الطبية لتبدو العين أكثر شباباً وصحة.',
    descEn: 'Treatment of droopy eyelids, removal of puffy eye bags, and cosmetic eyelid thread lifting to restore a youthful, healthy look.',
    benefitsAr: [
      'شد الجفون العلوية والسفلية جراحياً وبندبات غير مرئية',
      'إزالة الدهون الزائدة والأكياس المسببة للمظهر المتعب',
      'استخدام خيوط شد الجفون التجميلية بدون جراحة كبيرة',
      'تحسين المظهر الخارجي ومجال الرؤية المتأثر بترهل الجفن'
    ],
    benefitsEn: [
      'Surgical upper and lower blepharoplasty with hidden scars',
      'Removal of herniated fat and bags causing a tired look',
      'Eyelid cosmetic thread lifting with no major surgery',
      'Improving both cosmetic appearance and visual field blocked by droopiness'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'لا يقتصر ترهل الجفون على الجانب التجميلي فحسب، بل قد يتسبب في إعاقة مجال الرؤية العلوي للمريض نتيجة هبوط الجلد الزائد فوق الرموش. تقدم عيادتنا حلولاً تجميلية وعلاجية متكاملة للجفون.',
        contentEn: 'Eyelid sagging is not just a cosmetic issue; it can obstruct the patient\'s superior visual field due to excess skin hanging over the eyelashes. Our clinic provides comprehensive cosmetic and therapeutic solutions for eyelids.'
      },
      {
        type: 'h2',
        contentAr: 'خيارات تجميل وشد الجفون:',
        contentEn: 'Eyelid Lift & Cosmetic Options:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'جراحة تجميل الجفون (Blepharoplasty): يتم فيها التخلص من الترهل والدهون الزائدة عبر شقوق جراحية مخفية تماماً في طيات الجلد الطبيعية.',
            contentEn: 'Blepharoplasty: Removes droopy skin and excess fat bags through surgical incisions hidden in the natural skin folds.'
          },
          {
            contentAr: 'شد الجفون بالخيوط (Thread Lift): تقنية غير جراحية لرفع الحاجب والجفن العلوي لتعطي عيناً مشدودة ومظهراً متألقاً بشكل فوري وبفترة نقاهة قصيرة.',
            contentEn: 'Eyelid Thread Lift: A non-surgical technique to lift the eyebrows and upper eyelids, delivering a pulled-back youthful gaze with minimal recovery time.'
          }
        ]
      }
    ]
  },
  {
    id: 'vein-occlusion',
    icon: 'Activity',
    titleAr: 'التعامل مع جلطات الوريد بالعين',
    titleEn: 'Retinal Vein Occlusion Management',
    descAr: 'إدارة متكاملة وعلاج سريع لحالات انسداد الوريد الشبكي لتجنب فقدان البصر الدائم والسيطرة على الارتشاح والنزيف.',
    descEn: 'Comprehensive management and urgent treatment of retinal vein occlusions to avoid permanent blindness and control macular edema and hemorrhage.',
    benefitsAr: [
      'تشخيص فوري وقياس تدفق الدم بجهاز الـ OCT والصبغات',
      'حقن مضادات الـ VEGF لمنع نمو أوعية دموية ضارة جديدة',
      'علاج الارتشاح البقعي المصاحب للجلطة بفاعلية وسرعة',
      'جلسات ليزر شبكية وقائية لمنع تكرار النزيف والضغط المرتفع'
    ],
    benefitsEn: [
      'Immediate diagnosis and blood flow mapping with OCT & Fluorescein',
      'Anti-VEGF injections to prevent abnormal vessel growth',
      'Highly effective management of post-occlusion macular edema',
      'Protective retinal laser to avoid secondary hemorrhage and glaucoma'
    ],
    body: [
      {
        type: 'p',
        contentAr: 'تحدث جلطة الوريد بالعين (Retinal Vein Occlusion) نتيجة انسداد في الأوردة التي تصرف الدم من الشبكية، مما يسبب تراكم الدم والسوائل ونقص التروية الدموية للأنسجة البصرية. هذه الحالة تتطلب تشخيصاً وعلاجاً سريعاً لمنع حدوث مضاعفات خطيرة كالمياه الزرقاء الثانوية والنزيف المتكرر.',
        contentEn: 'Retinal Vein Occlusion (RVO) occurs when the veins draining blood from the retina become blocked, causing blood and fluid accumulation and lack of oxygen to visual tissues. This condition demands prompt diagnosis and action to prevent complications like secondary neovascular glaucoma.'
      },
      {
        type: 'h2',
        contentAr: 'الخطة العلاجية لجلطات الوريد بالعين:',
        contentEn: 'Treatment Protocol for Retinal Vein Occlusion:'
      },
      {
        type: 'ul',
        contentAr: '',
        contentEn: '',
        items: [
          {
            contentAr: 'حقن العين العلاجي: وهو الركيزة الأساسية لامتصاص الرشح الدموي في مركز الإبصار وتحسين القدرة البصرية بسرعة.',
            contentEn: 'Intravitreal Injections: The cornerstone therapy to absorb hemorrhages, dry macular edema, and rapidly improve visual function.'
          },
          {
            contentAr: 'علاج الشبكية بالليزر: يتم تطبيقه في حالات نقص التروية الشديد (Ischemia) لتدمير الخلايا التالفة التي تفرز عوامل نمو الأوعية الدموية الضارة، مما يحمي العين من النزيف المستقبلي.',
            contentEn: 'Retinal Laser Photocoagulation: Applied in severe ischemic cases to destroy damaged tissues that stimulate abnormal vessel growth, safeguarding the eye.'
          }
        ]
      }
    ]
  }
];

export const getServiceById = (id: string) => {
  return services.find(s => s.id === id);
};
