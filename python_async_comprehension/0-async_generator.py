#!/usr/bin/env python3
import asyncio
import random

async def async_generator():
    """
    A coroutine that yields 10 random numbers between 0 and 10,
    with a 1-second delay between each yield.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Wait asynchronously for 1 second
        yield random.randint(0, 10)  # Generate and yield a random number between 0 and 10
