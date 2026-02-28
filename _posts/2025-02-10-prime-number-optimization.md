---
title: "How I Sped Up Prime Number Computation"
date: 2025-02-10
categories:
  - Technical
tags:
  - Python
  - Algorithms
  - Distributed Computing
---

One of my personal projects involved computing prime numbers as fast as possible. What started as a simple exercise turned into a deep dive on algorithm design and distributed computing.

## Starting Point: Trial Division

The most obvious approach: for every number `n`, check if any integer from `2` to `√n` divides it evenly.

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```

Simple, but slow for large ranges. Every number gets its own full check.

## The Sieve of Eratosthenes

Instead of checking one number at a time, the Sieve marks composites in bulk:

```python
def sieve(limit):
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(limit**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, limit + 1, i):
                is_prime[j] = False
    return [i for i, v in enumerate(is_prime) if v]
```

This is dramatically faster for finding all primes up to a large limit, but requires memory proportional to the limit.

## Taking It Further: A Cluster

For very large ranges, I set up a small network of computers to split the work. Each machine handled a segment of the number range, and results were collected centrally.

The honest finding: for ranges where everything fits in memory, a well-optimized local sieve beats the cluster. Network overhead and coordination costs hurt small jobs. But the cluster showed its value for ranges too large for any single machine's RAM.

## What I Took Away

- Algorithm choice matters more than raw hardware, up to a point
- Distributed computing has real overhead that has to be justified by the problem size
- Benchmarking with real numbers (not assumptions) is essential

I'm planning to explore segmented sieves and possibly GPU-based approaches next.
