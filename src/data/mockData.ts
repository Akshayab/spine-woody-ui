import type { Persona, Team } from './types';

// ============================================
// ARTIFACT PREVIEWS (realistic content)
// ============================================

const artifactPreviews: Record<string, string> = {
  // Woody - Market Research
  'w-mr-1': `# US Natural Wine Market Landscape Q1 2026

## Executive Summary
The US natural wine market continues its strong growth trajectory, reaching an estimated $1.8B in retail value in Q1 2026, up 14% year-over-year. Key growth drivers include expanding distribution through mainstream retail channels and growing consumer awareness among millennials and Gen Z.

## Market Size & Growth
- **Total market value**: $1.8B (retail), up from $1.58B in Q1 2025
- **Volume growth**: ~11% YoY, outpacing conventional wine at 2.3%
- **DTC channel**: Growing fastest at 22% YoY, now represents 18% of total natural wine sales
- **On-premise**: Recovery continues post-COVID, now at 94% of 2019 levels

## Consumer Demographics
- **Primary buyer**: Ages 28-42, urban, household income $75K+
- **Fastest growing segment**: Ages 22-27, driven by social media discovery
- **Gender split**: 58% female, 42% male (narrowing from 64/36 in 2023)
- **Purchase frequency**: Average buyer purchases 2.3 bottles/month, up from 1.8 in 2024

## Key Trends
1. **"Clean label" movement**: 67% of natural wine buyers cite ingredient transparency as primary purchase driver
2. **Canned format growth**: Canned natural wines grew 45% YoY, now 8% of category
3. **Regional diversification**: Oregon and Washington gaining on California; NY Finger Lakes emerging
4. **Subscription models**: 34% of DTC natural wine sales now through subscription clubs

## Distribution Landscape
- **Specialty retail**: Still dominant at 42% of volume
- **Grocery**: Growing rapidly, now 28% (Whole Foods, Trader Joe's leading)
- **DTC/online**: 18% and growing
- **Restaurants/bars**: 12% (recovering)

## Risks & Headwinds
- Supply constraints from climate-affected 2025 harvest in parts of CA
- Potential trademark/labeling regulation from TTB
- Price sensitivity as premium positioning meets inflation-conscious consumers`,

  'w-mr-2': `# Consumer Trend Analysis: DTC Wine Brands

## Overview
Analysis of 47 DTC-first wine brands across the US, examining growth patterns, marketing strategies, and consumer engagement metrics.

## Key Findings

### Growth Leaders (>50% YoY revenue growth)
| Brand | Growth | Avg. Bottle Price | Key Channel |
|-------|--------|-------------------|-------------|
| Usual Wines | 68% | $15 | Subscription |
| Avaline | 54% | $22 | DTC + Retail |
| Bev | 52% | $16 | DTC + Social |

### Marketing Channels by Effectiveness
1. **Instagram**: 34% of customer acquisition (down from 41% in 2024)
2. **TikTok**: 28% of acquisition (up from 12% — fastest growing)
3. **Email/SMS**: 18% (highest retention channel)
4. **Podcast sponsorship**: 11% (steady)
5. **Other**: 9%

### Consumer Behavior Insights
- Average first purchase to subscription conversion: 23 days
- Unboxing content generates 4.2x more engagement than product-only posts
- "Story of the winemaker" content drives 31% higher click-through rates
- Sustainability messaging resonates most with 25-34 age bracket`,

  'w-mr-3': `# Distributor Landscape: West Coast

| Distributor | States | Natural Wine SKUs | Min Order | Payment Terms | Notes |
|-------------|--------|-------------------|-----------|---------------|-------|
| Vinocity Selections | CA, OR | 340+ | 10 cases | Net 30 | Strong SF Bay Area presence |
| Natural Selection Wine | CA, WA | 280+ | 5 cases | Net 45 | Growing fast, good social media |
| Wild Vine Distributing | OR, WA | 190+ | 8 cases | Net 30 | Portland-based, excellent on-premise |
| Pacific Natural Wines | CA | 420+ | 15 cases | Net 30 | Largest in CA, mainstream retail focus |
| Terroir Forward | CA, OR, WA | 150+ | 3 cases | Net 60 | Boutique, high-touch service |
| Green Valley Imports | CA | 95+ | 10 cases | Net 30 | Focus on European imports |
| Conscious Pour | WA | 120+ | 5 cases | Net 45 | Seattle metro specialist |
| Earth & Vine Co. | CA, OR | 210+ | 8 cases | Net 30 | Strong Whole Foods relationship |`,

  'w-mr-4': `# Pricing Benchmark: $20-40 Natural Red Wines

## Methodology
Pricing data collected from 12 retail channels and 8 DTC platforms across 156 natural red wine SKUs in the $20-40 range.

| Wine | Varietal | Region | Retail | DTC | Trend |
|------|----------|--------|--------|-----|-------|
| Broc Cellars Love Red | Blend | CA | $22 | $20 | Stable |
| Donkey & Goat Gallivanter | Blend | CA | $26 | $24 | +$1 YoY |
| Scribe Pinot Noir | Pinot Noir | Sonoma | $38 | $34 | -$3 (new) |
| Les Lunes Rossi Ranch | Blend | Sonoma | $32 | $28 | Stable |
| Martha Stoumen Post Flirtation | Blend | CA | $28 | $26 | Stable |
| Scholium Project | Various | CA | $35 | $32 | +$2 YoY |
| Forlorn Hope Queen of Sierra | Blend | Sierra Foothills | $24 | $22 | Stable |
| Purity Wine Angeleno | Blend | CA | $21 | $19 | -$1 YoY |
| Subject to Change | Pinot Noir | Sonoma | $30 | $28 | New entry |
| Ruth Lewandowski Boaz | Blend | UT | $26 | $24 | Stable |

## Key Observations
- Average price in segment: $28.40 (down 2% from Q4 2025)
- DTC discount vs retail: averaging 11% (up from 8% in 2024)
- 3 new entrants in segment this quarter
- Scribe price reduction most significant move — possible volume strategy shift`,

  // Woody - Competitor Watch
  'w-cw-1': `# Weekly Competitor Digest - Mar 24-28, 2026

## Alerts
- **Scribe Winery**: Price reduction on 3 SKUs (see below)
- **New Brand**: Vero Wines launched in Sonoma (3 SKUs, $28-35, DTC only)

## Price Changes
| Brand | Product | Old Price | New Price | Change |
|-------|---------|-----------|-----------|--------|
| Scribe | 2024 Pinot Noir | $38 | $35 | -8% |
| Scribe | 2024 Chardonnay | $32 | $30 | -6% |
| Scribe | 2024 Rosé | $26 | $25 | -4% |

## New Products
- **Vero Wines** (new brand): Launching with Pinot Noir ($35), Grenache ($32), Field Blend ($28). DTC only initially. Founder previously at Scribe.
- **Broc Cellars**: New single-vineyard Zinfandel, $44, limited to 200 cases

## Press & Media
- Scribe featured in NYT "Best Spring Wines" list
- Martha Stoumen profiled in Bon Appétit
- Broc Cellars won "Best Natural Winery" at SF Chronicle Wine Competition

## Social Media Activity
| Brand | Instagram Posts | Engagement Rate | Notable |
|-------|----------------|-----------------|---------|
| Scribe | 12 | 4.2% | Price drop announcement got 2.3K likes |
| Broc | 8 | 3.8% | Behind-the-scenes harvest content |
| Martha Stoumen | 6 | 5.1% | Bon Appétit feature reshare |
| Les Lunes | 4 | 3.2% | New vintage tasting notes |`,

  'w-cw-2': `# Competitor Pricing Matrix - March 2026

| Brand | Pinot Noir | Chardonnay | Rosé | Red Blend | White Blend | Sparkling |
|-------|-----------|------------|------|-----------|-------------|-----------|
| **Your Brand** | $32 | $28 | $22 | $26 | $24 | $30 |
| Scribe | $35 ↓ | $30 ↓ | $25 ↓ | - | - | $34 |
| Broc Cellars | $28 | $26 | $20 | $22 | $24 | $28 |
| Martha Stoumen | $30 | - | $24 | $28 | - | - |
| Les Lunes | $36 | - | - | $32 | $28 | - |
| Donkey & Goat | $34 | $28 | $22 | $26 | $24 | - |
| Purity Wine | $24 | $22 | $18 | $21 | $19 | - |
| Vero Wines (NEW) | $35 | - | - | $28 | - | - |

**Legend**: ↓ = price decreased this month, ↑ = price increased, NEW = new entrant

**Your position**: Mid-range in most categories. Competitively priced against Scribe after their reduction. Premium to Broc and Purity, value vs Les Lunes.`,

  'w-cw-3': `# Scribe Winery Deep Dive

## Company Overview
- **Founded**: 2007 by Andrew and Adam Mariani
- **Location**: Sonoma, CA (Carneros region)
- **Production**: ~15,000 cases/year (estimated)
- **Distribution**: DTC primary, selective wholesale in CA, NY, IL

## Recent Moves
- Price reductions across 3 core SKUs (March 2026)
- Expanded tasting room hours and added weekday reservations
- Launched a wine club tier at lower price point ($45/month, 2 bottles)
- New hire: VP of Sales from Kosta Browne (signals wholesale expansion)

## Financial Indicators
- Job postings: 4 open roles (sales, marketing, production, hospitality)
- Website traffic: estimated +18% MoM (SimilarWeb)
- Social following: 89K Instagram (+12% YoY)

## Strategic Assessment
Scribe appears to be shifting from ultra-premium positioning toward broader market accessibility. The price reductions, lower wine club tier, and sales hire from a major wholesale brand all point to a volume growth strategy. This could indicate investor pressure or preparation for a funding round.

## Implications for Us
- Their price drops bring them closer to our range — competitive pressure increases
- Their wholesale expansion could crowd shelf space at key retailers
- **Opportunity**: Their brand dilution risk could benefit our authentic positioning`,

  'w-cw-4': `# New Product Launches: Feb-Mar 2026

| Date | Brand | Product | Price | Format | Channel | Notes |
|------|-------|---------|-------|--------|---------|-------|
| Mar 25 | Vero Wines | Pinot Noir 2024 | $35 | 750ml | DTC | New brand, ex-Scribe founder |
| Mar 25 | Vero Wines | Grenache 2024 | $32 | 750ml | DTC | New brand |
| Mar 25 | Vero Wines | Field Blend 2024 | $28 | 750ml | DTC | New brand |
| Mar 18 | Broc Cellars | SV Zinfandel | $44 | 750ml | DTC + Select | Limited 200 cases |
| Mar 10 | Purity | Pét-Nat Rosé | $24 | 750ml | DTC + Retail | Seasonal release |
| Mar 3 | Donkey & Goat | Stone Crusher | $28 | 750ml | Wholesale | New label, existing blend |
| Feb 24 | Les Lunes | Skin Contact Pinot Gris | $30 | 750ml | DTC | Orange wine, new for them |
| Feb 15 | Martha Stoumen | Nero d'Avola | $34 | 750ml | DTC | First Italian varietal |
| Feb 8 | Subject to Change | Whole Cluster Syrah | $32 | 750ml | DTC | New producer, 2nd release |

**Trends**:
- 9 new SKUs in 8 weeks across tracked competitors
- Average launch price: $31.89 (up $2 from same period 2025)
- DTC remains preferred launch channel (78% of launches)
- Orange/skin-contact wines gaining traction`,

  // Woody - Content
  'w-cm-1': `# Weekly Social Content Calendar - Week 14

| Day | Platform | Content | Caption Theme | Asset Needed | Status |
|-----|----------|---------|---------------|-------------|--------|
| Mon | Instagram | Vineyard morning shot | "Monday mornings taste better with..." | Photo | Ready |
| Mon | Stories | Behind-the-scenes bottling | Quick video of bottling line | Video clip | Ready |
| Tue | Instagram | Wine + food pairing | Spring salad + Rosé pairing | Styled photo | Draft |
| Tue | TikTok | "What natural wine actually means" | Educational, 60sec | Script ready | Draft |
| Wed | Instagram | Customer spotlight | Feature @oakland_wine_lover's post | Repost | Ready |
| Thu | Instagram | New vintage teaser | "Something special is coming..." | Bottle close-up | Draft |
| Thu | Stories | Poll: "Rosé or Red for spring?" | Engagement driver | Graphic | Ready |
| Fri | Instagram | Weekend wine recommendation | "Your Friday pour" | Lifestyle photo | Draft |
| Fri | TikTok | Winemaker Q&A clips | From recent interview footage | Edit from raw | Pending |
| Sat | Stories | Weekend vibes / user repost | Curated UGC | Collect from tags | Pending |
| Sun | Instagram | Vineyard sunset | Reflective, week-ahead tease | Photo | Ready |

**Notes**:
- Lean into Scribe price drop narrative if approved — position our consistent pricing as brand strength
- Vero Wines launch is a content opportunity — "welcome to the neighborhood" angle?
- 5/11 posts ready, 4 in draft, 2 pending assets`,

  'w-cm-2': `# Blog Post Draft: Why Natural Wine Is Having a Moment

*Estimated reading time: 5 minutes*

---

There's a shift happening in how Americans think about what they drink. It's not just about flavor anymore — it's about transparency, craft, and connection to the land. Natural wine, once a niche obsession of sommeliers and Brooklyn wine bars, has crossed over into the mainstream. And this time, it's here to stay.

## The Numbers Tell the Story

The US natural wine market hit $1.8 billion in Q1 2026, growing at 14% year-over-year while conventional wine barely manages 2%. But the real story isn't in the aggregate numbers — it's in who's buying.

A new generation of wine drinkers, ages 22 to 35, is discovering wine not through their parents' Napa trips but through Instagram reels and TikTok videos. They care about what's in the bottle, and more importantly, what isn't.

## What "Natural" Actually Means

Let's be honest: the term "natural wine" has been controversial. Without a legal definition, it's been applied loosely. But the core principles are simple:

- **Organic or biodynamic farming** — no synthetic pesticides or herbicides
- **Native yeast fermentation** — using the yeasts naturally present on grapes
- **Minimal intervention** — little to no added sulfites, no commercial additives
- **Transparency** — knowing exactly what went into your bottle

## Why It Matters Now

Three converging trends are driving this moment:

1. **The clean label movement** has expanded from food to beverage
2. **Climate consciousness** makes sustainable farming practices resonate
3. **Authenticity over brand** — consumers want real stories, not marketing polish

## What's Next

We believe the next frontier is radical transparency...

*[Draft continues — awaiting review and brand voice alignment]*`,

  'w-cm-3': `# Email Campaign: Spring Collection Launch

**Subject Line Options:**
1. "Spring is here. So are 3 new wines."
2. "Your spring pour, sorted."
3. "Fresh vines, fresh wines — our spring lineup"

**Preview Text:** New releases + free shipping on 6+ bottles

---

**Header**: [Hero image: bottles in spring garden setting]

**Headline**: Spring Collection 2026

**Body:**

Winter's done. The vines are waking up, and so is our lineup.

Three new releases, each made with zero additives, native yeast, and grapes from our sustainably farmed vineyard in Sonoma.

**The Spring Three:**

🍷 **2025 Rosé** — Dry, mineral, absolutely crushable. Grenache + Mourvèdre.
$22 / bottle

🍷 **2025 Skin-Contact White** — Our first orange wine. 10 days on skins. Textured and wild.
$28 / bottle

🍷 **2025 Pét-Nat** — Naturally sparkling, bone dry, perfect for everything.
$24 / bottle

**[SHOP THE COLLECTION]**

Free shipping on orders of 6+ bottles. Wine club members get early access + 15% off.

---

**Footer**: Unsubscribe | Our vineyard: Sonoma, CA | Follow us @yourbrand`,

  'w-cm-4': `# Brand Voice Guidelines Update

## Core Voice Attributes

### 1. Honest
We say what we mean. No wine-speak jargon, no pretension. If a wine tastes like crushed rocks and citrus, we say that — not "minerality-driven with citrus overtones."

### 2. Warm
We're inviting, not exclusive. Wine is for everyone. Our tone is the friend who knows a lot about wine but never makes you feel dumb for not knowing.

### 3. Grounded
We're connected to the land, the seasons, the process. Our language reflects the physical reality of farming and winemaking.

### 4. Playful (but not silly)
We don't take ourselves too seriously, but we take our craft seriously. Humor is welcome; puns are case-by-case.

## Do's and Don'ts

| Do | Don't |
|----|-------|
| "Made with zero additives" | "Artisanally crafted" |
| "Our vineyard in Sonoma" | "Our estate" |
| "This wine is great with pizza" | "Pairs excellently with wood-fired Neapolitan cuisine" |
| "We use native yeast" | "We employ indigenous fermentation techniques" |
| Talk about the farmer/winemaker | Talk about "the brand" in third person |
| Use first person (we, our) | Use corporate language |

## Social Media Voice
- Instagram: Warm, visual-first, story-driven
- TikTok: Educational, casual, personality-forward
- Email: Personal, direct, like a note from a friend
- Website: Clean, confident, informative without being academic`,

  // Sarah - NovaPharma
  's-np-1': `# Competitor Pipeline Tracker - March 2026

| Company | Drug | Target | Phase | Indication | Est. Filing | Change |
|---------|------|--------|-------|------------|-------------|--------|
| AbbVie | Rinvoq ext. | JAK1 | Phase III | Lupus SLE | Q3 2026 | On track |
| Eli Lilly | Lebrikizumab | IL-13 | Approved | Atopic Dermatitis | — | Launched Feb 2026 |
| Pfizer | PF-06826647 | TYK2 | Phase III | Psoriasis | Q1 2027 | NEW: moved to Phase III |
| Novartis | Secukinumab SC | IL-17A | Phase III ext. | Axial SpA | Q4 2026 | Enrollment complete |
| UCB | Bimekizumab | IL-17A/F | Phase III | Hidradenitis | Q2 2027 | On track |
| Bristol-Myers | Deucravacitinib | TYK2 | Phase III | Lupus | Q1 2027 | New indication added |
| Janssen | Tremfya | IL-23 | Phase III | Ulcerative Colitis | Q3 2026 | Positive topline data |
| Sun Pharma | Novel IL-17 | IL-17 | Phase II | Psoriasis | TBD | NEW entry this month |

## Key Changes This Month
1. **Pfizer PF-06826647** advanced to Phase III — significant competitive development for TYK2 space
2. **BMS Deucravacitinib** added Lupus indication — broadening competitive landscape
3. **Sun Pharma** new IL-17 entry — could increase future competition in segment`,

  's-np-2': `# FDA Regulatory Landscape: Autoimmune Therapies

## Recent Regulatory Actions (Last 30 Days)

### New Guidance Published
- **March 22, 2026**: FDA issued updated guidance on IL-17 pathway therapies
  - Expanded indication scope for moderate-to-severe cases
  - Updated safety monitoring requirements for combination therapies
  - New fast-track eligibility criteria for novel mechanisms

### Key Approvals
- **Lebrikizumab** (Eli Lilly): Approved Feb 28 for moderate-to-severe atopic dermatitis
- **Upadacitinib** (AbbVie): Label expansion approved for Giant Cell Arteritis

### Advisory Committee Meetings Scheduled
- April 15: DERMDAC meeting on novel psoriasis therapies
- May 8: AADAC meeting on biosimilar substitution guidance

## Implications for NovaPharma
1. Updated IL-17 guidance creates opportunity for differentiated positioning
2. Fast-track criteria update may accelerate your timeline by 6-9 months
3. Combination therapy monitoring requirements add clinical burden but create barrier to entry
4. Biosimilar substitution discussion could affect market dynamics for established therapies`,

  's-np-3': `# Market Sizing: IL-17 Inhibitors, US + EU

## Total Addressable Market

### United States
| Indication | Prevalence | Treatable Pop. | Market Value (2026E) |
|-----------|-----------|---------------|---------------------|
| Plaque Psoriasis | 7.5M | 2.1M | $8.2B |
| Psoriatic Arthritis | 1.5M | 890K | $3.4B |
| Ankylosing Spondylitis | 560K | 340K | $1.8B |
| Hidradenitis Suppurativa | 1.2M | 480K | $1.2B |
| **Total US** | | | **$14.6B** |

### EU5 (DE, FR, UK, IT, ES)
| Indication | Treatable Pop. | Market Value (2026E) |
|-----------|---------------|---------------------|
| Plaque Psoriasis | 1.8M | $5.1B |
| Psoriatic Arthritis | 640K | $2.2B |
| Ankylosing Spondylitis | 280K | $1.1B |
| Hidradenitis Suppurativa | 320K | $0.7B |
| **Total EU5** | | **$9.1B** |

### Combined US + EU5: $23.7B

## Growth Projections
- 2026-2030 CAGR: 8.2% (US), 6.7% (EU5)
- Key growth drivers: expanded indications, biosimilar competition in older therapies driving switch to IL-17
- NovaPharma addressable segment (novel IL-17 mechanism): estimated $4.2B by 2030`,

  's-np-4': `# Weekly Client Briefing Memo - Mar 24

**To:** NovaPharma Strategy Team
**From:** Sarah Chen, Strategy Consultant
**Date:** March 24, 2026
**Re:** Weekly Intelligence Update

---

## Priority Items

### 1. FDA IL-17 Guidance Update (HIGH)
New guidance published March 22 affects your regulatory pathway. Three key changes:
- Expanded indication scope benefits your broad-spectrum approach
- Updated safety monitoring adds cost but creates differentiation opportunity
- Fast-track criteria update — **your compound may now qualify**. Recommend immediate regulatory team review.

### 2. Pfizer Phase III Advancement (MEDIUM-HIGH)
PF-06826647 moved to Phase III for psoriasis. This is a TYK2 inhibitor, adjacent to your space. Competitive implications:
- Validates the pathway approach
- May compete for the same investigator sites
- Differentiation story remains intact (mechanism of action is distinct)

### 3. Sun Pharma IL-17 Entry (LOW-MEDIUM)
New Phase II entry. Early stage, but worth monitoring. Indian pharma entrants historically compete on cost.

## Recommended Actions
1. Schedule regulatory strategy session to evaluate fast-track eligibility
2. Update competitive positioning deck with Pfizer Phase III data
3. No immediate action on Sun Pharma — continue monitoring

## Next Week Preview
- AACR conference (Apr 1-4): Watching for relevant immunology presentations
- Q1 earnings season begins: Competitor commentary on pipeline priorities`,

  // Sarah - GreenBuild
  's-gb-1': `# US Sustainable Construction Market Entry Analysis

## Executive Summary
The US sustainable construction market is valued at $187B in 2026, growing at 11.3% CAGR. Federal incentives (IRA, IIJA) and state-level building codes are accelerating adoption. Market entry timing is favorable for GreenBuild's product portfolio.

## Market Segments

| Segment | Size (2026E) | Growth | GreenBuild Fit |
|---------|-------------|--------|----------------|
| Green Building Materials | $62B | 13.1% | HIGH |
| Energy-Efficient Systems | $48B | 10.8% | MEDIUM |
| Sustainable Design Services | $31B | 12.4% | LOW |
| Waste Reduction/Circular | $24B | 14.2% | HIGH |
| Water Conservation | $22B | 9.6% | LOW |

## Competitive Landscape
- **Established players**: Interface, Armstrong, Owens Corning (brand advantage, distribution)
- **Disruptors**: BamCore, Ecovative, CarbonCure (technology advantage, VC-funded)
- **Gap**: Mid-market, code-compliant, contractor-friendly sustainable materials

## Recommended Entry Strategy
1. **Phase 1** (Months 1-6): Pacific Northwest market, partner with 3-5 regional distributors
2. **Phase 2** (Months 7-12): California expansion, leverage CA Green Building Code compliance
3. **Phase 3** (Year 2): National expansion via national distributor partnerships`,

  's-gb-2': `# Partner Identification: Green Building Materials

| Company | Location | Revenue | Products | Distribution | Fit Score |
|---------|----------|---------|----------|-------------|-----------|
| EcoSupply Pacific | Portland, OR | $45M | Reclaimed wood, bamboo | Regional (OR, WA) | 92/100 |
| GreenSource Materials | Seattle, WA | $38M | Insulation, panels | Regional (WA, ID) | 88/100 |
| Pacific Sustainable | San Francisco, CA | $72M | Full range | West Coast | 85/100 |
| Verdant Building Co. | Sacramento, CA | $28M | Concrete alternatives | CA only | 82/100 |
| NorthWest Green | Vancouver, WA | $19M | Specialty finishes | OR, WA | 78/100 |
| Cascade Materials | Bend, OR | $15M | Timber, decking | Pacific NW | 75/100 |
| Bay Area Eco Build | Oakland, CA | $52M | Mixed materials | SF Bay Area | 73/100 |
| Sustainable Supply Co. | Tacoma, WA | $31M | Hardware, fixtures | WA, OR | 70/100 |

## Recommended Priority Partners
1. **EcoSupply Pacific** — Best regional fit, complementary product range, established contractor relationships
2. **GreenSource Materials** — Strong insulation/panel offering fills GreenBuild's product gap
3. **Pacific Sustainable** — Largest potential partner, could accelerate CA entry timeline`,

  's-gb-3': `# Policy Monitor: IRA Clean Energy Provisions

## Latest Developments (March 2026)

### New Amendment: Section 45L Extension
The IRA Section 45L tax credit for energy-efficient new homes has been extended through 2030 with updated requirements:
- **$2,500 credit** for homes meeting Energy Star standards
- **$5,000 credit** for homes meeting DOE Zero Energy Ready standards
- **NEW**: Materials certification requirement added — sustainable materials get additional $1,000 credit

### Impact on GreenBuild
This is directly favorable. The new materials certification credit creates financial incentive for builders to source GreenBuild's certified sustainable materials. Estimated incremental market opportunity: $3.2B through 2030.

### State-Level Updates
| State | Development | Impact |
|-------|------------|--------|
| California | Updated CALGreen Code effective July 2026 | Higher sustainability requirements = larger addressable market |
| Oregon | New embodied carbon reporting requirement | Favors low-carbon materials (GreenBuild strength) |
| Washington | Clean Buildings Act expansion | Commercial buildings now included |
| Colorado | New green building incentive program | Opens new geographic market |`,

  's-gb-4': `# Strategy Deck Draft v3 - Board Review

## GreenBuild: US Market Entry Strategy
### Prepared for Board of Directors | March 2026

---

**Slide 1: Executive Summary**
- US sustainable construction: $187B market, 11.3% CAGR
- Entry via Pacific Northwest, expand to California
- 3 priority distribution partners identified
- Federal policy tailwinds (IRA Section 45L extension)
- Projected Year 1 revenue: $8-12M

**Slide 2: Why Now**
- IRA incentives creating unprecedented demand
- State building codes tightening (CA, OR, WA leading)
- Competitor landscape has a gap in mid-market, contractor-friendly products
- Our product certifications align with new federal materials credit

**Slide 3: Market Opportunity**
[Market sizing data from full report]

**Slide 4: Competitive Positioning**
[2x2 matrix: Price vs. Sustainability Certification]
GreenBuild positioned in "certified + affordable" quadrant — currently unoccupied

**Slide 5: Go-to-Market**
Phase 1: PNW (Q3-Q4 2026) → Phase 2: California (Q1-Q2 2027) → Phase 3: National (2028)

**Slide 6: Financial Projections**
| | Year 1 | Year 2 | Year 3 |
|---|--------|--------|--------|
| Revenue | $10M | $28M | $52M |
| Gross Margin | 34% | 38% | 41% |
| EBITDA | -$2M | $3M | $12M |

**Slide 7: Key Risks & Mitigations**
[Risk matrix with mitigation strategies]

**Slide 8: Ask**
- $5M for US market entry
- Board approval for distribution partnerships
- Timeline: Begin Phase 1 July 2026`,

  // Sarah - BD
  's-bd-1': `# RFP Alert: Ontario Ministry of Health

## Summary
**Issuer:** Ontario Ministry of Health, Digital Health Division
**Title:** Digital Health Transformation Strategy & Implementation Advisory
**Posted:** March 29, 2026
**Deadline:** April 18, 2026
**Estimated Value:** CAD $2.5-4M
**Duration:** 18 months

## Scope
The Ministry is seeking a strategy consulting firm to:
1. Assess current digital health infrastructure across 14 regional health authorities
2. Develop a 5-year digital transformation roadmap
3. Design implementation governance framework
4. Provide change management strategy for 50,000+ healthcare workers
5. Benchmark against leading digital health systems (Denmark, Estonia, Singapore)

## Fit Assessment: STRONG
- Aligns with your healthcare strategy expertise
- You have prior Ontario government experience (2024 engagement)
- Digital health is an adjacent capability to your pharma work
- Estimated effort: you + 2 subcontractors
- Win probability: 65-70% (based on criteria match and prior relationship)

## Key Evaluation Criteria
| Criteria | Weight | Our Strength |
|----------|--------|-------------|
| Relevant experience | 30% | Strong — NovaPharma + prior MOH work |
| Methodology | 25% | Strong — proven framework |
| Team qualifications | 20% | Medium — may need digital health subcontractor |
| Cost | 15% | Strong — competitive as independent |
| Innovation | 10% | Medium — need to demonstrate digital expertise |

## Recommended Next Steps
1. Review full RFP document (attached)
2. Identify digital health subcontractor partner
3. Begin proposal draft by April 4
4. Client reference: confirm availability of 2 references`,

  's-bd-2': `# Target Account Research: MedAlliance Group

## Company Overview
- **Industry:** Healthcare services conglomerate
- **HQ:** Boston, MA
- **Revenue:** $3.8B (2025)
- **Employees:** 12,000+
- **Key contacts identified:** 4 (VP Strategy, Chief Transformation Officer, Head of M&A, SVP Operations)

## Strategic Situation
MedAlliance is undergoing a major portfolio restructuring:
- Divesting 3 non-core clinical service lines
- Acquiring capabilities in digital therapeutics
- Board mandate to achieve $200M in operational efficiencies by 2028

## Engagement Opportunities
1. **Portfolio strategy advisory** — Help evaluate divest vs. keep decisions (est. $800K-1.2M)
2. **Post-merger integration** — If digital therapeutics acquisition proceeds (est. $1.5-2M)
3. **Operational efficiency program** — Process redesign across service lines (est. $2-3M)

## Competitive Intelligence
- McKinsey has done prior work with them (2023, operational review)
- No current strategy firm on retainer (confirmed via LinkedIn research)
- CFO recently spoke at a conference about "finding the right strategic partner for the next phase"`,

  's-bd-3': `# Proposal Draft: Digital Health Transformation

**[DRAFT — FOR REVIEW]**

---

**Proposal for:** Ontario Ministry of Health
**Submitted by:** Sarah Chen Consulting
**Date:** [TBD]

## Executive Summary
We propose a phased approach to developing Ontario's digital health transformation strategy...

## Our Approach

### Phase 1: Discovery & Assessment (Months 1-3)
- Stakeholder interviews across 14 regional health authorities
- Current-state technology and process mapping
- Patient journey analysis for 5 priority care pathways
- International benchmarking (Denmark, Estonia, Singapore, Australia)

### Phase 2: Strategy Development (Months 4-8)
- Vision and target state architecture
- 5-year transformation roadmap with clear milestones
- Investment case and funding model
- Governance framework design

### Phase 3: Implementation Planning (Months 9-18)
- Detailed implementation plans for Year 1 priorities
- Change management strategy and communication plan
- Capability building program for regional teams
- Monitoring and evaluation framework

## Why Us
- Prior Ontario government experience
- Deep healthcare strategy expertise
- Lean team structure = cost-effective + senior attention
- Proven methodology across 15+ healthcare transformation engagements

## Proposed Team
- **Sarah Chen** — Engagement lead, strategy
- **[TBD]** — Digital health subject matter expert (subcontractor)
- **[TBD]** — Change management specialist (subcontractor)

## Investment
[Fee schedule TBD — targeting CAD $3.2M]`,

  's-bd-4': `# Pipeline Tracker - March 2026

| Opportunity | Client | Value | Stage | Win Prob. | Next Step | Target Close |
|------------|--------|-------|-------|-----------|-----------|-------------|
| Digital Health Strategy | Ontario MOH | $2.8M | RFP Received | 65% | Draft proposal by Apr 4 | May 2026 |
| Portfolio Strategy | MedAlliance | $1.0M | Prospecting | 25% | Intro meeting requested | Q3 2026 |
| Post-Merger Integration | MedAlliance | $1.8M | Future | 15% | Depends on acquisition | Q4 2026 |
| Market Entry Advisory | GreenBuild | $180K | Active | 95% | Ongoing engagement | Ongoing |
| Pipeline Strategy | NovaPharma | $320K | Active | 95% | Ongoing engagement | Ongoing |
| Ops Efficiency | Regional Health Co | $450K | Proposal Sent | 45% | Follow-up call Apr 2 | Apr 2026 |
| Board Advisory | TechHealth Inc | $120K | Verbal Agree | 85% | Contract review | Apr 2026 |

## Pipeline Summary
- **Total pipeline value:** $6.67M
- **Weighted pipeline:** $3.14M
- **Active engagements:** $500K (GreenBuild + NovaPharma)
- **Target for Q2:** Close Ontario MOH + Regional Health Co = $3.25M new revenue`,

  // Marcus - Competitive Intel
  'm-ci-1': `# Weekly Competitor Digest - Payments (Mar 24-28)

## Top Alerts

### Stripe
- **New Connect pricing announced** (effective April 15): Platform fee reduced from 0.5% to 0.4% for high-volume partners (>$10M/year)
- Launched Stripe Capital in 3 new EU markets
- Blog post: "The Future of Embedded Finance" — signals move deeper into BaaS

### Square
- **New developer portal launched** — complete API redesign, improved sandbox
- Square Checking launched nationwide (was beta in 5 states)
- Partnership with Shopify for in-person payments integration

### Adyen
- Q4 earnings: 22% revenue growth, processing volume up 28%
- Expanded in-store payment capabilities in North America
- New "Adyen for Platforms" offering — direct competitor to Stripe Connect

### PayPal/Braintree
- Quiet week. Ongoing restructuring under new CTO
- Job postings suggest investment in real-time payments infrastructure

## Competitive Implications for Us
1. Stripe Connect price reduction puts pressure on our platform pricing — need to evaluate response
2. Adyen's platform play validates our market but adds a well-funded competitor
3. Square's dev portal refresh raises the bar for developer experience — our docs need refresh`,

  'm-ci-2': `# Feature Comparison Matrix: Checkout APIs

| Feature | Us | Stripe | Square | Adyen | PayPal |
|---------|-----|--------|--------|-------|--------|
| Hosted checkout | Yes | Yes | Yes | Yes | Yes |
| Custom checkout (API) | Yes | Yes | Yes | Yes | Yes |
| One-click checkout | Yes | Yes (Link) | No | Yes | Yes (Fastlane) |
| Apple Pay | Yes | Yes | Yes | Yes | Yes |
| Google Pay | Yes | Yes | Yes | Yes | Yes |
| Buy Now Pay Later | No ❌ | Yes (Klarna) | Yes (Afterpay) | Yes (multiple) | Yes (native) |
| Crypto payments | No | Yes | No | No | Yes |
| 3D Secure | Yes | Yes | Yes | Yes | Yes |
| Dynamic currency | Yes | Yes | No | Yes | Yes |
| Subscription billing | Basic | Advanced | Basic | Advanced | Basic |
| Marketplace splits | Yes | Yes | No | Yes | No |
| Instant payouts | No ❌ | Yes | Yes | Yes | No |
| Webhooks | Yes | Yes | Yes | Yes | Yes |
| Sandbox/testing | Good | Excellent | Excellent (new) | Good | Fair |
| Mobile SDKs | iOS, Android | iOS, Android, RN | iOS, Android | iOS, Android | iOS, Android |

## Gaps to Address (Priority Order)
1. **Buy Now Pay Later** — table stakes, we're the only major player without it
2. **Instant payouts** — increasingly expected by platforms and marketplaces
3. **Subscription billing** — our basic offering losing deals to Stripe`,

  'm-ci-3': `# Stripe Connect vs Square for Platforms: Deep Dive

## Overview
Both Stripe Connect and Square for Business are competing for the same mid-market platform segment we target. This analysis compares their offerings as of March 2026.

## Pricing Comparison

| Component | Stripe Connect | Square | Us |
|-----------|---------------|--------|-----|
| Transaction fee | 2.9% + $0.30 | 2.6% + $0.10 | 2.7% + $0.20 |
| Platform fee | 0.4% (new, was 0.5%) | 0.5% | 0.45% |
| Instant payout | 1% (min $1) | 1.5% | N/A |
| International | +1.5% | +3% | +1.2% |
| Chargeback fee | $15 | $0 (absorbed) | $15 |
| Monthly platform fee | $0 | $0 | $0 |

## Feature Comparison

### Stripe Strengths
- Best-in-class API design and documentation
- Largest developer community
- Revenue recognition (Stripe Revenue Recognition)
- Radar for fraud (ML-based, best in class)
- Identity verification (Stripe Identity)

### Square Strengths
- In-person + online unified platform
- Square Banking (checking, savings, loans)
- No chargeback fees (unique in market)
- Hardware ecosystem (Terminal, Register, Reader)
- Simpler onboarding (faster go-live)

### Our Strengths
- Competitive international pricing
- Vertical-specific features (healthcare compliance, education)
- Dedicated account management for all platform partners
- Custom settlement schedules
- White-label capability

## Strategic Recommendation
Position on vertical expertise and white-label capability. Cannot win on pure developer experience (Stripe) or hardware ecosystem (Square). Our moat is deep vertical integrations and enterprise-grade customization.`,

  'm-ci-4': `# Competitor Pricing Changes: Q1 2026

| Company | Change | Effective | Impact |
|---------|--------|-----------|--------|
| Stripe | Connect platform fee: 0.5% → 0.4% | Apr 15 | HIGH — direct competitive pressure |
| Stripe | Instant payout fee: 1.5% → 1% | Mar 1 | MEDIUM — we don't offer this yet |
| Square | Online transaction: 2.9% → 2.6% | Feb 15 | HIGH — now cheapest for domestic |
| Square | Chargeback fee: $15 → $0 | Jan 15 | MEDIUM — unique positioning |
| Adyen | Platform processing: custom → 0.6% standard | Mar 1 | LOW — still more expensive |
| PayPal | Standard rate: 3.49% → 2.99% | Feb 1 | LOW — still highest in market |
| Worldpay | Enterprise rate: 2.5% → 2.3% | Jan 1 | LOW — enterprise only |

## Price Trend Analysis
- Industry-wide downward pressure on transaction fees (avg -0.15% YoY)
- Platform/marketplace fees trending down faster (-0.1% in Q1 alone)
- Value-add services (instant payouts, BNPL, fraud) becoming primary margin drivers
- Our position: mid-market on price, need to win on value-add and vertical depth`,

  // Marcus - User Research
  'm-ur-1': `# Interview Themes: Enterprise Onboarding (n=12)

## Methodology
12 semi-structured interviews with enterprise customers (ARR >$100K) who completed onboarding in the last 90 days. Average interview length: 42 minutes.

## Key Themes

### Theme 1: Integration Complexity (mentioned by 11/12)
> "The API was fine, but connecting it to our existing ERP took way longer than expected."

Most enterprises struggle not with our API itself but with integrating into their existing tech stack. Common pain points:
- ERP integration (SAP, Oracle, NetSuite)
- Existing payment reconciliation workflows
- User permission mapping from their IdP

### Theme 2: Compliance Documentation (9/12)
> "We needed SOC 2 evidence for our audit and it took 3 weeks to get the right documents from your team."

Compliance documentation is a critical onboarding blocker. Enterprises need:
- SOC 2 Type II reports (available but hard to find)
- PCI DSS attestation in specific formats
- Custom BAAs for healthcare clients
- Data processing agreements aligned with their legal templates

### Theme 3: Dedicated Support During Go-Live (8/12)
> "The first week after go-live was terrifying. Having a Slack channel with your engineers saved us."

Enterprises want white-glove support during the critical first week of live transactions. Current offering is good but inconsistent.

### Theme 4: Sandbox Limitations (7/12)
> "Your sandbox doesn't simulate failures well. We went live and saw error codes we'd never seen in testing."

Sandbox environment doesn't adequately simulate:
- Network timeouts
- Bank-specific decline codes
- 3D Secure edge cases
- Settlement timing variations

## Recommended Actions
1. Build pre-built ERP integration connectors (SAP, Oracle, NetSuite) — biggest impact
2. Create self-serve compliance document portal
3. Standardize go-live support program (dedicated Slack + engineer for first 2 weeks)
4. Enhance sandbox with failure simulation modes`,

  'm-ur-2': `# Survey Results: Checkout Abandonment Drivers

## Overview
- **Survey period:** March 1-15, 2026
- **Respondents:** 2,847 end-users who abandoned checkout on client merchant sites
- **Response rate:** 12.3%

## Top Abandonment Reasons

| Reason | % of Respondents | Change vs. Q4 |
|--------|-----------------|---------------|
| Unexpected fees/total | 34% | -2% |
| Required account creation | 27% | -5% ↓ |
| Didn't trust site with payment | 19% | +1% |
| Checkout too long/complex | 16% | -3% ↓ |
| Preferred payment method unavailable | 14% | +4% ↑ |
| Technical error/crash | 11% | +2% |
| Wanted BNPL, not available | 9% | +6% ↑ |
| Shipping too slow/expensive | 8% | -1% |

## Key Insight: BNPL Demand Surging
"Preferred payment method unavailable" and "Wanted BNPL" are the fastest-growing abandonment reasons. Combined, 23% of abandoners cite payment method limitations. This aligns with our competitive gap analysis — we're the only major checkout without BNPL.

## Segment Analysis
- **Gen Z (18-25)**: BNPL demand 3x higher than average (27% cite it)
- **Mobile users**: "Checkout too long" is #1 reason (29% vs 16% overall)
- **High-value carts ($200+)**: BNPL demand highest (31%)

## Recommended Actions
1. **Priority 1:** Add BNPL integration (Klarna or Affirm partnership)
2. **Priority 2:** Implement one-click checkout for returning users
3. **Priority 3:** Optimize mobile checkout flow (reduce steps from 4 to 2)`,

  'm-ur-3': `# Running Insights Dashboard - March 2026

## Active Research Streams

### Enterprise Onboarding (12 interviews completed)
- **Status:** Analysis complete
- **Top theme:** Integration complexity with existing systems
- **Action items:** 4 recommendations delivered to engineering
- **Next:** Follow-up interviews in 60 days to measure improvement

### Checkout Abandonment (2,847 survey responses)
- **Status:** Analysis complete
- **Top insight:** BNPL absence driving 23% of abandonment
- **Action items:** BNPL prioritization brief sent to product
- **Next:** A/B test one-click checkout in April

### Developer Experience (ongoing)
- **Status:** In progress (8/15 interviews completed)
- **Emerging themes:** Documentation quality, SDK consistency, error messaging
- **Next interviews:** Scheduled through April 10

### Churn Analysis (ongoing)
- **Status:** In progress (8 exit interviews completed)
- **Emerging themes:** Pricing pressure, feature gaps (BNPL, instant payouts)
- **Next:** Complete remaining 7 interviews by April 15

## Cumulative Insights (All Streams)
| Theme | Frequency | Streams | Priority |
|-------|-----------|---------|----------|
| BNPL demand | 47 mentions | 3 of 4 | P0 |
| Integration complexity | 34 mentions | 2 of 4 | P0 |
| Developer docs quality | 28 mentions | 2 of 4 | P1 |
| Instant payouts demand | 22 mentions | 2 of 4 | P1 |
| Mobile checkout friction | 19 mentions | 1 of 4 | P1 |
| Compliance docs access | 15 mentions | 1 of 4 | P2 |`,

  'm-ur-4': `# Churn Interview Synthesis (n=8)

## Overview
8 exit interviews with customers who churned in Q1 2026. Average tenure before churn: 14 months.

## Primary Churn Reasons

| Reason | Count | Switched To |
|--------|-------|------------|
| Pricing (found cheaper alternative) | 3 | Square (2), Adyen (1) |
| Missing features (BNPL, instant payouts) | 3 | Stripe (2), Adyen (1) |
| Poor support experience | 1 | Stripe |
| Acquired / changed business model | 1 | N/A |

## Key Quotes
> "Stripe just has more. BNPL, instant payouts, identity verification. You guys are good but you're missing pieces we need." — Former mid-market client

> "Square dropped their rates and absorbed chargebacks. At our volume, that's $40K/year in savings." — Former SMB client

> "The product was fine, but when we had an issue during Black Friday it took 6 hours to get someone on the phone." — Former enterprise client

## Patterns
1. **Feature gaps are the #1 controllable churn reason** — BNPL and instant payouts specifically
2. **Price competition from Square** is hitting SMB segment hardest
3. **Support SLA** needs improvement for enterprise tier
4. 1 of 8 churns was uncontrollable (business model change)

## Win-Back Opportunities
- 3 of 8 said they would "consider coming back" if we added BNPL and instant payouts
- 1 said better enterprise support would bring them back
- Estimated recoverable ARR: $280K`,

  // Marcus - Stakeholder Updates
  'm-su-1': `# Weekly Product Update - Mar 28

**To:** Leadership Team, Engineering, Design
**From:** Marcus Johnson, Product Manager
**Sprint:** Sprint 14 (Mar 17-28)

---

## Shipped This Week
- **Webhook retry logic v2** — Exponential backoff with dead letter queue. Reduces failed webhook rate by estimated 73%.
- **Dashboard redesign (Phase 1)** — New merchant dashboard landing page. A/B test live, measuring engagement.
- **API rate limiting improvements** — Graduated rate limits based on plan tier. Better developer experience.

## In Progress
- **3D Secure 2.3 upgrade** — On track for next sprint. Integration testing with card networks this week.
- **Multi-currency settlement** — Design review completed. Engineering starts next sprint.
- **Mobile SDK v4** — Beta testing with 3 partners. 2 minor bugs found, fixes in progress.

## Blocked / At Risk
- **BNPL integration** — Klarna partnership agreement still in legal review (3 weeks now). Escalated to VP. This is our #1 feature gap per user research.

## Metrics This Week
| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Transaction volume | $142M | $138M | ↑ 2.9% |
| API uptime | 99.97% | 99.99% | ↓ |
| Avg checkout time | 28s | 31s | ↓ (good) |
| Failed webhooks | 0.3% | 1.1% | ↓ (good, new retry logic) |
| Support tickets | 234 | 251 | ↓ 6.8% |

## Next Week Focus
1. Complete 3D Secure 2.3 integration testing
2. BNPL legal escalation follow-up
3. Mobile SDK v4 beta bug fixes
4. Begin developer portal content refresh planning`,

  'm-su-2': `# Sprint 14 Summary + Retro

## Sprint Overview
- **Duration:** Mar 17-28 (2 weeks)
- **Velocity:** 34 points (target: 32) ✅
- **Completion rate:** 89% (8/9 stories completed)

## Completed Stories
| Story | Points | Owner |
|-------|--------|-------|
| Webhook retry logic v2 | 8 | Backend team |
| Dashboard redesign Phase 1 | 5 | Frontend team |
| API rate limiting improvements | 5 | Platform team |
| Settlement report export | 3 | Backend team |
| Checkout timeout extension | 2 | Frontend team |
| Error code documentation | 2 | DevRel |
| Test coverage: payment flows | 5 | QA |
| Security patch: dependency update | 4 | Security |

## Incomplete
| Story | Points | Reason | Carry to Sprint 15? |
|-------|--------|--------|---------------------|
| Mobile SDK v4 release | 5 | 2 bugs found in beta | Yes |

## Retro Highlights

### What went well
- Webhook retry shipped ahead of schedule — great collaboration between backend and infrastructure
- Dashboard A/B test launched on day 1 of sprint — no delays
- Security patch handled proactively (not reactive to an incident)

### What to improve
- Mobile SDK testing started too late in the sprint — need to front-load QA
- BNPL blocked on legal for 3+ weeks — need escalation process for cross-functional dependencies
- Sprint planning meeting ran 30 min over — timeboxing needed

### Action Items
1. Implement QA kickoff on Day 1 for all stories with external dependencies
2. Create escalation template for cross-functional blockers
3. Timebox sprint planning to 60 min, overflow goes to async`,

  'm-su-3': `# Q1 2026 Roadmap Review Deck

## Product Roadmap: Q1 Review & Q2 Preview
### Payments Product | March 2026

---

**Slide 1: Q1 Scorecard**
| Goal | Target | Actual | Status |
|------|--------|--------|--------|
| Transaction volume growth | +10% | +12.3% | ✅ Exceeded |
| API uptime | 99.95% | 99.97% | ✅ Exceeded |
| New enterprise clients | 8 | 6 | ⚠️ Below target |
| Feature releases | 12 | 14 | ✅ Exceeded |
| NPS | 45 | 48 | ✅ Exceeded |
| Churn rate | <2% | 2.3% | ❌ Above target |

**Slide 2: Key Wins**
- Webhook reliability: 73% reduction in failed deliveries
- Checkout speed: 28s avg (down from 35s in Q4)
- Dashboard redesign launched (A/B testing)
- 3 new enterprise clients in healthcare vertical

**Slide 3: Key Misses**
- Enterprise client acquisition below target (6 vs 8)
- Churn above target — driven by feature gaps (BNPL, instant payouts)
- BNPL partnership delayed by legal review

**Slide 4: Q2 Priorities**
1. BNPL integration (Klarna) — P0
2. Instant payouts — P0
3. 3D Secure 2.3 — P1
4. Multi-currency settlement — P1
5. Developer portal refresh — P1
6. Mobile SDK v4 GA — P2

**Slide 5: Q2 Resource Allocation**
[Pie chart: 40% New Features, 25% Platform/Infra, 20% Developer Experience, 15% Tech Debt]

**Slide 6: Risks**
- BNPL legal review timeline uncertain
- Instant payouts requires banking partner (conversations in progress)
- Engineering capacity: 2 senior engineers starting parental leave in April`,

  'm-su-4': `# Monthly Metrics Report - February 2026

## Executive Dashboard

### Transaction Metrics
| Metric | February | January | MoM | YoY |
|--------|----------|---------|-----|-----|
| Total volume | $548M | $521M | +5.2% | +18.3% |
| Transaction count | 4.2M | 3.9M | +7.7% | +22.1% |
| Avg transaction | $130 | $134 | -3.0% | -3.1% |
| Success rate | 96.2% | 95.8% | +0.4pp | +1.1pp |

### Revenue
| Line | February | January | MoM |
|------|----------|---------|-----|
| Transaction fees | $4.82M | $4.58M | +5.2% |
| Platform fees | $1.21M | $1.14M | +6.1% |
| Value-add services | $0.38M | $0.34M | +11.8% |
| **Total revenue** | **$6.41M** | **$6.06M** | **+5.8%** |

### Customer Metrics
| Metric | February | January | MoM |
|--------|----------|---------|-----|
| Active merchants | 3,847 | 3,791 | +1.5% |
| New merchants | 124 | 118 | +5.1% |
| Churned merchants | 68 | 54 | +25.9% ⚠️ |
| Net merchant growth | 56 | 64 | -12.5% |
| NPS | 47 | 46 | +1 |

### Operational
| Metric | February | Target | Status |
|--------|----------|--------|--------|
| API uptime | 99.98% | 99.95% | ✅ |
| Avg response time | 142ms | <200ms | ✅ |
| P95 response time | 380ms | <500ms | ✅ |
| Support tickets | 1,047 | <1,200 | ✅ |
| Avg resolution time | 4.2h | <6h | ✅ |

## Notable: Churn Spike
February churn was 25.9% above January. Root cause analysis shows:
- 3 clients lost to Square (pricing)
- 2 clients lost to Stripe (BNPL feature)
- 1 client lost to Adyen (enterprise needs)
- 2 clients went out of business
Controllable churn (5 clients) driven by pricing pressure and feature gaps. BNPL remains #1 requested feature.`,
};

