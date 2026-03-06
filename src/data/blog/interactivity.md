---
title: "Digital is physical."
description: "How the best digital interactions mirror real-world affordances, and why cursor behavior and hover states matter for interaction design."
pubDatetime: 2026-03-06T00:00:00Z
tags: [design, ux, interactivity]
draft: false
---

The best digital interactions more often than not mimic real-world interactions, whether or not we realize. [Rauno has a great article](https://rauno.me/craft/interaction-design) that dives into this idea in more detail, mostly with touch-devices. However, this idea is not restricted to touch-only interactions. Computers have their own handles too — being the mouse and keyboard. The way the user utilizes the mouse and keyboard directly follows what they expect the computer interface to do.

A lot of this can be boiled down to the concept of **affordances** — a possible action from the relation between a user and an object. The simplest example of this is a door handle: the handle _affords_ you the ability to open the door with your hand. A touch-screen (in most cases) _affords_ you the ability to scroll the content with your finger.

But how does this apply to interaction design on the web, when we only have a cursor and keyboard to work with?

## State of interactivity

We can assume that any element presented to the user is able to be interacted with, or not. If it can be interacted with, we must create an affordance that conveys that to the user.

We can create affordances by utilizing a very popular handle: the cursor. Using the cursor is akin to using your eye(s) — you use it to look around and gather information about the current environment. The cursor is used to infer what can and cannot be interacted with, depending on how we treat it.

Another important thing we must remember: design should be intuitive. Logical reasoning is human nature, and a user interface should aim to create that pattern everywhere.

Which button would you click out of pure intuition — one where the cursor changes to a pointer on hover, or one where it stays as the default arrow?

If you answered the pointer one: you saw that the cursor changed when we hovered over it, versus the other one that had no change.

> We achieve this by using `cursor: pointer` to transform the cursor into the handy little icon that everybody knows as the "click" icon. Helpful!

We've created an affordance by having the cursor react to the environment, but we can make this affordance even clearer by allowing the environment to react to the cursor as well.

You guessed it: the button with a hover background change is the one you're most likely to click. We've just made the element interact with the cursor without the user even having to click. This is good, because that signals to the user that further interaction is possible, and even encouraged.

We can use these same concepts to convey a _lack_ of affordances to the user, letting them know they _can't_ interact with a certain element — using `cursor: not-allowed` and muted text color signals a disabled state clearly.

## Implied interactivity

Ok, so now we know how we can create affordances between the cursor and the content, letting the user know that they can (or cannot) interact with elements. **But that's not very helpful.** These simple affordances don't actually provide any context about _how_ the element can be interacted with, nor does it imply what the element actually does.

Consider a knob. You aren't able to use your whole hand to turn it like you would in the real world. You might try to grab the edge and drag your cursor in a circle to turn it, but this is cumbersome and requires more precision than is necessary.

What does a knob really do? It allows you to select a value from a range minimum and maximum. Sliders do this exact same thing — and a slider is far more intuitive on a screen. The physical metaphor gets _translated_ to a digital equivalent that feels natural.

This is the core idea: don't copy the physical world literally, but carry over the _intent_ and _feel_ of how things work.
