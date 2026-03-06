---
title: "Discovering 'Mole': The Minimal Cleaner My Mac Needed"
description: "A CLI tool that combines CleanMyMac, AppCleaner, and DaisyDisk into a single lightweight binary."
pubDatetime: 2025-12-28T10:00:00Z
tags:
  - macos
  - tools
  - cli
draft: false
---

I recently stumbled upon a CLI tool called [Mole](https://github.com/tw93/Mole) while browsing GitHub, and it's quickly become one of my favorite utilities. It basically combines the functionality of CleanMyMac, AppCleaner, and DaisyDisk into a single, lightweight binary.

## Why I Use It

I've always preferred minimal interfaces over bloated GUIs. Mole is purely command-line based, which means it's fast and doesn't sit in your menu bar eating up RAM. I ran it recently and it effectively cleaned up my system cache, logs, and leftover files from old projects, saving me a significant amount of disk space immediately.

The "Smart App Uninstaller" is particularly good — it doesn't just delete the app but hunts down all those hidden preference files and folders that usually get left behind.

## Installation & Usage

Since it's a CLI tool, installation is just a one-liner in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash
```

Once installed, you can just type `mo` to see the interactive menu, or run specific commands directly. Here are the ones I use most:

- `mo clean` — Scans and removes junk files (cache, logs, etc).
- `mo uninstall` — Interactively select and fully remove apps.
- `mo analyze` — Visualizes disk usage to see what's taking up space.

If you're a developer or just someone who likes keeping their Mac tidy without the bells and whistles of commercial software, I highly recommend checking it out.
