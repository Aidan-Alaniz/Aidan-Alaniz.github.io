---
title: "MBSE Archery Practice Model"
excerpt: "A Model-Based Systems Engineering final project modeling the structure and behavior of an archery practice session using SysML — including block definition, use case, state machine, internal block, and sequence diagrams."
date: 2026-05-01
tags:
  - MBSE
  - SysML
  - School
---

<div style="margin-bottom:1.5rem;"><a href="/projects/" class="btn-outline-accent"><span>← Back to Projects</span></a></div>

## Overview

A final project for ASCTE's Model-Based Systems Engineering (MBSE) course. The goal was to build a complete SysML system model of an archery practice session, covering both structural and behavioral perspectives. The subject — the archery team — was chosen because of my direct familiarity with how the system actually operates.

---

## Model Structure

The model is organized under a top-level Archery Team package containing a Diagrams package, which groups all diagram types: Block Definition Diagrams, Internal Block Diagrams, Use Case Diagrams, Sequence Diagrams, and State Machine Diagrams.

### Block Definition Diagram

Defines the structural components of a practice session. People (coach, archers, range safety officer) and equipment (bow, arrows, quiver, target) are modeled as blocks with composition relationships to the practice session. Key values include archer draw weight (20 lb), bow draw length (28 in), arrow quantity (5 per end), and target distance (10 m).

### Use Case Diagrams

Two use case diagrams capture the system in both contexts: **Archery Practice** and **Archery Competition**. The practice diagram covers the full session lifecycle — range setup, equipment selection, shooting ends, arrow retrieval, and coach feedback. Extension points on use cases like Correct Stance and Fix Release Technique represent corrective actions triggered only when the coach identifies a specific issue.

### State Machine Diagram

Models the lifecycle of a single arrow throughout a practice session. States include Storage, In Quiver, Nocked, Drawn, In Flight, Hit Target, Missed, Retrieved, and Damaged. Guard conditions after the Retrieved state branch based on whether the arrow is undamaged (returns to In Quiver for reuse) or damaged (transitions to the Damaged final state).

### Internal Block Diagram

Models the internal structure of a practice session, showing how component instances interact. Flow ports make explicit how physical objects (arrows) and information (feedback, instructions) move between the archer, coach, bow, arrow set, and target instances.

### Sequence Diagram

Models a single end of a practice round as an ordered interaction between the coach, archer, bow, arrows, and target — from the coach calling archers to the line through arrow retrieval and post-end feedback.

---

## Tools

Built in Cameo Systems Modeler using SysML 1.x.
