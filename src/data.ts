import { Service, Project, BeforeAfterItem, ProcessStep, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'logo-design',
    title: 'Logo Design from Scratch',
    description: 'Bespoke, vector-perfect primary and secondary logos designed to capture your brand’s soul. Complete with dynamic visual concepts, rigorous geometry, and timeless aesthetic layouts.',
    deliverables: ['Primary & Secondary Logos', 'Brand Mark / Favicon', 'Vector Source Files (AI, SVG, PDF)', 'Export Package (PNG, JPEG, WebP)'],
    idealClient: 'Startups, creators, and direct-to-consumer brands looking for an iconic, memorable mark.',
    iconName: 'Compass'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Kit',
    description: 'A comprehensive visual system including secondary marks, typography pairings, premium color palettes, custom brand patterns, and creative brand directions that establish instant industry trust.',
    deliverables: ['Full Color Palette system', 'Typography hierarchy config', 'Bespoke Brand Pattern or textures', 'Business card & Email signature design'],
    idealClient: 'Growing businesses ready to upgrade from "just a logo" to a complete cohesive visual identity.',
    iconName: 'Briefcase'
  },
  {
    id: 'social-creatives',
    title: 'Social Media Ad Creatives',
    description: 'High-converting, visually striking social media templates, launch campaigns, and dynamic ad layouts built to stop the scroll and drive premium conversions.',
    deliverables: ['9-Grid Instagram launch templates', 'Ad Creative Mockups (Figma / Canva link)', 'LinkedIn Banner & Post layouts', 'Interactive Story Templates'],
    idealClient: 'E-commerce brands, consulting agencies, and lifestyle creators wanting a highly polished digital presence.',
    iconName: 'Instagram'
  },
  {
    id: 'web-landing',
    title: 'Website & Landing Page Design',
    description: 'We design modern, ultra-clean, high-converting digital storefronts. Custom layout grids, gorgeous typography, responsive spacing, and sleek animations designed to convert high-end clients.',
    deliverables: ['High-fidelity UX UI Designs', 'Tailwind CSS responsive design', 'Interactive layout assets', 'SEO & Performance optimization blueprint'],
    idealClient: 'Service agencies, tech startups, and creators aiming to showcase their portfolio or sell high-ticket services.',
    iconName: 'Globe'
  },
  {
    id: 'packaging-label',
    title: 'Packaging & Label Design',
    description: 'Tactile design that translates digital luxury onto physical paper, glass, or cardboard. Includes premium bottle labels, structural boxes, tags, and blind-emboss print specifications.',
    deliverables: ['3D Mockup render previews', 'Print-ready vector die-lines', 'Material & Texture recommendations', 'Eco-friendly paper spec sheets'],
    idealClient: 'Premium beauty, gourmet coffee, luxury fashion accessories, and wellness product brands.',
    iconName: 'Package'
  },
  {
    id: 'brand-guidelines',
    title: 'Brand Guidelines Manual',
    description: 'The "Holy Bible" for your brand. A professionally curated PDF outlining clear instructions on logo safe-zones, color formulas (HEX, RGB, CMYK, Pantone), font usage rules, and do’s/dont’s.',
    deliverables: ['25+ Page Premium Brand Guidelines PDF', 'Logo placement & ratio instructions', 'Strict typography rules', 'Social media composition guidelines'],
    idealClient: 'Firms with expanding teams, freelancers, or marketing agencies seeking absolute visual consistency.',
    iconName: 'BookOpen'
  },
  {
    id: 'canva-templates',
    title: 'Canva / Adobe Express Templates',
    description: 'Take complete control over your brand’s day-to-day visuals. We lock in your styles, fonts, and layouts into easy-to-edit Canva or Adobe Express templates, so your team can create premium assets in seconds.',
    deliverables: ['Fully editable Canva Pro brand kits', 'Custom drag-and-drop story templates', 'Structured carousel slide assets', 'Video tutorial walking through usage'],
    idealClient: 'Busy startup founders, marketing teams, and content creators wanting speed without sacrificing quality.',
    iconName: 'Layers'
  },
  {
    id: 'motion-brand',
    title: 'Motion Graphics & Brand Launches',
    description: 'Bring your brand mark to life with high-end, smooth kinetic logo reveals, cinematic launch videos, and custom motion loops for digital ads and web presentation.',
    deliverables: ['4K Kinetic logo animation (MOV/MP4)', 'Transparent logo loop for web headers', 'Animated social media intro clips', 'Interactive SVG micro-animations'],
    idealClient: 'Forward-thinking tech startups, agencies, and high-fashion labels looking to make an explosive visual impact.',
    iconName: 'Sparkles'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'luna-accessories',
    title: 'Luna Accessories',
    category: 'Elegant Accessories Brand',
    industry: 'Fashion & Accessories',
    deliverables: ['Logo System', 'Tactile Packaging Cards', 'Luxury Box Monograms', 'Social Grid Direction', 'Typography Guide'],
    resultStatement: 'Shifted positioning to quiet luxury, leading to a 74% increase in Average Order Value (AOV) and retail entry into 8 boutique outlets across NYC.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fluid-gold-particles-looping-background-41225-large.mp4',
    caseStudy: {
      overview: 'Luna Accessories handcrafts minimalist, sustainable jewelry for modern individuals. They wanted a complete visual rebrand that reflects timeless luxury, replacing an outdated script logo.',
      problem: 'The brand’s existing identity felt "craft-fair" rather than "high-end boutique". High-intent buyers were hesitant to purchase at a premium price point due to inconsistent packaging, lackluster typography, and cheap-looking social media assets.',
      creativeDirection: '“Cosmic Minimalism” — utilizing exact astronomical orbits and astronomical geometries paired with sleek editorial serif lettering. This represents the silent, glowing presence of the moon and timeless starlight.',
      moodboardKeywords: ['Quiet Luxury', 'Astrological Geometries', 'Silk Textures', 'Warm Sand Contrast', 'Obsidian Slate'],
      logoExploration: 'During discovery, we explored crescent line art, nested geometric curves, and classic high-contrast monograms before locking in the final refined crescent-L lockup.',
      finalLogoDescription: 'An ultra-precise geometric crescent moon gracefully nesting a custom-crafted high-contrast serif monogram "L". The curves align with golden ratio orbits to ensure absolute timelessness.',
      colorPalette: [
        { name: 'Obsidian Slate', hex: '#0F0F11' },
        { name: 'Satin Brass Gold', hex: '#D4AF37' },
        { name: 'Warm Cream alabaster', hex: '#FDFBF7' },
        { name: 'Driftwood Sand', hex: '#D8C3A5' }
      ],
      typography: [
        { role: 'Primary Headings', fontName: 'Playfair Display (Serif)', sample: 'Luna. Aesthetic Luxury Redefined.' },
        { role: 'Body & Metrics', fontName: 'Plus Jakarta Sans (Sans-serif)', sample: 'Handcrafted jewelry designed for modern individuals.' }
      ],
      brandApplications: [
        'Premium thick linen jewelry cards with gold-foiled edge guidelines.',
        'Embossed deep slate black accessory boxes utilizing custom textured sand ribbons.',
        'Satin travel baglets bearing the golden crescent-L stamp.',
        'Bespoke social media 9-grid guidelines for high-fashion editorial imagery.'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      outcome: 'Within four months of launch, Luna successfully repositioned into the high-end boutique segment. Their online sales grew by 112%, average order value rose from $55 to $96, and they signed retail partnerships in Paris and Tokyo.'
    }
  },
  {
    id: 'novatech-consulting',
    title: 'NovaTech Consulting',
    category: 'Elite IT Consulting Identity',
    industry: 'IT Consulting & Enterprise Systems',
    deliverables: ['Grid-System Logo', 'LinkedIn Brand Package', 'Corporate Brochure', 'Responsive Web Blueprint', 'Technical Iconography'],
    resultStatement: 'Replaced a generic corporate look with a powerful, electric cyber identity, helping secure 3 enterprise migration contracts worth $1.2M+.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-matrix-style-computer-code-41563-large.mp4',
    caseStudy: {
      overview: 'NovaTech is an elite IT consultancy serving Fortune 500 clients, helping them migrate legacy databases into scalable, secure, cloud-native architectures.',
      problem: 'NovaTech’s branding was stuck in 2012: saturated generic blue gradients, boring network nodes, and generic stock photos. This failed to communicate their state-of-the-art systems and premium fees to CTOs.',
      creativeDirection: '“Structured Speed” — incorporating precision architectural grids, heavy high-contrast lettering, and an ultra-vibrant electric blue glow that commands digital authority.',
      moodboardKeywords: ['Architectural Grids', 'Cyan Glimmer', 'Digital Authority', 'Swiss Typography', 'Kinetic Force'],
      logoExploration: 'We designed several grid-based layouts, analyzing isometric monograms and pixel-aligned typography before arriving at the portal logo.',
      finalLogoDescription: 'A bespoke typographical logo where the letter "N" functions as an architectural portal, symbolizing safe, rapid database migration through digital space.',
      colorPalette: [
        { name: 'Cyber Charcoal', hex: '#121214' },
        { name: 'Electric Cobalt', hex: '#0047FF' },
        { name: 'High-Key White', hex: '#FFFFFF' },
        { name: 'Matte Graphite', hex: '#2B2C30' }
      ],
      typography: [
        { role: 'Headers & Code Specs', fontName: 'Space Grotesk (Sans-serif)', sample: 'NOVATECH // SCALABLE DIGITAL ARCHITECTURE' },
        { role: 'Technical Metrics', fontName: 'Fira Code (Monospace)', sample: 'SYS_LOAD: 0.04ms | STATUS: PORTAL_ONLINE' }
      ],
      brandApplications: [
        'Thick matte business cards with electric blue gilded edges and debossed grid lines.',
        'Fully stylized enterprise pitch deck layout configured in Google Slides and Figma.',
        'High-contrast abstract LinkedIn banner system for executive profiles.',
        'Precision technical icon system (64 custom vector SVGs).'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      outcome: 'NovaTech successfully shed its "outdated vendor" perception. Their sales cycle shortened by 35% as prospective CTOs felt instant trust in the studio’s high-tech capability upon landing on their new digital portal.'
    }
  },
  {
    id: 'bloom-bean-cafe',
    title: 'Bloom & Bean Café',
    category: 'Artisanal Cafe & Bakery Branding',
    industry: 'Cafés & Restaurants',
    deliverables: ['Custom Botanical Monogram', 'Storefront Gilded Signage', 'Recycled Kraft Menus', 'Biodegradable Cup Sleep', 'Social Launch Pack'],
    resultStatement: 'Created an "Instagrammable" neighborhood icon. Grew store traffic by 45% in Q1 and secured over 12,000 organic Instagram tagging posts.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cup-of-hot-coffee-on-a-table-40336-large.mp4',
    caseStudy: {
      overview: 'Bloom & Bean is a botanical café and roastery that pairs handcrafted floral-infused organic pastries with rare single-origin coffee bean roasts.',
      problem: 'Bloom & Bean was drowning in a sea of identical generic hipster cafés with brown kraft bags and handwritten chalkboards. They struggled to communicate their unique floral concept.',
      creativeDirection: '“Organic Sophistication” — marrying hand-carved botanical illustrations with bespoke editorial letterforms. Earthy, deep sage greens mixed with unexpected warm terracotta clay.',
      moodboardKeywords: ['Botanical Inks', 'Hand-Carved Linocuts', 'Raw Linen Sheets', 'Terracotta Clay', 'Fresh Mint Leaves'],
      logoExploration: 'We explored classical stamps, circular coffee ring patterns, and intricate botanical line art before completing the hand-drawn floral monogram.',
      finalLogoDescription: 'A hand-drawn botanical monogram featuring blooming jasmine and coffee stems wrapping around a structured modern serif character.',
      colorPalette: [
        { name: 'Botanical Sage', hex: '#4F5D53' },
        { name: 'Terracotta Clay', hex: '#C86A50' },
        { name: 'Organic Ivory', hex: '#FAF6F0' },
        { name: 'Roasted Espresso', hex: '#1F1412' }
      ],
      typography: [
        { role: 'Elegant Titles', fontName: 'Playfair Display (Serif)', sample: 'Bloom & Bean. Botanical Roastery.' },
        { role: 'Menu Listings', fontName: 'Plus Jakarta Sans (Sans-serif)', sample: 'Single-origin espresso infused with botanical lavender honey.' }
      ],
      brandApplications: [
        'Biodegradable textured coffee cups sleeve-stamped with botanical sage ink.',
        'Menu booklets printed on beautiful recycled wildflower seed paper.',
        'Hand-painted terracotta clay pastry boxes featuring blind debossed logo markings.',
        'Elegant gold-plated outdoor storefront signage and glass framing details.'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      outcome: 'Bloom & Bean became an instant visual landmark. Customer queue wait times increased by 40% on weekends, fueled entirely by viral Instagram sharing of their beautifully branded packaging.'
    }
  },
  {
    id: 'urbanfit-studio',
    title: 'UrbanFit Studio',
    category: 'Kinetic Gym & Poster Campaign',
    industry: 'Sports & Wellness',
    deliverables: ['Brutalist Stencil Logo', 'Halftone Street Posters', 'Active-Wear Apparel Prints', 'Canva Story Guidelines', 'Dynamic Web System'],
    resultStatement: 'Established a premium subculture gym brand, filling 100% of athletic membership slots within 3 weeks of campaign launch.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-exercising-on-stationary-bicycle-40781-large.mp4',
    caseStudy: {
      overview: 'UrbanFit Studio is a premier athletic conditioning facility focused on high-octane community strength training and functional agility workouts.',
      problem: 'The local fitness scene was split between intimidating, toxic-masculine "beast-gyms" and clinical, pastel Pilates studios. UrbanFit needed an energetic, high-performance identity that felt powerful yet elite.',
      creativeDirection: '“Kinetic Brutalist” — inspired by industrial architectural layouts, concrete street art, raw halftone grids, and heavy block display typography in active motion.',
      moodboardKeywords: ['Kinetic Brutalist', 'Street Art Grids', 'Active Energy', 'Strobe Contrast', 'Industrial Concrete'],
      logoExploration: 'We tested dynamic italicized sans, modular square logos, and military-style stencils, leading to the custom vector cut wordmark.',
      finalLogoDescription: 'A heavy, high-performance typographic wordmark with diagonal cuts through each letter, creating an active sense of forward momentum and raw force.',
      colorPalette: [
        { name: 'Asphalt Deep Black', hex: '#101010' },
        { name: 'Shocking Crimson Red', hex: '#FF2A3C' },
        { name: 'Strobe Yellow-Green', hex: '#E8FF00' },
        { name: 'Industrial Cement', hex: '#CCCCCC' }
      ],
      typography: [
        { role: 'Headline Typography', fontName: 'Space Grotesk (Sans-serif Extra Bold)', sample: 'URBANFIT. PUSH THE FREQUENCY.' },
        { role: 'Stat Monitors', fontName: 'Fira Code (Monospace)', sample: 'HR_MAX: 188bpm | CAL_BURN: 720kcal | LAP_04' }
      ],
      brandApplications: [
        'Raw cement indoor walls styled with hand-painted stencil logos.',
        'Dynamic wheat-pasted street posters utilizing high-contrast halftone graphics.',
        'Limited-edition activewear shirts printed with high-density kinetic decals.',
        'High-energy Instagram story motion layouts for exercise schedules.'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      outcome: 'UrbanFit became the talk of the metropolitan athletic scene. All 450 founding memberships sold out prior to doors opening, and the studio’s custom screen-printed athletic apparel became a local streetwear fashion staple.'
    }
  },
  {
    id: 'ai-automation-audit',
    title: 'APEX AI Compliance',
    category: 'Enterprise Tech Branding & UI',
    industry: 'AI Automation & IT Services',
    deliverables: ['Mathematical Shield Logo', 'Dark Corporate Interface Design', 'LinkedIn Carousel Template', 'Executive One-Pager Layout', 'Data Visualization Charts'],
    resultStatement: 'Repositioned complex technical software into an intuitive regulatory product, assisting in a $3.5M Seed funding round.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41852-large.mp4',
    caseStudy: {
      overview: 'APEX AI provides continuous automated cloud compliance audits and system security intelligence using next-generation AI agents.',
      problem: 'Corporate compliance executives and CTOs viewed AI compliance as volatile, unpredictable, and difficult to explain to board members. They needed a brand that radiated absolute security and institutional stability.',
      creativeDirection: '“Calculated Intellect” — combining mathematical precision grids, deep space charcoal colors, and cyberteal highlight glows to signal quiet, infallible security.',
      moodboardKeywords: ['Mathematical Precision', 'Quantum Slate', 'Prism Refraction', 'Automated Safety', 'Cyberteal Glow'],
      logoExploration: 'We designed a series of shields, molecular graphs, and infinity rings, finally choosing the continuous secure mobius loop.',
      finalLogoDescription: 'An architectural structural shield formed by continuous, flowing vector lines mapping a mathematical mobius strip. This symbolizes infinite compliance cycles and impenetrable safety.',
      colorPalette: [
        { name: 'Obsidian Space', hex: '#09090A' },
        { name: 'Quantum Cyberteal', hex: '#00E5FF' },
        { name: 'Polar Aurora Green', hex: '#00E676' },
        { name: 'Deep Slate Gray', hex: '#455A64' }
      ],
      typography: [
        { role: 'Product Display', fontName: 'Space Grotesk (Sans-serif)', sample: 'APEX. Secure. Automated. Continuous Compliance.' },
        { role: 'Data Matrix', fontName: 'Plus Jakarta Sans (Sans-serif)', sample: 'System Compliance Index: 99.8% | SLA verification complete.' }
      ],
      brandApplications: [
        'High-fidelity digital layout showing cloud scanner modules and server maps.',
        'Premium PDF corporate brochure designed with precision typography grid-systems.',
        'High-contrast digital presentation layouts optimized for venture capital pitch rooms.',
        'Bespoke LinkedIn carousel templates demonstrating compliance checklist procedures.'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      outcome: 'APEX raised $3.5M in their Seed round within 60 days of launching the new identity. Investors highlighted the "unusually institutional-grade product presentation and visual authority" as a primary factor in their investment decision.'
    }
  },
  {
    id: 'maison-aura',
    title: 'Maison Aura',
    category: 'Premium Beauty & Packaging',
    industry: 'Beauty & Wellness',
    deliverables: ['Luxury Serif Wordmark', 'Matte Glass Dropper Graphics', 'Embossed Linen Box Art', 'Product Ingredient Label', 'Instagram Aesthetic Map'],
    resultStatement: 'Secured national product placement inside Sephora’s "Next Big Thing" shelf, boosting online direct-to-consumer sales by 310%.',
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cream-bottle-and-rose-flowers-40847-large.mp4',
    caseStudy: {
      overview: 'Maison Aura creates organic, marine-botanical face serums and facial oils crafted with hand-harvested kelp and ocean minerals.',
      problem: 'The cosmetic was lost on crowded shelves. Their cheap plastic packaging and busy labels failed to express their high-end organic ingredients, leading shoppers to pass over their bottles.',
      creativeDirection: '“Ethereal Calm” — extreme editorial luxury utilizing raw, textured cream linen cards, blind embossing, delicate high-stroke-contrast serif lettering, and expansive empty space.',
      moodboardKeywords: ['Tactile Linen', 'Blind Embossing', 'Ocean Minerals', 'Silent Luxury', 'Warm Alabaster Skin'],
      logoExploration: 'We refined several delicate serif characters, researching hand-etched botanical marks and clean monograms before crafting the custom wordmark.',
      finalLogoDescription: 'A custom-drawn luxury serif wordmark with high vertical contrast and elongated crossbars, paired with an abstract fluid organic marine stamp.',
      colorPalette: [
        { name: 'Linen Silk Pearl', hex: '#FCFAF7' },
        { name: 'Clay Alabaster', hex: '#ECE5DB' },
        { name: 'Burnished Gold', hex: '#A38A5F' },
        { name: 'Deep Ocean Moss', hex: '#1E231F' }
      ],
      typography: [
        { role: 'Cosmetic Branding', fontName: 'Playfair Display (Serif)', sample: 'Maison Aura. Cellular Marine Infusions.' },
        { role: 'Application Directions', fontName: 'Plus Jakarta Sans (Sans-serif)', sample: 'Massage 3-4 drops gently onto cleansed face and neck morning and night.' }
      ],
      brandApplications: [
        'Amber and frosted matte-white glass dropper bottles featuring screen-printed minimalist lettering.',
        'Linen-textured secondary outer boxes with internal bronze-foiled details.',
        'Tactile product insert cards utilizing blind embossed ocean ripples.',
        'High-end lifestyle instagram grid directing aesthetic studio photoshoots.'
      ],
      socialMediaMockupUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      websiteMockupUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
      outcome: 'Secured strategic retail placement in Sephora across 40 flagship cities. Direct online sales exploded by 310% as customers took proud unboxing photos of the tactile cream boxes and posted them on TikTok.'
    }
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'transform-1',
    title: 'Old Logo ➔ Premium Logo System',
    type: 'logo',
    before: {
      label: 'Generic Old Logo',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
      description: 'A flat, generic script template with no alignment precision or safe zones, looking cheap and amateur.'
    },
    after: {
      label: 'Premium Logo System',
      image: 'https://images.unsplash.com/photo-1541535881962-e6601223c286?auto=format&fit=crop&w=800&q=80',
      description: 'Meticulously balanced golden ratio crescent moon nesting a custom serif monogram L. Instantly projects elite luxury pedigree.'
    }
  },
  {
    id: 'transform-2',
    title: 'Basic Instagram Post ➔ Polished Ad Campaign',
    type: 'social',
    before: {
      label: 'Plain Instagram Post',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'A flat cell phone snap with generic white text overlay. Lacks visual hierarchy, styling grids, or scroll-stopping power.'
    },
    after: {
      label: 'Polished Ad Campaign',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
      description: 'High-contrast halftone grids, dynamic vector slashes, energetic kinetic strokes, and clean display typography.'
    }
  },
  {
    id: 'transform-3',
    title: 'Plain Website Hero ➔ High-End Landing Page',
    type: 'web',
    before: {
      label: 'Plain Website Hero',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'An uninspired blue-and-white theme, basic grid columns, and generic corporate elements failing to capture enterprise leads.'
    },
    after: {
      label: 'High-End Landing Page',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      description: 'Immersive dark canvas styled with floating glassmorphic consoles, razor-sharp vector grids, and luxury typographic pairings.'
    }
  },
  {
    id: 'transform-4',
    title: 'Simple Packaging ➔ Luxury Packaging Mockup',
    type: 'packaging',
    before: {
      label: 'Simple Packaging',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
      description: 'A standard glass bottle with a basic, thin sticker label and raw plastic cap that fails to justify premium wellness pricing.'
    },
    after: {
      label: 'Luxury Packaging Mockup',
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80',
      description: 'Frosted amber glass dropper bottles, premium textured linen boxes featuring blind-embossed lines, and bronze-foiled monograms.'
    }
  },
  {
    id: 'transform-5',
    title: 'Generic LinkedIn Banner ➔ Premium Consulting Banner',
    type: 'banner',
    before: {
      label: 'Generic LinkedIn Banner',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: 'A highly generic abstract blue mesh graphic look that fails to communicate unique value, position, or credibility.'
    },
    after: {
      label: 'Premium Consulting Banner',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
      description: 'Sleek, Swiss-style architectural layout blending raw stone textures with cyberteal guides and precise geometric typography.'
    }
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Brand Direction',
    description: 'We align on goals, analyze your target demographic, and draft the brand blueprint. We determine the conceptual foundation of your brand identity before sketch work starts.',
    deliverables: ['Creative Brief Blueprint', 'Visual Positioning Strategy Map', 'Competitor Aesthetic Analysis']
  },
  {
    stepNumber: 2,
    title: 'Moodboard & Research',
    description: 'We construct highly curated moodboards to explore typography, color mood, photography art direction, and tactile material textures to align on a creative direction.',
    deliverables: ['Two Distinct Aesthetic Moodboards', 'Color & Texture Direction Deck', 'Core Brand Keyword Map']
  },
  {
    stepNumber: 3,
    title: 'Logo Concepts',
    description: 'We research, sketch, and digitally craft raw vector concepts. We refine them through golden-ratio geometric grids, ensuring readability across all formats from favicons to billboards.',
    deliverables: ['Three Comprehensive Logo Lockups', 'Geometric grid safe-zone sketches', 'Dark vs Light environment previews']
  },
  {
    stepNumber: 4,
    title: 'Brand System & Mockups',
    description: 'Once the primary logo is locked, we expand it into a cohesive system: color palettes, type sets, custom patterns, social media headers, and photorealistic mockup applications.',
    deliverables: ['Dynamic Logo Suite', 'Curated Type Pairing Map', '3D Photorealistic Mockup renders']
  },
  {
    stepNumber: 5,
    title: 'Final Delivery Kit',
    description: 'We build your final master brand kit. We organize all vector source files, raster exports, social media setups, and deliver your comprehensive Brand Guidelines PDF.',
    deliverables: ['Complete Organized File Directory', 'Print & Web vector assets', '25+ Page Premium Brand Guidelines PDF']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    quote: "Working with Brand'M'Aura was a game-changer. They transformed our neighborhood cafe into a national botanical icon. Our customer flow increased by 45%, and the branded cups are constantly shared on social media. They did not just design a logo; they built our entire economic value system.",
    author: 'Clara Harrison',
    role: 'Founder & Head Baker',
    company: 'Bloom & Bean Café',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'testi-2',
    quote: "Our brand looked amateur prior to hiring Brand'M'Aura. They established a quiet luxury system that immediately resonated with high-end boutiques. Our Average Order Value shot up by 74% in weeks, and we successfully secured retail spaces in Soho and Tokyo. Best investment we’ve ever made.",
    author: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Luna Accessories',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'testi-3',
    quote: "Brand'M'Aura has rare strategic intelligence. They took our highly complex automated cybersecurity compliance software and turned it into an intuitive, secure regulatory brand. Investors were incredibly impressed by our visual presentation, which helped us close a $3.5M Seed round.",
    author: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'APEX AI Compliance',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
];

export const WHAT_CLIENTS_GET_ITEMS = [
  { title: 'Primary Logo', description: 'Your master brand mark, polished in vector formats for infinite scaling.' },
  { title: 'Secondary Logo', description: 'Horizontal and compact lockups designed for smaller mobile headers and stamps.' },
  { title: 'Icon / Favicon', description: 'A simplified, high-impact mark optimized to look crisp at 16x16 pixels.' },
  { title: 'Color Palette Formulas', description: 'Curated hex codes, RGB metrics, print CMYK, and Pantone formulas.' },
  { title: 'Typography Pairings', description: 'High-end licensed display fonts paired with highly-legible secondary types.' },
  { title: 'Social Media Templates', description: '9-Grid Instagram templates, LinkedIn banners, and customizable stories.' },
  { title: 'Brand Guidelines PDF', description: 'A comprehensive guide detailing rules, margins, and logo don’ts.' },
  { title: 'Website Hero Layout', description: 'High-fidelity wireframes and layout guides for a high-converting landing page.' },
  { title: 'Photorealistic Mockups', description: 'High-end 3D product rendering, signage proofs, and packaging mockups.' },
  { title: 'Editable Source Files', description: 'Complete vector control (.AI, .SVG, .PDF) with layered asset structures.' }
];

export const INDUSTRIES_SERVED = [
  { name: 'Fashion & Accessories', iconName: 'Shirt', count: '14+' },
  { name: 'Beauty & Wellness', iconName: 'Sparkles', count: '18+' },
  { name: 'IT Consulting', iconName: 'Cpu', count: '9+' },
  { name: 'AI Automation Services', iconName: 'Bot', count: '12+' },
  { name: 'Cafés & Restaurants', iconName: 'Coffee', count: '22+' },
  { name: 'Real Estate', iconName: 'Home', count: '6+' },
  { name: 'Coaches & Creators', iconName: 'UserCheck', count: '27+' },
  { name: 'Startups & Tech', iconName: 'Rocket', count: '31+' }
];
