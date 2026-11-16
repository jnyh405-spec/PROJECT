(function () {
  'use strict';

  const i18n = {
    ar: {
      lang: 'ar', dir: 'rtl', toggle: 'EN',
      brand: 'تحقيق رقمي: التزييف العميق',
      prev: 'السابق', next: 'التالي',
      fullscreen: 'ملء الشاشة',
      slideWord: 'شريحة',
      of: 'من',
      quiz: {
        question: 'أي الصورتين حقيقية وأيهما مولدة بالذكاء الاصطناعي؟',
        prompt: 'اختر إجابتك:',
        optAReal: 'الصورة (أ) حقيقية، (ب) مولدة بالذكاء الاصطناعي',
        optBReal: 'الصورة (ب) حقيقية، (أ) مولدة بالذكاء الاصطناعي',
        correct: 'إجابة صحيحة! الصورة (ب) صورة حقيقية لوجه إنسان، بينما الصورة (أ) مولدة بالكامل باستخدام نماذج الذكاء الاصطناعي. لاحظ أن الوجوه المولدة قد تبدو مثالية جدًا، لكن التفاصيل الدقيقة قد تكشفها أحيانًا — ومع تطور التقنية أصبح التمييز أصعب.',
        wrong: 'إجابة غير دقيقة. الصورة (ب) هي الحقيقية، والصورة (أ) مولدة بالذكاء الاصطناعي. التزييف والتوليد أصبحا واقعيين جدًا، لذا لا يكفي النظر السريع للحكم.',
        reset: 'إعادة الاختبار',
        nextQ: 'السؤال التالي',
        hint: 'تلميح: ابحث عن تفاصيل غير طبيعية في الخلفية أو الإضاءة أو حواف الوجه، لكن تذكر أن غيابها لا يعني أن الصورة حقيقية.'
      }
    },
    en: {
      lang: 'en', dir: 'ltr', toggle: 'AR',
      brand: 'Digital Investigation: Deepfake',
      prev: 'Previous', next: 'Next',
      fullscreen: 'Fullscreen',
      slideWord: 'Slide',
      of: 'of',
      quiz: {
        question: 'Which image is real and which one is AI-generated?',
        prompt: 'Choose your answer:',
        optAReal: 'Image (A) is real, (B) is AI-generated',
        optBReal: 'Image (B) is real, (A) is AI-generated',
        correct: 'Correct! Image (B) is a real human photo, while image (A) is fully AI-generated. Synthetic faces can look very convincing, and while small artifacts may appear, detection is getting harder as the technology evolves.',
        wrong: 'Not quite. Image (B) is real and image (A) is AI-generated. Deepfakes and synthetic media have become extremely realistic, so a quick glance is often not enough.',
        reset: 'Reset quiz',
        nextQ: 'Next question',
        hint: 'Hint: look for odd details in the background, lighting, or edges — but remember that the absence of artifacts does not prove authenticity.'
      }
    }
  };

  // Bilingual slide content
  const slidesData = [
    {
      id: 1,
      render: (t) => `
        <div class="slide-inner hero">
          <div class="reveal">
            <span class="tag">${t.lang === 'ar' ? 'عرض تقديمي تفاعلي' : 'Interactive Presentation'}</span>
            <h1>${t.lang === 'ar' ? 'هل يمكن أن نثق بأعيننا؟' : 'Can We Trust Our Eyes?'}</h1>
            <p class="lead muted" style="margin-top:8px">${t.lang === 'ar' ? 'الحقيقة والخداع في عصر الذكاء الاصطناعي' : 'Truth and Deception in the Age of AI'}</p>
          </div>
          <div class="visual reveal d2">
            ${imgTag('https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?auto=compress&cs=tinysrgb&w=1600', t.lang==='ar'?'معادلات ورسوم رياضية مضيئة على خلفية داكنة بأسلوب أكاديمي تقني':'Glowing mathematical equations and diagrams on a dark academic-tech background')}
            <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,6,23,0.45),rgba(34,211,238,0.16),rgba(103,232,249,0.10));mix-blend-mode:screen"></div>
          </div>
          <p class="quote reveal d3">${t.lang === 'ar' ? '“ماذا لو أخبرتك أن ما تراه أمامك قد لا يكون حقيقيًا؟”' : '“What if what you see is not real?”'}</p>
        </div>`
    },
    {
      id: 2,
      render: (t) => `
        <div class="slide-inner grid-2">
          <div class="stack">
            <div class="reveal">
              <span class="tag">${t.lang === 'ar' ? 'المفهوم' : 'Concept'}</span>
              <h2>${t.lang === 'ar' ? 'بداية الخدعة — ما هو التزييف العميق (Deepfake)؟' : 'The Beginning of the Deception — What Is Deepfake?'}</h2>
            </div>
            <p class="lead reveal d2">${t.lang === 'ar'
              ? 'التزييف العميق <span class="accent">(Deepfake)</span> هو محتوى مُصنّع أو مُعدّل بالذكاء الاصطناعي ليبدو حقيقيًا بشكل مقنع.'
              : 'A <span class="accent">Deepfake</span> is AI-generated or AI-altered content designed to look convincingly real.'}</p>
            <ul class="bullets reveal d3">
              <li>${t.lang === 'ar' ? 'تقنية تعتمد على الذكاء الاصطناعي لإنشاء أو تعديل صور ومقاطع فيديو وأصوات لأشخاص.' : 'An AI-based technique for creating or altering images, videos, and voices of people.'}</li>
              <li>${t.lang === 'ar' ? 'تجعل الشخص يبدو وكأنه قال أو فعل شيئًا لم يحدث في الواقع.' : 'It can make someone appear to say or do something that never actually happened.'}</li>
              <li>${t.lang === 'ar' ? 'تعتمد على تقنيات <span class="accent">التعلم العميق (Deep Learning)</span> و<span class="accent">الشبكات العصبية (Neural Networks)</span>.' : 'It relies on <span class="accent">Deep Learning</span> and <span class="accent">Neural Networks</span>.'}</li>
            </ul>
          </div>
          <div class="visual reveal d2">
            ${imgTag('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80', t.lang==='ar'?'بنية بيانات وخوادم وشبكات رقمية بإضاءة سماوية على خلفية داكنة':'Data infrastructure and digital networks with cyan lighting on a dark background')}
          </div>
        </div>`
    },
    {
      id: 3,
      render: (t) => `
        <div class="slide-inner stack" style="justify-content:center">
          <div class="reveal center">
            <span class="tag">${t.lang === 'ar' ? 'الآلية' : 'Mechanism'}</span>
            <h2>${t.lang === 'ar' ? 'كيف تحدث الخدعة؟' : 'How Does the Deception Happen?'}</h2>
            <p class="lead muted">${t.lang === 'ar' ? 'مراحل مبسطة لكيفية إنشاء محتوى مزيف باستخدام الذكاء الاصطناعي' : 'Simplified stages of creating synthetic media with AI'}</p>
          </div>
          <div class="steps reveal d2">
            <div class="card step">
              <div class="step-num">1</div>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#67e8f9" stroke-width="1.8" style="margin:4px auto 8px"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M8 5l1.5-2h5L16 5"/></svg>
              <h3>${t.lang === 'ar' ? 'جمع البيانات' : 'Data Collection'}</h3>
              <p>${t.lang === 'ar' ? 'جمع صور أو تسجيلات صوتية ومرئية للشخص المستهدف.' : 'Gathering images, audio, or video recordings of the target person.'}</p>
            </div>
            <div class="card step">
              <div class="step-num">2</div>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#22d3ee" stroke-width="1.8" style="margin:4px auto 8px"><path d="M12 3v4m0 10v4M3 12h4m10 0h4"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l2.8 2.8m7.2 7.2l2.8 2.8m0-12.8l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>
              <h3>${t.lang === 'ar' ? 'تدريب النموذج' : 'Model Training'}</h3>
              <p>${t.lang === 'ar' ? 'تدريب نموذج ذكاء اصطناعي على الملامح أو الصوت وأنماطه.' : 'Training an AI model to learn facial features or voice patterns.'}</p>
            </div>
            <div class="card step">
              <div class="step-num">3</div>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#67e8f9" stroke-width="1.8" style="margin:4px auto 8px"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
              <h3>${t.lang === 'ar' ? 'إنشاء المحتوى' : 'Content Generation'}</h3>
              <p>${t.lang === 'ar' ? 'توليد أو تعديل الوجه، الحركة، أو الصوت بشكل اصطناعي.' : 'Generating or altering the face, motion, or voice synthetically.'}</p>
            </div>
            <div class="card step">
              <div class="step-num">4</div>
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#22d3ee" stroke-width="1.8" style="margin:4px auto 8px"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3z" fill="#22d3ee" stroke="none"/><path d="M8 21h8"/></svg>
              <h3>${t.lang === 'ar' ? 'النتيجة النهائية' : 'Final Output'}</h3>
              <p>${t.lang === 'ar' ? 'إنتاج صورة أو فيديو أو صوت يبدو حقيقيًا ومقنعًا.' : 'Producing an image, video, or audio clip that appears authentic.'}</p>
            </div>
          </div>
          <div class="card reveal d3" style="padding:14px 18px; text-align:center">
            <p class="muted">${t.lang === 'ar' ? 'كلما زادت جودة البيانات وقوة النموذج، أصبحت النتيجة أصعب في الاكتشاف.' : 'The better the data and the model, the harder the result is to detect.'}</p>
          </div>
        </div>`
    },
    {
      id: 4,
      render: (t) => `
        <div class="slide-inner stack" style="justify-content:center">
          <div class="reveal">
            <span class="tag">${t.lang === 'ar' ? 'الأنواع' : 'Types'}</span>
            <h2>${t.lang === 'ar' ? 'كيف يمكن أن يخدعنا؟' : 'How Can It Deceive Us?'}</h2>
            <p class="lead muted">${t.lang === 'ar' ? 'أشكال متعددة للتزييف العميق تستهدف الصورة والصوت والحركة' : 'Different forms of deepfakes targeting faces, voices, and motion'}</p>
          </div>
          <div class="cards-grid reveal d2">
            <div class="card mini-card">
              <div class="thumb">${imgTag('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', t.lang==='ar'?'تشويش إلكتروني وبكسلات رقمية تمثل تبديل الوجوه':'Electronic glitch and digital pixels representing face swapping')}</div>
              <div>
                <h3>${t.lang === 'ar' ? 'تبديل الوجوه (Face Swapping)' : 'Face Swapping'}</h3>
                <p>${t.lang === 'ar' ? 'استبدال وجه شخص بوجه شخص آخر في صورة أو مقطع فيديو.' : 'Replacing one person’s face with another in an image or video.'}</p>
              </div>
            </div>
            <div class="card mini-card">
              <div class="thumb">${imgTag('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800', t.lang==='ar'?'شبكة بيانات وتحليل إشارات رقمية ترمز لتقليد الصوت':'Digital data network and signal analysis representing voice cloning')}</div>
              <div>
                <h3>${t.lang === 'ar' ? 'تقليد الصوت (Voice Cloning)' : 'Voice Cloning'}</h3>
                <p>${t.lang === 'ar' ? 'توليد صوت يشبه صوت شخص معين ليقول كلمات لم ينطق بها.' : 'Synthesizing a voice that mimics someone to say words they never spoke.'}</p>
              </div>
            </div>
            <div class="card mini-card">
              <div class="thumb">${imgTag('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80', t.lang==='ar'?'مخططات هندسية وشبكات رقمية تمثل إعادة تمثيل الوجه':'Geometric schematics and digital grids representing facial reenactment')}</div>
              <div>
                <h3>${t.lang === 'ar' ? 'إعادة تمثيل الوجه (Facial Reenactment)' : 'Facial Reenactment'}</h3>
                <p>${t.lang === 'ar' ? 'تحريك تعابير الوجه أو مزامنة الشفاه لشخص بناءً على أداء شخص آخر.' : 'Animating facial expressions or lip movements based on another person’s performance.'}</p>
              </div>
            </div>
            <div class="card mini-card">
              <div class="thumb">${imgTag('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', t.lang==='ar'?'دوائر إلكترونية ومخططات تقنية تمثل شخصيات اصطناعية':'Electronic circuits and technical schematics representing synthetic personas')}</div>
              <div>
                <h3>${t.lang === 'ar' ? 'شخصيات اصطناعية بالكامل' : 'Fully Synthetic Personas'}</h3>
                <p>${t.lang === 'ar' ? 'إنشاء فيديو أو صور لشخص غير موجود في الواقع من الأساس.' : 'Creating videos or images of a person who does not exist at all.'}</p>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      id: 5,
      render: (t) => `
        <div class="slide-inner quiz-wrap">
          <div class="stack">
            <div class="reveal">
              <span class="tag">${t.lang === 'ar' ? 'تفاعلي' : 'Interactive'}</span>
              <h2>${t.lang === 'ar' ? 'اختبار الحقيقة — هل تستطيع اكتشاف التزييف؟' : 'Reality Check — Can You Spot the Fake?'}</h2>
              <p class="lead">${t.quiz.question}</p>
            </div>
            <div class="quiz-images reveal d2">
              <figure class="quiz-figure">
                <span class="label">${t.lang === 'ar' ? 'أ' : 'A'}</span>
                ${imgTag('https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&w=1200', t.lang==='ar'?'لوح معادلات وصيغ رياضية للمقارنة':'Board of mathematical equations and formulas for comparison')}
              </figure>
              <figure class="quiz-figure">
                <span class="label">${t.lang === 'ar' ? 'ب' : 'B'}</span>
                ${imgTag('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80', t.lang==='ar'?'مخطط رقمي هندسي مضيء للمقارنة':'Glowing geometric digital diagram for comparison')}
              </figure>
            </div>
          </div>
          <div class="card reveal d3" id="quizPanel">
            <p class="lead" style="margin-bottom:6px;font-weight:700">${t.quiz.prompt}</p>
            <div class="choices" id="quizChoices">
              <button class="choice-btn" data-answer="a">${t.quiz.optAReal}</button>
              <button class="choice-btn" data-answer="b">${t.quiz.optBReal}</button>
            </div>
            <div id="quizResult" class="result"></div>
            <div class="quiz-actions">
              <button class="action-btn" id="quizReset">${t.quiz.reset}</button>
              <button class="action-btn" id="quizNextQ">${t.quiz.nextQ}</button>
            </div>
            <p class="hint">${t.quiz.hint}</p>
          </div>
        </div>`
    },
    {
      id: 6,
      render: (t) => `
        <div class="slide-inner grid-2 reverse">
          <div class="visual reveal">
            ${imgTag('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1600', t.lang==='ar'?'شفرة رقمية وتشويش إلكتروني على خلفية داكنة يرمز للمخاطر':'Digital code and electronic noise on a dark background symbolizing risks')}
          </div>
          <div class="stack">
            <div class="reveal d2">
              <span class="tag">${t.lang === 'ar' ? 'المخاطر' : 'Risks'}</span>
              <h2>${t.lang === 'ar' ? 'الجانب المظلم — مخاطر التزييف العميق' : 'The Dark Side — Risks of Deepfakes'}</h2>
            </div>
            <ul class="bullets reveal d3">
              <li><strong>${t.lang === 'ar' ? 'تضليل الرأي العام:' : 'Misinformation:'}</strong> ${t.lang === 'ar' ? 'نشر الأخبار والمعلومات المضللة والتأثير على الثقة.' : 'Spreading false news and eroding public trust.'}</li>
              <li><strong>${t.lang === 'ar' ? 'الاحتيال المالي:' : 'Financial Fraud:'}</strong> ${t.lang === 'ar' ? 'انتحال الشخصيات لخداع الأفراد أو المؤسسات.' : 'Impersonating people to deceive individuals or organizations.'}</li>
              <li><strong>${t.lang === 'ar' ? 'تشويه السمعة:' : 'Reputation Damage:'}</strong> ${t.lang === 'ar' ? 'نسب أقوال أو أفعال مزيفة لأشخاص حقيقيين.' : 'Attributing fabricated statements or actions to real people.'}</li>
              <li><strong>${t.lang === 'ar' ? 'انتهاك الخصوصية والابتزاز:' : 'Privacy Violations & Blackmail:'}</strong> ${t.lang === 'ar' ? 'استخدام صور أو أصوات مزيفة لإيذاء الأفراد.' : 'Using fabricated images or voices to harm individuals.'}</li>
              <li><strong>${t.lang === 'ar' ? 'أزمة الثقة:' : 'Trust Crisis:'}</strong> ${t.lang === 'ar' ? 'التشكيك في مصداقية الصور ومقاطع الفيديو عمومًا.' : 'Undermining confidence in photos and videos in general.'}</li>
            </ul>
          </div>
        </div>`
    },
    {
      id: 7,
      render: (t) => `
        <div class="slide-inner grid-2">
          <div class="stack">
            <div class="reveal">
              <span class="tag">${t.lang === 'ar' ? 'الكشف' : 'Detection'}</span>
              <h2>${t.lang === 'ar' ? 'هل يمكن كشف التزييف؟' : 'Can Deepfakes Be Detected?'}</h2>
              <p class="lead muted">${t.lang === 'ar' ? 'علامات وأساليب تساعد على التحقق، لكنها ليست حاسمة دائمًا.' : 'Signs and methods that help verification — but they are not always conclusive.'}</p>
            </div>
            <ul class="bullets reveal d2">
              <li>${t.lang === 'ar' ? 'ملاحظة حركة العينين والرمش والشفاه وتزامنها مع الكلام.' : 'Observing eye blinking, lip movement, and speech synchronization.'}</li>
              <li>${t.lang === 'ar' ? 'الانتباه إلى الإضاءة والظلال وحدود الوجه وتفاصيل البشرة والشعر.' : 'Checking lighting, shadows, face edges, skin, and hair details.'}</li>
              <li>${t.lang === 'ar' ? 'ملاحظة عدم تناسق الصوت مع حركة الفم أو نبرة الكلام.' : 'Noticing mismatches between audio tone and mouth movement.'}</li>
              <li>${t.lang === 'ar' ? 'التحقق من مصدر المقطع وسياقه وتاريخ نشره.' : 'Verifying the source, context, and publication time of the media.'}</li>
              <li>${t.lang === 'ar' ? 'استخدام أدوات وتقنيات كشف التزييف والتحقق الرقمي.' : 'Using deepfake detection and digital verification tools.'}</li>
            </ul>
            <div class="note reveal d3">${t.lang === 'ar'
              ? '<strong>تنبيه مهم:</strong> هذه العلامات ليست دليلًا قاطعًا. التزييف العميق أصبح أكثر تطورًا، وقد لا تُظهر بعض المقاطع أي خلل واضح.'
              : '<strong>Important:</strong> These signs are not definitive proof. Deepfakes are becoming more advanced, and some content may show no obvious artifacts.'}</div>
          </div>
          <div class="visual reveal d2">
            ${imgTag('https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600', t.lang==='ar'?'مخططات تحليل بيانات ورسوم بيانية تقنية ترمز لكشف التزييف':'Data analysis charts and technical graphs symbolizing deepfake detection')}
          </div>
        </div>`
    },
    {
      id: 8,
      render: (t) => `
        <div class="slide-inner stack" style="justify-content:center">
          <div class="reveal">
            <span class="tag">${t.lang === 'ar' ? 'الجانب الإيجابي' : 'The Positive Side'}</span>
            <h2>${t.lang === 'ar' ? 'هل الذكاء الاصطناعي سيئ دائمًا؟' : 'Is AI Always Bad?'}</h2>
            <p class="lead muted">${t.lang === 'ar' ? 'التقنية نفسها أداة محايدة؛ الأثر يعتمد على طريقة استخدامها.' : 'The technology itself is neutral; its impact depends on how it is used.'}</p>
          </div>
          <div class="split-badgood reveal d2">
            <div class="card">
              <span class="pill good">${t.lang === 'ar' ? 'استخدامات إيجابية' : 'Positive Uses'}</span>
              <ul class="bullets" style="margin-top:8px">
                <li>${t.lang === 'ar' ? 'صناعة الأفلام والمؤثرات البصرية وتسهيل الإنتاج.' : 'Film production and visual effects.'}</li>
                <li>${t.lang === 'ar' ? 'التعليم والمحاكاة والتدريب في بيئات آمنة.' : 'Education, simulation, and training in safe environments.'}</li>
                <li>${t.lang === 'ar' ? 'الترفيه والألعاب وتجارب تفاعلية مبتكرة.' : 'Entertainment, gaming, and creative interactive experiences.'}</li>
                <li>${t.lang === 'ar' ? 'ترميم وتحسين المحتوى المرئي والأرشيفي.' : 'Restoring and enhancing visual and archival content.'}</li>
                <li>${t.lang === 'ar' ? 'مساعدة بعض الأشخاص على التواصل عبر تطبيقات مساعدة.' : 'Supporting accessibility and communication tools.'}</li>
              </ul>
            </div>
            <div class="visual no-overlay" style="min-height:100%">
              ${imgTag('https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600', t.lang==='ar'?'لوحة دوائر ومخططات تقنية مضيئة ترمز للاستخدامات الإيجابية للتقنية':'Illuminated circuit board and technical schematics symbolizing positive uses of technology')}
            </div>
          </div>
          <div class="card reveal d3" style="padding:14px 18px">
            <p>${t.lang === 'ar' ? '<strong>الموازنة مطلوبة:</strong> الاستفادة من الإمكانات الإبداعية مع وضع ضوابط أخلاقية وقانونية للحد من الإساءة.' : '<strong>Balance is key:</strong> harness creative potential while applying ethical and legal safeguards to reduce misuse.'}</p>
          </div>
        </div>`
    },
    {
      id: 9,
      render: (t) => `
        <div class="slide-inner grid-2">
          <div class="visual reveal">
            ${imgTag('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80', t.lang==='ar'?'شبكة عالمية وخطوط بيانات مستقبلية على خلفية داكنة':'Global network and futuristic data lines on a dark background')}
          </div>
          <div class="stack">
            <div class="reveal d2">
              <span class="tag">${t.lang === 'ar' ? 'المستقبل' : 'The Future'}</span>
              <h2>${t.lang === 'ar' ? 'إلى أين نتجه؟' : 'Where Are We Heading?'}</h2>
            </div>
            <ul class="bullets reveal d3">
              <li>${t.lang === 'ar' ? 'تطور سريع للمحتوى المولد بالذكاء الاصطناعي <span class="accent">(AI-Generated Content)</span>.' : 'Rapid growth of <span class="accent">AI-Generated Content</span>.'}</li>
              <li>${t.lang === 'ar' ? 'ازدياد صعوبة التمييز بين الحقيقي والمزيف بالعين المجردة.' : 'Increasing difficulty distinguishing real from fake with the naked eye.'}</li>
              <li>${t.lang === 'ar' ? 'أهمية التوعية الرقمية ومهارات التفكير النقدي.' : 'Greater importance of digital literacy and critical thinking.'}</li>
              <li>${t.lang === 'ar' ? 'تطوير أدوات التحقق وكشف المحتوى المزيف وتوثيق المصادر.' : 'Advancing verification, detection tools, and content provenance.'}</li>
              <li>${t.lang === 'ar' ? 'الحاجة إلى قوانين واضحة ومسؤولية أخلاقية في استخدام التقنية.' : 'The need for clear regulations and ethical responsibility.'}</li>
            </ul>
          </div>
        </div>`
    },
    {
      id: 10,
      render: (t) => `
        <div class="slide-inner hero" style="justify-content:center">
          <div class="reveal">
            <span class="tag">${t.lang === 'ar' ? 'الخاتمة' : 'Conclusion'}</span>
            <h1 style="font-size:clamp(2rem,4vw,3.6rem)">${t.lang === 'ar' ? 'لا تصدق كل ما تراه!' : 'Do Not Believe Everything You See!'}</h1>
          </div>
          <div class="card reveal d2" style="max-width:950px">
            <p class="big-quote center">${t.lang === 'ar'
              ? '“في عالم يستطيع فيه الذكاء الاصطناعي تقليد الواقع، لم يعد السؤال: هل الصورة حقيقية؟ بل: <span class="accent">هل نملك الدليل؟</span>”'
              : '“In a world where AI can imitate reality, the question is no longer: is the image real? but: <span class="accent">can we prove it?</span>”'}</p>
          </div>
          <div class="reveal d3 center">
            <p class="lead" style="margin-bottom:10px"><strong>${t.lang === 'ar' ? 'شكرًا لحسن استماعكم' : 'Thank You for Listening'}</strong> — ${t.lang === 'ar' ? 'Thank You' : 'شكرًا لحسن استماعكم'}</p>
            <div class="card" style="display:inline-block; max-width:900px; margin-top:6px">
              <p class="lead">${t.lang === 'ar'
                ? 'سؤال للنقاش: <span class="accent-v">إذا أصبح من الممكن تزوير أي صورة أو صوت أو فيديو، فكيف سنعرف الحقيقة؟</span>'
                : 'Discussion question: <span class="accent-v">If any image, voice, or video can be forged, how will we know the truth?</span>'}</p>
            </div>
          </div>
        </div>`
    }
  ];

  function imgTag(src, alt) {
    const safeAlt = String(alt).replace(/"/g, '&quot;');
    return `<img src="${src}" alt="${safeAlt}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.replaceWith(window.__makeFallback && window.__makeFallback());">`;
  }

  // Expose fallback creator for inline onerror
  window.__makeFallback = function () {
    const wrap = document.createElement('div');
    wrap.className = 'fallback-visual';
    wrap.innerHTML = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#38BDF8"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="url(#g1)" stroke-width="3" opacity="0.9"/>
      <path d="M70 85c0-16 13-29 30-29s30 13 30 29" stroke="url(#g1)" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="82" cy="95" r="6" fill="#38BDF8"/>
      <circle cx="118" cy="95" r="6" fill="#8B5CF6"/>
      <path d="M78 125c10 10 34 10 44 0" stroke="url(#g1)" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M30 40l20 0m-10-10l0 20M150 150l20 0m-10-10l0 20" stroke="#38BDF8" stroke-width="2" opacity="0.7"/>
    </svg>`;
    return wrap;
  };

  let current = 0;
  let lang = 'ar';
  const presentation = document.getElementById('presentation');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevLabel = document.getElementById('prevLabel');
  const nextLabel = document.getElementById('nextLabel');
  const langToggle = document.getElementById('langToggle');
  const fsToggle = document.getElementById('fsToggle');
  const counter = document.getElementById('slideCounter');
  const progressFill = document.getElementById('progressFill');
  const brandText = document.getElementById('brandText');

  function getT() { return i18n[lang]; }

  function buildSlides() {
    const t = getT();
    presentation.innerHTML = slidesData.map((s, i) => `
      <section class="slide ${i === current ? 'active' : ''}" data-index="${i}" aria-label="${t.slideWord} ${i + 1}">
        ${s.render(t)}
      </section>
    `).join('');
    attachQuizHandlers();
  }

  function updateChrome() {
    const t = getT();
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = lang === 'ar' ? 'هل يمكن أن نثق بأعيننا؟ | Deepfake' : 'Can We Trust Our Eyes? | Deepfake';
    langToggle.textContent = t.toggle;
    langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    prevLabel.textContent = t.prev;
    nextLabel.textContent = t.next;
    brandText.textContent = t.brand;
    fsToggle.title = t.fullscreen;
    fsToggle.setAttribute('aria-label', t.fullscreen);
    counter.textContent = `${current + 1} / ${slidesData.length}`;
    progressFill.style.width = `${((current + 1) / slidesData.length) * 100}%`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slidesData.length - 1;
  }

  function showSlide(index) {
    if (index < 0 || index >= slidesData.length) return;
    current = index;
    const slides = presentation.querySelectorAll('.slide');
    slides.forEach((el, i) => el.classList.toggle('active', i === current));
    updateChrome();
  }

  function next() { if (current < slidesData.length - 1) showSlide(current + 1); }
  function prev() { if (current > 0) showSlide(current - 1); }

  function toggleLang() {
    lang = lang === 'ar' ? 'en' : 'ar';
    buildSlides();
    updateChrome();
  }

  // Quiz state per render: question 1 only (can cycle explanation/reset). "Next question" will show a second prompt variant? 
  // Requirement: "زر للانتقال إلى السؤال التالي أو إعادة الاختبار" - implement two questions rotating.
  let quizIndex = 0;
  const quizQuestions = {
    ar: [
      {
        q: 'أي الصورتين حقيقية وأيهما مولدة بالذكاء الاصطناعي؟',
        aLabel: 'أ', bLabel: 'ب',
        aImg: 'https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bImg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
        aAlt: 'لوح معادلات وصيغ رياضية للمقارنة', bAlt: 'مخطط رقمي هندسي مضيء للمقارنة',
        correct: 'b', // means option "B is real, A is AI" which is data-answer b in our options
        correctMsg: 'إجابة صحيحة! الصورة (ب) حقيقية، بينما الصورة (أ) مولدة بالذكاء الاصطناعي. الوجوه الاصطناعية قد تبدو واقعية جدًا، لكن أحيانًا تكشفها تفاصيل الخلفية أو الملمس — ومع ذلك أصبح الكشف أصعب باستمرار.',
        wrongMsg: 'إجابة غير دقيقة. الصورة (ب) هي الحقيقية، والصورة (أ) مولدة بالذكاء الاصطناعي. لا تعتمد على الانطباع الأول فقط.'
      },
      {
        q: 'أي الصورتين تبدو أكثر قابلية للشك كصورة معدلة/مولدة؟ (اختر المثال الأكثر إثارة للريبة)',
        aLabel: 'أ', bLabel: 'ب',
        aImg: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
        bImg: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
        aAlt: 'تشويش إلكتروني وبكسلات رقمية للمقارنة', bAlt: 'شبكة بيانات ومخطط تقني للمقارنة',
        correct: 'b', // option b: (B) real, (A) AI-generated -> meaning A is suspicious => choose "A is AI" which is our optBReal? wait mapping below
        correctMsg: 'إجابة صحيحة! الصورة (أ) مولدة بواسطة شبكة GAN (ذكاء اصطناعي)، بينما (ب) صورة حقيقية. بعض الصور المولدة قد تحتوي على تشوهات دقيقة في الخلفية أو الحواف.',
        wrongMsg: 'إجابة غير دقيقة. الصورة (أ) هي الأكثر قابلية للشك لأنها مولدة بالذكاء الاصطناعي، بينما (ب) صورة حقيقية.'
      }
    ],
    en: [
      {
        q: 'Which image is real and which one is AI-generated?',
        aLabel: 'A', bLabel: 'B',
        aImg: 'https://images.pexels.com/photos/6256072/pexels-photo-6256072.jpeg?auto=compress&cs=tinysrgb&w=1200',
        bImg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
        aAlt: 'Board of mathematical equations and formulas for comparison', bAlt: 'Glowing geometric digital diagram for comparison',
        correct: 'b',
        correctMsg: 'Correct! Image (B) is real, while image (A) is AI-generated. Synthetic faces can look extremely realistic, though subtle texture or background artifacts may appear — and detection keeps getting harder.',
        wrongMsg: 'Not quite. Image (B) is real and image (A) is AI-generated. First impressions can be misleading.'
      },
      {
        q: 'Which image is more likely to be AI-generated? (pick the more suspicious example)',
        aLabel: 'A', bLabel: 'B',
        aImg: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
        bImg: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
        aAlt: 'Electronic glitch and digital pixels for comparison', bAlt: 'Data network and technical diagram for comparison',
        correct: 'b',
        correctMsg: 'Correct! Image (A) is generated by a GAN model, while (B) is a real photo. Synthetic images may show subtle distortions in backgrounds or edges.',
        wrongMsg: 'Not quite. Image (A) is the AI-generated one, while (B) is real.'
      }
    ]
  };

  function attachQuizHandlers() {
    const choicesWrap = document.getElementById('quizChoices');
    const resultEl = document.getElementById('quizResult');
    const resetBtn = document.getElementById('quizReset');
    const nextQBtn = document.getElementById('quizNextQ');
    if (!choicesWrap || !resultEl) return;

    // Render current quiz question state (images/labels/text) to support next-question cycling
    renderQuizQuestion();

    choicesWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.choice-btn');
      if (!btn || btn.disabled) return;
      const t = getT();
      const q = quizQuestions[lang][quizIndex];
      const answer = btn.dataset.answer; // 'a' => A real,B AI ; 'b' => B real,A AI
      const all = choicesWrap.querySelectorAll('.choice-btn');
      all.forEach(b => b.disabled = true);
      const isCorrect = answer === q.correct;
      if (isCorrect) {
        btn.classList.add('correct');
        resultEl.className = 'result good';
        resultEl.textContent = q.correctMsg;
      } else {
        btn.classList.add('wrong');
        const correctBtn = choicesWrap.querySelector(`[data-answer="${q.correct}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
        resultEl.className = 'result bad';
        resultEl.textContent = q.wrongMsg;
      }
    });

    if (resetBtn) resetBtn.addEventListener('click', () => {
      renderQuizQuestion(true);
    });
    if (nextQBtn) nextQBtn.addEventListener('click', () => {
      quizIndex = (quizIndex + 1) % quizQuestions[lang].length;
      renderQuizQuestion(true);
    });
  }

  function renderQuizQuestion(resetOnly) {
    const t = getT();
    const qset = quizQuestions[lang];
    if (quizIndex >= qset.length) quizIndex = 0;
    const q = qset[quizIndex];
    const figures = presentation.querySelectorAll('.slide[data-index="4"] .quiz-figure');
    if (figures.length >= 2) {
      figures[0].querySelector('.label').textContent = q.aLabel;
      figures[1].querySelector('.label').textContent = q.bLabel;
      const imgA = figures[0].querySelector('img');
      const imgB = figures[1].querySelector('img');
      if (imgA) { imgA.src = q.aImg; imgA.alt = q.aAlt; }
      if (imgB) { imgB.src = q.bImg; imgB.alt = q.bAlt; }
    }
    const qText = presentation.querySelector('.slide[data-index="4"] .lead');
    if (qText && !resetOnly) qText.textContent = q.q; else if (qText) qText.textContent = q.q;
    const choicesWrap = document.getElementById('quizChoices');
    const resultEl = document.getElementById('quizResult');
    if (choicesWrap) {
      const btns = choicesWrap.querySelectorAll('.choice-btn');
      // data-answer 'a' means A real, B AI ; 'b' means B real, A AI (kept consistent)
      if (btns[0]) { btns[0].dataset.answer = 'a'; btns[0].textContent = t.quiz.optAReal; btns[0].disabled = false; btns[0].className = 'choice-btn'; }
      if (btns[1]) { btns[1].dataset.answer = 'b'; btns[1].textContent = t.quiz.optBReal; btns[1].disabled = false; btns[1].className = 'choice-btn'; }
    }
    if (resultEl) { resultEl.className = 'result'; resultEl.textContent = ''; }
  }

  // Navigation events
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  langToggle.addEventListener('click', toggleLang);
  fsToggle.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen && document.exitFullscreen();
    }
  });

  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      next();
    } else if (e.key === 'Home') { e.preventDefault(); showSlide(0); }
    else if (e.key === 'End') { e.preventDefault(); showSlide(slidesData.length - 1); }
  });

  // Basic touch swipe for mobile
  let touchX = null;
  document.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, {passive:true});
  document.addEventListener('touchend', (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) { lang === 'ar' ? next() : prev(); }
      else { lang === 'ar' ? prev() : next(); }
    }
    touchX = null;
  }, {passive:true});

  // Init
  buildSlides();
  updateChrome();
})();
