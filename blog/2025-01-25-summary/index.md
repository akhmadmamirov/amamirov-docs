---
slug: summary
title: Summary
authors: [amamirov]
tags: [research, gpu, hpc]
sidebar_position: 3
---

Hi, I am Akhmad. In this post, I share about the summary of my project.

**Please note this is currently a draft.**

I am set to build a scheduler for different types of AI workloads. I will be classifying workloads as Interactive, Unattended and Inference workloads (priority). It will be called optimus-scheduler (OS).

Here is what I plan to implement:

- OS will extend K8s & Kubeflow capabilities with fair-scheduling algorithms and quota based system. Workloads can specify a guaranteed fraction of GPU and specify a limit for potential growth.
  - Dynamic scheduling
  - Fractioning GPU
  - Abstraction layer for clusters, scheduler handles the placement
  - Node-level scheduling: bin packing and spreading out the workload
- OS will implement preemptive mechanism
  - Wokloads can assign assign overquota to utilize idle resources.
  - Checkpoints will be introduced to save work in progress
- OS will implement node-pooling, where uses can specify which node pools to use when submitting workloads.
  - Node pools will group resources to a logical sets by unique name
  - Admins will allocate quotas for each node-pool for each team/project
- Security of containers
  - Namespaces, K8s RBAC.
- Benchmarking
  - Using synthetic workloads to benchmark against Run AI and Kubeflow

## Stretch goals:

- General

  - Monitoring tools for workload and resource utilization (Prometheus)
  - Adjust quotas dynamically based on the history of workloads
  - Autoscaling policies for workloads
  - Multi-cluster federation
  - Workload placement schedule on clusters based on resources, latency and locality
  - Inter-cluster communication module for transferring workloads
  - Module that detects available hardware types (GPU, TPU, FPGA)
  - Allow workloads to specify hardware
  - Validate node and workload compatibility during scheduling
  - Unique scheduling plugin based on the architecture with hardware optimizations
  - Event-driven architecture: new workload, resource utilization spike

- Distributed training
  - Data, Model and pipeline parallelization
  - Deployment options for cloud
