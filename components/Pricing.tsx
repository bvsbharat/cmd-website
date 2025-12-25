import React from 'react';
import { Check, Sparkles, Zap, Gift, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 font-mono">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight mb-4">Join the early wave</h3>
          <p className="text-gray-500 max-w-xl mx-auto">
            We're building the future of macOS productivity. Help us shape it and secure your spot at the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Beta Plan Card */}
          <div className="relative group p-1 rounded-[2.5rem] bg-gradient-to-b from-brand-accent/20 to-transparent shadow-xl transition-transform hover:scale-[1.02] duration-500">
            <div className="h-full bg-white rounded-[2.4rem] p-10 flex flex-col border border-white">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-accent/20">
                    Currently in Beta
                  </span>
                  <h4 className="text-3xl font-black text-gray-900 tracking-tight">Early Adopter</h4>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-gray-900">$0</div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">For Now</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Full access to all AI Agent capabilities",
                  "Native macOS Notch integration",
                  "Local memory & vision layer",
                  "Unlimited voice-to-command tasks",
                  "Priority Discord support channel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="mt-1 w-4 h-4 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group/btn">
                Download Beta
                <Zap className="w-4 h-4 text-brand-accent group-hover/btn:animate-pulse" />
              </button>
            </div>
          </div>

          {/* Perks Section */}
          <div className="flex flex-col justify-center space-y-8 p-6 lg:p-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest">
                <Gift className="w-4 h-4" />
                The Beta Perk
              </div>
              <h4 className="text-2xl font-bold text-gray-900 tracking-tight">One time opportunity.</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Everyone who joins the SuperAgents Beta today is automatically whitelisted for <strong>exclusive early-adopter pricing</strong> on the upcoming Pro plan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-gray-900">Founding Member status</h5>
                  <p className="text-[11px] text-gray-400">Exclusive badge and role in our community.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-gray-900">Guaranteed Legacy Price</h5>
                  <p className="text-[11px] text-gray-400">Your price will be locked in at our lowest rate ever.</p>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-mono italic">
              * The "Early Adopter" plan refers to the version released during the beta testing period. Paid features will be introduced later this year with exclusive benefits for current users.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
