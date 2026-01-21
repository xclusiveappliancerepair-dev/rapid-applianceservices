import { Calendar, Phone, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Some Common Issues of Amana Appliance and Repair Solution | Rapid Appliance Service",
  description:
    "Discover common causes of Amana washer leaks and get professional repair solutions. Learn how to troubleshoot and fix Amana appliance issues.",
}

export default function AmanaApplianceIssuesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-navy-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-navy-100 mb-4">
              <Calendar className="w-4 h-4" />
              <time>March 5, 2024</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Some Common Issues of Amana Appliance and Repair Solution
            </h1>
            <p className="text-xl text-navy-100 text-pretty">
              Discover common causes of Amana washer problems and get professional repair solutions for a leak-free
              laundry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <Image src="/amana-appliance.jpg" alt="Amana Appliance Repair" fill className="object-cover" />
            </div>

            {/* Issue 1: Washer Leaking */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Why is my Amana washer leaking from the bottom?</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Your Amana washer may be leaking from the bottom due to several common issues. One possibility is a
                damaged or loose hose, either the drain hose or the internal water supply hoses, which can develop
                cracks or become disconnected. Another frequent cause is a worn-out pump seal or a faulty water pump,
                which can leak as they age or become defective. Additionally, the tub-to-pump hose might be compromised,
                or there could be an issue with the door seal, especially if the washer is a front-loader. Inspecting
                these components can help identify the exact cause of the leak and determine the Amana washer necessary
                repairs.
              </p>

              <div className="bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-coral-500" />
                  Solution - Step-by-Step Troubleshooting Guide
                </h3>
                <p className="text-neutral-700 mb-6">
                  If your Amana washer is leaking from the bottom, there are several potential causes that you can
                  investigate and address. Here's a step-by-step guide to help you diagnose and fix the issue:
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">1. Check the Water Supply Hoses</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> Loose or damaged water supply hoses can cause leaks.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Turn off the washer and disconnect the power supply.</li>
                      <li>Inspect the hoses for any cracks, splits, or loose connections.</li>
                      <li>Tighten the connections or replace the hoses if necessary.</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">2. Inspect the Drain Hose</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> A clogged, kinked, or improperly connected drain hose can cause water to
                      leak from the bottom.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Ensure the drain hose is properly connected to the drain pipe or utility sink.</li>
                      <li>Check for any clogs or kinks in the hose and clear them if found.</li>
                      <li>Replace the hose if it is damaged.</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">
                      3. Examine the Door Seal (Front-Load Washers)
                    </h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> A worn-out or damaged door seal (gasket) can allow water to escape
                      during the wash cycle.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>
                        Open the washer door and carefully inspect the seal for any signs of wear, tears, or debris.
                      </li>
                      <li>Clean the seal to remove any dirt or detergent buildup.</li>
                      <li>If the seal is damaged, it will need to be replaced.</li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">4. Look at the Pump and Pump Filter</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> The drain pump or pump filter might be clogged or defective, leading to
                      water leakage.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>
                        Locate the pump and filter, usually accessed through a panel on the front or back of the washer.
                      </li>
                      <li>Place a towel or container to catch any water and carefully remove the filter.</li>
                      <li>Clean the filter and check the pump for any debris or obstructions.</li>
                      <li>If the pump is faulty, it will need to be replaced.</li>
                    </ul>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">5. Check the Tub-to-Pump Hose</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> The hose that connects the tub to the pump might be loose, cracked, or
                      damaged.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Inspect the hose for any signs of wear or damage.</li>
                      <li>Tighten any loose clamps or connections.</li>
                      <li>Replace the hose if it shows signs of cracking or leaks.</li>
                    </ul>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">6. Inspect the Water Inlet Valve</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> A faulty water inlet valve can cause water to leak into the washer when
                      it is not in use.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Unplug the washer and locate the water inlet valve.</li>
                      <li>Inspect the valve for any signs of damage or leaks.</li>
                      <li>If the valve is defective, it will need to be replaced.</li>
                    </ul>
                  </div>

                  {/* Step 7 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">
                      7. Check the Washer's Overfill Protection System
                    </h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> The overfill protection switch might be malfunctioning, causing the
                      washer to overfill and leak.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Verify that the switch is functioning correctly by testing it with a multimeter.</li>
                      <li>Replace the switch if it is not working properly.</li>
                    </ul>
                  </div>

                  {/* Step 8 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">8. Examine the Washer's Outer Tub</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> A crack or damage in the outer tub can cause water to leak from the
                      bottom.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>Inspect the outer tub for any visible cracks or damage.</li>
                      <li>
                        If the tub is cracked, it will need to be replaced. This is a more complex repair and might
                        require professional assistance.
                      </li>
                    </ul>
                  </div>

                  {/* Step 9 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">9. Check for Internal Leaks</h4>
                    <p className="text-neutral-700 mb-3">
                      <strong>Problem:</strong> Internal components such as the water level sensor, internal hoses, or
                      connections might be leaking.
                    </p>
                    <p className="text-neutral-700 font-semibold mb-2">Solution:</p>
                    <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                      <li>This will require opening the washer cabinet to inspect internal components.</li>
                      <li>
                        Look for any signs of water leaks inside the washer and tighten or replace any faulty
                        components.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                  <h4 className="font-bold text-navy-900 mb-2">Final Steps:</h4>
                  <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                    <li>
                      After identifying and addressing the cause of the leak, run a short test cycle to ensure the issue
                      has been resolved.
                    </li>
                    <li>
                      If the problem persists or if you are uncomfortable performing any of these steps, consider
                      contacting a professional appliance repair technician for assistance.
                    </li>
                  </ul>
                  <p className="mt-4 text-neutral-700">
                    By systematically checking these potential causes, you can identify and fix the source of the leak
                    in your Amana washer.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section 1 */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Professional Help with Your Amana Washer?</h3>
                <p className="text-lg mb-6 text-primary-foreground/90">
                  Our expert technicians are ready to diagnose and repair your Amana appliances. Get same-day service
                  and guaranteed results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="tel:877-770-0157">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (877) 770-0157
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/contact">Schedule Repair</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Issue 2: Lid Lock */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">How to unlock the lid on an Amana washer?</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Unlocking the lid on an Amana washer can be straightforward if you follow these steps. However, the
                exact method may vary depending on the specific model of your washer. Here are some general steps to
                unlock the lid:
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  Solution - Step-by-Step Guide
                </h3>

                <div className="space-y-6">
                  {/* Lid Step 1 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Pause the Cycle</h4>
                    <p className="text-neutral-700">
                      If the washer is running, press the "Pause" or "Stop" button on the control panel. This will halt
                      the washing cycle and might unlock the lid automatically after a few seconds.
                    </p>
                  </div>

                  {/* Lid Step 2 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Wait for the Lock Mechanism to Release</h4>
                    <p className="text-neutral-700">
                      Some models have a lid lock mechanism that automatically releases a few minutes after the cycle
                      has ended. Wait for 2-5 minutes after the cycle completes.
                    </p>
                  </div>

                  {/* Lid Step 3 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Unplug the Washer</h4>
                    <p className="text-neutral-700">
                      If the lid remains locked, unplug the washer from the electrical outlet. Wait for about 10 minutes
                      to allow any residual power to dissipate. This might reset the electronic controls and unlock the
                      lid.
                    </p>
                  </div>

                  {/* Lid Step 4 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Check for Error Codes</h4>
                    <p className="text-neutral-700">
                      If there's an error code displayed, consult the washer's manual to understand the specific issue.
                      Resolving the error may unlock the lid.
                    </p>
                  </div>

                  {/* Lid Step 5 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Manual Release Mechanism</h4>
                    <p className="text-neutral-700">
                      Some Amana washers have a manual release mechanism accessible from inside the machine. Refer to
                      the user manual to locate this mechanism. It often involves using a thin object like a plastic
                      card or screwdriver to trigger the release.
                    </p>
                  </div>

                  {/* Lid Step 6 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Check the Lid Lock Assembly</h4>
                    <p className="text-neutral-700">
                      Sometimes, the lid lock assembly might be faulty. Inspect it for any visible damage. If damaged,
                      it may need to be replaced. This is often the case if the lid lock fails frequently.
                    </p>
                  </div>

                  {/* Lid Step 7 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Reset the Washer</h4>
                    <p className="text-neutral-700">
                      Perform a master reset by unplugging the washer, waiting for about 10 minutes, and then plugging
                      it back in. This can reset the control board and unlock the lid.
                    </p>
                  </div>

                  {/* Lid Step 8 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Cycle Selector Switch</h4>
                    <p className="text-neutral-700">
                      Turn the cycle selector knob to the "Off" position, wait for a few seconds, then try opening the
                      lid. Sometimes toggling through different cycle options helps reset the lock.
                    </p>
                  </div>

                  {/* Lid Step 9 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Consult the User Manual</h4>
                    <p className="text-neutral-700">
                      Refer to the user manual for model-specific instructions on unlocking the lid. There might be
                      unique procedures for your particular model.
                    </p>
                  </div>

                  {/* Lid Step 10 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Contact Customer Support</h4>
                    <p className="text-neutral-700">
                      If none of the above methods work, contact Amana customer support for assistance. There might be a
                      specific issue with your washer that requires professional service.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Safety Tips
                  </h4>
                  <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                    <li>
                      <strong>Avoid Forcing the Lid:</strong> Forcing the lid open can cause damage to the washer and
                      the locking mechanism.
                    </li>
                    <li>
                      <strong>Turn Off Power:</strong> Always ensure the washer is unplugged before attempting any
                      manual unlocking methods to avoid electrical hazards.
                    </li>
                    <li>
                      <strong>Check for Water:</strong> If the washer is still full of water, be cautious of possible
                      spillage when you eventually unlock the lid.
                    </li>
                  </ul>
                  <p className="mt-4 text-neutral-700">
                    By following these steps, you should be able to unlock the lid on your Amana washer. If persistent
                    issues occur, professional repair might be necessary.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Expert Amana Appliance Repair Services</h3>
                <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
                  Don't let appliance problems disrupt your daily routine. Our certified technicians specialize in Amana
                  appliance repairs and are ready to help you today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="tel:877-770-0157">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (877) 770-0157
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
