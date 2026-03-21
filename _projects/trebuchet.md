---
title: "Fusion 360 Trebuchet"
excerpt: "Served as Communications Lead on a structured team engineering project at ASCTE, coordinating arm and frame design groups to build a full-scale trebuchet — won four class awards including longest launch and highest average range."
date: 2025-12-01
tags:
  - CAD
  - Engineering
  - Fabrication
  - School
---

<a href="/projects/" style="display:inline-block;margin-bottom:1.5rem;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1rem;border-radius:4px;text-decoration:none;font-size:0.9rem;">← Back to Projects</a>

## Overview

As part of the ASCTE 401 Engineering Lifecycle curriculum, our class designed, built, and tested a full-scale trebuchet capable of launching a football using a 30lb counterweight. The project ran from December 2025 through January 2026 and was deliberately structured to simulate a real-world engineering environment: three independent subgroups — Arm, Frame, and Communications — worked in parallel, with the Arm and Frame groups forbidden from communicating directly with each other.

**I was part of the Communications group**, responsible for facilitating all information exchange between the Arm and Frame teams, merging their separate requirements and statements of work into unified project documents, and ensuring the two groups' designs would actually be compatible before anything was built.

---

## My Role — Communications

The communications group's job was to make the project work as a whole, not just as two separate pieces. In practice this meant:

- Collecting requirements from both the Arm and Frame groups and merging them into a single unified requirements list
- Writing a merged Statement of Work that captured the goals, schedule, and responsibilities of the full project
- Coordinating the material allocation between groups so nothing was double-counted and both teams had what they needed
- Making sure the pivot point specs from the Frame group matched what the Arm group was designing around — the interface between the two was the most critical dependency
- Handling all project documentation and reporting throughout the build

This mirrors how engineering teams actually work in large organizations — the people building two subsystems often can't talk directly, and someone has to manage the interface. Getting that interface wrong meant the arm wouldn't fit the frame.

---

## Project Requirements

Requirements were developed independently by both groups, then merged by communications:

- The trebuchet shall be moveable
- The arm shall lock in a fixed position, preventing premature firing
- The arm shall support a 30lb counterweight at one end
- The arm shall successfully launch a football from the other end
- The arm and frame shall connect as designed
- The frame shall support the arm without collapsing
- Neither the arm nor frame shall suffer structural failure
- Only the allotted materials shall be used — no electronics
- The trebuchet shall be manually operable without external tools
- The pivot connection point shall operate smoothly without interfering with the system

---

## Design & Simulation

Before any wood was cut, we used the [Virtual Trebuchet simulator](https://virtualtrebuchet.com/?lengthArmShort=1.75&lengthArmLong=4.75&lengthSling=3.58&lengthWeight=1.75&heightOfPivot=4.5&massArm=8.2&inertiaArm=28.87&pivotToArmCG=1.5&massWeight=30&inertiaWeight=1.7&massProjectile=0.875&projectileDiameter=0.249&windSpeed=0&releaseAngle=45&units=englishf&projectile=custom&uniformArm=true&distance=24.88663994275498){:target="_blank"} to model the design and predict performance. The simulation predicted a maximum range of **≈82ft** and a maximum height of **≈31ft**.

The arm was specified at **6.75ft** with the pivot point **4ft off the ground**. Both groups CAD-modeled their components in Fusion 360, with communications ensuring the models were compatible at the interface before either group began fabrication.

### Stress Analysis

The communications group also ran a stress analysis on the trebuchet's STL file using finite element analysis code. We researched material properties for pine wood (Young's modulus: 7–16 GPa, Poisson's ratio: 0.12–0.49) and used values of **ym = 10 GPa** and **pr = 0.33** as representative estimates. The 30lb counterweight was converted to Newtons (133.447N) and applied to face F6 of the model to simulate the load.

---

## Materials

| Group | Materials |
|-------|-----------|
| **Arm** | 1× 2"×4"×8' lumber, 30lb counterweight, canvas, rope (20'), chain, eye hooks (×3), wood screws, nails |
| **Frame** | 5× 2"×4"×8' lumber, steel pipe (½" dia., 18"), pipe caps (×2), pipe hangers (×4), U-bolts (×4), hex nuts (×8), eye hooks (×2), gate hook and eye, wood screws, nails |

---

## Build Process

**Arm:** After CAD modeling and verifying compatibility with the frame through the communications group, the arm team cut the lumber to length, drilled holes for the chain attachment and pivot axis, and sanded out the pivot hole tolerances which were initially too tight for the steel rod. Once the frame was complete, the arm was mounted and a release mechanism and canvas ball bag were added to the launch end.

**Frame:** The physical build added features not present in the CAD model. The triangle cross-pieces were cut at 45-degree angles — both to reduce the number of nails needed and to keep the wood as thick as possible at the joint, preventing splitting under load. Leftover corner triangles were reused as internal bracing for additional stability. The main challenge was aligning the pivot holes on both sides of the frame to accept the steel rod — adjustments had to be made in the shop but the final fit worked cleanly.

---

## Testing & Results

The trebuchet was launched five times. Our average range of **80.8ft** was very close to the simulated prediction of **81.6ft**. Launch 5 used additional human weight on the arm and reached **143ft**.

| Launch | Predicted | Actual |
|--------|-----------|--------|
| 1 | 81.6 ft | 55.5 ft |
| 2 | 81.6 ft | 62 ft |
| 3 | 81.6 ft | 56 ft |
| 4 | 81.6 ft | 87.5 ft |
| 5 | 81.6 ft | 143 ft *(human weight on arm)* |
| **Average** | **81.6 ft** | **80.8 ft** |

---

## Awards

Our trebuchet won four class awards out of all competing teams:

- 🏆 **Longest launch with human weight** — 143ft
- 🏆 **Longest launch with counterweight** — 87.5ft
- 🏆 **Highest average range** — 80.8ft
- 🏆 **Used the least amount of wood**

---

## Cybersecurity Considerations

As an ASCTE engineering project, we were also required to analyze cybersecurity implications. Our CAD files were stored in Fusion 360 — a cloud platform — which introduced digital vulnerabilities:

- **Confidentiality** — Strong passwords and two-factor authentication on all design software accounts
- **Integrity** — Physical copies of all measurements kept locally so online tampering could be detected
- **Availability** — All design files backed up locally in case the cloud version was lost or destroyed

---

## What I Learned

Working in the communications group gave me a different perspective on engineering than most of my teammates had. While the Arm and Frame groups were heads-down building their subsystems, I was thinking about the whole system — how the two pieces would fit together, what information each group needed from the other, and what would happen if they made incompatible assumptions. The pivot point was the clearest example: if the arm group drilled their hole at a different diameter than what the frame group sized their rod mount for, nothing would work. That dependency had to be managed explicitly, and that was our job.

It also taught me how much of a large engineering project is documentation and communication rather than fabrication. Writing a merged requirements list and a merged SoW that both groups agreed on was harder than it sounds — each group had slightly different language and priorities, and reconciling them into something coherent took real work.
