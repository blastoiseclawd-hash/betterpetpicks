/**
 * Generate infographic images for support/guide pages using Playwright.
 * Run: node scripts/generate-guide-images.mjs
 */
import { chromium } from "playwright";
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const BASE = "public/images/guides";

const palette = {
  bg: "#FBF6F0",
  dark: "#1C1210",
  leather: "#6B4C3B",
  amber: "#D4883A",
  green: "#2D7E5E",
  lightGreen: "#e8f5e9",
  lightAmber: "#fff3e0",
  lightBlue: "#e3f2fd",
  lightRed: "#ffebee",
  white: "#ffffff",
  gray: "#f5f0eb",
};

function card(title, items, accent = palette.amber) {
  const rows = items
    .map(
      (item) => `
    <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:18px;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:12px;background:${item.color || palette.lightAmber};display:flex;align-items:center;justify-content:center;font-size:24px;">${item.icon}</div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:18px;color:${palette.dark};margin-bottom:4px;">${item.label}</div>
        <div style="font-size:15px;color:#5a4a3a;line-height:1.4;">${item.detail}</div>
      </div>
    </div>`
    )
    .join("");

  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',system-ui,sans-serif;background:${palette.bg};padding:40px;width:800px;}
  </style></head><body>
    <div style="background:${palette.white};border-radius:20px;padding:36px 40px;box-shadow:0 2px 12px rgba(0,0,0,0.06);border-left:6px solid ${accent};">
      <h2 style="font-size:26px;color:${palette.leather};margin-bottom:28px;font-weight:800;">${title}</h2>
      ${rows}
    </div>
  </body></html>`;
}

function heroCard(title, subtitle, items, accent = palette.green) {
  const badges = items
    .map(
      (item) => `
    <div style="display:inline-flex;align-items:center;gap:8px;background:${item.color || palette.lightGreen};padding:10px 18px;border-radius:10px;margin:4px;">
      <span style="font-size:20px;">${item.icon}</span>
      <span style="font-size:15px;font-weight:600;color:${palette.dark};">${item.text}</span>
    </div>`
    )
    .join("");

  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',system-ui,sans-serif;background:${palette.bg};padding:40px;width:800px;}
  </style></head><body>
    <div style="background:linear-gradient(135deg,${palette.white} 0%,${palette.gray} 100%);border-radius:20px;padding:44px 40px;box-shadow:0 2px 12px rgba(0,0,0,0.06);border-top:6px solid ${accent};">
      <h1 style="font-size:30px;color:${palette.dark};margin-bottom:8px;font-weight:800;">${title}</h1>
      <p style="font-size:17px;color:${palette.leather};margin-bottom:24px;line-height:1.5;">${subtitle}</p>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">${badges}</div>
    </div>
  </body></html>`;
}

