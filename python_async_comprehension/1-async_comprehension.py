#!/usr/bin/env python
import asyncio
from typing import List

from async_generator import async_generator

async def async_comprehension() -> List[int]:
    """
    A coroutine that collects 10 random numbers using an async comprehension
    over async_generator, then returns the 10 random numbers.
    """
    result = [i async for i in async_generator()]
    return result
