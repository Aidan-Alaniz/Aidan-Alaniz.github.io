---
title: "Wireless Weather Station"
excerpt: "Building a solar-powered wireless weather station that logs environmental data and hosts it on a local website — serving as Software Lead and Requirements Manager on a 9-person engineering team at ASCTE."
date: 2026-03-19
tags:
  - Hardware
  - Python
  - Wireless
  - In Progress
  - School
---

<div style="margin-bottom:1.5rem;"><a href="/projects/" class="btn-outline-accent"><span>← Back to Projects</span></a></div>

> **Status: In Progress** — The Raspberry Pi 5 has been set up and configured as the base station router. Software development and sensor integration are ongoing.

## Overview

This is a full-scale engineering project being developed as part of ASCTE's Engineering Lifecycle curriculum, with Auburn University as the customer. The goal is to design and build a solar-powered wireless weather station that collects environmental data via sensors, transmits it wirelessly to a base station, and hosts a secure local website where users can view live and historical readings.

The project is being run by a 9-person team with formal engineering roles. I am serving as **Software Lead** and **Requirements Manager** — responsible for the firmware running on the sensor node, the data pipeline to the server, and maintaining the project's requirements documentation throughout the lifecycle.

---

## My Role

**Software Lead** — Writing the firmware for the Raspberry Pi Pico W sensor node, implementing MQTT communication over Wi-Fi to transmit encrypted sensor data to the Pi 5 base station, and developing the local website for data display.

**Requirements Manager** — Maintaining the official requirements list, ensuring requirements are traceable through design decisions, and updating them as the project evolves through the engineering lifecycle phases.

---

## Team

| Role | Person |
|------|--------|
| Project Manager / Lead Systems Engineer | teammate |
| Master Scheduler / EVM Manager | teammate |
| Software Lead / Requirements Manager | **me** |
| Electronics Lead | teammate |
| Manufacturing Lead / Lead Designer | teammate |
| Cybersecurity Manager / Config Management | teammate |
| Decision Analysis Lead / Risk Manager | teammate |
| Quality Manager | teammate |
| Cost Estimator / Test & Evaluation Manager | teammate |

---

## Requirements

- The Pico W shall control a BME680 environmental sensor
- The Pico W shall send encrypted data from the sensor to the Pi 5 via MQTT over Wi-Fi
- The Pico W shall be powered by no more than two solar panels and one lithium-ion battery
- The weather station shall have an IP54 rating minimum (splash protection, limited dust ingress)
- The Pi 5 shall log sensor data in 30-second intervals to a database
- The Pi 5 shall locally host a website for viewing present and historical data
- The Pi 5 website shall be password protected
- The Pico W shall implement cyber protections against wireless interception and unauthorized access
- Construction is limited to approved materials (see Hardware section)

---

## Design Decision

Two designs were evaluated against four criteria before selecting a direction:

| Criteria | Design 1 (1 solar panel, wood frame, 30s interval) | Design 2 (2 solar panels, metal frame, 2min interval) |
|----------|-----------------------------------------------------|-------------------------------------------------------|
| Budget | 6/10 | 8/10 |
| Efficiency | 9/10 | 7/10 |
| Ease of Cyber Protection | 8/10 | 8/10 |
| Weatherproof | 7/10 | 9/10 |
| **Total** | **30/40** | **32/40** |

**Design 2 was selected.** Metal shelving is cheaper and more durable than wood long-term, and two solar panels provide more reliable power. The tradeoff is a slower 2-minute data interval vs 30 seconds, but the team judged durability and budget as higher priorities.

---

## Hardware

- **Raspberry Pi 5** — base station, acting as router and hosting the local website
- **Raspberry Pi Pico W** — sensor node, reads BME680 data and transmits wirelessly
- **BME680 Environmental Sensor** — measures temperature, humidity, barometric pressure, and air quality
- **2× Solar Panels** — primary power source for the sensor node
- **Li-Ion 3.7V battery + charging module** — power storage and regulation
- **Metal shelving** — weatherproof enclosure frame
- **3D printed components** — custom mounts and housing (filament provided)
- Diodes, breadboard, wiring, and general electrical supplies

---

## Software

The sensor node firmware (Pico W) will:
- Poll the BME680 sensor at regular intervals
- Encrypt the data payload
- Transmit to the Pi 5 via MQTT over Wi-Fi

The base station (Pi 5) will:
- Receive and log incoming data to a database at 30-second intervals
- Host a password-protected local website displaying live and historical readings

*Implementation in progress — this section will be updated as development continues.*

---

## Cybersecurity Considerations

Identified vulnerabilities and mitigations:

- **Insecure code** — following secure coding practices, input validation, no hardcoded credentials
- **Unencrypted data transmission** — all MQTT payloads encrypted before transmission
- **Eavesdropping** — encrypted wireless communication prevents interception of sensor data
- **DDoS on the website** — rate limiting and access controls on the locally hosted site

---

## Current Status

- Raspberry Pi 5 set up and configured as base station router — **done**
- BME680 sensor wired and reading data from Pico W — *pending*
- MQTT communication implemented between Pico W and Pi 5 — *pending*
- Data logging to database — *pending*
- Local website built and hosted — *pending*
- Encryption and cyber protections implemented — *pending*
- Physical enclosure assembled and weatherproofed — *pending*
- Solar power system wired and tested — *pending*

*This page will be updated as the project progresses.*