function comparisonCard(title, rows, headers, accent = palette.leather) {
  const headerCells = headers.map((h) => `<th style="text-align:left;padding:12px 16px;font-size:14px;font-weight:700;color:${palette.white};background:${accent};white-space:nowrap;">${h}</th>`).join("");
  const bodyRows = rows
    .map(
      (row, i) => `<tr style="background:${i % 2 === 0 ? palette.white : palette.gray};">
      ${row.map((cell) => `<td style="padding:12px 16px;font-size:14px;color:${palette.dark};border-bottom:1px solid #ece6de;">${cell}</td>`).join("")}
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',system-ui,sans-serif;background:${palette.bg};padding:40px;width:800px;}
    table{width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;}
  </style></head><body>
    <div style="background:${palette.white};border-radius:20px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
      <h2 style="font-size:22px;color:${palette.leather};margin-bottom:20px;font-weight:800;">${title}</h2>
      <table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>
    </div>
  </body></html>`;
}

function stepsCard(title, steps, accent = palette.green) {
  const stepHtml = steps
    .map(
      (step, i) => `
    <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:20px;">
      <div style="flex-shrink:0;width:40px;height:40px;border-radius:50%;background:${accent};color:white;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;">${i + 1}</div>
      <div style="flex:1;padding-top:6px;">
        <div style="font-weight:700;font-size:17px;color:${palette.dark};margin-bottom:4px;">${step.title}</div>
        <div style="font-size:14px;color:#5a4a3a;line-height:1.4;">${step.detail}</div>
      </div>
    </div>`
    )
    .join("");

  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Segoe UI',system-ui,sans-serif;background:${palette.bg};padding:40px;width:800px;}
  </style></head><body>
    <div style="background:${palette.white};border-radius:20px;padding:36px 40px;box-shadow:0 2px 12px rgba(0,0,0,0.06);border-left:6px solid ${accent};">
      <h2 style="font-size:24px;color:${palette.leather};margin-bottom:24px;font-weight:800;">${title}</h2>
      ${stepHtml}
    </div>
  </body></html>`;
}

// ── Image definitions per guide ─────────────────────────────────
const guides = {
  "how-much-cat-litter-to-use": [
    {
      name: "01-hero",
      html: heroCard("How Much Cat Litter to Use", "The right depth, what happens with too much or too little, and monthly usage by type.", [
        { icon: "📏", text: "3-4 inches for clumping", color: palette.lightGreen },
        { icon: "📏", text: "2-3 inches for non-clumping", color: palette.lightBlue },
        { icon: "📏", text: "1.5-2 inches for crystal", color: palette.lightAmber },
        { icon: "📏", text: "2-3 inches for pellet", color: palette.lightGreen },
      ]),
    },
    {
      name: "02-depth-guide",
      html: comparisonCard("Recommended Depth by Litter Type", [
        ["Clumping clay", "3-4 inches", "7-10 lbs/month", "Most common, easiest to calibrate"],
        ["Non-clumping clay", "2-3 inches", "8-12 lbs/month", "Replace entire box more often"],
        ["Crystal / silica", "1.5-2 inches", "~8 lbs/month", "Crystals darken as they absorb"],
        ["Pine / pellet", "2-3 inches", "5-8 lbs/month", "Pellets expand when wet"],
        ["Corn-based", "3 inches", "6-9 lbs/month", "Clumps less firmly than clay"],
      ], ["Litter Type", "Depth", "Monthly Use (1 cat)", "Notes"]),
    },
    {
      name: "03-too-much-too-little",
      html: card("Too Much vs. Too Little Litter", [
        { icon: "⬆️", label: "Too Much (5-6 inches)", detail: "Unstable surface cats avoid, wasted litter at the bottom, more scatter and overflow", color: palette.lightRed },
        { icon: "✅", label: "Just Right (3-4 inches)", detail: "Solid clumps form above the pan, cats dig and cover comfortably, no waste", color: palette.lightGreen },
        { icon: "⬇️", label: "Too Little (1-2 inches)", detail: "Clumps stick to pan, odor escapes faster, cats stop covering or avoid the box", color: palette.lightRed },
      ]),
    },
    {
      name: "04-topping-off-steps",
      html: stepsCard("How to Top Off Without Overfilling", [
        { title: "Scoop first", detail: "Remove all clumps and waste before checking depth" },
        { title: "Check the depth", detail: "Push a finger into the center — should reach second knuckle (3 inches)" },
        { title: "Add a thin layer", detail: "Pour 1-2 cups evenly across the surface — not dumped in one spot" },
        { title: "Level the surface", detail: "Spread flat with the scoop — cats prefer an even, flat surface" },
      ]),
    },
  ],

  "how-to-remove-pet-hair-from-couch": [
    {
      name: "01-hero",
      html: heroCard("How to Remove Pet Hair From a Couch", "Method-by-method guide for fabric, leather, and microfiber furniture.", [
        { icon: "🧤", text: "Rubber glove method", color: palette.lightGreen },
        { icon: "🔄", text: "Reusable roller", color: palette.lightBlue },
        { icon: "💨", text: "Vacuum attachment", color: palette.lightAmber },
        { icon: "🧹", text: "Prevention tips", color: palette.lightGreen },
      ]),
    },
    {
      name: "02-rubber-glove-method",
      html: stepsCard("Rubber Glove Method (Best for Fabric)", [
        { title: "Dampen a rubber dishwashing glove", detail: "Run under water until just damp — not dripping wet" },
        { title: "Run your hand across the fabric", detail: "Use firm, consistent strokes in one direction — hair clumps into rolls" },
        { title: "Collect the hair rolls", detail: "Pick up clumps by hand or vacuum. Rinse glove and repeat as needed" },
        { title: "Finish with a lint roller", detail: "Quick pass with adhesive roller catches the fine hair the glove misses" },
      ]),
    },
    {
      name: "03-tool-comparison",
      html: comparisonCard("Tool Comparison by Surface", [
        ["Rubber glove", "Fabric couch", "High", "Free (use kitchen gloves)"],
        ["ChomChom roller", "All fabric types", "High", "~$25, reusable"],
        ["Lint roller", "Any surface, clothes", "Medium", "~$10 + refills"],
        ["Vacuum + upholstery tool", "Deep embedded hair", "Highest", "Uses existing vacuum"],
        ["Dryer sheet", "Light surface hair", "Low", "~$0.10 per sheet"],
      ], ["Tool", "Best Surface", "Effectiveness", "Cost"]),
    },
    {
      name: "04-prevention",
      html: card("Prevention: Reduce Hair Before It Reaches the Couch", [
        { icon: "🪮", label: "Brush your pet daily", detail: "10 minutes of brushing removes loose hair before it sheds onto furniture", color: palette.lightGreen },
        { icon: "🛋️", label: "Use a washable throw", detail: "A machine-washable blanket on the pet's favorite spot catches most hair", color: palette.lightBlue },
        { icon: "💨", label: "Run a robot vacuum daily", detail: "Catches airborne hair before it settles on furniture surfaces", color: palette.lightAmber },
        { icon: "🧴", label: "Consider a deshedding tool", detail: "FURminator or similar tools reduce shedding volume by up to 90%", color: palette.lightGreen },
      ]),
    },
  ],

  "how-to-remove-pet-hair-from-clothes": [
    {
      name: "01-hero",
      html: heroCard("How to Remove Pet Hair From Clothes", "Before you leave the house, in the laundry, and by fabric type.", [
        { icon: "👔", text: "Lint roller: fastest", color: palette.lightBlue },
        { icon: "🌀", text: "Dryer: most thorough", color: palette.lightAmber },
        { icon: "🧺", text: "Washer: add vinegar", color: palette.lightGreen },
        { icon: "🧥", text: "Fabric-specific tips", color: palette.lightGreen },
      ]),
    },
    {
      name: "02-dryer-method",
      html: stepsCard("Dryer Method (Most Thorough)", [
        { title: "Toss clothes in dryer on low heat", detail: "10 minutes on low heat or air-only cycle loosens embedded hair" },
        { title: "Add a dryer sheet or wool dryer ball", detail: "Reduces static cling that holds hair to fabric fibers" },
        { title: "Clean the lint trap immediately after", detail: "The trap collects the bulk of the removed hair — clean before next load" },
        { title: "Follow with a lint roller if needed", detail: "Quick pass catches any remaining surface hair the dryer missed" },
      ]),
    },
    {
      name: "03-fabric-guide",
      html: comparisonCard("Best Method by Fabric Type", [
        ["Wool / cashmere", "Lint roller or tape", "Static attracts hair — dryer can felt wool"],
        ["Fleece / polyester", "Dryer on low + dryer sheet", "Static-prone fabric — dryer sheet is critical"],
        ["Cotton / denim", "Dryer or washing machine", "Most forgiving fabric — any method works"],
        ["Silk / delicate", "Lint roller only", "No dryer, no tape — gentle adhesive only"],
        ["Dress clothes", "Lint roller before leaving", "Keep a roller by the door for last-minute cleanup"],
      ], ["Fabric", "Best Method", "Notes"]),
    },
    {
      name: "04-washing-tips",
      html: card("Washing Machine Tips for Pet Hair", [
        { icon: "🧺", label: "Add 1/2 cup white vinegar to rinse", detail: "Vinegar loosens hair from fabric fibers during the rinse cycle", color: palette.lightGreen },
        { icon: "🔄", label: "Run an empty rinse cycle after", detail: "Clears pet hair from the drum before your next non-pet load", color: palette.lightBlue },
        { icon: "🧽", label: "Use a pet hair catcher in the washer", detail: "Floating mesh balls collect loose hair during the wash cycle", color: palette.lightAmber },
        { icon: "⚠️", label: "Never overload the washer", detail: "Clothes need room to agitate — overloading traps hair in folds", color: palette.lightRed },
      ]),
    },
  ],

  "how-to-get-cat-to-use-scratching-post": [
    {
      name: "01-hero",
      html: heroCard("How to Get Your Cat to Use a Scratching Post", "Placement, material choice, catnip training, and redirection from furniture.", [
        { icon: "📍", text: "Placement is #1", color: palette.lightGreen },
        { icon: "🧶", text: "Sisal > carpet", color: palette.lightAmber },
        { icon: "🌿", text: "Catnip accelerates", color: palette.lightGreen },
        { icon: "🛋️", text: "Redirect, don't punish", color: palette.lightBlue },
      ]),
    },
    {
      name: "02-placement",
      html: card("Where to Put the Scratching Post", [
        { icon: "✅", label: "Next to the couch they scratch", detail: "Same room, same spot — use existing motivation instead of fighting it", color: palette.lightGreen },
        { icon: "✅", label: "Near sleeping areas", detail: "Cats scratch after waking — capture the habitual after-nap stretch", color: palette.lightGreen },
        { icon: "✅", label: "High-traffic areas", detail: "Hallways, living rooms, near food bowls — high-value territory for marking", color: palette.lightGreen },
        { icon: "❌", label: "NOT in spare rooms or corners", detail: "Cats ignore posts in spots that do not matter to them", color: palette.lightRed },
      ]),
    },
    {
      name: "03-material-comparison",
      html: comparisonCard("Scratching Material Comparison", [
        ["Sisal rope", "Vertical posts", "Best", "Most cats prefer it — mimics tree bark"],
        ["Cardboard", "Flat/angled pads", "Good", "Cheap, replaceable, horizontal scratchers love it"],
        ["Carpet", "Posts and trees", "Risky", "Trains cats that carpet = scratching surface"],
        ["Wood / bark", "Log sections", "Good", "Natural appeal, works well for indoor/outdoor cats"],
      ], ["Material", "Best For", "Effectiveness", "Notes"]),
    },
    {
      name: "04-redirect-steps",
      html: stepsCard("Redirect From Furniture to Post", [
        { title: "Cover the scratched furniture", detail: "Double-sided tape or foil on the spot — cats hate sticky/crinkly paws" },
        { title: "Post right next to the furniture", detail: "Within arm's reach — the cat needs to see it as the alternative" },
        { title: "Apply catnip to the post", detail: "Rub into sisal surface — silvervine works for the 30% immune to catnip" },
        { title: "Reward immediately when used", detail: "Treat within 2 seconds of scratching the post — timing is critical" },
        { title: "Remove deterrent after 2-3 weeks", detail: "Gradually — reapply if cat returns to furniture" },
      ]),
    },
  ],

  "how-often-to-change-cat-litter": [
    {
      name: "01-hero",
      html: heroCard("How Often to Change Cat Litter", "Complete change schedule, daily scooping routine, and multi-cat adjustments.", [
        { icon: "📅", text: "Clumping: every 2-4 weeks", color: palette.lightGreen },
        { icon: "📅", text: "Non-clumping: every 1-2 weeks", color: palette.lightBlue },
        { icon: "📅", text: "Crystal: every 2-4 weeks", color: palette.lightAmber },
        { icon: "📅", text: "Pellet: every 1-2 weeks", color: palette.lightGreen },
      ]),
    },
    {
      name: "02-schedule",
      html: comparisonCard("Complete Change Schedule by Litter Type", [
        ["Clumping clay", "Daily", "Every 2-4 weeks", "Scoop daily, full dump when odor persists"],
        ["Non-clumping clay", "Daily (stir)", "Every 1-2 weeks", "Cannot scoop — replace the whole box"],
        ["Crystal / silica", "Remove solids daily", "Every 2-4 weeks", "Stir crystals daily, replace when saturated"],
        ["Pine / pellet", "Sift sawdust daily", "Every 1-2 weeks", "Wet pellets become sawdust — sift and refill"],
        ["Corn / grass", "Daily", "Every 2-3 weeks", "Clumps softer than clay — may need more frequent full change"],
      ], ["Litter Type", "Daily Routine", "Full Change", "Notes"]),
    },
    {
      name: "03-scooping-steps",
      html: stepsCard("Daily Scooping Routine", [
        { title: "Scoop all clumps and solids", detail: "Check corners and edges — clumps stick to walls of the box" },
        { title: "Check the depth", detail: "If below 3 inches (clumping) or 2 inches (other), top off with fresh litter" },
        { title: "Stir remaining litter gently", detail: "Breaks up clumps that started forming and distributes fresh litter evenly" },
        { title: "Dispose in sealed bag", detail: "Double-bag waste in a sealed trash bag — keeps odor out of the room" },
      ]),
    },
    {
      name: "04-signs-to-change",
      html: card("Signs Your Litter Needs a Full Change", [
        { icon: "👃", label: "Persistent smell after scooping", detail: "If odor lingers despite daily scooping, the base litter is saturated", color: palette.lightRed },
        { icon: "🐱", label: "Cat avoids the box", detail: "Standing on the edge, going quickly, or refusing to cover waste", color: palette.lightRed },
        { icon: "🔍", label: "Litter looks dark or damp throughout", detail: "Clean litter should be light-colored and dry between clumps", color: palette.lightAmber },
        { icon: "⏰", label: "It has been 4+ weeks (clumping)", detail: "Even with perfect scooping, base litter degrades over time", color: palette.lightAmber },
      ]),
    },
  ],

  "how-to-clean-cat-pee-from-carpet": [
    {
      name: "01-hero",
      html: heroCard("How to Clean Cat Pee From Carpet", "Immediate response, enzymatic treatment, old stains, and UV detection.", [
        { icon: "⚡", text: "Act fast on fresh stains", color: palette.lightRed },
        { icon: "🧪", text: "Enzymatic cleaner only", color: palette.lightGreen },
        { icon: "🔦", text: "UV blacklight finds hidden spots", color: palette.lightAmber },
        { icon: "🛡️", text: "Seal subfloor if needed", color: palette.lightBlue },
      ]),
    },
    {
      name: "02-immediate-steps",
      html: stepsCard("Fresh Stain: Immediate Response", [
        { title: "Blot with paper towels", detail: "Press firmly for 10-15 seconds per blot — do NOT rub, which pushes urine deeper" },
        { title: "Apply body weight", detail: "Stack towels and stand on them to draw urine up from the carpet padding" },
        { title: "Rinse with cold water", detail: "Pour a cup of cold water — never hot, which bonds proteins to fibers permanently" },
        { title: "Saturate with enzymatic cleaner", detail: "Apply enough to reach the same depth as the urine — cover with plastic to stay moist" },
        { title: "Air dry completely", detail: "Do not blot or vacuum — enzymes work while the area is damp" },
      ]),
    },
    {
      name: "03-enzymatic-science",
      html: card("Why Only Enzymatic Cleaners Work", [
        { icon: "💧", label: "Urea (water-soluble)", detail: "Standard cleaners remove this — the visible stain component", color: palette.lightBlue },
        { icon: "🎨", label: "Urochrome (pigment)", detail: "Causes the yellow color — removed by most cleaners", color: palette.lightAmber },
        { icon: "🧬", label: "Uric acid (the real problem)", detail: "Forms crystals with a 6-YEAR half-life — only enzymes break these down", color: palette.lightRed },
        { icon: "✅", label: "Enzymatic cleaner", detail: "Bacteria produce enzymes that convert uric acid to CO2 and water — permanent fix", color: palette.lightGreen },
      ]),
    },
    {
      name: "04-blacklight-guide",
      html: card("Finding Hidden Stains With a UV Blacklight", [
        { icon: "🌙", label: "Wait until the room is dark", detail: "Complete darkness — even small light sources wash out the fluorescence", color: palette.lightBlue },
        { icon: "🔦", label: "Use 365-385nm wavelength", detail: "Budget $15-25 for a true UV light — cheap purple flashlights do not work well", color: palette.lightAmber },
        { icon: "🟡", label: "Cat urine glows yellow-green", detail: "Mark each spot with painter's tape so you can find them with lights on", color: palette.lightGreen },
        { icon: "📍", label: "Check behind furniture and baseboards", detail: "Common hidden spots: behind couches, under beds, near litter box, near doors", color: palette.lightGreen },
      ]),
    },
  ],
};

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 800, height: 600 } });

  for (const [slug, images] of Object.entries(guides)) {
    const dir = join(BASE, slug);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    for (const img of images) {
      const page = await context.newPage();
      await page.setContent(img.html);
      // Auto-size to content
      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
      await page.setViewportSize({ width: 800, height: bodyHeight + 80 });
      await page.screenshot({ path: join(dir, `${img.name}.png`), fullPage: true });
      await page.close();
      console.log(`  ✓ ${slug}/${img.name}.png`);
    }
  }

  await browser.close();
  console.log("\nDone! All guide images generated.");
}

main().catch(console.error);
