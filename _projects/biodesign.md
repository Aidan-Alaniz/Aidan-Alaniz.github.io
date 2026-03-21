---
title: "BioDesign — Plastic-Degrading Cell"
excerpt: "Designed, documented, and presented a custom engineered microorganism to solve ocean plastic pollution, as part of ASCTE's 301/401 BioDesign assignment."
date: 2025-03-01
tags:
  - Biology
  - Engineering
  - School
---

<a href="/projects/" style="display:inline-block;margin-bottom:1.5rem;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1rem;border-radius:4px;text-decoration:none;font-size:0.9rem;">← Back to Projects</a>

## Overview

The ASCTE 301/401 BioDesign assignment challenged students to engineer a custom cell to solve a real-world problem. Working with a partner, we selected ocean plastic pollution as our problem — specifically the accumulation of plastic macromolecules in coastal waters. We brainstormed multiple solution concepts, scored them against engineering criteria, selected the best design, identified the biological parts needed to build it, and presented our work to the class.

---

## The Problem

Plastic macromolecules accumulate in coastal ocean environments where they break down extremely slowly and cause significant ecological damage. Natural plastic-degrading processes exist but are far too slow and narrow in scope to address the problem at scale.

---

## Brainstormed Solutions

We developed three candidate designs before selecting one:

**Idea 1 — Modified Microalgae**
Modify the cells of a microalgae to produce multiple plastic-degrading enzymes when plastic is detected, and trigger faster cell replication when enzyme concentration is high.

**Idea 2 — Surrounding Cell**
Create a cell that bonds with nearby cells of the same type when in contact with plastic, encapsulating it. Once fully surrounded, the cluster releases enzymes to break down the plastic while slowing replication.

**Idea 3 — Mineralizing Fungus**
Create a fungus cell that mineralizes plastics into their base chemicals through a chain of triggered reactions, with increasing replication to more effectively combat the plastic.

**Scoring Matrix**

| Idea | No plastic residue left | Quickly begins removing plastic | Most effective removal | Total |
|------|------------------------|---------------------------------|-----------------------|-------|
| Microalgae | 10 | 10 | 7 | **27/30** |
| Surrounding Cell | 10 | 5 | 10 | 25/30 |
| Mineralizing Fungus | 7 | 10 | 7 | 24/30 |

**Idea 1 — Modified Microalgae — scored highest and was selected.**

---

## Final Design

Our chosen chassis was a **microalgae cell** capable of surviving in saltwater ocean conditions. The designed behavior:

1. The cell floats freely in coastal water
2. Upon detecting plastic (specifically PET), it begins multiplying rapidly
3. Cells bond together to encapsulate the plastic
4. Enzyme production ramps up to break down the plastic into harmless byproducts
5. Replication slows once plastic concentrations drop

---

## Biological Parts

We researched the iGEM Parts Registry to identify existing biological components that could be combined to build this system:

**Promoters**
- `BBa_J23100` — Constitutive promoter, continuously drives gene expression
- `BBa_J04450` — Inducible promoter (LacI regulated), activated for controlled expression

**Ribosome Binding Site**
- `BBa_B0034` — Strong RBS for effective translation initiation

**Plastic Detection & Degradation**
- `BBa_K2010000` — PETase enzyme, degrades PET plastic into simpler compounds
- `BBa_K3039003` — MHETase enzyme, breaks down MHET (a PET degradation intermediate) into ethylene glycol and terephthalic acid

**Biofilm & Binding**
- `BBa_K861090` — Biofilm-related protein, promotes cell clumping around plastic
- `BBa_K3185004` — Plastic-binding adhesin protein, engineered to bind specifically to plastic surfaces

**Custom Components (not yet in registry)**
- Plastic-sensing transcription factor — detects terephthalic acid (a PET degradation product) to activate the inducible promoter
- Growth-promoting ORFs — to accelerate replication when plastic is detected

---

## Tools & Skills Used

- **Biology & Chemistry** — enzyme function, cellular mechanics, PET polymer structure
- **Systems Engineering** — designing interacting biological components as a system
- **Research** — iGEM Parts Registry, scientific literature on plastic-degrading biology
- **Decision Making** — structured scoring matrix to evaluate and select between design concepts
- **Presentation** — communicating a technical design to a general audience

---

## What I Learned

This project pushed me to think like an engineer in a domain that isn't traditionally engineering. Every design decision had cascading effects — changing the enzyme mechanism affected survivability, degradation rate, and ecological safety simultaneously. Using a real parts registry (iGEM) to check whether your design components actually exist was a grounding exercise — most of what we needed was there, but the plastic-sensing transcription factor required custom engineering, which highlighted how the hardest part of any system is often the sensor, not the actuator. I also got a lot of value from the scoring matrix step — forcing a structured comparison between three ideas before committing to one is something I now apply to other projects.
