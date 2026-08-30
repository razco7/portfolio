---
title: "Tedooo"
tagline: "Web platform for a social marketplace built for crafters."
type: "Social Marketplace"
role: "Product Design, Design System"
order: 2
bgColor: "#B8E2E0"
accentColor: "#007A7A"
darkTheme: false
coverImage: "Tedooo-top.jpg"
teaserImage: "Tedooo-cover.jpg"
images: []
imageAlts: []
client: "Tedooo"
year: "2025 – 2026"
externalLink: "https://www.tedooo.com/"
externalLinkLabel: "Visit website"
description: "Tedooo is a combined social platform and marketplace for crafters — think Etsy meets Facebook Groups. I designed the entire web experience (desktop and mobile web) from the ground up, while the in-house team owned the iOS and Android apps."
---

## Overview & Context

Tedooo is a platform built for the crafting community — part marketplace, part social network. Sellers can list their handmade goods, engage with communities of fellow crafters, and promote their work. Buyers can shop directly from independent makers and follow the people behind the products. The closest analogy is Etsy and Facebook Groups merged into one.

When I joined as a freelance designer, Tedooo had a fully developed iOS and Android app built by an in-house team, but almost no web presence. The brief was to design the entire web experience — desktop and mobile web — from scratch, leaning on the app's design language while making deliberate improvements along the way.

One of the first decisions I made was to pull back on the UI's visual intensity. The app used a lot of colour — a dominant teal, busy layouts — which made sense as a design choice but worked against legibility in a feed-heavy, user-generated-content environment. With so much visual noise coming from the content itself, the interface needed to get out of the way. I shifted toward a more restrained palette: dark buttons, reduced colour use, a UI that supports the content rather than competing with it.

I also built the design system alongside the product work — translating patterns from the app to web, adapting them for larger screens, and making decisions about what to keep, what to change, and what to create from scratch.

<div class="section-group-header">The social side</div>

<p class="section-label">The Feed — Explore</p>

The feed was the starting point — the core of the experience where the social and marketplace sides of Tedooo come together. The Explore tab surfaces content from across the platform: posts from people you follow, new work from the crafting community, items being sold.

The create post composer is where the hybrid nature of the platform shows up most clearly. Sellers can post the way they would on any social platform — text, images, video — but they can also attach items directly from their shop, publishing a product to the feed in the same gesture as sharing a thought or a photo. Selling isn't a separate mode you switch into, it's something that happens naturally alongside everything else.

Supporting all these content types in one composer created real complexity. Each attachment type (photo, video, item, background) has its own mini-flow with its own decisions and states. The challenge was making all of that feel like one coherent thing rather than a branching maze of options.

<div class="body-image-full">
  <img src="/images/Tedooo-feed-desktop.jpg" alt="Tedooo feed on desktop with create post modal" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-feed-mobile.jpg" alt="Tedooo feed and create post flow on mobile" />
</div>

<p class="section-label">The Feed — Communities</p>

Communities are the more focused side of the feed — groups organised around a specific craft or interest, like Knitting, Crochet, or Woodworking. Users can join communities that match their expertise, browse a feed scoped to that group, participate in group chats (both official community chats and related topic chats), and see a leaderboard of the most active contributors. It's closer to a forum or Facebook Group than a general feed — a place for more deliberate, expertise-driven interaction.

<div class="body-image-full">
  <img src="/images/Tedooo-community-desktop.jpg" alt="Tedooo communities on desktop showing community discovery modal" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-community-mobile.jpg" alt="Tedooo communities on mobile showing feed, group chats and leaderboard" />
</div>

<div class="section-group-header">The marketplace</div>

<p class="section-label">Shopping</p>

The shopping tab was one of the most significant pieces of the project. Before this work, the marketplace had no real curation — just an endless list of the latest products. The goal was to replace that with a layered, editorially-structured homepage that could surface the right content to the right person at the right moment.

