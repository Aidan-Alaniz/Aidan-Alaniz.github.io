---
title: "Wireless Weather Station"
excerpt: "An in-progress project to design a weather station that collects environmental data and transmits it wirelessly to a receiver."
date: 2026-03-19
tags:
  - Hardware
  - Python
  - Wireless
  - In Progress
  - School
---

<a href="/projects/" style="display:inline-block;margin-bottom:1.5rem;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1rem;border-radius:4px;text-decoration:none;font-size:0.9rem;">← Back to Projects</a>

> **Status: In Progress** — This project is actively being developed. This page will be updated as work continues.

## Overview

The goal of this project is to build a self-contained weather station that collects environmental data and transmits it wirelessly to a base receiver. The station will measure temperature, humidity, barometric pressure, and other relevant metrics, sending that data to a central hub that will host the data on a local website. The hardware has been provided to our team, and the projects main focus will be on the team management aspect of the engineering design, as well as the cyber protections aspect.

## Goals

- Collect reliable environmental data using physical sensors
- Implement wireless transmission between the station and receiver
- Log and display data on a secure website
- Package the finished station in a weatherproof enclosure
- Ensure cyber protections are implemented throughout

## Hardware

- Raspberry Pi 5 acting as router and hosting the website
- Raspberry Pi Pico W as the station, receiving weather data and transmitting information securely to the server

## Software

*To be written — will cover firmware for the sensor node and any data display or logging code on the receiver side.*

## Challenges

*To be documented as the project progresses.*

## Next Steps

- Set up sensor communication and read initial data
- Implement wireless transmission
- Test range and reliability
- Build weatherproof enclosure
- Ensure entire system is hardened against cyber attacks
