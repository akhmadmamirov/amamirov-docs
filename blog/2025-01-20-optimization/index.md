---
slug: parallelization
title: Parallelization
authors: [amamirov]
tags: [research, gpu, hpc]
sidebar_position: 3
---

Hi, I am Akhmad. In this post, I share about parallelization and memory optimization in distributed training. Rest assured, my content is not AI-generated, though it has been revised for grammar and vocabulary using ChatGPT.

**Please note this is currently a draft.**

Parallelization is a crucial strategy for training large models at scale. As model sizes continue to grow, they will exceed the memory capacity of current GPUs or TPUs. Simply adding more resources will not suffice to scale the training effectively.

There are several approaches available, including data parallelism (DP), model parallelism (MP), pipeline parallelism (PP), CPU offloading, and ZeRO memory optimization and etc. . Each approach has distinct memory requirements and introduces varying levels of communication overhead.

## Data Parallelism

Data parallelism (DP) is used when batch sizes are too large to fit on a single machine. DP divides mini-batches evenly across data-parallel processes. In this approach, the model is duplicated on multiple devices, with each device processing a subset of the data simultaneously. Forward and backward propagation are performed on each device, and gradients are averaged across processes to update the model parameters locally.

Data parallelism is often considered easier to implement than model parallelism and is sufficient for most use cases.

## Model Parallelism

When a model exceeds the memory capacity of a single device, it is partitioned across multiple processors, with each processor computing its portion of the model's operations simultaneously.
Unlike data parallelism, where the entire model is replicated across devices and each processes different batches of data, model parallelism focuses on distributing the model itself.

Model parallelism can be combined with data parallelism to enable more efficient distributed training for large-scale models.

![DP&MP](./data&modelParallelism.png)

https://www.anyscale.com/blog/what-is-distributed-training

## Pipeline Parallelism

Pipeline parallelism divides the model (groups of layers) into sequential stages. The input data is split into micro-batches, which pass through the pipeline, with each stage processing its portion of the data. At any given time, multiple micro-batches are processed simultaneously at different stages of the pipeline.

![PipelineP](./pipelineP.png)
(a) An example neural network with sequential layers is partitioned across four accelerators.
(b) The naive model parallelism strategy results in severe under-utilization due to the sequential dependency of the network.
(c) Pipeline parallelism divides the input mini-batch into smaller micro-batches, enabling different accelerators to work on distinct micro-batches simultaneously. Gradients are applied synchronously at the end.

## CPU offloading

CPU offloading exploits the heterogeneous nature of modern compute nodes. It is used in deep learning and other computationally intensive tasks to offload resource-intensive operations from the main processor (GPU) to the CPU. This approach heavily relies on memory bandwidth and is therefore constrained by PCI-E. As a result, up to 50% of training time can be spent on GPU-CPU-GPU transfers.

## Zero Memory optimization
