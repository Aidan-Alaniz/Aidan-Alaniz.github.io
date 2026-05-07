---
title: "Wireless Weather Station"
excerpt: "Built a solar-powered wireless weather station that collects environmental data and hosts it on a local website — serving as Software Lead and Requirements Manager on a 9-person engineering team at ASCTE."
date: 2026-03-19
tags:
  - Hardware
  - Python
  - Wireless
  - School
---

<div style="margin-bottom:1.5rem;"><a href="/projects/" class="btn-outline-accent"><span>← Back to Projects</span></a></div>

## Overview

A full-scale engineering project developed as part of ASCTE's Engineering Lifecycle curriculum, with Auburn University as the customer. The goal was to design and build a solar-powered wireless weather station that collects environmental data via sensors, transmits it wirelessly to a base station, and hosts a secure local website where users can view live and historical readings.

The project was run by a 9-person team with formal engineering roles. I served as **Software Lead** and **Requirements Manager** — responsible for the firmware running on the sensor node, the data pipeline to the server, and maintaining the project's requirements documentation throughout the lifecycle.

---

## My Role

**Software Lead** — Wrote the firmware for the Raspberry Pi Pico W sensor node, implemented MQTT communication over Wi-Fi to transmit AES-128-CBC encrypted sensor data to the Pi 5 base station, and developed the local website for data display.

**Requirements Manager** — Maintained the official requirements list, ensured requirements were traceable through design decisions, and updated them as the project evolved through the engineering lifecycle phases.

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

| Criteria | Design 1 (wood frame, 30s interval) | Design 2 (metal shelving, 2min interval) |
|----------|--------------------------------------|------------------------------------------|
| Budget | 6/10 | 8/10 |
| Efficiency | 9/10 | 7/10 |
| Ease of Cyber Protection | 8/10 | 8/10 |
| Weatherproof | 9/10 | 7/10 |
| **Total** | **32/40** | **30/40** |

**Design 1 was selected.** Wood is easier to construct with available shop tools and has a longer lifespan before degradation than bare metal. The tradeoff is a smaller enclosure budget, but the faster 30-second data interval and simpler fabrication outweighed the durability advantage of metal shelving.

---

## Hardware

- **Raspberry Pi 5** — base station, acting as router and hosting the local website
- **Raspberry Pi Pico W** — sensor node, reads BME680 data and transmits wirelessly
- **BME680 Environmental Sensor** — measures temperature, humidity, barometric pressure, and air quality
- **2× Solar Panels** — primary power source for the sensor node
- **Li-Ion 3.7V battery + charging module** — power storage and regulation
- **Wood frame** — weatherproof enclosure
- **3D printed components** — custom mounts and housing

---

## Software

The sensor node firmware (Pico W):
- Polls the BME680 sensor every 30 seconds
- Encrypts the data payload using AES-128-CBC with a random IV per message
- Transmits to the Pi 5 via MQTT over Wi-Fi, reconnecting fresh each cycle for reliability on solar power

The base station (Pi 5):
- Receives and logs incoming data to a database
- Hosts a password-protected local website displaying live and historical readings

LED status codes indicate system state: slow green blink for Wi-Fi/MQTT connection, single green flash for successful publish, red blinks for recoverable errors, and rapid red blink for a fatal error before hardware reset.

---

## Cybersecurity

Identified vulnerabilities and mitigations:

- **Insecure code** — Bandit static analysis run on all Pico W code; secure coding practices enforced, no hardcoded credentials
- **Unencrypted data transmission** — all MQTT payloads encrypted with AES-128-CBC before transmission
- **Eavesdropping** — encrypted wireless communication prevents interception of sensor data
- **DDoS on the website** — rate limiting and access controls on the locally hosted site
- **Abnormal activity** — Pi 5 logs all anomalous communication events
- **Wi-Fi timeout** — implemented to prevent the radio from hanging between cycles

---

## Outcome

The station was completed and tested successfully. It collects temperature, humidity, pressure, and air quality data every 30 seconds, displays it on a live password-protected web dashboard, and passed water resistance testing with no ingress. The project finished approximately 90 minutes behind schedule and $62 under budget.
