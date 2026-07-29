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