For guests, the page opens with a full-width hero and a prominent search bar with live suggestions — matching both users and products as you type. Below the fold, curated sections unfold progressively: trending categories, seasonal picks (editors' picks, Halloween collections), fresh items from local makers, top sellers of the week, gift ideas, and daily deals. Each section approaches the catalogue from a different angle, giving visitors multiple entry points into the marketplace rather than one generic scroll.

For logged-in users, the page becomes personalised: recently viewed items, products waiting in the cart, saved items, and recommendations based on browsing history sit at the top before the broader curated content. The category nav also exposes subcategories on hover, so users can drill into exactly what they're looking for without a dedicated search.

<div class="body-image-full">
  <img src="/images/Tedooo-Search.jpg" alt="Tedooo shopping tab — guest homepage with search suggestions open" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-Logged-in.jpg" alt="Tedooo shopping tab — logged in, personalised homepage with category dropdown" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-shopping.jpg" alt="Tedooo shopping on mobile — guest home, logged-in home, category page, filters and sort" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-Guest-HP-scroll.jpg" alt="Tedooo shopping tab — full guest homepage scroll" style="border: 1px solid #f0f0f0;" />
</div>

<p class="section-label">Product Page</p>

A product page on a handmade marketplace carries a lot of weight — item photos, a full description, shipping policies, seller info, reviews, and discovery sections for related items. The challenge was giving each of those things enough room to breathe while keeping the most important action (buying) always within reach.

The page is anchored by a sticky right panel that stays fixed as you scroll. It holds everything needed to make a purchase decision: item name, price (with any active sale or discount surfaced prominently), quantity, color and size selectors, and the Buy Now / Add to cart buttons. No matter how far down a buyer scrolls to read reviews or check shipping details, the purchase action is never out of reach.

The left side of the page unfolds progressively. Item details are shown in preview with a "Show more" to expand — enough context to understand what you're looking at without forcing every buyer through the full text. Shipping and policies are broken into a scannable grid. The seller card sits below, with quick access to follow or message. Reviews lead with the aggregate rating and a breakdown by star, then show individual reviews with a load-more pattern.

Below the fold, two horizontal sections close out the page: more items from this shop (keeping buyers in the seller's catalogue) and similar items from other shops (keeping them on Tedooo if the first item isn't quite right).

<div class="body-image-full">
  <img src="/images/Product-page.jpg" alt="Tedooo product page — sticky buy panel, item details, reviews, and related items" style="border: 1px solid #f0f0f0;" />
</div>

<div class="section-group-header">Seller tools</div>

<p class="section-label">Shop Creation</p>

Getting a new seller set up on Tedooo meant asking for a lot: account type, location, currency, contact details, and at least one item listed before they could start selling. That's a lot of commitment upfront. The challenge was making it feel manageable and even enjoyable — not like a form to get through, but like a setup that's actually worth completing.

The flow is structured as a step-by-step onboarding with a persistent progress bar at the top. Each step has one job: the goals screen asks what you're here for (shop, buy, browse patterns, socialize) so the experience can be personalised from the start; the details steps gather location, currency, and contact info needed for shipping and payments.

Every step uses a split layout. The left side has the form — focused, minimal, one thing at a time. The right side carries social proof and benefits: seller testimonials, live stats ("Connect with 1,572,344 customers worldwide"), animated illustrations. The effect is that filling in the form never feels like filling in a form. There's always something worth looking at on the right, and always a reason to keep going.

The final step requires adding at least one item before the shop goes live. This was a deliberate product decision — a shop with no items is a dead end for any buyer who finds it, and getting that first listing done during setup means sellers launch in a real state. Import via CSV or add manually; either way, you're done when you have something to show.

<div class="body-image-full">
  <img src="/images/Shop-creation-1.jpg" alt="Shop creation — goals selection screen" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Shop-creation-2.jpg" alt="Shop creation — location, currency and contact details with social proof" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Shop-creation-3.jpg" alt="Shop creation — add your first item, import CSV or add manually" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Shop-creation-4.jpg" alt="Shop creation — item listing form with photos, pricing and variations" style="border: 1px solid #f0f0f0;" />
</div>

<p class="section-label">Seller Hub</p>

Before this work, seller tools were scattered across the platform — no single place where a seller could manage their listings, check their orders, run a promotion, and update their shop details in one sitting. The Seller Hub was the answer to that: a dedicated area that brings everything together under one roof.

The hub is built around a persistent left nav — Dashboard, Items, Inbox, Analytics, Orders, Coupons & Sales, Image Enhancement, Your Shop, Settings — with a collapsible sidebar so sellers can reclaim screen space when they need it. The Items section is where most of the day-to-day work happens: sellers can switch between list and grid view, bulk-select items to edit prices, move them to sections, merge duplicates, and manage the section structure of their shop. Actions that used to require navigating multiple separate pages are available directly from the item management view.

The longer-term vision was to go further — pulling in shop profile details and shipping configurations that had been living in separate corners of the platform, so that setting up and maintaining a shop would eventually be a single, coherent flow rather than a scavenger hunt.

<div class="body-image-full">
  <img src="/images/Seller-hub-Panel-Open.jpg" alt="Seller Hub with sidebar expanded showing items grid view" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Seller-hub-Panel-closed.jpg" alt="Seller Hub with sidebar collapsed to icons" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Seller-hub-Items.jpg" alt="Seller Hub items in list view" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Seller-hub-Shop-profile.jpg" alt="Seller Hub with move to section modal open" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/Seller-hub-mobile.jpg" alt="Seller Hub on mobile — items, nav, bulk actions and section management" />
</div>

<p class="section-label">Patterns & Projects</p>

Patterns is a dedicated space for crafters to share and discover pattern files and project guides. The library grows fast, so the core design challenge was less about what to show than how to keep it from overwhelming.

The primary action we wanted to drive was uploading. Contributing to a shared library is what makes it valuable, so the upload button sits at the top of the page, always visible, never buried. Everything else is in service of helping people find what they're looking for once they arrive: search for a specific pattern, filter by subject or type, sort by what matters to you. The tools are there when you need them and out of the way when you don't.

The bigger decision was at the card level. With this many patterns on screen at once, individual cards needed to carry only the essentials — the name, who shared it, and a thread opener to invite conversation. Anything beyond that risked turning a browsable grid into a wall of information. Less obvious actions (save, download, report) are tucked behind a three-dot menu. The result is a page that reads as content first: the craft photography on each card does the visual work, and the interface stays quiet enough to let it.

<div class="body-image-full">
  <img src="/images/Tedooo-Patterns-1.jpg" alt="Tedooo Patterns listing page with pro upsell" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-Patterns-2.jpg" alt="Tedooo Patterns filter panel" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-Patterns-3.jpg" alt="Tedooo Patterns upload modal" />
</div>

<div class="body-image-full">
  <img src="/images/Tedooo-Patterns-4.jpg" alt="Tedooo Patterns — pattern discussion thread and three-dot action menu" />
</div>

<div class="section-group-header">The new bet</div>

<p class="section-label">AI Vision</p>

Vision lets you imagine a product, describe it, and receive a physical handmade item at your door — generated by AI and made by a partner manufacturer. The concept is genuinely novel, which made it one of the harder design problems on the project.

The first challenge was comprehension. The mental leap from "describe something" to "a real object shows up at your door" involves several steps that aren't obvious without help: that the AI is generating a visual, that the visual represents a real product, that you can actually order it. Users could easily get to the generation screen and not understand what they were looking at. We addressed this with progressive signposting — the entry point uses a headline built around "imagine, create, shop" rather than explaining the mechanics; further into the flow, real product examples appear alongside the AI output to anchor the idea; and the final screens make the physical outcome explicit. Each step adds a clue rather than relying on a single upfront explanation.

The second challenge was length. The flow covers a lot of ground — category selection, idea input (text, image upload, or library browse), a loading state, a side-by-side comparison, customisation, and checkout. That's a lot of commitment for something that requires imagination before it delivers. The response was to keep each step as focused and visually light as possible, lean into the playfulness of the concept rather than fighting it, and never let the interface feel heavier than the idea it's trying to surface.

<div class="body-image-full">
  <img src="/images/02A-Tedooo-AI-vision.jpg" alt="AI Vision step 1 — choose a category" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/02B-Tedooo-AI-vision.jpg" alt="AI Vision step 2 — write an idea or upload image" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/02D-Tedooo-AI-vision.jpg" alt="AI Vision — generating your design" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/02F-Tedooo-AI-vision.jpg" alt="AI Vision — customize your item" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/images/02G-Tedooo-AI-vision.jpg" alt="AI Vision — checkout" style="border: 1px solid #f0f0f0;" />
</div>

## Outcome

Over roughly eight months, I designed Tedooo's entire web platform from scratch — feed, communities, marketplace, Patterns, and AI Vision, across desktop and mobile web — along with the design system underneath it all.

Building the design system was a major part of the project in its own right. It was built from scratch, in parallel with the product work — each new surface informed the system, and the system shaped each new surface. The philosophy running through it matches the platform's core challenge: when there's this much user-generated content on screen, the UI needs to earn its quiet. The system leans on dark buttons, a restrained palette, and components that recede by default. The teal brand colour is still there — and used deliberately for moments that need a boost — but the baseline is a UI that doesn't compete with the community's work for attention.

The working process was tight: I designed each surface for desktop and mobile, and for some flows I'd design the desktop version and hand it to a developer who built the mobile version with AI assistance, which I'd then review. It kept a small team moving fast across a lot of surface area. Most of this shipped to production toward the end of the engagement, which wound down when the product manager I worked with left the company.

The throughline across all of it was the same principle I started with: with this much user-generated content, the interface's job is to get out of the way and let the community's work carry the experience.

## What I'd Do Differently

The design system was built alongside the product work rather than before it — the natural consequence of a project that grew incrementally from a specific brief into a full platform. In hindsight I'd have mapped the full scope first: the range here was unusually wide — a social platform, an ecommerce marketplace, and a seller dashboard under one roof, each with genuinely different component needs — and making system decisions with that breadth in mind from the start would have saved real retrofitting later.

The lesson: even when you can't predict the full scope, treating the design system as a strategic foundation rather than something that accumulates behind the product work makes a meaningful difference over a long engagement.
