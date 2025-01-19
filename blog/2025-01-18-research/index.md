---
slug: my-research
title: My research
authors: [amamirov]
tags: [research, gpu, hpc]
sidebar_position: 3
---

Hi, I am Akhmad. In this post, I share about my research project. Rest assured, my content is not AI-generated, though it has been revised for grammar and vocabulary using ChatGPT.

**Please note this is currently a draft.**

## Structure

My research project will be in two parts. In the first part, I will review academic papers on GPUs and write my thesis. In the second part, I will build an advanced K8s based scheduler that will optimize GPU utilization for AI workloads.

## Introduction

When I was a kid, I couldn’t play some of the latest video games because our PC at home didn’t have a graphics card. That was my first interaction with GPUs. Today, GPUs, along with other types of accelerated computing hardware, power modern infrastructures for training and running AI and machine learning (ML) tasks. Despite their widespread adoption in the data science community, GPUs are also being utilized to advance various fields such as genomics, medical imaging, cryptocurrency mining, and high-performance computing, to name a few. In this research, I will focus on optimizing GPU usage specifically for AI workloads.

In February, 2007, NVIDIA introduced Computer Unified Device Architecture (CUDA) SDK, making GPU computing more accessible beyond video games.

Given the complex matrix computations involved in modern machine learning operations, GPUs have emerged as the de facto standard for efficiently accelerating these processes.

The latest advancements in AI have significantly surged the demand for this resource. Leading chip manufacturers, like NVIDIA, have begun receiving billions of dollars in contracts from major organizations to build the next generation of powerhouses. As an observer, I can see the shift unfolding — the race to own this new resource. But how much of this resource is actually being utilized in these organizations? Does more always translate to better performance? And how do we define performance in heterogeneous systems, especially when they run in distributed settings? How can we optimally utilize GPUs to minimize idle time and reduce costs?

## Underutilization

According to [Run:AI](https://www.run.ai/guides/multi-gpu/simplify-gpu-sharing-part-1) most organizations only see ~25-35% GPU utilization.

This research will examine GPU underutilization from multiple perspectives:

- In machine learning workloads, focusing on GPU compute, memory, and memory bandwidth usage, as well as workload-aware scheduling.

- At the organizational level, addressing issues such as GPU overprovisioning, idle times, node and cluster fragmentation.

## Kubernetes

Kubernetes (K8s) has become a widely adopted tool in the industry for scheduling and orchestrating AI workloads. Its default scheduler, kube-scheduler, monitors newly created pods and assigns them to appropriate worker nodes. To optimize this process, kube-scheduler filters out nodes that do not meet the pod’s requirements and then scores the remaining nodes based on criteria such as resource availability and load distribution. Once the most suitable node is selected, it updates the master node's API server with the scheduling decision.

Although Kubernetes (K8s) is widely used for AI job scheduling, it was originally designed as a hyperscale system optimized for scaling out. However, efficiently training AI workloads requires a different strategy—scaling up. Scaling out involves orchestrating multiple servers in a distributed manner to improve fault tolerance across the system, whereas scaling up focuses on maximizing the utilization of a single server by leveraging additional power and compute resources. For AI workloads, scaling up can significantly reduce costs and better harness the full potential of GPU computing power.

## GPU Scheduling

Traditionally, [GPU scheduling](https://www.run.ai/guides/multi-gpu/gpu-scheduling) was managed by dedicated schedulers like Slurm or IBM LSF. However, the complexity of these tools has driven many organizations to adopt platforms like Kubernetes (K8s) and Nomad. By default, these platforms do not natively support GPU scheduling, but this functionality can be enabled using device plugins provided by NVIDIA, AMD, and other vendors.

Running GPUs in an HPC environment comes with several challenges, including:

- **Heterogeneous Hardware**: Compute environments often consist of multiple servers with a mix of GPU models and generations, leading to compatibility and optimization issues.

- **Resource Contention**: Multiple departments and projects frequently compete for limited GPU resources, making it difficult to allocate them efficiently.

- **Diverse Application Requirements**: Applications may have specific needs regarding the type of servers they should run on, such as particular GPU models or configurations, adding complexity to scheduling and resource management.

This makes container orchestration platforms like Kubernetes (K8s) a strong candidate for scheduling AI workloads. However, K8s has its limitations when it comes to GPU management:

- **Lack of GPU Sharing**: GPUs cannot be shared across containers or pods. Once allocated, the GPU is locked to a specific workload, regardless of whether it is fully utilized or not.

- **No Partial GPU Requests**: Containers cannot request a fraction of a GPU, limiting efficient utilization for workloads with smaller computational demands.

- **Rigid Resource Limits**: K8s lacks flexibility in defining resource limits. Any GPU request must be exactly equal to the limit, leaving no room for dynamic scaling or flexibility.

Given these bottlenecks, there is a growing demand for a workload-aware scheduler that can efficiently allocate resources within the existing infrastructure. Such a scheduler should consider the state of the GPU, including factors like power consumption, overheating, and device health, to optimize workload placement. It should also dynamically swap jobs to accommodate more workloads or redistribute existing jobs to reduce execution time while adhering to pre-set quotas.
