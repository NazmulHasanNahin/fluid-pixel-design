

# Animation Suggestions for Services, Portfolio & Pricing

After reviewing the current implementations, here are refined animation ideas for each section:

## Services Section
Currently uses basic fade-up on cards. Suggested upgrades:
- **Staggered scale-in with rotation**: Cards appear one by one, scaling from 0.8 to 1 with a subtle 3° rotation that straightens out
- **Icon morphing**: Each service icon does a quick spin + color pulse when it enters the viewport
- **Hover**: 3D tilt effect (rotateX/rotateY based on mouse position) instead of the current flat scale

## Portfolio Section
Currently uses fade-up on project cards. Suggested upgrades:
- **Masonry reveal**: Cards slide in from alternating left/right sides with staggered timing, creating a "building blocks" feel
- **Image parallax on scroll**: The project images move at a slightly different rate than their card containers as you scroll
- **Hover**: Image zooms smoothly while a gradient overlay fades in with the arrow icon bouncing once

## Pricing Section
Currently uses fade-up on cards. Suggested upgrades:
- **Center-out reveal**: The middle "Best Value" card appears first and scales up, then the two side cards fan out from behind it
- **Price counter**: The price numbers count up from $0 to their final value with a spring bounce at the end
- **Feature list cascade**: Each checkmark item slides in from the left with a quick stagger (30ms apart), creating a waterfall effect
- **Hover**: Card lifts with a colored shadow matching its background tint

## Implementation Approach
All animations use Framer Motion (already installed). Key techniques:
- `useScrollAnimation` hook (already exists) for viewport detection
- `variants` with `custom` prop for staggered delays
- `useTransform` + `useScroll` for parallax effects
- `whileHover` with `perspective` for 3D tilt on service cards

No new dependencies needed. Each section keeps its existing structure — only the motion props and variants change.