// ============================================
// WOODY PERSONA
// ============================================

const woodyTeams: Team[] = [
  {
    id: 'w-market-research',
    name: 'Market Research',
    type: 'research',
    description: 'Tracks the US natural wine market, consumer trends, distributor landscape, and pricing benchmarks.',
    personaId: 'woody',
    status: 'active',
    schedule: 'Daily at 8:00 AM',
    lead: {
      name: 'Scout',
      personality: 'Methodical and thorough',
      description: 'Research strategist who coordinates deep market analysis across wine industry data sources, consumer platforms, and distributor networks.',
    },
    subAgents: [
      {
        id: 'w-mr-sa1',
        name: 'Web Crawler',
        role: 'Web data collector — scrapes wine retail sites, review platforms, and industry publications',
        lifecycle: 'core',
        status: 'completed',
        skills: ['web scraping', 'site indexing', 'data extraction', 'URL discovery'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-mr-sa1-b1', label: 'Search: wine retail sites, review platforms', type: 'search', status: 'done' },
            { id: 'w-mr-sa1-b2', label: 'Scrape pricing & product pages', type: 'web-scrape', status: 'done' },
            { id: 'w-mr-sa1-b3', label: 'Parse into structured dataset', type: 'data', status: 'done' },
            { id: 'w-mr-sa1-b4', label: 'Cross-reference and validate sources', type: 'analysis', status: 'done' },
          ],
          edges: [
            { from: 'w-mr-sa1-b1', to: 'w-mr-sa1-b2' },
            { from: 'w-mr-sa1-b2', to: 'w-mr-sa1-b3' },
            { from: 'w-mr-sa1-b3', to: 'w-mr-sa1-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-29T06:00:00Z',
        completedAt: '2026-03-29T06:42:00Z',
      },
      {
        id: 'w-mr-sa2',
        name: 'Trend Analyst',
        role: 'Identifies emerging consumer trends from social data, search volume, and DTC purchase patterns',
        lifecycle: 'core',
        status: 'running',
        progress: 58,
        skills: ['data analysis', 'trend identification', 'statistical modeling', 'report generation'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-mr-sa2-b1', label: 'Load Q1 consumer data + social signals', type: 'data', status: 'done' },
            { id: 'w-mr-sa2-b2', label: 'Prompt: identify emerging themes', type: 'prompt', status: 'done' },
            { id: 'w-mr-sa2-b3', label: 'Statistical trend analysis', type: 'analysis', status: 'running' },
            { id: 'w-mr-sa2-b4', label: 'Write trend summary memo', type: 'memo', status: 'queued' },
          ],
          edges: [
            { from: 'w-mr-sa2-b1', to: 'w-mr-sa2-b2' },
            { from: 'w-mr-sa2-b2', to: 'w-mr-sa2-b3' },
            { from: 'w-mr-sa2-b3', to: 'w-mr-sa2-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-30T08:00:00Z',
      },
      {
        id: 'w-mr-sa3',
        name: 'Report Builder',
        role: 'Assembles research findings into polished reports, slide decks, and executive summaries',
        lifecycle: 'core',
        status: 'idle',
        skills: ['document formatting', 'slide generation', 'executive summaries', 'data visualization'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-mr-sa3-b1', label: 'Ingest analysis outputs', type: 'analysis', status: 'queued' },
            { id: 'w-mr-sa3-b2', label: 'Draft executive memo', type: 'memo', status: 'queued' },
            { id: 'w-mr-sa3-b3', label: 'Generate slide deck', type: 'slides', status: 'queued' },
          ],
          edges: [
            { from: 'w-mr-sa3-b1', to: 'w-mr-sa3-b2' },
            { from: 'w-mr-sa3-b2', to: 'w-mr-sa3-b3' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-28T10:00:00Z',
      },
      {
        id: 'w-mr-sa-task1', name: 'Vero Wines Researcher', role: 'Competitor deep dive',
        lifecycle: 'task', task: 'Research new competitor Vero Wines — founder, pricing, distribution',
        status: 'running', progress: 35, startedAt: '2 hours ago',
        skills: ['competitor research', 'web scraping', 'brand analysis'],
        workspace: { type: 'canvas', blocks: [
          { id: 'tb1', label: 'Scrape DTC site', type: 'web-scrape', status: 'done' },
          { id: 'tb2', label: 'Social profiles', type: 'search', status: 'running' },
          { id: 'tb3', label: 'Compile report', type: 'memo', status: 'queued' },
        ], edges: [{ from: 'tb1', to: 'tb2' }, { from: 'tb2', to: 'tb3' }] },
        artifacts: [],
      },
      {
        id: 'w-mr-sa-task2', name: 'Expo Exhibitor Scanner', role: 'Event research',
        lifecycle: 'task', task: 'Scan Chicago Wine Expo exhibitor list and profile competitors',
        status: 'completed', startedAt: '3 days ago', completedAt: '2 days ago',
        skills: ['event research', 'web scraping', 'data extraction'],
        workspace: { type: 'sandbox', terminalLines: ['$ python3 scan_exhibitors.py --event "Chicago Wine Expo 2026"', 'Found 142 exhibitors', '$ python3 profile_competitors.py', 'Profiled 8 direct competitors'], files: ['exhibitors.json', 'competitor-profiles.json'] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Sources Monitored', value: 47, change: '+3 this week', trend: 'up', sparkline: [38, 40, 41, 43, 44, 45, 47] },
      { label: 'Insights Generated', value: 12, change: 'This week', trend: 'neutral', sparkline: [9, 11, 8, 14, 10, 13, 12] },
      { label: 'Reports Produced', value: 4, change: 'This month', trend: 'up', sparkline: [2, 2, 3, 3, 3, 4, 4] },
      { label: 'Coverage Depth', value: '94%', trend: 'up' },
    ],
    artifacts: [
      { id: 'w-mr-1', title: 'US Natural Wine Market Landscape Q1 2026', type: 'report', teamId: 'w-market-research', subAgentId: 'w-mr-sa1', subAgentName: 'Web Crawler', createdAt: '2026-03-27', daysAgo: 2, preview: artifactPreviews['w-mr-1'] },
      { id: 'w-mr-2', title: 'Consumer Trend Analysis: DTC Wine Brands', type: 'report', teamId: 'w-market-research', subAgentId: 'w-mr-sa2', subAgentName: 'Trend Analyst', createdAt: '2026-03-24', daysAgo: 5, preview: artifactPreviews['w-mr-2'] },
      { id: 'w-mr-3', title: 'Distributor Landscape: West Coast', type: 'data-table', teamId: 'w-market-research', subAgentId: 'w-mr-sa1', subAgentName: 'Web Crawler', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['w-mr-3'] },
      { id: 'w-mr-4', title: 'Pricing Benchmark: $20-40 Natural Red Wines', type: 'spreadsheet', teamId: 'w-market-research', subAgentId: 'w-mr-sa1', subAgentName: 'Web Crawler', createdAt: '2026-03-15', daysAgo: 14, preview: artifactPreviews['w-mr-4'] },
    ],
    activity: [
      { id: 'w-mr-a1', teamId: 'w-market-research', message: 'Spun up Trend Analyst to process Q1 consumer data', timestamp: '2 hours ago', type: 'agent-spawn' },
      { id: 'w-mr-a2', teamId: 'w-market-research', message: 'Web Crawler finished — 23 sources indexed across CA, OR, WA', timestamp: '5 hours ago', type: 'agent-complete' },
      { id: 'w-mr-a3', teamId: 'w-market-research', message: 'Consumer Trend Analysis promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 'w-mr-a4', teamId: 'w-market-research', message: 'Daily market scan completed', timestamp: '2 days ago', type: 'routine' },
      { id: 'w-mr-a5', teamId: 'w-market-research', message: 'Completed Q1 market landscape report', timestamp: '2 days ago', type: 'agent-complete' },
    ],
    automations: [
      { id: 'w-mr-auto-1', teamId: 'w-market-research', name: 'Daily market scan', schedule: 'Every day at 8:00 AM', enabled: true, lastRun: 'Today 8:00 AM', nextRun: 'Tomorrow 8:00 AM' },
      { id: 'w-mr-auto-2', teamId: 'w-market-research', name: 'Weekly distributor check', schedule: 'Every Monday at 9:00 AM', enabled: true, lastRun: 'Monday 9:00 AM', nextRun: 'Next Monday 9:00 AM' },
      { id: 'w-mr-auto-3', teamId: 'w-market-research', name: 'Monthly pricing benchmark', schedule: '1st of each month', enabled: true, lastRun: 'March 1', nextRun: 'April 1' },
    ],
    integrations: [
      { id: 'w-mr-int-1', name: 'Wine-Searcher API', type: 'api', status: 'connected', lastSync: '2 hours ago' },
      { id: 'w-mr-int-2', name: 'Nielsen IQ', type: 'data', status: 'connected', lastSync: '1 day ago' },
      { id: 'w-mr-int-3', name: 'Google Trends', type: 'api', status: 'connected', lastSync: 'Real-time' },
    ],
    terminal: {
      uptime: '18 days',
      files: ['data/', 'reports/', 'config.yaml', 'scrapers/'],
      activeProcesses: ['market_scan.py (PID 1892)', 'trend_watcher', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 18 days, 5:14',
        '$ ls data/',
        'wine-prices.csv  consumer-trends.json  distributor-list.json  sources/',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 08:00] Daily market scan completed. 47 sources indexed.',
        '$ wc -l data/wine-prices.csv',
        '1247 data/wine-prices.csv',
      ],
    },
    lastChecked: '6 hours ago',
  },
  {
    id: 'w-competitor-watch',
    name: 'Competitor Watch',
    type: 'monitoring',
    description: 'Monitors 5-8 competitor wine brands for pricing changes, new product launches, distribution deals, press coverage, and social media activity.',
    personaId: 'woody',
    status: 'active',
    schedule: 'Daily at 7:00 AM',
    lead: {
      name: 'Sentinel',
      personality: 'Vigilant and detail-oriented',
      description: 'Competitive intelligence specialist who monitors rival wine brands around the clock for pricing moves, launches, and strategic shifts.',
    },
    subAgents: [
      {
        id: 'w-cw-sa1',
        name: 'Price Tracker',
        role: 'Scrapes competitor DTC sites and retail aggregators for real-time price changes',
        lifecycle: 'core',
        status: 'running',
        progress: 72,
        skills: ['price monitoring', 'CSV export', 'change detection', 'API integration'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-3f8a',
            '$ python3 price_scraper.py --brands scribe,broc,martha,leslunes,purity,vero',
            'Scraping 6 brand DTC sites...',
            'Scribe: 3 price changes detected (Pinot -8%, Chard -6%, Rosé -4%)',
            'Vero Wines: NEW — 3 SKUs indexed ($28, $32, $35)',
            '$ curl -s https://wine-searcher.com/api/v2/prices?region=sonoma | jq ".results | length"',
            '156',
            '$ python3 compare_vs_baseline.py --output competitor-prices.csv',
            'Written 156 rows to competitor-prices.csv',
            '$ cp competitor-prices.csv /data/latest/ && echo "Synced"',
            'Synced',
          ],
          files: ['competitor-prices.csv', 'price-history.json'],
        },
        artifacts: [],
        startedAt: '2026-03-30T07:00:00Z',
      },
      {
        id: 'w-cw-sa2',
        name: 'Social Monitor',
        role: 'Tracks competitor social media accounts for engagement, content strategy, and brand signals',
        lifecycle: 'core',
        status: 'completed',
        skills: ['social listening', 'engagement analytics', 'content tracking', 'sentiment analysis'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-cw-sa2-b1', label: 'Search: competitor Instagram, TikTok handles', type: 'search', status: 'done' },
            { id: 'w-cw-sa2-b2', label: 'Scrape posts, followers, engagement', type: 'web-scrape', status: 'done' },
            { id: 'w-cw-sa2-b3', label: 'Automate interaction tracking via browser', type: 'browseruse', status: 'done' },
            { id: 'w-cw-sa2-b4', label: 'Analyze engagement trends', type: 'analysis', status: 'done' },
            { id: 'w-cw-sa2-b5', label: 'Build social activity comparison table', type: 'table', status: 'done' },
          ],
          edges: [
            { from: 'w-cw-sa2-b1', to: 'w-cw-sa2-b2' },
            { from: 'w-cw-sa2-b2', to: 'w-cw-sa2-b3' },
            { from: 'w-cw-sa2-b3', to: 'w-cw-sa2-b4' },
            { from: 'w-cw-sa2-b4', to: 'w-cw-sa2-b5' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-29T07:00:00Z',
        completedAt: '2026-03-29T07:38:00Z',
      },
      {
        id: 'w-cw-sa3',
        name: 'Digest Writer',
        role: 'Compiles all competitive signals into a weekly digest memo with actionable insights',
        lifecycle: 'core',
        status: 'completed',
        skills: ['competitive analysis', 'memo writing', 'insight prioritization', 'strategic recommendations'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-cw-sa3-b1', label: 'Load price + social + press data', type: 'data', status: 'done' },
            { id: 'w-cw-sa3-b2', label: 'Rank by strategic significance', type: 'analysis', status: 'done' },
            { id: 'w-cw-sa3-b3', label: 'Prompt: write digest with recommendations', type: 'prompt', status: 'done' },
            { id: 'w-cw-sa3-b4', label: 'Format weekly competitor digest', type: 'memo', status: 'done' },
          ],
          edges: [
            { from: 'w-cw-sa3-b1', to: 'w-cw-sa3-b2' },
            { from: 'w-cw-sa3-b2', to: 'w-cw-sa3-b3' },
            { from: 'w-cw-sa3-b3', to: 'w-cw-sa3-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-28T17:00:00Z',
        completedAt: '2026-03-28T17:22:00Z',
      },
      {
        id: 'w-cw-sa-task1',
        name: 'Scribe Analyst',
        role: 'One-off competitor deep dive',
        lifecycle: 'task',
        task: 'Scribe Winery deep dive',
        status: 'completed',
        startedAt: '1 week ago',
        completedAt: '6 days ago',
        skills: ['competitor analysis', 'pricing research'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'tb1', label: 'Research', type: 'search', status: 'done' },
            { id: 'tb2', label: 'Analysis', type: 'analysis', status: 'done' },
          ],
          edges: [{ from: 'tb1', to: 'tb2' }],
        },
        artifacts: [],
      },
      {
        id: 'w-cw-sa-task2', name: 'Vero Pricing Analyst', role: 'New competitor pricing',
        lifecycle: 'task', task: 'Track Vero Wines initial DTC pricing and compare to market',
        status: 'running', progress: 60, startedAt: '1 day ago',
        skills: ['price monitoring', 'market comparison'],
        workspace: { type: 'sandbox', terminalLines: ['$ curl -s https://verowines.com/shop | python3 extract_prices.py', 'Found 3 SKUs: Pinot ($35), Grenache ($32), Field Blend ($28)', '$ python3 compare_market.py --segment "natural-red-20-40"', 'Positioning: premium-mid range, DTC-only'], files: ['vero-prices.json', 'market-comparison.csv'] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Brands Tracked', value: 8, trend: 'neutral', sparkline: [8, 8, 8, 8, 8, 8, 8] },
      { label: 'Changes Detected', value: 5, change: 'This week', trend: 'up', sparkline: [2, 1, 3, 2, 4, 3, 5] },
      { label: 'Price Alerts', value: 3, change: 'New this week', trend: 'up', sparkline: [0, 1, 0, 1, 0, 2, 3] },
      { label: 'New Products Found', value: 4, change: 'This month', trend: 'up', sparkline: [1, 0, 2, 1, 1, 3, 4] },
    ],
    artifacts: [
      { id: 'w-cw-1', title: 'Weekly Competitor Digest - Mar 24-28', type: 'memo', teamId: 'w-competitor-watch', subAgentId: 'w-cw-sa3', subAgentName: 'Digest Writer', createdAt: '2026-03-28', daysAgo: 1, preview: artifactPreviews['w-cw-1'] },
      { id: 'w-cw-2', title: 'Competitor Pricing Matrix - March 2026', type: 'spreadsheet', teamId: 'w-competitor-watch', subAgentId: 'w-cw-sa1', subAgentName: 'Price Tracker', createdAt: '2026-03-26', daysAgo: 3, preview: artifactPreviews['w-cw-2'] },
      { id: 'w-cw-3', title: 'Scribe Winery Deep Dive', type: 'report', teamId: 'w-competitor-watch', subAgentId: 'w-cw-sa2', subAgentName: 'Social Monitor', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['w-cw-3'] },
      { id: 'w-cw-4', title: 'New Product Launches: Feb-Mar 2026', type: 'data-table', teamId: 'w-competitor-watch', subAgentId: 'w-cw-sa1', subAgentName: 'Price Tracker', createdAt: '2026-03-15', daysAgo: 14, preview: artifactPreviews['w-cw-4'] },
    ],
    activity: [
      { id: 'w-cw-a1', teamId: 'w-competitor-watch', message: 'Price change detected: Scribe Winery -8% on Pinot Noir', timestamp: '3 hours ago', type: 'alert' },
      { id: 'w-cw-a2', teamId: 'w-competitor-watch', message: 'Social Monitor finished — engagement data for 8 brands compiled', timestamp: '6 hours ago', type: 'agent-complete' },
      { id: 'w-cw-a3', teamId: 'w-competitor-watch', message: 'Competitor Pricing Matrix promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 'w-cw-a4', teamId: 'w-competitor-watch', message: 'New brand detected: Vero Wines (Sonoma, 3 SKUs)', timestamp: '1 day ago', type: 'alert' },
      { id: 'w-cw-a5', teamId: 'w-competitor-watch', message: 'Daily competitor scan completed', timestamp: '1 day ago', type: 'routine' },
    ],
    automations: [
      { id: 'w-cw-auto-1', teamId: 'w-competitor-watch', name: 'Daily competitor scan', schedule: 'Every day at 7:00 AM', enabled: true, lastRun: 'Today 7:00 AM', nextRun: 'Tomorrow 7:00 AM' },
      { id: 'w-cw-auto-2', teamId: 'w-competitor-watch', name: 'Price change alerts', schedule: 'Real-time monitoring', enabled: true, lastRun: '3 hours ago', nextRun: 'Continuous' },
      { id: 'w-cw-auto-3', teamId: 'w-competitor-watch', name: 'Weekly competitor digest', schedule: 'Every Friday at 5:00 PM', enabled: true, lastRun: 'Friday 5:00 PM', nextRun: 'Next Friday 5:00 PM' },
      { id: 'w-cw-auto-4', teamId: 'w-competitor-watch', name: 'Alert on new product launches', schedule: 'When detected', enabled: true, lastRun: '1 day ago', nextRun: 'On event' },
    ],
    integrations: [
      { id: 'w-cw-int-1', name: 'Instagram Graph API', type: 'social', status: 'connected', lastSync: '3 hours ago' },
      { id: 'w-cw-int-2', name: 'Wine-Searcher API', type: 'api', status: 'connected', lastSync: '2 hours ago' },
      { id: 'w-cw-int-3', name: 'Google Alerts', type: 'api', status: 'connected', lastSync: 'Real-time' },
      { id: 'w-cw-int-4', name: 'Vivino API', type: 'api', status: 'connected', lastSync: '6 hours ago' },
    ],
    terminal: {
      uptime: '14 days',
      files: ['data/', 'reports/', 'config.yaml', 'scripts/'],
      activeProcesses: ['price_monitor.py (PID 2341)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 14 days, 3:22',
        '$ ls data/',
        'competitor-prices.csv  market-trends.json  sources/',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 07:00] Daily scan completed. 3 changes detected.',
      ],
    },
    lastChecked: '6 hours ago',
  },
  {
    id: 'w-content-marketing',
    name: 'Content & Marketing',
    type: 'content',
    description: 'Produces weekly content ideas, drafts social posts, and generates marketing copy based on market research findings.',
    personaId: 'woody',
    status: 'active',
    schedule: 'Weekly on Mondays',
    lead: {
      name: 'Muse',
      personality: 'Creative and brand-savvy',
      description: 'Creative director who translates market insights and competitive intelligence into compelling brand content across social, email, and blog channels.',
    },
    subAgents: [
      {
        id: 'w-cm-sa1',
        name: 'Content Drafter',
        role: 'Writes blog posts, social captions, and email copy aligned with brand voice guidelines',
        lifecycle: 'core',
        status: 'running',
        progress: 40,
        skills: ['copywriting', 'brand voice', 'social media', 'SEO optimization', 'blog writing'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'w-cm-sa1-b1', label: 'Prompt: generate content ideas from market trends', type: 'prompt', status: 'done' },
            { id: 'w-cm-sa1-b2', label: 'Draft blog post + social captions', type: 'memo', status: 'running' },
            { id: 'w-cm-sa1-b3', label: 'Brand voice compliance check', type: 'analysis', status: 'queued' },
          ],
          edges: [
            { from: 'w-cm-sa1-b1', to: 'w-cm-sa1-b2' },
            { from: 'w-cm-sa1-b2', to: 'w-cm-sa1-b3' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-30T09:00:00Z',
      },
      {
        id: 'w-cm-sa2',
        name: 'Campaign Builder',
        role: 'Builds email campaigns, assembles design assets, and manages template library',
        lifecycle: 'core',
        status: 'completed',
        skills: ['email marketing', 'template design', 'audience segmentation', 'A/B testing'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-9c4d',
            '$ node campaign-builder.js --template spring-launch --brand woody',
            'Loading template: spring-launch...',
            'Injecting product data for 3 new SKUs...',
            '$ curl -X POST https://api.sendgrid.com/v3/campaigns -d @spring-campaign.json',
            '{"id":"camp_2026_spring","status":"draft","recipients":4821}',
            '$ ls campaign-assets/',
            'hero-image.jpg  product-rosé.jpg  product-skincontact.jpg  product-petnat.jpg',
            '$ ls templates/',
            'spring-launch.html  weekly-digest.html  wine-club-welcome.html',
            '$ echo "Campaign draft ready — 4,821 recipients"',
            'Campaign draft ready — 4,821 recipients',
          ],
          files: ['campaign-assets/', 'templates/'],
        },
        artifacts: [],
        startedAt: '2026-03-29T10:00:00Z',
        completedAt: '2026-03-29T10:35:00Z',
      },
      {
        id: 'w-cm-sa-task1', name: 'Scribe Response Writer', role: 'Competitive response',
        lifecycle: 'task', task: 'Draft blog post responding to Scribe Winery price drop',
        status: 'running', progress: 70, startedAt: '4 hours ago',
        skills: ['copywriting', 'competitive positioning'],
        workspace: { type: 'canvas', blocks: [
          { id: 'tb1', label: 'Research angle', type: 'analysis', status: 'done' },
          { id: 'tb2', label: 'Draft post', type: 'prompt', status: 'running' },
          { id: 'tb3', label: 'Brand voice check', type: 'analysis', status: 'queued' },
        ], edges: [{ from: 'tb1', to: 'tb2' }, { from: 'tb2', to: 'tb3' }] },
        artifacts: [],
      },
      {
        id: 'w-cm-sa-task2', name: 'Valentine Campaign Writer', role: 'Seasonal campaign',
        lifecycle: 'task', task: 'Create Valentine\'s Day wine pairing campaign',
        status: 'completed', startedAt: '3 weeks ago', completedAt: '2 weeks ago',
        skills: ['campaign creation', 'seasonal marketing'],
        workspace: { type: 'canvas', blocks: [{ id: 'tb1', label: 'Campaign brief', type: 'prompt', status: 'done' }], edges: [] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Drafts Ready', value: 5, change: 'For review', trend: 'neutral', sparkline: [3, 4, 3, 5, 4, 6, 5] },
      { label: 'Posts Scheduled', value: 11, change: 'This week', trend: 'up', sparkline: [7, 8, 9, 8, 10, 9, 11] },
      { label: 'Content Ideas', value: 8, change: 'In backlog', trend: 'neutral', sparkline: [6, 5, 7, 8, 6, 9, 8] },
      { label: 'Engagement Rate', value: '4.1%', change: '+0.3% vs last week', trend: 'up' },
    ],
    artifacts: [
      { id: 'w-cm-1', title: 'Weekly Social Content Calendar - Week 14', type: 'memo', teamId: 'w-content-marketing', subAgentId: 'w-cm-sa1', subAgentName: 'Content Drafter', createdAt: '2026-03-29', daysAgo: 0, preview: artifactPreviews['w-cm-1'] },
      { id: 'w-cm-2', title: 'Blog Post Draft: Why Natural Wine Is Having a Moment', type: 'document', teamId: 'w-content-marketing', subAgentId: 'w-cm-sa1', subAgentName: 'Content Drafter', createdAt: '2026-03-27', daysAgo: 2, preview: artifactPreviews['w-cm-2'] },
      { id: 'w-cm-3', title: 'Email Campaign: Spring Collection Launch', type: 'memo', teamId: 'w-content-marketing', subAgentId: 'w-cm-sa2', subAgentName: 'Campaign Builder', createdAt: '2026-03-24', daysAgo: 5, preview: artifactPreviews['w-cm-3'] },
      { id: 'w-cm-4', title: 'Brand Voice Guidelines Update', type: 'document', teamId: 'w-content-marketing', subAgentId: 'w-cm-sa1', subAgentName: 'Content Drafter', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['w-cm-4'] },
    ],
    activity: [
      { id: 'w-cm-a1', teamId: 'w-content-marketing', message: 'Spun up Content Drafter to write Week 14 social posts', timestamp: '1 hour ago', type: 'agent-spawn' },
      { id: 'w-cm-a2', teamId: 'w-content-marketing', message: 'Campaign Builder finished — spring email campaign ready with 4,821 recipients', timestamp: '1 day ago', type: 'agent-complete' },
      { id: 'w-cm-a3', teamId: 'w-content-marketing', message: 'Blog Post Draft promoted to team artifacts', timestamp: '2 days ago', type: 'artifact-promoted' },
      { id: 'w-cm-a4', teamId: 'w-content-marketing', message: 'Brand Voice Guidelines Update promoted to team artifacts', timestamp: '1 week ago', type: 'artifact-promoted' },
    ],
    automations: [
      { id: 'w-cm-auto-1', teamId: 'w-content-marketing', name: 'Weekly content calendar', schedule: 'Every Monday at 9:00 AM', enabled: true, lastRun: 'Monday 9:00 AM', nextRun: 'Next Monday 9:00 AM' },
      { id: 'w-cm-auto-2', teamId: 'w-content-marketing', name: 'Social post drafts from trends', schedule: 'After Market Research completes', enabled: true, lastRun: 'Today', nextRun: 'After next scan' },
      { id: 'w-cm-auto-3', teamId: 'w-content-marketing', name: 'Monthly brand voice review', schedule: '1st of each month', enabled: true, lastRun: 'March 1', nextRun: 'April 1' },
    ],
    integrations: [
      { id: 'w-cm-int-1', name: 'Mailchimp', type: 'email', status: 'connected', lastSync: '1 day ago' },
      { id: 'w-cm-int-2', name: 'Instagram Business', type: 'social', status: 'connected', lastSync: '4 hours ago' },
      { id: 'w-cm-int-3', name: 'Canva', type: 'storage', status: 'connected', lastSync: '2 hours ago' },
      { id: 'w-cm-int-4', name: 'Shopify', type: 'api', status: 'connected', lastSync: '1 day ago' },
    ],
    terminal: {
      uptime: '10 days',
      files: ['drafts/', 'templates/', 'brand-guide.md', 'assets/'],
      activeProcesses: ['content_scheduler.js (PID 3102)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 10 days, 8:47',
        '$ ls drafts/',
        'blog-natural-wine.md  social-week14.json  email-spring-launch.html',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 09:00] Content Drafter started. 3 items in queue.',
        '$ wc -l drafts/blog-natural-wine.md',
        '142 drafts/blog-natural-wine.md',
      ],
    },
    lastChecked: '6 hours ago',
  },
];

// ============================================
// SARAH PERSONA
// ============================================

const sarahTeams: Team[] = [
  {
    id: 's-novapharma',
    name: 'Client: NovaPharma',
    type: 'research',
    description: 'Tracks competitor pipelines, regulatory developments, market sizing for a new therapeutic area, and produces weekly briefing memos.',
    personaId: 'sarah',
    status: 'active',
    schedule: 'Daily at 7:00 AM',
    lead: {
      name: 'Atlas',
      personality: 'Precise and authoritative',
      description: 'Pharma strategy analyst who monitors clinical pipelines, FDA regulatory actions, and market dynamics in the autoimmune therapeutic space.',
    },
    subAgents: [
      {
        id: 's-np-sa1',
        name: 'Pipeline Scanner',
        role: 'Queries clinical trial databases and pharma press releases for pipeline movements',
        lifecycle: 'core',
        status: 'running',
        progress: 65,
        skills: ['clinical trials API', 'FDA monitoring', 'data parsing', 'alert generation'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-5b1e',
            '$ python3 pipeline_scan.py --targets "IL-17,TYK2,JAK1,IL-23" --sources clinicaltrials,fda,sec',
            'Querying ClinicalTrials.gov API... 847 results',
            'Filtering to autoimmune indications... 124 relevant',
            'Cross-referencing with FDA CDER database...',
            'NEW: Pfizer PF-06826647 status changed to Phase III',
            'NEW: Sun Pharma IL-17 inhibitor entered Phase II',
            '$ python3 fda_monitor.py --since 2026-03-01',
            'Found 3 new guidance documents, 2 approvals',
            '$ jq ".entries | length" pipeline-data.json',
            '24',
            '$ cp pipeline-data.json fda-updates.json /data/latest/',
            'Synced 2 files',
          ],
          files: ['pipeline-data.json', 'fda-updates.json'],
        },
        artifacts: [],
        startedAt: '2026-03-30T07:00:00Z',
      },
      {
        id: 's-np-sa2',
        name: 'Market Modeler',
        role: 'Builds market sizing models and revenue projections for therapeutic areas',
        lifecycle: 'core',
        status: 'completed',
        skills: ['market sizing', 'financial modeling', 'epidemiology data', 'revenue projection', 'TAM analysis'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 's-np-sa2-b1', label: 'Load epidemiology + pricing data', type: 'data', status: 'done' },
            { id: 's-np-sa2-b2', label: 'Run TAM/SAM model for IL-17 segment', type: 'analysis', status: 'done' },
            { id: 's-np-sa2-b3', label: 'Build market sizing table (US + EU5)', type: 'table', status: 'done' },
            { id: 's-np-sa2-b4', label: 'Generate market sizing slides', type: 'slides', status: 'done' },
          ],
          edges: [
            { from: 's-np-sa2-b1', to: 's-np-sa2-b2' },
            { from: 's-np-sa2-b2', to: 's-np-sa2-b3' },
            { from: 's-np-sa2-b3', to: 's-np-sa2-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-22T08:00:00Z',
        completedAt: '2026-03-22T09:15:00Z',
      },
      {
        id: 's-np-sa3',
        name: 'Memo Writer',
        role: 'Synthesizes pipeline, regulatory, and market data into client-ready briefing memos',
        lifecycle: 'core',
        status: 'completed',
        skills: ['executive writing', 'data synthesis', 'client communication', 'strategic framing'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 's-np-sa3-b1', label: 'Aggregate pipeline + regulatory findings', type: 'analysis', status: 'done' },
            { id: 's-np-sa3-b2', label: 'Prompt: prioritize by client impact', type: 'prompt', status: 'done' },
            { id: 's-np-sa3-b3', label: 'Write weekly client briefing memo', type: 'memo', status: 'done' },
          ],
          edges: [
            { from: 's-np-sa3-b1', to: 's-np-sa3-b2' },
            { from: 's-np-sa3-b2', to: 's-np-sa3-b3' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-28T08:00:00Z',
        completedAt: '2026-03-28T08:28:00Z',
      },
      {
        id: 's-np-sa-task1', name: 'Fast-Track Evaluator', role: 'Regulatory pathway analysis',
        lifecycle: 'task', task: 'Evaluate whether NovaPharma compound qualifies for new FDA fast-track criteria',
        status: 'running', progress: 40, startedAt: '4 hours ago',
        skills: ['regulatory analysis', 'clinical pathway evaluation'],
        workspace: { type: 'canvas', blocks: [
          { id: 'tb1', label: 'Parse FDA guidance', type: 'data', status: 'done' },
          { id: 'tb2', label: 'Match to compound', type: 'analysis', status: 'running' },
          { id: 'tb3', label: 'Write assessment', type: 'memo', status: 'queued' },
        ], edges: [{ from: 'tb1', to: 'tb2' }, { from: 'tb2', to: 'tb3' }] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Pipeline Entries Tracked', value: 24, change: '+3 this month', trend: 'up', sparkline: [18, 19, 20, 21, 21, 23, 24] },
      { label: 'Regulatory Updates', value: 6, change: 'This month', trend: 'up', sparkline: [1, 2, 3, 3, 4, 5, 6] },
      { label: 'Client Memos Delivered', value: 4, change: 'This month', trend: 'neutral', sparkline: [4, 4, 3, 4, 4, 4, 4] },
      { label: 'Market Coverage', value: '97%', trend: 'up' },
    ],
    artifacts: [
      { id: 's-np-1', title: 'Competitor Pipeline Tracker - March 2026', type: 'spreadsheet', teamId: 's-novapharma', subAgentId: 's-np-sa1', subAgentName: 'Pipeline Scanner', createdAt: '2026-03-28', daysAgo: 1, preview: artifactPreviews['s-np-1'] },
      { id: 's-np-2', title: 'FDA Regulatory Landscape: Autoimmune Therapies', type: 'report', teamId: 's-novapharma', subAgentId: 's-np-sa1', subAgentName: 'Pipeline Scanner', createdAt: '2026-03-26', daysAgo: 3, preview: artifactPreviews['s-np-2'] },
      { id: 's-np-3', title: 'Market Sizing: IL-17 Inhibitors, US + EU', type: 'report', teamId: 's-novapharma', subAgentId: 's-np-sa2', subAgentName: 'Market Modeler', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['s-np-3'] },
      { id: 's-np-4', title: 'Weekly Client Briefing Memo - Mar 24', type: 'memo', teamId: 's-novapharma', subAgentId: 's-np-sa3', subAgentName: 'Memo Writer', createdAt: '2026-03-28', daysAgo: 1, preview: artifactPreviews['s-np-4'] },
    ],
    activity: [
      { id: 's-np-a1', teamId: 's-novapharma', message: 'Spun up Pipeline Scanner for daily refresh — querying ClinicalTrials.gov and FDA CDER', timestamp: '1 hour ago', type: 'agent-spawn' },
      { id: 's-np-a2', teamId: 's-novapharma', message: 'Pipeline Scanner detected: Pfizer PF-06826647 moved to Phase III', timestamp: '4 hours ago', type: 'alert' },
      { id: 's-np-a3', teamId: 's-novapharma', message: 'Memo Writer finished — weekly client briefing memo ready', timestamp: '1 day ago', type: 'agent-complete' },
      { id: 's-np-a4', teamId: 's-novapharma', message: 'Market Sizing: IL-17 Inhibitors promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 's-np-a5', teamId: 's-novapharma', message: 'Daily pipeline refresh completed', timestamp: '1 day ago', type: 'routine' },
    ],
    automations: [
      { id: 's-np-auto-1', teamId: 's-novapharma', name: 'Daily pipeline refresh', schedule: 'Every day at 7:00 AM', enabled: true, lastRun: 'Today 7:00 AM', nextRun: 'Tomorrow 7:00 AM' },
      { id: 's-np-auto-2', teamId: 's-novapharma', name: 'FDA alert monitor', schedule: 'Real-time', enabled: true, lastRun: '4 hours ago', nextRun: 'Continuous' },
      { id: 's-np-auto-3', teamId: 's-novapharma', name: 'Weekly client briefing memo', schedule: 'Every Monday at 8:00 AM', enabled: true, lastRun: 'Monday', nextRun: 'Next Monday' },
      { id: 's-np-auto-4', teamId: 's-novapharma', name: 'Quarterly market sizing update', schedule: 'Jan 1, Apr 1, Jul 1, Oct 1', enabled: true, lastRun: 'January 1', nextRun: 'April 1' },
    ],
    integrations: [
      { id: 's-np-int-1', name: 'ClinicalTrials.gov', type: 'api', status: 'connected', lastSync: '2 hours ago' },
      { id: 's-np-int-2', name: 'FDA FAERS', type: 'api', status: 'connected', lastSync: '1 day ago' },
      { id: 's-np-int-3', name: 'PubMed', type: 'api', status: 'connected', lastSync: '4 hours ago' },
      { id: 's-np-int-4', name: 'Evaluate Pharma', type: 'data', status: 'connected', lastSync: '1 day ago' },
    ],
    terminal: {
      uptime: '21 days',
      files: ['data/', 'memos/', 'pipeline-config.yaml', 'models/'],
      activeProcesses: ['pipeline_scan.py (PID 4201)', 'fda_monitor.py (PID 4203)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 21 days, 11:38',
        '$ ls data/',
        'pipeline-data.json  fda-updates.json  market-model.xlsx  competitors/',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 07:00] Pipeline scan complete. 2 new entries detected.',
        '$ jq ".entries | length" data/pipeline-data.json',
        '24',
      ],
    },
    deadline: { label: 'Client briefing call', date: 'Apr 1', daysLeft: 2 },
    lastChecked: '2 hours ago',
  },
  {
    id: 's-greenbuild',
    name: 'Client: GreenBuild',
    type: 'research',
    description: 'Researches the US sustainable construction market, identifies potential partners, monitors relevant policy changes, and produces strategy deck updates.',
    personaId: 'sarah',
    status: 'active',
    schedule: 'Daily at 8:00 AM',
    lead: {
      name: 'Terra',
      personality: 'Analytical and policy-savvy',
      description: 'Sustainable markets analyst who tracks green building regulations, identifies distribution partners, and maintains the market entry strategy.',
    },
    subAgents: [
      {
        id: 's-gb-sa1',
        name: 'Policy Tracker',
        role: 'Monitors federal and state government RSS feeds for building code and clean energy policy changes',
        lifecycle: 'core',
        status: 'running',
        progress: 80,
        skills: ['policy monitoring', 'RSS feed parsing', 'regulatory analysis', 'government data APIs'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-2d7c',
            '$ python3 policy_monitor.py --feeds ira,doe,epa,calgreen,oregon-deq,wa-commerce',
            'Polling 6 government RSS feeds...',
            'NEW: IRA Section 45L amendment — materials certification credit added',
            'NEW: Oregon embodied carbon reporting requirement published',
            '$ python3 parse_ira_provisions.py --section 45L',
            'Parsed 14 provisions, 3 new amendments since last scan',
            '$ ls state-policies/',
            'california.json  oregon.json  washington.json  colorado.json',
            '$ jq ".amendments | length" ira-provisions.json',
            '3',
            '$ cp ira-provisions.json state-policies/ /data/latest/',
            'Synced',
          ],
          files: ['ira-provisions.json', 'state-policies/'],
        },
        artifacts: [],
        startedAt: '2026-03-30T08:00:00Z',
      },
      {
        id: 's-gb-sa2',
        name: 'Strategy Analyst',
        role: 'Synthesizes market data, partner research, and policy updates into strategy recommendations',
        lifecycle: 'core',
        status: 'completed',
        skills: ['strategic analysis', 'market entry planning', 'competitive positioning', 'slide deck generation', 'partner evaluation'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 's-gb-sa2-b1', label: 'Load market + partner + policy data', type: 'data', status: 'done' },
            { id: 's-gb-sa2-b2', label: 'Competitive gap analysis', type: 'analysis', status: 'done' },
            { id: 's-gb-sa2-b3', label: 'Prompt: draft strategic recommendations', type: 'prompt', status: 'done' },
            { id: 's-gb-sa2-b4', label: 'Write market entry memo', type: 'memo', status: 'done' },
            { id: 's-gb-sa2-b5', label: 'Generate board presentation slides', type: 'slides', status: 'done' },
          ],
          edges: [
            { from: 's-gb-sa2-b1', to: 's-gb-sa2-b2' },
            { from: 's-gb-sa2-b2', to: 's-gb-sa2-b3' },
            { from: 's-gb-sa2-b3', to: 's-gb-sa2-b4' },
            { from: 's-gb-sa2-b4', to: 's-gb-sa2-b5' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-26T09:00:00Z',
        completedAt: '2026-03-26T10:05:00Z',
      },
      {
        id: 's-gb-sa-task1', name: 'Competitor Mapper', role: 'Market entry analysis',
        lifecycle: 'task', task: 'Map competitive landscape for Pacific Northwest sustainable construction',
        status: 'completed', startedAt: '1 week ago', completedAt: '5 days ago',
        skills: ['competitive mapping', 'market analysis'],
        workspace: { type: 'sandbox', terminalLines: ['$ python3 map_competitors.py --region PNW --sector sustainable-construction', 'Found 23 competitors in region', '$ python3 score_competitors.py', 'Scored and ranked by market fit'], files: ['pnw-competitors.json', 'competitive-landscape.pdf'] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Partners Identified', value: 8, change: '+2 this week', trend: 'up', sparkline: [3, 4, 5, 5, 6, 6, 8] },
      { label: 'Policy Updates', value: 4, change: 'This month', trend: 'neutral', sparkline: [1, 2, 2, 3, 3, 3, 4] },
      { label: 'Deck Version', value: 'v3', change: 'Ready for board', trend: 'neutral' },
      { label: 'Market Coverage', value: '91%', trend: 'up' },
    ],
    artifacts: [
      { id: 's-gb-1', title: 'US Sustainable Construction Market Entry Analysis', type: 'report', teamId: 's-greenbuild', subAgentId: 's-gb-sa2', subAgentName: 'Strategy Analyst', createdAt: '2026-03-27', daysAgo: 2, preview: artifactPreviews['s-gb-1'] },
      { id: 's-gb-2', title: 'Partner Identification: Green Building Materials', type: 'data-table', teamId: 's-greenbuild', subAgentId: 's-gb-sa2', subAgentName: 'Strategy Analyst', createdAt: '2026-03-25', daysAgo: 4, preview: artifactPreviews['s-gb-2'] },
      { id: 's-gb-3', title: 'Policy Monitor: IRA Clean Energy Provisions', type: 'memo', teamId: 's-greenbuild', subAgentId: 's-gb-sa1', subAgentName: 'Policy Tracker', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['s-gb-3'] },
      { id: 's-gb-4', title: 'Strategy Deck Draft v3 - Board Review', type: 'deck', teamId: 's-greenbuild', subAgentId: 's-gb-sa2', subAgentName: 'Strategy Analyst', createdAt: '2026-03-26', daysAgo: 3, preview: artifactPreviews['s-gb-4'] },
    ],
    activity: [
      { id: 's-gb-a1', teamId: 's-greenbuild', message: 'Spun up Policy Tracker to scan IRA and state building code feeds', timestamp: '3 hours ago', type: 'agent-spawn' },
      { id: 's-gb-a2', teamId: 's-greenbuild', message: 'Policy Tracker detected: new IRA Section 45L materials certification credit', timestamp: '1 day ago', type: 'alert' },
      { id: 's-gb-a3', teamId: 's-greenbuild', message: 'Strategy Analyst finished — deck v3 finalized for board review', timestamp: '3 days ago', type: 'agent-complete' },
      { id: 's-gb-a4', teamId: 's-greenbuild', message: 'Strategy Deck Draft v3 promoted to team artifacts', timestamp: '3 days ago', type: 'artifact-promoted' },
      { id: 's-gb-a5', teamId: 's-greenbuild', message: 'Daily policy monitor completed', timestamp: '1 day ago', type: 'routine' },
    ],
    automations: [
      { id: 's-gb-auto-1', teamId: 's-greenbuild', name: 'Daily policy monitor', schedule: 'Every day at 8:00 AM', enabled: true, lastRun: 'Today 8:00 AM', nextRun: 'Tomorrow 8:00 AM' },
      { id: 's-gb-auto-2', teamId: 's-greenbuild', name: 'Weekly partner search', schedule: 'Every Tuesday at 10:00 AM', enabled: true, lastRun: 'Tuesday', nextRun: 'Next Tuesday' },
      { id: 's-gb-auto-3', teamId: 's-greenbuild', name: 'Monthly market analysis refresh', schedule: '15th of each month', enabled: true, lastRun: 'March 15', nextRun: 'April 15' },
    ],
    integrations: [
      { id: 's-gb-int-1', name: 'Congress.gov API', type: 'api', status: 'connected', lastSync: '6 hours ago' },
      { id: 's-gb-int-2', name: 'USGBC', type: 'data', status: 'connected', lastSync: '1 day ago' },
      { id: 's-gb-int-3', name: 'BuildingGreen', type: 'api', status: 'connected', lastSync: '2 hours ago' },
    ],
    terminal: {
      uptime: '12 days',
      files: ['data/', 'strategy/', 'policy-feeds.yaml', 'partners/'],
      activeProcesses: ['policy_monitor.py (PID 5501)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 12 days, 6:55',
        '$ ls data/',
        'ira-provisions.json  state-policies/  market-entry.xlsx  partners.csv',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 08:00] Policy scan complete. 2 new amendments found.',
        '$ cat partners.csv | wc -l',
        '9',
      ],
    },
    deadline: { label: 'Board meeting', date: 'Apr 22', daysLeft: 23 },
    lastChecked: '2 hours ago',
  },
  {
    id: 's-business-dev',
    name: 'Business Development',
    type: 'bd',
    description: 'Monitors RFP boards, tracks target companies, produces tailored proposal drafts, and keeps the pipeline warm.',
    personaId: 'sarah',
    status: 'active',
    schedule: 'Daily at 7:30 AM',
    lead: {
      name: 'Hunter',
      personality: 'Persistent and opportunity-focused',
      description: 'Deal origination specialist who scans RFP boards, researches target accounts, and coordinates proposal development to keep the pipeline healthy.',
    },
    subAgents: [
      {
        id: 's-bd-sa1',
        name: 'RFP Scanner',
        role: 'Scrapes government and private RFP boards for opportunities matching consulting criteria',
        lifecycle: 'core',
        status: 'running',
        progress: 88,
        skills: ['RFP parsing', 'opportunity scoring', 'government procurement', 'criteria matching'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-7a2f',
            '$ python3 scrape_rfps.py --source merx,biddingo,rfpdb',
            'Scanning 3 RFP boards...',
            'Found 12 matches against criteria.yaml',
            '$ cat rfp-matches.json | jq ".[] | .title"',
            '"Digital Health Transformation Advisory"',
            '"Healthcare IT Modernization"',
            '"Provincial Health System Strategy Review"',
            '$ python3 score_rfps.py --criteria criteria.yaml --input rfp-matches.json',
            'Top match: Ontario Ministry of Health (score: 92/100)',
            '$ mv rfp-matches.json /data/latest/',
            'Done. 12 RFPs saved.',
          ],
          files: ['rfp-matches.json', 'criteria.yaml'],
        },
        artifacts: [],
        startedAt: '2026-03-30T07:30:00Z',
      },
      {
        id: 's-bd-sa2',
        name: 'Account Researcher',
        role: 'Deep-dives target accounts — financials, strategy, key contacts, competitive intelligence',
        lifecycle: 'task',
        task: 'Deep dive on MedAlliance Group',
        status: 'completed',
        skills: ['company research', 'SEC filings analysis', 'LinkedIn intelligence', 'strategic assessment'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 's-bd-sa2-b1', label: 'Search: MedAlliance Group news, SEC filings', type: 'search', status: 'done' },
            { id: 's-bd-sa2-b2', label: 'Scrape LinkedIn, Glassdoor, press releases', type: 'web-scrape', status: 'done' },
            { id: 's-bd-sa2-b3', label: 'Analyze strategic situation + opportunities', type: 'analysis', status: 'done' },
            { id: 's-bd-sa2-b4', label: 'Write target account research memo', type: 'memo', status: 'done' },
          ],
          edges: [
            { from: 's-bd-sa2-b1', to: 's-bd-sa2-b2' },
            { from: 's-bd-sa2-b2', to: 's-bd-sa2-b3' },
            { from: 's-bd-sa2-b3', to: 's-bd-sa2-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-27T09:00:00Z',
        completedAt: '2026-03-27T09:42:00Z',
      },
      {
        id: 's-bd-sa3',
        name: 'Proposal Writer',
        role: 'Drafts tailored proposals based on RFP requirements and account research',
        lifecycle: 'task',
        task: 'Draft Ontario MOH RFP response',
        status: 'idle',
        skills: ['proposal writing', 'pricing strategy', 'RFP compliance', 'presentation design', 'win themes'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 's-bd-sa3-b1', label: 'Load RFP requirements + account context', type: 'data', status: 'queued' },
            { id: 's-bd-sa3-b2', label: 'Analyze evaluation criteria + fit', type: 'analysis', status: 'queued' },
            { id: 's-bd-sa3-b3', label: 'Prompt: draft proposal sections', type: 'prompt', status: 'queued' },
            { id: 's-bd-sa3-b4', label: 'Write full proposal document', type: 'memo', status: 'queued' },
            { id: 's-bd-sa3-b5', label: 'Generate proposal presentation', type: 'slides', status: 'queued' },
          ],
          edges: [
            { from: 's-bd-sa3-b1', to: 's-bd-sa3-b2' },
            { from: 's-bd-sa3-b2', to: 's-bd-sa3-b3' },
            { from: 's-bd-sa3-b3', to: 's-bd-sa3-b4' },
            { from: 's-bd-sa3-b4', to: 's-bd-sa3-b5' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-24T10:00:00Z',
      },
    ],
    kpis: [
      { label: 'Pipeline Value', value: '$6.7M', trend: 'up' },
      { label: 'Active Opportunities', value: 7, change: '+1 this week', trend: 'up', sparkline: [4, 5, 5, 6, 6, 6, 7] },
      { label: 'Win Rate', value: '68%', change: 'Trailing 12mo', trend: 'up' },
      { label: 'Proposals Pending', value: 2, trend: 'neutral', sparkline: [1, 2, 1, 3, 2, 1, 2] },
    ],
    artifacts: [
      { id: 's-bd-1', title: 'RFP Alert: Ontario Ministry of Health', type: 'memo', teamId: 's-business-dev', subAgentId: 's-bd-sa1', subAgentName: 'RFP Scanner', createdAt: '2026-03-29', daysAgo: 0, preview: artifactPreviews['s-bd-1'] },
      { id: 's-bd-2', title: 'Target Account Research: MedAlliance Group', type: 'report', teamId: 's-business-dev', subAgentId: 's-bd-sa2', subAgentName: 'Account Researcher', createdAt: '2026-03-27', daysAgo: 2, preview: artifactPreviews['s-bd-2'] },
      { id: 's-bd-3', title: 'Proposal Draft: Digital Health Transformation', type: 'document', teamId: 's-business-dev', subAgentId: 's-bd-sa3', subAgentName: 'Proposal Writer', createdAt: '2026-03-24', daysAgo: 5, preview: artifactPreviews['s-bd-3'] },
      { id: 's-bd-4', title: 'Pipeline Tracker - March 2026', type: 'spreadsheet', teamId: 's-business-dev', subAgentId: 's-bd-sa1', subAgentName: 'RFP Scanner', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['s-bd-4'] },
    ],
    activity: [
      { id: 's-bd-a1', teamId: 's-business-dev', message: 'RFP Scanner found new match: Ontario Ministry of Health (score: 92/100)', timestamp: '2 hours ago', type: 'alert' },
      { id: 's-bd-a2', teamId: 's-business-dev', message: 'Account Researcher finished — MedAlliance Group deep dive complete', timestamp: '2 days ago', type: 'agent-complete' },
      { id: 's-bd-a3', teamId: 's-business-dev', message: 'Target Account Research promoted to team artifacts', timestamp: '2 days ago', type: 'artifact-promoted' },
      { id: 's-bd-a4', teamId: 's-business-dev', message: 'Daily RFP board scan completed', timestamp: '1 day ago', type: 'routine' },
      { id: 's-bd-a5', teamId: 's-business-dev', message: 'Spun up Proposal Writer for Ontario MOH RFP response', timestamp: '5 days ago', type: 'agent-spawn' },
    ],
    automations: [
      { id: 's-bd-auto-1', teamId: 's-business-dev', name: 'RFP board scanner', schedule: 'Every day at 7:30 AM', enabled: true, lastRun: 'Today 7:30 AM', nextRun: 'Tomorrow 7:30 AM' },
      { id: 's-bd-auto-2', teamId: 's-business-dev', name: 'Alert on matching RFPs', schedule: 'When detected', enabled: true, lastRun: '2 hours ago', nextRun: 'On event' },
      { id: 's-bd-auto-3', teamId: 's-business-dev', name: 'Weekly pipeline update', schedule: 'Every Friday at 4:00 PM', enabled: true, lastRun: 'Friday', nextRun: 'Next Friday' },
      { id: 's-bd-auto-4', teamId: 's-business-dev', name: 'Target account refresh', schedule: 'Every 2 weeks', enabled: true, lastRun: 'March 17', nextRun: 'March 31' },
    ],
    integrations: [
      { id: 's-bd-int-1', name: 'LinkedIn Sales Nav', type: 'crm', status: 'connected', lastSync: '3 hours ago' },
      { id: 's-bd-int-2', name: 'MERX', type: 'api', status: 'connected', lastSync: 'Real-time' },
      { id: 's-bd-int-3', name: 'Government of Canada', type: 'api', status: 'connected', lastSync: '1 day ago' },
      { id: 's-bd-int-4', name: 'HubSpot', type: 'crm', status: 'connected', lastSync: '2 hours ago' },
    ],
    terminal: {
      uptime: '16 days',
      files: ['data/', 'proposals/', 'criteria.yaml', 'accounts/'],
      activeProcesses: ['rfp_scanner.py (PID 6102)', 'pipeline_sync.py (PID 6104)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 16 days, 9:03',
        '$ ls data/',
        'rfp-matches.json  pipeline-tracker.csv  accounts/  proposals/',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 07:30] RFP scan complete. 12 matches found, 1 high-priority.',
        '$ jq ".[0].title" data/rfp-matches.json',
        '"Digital Health Transformation Advisory"',
      ],
    },
    deadline: { label: 'Ontario RFP deadline', date: 'Apr 18', daysLeft: 19 },
    lastChecked: '2 hours ago',
  },
];

// ============================================
// MARCUS PERSONA
// ============================================

const marcusTeams: Team[] = [
  {
    id: 'm-competitive-intel',
    name: 'Competitive Intel',
    type: 'monitoring',
    description: 'Tracks 10 competitor payment products for feature launches, pricing changes, API updates, and partnership announcements.',
    personaId: 'marcus',
    status: 'active',
    schedule: 'Daily at 8:00 AM',
    lead: {
      name: 'Radar',
      personality: 'Sharp and proactive',
      description: 'Competitive intelligence agent who monitors payment industry competitors around the clock for pricing moves, feature launches, and strategic signals.',
    },
    subAgents: [
      {
        id: 'm-ci-sa1',
        name: 'Pricing Monitor',
        role: 'Tracks competitor pricing pages and API documentation for rate changes',
        lifecycle: 'core',
        status: 'running',
        progress: 55,
        skills: ['price monitoring', 'web scraping', 'change detection', 'competitive benchmarking'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-8e3b',
            '$ python3 pricing_monitor.py --targets stripe,square,adyen,paypal,worldpay',
            'Polling 5 competitor pricing endpoints...',
            'CHANGE DETECTED: Stripe Connect platform fee 0.5% -> 0.4%',
            '$ curl -s https://stripe.com/pricing | python3 parse_pricing.py > stripe-pricing.json',
            'Parsed 14 pricing tiers from Stripe',
            '$ curl -s https://squareup.com/us/en/pricing | python3 parse_pricing.py > square-pricing.json',
            'Parsed 8 pricing tiers from Square',
            '$ python3 fetch_adyen.py --source investor-relations,pricing-page > adyen-data.json',
            'Fetched Adyen Q4 data + current pricing',
            '$ python3 compare_all.py --baseline q4-2025 --output /data/latest/',
            'Comparison complete. 7 changes detected in Q1.',
          ],
          files: ['stripe-pricing.json', 'square-pricing.json', 'adyen-data.json'],
        },
        artifacts: [],
        startedAt: '2026-03-30T08:00:00Z',
      },
      {
        id: 'm-ci-sa2',
        name: 'Feature Tracker',
        role: 'Monitors competitor changelogs, developer blogs, and product pages for new features',
        lifecycle: 'core',
        status: 'completed',
        skills: ['changelog monitoring', 'API documentation analysis', 'feature gap analysis', 'browser automation'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'm-ci-sa2-b1', label: 'Search: competitor changelogs, dev blogs', type: 'search', status: 'done' },
            { id: 'm-ci-sa2-b2', label: 'Browse competitor dashboards for UI changes', type: 'browseruse', status: 'done' },
            { id: 'm-ci-sa2-b3', label: 'Scrape API docs for new endpoints', type: 'web-scrape', status: 'done' },
            { id: 'm-ci-sa2-b4', label: 'Build feature comparison table', type: 'table', status: 'done' },
          ],
          edges: [
            { from: 'm-ci-sa2-b1', to: 'm-ci-sa2-b2' },
            { from: 'm-ci-sa2-b2', to: 'm-ci-sa2-b3' },
            { from: 'm-ci-sa2-b3', to: 'm-ci-sa2-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-28T08:00:00Z',
        completedAt: '2026-03-28T08:55:00Z',
      },
      {
        id: 'm-ci-sa3',
        name: 'Digest Compiler',
        role: 'Compiles pricing, feature, and strategic intelligence into a weekly competitive digest',
        lifecycle: 'core',
        status: 'completed',
        skills: ['competitive analysis', 'digest writing', 'impact assessment', 'strategic recommendations'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'm-ci-sa3-b1', label: 'Load pricing + feature + press data', type: 'data', status: 'done' },
            { id: 'm-ci-sa3-b2', label: 'Rank by competitive impact', type: 'analysis', status: 'done' },
            { id: 'm-ci-sa3-b3', label: 'Prompt: write digest with action items', type: 'prompt', status: 'done' },
            { id: 'm-ci-sa3-b4', label: 'Format weekly competitor digest', type: 'memo', status: 'done' },
          ],
          edges: [
            { from: 'm-ci-sa3-b1', to: 'm-ci-sa3-b2' },
            { from: 'm-ci-sa3-b2', to: 'm-ci-sa3-b3' },
            { from: 'm-ci-sa3-b3', to: 'm-ci-sa3-b4' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-28T09:00:00Z',
        completedAt: '2026-03-28T09:32:00Z',
      },
      {
        id: 'm-ci-sa-task1', name: 'Stripe Pricing Modeler', role: 'Pricing scenario analysis',
        lifecycle: 'task', task: 'Model 3 pricing response scenarios to Stripe Connect fee reduction',
        status: 'running', progress: 45, startedAt: '6 hours ago',
        skills: ['financial modeling', 'pricing analysis', 'scenario planning'],
        workspace: { type: 'sandbox', terminalLines: ['$ python3 pricing_model.py --competitor stripe --change "-0.1%"', 'Modeling 3 scenarios...', 'Scenario 1: Match at 0.4% — revenue impact -$180K/yr', 'Scenario 2: Volume tier at 0.4% for >$10M — impact -$90K/yr', 'Scenario 3: Hold + add value (BNPL, instant payouts) — impact neutral'], files: ['pricing-scenarios.xlsx', 'revenue-impact.json'] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Competitors Tracked', value: 10, trend: 'neutral', sparkline: [10, 10, 10, 10, 10, 10, 10] },
      { label: 'Changes Detected', value: 7, change: 'This week', trend: 'up', sparkline: [3, 4, 2, 5, 4, 6, 7] },
      { label: 'Price Alerts', value: 3, change: 'Q1 total', trend: 'up', sparkline: [0, 0, 1, 1, 1, 2, 3] },
      { label: 'Feature Gaps', value: 2, change: 'Critical', trend: 'up', sparkline: [3, 3, 3, 3, 2, 2, 2] },
    ],
    artifacts: [
      { id: 'm-ci-1', title: 'Weekly Competitor Digest - Payments', type: 'memo', teamId: 'm-competitive-intel', subAgentId: 'm-ci-sa3', subAgentName: 'Digest Compiler', createdAt: '2026-03-28', daysAgo: 1, preview: artifactPreviews['m-ci-1'] },
      { id: 'm-ci-2', title: 'Feature Comparison Matrix: Checkout APIs', type: 'spreadsheet', teamId: 'm-competitive-intel', subAgentId: 'm-ci-sa2', subAgentName: 'Feature Tracker', createdAt: '2026-03-26', daysAgo: 3, preview: artifactPreviews['m-ci-2'] },
      { id: 'm-ci-3', title: 'Stripe Connect vs Square for Platforms Deep Dive', type: 'report', teamId: 'm-competitive-intel', subAgentId: 'm-ci-sa2', subAgentName: 'Feature Tracker', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['m-ci-3'] },
      { id: 'm-ci-4', title: 'Competitor Pricing Changes: Q1 2026', type: 'data-table', teamId: 'm-competitive-intel', subAgentId: 'm-ci-sa1', subAgentName: 'Pricing Monitor', createdAt: '2026-03-15', daysAgo: 14, preview: artifactPreviews['m-ci-4'] },
    ],
    activity: [
      { id: 'm-ci-a1', teamId: 'm-competitive-intel', message: 'Price change detected: Stripe Connect platform fee dropping to 0.4%', timestamp: '2 hours ago', type: 'alert' },
      { id: 'm-ci-a2', teamId: 'm-competitive-intel', message: 'Feature Tracker finished — comparison matrix updated with Square dev portal changes', timestamp: '6 hours ago', type: 'agent-complete' },
      { id: 'm-ci-a3', teamId: 'm-competitive-intel', message: 'Weekly Competitor Digest promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 'm-ci-a4', teamId: 'm-competitive-intel', message: 'Daily competitor scan completed', timestamp: '1 day ago', type: 'routine' },
    ],
    automations: [
      { id: 'm-ci-auto-1', teamId: 'm-competitive-intel', name: 'Daily competitor scan', schedule: 'Every day at 8:00 AM', enabled: true, lastRun: 'Today 8:00 AM', nextRun: 'Tomorrow 8:00 AM' },
      { id: 'm-ci-auto-2', teamId: 'm-competitive-intel', name: 'Pricing change alerts', schedule: 'Real-time', enabled: true, lastRun: '2 hours ago', nextRun: 'Continuous' },
      { id: 'm-ci-auto-3', teamId: 'm-competitive-intel', name: 'Weekly digest', schedule: 'Every Monday at 9:00 AM', enabled: true, lastRun: 'Monday', nextRun: 'Next Monday 9:00 AM' },
      { id: 'm-ci-auto-4', teamId: 'm-competitive-intel', name: 'Quarterly feature matrix update', schedule: 'Jan 1, Apr 1, Jul 1, Oct 1', enabled: true, lastRun: 'January 1', nextRun: 'April 1' },
    ],
    integrations: [
      { id: 'm-ci-int-1', name: 'Stripe API', type: 'api', status: 'connected', lastSync: 'Real-time' },
      { id: 'm-ci-int-2', name: 'BuiltWith', type: 'api', status: 'connected', lastSync: '1 day ago' },
      { id: 'm-ci-int-3', name: 'G2 Reviews', type: 'api', status: 'connected', lastSync: '6 hours ago' },
      { id: 'm-ci-int-4', name: 'Crunchbase', type: 'data', status: 'connected', lastSync: '2 hours ago' },
    ],
    terminal: {
      uptime: '19 days',
      files: ['data/', 'pricing/', 'features/', 'scripts/'],
      activeProcesses: ['pricing_monitor.py (PID 7301)', 'changelog_watcher.py (PID 7303)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 19 days, 2:41',
        '$ ls data/',
        'stripe-pricing.json  square-pricing.json  adyen-data.json  feature-matrix.csv',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 08:00] Pricing scan complete. 1 change detected (Stripe Connect).',
        '$ diff pricing/stripe-q4.json pricing/stripe-current.json | head -3',
        '< "connect_platform_fee": "0.5%"',
        '> "connect_platform_fee": "0.4%"',
      ],
    },
    lastChecked: '4 hours ago',
  },
  {
    id: 'm-user-research',
    name: 'User Research Synthesis',
    type: 'research',
    description: 'Processes uploaded interview transcripts and survey data, extracts themes, and updates a running insights dashboard.',
    personaId: 'marcus',
    status: 'active',
    schedule: 'On upload + Weekly',
    lead: {
      name: 'Echo',
      personality: 'Empathetic and pattern-seeking',
      description: 'Research synthesis specialist who processes interview transcripts, survey data, and support tickets to surface actionable user insights.',
    },
    subAgents: [
      {
        id: 'm-ur-sa1',
        name: 'Transcript Processor',
        role: 'Runs NLP on interview transcripts to extract themes, sentiment, and key quotes',
        lifecycle: 'core',
        status: 'completed',
        skills: ['NLP processing', 'theme extraction', 'sentiment analysis', 'quote mining'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-4f9a',
            '$ ls transcripts/',
            'enterprise-onboarding-01.txt  enterprise-onboarding-02.txt  ... (12 files)',
            'churn-interview-01.txt  churn-interview-02.txt  ... (8 files)',
            '$ python3 nlp_processor.py --input transcripts/ --model gpt-4-turbo',
            'Processing 20 transcripts...',
            'Extracting themes... 8 primary themes identified',
            'Sentiment analysis complete. Mean: 3.2/5, StdDev: 0.8',
            '$ python3 extract_quotes.py --min-relevance 0.7 > key-quotes.json',
            'Extracted 47 high-relevance quotes',
            '$ jq ".themes | length" themes.json',
            '8',
            '$ cp themes.json sentiment-scores.csv /data/latest/',
            'Synced 2 files',
          ],
          files: ['transcripts/', 'themes.json', 'sentiment-scores.csv'],
        },
        artifacts: [],
        startedAt: '2026-03-29T14:00:00Z',
        completedAt: '2026-03-29T14:45:00Z',
      },
      {
        id: 'm-ur-sa2',
        name: 'Insight Synthesizer',
        role: 'Cross-references themes across research streams to produce prioritized insight reports',
        lifecycle: 'core',
        status: 'running',
        progress: 45,
        skills: ['cross-stream analysis', 'insight prioritization', 'pattern recognition', 'dashboard creation', 'impact scoring'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'm-ur-sa2-b1', label: 'Load themes + survey + churn data', type: 'data', status: 'done' },
            { id: 'm-ur-sa2-b2', label: 'Cross-stream correlation analysis', type: 'analysis', status: 'done' },
            { id: 'm-ur-sa2-b3', label: 'Prompt: prioritize insights by business impact', type: 'prompt', status: 'running' },
            { id: 'm-ur-sa2-b4', label: 'Build cumulative insights table', type: 'table', status: 'queued' },
            { id: 'm-ur-sa2-b5', label: 'Write insights dashboard memo', type: 'memo', status: 'queued' },
          ],
          edges: [
            { from: 'm-ur-sa2-b1', to: 'm-ur-sa2-b2' },
            { from: 'm-ur-sa2-b2', to: 'm-ur-sa2-b3' },
            { from: 'm-ur-sa2-b3', to: 'm-ur-sa2-b4' },
            { from: 'm-ur-sa2-b4', to: 'm-ur-sa2-b5' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-30T09:00:00Z',
      },
      {
        id: 'm-ur-sa-task1',
        name: 'Churn Interviewer',
        role: 'Exit interview processor',
        lifecycle: 'task',
        task: 'Process Q1 churn exit interviews',
        status: 'completed',
        startedAt: '1 week ago',
        completedAt: '5 days ago',
        skills: ['interview processing', 'theme extraction'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ python3 process_interviews.py --batch q1-churn',
            'Processed 8 interviews',
            'Extracted 4 themes',
          ],
          files: ['churn-themes.json'],
        },
        artifacts: [],
      },
      {
        id: 'm-ur-sa-task2', name: 'BNPL Survey Analyst', role: 'Feature demand analysis',
        lifecycle: 'task', task: 'Analyze BNPL demand data across all research streams',
        status: 'running', progress: 55, startedAt: '1 day ago',
        skills: ['survey analysis', 'cross-stream synthesis'],
        workspace: { type: 'canvas', blocks: [
          { id: 'tb1', label: 'Gather BNPL mentions', type: 'data', status: 'done' },
          { id: 'tb2', label: 'Cross-reference streams', type: 'analysis', status: 'running' },
          { id: 'tb3', label: 'Priority brief', type: 'memo', status: 'queued' },
        ], edges: [{ from: 'tb1', to: 'tb2' }, { from: 'tb2', to: 'tb3' }] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Interviews Processed', value: 20, change: '+4 this week', trend: 'up', sparkline: [8, 10, 12, 14, 16, 18, 20] },
      { label: 'Active Themes', value: 8, change: '+2 new', trend: 'up', sparkline: [4, 4, 5, 6, 6, 7, 8] },
      { label: 'Survey Responses', value: '2,847', change: 'Latest survey', trend: 'neutral' },
      { label: 'NPS Trend', value: '+4 pts', change: 'MoM', trend: 'up' },
    ],
    artifacts: [
      { id: 'm-ur-1', title: 'Interview Themes: Enterprise Onboarding (n=12)', type: 'report', teamId: 'm-user-research', subAgentId: 'm-ur-sa1', subAgentName: 'Transcript Processor', createdAt: '2026-03-27', daysAgo: 2, preview: artifactPreviews['m-ur-1'] },
      { id: 'm-ur-2', title: 'Survey Results: Checkout Abandonment Drivers', type: 'data-table', teamId: 'm-user-research', subAgentId: 'm-ur-sa2', subAgentName: 'Insight Synthesizer', createdAt: '2026-03-24', daysAgo: 5, preview: artifactPreviews['m-ur-2'] },
      { id: 'm-ur-3', title: 'Running Insights Dashboard - March 2026', type: 'spreadsheet', teamId: 'm-user-research', subAgentId: 'm-ur-sa2', subAgentName: 'Insight Synthesizer', createdAt: '2026-03-28', daysAgo: 1, preview: artifactPreviews['m-ur-3'] },
      { id: 'm-ur-4', title: 'Churn Interview Synthesis (n=8)', type: 'report', teamId: 'm-user-research', subAgentId: 'm-ur-sa1', subAgentName: 'Transcript Processor', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['m-ur-4'] },
    ],
    activity: [
      { id: 'm-ur-a1', teamId: 'm-user-research', message: 'Spun up Insight Synthesizer to cross-reference Q1 research streams', timestamp: '3 hours ago', type: 'agent-spawn' },
      { id: 'm-ur-a2', teamId: 'm-user-research', message: 'Transcript Processor finished — 20 transcripts analyzed, 8 themes extracted', timestamp: '1 day ago', type: 'agent-complete' },
      { id: 'm-ur-a3', teamId: 'm-user-research', message: 'Running Insights Dashboard promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 'm-ur-a4', teamId: 'm-user-research', message: 'Checkout abandonment survey analysis complete — BNPL is top gap', timestamp: '5 days ago', type: 'agent-complete' },
    ],
    automations: [
      { id: 'm-ur-auto-1', teamId: 'm-user-research', name: 'Process new transcripts', schedule: 'On upload', enabled: true, lastRun: '3 hours ago', nextRun: 'On next upload' },
      { id: 'm-ur-auto-2', teamId: 'm-user-research', name: 'Weekly insights dashboard update', schedule: 'Every Friday at 3:00 PM', enabled: true, lastRun: 'Friday', nextRun: 'Next Friday' },
      { id: 'm-ur-auto-3', teamId: 'm-user-research', name: 'Monthly NPS analysis', schedule: '1st of each month', enabled: true, lastRun: 'March 1', nextRun: 'April 1' },
    ],
    integrations: [
      { id: 'm-ur-int-1', name: 'Dovetail', type: 'data', status: 'connected', lastSync: '3 hours ago' },
      { id: 'm-ur-int-2', name: 'Typeform', type: 'api', status: 'connected', lastSync: '1 day ago' },
      { id: 'm-ur-int-3', name: 'Slack', type: 'messaging', status: 'connected', lastSync: 'Real-time' },
    ],
    terminal: {
      uptime: '9 days',
      files: ['transcripts/', 'themes/', 'surveys/', 'outputs/'],
      activeProcesses: ['nlp_processor.py (PID 8401)', 'insight_engine.py (PID 8403)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 9 days, 14:22',
        '$ ls transcripts/',
        'enterprise-onboarding/  churn-interviews/  dev-experience/',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 09:00] Insight Synthesizer started. Cross-referencing 4 research streams.',
        '$ jq ".themes | length" themes/all-themes.json',
        '8',
      ],
    },
    lastChecked: '4 hours ago',
  },
  {
    id: 'm-stakeholder-updates',
    name: 'Stakeholder Updates',
    type: 'content',
    description: 'Produces weekly product update memos, sprint summaries, and quarterly roadmap presentations.',
    personaId: 'marcus',
    status: 'active',
    schedule: 'Weekly on Fridays',
    lead: {
      name: 'Herald',
      personality: 'Clear and concise',
      description: 'Communications specialist who pulls data from Jira, Datadog, and analytics to produce stakeholder-ready product updates, sprint summaries, and roadmap decks.',
    },
    subAgents: [
      {
        id: 'm-su-sa1',
        name: 'Metrics Collector',
        role: 'Pulls data from Datadog, Jira, and analytics platforms to build metrics snapshots',
        lifecycle: 'core',
        status: 'completed',
        skills: ['API integration', 'metrics aggregation', 'data normalization', 'CSV export'],
        workspace: {
          type: 'sandbox',
          terminalLines: [
            '$ ssh agent@compute.spine.dev',
            'Connected to sandbox-6a2c',
            '$ python3 fetch_metrics.py --sources datadog,jira,amplitude,stripe-dashboard',
            'Fetching from Datadog... API uptime: 99.97%, P95 latency: 380ms',
            'Fetching from Jira... Sprint 14: 34 pts completed, 5 pts carried',
            'Fetching from Amplitude... Transaction volume: $142M this week',
            '$ python3 aggregate_sprint.py --sprint 14 > sprint-data.json',
            'Sprint 14 summary: 8/9 stories complete, velocity 34 pts',
            '$ python3 build_metrics_csv.py --period weekly > metrics.csv',
            'Written 12 metric rows to metrics.csv',
            '$ cp sprint-data.json metrics.csv /data/latest/',
            'Synced 2 files',
          ],
          files: ['sprint-data.json', 'metrics.csv'],
        },
        artifacts: [],
        startedAt: '2026-03-29T15:00:00Z',
        completedAt: '2026-03-29T15:18:00Z',
      },
      {
        id: 'm-su-sa2',
        name: 'Update Drafter',
        role: 'Drafts weekly product updates, sprint retros, and quarterly roadmap slides from collected data',
        lifecycle: 'core',
        status: 'running',
        progress: 35,
        skills: ['stakeholder communication', 'sprint reporting', 'roadmap visualization', 'executive summaries', 'slide generation'],
        workspace: {
          type: 'canvas',
          blocks: [
            { id: 'm-su-sa2-b1', label: 'Load sprint + metrics + competitive data', type: 'data', status: 'done' },
            { id: 'm-su-sa2-b2', label: 'Analyze trends and flag risks', type: 'analysis', status: 'done' },
            { id: 'm-su-sa2-b3', label: 'Prompt: draft update with key highlights', type: 'prompt', status: 'running' },
            { id: 'm-su-sa2-b4', label: 'Write weekly product update memo', type: 'memo', status: 'queued' },
            { id: 'm-su-sa2-b5', label: 'Generate roadmap review slides', type: 'slides', status: 'queued' },
          ],
          edges: [
            { from: 'm-su-sa2-b1', to: 'm-su-sa2-b2' },
            { from: 'm-su-sa2-b2', to: 'm-su-sa2-b3' },
            { from: 'm-su-sa2-b3', to: 'm-su-sa2-b4' },
            { from: 'm-su-sa2-b4', to: 'm-su-sa2-b5' },
          ],
        },
        artifacts: [],
        startedAt: '2026-03-30T09:30:00Z',
      },
      {
        id: 'm-su-sa-task1', name: 'Q4 Deck Builder', role: 'Quarterly presentation',
        lifecycle: 'task', task: 'Build Q4 2025 roadmap review deck from sprint data',
        status: 'completed', startedAt: '2 weeks ago', completedAt: '1 week ago',
        skills: ['deck creation', 'data visualization', 'executive communication'],
        workspace: { type: 'canvas', blocks: [{ id: 'tb1', label: 'Compile metrics', type: 'data', status: 'done' }, { id: 'tb2', label: 'Build slides', type: 'slides', status: 'done' }], edges: [{ from: 'tb1', to: 'tb2' }] },
        artifacts: [],
      },
    ],
    kpis: [
      { label: 'Updates Delivered', value: 4, change: 'This month', trend: 'neutral', sparkline: [3, 4, 4, 3, 4, 4, 4] },
      { label: 'Sprint Velocity', value: '34 pts', change: 'vs 32 target', trend: 'up' },
      { label: 'Completion Rate', value: '89%', change: 'Sprint 14', trend: 'up' },
      { label: 'Blocked Items', value: 1, change: 'BNPL legal', trend: 'down', sparkline: [3, 2, 2, 2, 1, 1, 1] },
    ],
    artifacts: [
      { id: 'm-su-1', title: 'Weekly Product Update - Mar 28', type: 'memo', teamId: 'm-stakeholder-updates', subAgentId: 'm-su-sa2', subAgentName: 'Update Drafter', createdAt: '2026-03-29', daysAgo: 0, preview: artifactPreviews['m-su-1'] },
      { id: 'm-su-2', title: 'Sprint 14 Summary + Retro', type: 'memo', teamId: 'm-stakeholder-updates', subAgentId: 'm-su-sa2', subAgentName: 'Update Drafter', createdAt: '2026-03-26', daysAgo: 3, preview: artifactPreviews['m-su-2'] },
      { id: 'm-su-3', title: 'Q1 2026 Roadmap Review Deck', type: 'deck', teamId: 'm-stakeholder-updates', subAgentId: 'm-su-sa2', subAgentName: 'Update Drafter', createdAt: '2026-03-22', daysAgo: 7, preview: artifactPreviews['m-su-3'] },
      { id: 'm-su-4', title: 'Monthly Metrics Report - February', type: 'report', teamId: 'm-stakeholder-updates', subAgentId: 'm-su-sa1', subAgentName: 'Metrics Collector', createdAt: '2026-03-15', daysAgo: 14, preview: artifactPreviews['m-su-4'] },
    ],
    activity: [
      { id: 'm-su-a1', teamId: 'm-stakeholder-updates', message: 'Spun up Update Drafter to incorporate Stripe pricing analysis and UX research themes', timestamp: '1 hour ago', type: 'agent-spawn' },
      { id: 'm-su-a2', teamId: 'm-stakeholder-updates', message: 'Metrics Collector finished — Sprint 14 data and weekly metrics synced', timestamp: '1 day ago', type: 'agent-complete' },
      { id: 'm-su-a3', teamId: 'm-stakeholder-updates', message: 'Weekly Product Update promoted to team artifacts', timestamp: '1 day ago', type: 'artifact-promoted' },
      { id: 'm-su-a4', teamId: 'm-stakeholder-updates', message: 'Q1 roadmap review deck finalized', timestamp: '1 week ago', type: 'agent-complete' },
    ],
    automations: [
      { id: 'm-su-auto-1', teamId: 'm-stakeholder-updates', name: 'Weekly product update', schedule: 'Every Friday at 4:00 PM', enabled: true, lastRun: 'Today 4:00 PM', nextRun: 'Next Friday 4:00 PM' },
      { id: 'm-su-auto-2', teamId: 'm-stakeholder-updates', name: 'Sprint summary on close', schedule: 'End of each sprint', enabled: true, lastRun: 'March 28', nextRun: 'April 11' },
      { id: 'm-su-auto-3', teamId: 'm-stakeholder-updates', name: 'Monthly metrics report', schedule: '1st of each month', enabled: true, lastRun: 'March 1', nextRun: 'April 1' },
      { id: 'm-su-auto-4', teamId: 'm-stakeholder-updates', name: 'Quarterly roadmap deck', schedule: 'End of quarter', enabled: true, lastRun: 'March 22', nextRun: 'June 2026' },
    ],
    integrations: [
      { id: 'm-su-int-1', name: 'Jira', type: 'api', status: 'connected', lastSync: 'Real-time' },
      { id: 'm-su-int-2', name: 'Datadog', type: 'api', status: 'connected', lastSync: '2 hours ago' },
      { id: 'm-su-int-3', name: 'Google Slides', type: 'storage', status: 'connected', lastSync: '4 hours ago' },
      { id: 'm-su-int-4', name: 'Slack', type: 'messaging', status: 'connected', lastSync: 'Real-time' },
    ],
    terminal: {
      uptime: '7 days',
      files: ['data/', 'updates/', 'templates/', 'metrics/'],
      activeProcesses: ['metrics_aggregator.py (PID 9201)', 'cron_scheduler'],
      terminalLines: [
        '$ uptime',
        'up 7 days, 1:15',
        '$ ls data/',
        'sprint-data.json  metrics.csv  roadmap-q1.json  velocity-history.csv',
        '$ tail -1 logs/agent.log',
        '[2026-03-30 09:30] Update Drafter started. Loading Sprint 14 data.',
        '$ cat metrics/velocity-history.csv | tail -1',
        'Sprint 14,34,32,89%',
      ],
    },
    deadline: { label: 'Q1 review presentation', date: 'Apr 4', daysLeft: 5 },
    lastChecked: '4 hours ago',
  },
];

// ============================================
// PERSONAS
// ============================================

export const personas: Persona[] = [
  {
    id: 'woody',
    name: 'Woody',
    role: 'Wine Company Founder',
    avatar: 'W',
    teams: woodyTeams,
    metrics: {
      teamsActive: 3,
      tasksCompletedThisWeek: 12,
      artifactsProducedThisWeek: 8,
      nextScheduledRun: 'Market Research - Tomorrow 8:00 AM',
    },
    suggestedActions: [
      { id: 'w-sa-1', text: 'Your competitor pricing matrix is 7 days old. Refresh it?', personaId: 'woody' },
      { id: 'w-sa-2', text: 'Market Research found 3 new trends this week. Review?', personaId: 'woody' },
      { id: 'w-sa-3', text: 'Content team has 5 draft posts ready for your review.', personaId: 'woody' },
    ],
    imessages: [
      { sender: 'system', text: 'Good morning. Sentinel ran overnight with 3 sub-agents. Two updates: Price Tracker caught Scribe Winery dropping prices on 3 SKUs, and Social Monitor flagged a new organic wine brand in Sonoma.', time: '7:32 AM', link: { label: 'View Competitor Watch', teamId: 'w-competitor-watch' } },
      { sender: 'user', text: 'Give me the summary', time: '8:15 AM' },
      { sender: 'system', text: 'Scribe dropped their 2024 Pinot Noir by 8% and their Chardonnay by 6%. New brand is Vero Wines, 3 SKUs in the $28-35 range, DTC only. Muse flagged this as a content angle. Want me to spin up Content Drafter on it?', time: '8:15 AM' },
      { sender: 'user', text: 'Yes draft it. Also tell Scout to look into Vero Wines specifically', time: '8:22 AM' },
      { sender: 'system', text: 'On it. Content Drafter is starting a new canvas. Scout is spinning up Web Crawler focused on Vero Wines — will scrape their DTC site, social profiles, and press. Full report by this afternoon.', time: '8:22 AM' },
      { sender: 'user', text: 'What else is on for today?', time: '8:25 AM' },
      { sender: 'system', text: '1. Content Drafter — 5 social posts in progress (canvas 2/3 done)\n2. Trend Analyst — analysis block processing Q1 data\n3. Campaign Builder — spring email ready, 4,821 recipients', time: '8:25 AM', link: { label: 'View Content & Marketing', teamId: 'w-content-marketing' } },
      { sender: 'user', text: 'Send me the email draft', time: '8:30 AM' },
      { sender: 'system', text: 'Subject: "Spring is here. So are 3 new wines."\n\n2025 Rosé ($22), Skin-Contact White ($28), Pét-Nat ($24). Free shipping on 6+. Wine club gets early access + 15% off.', time: '8:30 AM', link: { label: 'Open email campaign', teamId: 'w-content-marketing', artifactId: 'w-cm-3' } },
    ],
    chatThreads: [
      {
        id: 'w-all', label: 'All Teams', lastActivity: '8:30 AM',
        messages: [
          { id: 'wc1', sender: 'user', text: 'Focus everything on the upcoming wine expo in Chicago next month', timestamp: '9:15 AM' },
          { id: 'wc2', sender: 'system', text: 'Got it. I\'ve notified all 3 team leads:\n\n- Scout (Market Research): Pivoting trend analysis to expo-relevant topics\n- Sentinel (Competitor Watch): Adding expo exhibitor tracking\n- Muse (Content & Marketing): Starting expo prep content calendar\n\nEach team lead is adjusting their sub-agents\' priorities.', timestamp: '9:15 AM', link: { label: 'View all teams' } },
          { id: 'wc3', sender: 'user', text: 'Good. Also research who else is exhibiting', timestamp: '9:20 AM' },
          { id: 'wc4', sender: 'system', text: 'Scout is spinning up a new Web Crawler sub-agent to scrape the expo exhibitor list. Should have the full list with brand profiles by end of day.', timestamp: '9:20 AM', teamId: 'w-market-research' },
        ],
      },
      {
        id: 'w-mr-chat', label: 'Market Research', teamId: 'w-market-research', lastActivity: '2 hours ago',
        messages: [
          { id: 'wmr1', sender: 'user', text: 'Scout, what\'s the latest on DTC trends?', timestamp: '10:00 AM', teamId: 'w-market-research' },
          { id: 'wmr2', sender: 'system', text: 'Trend Analyst just finished processing Q1 data. Key finding: TikTok is now 28% of customer acquisition for DTC wine brands, up from 12% last year. Full report is in your artifacts.', timestamp: '10:00 AM', teamId: 'w-market-research', link: { label: 'View report', teamId: 'w-market-research', artifactId: 'w-mr-2' } },
        ],
      },
      {
        id: 'w-cw-chat', label: 'Competitor Watch', teamId: 'w-competitor-watch', lastActivity: '3 hours ago',
        messages: [
          { id: 'wcw1', sender: 'user', text: 'Add Vero Wines to the tracking list', timestamp: '8:30 AM', teamId: 'w-competitor-watch' },
          { id: 'wcw2', sender: 'system', text: 'Added. Price Tracker is updating its scraper config to include Vero Wines DTC site. Social Monitor will start tracking their Instagram and TikTok. First data should appear in tomorrow\'s digest.', timestamp: '8:30 AM', teamId: 'w-competitor-watch' },
        ],
      },
    ],
    projects: [
      {
        id: 'w-proj-1',
        name: 'Wine Expo Chicago',
        description: 'Prepare for the upcoming wine expo: exhibitor research, competitor analysis, marketing materials, and booth strategy.',
        goal: 'Be fully prepared for Chicago Wine Expo — exhibitor analysis, competitive positioning, marketing materials, and booth strategy complete.',
        status: 'on-track',
        progress: 45,
        milestones: [
          { id: 'w-p1-m1', label: 'Exhibitor list analyzed', teamId: 'w-market-research', status: 'done' },
          { id: 'w-p1-m2', label: 'Competitor expo strategy mapped', teamId: 'w-competitor-watch', status: 'in-progress' },
          { id: 'w-p1-m3', label: 'Marketing materials drafted', teamId: 'w-content-marketing', status: 'in-progress' },
          { id: 'w-p1-m4', label: 'Booth talking points finalized', status: 'pending' },
          { id: 'w-p1-m5', label: 'Final review and sign-off', status: 'pending' },
        ],
        personaId: 'woody',
        teamIds: ['w-market-research', 'w-competitor-watch', 'w-content-marketing'],
        deadline: { label: 'Expo opens', date: 'May 15', daysLeft: 44 },
        createdAt: '2 weeks ago',
      },
      {
        id: 'w-proj-2',
        name: 'Spring Collection Launch',
        description: 'Launch the 2025 spring wine collection: pricing strategy, marketing campaign, distributor outreach.',
        goal: 'Launch the 2025 spring wine collection with pricing, campaign, and distribution ready.',
        status: 'on-track',
        progress: 65,
        milestones: [
          { id: 'w-p2-m1', label: 'Pricing benchmarks completed', teamId: 'w-market-research', status: 'done' },
          { id: 'w-p2-m2', label: 'Email campaign drafted', teamId: 'w-content-marketing', status: 'done' },
          { id: 'w-p2-m3', label: 'Social content calendar ready', teamId: 'w-content-marketing', status: 'in-progress' },
          { id: 'w-p2-m4', label: 'Distributor outreach prep', status: 'pending' },
        ],
        personaId: 'woody',
        teamIds: ['w-market-research', 'w-content-marketing'],
        createdAt: '1 week ago',
      },
    ],
  },
  {
    id: 'sarah',
    name: 'Sarah',
    role: 'Management Consultant',
    avatar: 'S',
    teams: sarahTeams,
    metrics: {
      teamsActive: 3,
      tasksCompletedThisWeek: 18,
      artifactsProducedThisWeek: 11,
      nextScheduledRun: 'NovaPharma Pipeline Refresh - Tomorrow 7:00 AM',
    },
    suggestedActions: [
      { id: 's-sa-1', text: 'Atlas flagged a new FDA guidance — Pipeline Scanner is pulling details now. Review?', personaId: 'sarah' },
      { id: 's-sa-2', text: 'New RFP matches your BD criteria. Spin up Proposal Writer to draft response?', personaId: 'sarah' },
      { id: 's-sa-3', text: 'GreenBuild strategy deck v3 is ready for your review before board meeting.', personaId: 'sarah' },
    ],
    imessages: [
      { sender: 'system', text: 'NovaPharma update: Atlas flagged new FDA guidance on IL-17 therapies. Pipeline Scanner detected 2 new entries. Also, Hunter found an RFP match from Ontario Ministry of Health.', time: '7:15 AM', link: { label: 'View NovaPharma', teamId: 's-novapharma' } },
      { sender: 'user', text: 'Key changes in the FDA guidance?', time: '7:42 AM' },
      { sender: 'system', text: '3 changes: expanded indication scope for moderate-to-severe, updated safety monitoring for combo therapies, new fast-track eligibility. Memo Writer already updated the weekly briefing. Flag for your client call?', time: '7:42 AM' },
      { sender: 'user', text: 'Yes flag it. Generate a proposal for the Ontario RFP', time: '7:48 AM' },
      { sender: 'system', text: 'Flagged. Hunter is spinning up Proposal Writer — canvas will have 5 blocks. Account Researcher already did a Ministry deep dive. Draft by end of day.', time: '7:48 AM', link: { label: 'View Business Dev', teamId: 's-business-dev' } },
      { sender: 'user', text: 'How\'s the GreenBuild deck?', time: '8:10 AM' },
      { sender: 'system', text: 'v3 finalized. Policy Tracker caught the new IRA Section 45L credit. 3 new partners (EcoSupply Pacific 92/100). Year 1 revenue revised to $10M.', time: '8:10 AM', link: { label: 'Open strategy deck', teamId: 's-greenbuild', artifactId: 's-gb-4' } },
      { sender: 'user', text: 'Send it. Ontario RFP deadline before GreenBuild board meeting?', time: '8:15 AM' },
      { sender: 'system', text: 'Sent. Ontario RFP: April 18. Board meeting: April 22. Tight but doable — recommend draft by April 11.', time: '8:15 AM' },
    ],
    chatThreads: [
      {
        id: 's-all', label: 'All Teams', lastActivity: '7:48 AM',
        messages: [
          { id: 'sc1', sender: 'user', text: 'Status update across all clients', timestamp: '7:00 AM' },
          { id: 'sc2', sender: 'system', text: 'NovaPharma: Atlas flagged FDA guidance. Pipeline Scanner running. Memo Writer updating briefing.\n\nGreenBuild: Strategy deck v3 complete. Policy Tracker monitoring IRA changes.\n\nBD: RFP Scanner found Ontario MOH match. Pipeline at $6.7M weighted.', timestamp: '7:00 AM' },
        ],
      },
      {
        id: 's-np-chat', label: 'NovaPharma', teamId: 's-novapharma', lastActivity: '4 hours ago',
        messages: [
          { id: 'snp1', sender: 'user', text: 'Atlas, check if any competitors moved into Phase III this month', timestamp: '9:00 AM', teamId: 's-novapharma' },
          { id: 'snp2', sender: 'system', text: 'Yes — Pfizer PF-06826647 moved to Phase III for psoriasis. TYK2 inhibitor, adjacent to our space. Pipeline Scanner updated the tracker.', timestamp: '9:00 AM', teamId: 's-novapharma', link: { label: 'View pipeline tracker', teamId: 's-novapharma', artifactId: 's-np-1' } },
        ],
      },
    ],
    projects: [
      {
        id: 's-proj-1',
        name: 'Ontario RFP Response',
        description: 'Prepare and submit proposal for Ontario Ministry of Health Digital Health Transformation RFP.',
        goal: 'Submit a competitive, well-researched proposal for the Ontario MOH Digital Health RFP by April 18.',
        status: 'on-track',
        progress: 35,
        milestones: [
          { id: 's-p1-m1', label: 'RFP requirements analyzed', teamId: 's-business-dev', status: 'done' },
          { id: 's-p1-m2', label: 'Ministry background research', teamId: 's-business-dev', status: 'done' },
          { id: 's-p1-m3', label: 'NovaPharma experience packaged', teamId: 's-novapharma', status: 'in-progress' },
          { id: 's-p1-m4', label: 'Proposal draft v1', teamId: 's-business-dev', status: 'in-progress' },
          { id: 's-p1-m5', label: 'Budget and timeline finalized', status: 'pending' },
          { id: 's-p1-m6', label: 'Final review and submit', status: 'pending' },
        ],
        personaId: 'sarah',
        teamIds: ['s-novapharma', 's-business-dev'],
        deadline: { label: 'RFP deadline', date: 'Apr 18', daysLeft: 16 },
        createdAt: '3 days ago',
      },
      {
        id: 's-proj-2',
        name: 'GreenBuild Board Prep',
        description: 'Prepare strategy deck and supporting materials for GreenBuild board meeting.',
        goal: 'Board-ready strategy deck with market analysis, partner pipeline, and financial projections.',
        status: 'on-track',
        progress: 80,
        milestones: [
          { id: 's-p2-m1', label: 'Market entry analysis complete', teamId: 's-greenbuild', status: 'done' },
          { id: 's-p2-m2', label: 'Partner shortlist finalized', teamId: 's-greenbuild', status: 'done' },
          { id: 's-p2-m3', label: 'Financial projections updated', teamId: 's-greenbuild', status: 'done' },
          { id: 's-p2-m4', label: 'Strategy deck v3 complete', teamId: 's-greenbuild', status: 'done' },
          { id: 's-p2-m5', label: 'Board presentation rehearsal', status: 'pending' },
        ],
        personaId: 'sarah',
        teamIds: ['s-greenbuild', 's-business-dev'],
        deadline: { label: 'Board meeting', date: 'Apr 22', daysLeft: 20 },
        createdAt: '1 week ago',
      },
    ],
  },
  {
    id: 'marcus',
    name: 'Marcus',
    role: 'Product Manager, Fintech',
    avatar: 'M',
    teams: marcusTeams,
    metrics: {
      teamsActive: 3,
      tasksCompletedThisWeek: 15,
      artifactsProducedThisWeek: 9,
      nextScheduledRun: 'Competitive Intel Digest - Monday 9:00 AM',
    },
    suggestedActions: [
      { id: 'm-sa-1', text: 'Stripe pricing update detected by Pricing Monitor. Review updated comparison in its sandbox?', personaId: 'marcus' },
      { id: 'm-sa-2', text: 'Transcript Processor analyzed 4 new interviews. 2 new themes flagged for review.', personaId: 'marcus' },
      { id: 'm-sa-3', text: 'Update Drafter has the weekly product update in progress. Review when ready?', personaId: 'marcus' },
    ],
    imessages: [
      { sender: 'system', text: 'Radar\'s Pricing Monitor detected Stripe Connect pricing change — platform fee dropping to 0.4%. Echo\'s Transcript Processor finished: 2 new themes flagged.', time: '8:05 AM', link: { label: 'View Competitive Intel', teamId: 'm-competitive-intel' } },
      { sender: 'user', text: 'Impact of the Stripe pricing change?', time: '8:30 AM' },
      { sender: 'system', text: 'Saves platform partners ~$12K/year vs our rates. Our fee is 0.45% vs their 0.4%. Digest Compiler is incorporating. Recommendation: evaluate volume-based pricing tier.', time: '8:30 AM', link: { label: 'View pricing matrix', teamId: 'm-competitive-intel', artifactId: 'm-ci-2' } },
      { sender: 'user', text: 'Model 3 scenarios. What are the new themes?', time: '8:35 AM' },
      { sender: 'system', text: 'Pricing Monitor modeling now — ready by 10 AM.\n\nNew themes:\n1. ERP Integration Complexity (11/12 interviews)\n2. Compliance Doc Access (9/12)\n\nInsight Synthesizer is cross-referencing with abandonment survey. Add to Herald\'s weekly update?', time: '8:35 AM', link: { label: 'View research themes', teamId: 'm-user-research' } },
      { sender: 'user', text: 'Yes. Include BNPL legal blocker — needs visibility', time: '8:40 AM' },
      { sender: 'system', text: 'Added. Update Drafter incorporating:\n- Stripe pricing response\n- 2 new UX themes\n- BNPL blocker (3 weeks, escalated to VP)\n\nDraft ready by 2 PM.', time: '8:40 AM', link: { label: 'View weekly update', teamId: 'm-stakeholder-updates' } },
    ],
    chatThreads: [
      {
        id: 'm-all', label: 'All Teams', lastActivity: '8:40 AM',
        messages: [
          { id: 'mc1', sender: 'user', text: 'Pull the latest competitive intel into this week\'s stakeholder update', timestamp: '8:45 AM' },
          { id: 'mc2', sender: 'system', text: 'Done. Herald\'s Update Drafter is pulling from Radar\'s latest digest and Feature Tracker data. The Stripe pricing change and BNPL blocker are both included. Draft will be in your Stakeholder Updates artifacts by 2 PM.', timestamp: '8:45 AM', link: { label: 'View Stakeholder Updates', teamId: 'm-stakeholder-updates' } },
        ],
      },
      {
        id: 'm-ci-chat', label: 'Competitive Intel', teamId: 'm-competitive-intel', lastActivity: '2 hours ago',
        messages: [
          { id: 'mci1', sender: 'user', text: 'Radar, how does Square\'s new dev portal compare to ours?', timestamp: '9:00 AM', teamId: 'm-competitive-intel' },
          { id: 'mci2', sender: 'system', text: 'Feature Tracker\'s canvas analyzed it. Their new portal has interactive API explorer, better error docs, and a sandbox that simulates failures — all things we\'re missing. Full comparison in the feature matrix.', timestamp: '9:00 AM', teamId: 'm-competitive-intel', link: { label: 'View feature matrix', teamId: 'm-competitive-intel', artifactId: 'm-ci-2' } },
        ],
      },
    ],
    projects: [
      {
        id: 'm-proj-1',
        name: 'BNPL Launch',
        description: 'Coordinate BNPL integration launch: competitive analysis, user research validation, stakeholder alignment, and go-to-market.',
        goal: 'Build the evidence base and stakeholder alignment to greenlight BNPL integration.',
        status: 'at-risk',
        progress: 55,
        milestones: [
          { id: 'm-p1-m1', label: 'Competitive gap analysis', teamId: 'm-competitive-intel', status: 'done' },
          { id: 'm-p1-m2', label: 'User demand quantified', teamId: 'm-user-research', status: 'done' },
          { id: 'm-p1-m3', label: 'Churn impact assessed', teamId: 'm-user-research', status: 'done' },
          { id: 'm-p1-m4', label: 'Partnership options evaluated', status: 'in-progress' },
          { id: 'm-p1-m5', label: 'Legal review cleared', status: 'pending' },
          { id: 'm-p1-m6', label: 'Stakeholder deck presented', teamId: 'm-stakeholder-updates', status: 'pending' },
        ],
        personaId: 'marcus',
        teamIds: ['m-competitive-intel', 'm-user-research', 'm-stakeholder-updates'],
        createdAt: '2 weeks ago',
      },
      {
        id: 'm-proj-2',
        name: 'Stripe Pricing Response',
        description: 'Analyze Stripe Connect pricing change impact and develop response strategy.',
        goal: 'Decide on pricing response to Stripe Connect fee reduction within 8 days.',
        status: 'on-track',
        progress: 40,
        milestones: [
          { id: 'm-p2-m1', label: 'Impact analysis complete', teamId: 'm-competitive-intel', status: 'done' },
          { id: 'm-p2-m2', label: 'Scenario models built', teamId: 'm-competitive-intel', status: 'in-progress' },
          { id: 'm-p2-m3', label: 'Customer impact assessed', status: 'pending' },
          { id: 'm-p2-m4', label: 'Pricing decision made', status: 'pending' },
          { id: 'm-p2-m5', label: 'Stakeholder communication', teamId: 'm-stakeholder-updates', status: 'pending' },
        ],
        personaId: 'marcus',
        teamIds: ['m-competitive-intel', 'm-stakeholder-updates'],
        deadline: { label: 'Pricing decision', date: 'Apr 10', daysLeft: 8 },
        createdAt: '3 days ago',
      },
    ],
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Startup CTO',
    avatar: 'A',
    teams: [],
    metrics: {
      teamsActive: 0,
      tasksCompletedThisWeek: 0,
      artifactsProducedThisWeek: 0,
      nextScheduledRun: 'No teams yet',
    },
    suggestedActions: [
      { id: 'a-sa-1', text: 'Set up a team to monitor your competitors', personaId: 'alex' },
      { id: 'a-sa-2', text: 'Create a development team to help ship features faster', personaId: 'alex' },
      { id: 'a-sa-3', text: 'Build a customer research team to synthesize feedback', personaId: 'alex' },
    ],
    imessages: [],
    chatThreads: [],
    projects: [],
  },
];

export function getPersonaById(id: string): Persona | undefined {
  return personas.find(p => p.id === id);
}

export function getTeamById(personaId: string, teamId: string): Team | undefined {
  const persona = getPersonaById(personaId);
  return persona?.teams.find(t => t.id === teamId);
}

export function getAllArtifacts(personaId: string): import('./types').Artifact[] {
  const persona = getPersonaById(personaId);
  if (!persona) return [];
  return persona.teams.flatMap(t => t.artifacts).sort((a, b) => a.daysAgo - b.daysAgo);
}
