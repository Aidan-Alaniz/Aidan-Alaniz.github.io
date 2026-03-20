---
title: "Fusion 360 Trebuchet"
excerpt: "Designed, built, and tested a full-scale functional trebuchet as part of a team engineering project at ASCTE, using Fusion 360 for CAD modeling and real-world fabrication."
date: 2025-12-01
tags:
  - CAD
  - Engineering
  - Fabrication
  - School
---

<a href="/projects/" style="display:inline-block;margin-bottom:1.5rem;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1rem;border-radius:4px;text-decoration:none;font-size:0.9rem;">← Back to Projects</a>

## Overview

As part of the ASCTE 401 Engineering Lifecycle curriculum, our team designed, built, and tested a full-scale trebuchet capable of launching a football using a 30lb counterweight. The project was structured to simulate a real-world engineering environment — three subgroups handled the arm, the frame, and communications/documentation respectively, and the arm and frame groups were not allowed to communicate directly. All coordination had to go through the communications group, mirroring how large engineering teams operate across departments.

---

## Project Requirements

The trebuchet had to meet the following requirements:

- Be moveable
- Include a locking mechanism to prevent premature firing
- Support a 30lb counterweight on one end of the arm
- Successfully launch a football from the other end
- Have the arm and frame connect as designed
- Support the weight of the arm without the frame collapsing
- Not suffer any structural failure during launch
- Be composed only of the allotted materials
- Be manually operable without external tools
- Have a smooth, non-interfering pivot connection point

---

## Design

The final design was CAD modeled in Fusion 360 before any materials were cut. We chose a wide, stable A-frame base to nearly eliminate the risk of tipping, while still leaving enough clearance for the arm and counterweight to swing through a full arc without hitting the frame.

The arm group designed the throwing arm independently, coordinating only through the communications group to ensure compatibility with the frame's pivot point dimensions.

---

## Build Process

**Arm:** After CAD modeling, we measured and cut the arm to length, then drilled holes for the chain attachment and the pivot axis. The initial tolerances on the axis hole were too tight and had to be sanded out to fit the metal rod. Once the frame was complete, the arm was mounted and a release mechanism and ball bag were added to the launch end.

**Frame:** The physical build differed slightly from the CAD model — the frame was built narrower than modeled to reduce material use and fit the metal rod properly. The triangle cross-pieces were cut at 45-degree angles to reduce the number of nails needed, and extra corner pieces were reused from offcuts to add internal stability. The main challenge was aligning the pivot holes on both sides of the frame precisely — adjustments had to be made in the shop, but the final fit worked cleanly.

---

## Testing & Results

The trebuchet was tested three times. All three launches successfully fired the football forward and the structure remained standing with no damage.

| Trial | Launched Football | Structure Intact |
|-------|-------------------|-----------------|
| 1 | Yes | Yes |
| 2 | Yes | Yes |
| 3 | Yes | Yes |

All requirements passed.

---

## Cybersecurity Considerations

Because this was an ASCTE engineering project, we were also required to think through cybersecurity implications. Our CAD files were stored in Fusion 360 — a cloud-based platform — which introduced digital vulnerabilities:

- **Confidentiality** — We used strong passwords and enabled two-factor authentication on all design software accounts to prevent unauthorized access to our designs
- **Integrity** — Physical copies of all measurements were kept locally so that any online tampering could be detected and corrected
- **Availability** — All design files were backed up locally to ensure access even if the cloud platform was unavailable

---

## What I Learned

Working on only one part of the system — the arm — while the frame was being built separately taught me how critical interface design is. The tolerances on the pivot point had to be right, and because we couldn't talk directly to the frame group, any mismatch meant going back through the communications group and losing time. It gave me a real appreciation for how much engineering work happens at the boundaries between subsystems, not just within them.
