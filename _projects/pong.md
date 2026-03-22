---
title: "Pong"
excerpt: "A Pong game built in Python on a Raspberry Pi 3 using a Sense Hat LED matrix and joystick."
date: 2022-09-01
tags:
  - Python
  - Raspberry Pi
  - Hardware
  - Personal
---

<div style="margin-bottom:1.5rem;"><a href="/projects/" class="btn-outline-accent"><span>← Back to Projects</span></a></div>

## Overview

A fully playable Pong game running on a Raspberry Pi 3 with a Sense Hat attached. The game renders on the Sense Hat's 8x8 LED matrix and uses the built-in joystick for paddle control — no screen, no keyboard, just the hardware itself.

## Features

- Real-time gameplay on the Sense Hat's 8x8 LED matrix
- Joystick-controlled paddle input
- Ball physics and collision detection within the LED grid
- Score tracking

## Tools & Skills Used

- **Python** — game logic and Sense Hat API integration
- **Raspberry Pi 3** — hardware setup, configuration, and deployment
- **Sense Hat** — LED matrix as a display, joystick as a controller
- **Embedded thinking** — designing a game around very tight hardware constraints

## What I Learned

Getting the Raspberry Pi 3 and Sense Hat set up and talking to each other was the first real challenge — figuring out the GPIO, the Sense Hat library, and how to push pixels to the LED matrix took some serious troubleshooting. Once that was working, building the game inside an 8x8 grid forced me to think differently about representing movement and collision at a tiny resolution. It was my first experience taking a piece of code and running it on physical hardware as its own standalone device, which felt like a big step up from just running scripts on a computer.
