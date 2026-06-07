import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use — Unimate',
  description: 'Terms and conditions for using the Unimate platform.',
}

export default function TermsOfUsePage() {
  return (
    <div className="w-full">

      {/* Page hero */}
      <section className="w-full brand-gradient py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white">Terms of Use</h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">

        {/* ── Georgian version ─────────────────────────────────────── */}
        <section className="space-y-6 text-gray-700">
          <h2 className="font-display text-3xl md:text-4xl text-brand-navy">გამოყენების პირობები</h2>
          <p className="text-base leading-relaxed font-bold">
            კეთილი იყოს თქვენი მობრძანება Unimate-ზე – სტუდენტურ სოციალურ პლატფორმაზე, რომელიც შექმნილია სტუდენტების დასაკავშირებლად ერთმანეთთან საერთო ინტერესების მეშვეობით. გამოყენების პირობები არეგულირებს თქვენს წვდომასა და გამოყენებას პლატფორმის, მათ შორის ყველა ჩვენთან ასოცირებული აპლიკაციისა და სერვისის.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">1. პირობების მიღება</h3>
            <p className="text-base leading-relaxed font-bold">პლატფორმაზე რეგისტრაციით ან გამოყენებით, თქვენ თანხმდებით შეასრულოთ და დაემორჩილოთ ამ წესებს. თუ არ ეთანხმებით, გთხოვთ, ნუ გამოიყენებთ სერვისს.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">2. უფლებამოსილება</h3>
            <p className="text-base leading-relaxed font-bold">თქვენ უნდა იყოთ:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />სტუდენტი, კურსდამთავრებული ან თანამშრომელი მოქმედი საუნივერსიტეტო ელფოსტით</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />მინიმუმ 17 წლის. Unimate იტოვებს უფლებას გადაამოწმოს თქვენი უფლებამოსილება.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">3. ანგარიშის რეგისტრაცია</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />რეგისტრაციისთვის საჭიროა ზუსტი პირადი და აკადემიური მონაცემები.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />თქვენ პასუხისმგებელი ხართ თქვენი ანგარიშის მონაცემების კონფიდენციალურობის შენარჩუნებაზე.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />არასწორი ინფორმაციის მოწოდებამ შეიძლება გამოიწვიოს დროებითი შეჩერება ან გაუქმება ანგარიშის.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">4. მომხმარებლის ვალდებულებები</h3>
            <p className="text-base leading-relaxed font-bold">თქვენ ეთანხმებით:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />გამოიყენოთ პლატფორმა კანონიერი, საგანმანათლებლო და ქომუნითების შემქმნელი მიზნებისთვის</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />თავი შეიკავოთ სხვების შევიწროვებისგან, შეურაცხყოფისგან ან სხვის სახელით საუბრისგან.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />არ ატვირთოთ მავნე ან შეურაცხმყოფელი კონტენტი</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />პატივი სცეთ სხვების ინტელექტუალური საკუთრების უფლებებს</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">5. პლატფორმის ფუნქციები</h3>
            <p className="text-base leading-relaxed font-bold">Unimate საშუალებას გაძლევთ:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />შეუერთდეთ/შექმნათ სტუდენტური კლუბები და ჯგუფები</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />მონაწილეობა მიიღოთ ღონისძიებებსა და აქტივობებში</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />ისაუბროთ ჩატისა და ფორუმების მეშვეობით</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />წვდომა გქონდეთ უნივერსიტეტის სპეციფიკურ რესურსებსა და განცხადებებზე</li>
            </ul>
            <p className="text-base leading-relaxed font-bold">გარკვეული პრემიუმ ფუნქციები შეიძლება მოითხოვდეს გამოწერას (იხ. 9-ე განყოფილება).</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">6. კონტენტის საკუთრება და გამოყენება</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />მომხმარებლები ინარჩუნებენ თავიანთი ორიგინალური კონტენტის საკუთრებას</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />კონტენტის გამოქვეყნებით, თქვენ გადაცემთ Unimate-ს არაექსკლუზიურ, უფლებას მისი გამოყენების, ჩვენების და გაზიარების მიზნით პლატფორმის ფარგლებში</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />ჩვენ ვიტოვებთ უფლებას მოვახდინოთ მოდერაცია ან წავშალოთ კონტენტი, რომელიც არღვევს ამ პირობებს</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">7. კონფიდენციალურობა</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />თქვენი მონაცემები მართულია ჩვენი კონფიდენციალურობის პოლიტიკის შესაბამისად</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />ჩვენ ვიყენებთ საუნივერსიტეტო ელფოსტის მისამართებს მომხმარებლების გადასამოწმებლად და დახურული ქსელის გარემოს შესანარჩუნებლად</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />მგრძნობიარე მონაცემები არასდროს იქნება გაზიარებული მესამე მხარეებთან თქვენი თანხმობის გარეშე</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">8. ქცევის კოდექსი</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />დაიცავით წესები, მათ შორის პატივისცემა და აკადემიური კეთილსინდისიერება.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />თავი შეიკავეთ უნივერსიტეტის კონფიდენციალური მასალის გამოქვეყნებისგან ან დისკრიმინაციაში ჩართვისგან</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />შეურაცხყოფა, ტროლინგი და სპამი გამოიწვევს დროებით შეჩერებას ან მუდმივ გაუქმებას წვდომის.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">9. ფასიანი სერვისები</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Unimate შეიძლება შესთავაზოს პრემიუმ წევრობა მომხმარებლებს</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />გადახდის პირობები და დაბრუნების პოლიტიკა იქნება ნაჩვენები შესყიდვისას</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />სერვისების არაავტორიზებული გადაყიდვა ან გაზიარება აკრძალულია</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">10. შეწყვეტა</h3>
            <p className="text-base leading-relaxed font-bold">Unimate-მა შეიძლება შეაჩეროს ან გააუქმოს თქვენი ანგარიში, თუ:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />დაარღვევთ ამ წესებს ან თემის რეგულაციებს;</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />მონაწილეობთ ისეთ ქმედებაში, რომელიც აზიანებს სხვა მომხმარებლებს ან პლატფორმას.</li>
            </ul>
            <p className="text-base leading-relaxed font-bold">თქვენ შეგიძლიათ ნებისმიერ დროს მოითხოვოთ თქვენი ანგარიშის წაშლა.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">11. პასუხისმგებლობა და უარყოფა</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Unimate მოწოდებულია &ldquo;როგორც არის&rdquo; გარანტიების გარეშე.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />არ ვიღებთ პასუხისმგებლობას მომხმარებლის მიერ შექმნილ შინაარსზე ან მესამე მხარის ბმულებზე.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />არ ვიძლევით გარანტიას უწყვეტი წვდომის ან მონაცემთა დაკარგვის თავიდან აცილების შესახებ.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">12. წესების ცვლილება</h3>
            <p className="text-base leading-relaxed font-bold">შესაძლოა შევცვალოთ წესები. არსებითი ცვლილებები გამოცხადდება პლატფორმაზე ან ელფოსტით. ცვლილებების შემდეგ პლატფორმის გაგრძელებული გამოყენება ნიშნავს თქვენს თანხმობას.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">13. მმართველი კანონი</h3>
            <p className="text-base leading-relaxed font-bold">ეს წესები რეგულირდება და ინტერპრეტირდება საქართველოს კანონმდებლობის მიხედვით. ყველა დავა გადაწყდება საქართველოს სასამართლოებში.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">14. კონტაქტი</h3>
            <p className="text-base leading-relaxed font-bold">
              თუ გაქვთ შეკითხვები ამ წესებთან დაკავშირებით, დაგვიკავშირდით:{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">
                info@unimate.ge
              </a>
            </p>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────── */}
        <div className="border-t border-gray-200" />

        {/* ── English version ──────────────────────────────────────── */}
        <section className="space-y-6 text-gray-700">
          <h2 className="font-display text-3xl md:text-4xl text-brand-navy">Terms of Use</h2>
          <p className="text-base leading-relaxed font-bold">
            Welcome to Unimate – a university-based social platform designed to connect students through communities and shared interests. These Terms of Use govern your access to and use of our platform, including all associated applications and services.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">1. Acceptance of Terms</h3>
            <p className="text-base leading-relaxed font-bold">By registering or using the platform, you agree to comply with and be bound by these Terms. If you do not agree, please do not use the service.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">2. Eligibility</h3>
            <p className="text-base leading-relaxed font-bold">You must be:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />A university student, alumni, or staff with a valid institutional email.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />At least 17 years old. Unimate reserves the right to verify your eligibility.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">3. Account Registration</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Registration requires accurate personal and academic data.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Misrepresentation may lead to suspension or termination.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">4. User Responsibilities</h3>
            <p className="text-base leading-relaxed font-bold">You agree to:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Use the platform for lawful, educational, and community-building purposes.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Avoid harassing, abusing, or impersonating others.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Not upload harmful or offensive content.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Respect the intellectual property rights of others.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">5. Platform Features</h3>
            <p className="text-base leading-relaxed font-bold">Unimate allows you to:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Join/create student clubs and communities.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Participate in events and discussions.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Communicate via chat and forums.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Access university-specific resources and announcements.</li>
            </ul>
            <p className="text-base leading-relaxed font-bold">Certain premium features may require a subscription (see Section 9).</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">6. Content Ownership &amp; Usage</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Users retain ownership of their original content.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />By posting content, you grant Unimate a non-exclusive, royalty-free license to use, display, and share it within the platform.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />We reserve the right to moderate or remove content that violates these Terms.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">7. Privacy</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Your data is handled in accordance with our Privacy Policy.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />We use institutional email addresses to verify users and maintain a closed network environment.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Sensitive data will never be shared with third parties without your consent.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">8. Code of Conduct</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Follow community guidelines, including respectful communication and academic integrity.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Refrain from posting confidential university material or engaging in discrimination.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Abuse, trolling, and spam will result in suspension or a permanent ban.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">9. Paid Services</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Unimate may offer premium memberships for clubs or organizations.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Fees, payment terms, and refund policies will be displayed at checkout.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Unauthorized resale or sharing of services is prohibited.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">10. Termination</h3>
            <p className="text-base leading-relaxed font-bold">Unimate may suspend or terminate your account if:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />You violate these Terms or community rules.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />You engage in conduct harmful to other users or the platform.</li>
            </ul>
            <p className="text-base leading-relaxed font-bold">You may request deletion of your account at any time.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">11. Liability &amp; Disclaimer</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />Unimate is provided &ldquo;as-is&rdquo; with no warranties.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />We are not liable for user-generated content or third-party links.</li>
              <li className="flex gap-2 text-base font-bold leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta" />We do not guarantee uninterrupted access or data loss prevention.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">12. Changes to Terms</h3>
            <p className="text-base leading-relaxed font-bold">We may update these Terms. Material changes will be announced via the platform and/or email. Continued use after changes implies acceptance.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">13. Governing Law</h3>
            <p className="text-base leading-relaxed font-bold">These Terms are governed by and shall be interpreted under the laws of Georgia. Any disputes shall be resolved through the courts of Georgia.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl text-black">14. Contact</h3>
            <p className="text-base leading-relaxed font-bold">
              If you have questions about these Terms, contact us at:{' '}
              <a href="mailto:info@unimate.ge" className="text-brand-magenta hover:underline">
                info@unimate.ge
              </a>
            </p>
          </div>
        </section>

      </article>
      <Footer />
    </div>
  )
}
