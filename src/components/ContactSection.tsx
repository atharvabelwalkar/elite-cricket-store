import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-section-gap px-6 md:px-12 bg-white border-t border-stone-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="label-sm text-primary-red mb-6 block">Technical Support</span>
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              Consult with our <br />
              <span className="italic font-light">Master Artisans</span>
            </h2>
            <p className="body-md text-stone-500 mb-12 max-w-lg leading-relaxed">
              Whether you need advice on bat weight, protective specifications, or bespoke fittings, our experts are available for private consultations.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-stone-50">
                  <Mail className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <h4 className="label-sm text-black mb-1">Direct Liaison</h4>
                  <p className="text-sm font-medium">concierge@elite-cricket.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-3 bg-stone-50">
                  <Phone className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <h4 className="label-sm text-black mb-1">Performance Desk</h4>
                  <p className="text-sm font-medium">+44 (0) 20 7946 0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-stone-50">
                  <MapPin className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <h4 className="label-sm text-black mb-1">Heritage Workshop</h4>
                  <p className="text-sm font-medium">88 St James's St, London SW1A 1PL, UK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-12">
            <h3 className="label-sm text-black mb-8">Inquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-sm text-stone-400 text-[9px]">Full Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 px-4 py-3 outline-none focus:border-black transition-all text-sm" placeholder="ARTHUR GUPTILL" />
                </div>
                <div className="space-y-2">
                  <label className="label-sm text-stone-400 text-[9px]">Email Address</label>
                  <input type="email" className="w-full bg-white border border-stone-200 px-4 py-3 outline-none focus:border-black transition-all text-sm" placeholder="A.GUPTILL@PLAYER.COM" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="label-sm text-stone-400 text-[9px]">Area of Interest</label>
                <select className="w-full bg-white border border-stone-200 px-4 py-3 outline-none focus:border-black transition-all text-sm appearance-none rounded-none cursor-pointer">
                  <option>CUSTOM BAT SPECIFICATION</option>
                  <option>PROTECTIVE GEAR FITTING</option>
                  <option>HERITAGE COLLECTION INQUIRY</option>
                  <option>BESPOKE LIVERY</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="label-sm text-stone-400 text-[9px]">Message</label>
                <textarea rows={4} className="w-full bg-white border border-stone-200 px-4 py-3 outline-none focus:border-black transition-all text-sm resize-none" placeholder="DETAIL YOUR PERFORMANCE REQUIREMENTS..."></textarea>
              </div>
              <button className="sharp-button primary-btn w-full">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
