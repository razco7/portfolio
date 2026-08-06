---
title: "Tedooo"
tagline: "Web platform for a social marketplace built for crafters."
type: "Social Marketplace"
role: "Product Design, Design System"
order: 2
bgColor: "#B8E2E0"
accentColor: "#007A7A"
darkTheme: false
coverImage: "Tedooo_top.jpg"
teaserImage: "Tedooo_cover.jpg"
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

## The Feed

<p class="section-label">Explore</p>

The feed was the starting point — the core of the experience where the social and marketplace sides of Tedooo come together. The Explore tab surfaces content from across the platform: posts from people you follow, new work from the crafting community, items being sold.

The create post composer is where the hybrid nature of the platform shows up most clearly. Sellers can post the way they would on any social platform — text, images, video — but they can also attach items directly from their shop, publishing a product to the feed in the same gesture as sharing a thought or a photo. Selling isn't a separate mode you switch into, it's something that happens naturally alongside everything else.

Supporting all these content types in one composer created real complexity. Each attachment type (photo, video, item, background) has its own mini-flow with its own decisions and states. The challenge was making all of that feel like one coherent thing rather than a branching maze of options.

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo_01_feed_Desktop.jpg" alt="Tedooo feed on desktop with create post modal" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo_01_feed_Mobile.jpg" alt="Tedooo feed and create post flow on mobile" />
</div>

<p class="section-label">Communities</p>

Communities are the more focused side of the feed — groups organised around a specific craft or interest, like Knitting, Crochet, or Woodworking. Users can join communities that match their expertise, browse a feed scoped to that group, participate in group chats (both official community chats and related topic chats), and see a leaderboard of the most active contributors. It's closer to a forum or Facebook Group than a general feed — a place for more deliberate, expertise-driven interaction.

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo_01_community_Desktop.jpg" alt="Tedooo communities on desktop showing community discovery modal" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo_01_comunity_Mobile.jpg" alt="Tedooo communities on mobile showing feed, group chats and leaderboard" />
</div>

## Patterns & Projects

Patterns is the more professional side of Tedooo — a dedicated tab where crafters can share their patterns and project files with the community. Anyone can upload and contribute for free, but accessing the full library requires a Pro subscription. Free users get a preview of the content before hitting a soft paywall that prompts them to upgrade.

The main listing has search, filters (by type, price, and skill level), and sort — enough to navigate a large library meaningfully. Each pattern card links to a discussion thread, making it a place for knowledge-sharing, not just file distribution. The upload flow itself is minimal: drop a file, add a title, pick a category and level, confirm you have rights to share, and publish.

The same design principle that guided the rest of the platform applies here: keep the UI as quiet as possible and let the content do the work. The cards are driven by craft photography — colourful, detailed, visually rich — so the surrounding interface stays clean and out of the way.

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Patterns-1.jpg" alt="Tedooo Patterns listing page with pro upsell" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Patterns-2.jpg" alt="Tedooo Patterns filter panel" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Patterns-3.jpg" alt="Tedooo Patterns upload modal" />
</div>

## Shopping

The shopping tab was one of the most significant pieces of the project. Before this work, the marketplace had no real curation — just an endless list of the latest products. The goal was to replace that with a layered, editorially-structured homepage that could surface the right content to the right person at the right moment.

