import { Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const commonProblems = [
  {
    title: "Refrigerator Not Cooling Properly",
    causes: "Dirty condenser coils, faulty thermostat, or damaged door seals.",
    tips: [
      "Clean the condenser coils: Dust and dirt can accumulate on the coils, making it harder for the fridge to maintain a cold temperature. Clean the coils every six months.",
      "Check the thermostat setting: Ensure that the temperature is set to the correct level, typically between 35°F and 38°F for the refrigerator section.",
      "Inspect door seals: A worn-out seal can cause cool air to escape. If the seal is damaged, it needs to be replaced.",
    ],
  },
  {
    title: "Refrigerator Is Making Unusual Noises",
    causes: "Faulty evaporator fan, condenser fan, or defrost timer.",
    tips: [
      "Inspect the fans: If you hear a rattling noise, it could be due to an obstruction in the fan blades. Make sure they are clean and free of debris.",
      "Check for ice buildup: If the evaporator fan is making a loud noise, there may be ice buildup around the fan motor. Defrost the area and check if the noise stops.",
    ],
  },
  {
    title: "Water Pooling Inside the Refrigerator",
    causes: "Clogged defrost drain, faulty water filter, or leaking water line.",
    tips: [
      "Clear the defrost drain: If the defrost drain is clogged with food particles or debris, it can cause water to pool inside the fridge. Use a pipe cleaner or warm water to clear the blockage.",
      "Check the water filter: A clogged water filter can cause leaks. Replace the filter regularly, according to the manufacturer's instructions.",
    ],
  },
  {
    title: "Fridge Freezing Food",
    causes: "Faulty temperature control, broken thermostat, or incorrect fridge setting.",
    tips: [
      "Adjust the temperature settings: If food is freezing in the fridge, try adjusting the thermostat to a warmer setting.",
      "Check the temperature control: If adjusting the settings doesn't help, the temperature control might be malfunctioning and may need replacement.",
    ],
  },
  {
    title: "Fridge Leaking Water",
    causes: "Clogged defrost drain, broken water line, or faulty door seal.",
    tips: [
      "Inspect the water line: Check for any cracks or leaks in the water supply line, especially if your refrigerator has an ice maker or water dispenser.",
      "Check the door seal: A poor seal can allow moisture to accumulate around the door, leading to leaks. Replace any worn-out seals.",
    ],
  },
]

const maintenanceTips = [
  "Clean the condenser coils regularly: This helps keep your fridge running efficiently.",
  "Check and replace door seals as needed: A tight seal helps maintain temperature control.",
  "Avoid overloading the fridge: This ensures proper airflow and efficient cooling.",
  "Defrost regularly: If your refrigerator is not frost-free, regular defrosting prevents ice buildup.",
]

export default function RefrigeratorRepairBlogPost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Link href="/blog" className="text-coral-400 hover:text-coral-300 mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional Refrigerator Repair Services: Keeping Your Appliances Cool and Efficient
            </h1>
            <p className="text-lg text-navy-100">
              The Ultimate Guide to Refrigerator Repair: Tips, Troubleshooting, and Professional Help
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Refrigerators are essential household appliances that keep our food fresh and drinks cold. But like all
                appliances, they are prone to issues over time. Whether your fridge is making strange noises, failing to
                cool properly, or leaking water, understanding the common refrigerator problems and how to fix them can
                save you time and money. This guide will walk you through some of the most common refrigerator issues,
                offer troubleshooting tips, and explain when it's time to call a professional for repair.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-navy-900">
                Common Refrigerator Problems and How to Fix Them
              </h2>

              {commonProblems.map((problem, index) => (
                <div key={index} className="mb-8 bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                  <h3 className="text-2xl font-bold mb-4 text-navy-900">{problem.title}</h3>
                  <div className="mb-4">
                    <p className="font-semibold text-coral-500 mb-2">Possible Causes:</p>
                    <p className="text-neutral-700">{problem.causes}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-3">Troubleshooting Tips:</p>
                    <ul className="space-y-2">
                      {problem.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-1" />
                          <span className="text-neutral-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <h2 className="text-3xl font-bold mb-6 text-navy-900 mt-12">
                When to Call a Professional Refrigerator Repair Service
              </h2>

              <div className="bg-gradient-to-br from-coral-50 to-neutral-50 rounded-2xl p-8 mb-8">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  While DIY repairs can be effective for minor issues, some problems are best handled by a professional
                  repair technician. Here's when you should call for help:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900">Frequent or Persistent Problems:</strong>
                      <span className="text-neutral-700">
                        {" "}
                        If your refrigerator keeps breaking down despite regular troubleshooting, it may indicate a
                        deeper issue that requires professional expertise.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900">Electrical Problems:</strong>
                      <span className="text-neutral-700">
                        {" "}
                        If your refrigerator is experiencing electrical issues, such as a broken compressor or
                        malfunctioning circuit board, these repairs can be dangerous and should only be done by a
                        licensed technician.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900">Refrigerator Not Running at All:</strong>
                      <span className="text-neutral-700">
                        {" "}
                        If your refrigerator is completely nonfunctional, the issue could be with the compressor or
                        motor. This typically requires professional assistance to diagnose and repair.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-navy-900">Expensive Parts Replacement:</strong>
                      <span className="text-neutral-700">
                        {" "}
                        If your refrigerator needs major parts replaced, like the compressor or evaporator coils, it
                        might be more cost-effective to replace the fridge rather than repair it.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-navy-900">Tips for Maintaining Your Refrigerator</h2>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 mb-8">
                <ul className="space-y-3">
                  {maintenanceTips.map((tip, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-1" />
                      <span className="text-neutral-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-navy-900">Conclusion</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Refrigerator repair doesn't have to be a hassle if you know what to look for and how to troubleshoot
                common issues. From cooling problems to strange noises, many refrigerator issues can be solved with
                simple maintenance or minor repairs. However, when in doubt, it's always best to call a professional
                repair service to ensure your appliance is fixed correctly and safely.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-3xl p-12 text-center text-white mt-12">
              <h3 className="text-3xl font-bold mb-4">Need Professional Refrigerator Repair?</h3>
              <p className="text-xl mb-8 text-coral-50">
                Contact Rapid Appliance Service today for expert refrigerator repair in Palm Springs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:877-770-0157"
                  className="inline-flex items-center justify-center gap-2 bg-white text-coral-500 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  877-770-0157
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
