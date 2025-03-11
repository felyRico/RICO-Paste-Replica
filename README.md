# Replicating Paste's 4.0 webpage (Very Legal)

## Overview:
This implementation uses React and GSAP (with ScrollTrigger) to create dynamic, animation with 3 main components.

## Components:

     Header:
        Displays the logo, title, and a "Try for free" button.
        Initially positioned off-screen (using y: -100) and slides down when the intro section is fully scrolled past.
        The slide animation is handled in the App component with GSAP ScrollTrigger.

     GsapIntroAnimation:
        Contains animated text, logo, and background.
        An overlay darkens the section as the user scrolls.
        The section is pinned using ScrollTrigger (with pinSpacing: false) so the next section can cover it.

    HeroSection:
        Features large laptop images and descriptive text.
        The laptop sliding animation starts immediately when the section appears, and is scrubbed to the scroll for a dynamic effect.
        No pin is used here so scrolling remains fluid.

## App Component:

    Wraps the components in a container with zero margin/padding to avoid any unwanted gaps.
    Sets up the header’s slide-down animation using GSAP ScrollTrigger based on the scroll position of the intro section.

There are suppossed to be 8 more sections to work on for this is just 20% of the total sections needs to be done. I may work on those soon (lie)