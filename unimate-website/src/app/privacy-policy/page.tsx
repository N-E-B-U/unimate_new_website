import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Unimate',
  description: 'Learn how Unimate collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">

      {/* Page hero */}
      <section className="w-full brand-gradient py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white">Privacy Policy</h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">

        {/* ── Georgian version ─────────────────────────────────────── */}
        <section className="space-y-6 text-gray-700">
          <h2 className="font-display text-3xl md:text-4xl text-brand-navy">კონფიდენციალურობის პოლიტიკა</h2>
          <p className="text-base leading-relaxed font-bold">
            Unimate-ში ჩვენ ვიცავთ თქვენს კონფიდენციალურობას. ეს კონფიდენციალურობის პოლიტიკა განმარტავს, როგორ ვაგროვებთ, ვიყენებთ, ვავრცელებთ და ვიცავთ თქვენს ინფორმაციას ჩვენი პლატფორმის გამოყენებისას. გთხოვთ, ყურადღებით გაეცნოთ ამ პოლიტიკას. Unimate-ის გამოყენებით, თქვენ ეთანხმებით აქ აღწერილ პირობებს.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">1. ინფორმაცია, რომელსაც ვაგროვებთ</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ შეგვიძლია შევაგროვოთ შემდეგი ტიპის ინფორმაცია:</p>
            <p className="text-base font-bold text-gray-800 mt-2">ა. პირადი ინფორმაცია</p>
            <ul className="space-y-1 ml-4">
              {['სრული სახელი, ასაკი, სქესი', 'უნივერსიტეტის სახელი, ფაკულტეტი, აკადემიური დონე', 'საუნივერსიტეტო ელ-ფოსტის მისამართი', 'პროფილის ფოტო და BIO (თუ მოწოდებულია)', 'სოციალური მედიის ბმულები (მაგ., LinkedIn)'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base font-bold text-gray-800 mt-3">ბ. გამოყენების ინფორმაცია</p>
            <ul className="space-y-1 ml-4">
              {['IP მისამართი და მოწყობილობის ინფორმაცია', 'შესვლის დრო და აქტივობის ჟურნალები', 'ურთიერთქმედება სხვა მომხმარებლებთან (პოსტები, კომენტარები, ჩეთები)', 'კლუბებისა და ჯგუფების მონაწილეობის მონაცემები'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base font-bold text-gray-800 mt-3">გ. დამატებითი ინფორმაცია</p>
            <ul className="space-y-1 ml-4">
              {['ინტერესები, ჰობი, ენები', 'სამუშაო და აკადემიური ისტორია', 'კონტენტისა და კომუნიკაციის პრეფერენციები'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">2. როგორ ვიყენებთ თქვენს ინფორმაციას</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ ვიყენებთ თქვენს ინფორმაციას:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Unimate პლატფორმის უზრუნველსაყოფად, ოპერირებისა და შენარჩუნებისთვის',
                'მომხმარებლის გამოცდილების პერსონალიზაციისა და შესაბამისი ჯგუფების შეთავაზებისთვის',
                'პლატფორმის დიზაინისა და ფუნქციონალების გაუმჯობესებისთვის',
                'მომხმარებლებს შორის კომუნიკაციისთვის',
                'პლატფორმის უსაფრთხოების მონიტორინგისა და წესების აღსრულებისთვის',
                'მომხმარებლის მოთხოვნებზე პასუხისთვის',
                'განახლებებისა და სიახლეების მიწოდებისთვის ელ-ფოსტით და აპლიკაციაში შეტყობინებებით',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">3. დამუშავების იურიდიული საფუძველი</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ ვაგროვებთ და ვამუშავებთ პირად მონაცემებს შემდეგ იურიდიულ საფუძვლებზე დაყრდნობით:</p>
            <ul className="space-y-1 ml-4">
              {[
                'თქვენი თანხმობა რეგისტრაციისას ან ნებაყოფლობით ინფორმაციის მიწოდებისას',
                'ხელშეკრულების განხორციელება (გამოყენების პირობები)',
                'ლეგიტიმური ინტერესი (მაგ., პლატფორმის გაუმჯობესება, თაღლითობის აღმოჩენა)',
                'იურიდიული ვალდებულებები საქართველოს კანონმდებლობის შესაბამისად',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">4. ინფორმაციის გაზიარება და გამჟღავნება</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ არ ვყიდით თქვენს მონაცემებს. ჩვენ შეიძლება გავაზიაროთ ინფორმაცია:</p>
            <ul className="space-y-1 ml-4">
              {[
                'შიდა გუნდის წევრებთან პლატფორმის მოვლისა და მოდერაციისთვის',
                'უნივერსიტეტის ადმინისტრაციასთან, თუ ეს თქვენ მიერ არის მკაფიოდ ნებადართული',
                'მესამე მხარის სერვისის პროვაიდერებთან (მაგ., ღრუბლოვანი ჰოსტინგი, ანალიტიკა) მკაცრი კონფიდენციალურობის ხელშეკრულებების ქვეშ',
                'მთავრობასთან ან იურიდიულ ორგანოებთან, თუ ეს კანონით არის მოთხოვნილი',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">5. ქუქისები და თვალყურის დევნება</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ შეიძლება გამოვიყენოთ ქუქისები და მსგავსი ტექნოლოგიები:</p>
            <ul className="space-y-1 ml-4">
              {[
                'თქვენი ამოცნობისთვის, შესვლისას',
                'მოხმარების პროცესის თვალყურის დევნისთვის',
                'პრეფერენციების შენახვისთვის, გაუმჯობესებული ფუნქციონალისთვის',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">თქვენ შეგიძლიათ აკონტროლოთ ქუქისების პარამეტრები თქვენი ბრაუზერის საშუალებით.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">6. მონაცემთა უსაფრთხოება</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ ვიყენებთ:</p>
            <ul className="space-y-1 ml-4">
              {[
                'End-to-end დაშიფვრას მგრძნობიარე მონაცემებისთვის',
                'უსაფრთხო ღრუბლოვან ინფრასტრუქტურას',
                'რეგულარულ დაცულობის შეფასებებს',
                'წვდომის კონტროლისა და მონაცემების მინიმიზაციის პრინციპებს',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">თუმცა, არცერთი სისტემა არ არის 100% უსაფრთხო. ჩვენ გირჩევთ გამოიყენოთ ძლიერი პაროლები და არ გააზიაროთ მგრძნობიარე მონაცემები საზოგადო პოსტებში.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">7. მონაცემების შენახვა</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ ვინახავთ პირად მონაცემებს მხოლოდ იმ ხანგრძლივობით, რაც საჭიროა ზემოთ აღწერილი მიზნების შესასრულებლად ან კანონით მოთხოვნილი ხანგრძლივობით. თქვენ შეგიძლიათ ნებისმიერ დროს მოითხოვოთ ანგარიშის გაუქმება.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">8. თქვენი უფლებები</h3>
            <p className="text-base leading-relaxed font-bold">საქართველოს მონაცემთა დაცვის კანონების თანახმად, თქვენ შეგიძლიათ:</p>
            <ul className="space-y-1 ml-4">
              {[
                'წვდომა გქონდეთ მონაცემებზე, რომლებსაც ჩვენ ვინახავთ თქვენ შესახებ',
                'მოითხოვოთ არაზუსტი ინფორმაციის გასწორება',
                'მოითხოვოთ თქვენი ანგარიშის წაშლა',
                'ნებისმიერ დროს გაუქმოთ თქვენი თანხმობა',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">
              ამ უფლებების განსახორციელებლად დაგვიკავშირდით:{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">info@unimate.ge</a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">9. ბავშვთა კონფიდენციალურობა</h3>
            <p className="text-base leading-relaxed font-bold">Unimate განკუთვნილია 17 წლისა და ზემოთ ასაკის პირებისთვის. ჩვენ ცნობიერად არ ვაგროვებთ მონაცემებს 17 წლამდე ასაკის პირებისგან. თუ ასეთი მონაცემები აღმოჩნდება, ისინი დაუყოვნებლივ წაიშლება.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">10. საერთაშორისო მონაცემთა ტრანსფერები</h3>
            <p className="text-base leading-relaxed font-bold">Unimate ძირითადად მოქმედებს საქართველოში. თუ თქვენი მონაცემები საზღვარგარეთ გადაიცემა (მაგ., ღრუბლოვანი სერვისების საშუალებით), ჩვენ უზრუნველვყოფთ მათ დაცვას ექვივალენტური გარანტიებით.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">11. პოლიტიკის განახლება</h3>
            <p className="text-base leading-relaxed font-bold">ჩვენ შეიძლება პერიოდულად განვაახლოთ კონფიდენციალურობის პოლიტიკა. ცვლილებები გამოქვეყნდება ამ გვერდზე განახლების ძალაში შესვლის თარიღით.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">12. დაგვიკავშირდით</h3>
            <p className="text-base leading-relaxed font-bold">
              კონფიდენციალურობის პოლიტიკასთან დაკავშირებული ნებისმიერი კითხვის შემთხვევაში მოგვწერეთ:{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">info@unimate.ge</a>
            </p>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <div className="border-t border-gray-200" />

        {/* ── English version ──────────────────────────────────────── */}
        <section className="space-y-6 text-gray-700">
          <h2 className="font-display text-3xl md:text-4xl text-brand-navy">Privacy Policy</h2>
          <p className="text-base leading-relaxed font-bold">
            At Unimate, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. By using Unimate, you consent to the practices described herein.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">1. Information We Collect</h3>
            <p className="text-base leading-relaxed font-bold">We may collect the following types of information:</p>
            <p className="text-base font-bold text-gray-800 mt-2">a. Personal Information</p>
            <ul className="space-y-1 ml-4">
              {['Full name, age, gender', 'University name, faculty, academic level', 'Institutional email address', 'Profile photo and bio (if provided)', 'Social links (e.g., LinkedIn – optional)'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base font-bold text-gray-800 mt-3">b. Usage Information</p>
            <ul className="space-y-1 ml-4">
              {['IP address and device information', 'Login timestamps and activity logs', 'Interactions with other users (posts, comments, chats)', 'Club and community participation data'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base font-bold text-gray-800 mt-3">c. Optional Information</p>
            <ul className="space-y-1 ml-4">
              {['Interests, hobbies, languages', 'Employment and academic history', 'Preferences for content and communication'].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">2. How We Use Your Information</h3>
            <p className="text-base leading-relaxed font-bold">We use your information to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Provide, operate, and maintain the Unimate platform',
                'Personalize user experience and suggest relevant communities',
                "Improve the platform's design and functionality",
                'Enable communication between users',
                'Monitor platform safety and enforce community rules',
                'Respond to user support requests',
                'Deliver updates and announcements via email and in-app notifications',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">3. Legal Basis for Processing</h3>
            <p className="text-base leading-relaxed font-bold">We collect and process personal data based on the following legal grounds:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Your consent when you register or voluntarily provide information',
                'Performance of a contract (Terms of Use)',
                'Legitimate interest (e.g., platform improvement, fraud detection)',
                'Legal obligations under Georgian law',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">4. Information Sharing and Disclosure</h3>
            <p className="text-base leading-relaxed font-bold">We do not sell your data. We may share information with:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Internal team members for platform maintenance and moderation',
                'University administration if explicitly permitted by you',
                'Third-party service providers (e.g., cloud hosting, analytics) under strict confidentiality agreements',
                'Government or legal authorities if required by law',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">5. Cookies and Tracking</h3>
            <p className="text-base leading-relaxed font-bold">We may use cookies and similar technologies to:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Recognize you when you log in',
                'Track usage patterns',
                'Store preferences for improved functionality',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">You can control cookie settings through your browser.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">6. Data Security</h3>
            <p className="text-base leading-relaxed font-bold">We employ:</p>
            <ul className="space-y-1 ml-4">
              {[
                'End-to-end encryption for sensitive data',
                'Secure cloud infrastructure',
                'Regular vulnerability assessments',
                'Access controls and data minimization principles',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">However, no system is 100% secure. We encourage you to use strong passwords and avoid sharing sensitive data in public posts.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">7. Data Retention</h3>
            <p className="text-base leading-relaxed font-bold">We retain personal data only as long as necessary to fulfill the purposes described above or as required by law. You may request account deletion at any time.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">8. Your Rights</h3>
            <p className="text-base leading-relaxed font-bold">Under Georgian data protection laws, you may:</p>
            <ul className="space-y-1 ml-4">
              {[
                'Access the data we hold about you',
                'Request correction of inaccurate information',
                'Request deletion of your account',
                'Withdraw your consent at any time',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />{item}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed font-bold">
              To exercise these rights, contact us at{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">info@unimate.ge</a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">9. Children&apos;s Privacy</h3>
            <p className="text-base leading-relaxed font-bold">Unimate is intended for individuals aged 17 and above. We do not knowingly collect data from anyone under 17. If such data is discovered, it will be promptly deleted.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">10. International Data Transfers</h3>
            <p className="text-base leading-relaxed font-bold">Unimate primarily operates in Georgia. If your data is transferred internationally (e.g., through cloud services), we ensure it is protected by equivalent safeguards.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">11. Updates to This Policy</h3>
            <p className="text-base leading-relaxed font-bold">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">12. Contact Us</h3>
            <p className="text-base leading-relaxed font-bold">
              For any questions regarding this Privacy Policy, reach us at:{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">info@unimate.ge</a>
            </p>
          </div>
        </section>

      </article>
      <Footer />
    </div>
  )
}