For guests, the page opens with a full-width hero and a prominent search bar with live suggestions — matching both users and products as you type. Below the fold, curated sections unfold progressively: trending categories, seasonal picks (editors' picks, Halloween collections), fresh items from local makers, top sellers of the week, gift ideas, and daily deals. Each section approaches the catalogue from a different angle, giving visitors multiple entry points into the marketplace rather than one generic scroll.

For logged-in users, the page becomes personalised: recently viewed items, products waiting in the cart, saved items, and recommendations based on browsing history sit at the top before the broader curated content. The category nav also exposes subcategories on hover, so users can drill into exactly what they're looking for without a dedicated search.

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Search.jpg" alt="Tedooo shopping tab — guest homepage with search suggestions open" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Logged-in.jpg" alt="Tedooo shopping tab — logged in, personalised homepage with category dropdown" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-shopping.jpg" alt="Tedooo shopping on mobile — guest home, logged-in home, category page, filters and sort" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Tedooo-Guest-HP-scroll.jpg" alt="Tedooo shopping tab — full guest homepage scroll" style="border: 1px solid #f0f0f0;" />
</div>

## AI Vision

Vision is one of Tedooo's more distinctive features. The idea is simple: imagine something, describe it, and get a physical handmade item delivered to your door. You pick a category — plushie, pillow, jewellery, crochet doll — then describe what you want (or upload a reference image, or browse the library). The AI generates two options side by side. You pick one, customise the size and quantity, and order. Tedooo routes the design to a partner manufacturer who makes and ships the actual item.

The flow is a three-step wizard, but it spans a lot of ground: idea input, AI generation with a loading state, a comparison screen, customisation, and checkout. Each step had its own design considerations, and the whole thing needed to feel light and playful given how novel the concept is.

<div class="body-gallery" id="ai-vision-gallery">
  <div class="body-gallery-track">
    <img src="/portfolio/images/02A-Tedooo-AI-vision.jpg" alt="AI Vision step 1 — choose a category" />
    <img src="/portfolio/images/02B-Tedooo-AI-vision.jpg" alt="AI Vision step 2 — write an idea or upload image" />
    <img src="/portfolio/images/02C-Tedooo-AI-vision.jpg" alt="AI Vision — add credits modal" />
    <img src="/portfolio/images/02D-Tedooo-AI-vision.jpg" alt="AI Vision — generating your design" />
    <img src="/portfolio/images/02E-Tedooo-AI-vision.jpg" alt="AI Vision step 3 — choose between two generated designs" />
    <img src="/portfolio/images/02F-Tedooo-AI-vision.jpg" alt="AI Vision — customize your item" />
    <img src="/portfolio/images/02G-Tedooo-AI-vision.jpg" alt="AI Vision — checkout" />
    <img src="/portfolio/images/02H-Tedooo-AI-vision.jpg" alt="AI Vision hub — your creations and orders" />
  </div>
  <button class="body-gallery-btn body-gallery-prev" aria-label="Previous"><span class="material-symbols-outlined">arrow_back</span></button>
  <button class="body-gallery-btn body-gallery-next" aria-label="Next"><span class="material-symbols-outlined">arrow_forward</span></button>
</div>
<script>
  (function() {
    var gallery = document.getElementById('ai-vision-gallery');
    var track = gallery.querySelector('.body-gallery-track');
    gallery.querySelector('.body-gallery-prev').addEventListener('click', function() {
      track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
    });
    gallery.querySelector('.body-gallery-next').addEventListener('click', function() {
      track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
    });
  })();
</script>

## Seller Hub

Before this work, seller tools were scattered across the platform — no single place where a seller could manage their listings, check their orders, run a promotion, and update their shop details in one sitting. The Seller Hub was the answer to that: a dedicated area that brings everything together under one roof.

The hub is built around a persistent left nav — Dashboard, Items, Inbox, Analytics, Orders, Coupons & Sales, Image Enhancement, Your Shop, Settings — with a collapsible sidebar so sellers can reclaim screen space when they need it. The Items section is where most of the day-to-day work happens: sellers can switch between list and grid view, bulk-select items to edit prices, move them to sections, merge duplicates, and manage the section structure of their shop. Actions that used to require navigating multiple separate pages are available directly from the item management view.

The longer-term vision was to go further — pulling in shop profile details and shipping configurations that had been living in separate corners of the platform, so that setting up and maintaining a shop would eventually be a single, coherent flow rather than a scavenger hunt.

<div class="body-image-full">
  <img src="/portfolio/images/Seller-hub-Panel-Open.jpg" alt="Seller Hub with sidebar expanded showing items grid view" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Seller-hub-Panel-closed.jpg" alt="Seller Hub with sidebar collapsed to icons" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Seller-hub-Items.jpg" alt="Seller Hub items in list view" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Seller-hub-Shop-profile.jpg" alt="Seller Hub with move to section modal open" style="border: 1px solid #f0f0f0;" />
</div>

<div class="body-image-full">
  <img src="/portfolio/images/Seller-hub-mobile.jpg" alt="Seller Hub on mobile — items, nav, bulk actions and section management" />
</div>
