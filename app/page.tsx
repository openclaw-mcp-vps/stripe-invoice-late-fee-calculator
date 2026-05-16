export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe Automation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Automatically Add Late Fees to<br />
          <span className="text-[#58a6ff]">Overdue Stripe Invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account, set your late fee rules, and let the app enforce payment terms automatically — no manual follow-up needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For freelancers, agencies &amp; SaaS companies using Stripe.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { icon: "⚡", title: "Webhook-Powered", desc: "Monitors invoice status in real time via Stripe webhooks." },
          { icon: "⚙️", title: "Configurable Rules", desc: "Set grace periods, flat fees, or percentage-based late charges." },
          { icon: "📊", title: "Dashboard", desc: "Track enforcement history and manage rules from one place." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Stripe invoice monitoring",
              "Configurable late fee rules",
              "Automatic line item creation",
              "Enforcement dashboard",
              "Email alerts on fee application",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to Stripe?",
              a: "You provide your Stripe API key and register our webhook endpoint in your Stripe dashboard. We handle the rest automatically."
            },
            {
              q: "Can I customize the late fee amount?",
              a: "Yes. You can set a flat fee, a percentage of the invoice total, or a combination, along with a configurable grace period in days."
            },
            {
              q: "Will my customers be notified?",
              a: "Stripe sends its standard invoice update notifications. You can also configure email alerts within the dashboard to keep customers informed."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Stripe Invoice Late Fee Calculator. All rights reserved.
      </footer>
    </main>
  );
}
