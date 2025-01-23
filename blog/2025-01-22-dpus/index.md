---
slug: dpus
title: DPUs
authors: [amamirov]
tags: [research, gpu, hpc]
sidebar_position: 3
---

Hi, I am Akhmad. In this post, I share about Domain Specific Processing Units.

**Please note this is currently a draft.**

## Intro

Domain-specific processing units, also known as domain-specific accelerators (DSAs), are specialized hardware components designed for specific workloads or applications. Unlike general-purpose processors (CPUs), these units are optimized for particular domains, offering superior performance and energy efficiency for their intended use cases.

**Some examples of DSAs include:**

- Tensor Processing Units (TPUs): Developed by Google to accelerate AI applications.
- Language Processing Units (LPUs): Developed by Groq for AI inference and language tasks.
- Microsoft's Project Catapult: A Field-Programmable Gate Array (FPGA) designed to enhance data center performance.
- Pixel Visual Core: A custom-designed image processing unit created by Google.

Energy efficiency is a critical consideration in the design and implementation of DSAs. These specialized architectures are designed to deliver exceptional energy efficiency by focusing on specific subsets of tasks rather than entire programs. As a result, they have demonstrated significant improvements in both performance and power consumption.

## Cache

While caches are essential for improving performance in general-purpose architectures, they can present an overhead in DSAs, particularly in terms of energy consumption. Caches consume a significant portion of the total chip power and occupy a considerable amount of chip area. In DSAs, this area could be better utilized by incorporating more specialized processing units, contributing to more efficient task performance.

**Strategies DSAs could adopt for improved efficiency include:**

- Removing caches and managing memory directly via software (e.g., scratchpad memory): This approach minimizes the energy overhead associated with traditional cache hierarchies.
- Investing in additional arithmetic units or larger memory: Rather than relying on Moore's Law, focus on optimization techniques like prefetching, multithreading, and multiprocessing.
- Adopting domain-specific parallelism: For example, using VLIW (Very Long Instruction Word) for instruction-level parallelism tailored to the domain.
- Reducing data size and type: Simplify data to the minimal requirements for the domain, reducing both memory usage and energy consumption.
- Using domain-specific programming languages: Tools like Halide can be employed to port code efficiently to DSAs.

## SIMD & MIMD

Single Instruction Multiple Data (SIMD) and Multiple Instruction Multiple Data (MIMD) are two fundamental parallel computing architectures.

In SIMD, a single instruction is executed simultaneously across multiple data elements.

- GPUs leverage SIMD architecture, making them well-suited for deep learning tasks where the same operation is applied to numerous data items.
- This architecture is also used in TPUs and LPUs for efficient parallel processing in specific domains.

In contrast, multi-core CPUs often use MIMD architecture to manage diverse computational tasks.

- MIMD systems can execute multiple instruction streams on different data sets simultaneously, allowing them to handle a variety of workloads.
- These systems often orchestrate tasks for GPUs and other specialized processors, ensuring efficient resource utilization.

**Resouces used:**

[Computer Architecture. A quantitive approach. John L. Hennessy](https://www.amazon.com/Computer-Architecture-Quantitative-Approach-Kaufmann/dp/0128119055)

[Domain-Specific Architectures: Research Problems and Promising Approaches](https://dl.acm.org/doi/10.1145/3563946)
