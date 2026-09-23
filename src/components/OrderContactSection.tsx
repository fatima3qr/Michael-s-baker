import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { BAKERY_INFO, CAKE_FLAVORS } from '../data/bakeryData';
import { OrderFormData } from '../types';

export interface OrderContactSectionRef {
  prefillForm: (data: Partial<OrderFormData>) => void;
  scrollIntoView: () => void;
}

export const OrderContactSection = forwardRef<OrderContactSectionRef, {}>((_, ref) => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    email: '',
    cakeType: 'Custom Birthday Cake',
    flavor: 'Chocolate',
    cakeSize: '2.5 lbs (8–10 Servings)',
    eventDate: '',
    preferredDesign: '',
    additionalMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<{
    reference: string;
    data: OrderFormData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useImperativeHandle(ref, () => ({
    prefillForm: (data: Partial<OrderFormData>) => {
      setFormData((prev) => ({ ...prev, ...data }));
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollIntoView: () => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = `MB-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedOrder({
        reference: refCode,
        data: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const copyOrderSummary = () => {
    if (!submittedOrder) return;
    const summary = `*Michael's Baker Order Request*\nRef: ${submittedOrder.reference}\nName: ${submittedOrder.data.fullName}\nPhone: ${submittedOrder.data.phone}\nCake: ${submittedOrder.data.cakeType} (${submittedOrder.data.cakeSize})\nFlavor: ${submittedOrder.data.flavor}\nDate: ${submittedOrder.data.eventDate}\nDesign: ${submittedOrder.data.preferredDesign || 'Standard'}\nNotes: ${submittedOrder.data.additionalMessage || 'None'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendWhatsAppOrder = () => {
    if (!submittedOrder) return;
    const text = encodeURIComponent(
      `Hi Michael's Baker! I submitted order request #${submittedOrder.reference} for a ${submittedOrder.data.cakeType} (${submittedOrder.data.flavor}, ${submittedOrder.data.cakeSize}) on ${submittedOrder.data.eventDate}. Please confirm my order.`
    );
    window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F6F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-2">
            Get in Touch &amp; Place Your Order
          </span>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight"
          >
            Let's Create Something Delicious
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-base sm:text-lg text-[#614434]">
            Fill out the form below with your cake specifications and event date. Our bakery team will review and confirm availability immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Order Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5D7C7] shadow-lg">
            
            {submittedOrder ? (
              /* Success Confirmation Card */
              <div
                id="order-confirmation-card"
                className="py-8 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#EFE7DC] text-[#3D2314] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                    Order Request Received!
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
                    Thank You, {submittedOrder.data.fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-[#664C3B] max-w-md mx-auto">
                    We have logged your cake request under reference{' '}
                    <strong className="text-[#2C1810]">{submittedOrder.reference}</strong>.
                    Our pastry chef will get in touch via phone or WhatsApp shortly.
                  </p>
                </div>

                {/* Summary Details */}
                <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#EADBCC] text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-[#EFE7DC] pb-2">
                    <span className="text-[#7A5B48]">Cake Choice:</span>
                    <span className="font-semibold text-[#2C1810]">{submittedOrder.data.cakeType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE7DC] pb-2">
                    <span className="text-[#7A5B48]">Flavor:</span>
                    <span className="font-semibold text-[#2C1810]">{submittedOrder.data.flavor}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE7DC] pb-2">
                    <span className="text-[#7A5B48]">Size:</span>
                    <span className="font-semibold text-[#2C1810]">{submittedOrder.data.cakeSize}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EFE7DC] pb-2">
                    <span className="text-[#7A5B48]">Event Date:</span>
                    <span className="font-semibold text-[#2C1810]">{submittedOrder.data.eventDate || 'Flexible'}</span>
                  </div>
                  {submittedOrder.data.preferredDesign && (
                    <div className="flex justify-between">
                      <span className="text-[#7A5B48]">Design Note:</span>
                      <span className="font-semibold text-[#2C1810] truncate max-w-[200px]">
                        {submittedOrder.data.preferredDesign}
                      </span>
                    </div>
                  )}
                </div>

                {/* WhatsApp & Copy Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={sendWhatsAppOrder}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm hover:bg-[#1EBE5D] transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp Now</span>
                  </button>

                  <button
                    onClick={copyOrderSummary}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-[#FAF8F5] text-[#2C1810] font-semibold text-xs sm:text-sm hover:bg-[#EFE7DC] transition-colors border border-[#DCCBB8]"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#8A6A56]" />}
                    <span>{copied ? 'Copied Details' : 'Copy Summary'}</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedOrder(null);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        cakeType: 'Custom Birthday Cake',
                        flavor: 'Chocolate',
                        cakeSize: '2.5 lbs (8–10 Servings)',
                        eventDate: '',
                        preferredDesign: '',
                        additionalMessage: '',
                      });
                    }}
                    className="text-xs text-[#7A5B48] hover:text-[#2C1810] underline underline-offset-2"
                  >
                    Submit another cake order
                  </button>
                </div>

              </div>
            ) : (
              /* Order / Inquiry Form */
              <form id="bakery-order-form" onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-[#F2EAE1] pb-3 mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1810]">
                    Cake Order &amp; Custom Inquiry
                  </h3>
                  <p className="text-xs text-[#7A5B48] mt-1">
                    Please provide your event requirements and we will contact you with a finalized design quote.
                  </p>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-full-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-full-name"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Mitchell"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email Address & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-event-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Event / Delivery Date *
                    </label>
                    <div className="relative">
                      <input
                        id="form-event-date"
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Cake Type & Flavor Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-cake-type"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Cake Type *
                    </label>
                    <select
                      id="form-cake-type"
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    >
                      <option value="Chocolate Fudge Cake">Chocolate Fudge Cake</option>
                      <option value="Vanilla Celebration Cake">Vanilla Celebration Cake</option>
                      <option value="Red Velvet Cake">Red Velvet Cake</option>
                      <option value="Strawberry Cream Cake">Strawberry Cream Cake</option>
                      <option value="Chocolate Cupcakes (Box)">Chocolate Cupcakes (Box)</option>
                      <option value="Custom Birthday Cake">Custom Birthday Cake</option>
                      <option value="Wedding Cake">Wedding Cake (Tiered)</option>
                      <option value="Anniversary Cake">Anniversary Cake</option>
                      <option value="Character / Theme Cake">Character / Theme Cake</option>
                      <option value="Floral Garden Cake">Floral Garden Cake</option>
                      <option value="Luxury Gold Leaf Cake">Luxury Gold Leaf Cake</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-flavor"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                    >
                      Preferred Flavor *
                    </label>
                    <select
                      id="form-flavor"
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    >
                      {CAKE_FLAVORS.map((f) => (
                        <option key={f.id} value={f.name}>
                          {f.name} ({f.notes.split('•')[0].trim()})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cake Size */}
                <div>
                  <label
                    htmlFor="form-cake-size"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                  >
                    Cake Size *
                  </label>
                  <select
                    id="form-cake-size"
                    name="cakeSize"
                    value={formData.cakeSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                  >
                    <option value="1.5 lbs (4–6 Servings)">1.5 lbs (4–6 Servings) — Small Intimate</option>
                    <option value="2.5 lbs (8–10 Servings)">2.5 lbs (8–10 Servings) — Standard Family</option>
                    <option value="3.5 lbs (12–15 Servings)">3.5 lbs (12–15 Servings) — Party Size</option>
                    <option value="Double Tier 5 lbs (18–22 Servings)">Double Tier 5 lbs (18–22 Servings) — Tiered Centerpiece</option>
                    <option value="Three Tier 8+ lbs (30+ Servings)">Three Tier 8+ lbs (30+ Servings) — Grand Wedding / Gala</option>
                    <option value="Box of 6 Cupcakes">Box of 6 Cupcakes</option>
                    <option value="Box of 12 Cupcakes">Box of 12 Cupcakes</option>
                  </select>
                </div>

                {/* Preferred Design / Theme */}
                <div>
                  <label
                    htmlFor="form-preferred-design"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                  >
                    Preferred Design &amp; Theme
                  </label>
                  <input
                    id="form-preferred-design"
                    type="text"
                    name="preferredDesign"
                    value={formData.preferredDesign}
                    onChange={handleChange}
                    placeholder="e.g. Vintage Lambeth piping in ivory and sage green with 30th birthday topper"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label
                    htmlFor="form-additional-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3022] mb-1.5"
                  >
                    Additional Message &amp; Inscription
                  </label>
                  <textarea
                    id="form-additional-message"
                    name="additionalMessage"
                    rows={3}
                    value={formData.additionalMessage}
                    onChange={handleChange}
                    placeholder="Specify custom text to write on the cake, dietary notes (e.g. eggless option), delivery address, or any questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D5C4] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    id="submit-order-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#3D2314] text-[#FAF8F5] text-base font-bold hover:bg-[#201007] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin text-[#E0C79B]" /> Processing...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#E0C79B]" />
                        <span>Submit Order Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#7A5B48] mt-2.5">
                    No payment is taken now. Our studio will review and contact you with confirmation.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Bakery Business Card */}
            <div
              id="contact-info-card"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5D7C7] shadow-md space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                  Bakery Studio
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                  {BAKERY_INFO.name}
                </h3>
                <p className="text-xs text-[#7A5B48]">
                  Custom cakes, wedding gateaux and fresh everyday bakery confections.
                </p>
              </div>

              <div className="space-y-5 pt-2 border-t border-[#F2EAE1]">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EADBCC] text-[#3D2314] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#8A6A56] tracking-wider block">
                      Phone &amp; Inquiries
                    </span>
                    <p className="text-sm font-semibold text-[#2C1810]">
                      {BAKERY_INFO.phone}
                    </p>
                    <span className="text-[11px] text-[#A0826E]">
                      Placeholder line — direct consultations welcome
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EADBCC] text-[#3D2314] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#8A6A56] tracking-wider block">
                      Email Contact
                    </span>
                    <a
                      href={`mailto:${BAKERY_INFO.email}`}
                      className="text-sm font-semibold text-[#2C1810] hover:text-[#C5A059] transition-colors"
                    >
                      {BAKERY_INFO.email}
                    </a>
                    <span className="text-[11px] text-[#A0826E] block">
                      Replies within 2–4 hours
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EADBCC] text-[#3D2314] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#8A6A56] tracking-wider block">
                      Studio Location
                    </span>
                    <p className="text-sm font-semibold text-[#2C1810]">
                      {BAKERY_INFO.location}
                    </p>
                    <span className="text-[11px] text-[#A0826E]">
                      Pickup &amp; safe city-wide refrigerated delivery
                    </span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EADBCC] text-[#3D2314] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#8A6A56] tracking-wider block">
                      Opening Hours
                    </span>
                    <p className="text-sm font-semibold text-[#2C1810]">
                      Monday – Sunday
                    </p>
                    <p className="text-xs text-[#6B4B3A] font-medium">
                      10:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Direct WhatsApp Quick Connect Banner */}
            <div className="bg-[#3D2314] rounded-3xl p-6 sm:p-7 text-[#FAF8F5] border border-[#593623] shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FAF8F5]">
                    Prefer to Chat on WhatsApp?
                  </h4>
                  <p className="text-xs text-[#D8C7B5]">
                    Share reference pictures or voice notes directly with our baker.
                  </p>
                </div>
              </div>

              <a
                id="contact-whatsapp-direct-link"
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  BAKERY_INFO.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] text-[#2C1810] text-xs sm:text-sm font-bold hover:bg-[#EAE0D3] transition-colors flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp (+92 XXX XXXXXXX)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
});
