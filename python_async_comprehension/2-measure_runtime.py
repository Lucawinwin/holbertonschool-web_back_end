#!/usr/bin/env python3
import asyncio
import time
from typing import List

from async_comprehension import async_comprehension

async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total runtime.

    Returns:
        float: Total runtime in seconds
    """
    start_time = time.perf_counter()

    # Execute async_comprehension four times in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    total_runtime = end_time - start_time

    return total_runtime
