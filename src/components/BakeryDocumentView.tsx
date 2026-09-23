import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  Download,
  ArrowLeft,
  FileText,
  Calendar,
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Cake,
  ExternalLink,
} from 'lucide-react';
import { BAKERY_INFO, FEATURED_PRODUCTS, CUSTOM_CAKE_TYPES, CAKE_FLAVORS, REVIEWS } from '../data/bakeryData';

interface BakeryDocumentViewProps {
  onBackToWebsite: () => void;
}

export const BakeryDocumentView: React.FC<BakeryDocumentViewProps> = ({ onBackToWebsite }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const getFullDocumentMarkdown = () => {
    return `# MICHAEL'S BAKER — BESPOKE CAKE ATELIER
## Official Brand Specification, Menu Catalog & Order Fulfillment Document
**Document ID:** MB-DOC-2026-V1  
**Classification:** Official Product Catalog & Operational Guide  
**Location:** ${BAKERY_INFO.location}  
**Contact:** ${BAKERY_INFO.phone} | ${BAKERY_INFO.email}  
**Hours:** ${BAKERY_INFO.hours}  
**Date of Publication:** September 2026

---

### 1. EXECUTIVE SUMMARY & BRAND CHARTER
Michael's Baker is an artisanal bespoke bakery studio located in Karachi, Pakistan, specializing in handcrafted designer celebration cakes, multi-tiered wedding gateaux, themed centerpieces, and premium cupcakes. Every product is baked fresh to order using pure dairy butter, premium Belgian cocoa, real vanilla bean extracts, and fresh dairy cream.

---

### 2. CORE BAKERY PILLARS & QUALITY STANDARDS
- **Ingredient Integrity:** Pure dairy butter, unbleached flour, single-origin cocoa, and natural purees. No artificial chemical preservatives.
- **Freshness Guarantee:** All items are baked strictly within 12 hours of scheduled delivery or pickup.
- **Bespoke Craftsmanship:** Hand-piped Swiss meringue buttercream, custom chocolate sails, delicate wafer flowers, and edible 24K gold leaf.
- **Temperature-Controlled Logistics:** Delivered in custom insulated shock-resistant bakery boxes.

---

### 3. SIGNATURE PRODUCT CATALOG & PRICING SCHEDULE

| Product Name | Category | Base Servings | Base Price (PKR) | Key Ingredients & Profile |
${FEATURED_PRODUCTS.map(
  (p) =>
    `| ${p.name} | ${p.category} | ${p.servings} | PKR ${p.price.toLocaleString()} | ${p.description} |`
).join('\n')}

*Notes: Large sizes (4 lbs / 20-25 servings) are priced at 1.5x base price. Eggless preparation available at +PKR 200.*

---

### 4. BESPOKE CUSTOM CAKE ATELIER & DESIGN MATRIX

${CUSTOM_CAKE_TYPES.map(
  (c) => `#### ${c.title}
- **Description:** ${c.description}
- **Popular For:** ${c.popularFor}
- **Required Lead Time:** ${c.estimatedLeadTime}
- **Style Tier:** ${c.badge}
`
).join('\n')}

---

### 5. SIGNATURE FLAVORS & TASTING PROFILES

${CAKE_FLAVORS.map(
  (f) => `- **${f.name}:** ${f.description} (Popularity Tier: ${f.tag})`
).join('\n')}

---

### 6. FOUR-STAGE ORDER FULFILLMENT SOP
1. **Order Selection & Customization:** Client selects silhouette, tier count, sponge flavor, and inscription.
2. **Order Confirmation & Recipe Scheduling:** Studio reviews design complexity, schedules baking slot, and requests 50% advance deposit.
3. **Artisanal Baking & Cold Setting:** Sponges baked fresh, leveled, filled, frosted, and blast-chilled for structural integrity.
4. **Inspected Delivery / Pickup:** Packed into high-durability bakery boxes with cold packs; delivered via air-conditioned transport.

---

### 7. POLICIES & CARE GUIDELINES
- **Advance Notice:** 24-48 hours for standard cakes; 5-7 days for bespoke wedding cakes.
- **Advance Deposit:** 50% required upon order placement; balance upon delivery or pickup.
- **Storage:** Keep refrigerated until 45 minutes prior to serving for optimal texture.

---
**Official Document Approval**  
*Chef Michael & The Artisanal Bakery Team*  
*Michael's Baker • Karachi, Pakistan*
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(getFullDocumentMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadDoc = () => {
    const text = getFullDocumentMarkdown();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', "Michaels_Baker_Brand_and_Menu_Document.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2C1810] py-6 px-4 sm:px-6 print:p-0 print:bg-white">
      
      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <div className="bg-white/90 backdrop-blur-md border border-[#DCD3C7] rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBackToWebsite}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFE7DC] border border-[#DCD3C7] text-xs font-semibold text-[#3D2314] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Storefront</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#7A5B48] pl-2 border-l border-[#E2D5C4]">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              <span className="font-semibold">Document Mode</span>
              <span className="text-[10px] bg-[#EFE7DC] text-[#4A3022] px-2 py-0.5 rounded-full font-mono">
                MB-DOC-2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFE7DC] border border-[#DCD3C7] text-xs font-medium text-[#2C1810] transition-colors"
              title="Copy entire document as markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#7A5B48]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadDoc}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFE7DC] border border-[#DCD3C7] text-xs font-medium text-[#2C1810] transition-colors"
              title="Download markdown file"
            >
              <Download className="w-3.5 h-3.5 text-[#7A5B48]" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <a
              href="/michaels-baker-notepad.html"
              download="michaels-baker.html"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFE7DC] border border-[#DCD3C7] text-xs font-semibold text-[#3D2314] transition-colors"
              title="Download standalone single-file HTML version for Notepad"
            >
              <span>💻</span>
              <span className="hidden md:inline">Download HTML for Notepad</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#3D2314] hover:bg-[#201007] text-[#FAF8F5] text-xs font-bold transition-all shadow-xs"
              title="Print document or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#E0C79B]" />
              <span>Print / Save as PDF</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Document Paper Container */}
      <article className="max-w-4xl mx-auto bg-white border border-[#E3DACF] shadow-xl print:shadow-none print:border-none p-8 sm:p-12 md:p-16 rounded-2xl print:rounded-none">
        
        {/* Document Header & Metadata Box */}
        <header className="border-b-2 border-[#2C1810] pb-8 mb-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#3D2314] text-[#E0C79B] flex items-center justify-center border border-[#6B4423]">
                <Cake className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2C1810]">
                  Michael's Baker
                </h1>
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                  Bespoke Artisanal Cake Atelier • Karachi
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-[11px] text-[#7A5B48] space-y-0.5 bg-[#FAF8F5] sm:bg-transparent p-3 sm:p-0 rounded-lg">
              <p><strong className="text-[#2C1810]">DOC ID:</strong> MB-DOC-2026-V1</p>
              <p><strong className="text-[#2C1810]">CLASSIFICATION:</strong> Official Brand Profile &amp; Catalog</p>
              <p><strong className="text-[#2C1810]">REVISION DATE:</strong> September 2026</p>
              <p><strong className="text-[#2C1810]">STATUS:</strong> Active / Authorized</p>
            </div>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E8DFC8] rounded-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8A6A56] block">Studio Location</span>
              <p className="font-medium text-[#2C1810] mt-0.5">{BAKERY_INFO.location}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8A6A56] block">Operating Hours</span>
              <p className="font-medium text-[#2C1810] mt-0.5">{BAKERY_INFO.hours}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8A6A56] block">Contact &amp; Orders</span>
              <p className="font-medium text-[#2C1810] mt-0.5">{BAKERY_INFO.phone} | {BAKERY_INFO.email}</p>
            </div>
          </div>

        </header>

        {/* Document Body Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-[#3D2314]">
          
          {/* Section 1: Executive Overview */}
          <section id="doc-section-1">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">1.0</span>
              <span>Executive Overview &amp; Brand Philosophy</span>
            </h2>
            <p className="mb-3 text-[#4A3022]">
              <strong>Michael's Baker</strong> was established to redefine bespoke celebration gateaux in Karachi. 
              We operate as a boutique confectionery atelier crafting high-end customized cakes, tiered wedding centerpieces, 
              and delicate pastries for clients who demand both breathtaking visual artistry and unforgettable culinary taste.
            </p>
            <p className="text-[#4A3022]">
              Unlike commercial industrial bakeries that utilize premixes and vegetable shortening, our studio guarantees that every creation 
              is baked strictly from scratch within 12 hours of event delivery. We blend traditional French pastry techniques with 
              contemporary sculptural cake design.
            </p>
          </section>

          {/* Section 2: Quality Standards */}
          <section id="doc-section-2">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">2.0</span>
              <span>Core Bakery Quality Standards</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE2D5]">
                <h4 className="font-bold text-xs uppercase text-[#C5A059] mb-1">Quality Ingredients</h4>
                <p className="text-xs text-[#5C3D2E]">
                  Prepared exclusively using 100% pure dairy butter, 54% dark Belgian chocolate, Madagascar bourbon vanilla, and unbleached stone-ground wheat flour. No margarine or artificial stabilizers.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE2D5]">
                <h4 className="font-bold text-xs uppercase text-[#C5A059] mb-1">Freshly Baked Commitment</h4>
                <p className="text-xs text-[#5C3D2E]">
                  Zero freezing of finished cakes. Batches are baked fresh to order and filled with whipped dairy ganache or silky Swiss meringue buttercream.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE2D5]">
                <h4 className="font-bold text-xs uppercase text-[#C5A059] mb-1">Custom Sculptural Designs</h4>
                <p className="text-xs text-[#5C3D2E]">
                  Every bespoke celebration cake is custom-tailored to the customer's moodboard, invitation color palette, floral arrangement, and venue theme.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE2D5]">
                <h4 className="font-bold text-xs uppercase text-[#C5A059] mb-1">Dietary Adaptations</h4>
                <p className="text-xs text-[#5C3D2E]">
                  Dedicated 100% eggless formulations prepared on sanitized workstations to preserve purity and religious preferences without compromising crumb moisture.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Signature Product Catalog */}
          <section id="doc-section-3">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">3.0</span>
              <span>Signature Product Catalog &amp; Standard Pricing Schedule</span>
            </h2>
            <p className="text-xs text-[#6B4423] mb-4">
              All baseline prices are quoted in Pakistani Rupees (PKR). Prices include standard presentation packaging and custom piped message ribbon.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-[#E2D5C4]">
                <thead>
                  <tr className="bg-[#FAF8F5] text-[#2C1810] border-b border-[#E2D5C4]">
                    <th className="p-3 font-bold border-r border-[#E2D5C4]">Item Code &amp; Name</th>
                    <th className="p-3 font-bold border-r border-[#E2D5C4]">Category</th>
                    <th className="p-3 font-bold border-r border-[#E2D5C4]">Standard Size</th>
                    <th className="p-3 font-bold border-r border-[#E2D5C4]">Servings</th>
                    <th className="p-3 font-bold text-right">Base Price (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE7DC]">
                  {FEATURED_PRODUCTS.map((prod, idx) => (
                    <tr key={prod.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]'}>
                      <td className="p-3 font-medium text-[#2C1810] border-r border-[#E2D5C4]">
                        <div className="font-bold">{prod.name}</div>
                        <div className="text-[11px] text-[#7A5B48] max-w-xs">{prod.description}</div>
                      </td>
                      <td className="p-3 text-[#5C3D2E] border-r border-[#E2D5C4]">{prod.category}</td>
                      <td className="p-3 text-[#5C3D2E] border-r border-[#E2D5C4]">
                        {prod.availableSizes ? prod.availableSizes[0].name : 'Standard 2.5 lbs'}
                      </td>
                      <td className="p-3 text-[#5C3D2E] border-r border-[#E2D5C4]">{prod.servings}</td>
                      <td className="p-3 text-right font-bold text-[#2C1810]">
                        PKR {prod.price.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#8A6A56] mt-2 italic">
              *Large Size (4.0 lbs / 20-25 servings) multiplier: 1.5x base price. Custom inscriptions are included complimentary up to 40 characters.
            </p>
          </section>

          {/* Section 4: Custom Cakes Atelier */}
          <section id="doc-section-4">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">4.0</span>
              <span>Bespoke Custom Cake Atelier &amp; Design Matrix</span>
            </h2>
            <div className="space-y-4">
              {CUSTOM_CAKE_TYPES.map((cat) => (
                <div key={cat.id} className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E2D5C4]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-serif font-bold text-base text-[#2C1810]">{cat.title}</h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#C5A059]">{cat.badge}</span>
                      <span className="text-[#8A6A56]">• Lead Time: {cat.estimatedLeadTime}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C3D2E] mb-2">{cat.description}</p>
                  <p className="text-[11px] text-[#7A5B48]">
                    <strong className="text-[#4A3022]">Popular For:</strong> {cat.popularFor}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Signature Flavors */}
          <section id="doc-section-5">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">5.0</span>
              <span>Flavor Architecture &amp; Ingredient Matrix</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CAKE_FLAVORS.map((flavor) => (
                <div key={flavor.id} className="p-3 bg-white border border-[#E2D5C4] rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-[#2C1810] font-bold text-sm">{flavor.name}</strong>
                    <span className="text-[10px] bg-[#EFE7DC] text-[#4A3022] px-2 py-0.5 rounded-full font-medium">
                      {flavor.tag}
                    </span>
                  </div>
                  <p className="text-[#5C3D2E] text-xs">{flavor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Standard Operating Procedure (SOP) */}
          <section id="doc-section-6">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">6.0</span>
              <span>Standard Operating Procedure (SOP) — 4-Step Order Workflow</span>
            </h2>
            <ol className="space-y-3 list-decimal list-inside text-xs text-[#4A3022]">
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE2D5]">
                <strong className="text-[#2C1810]">Stage 1: Cake Selection &amp; Specification Intake</strong>
                <p className="mt-1 text-[#5C3D2E]">
                  Customer selects silhouette, size (2.5 lbs to multi-tier 10+ lbs), sponge flavor, custom inscription, and provides event date &amp; delivery location.
                </p>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE2D5]">
                <strong className="text-[#2C1810]">Stage 2: Design Verification &amp; Slot Confirmation</strong>
                <p className="mt-1 text-[#5C3D2E]">
                  Bakery team confirms schedule availability, verifies complex artwork or topper requests, issues an official order reference code, and processes the 50% booking deposit.
                </p>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE2D5]">
                <strong className="text-[#2C1810]">Stage 3: Scratch Baking, Hand-Finishing &amp; Cold-Setting</strong>
                <p className="mt-1 text-[#5C3D2E]">
                  Sponge baked morning-of or day-prior, filled with fresh dairy ganache, coated in silky Swiss meringue buttercream, sculpted with requested artwork, and chilled to 4°C for transport stability.
                </p>
              </li>
              <li className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE2D5]">
                <strong className="text-[#2C1810]">Stage 4: Temperature-Controlled Delivery or Studio Pickup</strong>
                <p className="mt-1 text-[#5C3D2E]">
                  Cake is packed inside rigid corrugated bakery boxes with internal non-slip bases. Delivered across Karachi in air-conditioned vehicles to prevent heat compromise.
                </p>
              </li>
            </ol>
          </section>

          {/* Section 7: Handling & Storage */}
          <section id="doc-section-7">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">7.0</span>
              <span>Handling, Transport &amp; Storage Instructions</span>
            </h2>
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E2D5C4] text-xs space-y-2 text-[#4A3022]">
              <p>
                <strong>Transport:</strong> Always carry cake boxes from the bottom flat with both hands. Never tilt or place on slanted car seats; transport exclusively on flat car floorboards with direct A/C active.
              </p>
              <p>
                <strong>Refrigeration:</strong> Keep chilled at 3°C - 5°C until 45 to 60 minutes before cutting. Buttercream cakes achieve their silky, melt-in-the-mouth texture when served at mild ambient temperature.
              </p>
              <p>
                <strong>Shelf Life:</strong> Best consumed within 72 hours of delivery. Keep leftover slices covered in an airtight container to preserve moisture.
              </p>
            </div>
          </section>

          {/* Section 8: Studio Terms & Policies */}
          <section id="doc-section-8">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">8.0</span>
              <span>Studio Terms, Cancellations &amp; Payment Policies</span>
            </h2>
            <ul className="space-y-1.5 text-xs text-[#5C3D2E] list-disc list-inside">
              <li><strong>Advance Notice:</strong> Minimum 24 hours required for signature cakes; minimum 3 to 7 business days required for tiered wedding or sculpted fondant creations.</li>
              <li><strong>Deposit Policy:</strong> A 50% non-refundable confirmation deposit is required to lock in baking calendar slots.</li>
              <li><strong>Date Rescheduling:</strong> Rescheduling requests accepted up to 48 hours prior to delivery without penalty, subject to slot availability.</li>
              <li><strong>Payment Channels:</strong> Direct Bank Transfer (Meezan, HBL), Raast Instant Payment, and Cash on Pickup/Delivery.</li>
            </ul>
          </section>

          {/* Section 9: Client Testimonials */}
          <section id="doc-section-9">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] pb-2 border-b border-[#E8DFC8] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">9.0</span>
              <span>Verified Client Endorsements &amp; Performance Records</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {REVIEWS.map((rev) => (
                <div key={rev.id} className="p-3 bg-white border border-[#E2D5C4] rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#2C1810]">— {rev.name}</span>
                    <span className="text-[10px] text-[#C5A059] font-semibold">{rev.rating} ★★★★★</span>
                  </div>
                  <p className="text-[11px] text-[#8A6A56] mb-1 italic font-serif">"{rev.review}"</p>
                  <span className="text-[10px] text-[#7A5B48] block">{rev.celebration} • {rev.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10: Official Contacts & Sign-off */}
          <section id="doc-section-10" className="pt-4 border-t-2 border-[#2C1810]">
            <h2 className="font-serif text-xl font-bold text-[#2C1810] mb-3 flex items-center gap-2">
              <span className="text-[#C5A059] font-mono text-sm font-bold">10.0</span>
              <span>Official Contacts &amp; Document Authorization</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1.5 text-xs text-[#5C3D2E]">
                <p><strong>Studio Address:</strong> {BAKERY_INFO.location}</p>
                <p><strong>Direct WhatsApp:</strong> {BAKERY_INFO.phone}</p>
                <p><strong>Order Desk Email:</strong> {BAKERY_INFO.email}</p>
                <p><strong>Studio Operating Hours:</strong> {BAKERY_INFO.hours}</p>
              </div>

              <div className="border border-[#E2D5C4] p-4 rounded-xl bg-[#FAF8F5] text-xs">
                <p className="text-[10px] uppercase font-bold text-[#8A6A56]">Document Approved By:</p>
                <p className="font-serif text-base font-bold text-[#2C1810] mt-1">Michael &amp; Culinary Atelier Team</p>
                <p className="text-[#7A5B48] text-[11px]">Head Pastry Chef &amp; Operations Director</p>
                <div className="mt-3 pt-2 border-t border-[#DCD3C7] text-[10px] text-[#8A6A56] flex justify-between">
                  <span>Michael's Baker Karachi</span>
                  <span>Certified Fresh to Order</span>
                </div>
              </div>
            </div>
          </section>

        </div>

      </article>

      {/* Footer in Document View (Hidden on print) */}
      <footer className="max-w-4xl mx-auto text-center text-xs text-[#8A6A56] py-8 print:hidden">
        <p>© 2026 Michael's Baker. Official Document MB-DOC-2026-V1. All rights reserved.</p>
        <button
          onClick={onBackToWebsite}
          className="mt-2 text-[#3D2314] font-semibold underline hover:text-[#C5A059]"
        >
          Return to Interactive Ordering Website
        </button>
      </footer>

    </div>
  );
};
