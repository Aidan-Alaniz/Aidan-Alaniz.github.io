---
title: "Blackjack"
excerpt: "A fully playable terminal Blackjack game in Python with customizable rules, multi-round state management, and win/loss tracking across a full game loop."
date: 2024-06-01
tags:
  - Python
  - Personal
---

<div style="margin-bottom:1.5rem;"><a href="/projects/" class="btn-outline-accent"><span>← Back to Projects</span></a></div>

## Overview

A fully playable text-based Blackjack game written in Python. The game runs in the terminal and includes customizable options so the player can adjust rules to their preference before starting.

## Features

- Full Blackjack gameplay: hit, stand, and bust detection
- Customization options at the start of each game
- Win/loss tracking across rounds
- Clean terminal interface with clear prompts

## Tools & Skills Used

- **Python** — game logic, user input handling, control flow

## What I Learned

This was a good exercise in structuring a program around a set of rules and edge cases. Managing game state across turns and handling all the possible outcomes cleanly taught me a lot about how to think through logic before writing it. One of the more interesting challenges was handling rounds — managing data structures like the deck, hands, and scores that need to update frequently and stay consistent across a full game loop without getting out of sync.

## Source

[View on GitHub →](https://github.com/Aidan-Alaniz/blackjack){:target="_blank"}
