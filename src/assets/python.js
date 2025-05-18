export const python = [
  {
    question:
      'Explain the `asyncio` library in Python. What are `async` and `await` keywords used for?',
    answer:
      '`asyncio` is a library to write concurrent code using the async/await syntax. `async` is used to define a coroutine (a special function that can be paused and resumed). `await` is used inside an `async` function to pause its execution until an awaitable object (like another coroutine, a Task, or a Future) completes.',
  },
  {
    question: 'What is an event loop in `asyncio`?',
    answer:
      'The event loop is the core of every `asyncio` application. It runs asynchronous tasks and callbacks, performs network IO operations, and runs subprocesses. It essentially manages and distributes the execution of different tasks.',
  },
  {
    question:
      'Differentiate between `asyncio`, `threading`, and `multiprocessing` in Python. When would you choose each?',
    answer:
      "`asyncio` is for single-threaded, single-process concurrency, best for I/O-bound tasks, using cooperative multitasking. `threading` uses multiple threads within a single process; due to the Global Interpreter Lock (GIL), it's good for I/O-bound tasks but not CPU-bound tasks for true parallelism. `multiprocessing` uses multiple processes, bypassing the GIL, and is suitable for CPU-bound tasks to achieve true parallelism.",
  },
  {
    question:
      'What is the Global Interpreter Lock (GIL) and how does it affect concurrency in Python?',
    answer:
      "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at the same time in a single process. This means that even on a multi-core processor, only one thread can hold control of the Python interpreter, limiting true parallelism for CPU-bound tasks in `threading`. It doesn't significantly impact I/O-bound tasks where threads spend time waiting.",
  },
  {
    question:
      'How do you handle shared resources and synchronization in `asyncio` (e.g., Locks, Semaphores)?',
    answer:
      '`asyncio` provides synchronization primitives similar to `threading`: `asyncio.Lock` to ensure exclusive access to a shared resource by a coroutine, `asyncio.Event` to signal between coroutines, `asyncio.Condition` for more complex synchronization, and `asyncio.Semaphore` to limit concurrent access to a resource.',
  },
  {
    question:
      'What are Python context managers (`with` statement) and why are they useful?',
    answer:
      'Context managers allow setup and teardown of resources automatically around a block of code. They are implemented using the `__enter__` and `__exit__` methods or the `@contextlib.contextmanager` decorator. The `with` statement ensures that resources (like files, network connections, locks) are properly acquired and released, even if errors occur, making code cleaner and more robust.',
  },
  {
    question:
      'How does Python achieve polymorphism without formal interfaces like in Java or Go? Explain duck typing.',
    answer:
      "Python primarily uses duck typing: 'If it walks like a duck and quacks like a duck, then it must be a duck.' This means an object's suitability is determined by the presence of certain methods and properties, rather than its inheritance from a particular class or implementation of an explicit interface. If an object has the necessary methods, it can be used interchangeably with other objects that also have those methods.",
  },
  {
    question:
      'What are Abstract Base Classes (ABCs) in Python (from the `abc` module) and when would you use them?',
    answer:
      "ABCs allow defining 'formal' interfaces. They provide a way to define a common API for a set of subclasses. Subclasses can be registered as implementing an ABC or can inherit from it and be required (via `@abstractmethod`) to implement specific methods. They are useful for framework development or when you want to enforce that certain classes adhere to a specific contract, providing better static analysis and clearer intent than pure duck typing in some cases.",
  },
  {
    question:
      'What are Protocols (PEP 544, introduced in Python 3.8) and how do they enable structural subtyping?',
    answer:
      'Protocols provide a way to define interfaces based on structural subtyping (static duck typing). A class implicitly implements a protocol if it has the methods and attributes defined in the protocol, without needing to explicitly inherit from it. This is checked by static type checkers like MyPy, allowing for more flexible and less coupled designs while still providing type safety benefits.',
  },
  {
    question:
      "Explain Python's error handling mechanism (`try...except...else...finally`).",
    answer:
      '`try`: Encloses code that might raise an exception. `except <ExceptionType> as e`: Catches specific exceptions; the `as e` part captures the exception instance. Multiple `except` blocks can handle different exceptions. `else`: Executes if the `try` block completes without raising an exception. `finally`: Always executes, whether an exception occurred or not, typically used for cleanup.',
  },
  {
    question: 'What are some best practices for exception handling in Python?',
    answer:
      "Catch specific exceptions rather than a bare `except:`. Avoid suppressing exceptions silently unless intentional. Use `finally` for cleanup. Create custom exception classes for application-specific errors. Log exceptions with tracebacks. Don't use exceptions for normal control flow.",
  },
  {
    question: 'What are decorators in Python? Provide a simple use case.',
    answer:
      'A decorator is a design pattern that allows adding new functionality to an existing object (like a function or class) without modifying its structure. They are a form of metaprogramming, where a part of the program tries to modify another part of the program at compile time. Syntactically, they are applied using the `@decorator_name` syntax. Use case: Logging function calls, timing execution, access control, or registering functions.',
  },
  {
    question:
      'Explain generators and the `yield` keyword. What are their benefits?',
    answer:
      "Generators are a special type of iterator, created using a function with the `yield` keyword or a generator expression. When a generator function is called, it returns a generator object but doesn't start execution immediately. Each `yield` statement temporarily suspends processing, sending a value back to the caller, and saves the local state. Benefits: Memory efficiency (values are produced on-demand, not all at once), simpler code for creating iterators.",
  },
  {
    question:
      'What is the difference between an iterator and an iterable in Python?',
    answer:
      'An iterable is an object capable of returning its members one at a time (e.g., lists, strings, tuples). It must implement the `__iter__()` method which returns an iterator. An iterator is an object representing a stream of data. It must implement the `__next__()` method to fetch the next item and `__iter__()` to return itself. Iterators maintain state.',
  },
  {
    question:
      'Describe list comprehensions, dictionary comprehensions, and set comprehensions. Why are they preferred over `map` and `filter` in many cases?',
    answer:
      'Comprehensions provide a concise way to create lists, dictionaries, or sets. Example list comprehension: `[x*x for x in range(10) if x % 2 == 0]`. They are often more readable and Pythonic than using `map` and `filter` with `lambda` functions for simple transformations and filtering, as the logic is more directly expressed.',
  },
  {
    question:
      'What are Python Dataclasses (introduced in 3.7) and what benefits do they offer over regular classes for data storage?',
    answer:
      'Dataclasses are classes, typically used for storing data, that come with automatically generated methods like `__init__()`, `__repr__()`, `__eq__()`, etc., by using the `@dataclass` decorator. This reduces boilerplate code for simple data-holding classes, making them cleaner and easier to define.',
  },
  {
    question:
      'Explain the `match...case` structural pattern matching statement introduced in Python 3.10. Provide a use case.',
    answer:
      'Structural pattern matching allows matching complex data structures (like lists, tuples, dictionaries, objects) against patterns. `match` takes a subject, and `case` blocks define patterns. If a pattern matches, the corresponding block is executed. It can destructure objects and bind parts to variables. Use case: Parsing complex data, implementing state machines, handling different types of messages or commands.',
  },
  {
    question:
      'What are type hints in Python (PEP 484)? How do they improve code quality?',
    answer:
      'Type hints allow developers to indicate the expected types of variables, function parameters, and return values. They are not enforced by the Python interpreter at runtime by default but are used by static analysis tools (like MyPy, Pyright) to catch type errors before execution. Benefits: Improved code readability, easier refactoring, better IDE support, and early bug detection.',
  },
  {
    question: 'How do you effectively use the `logging` module in Python?',
    answer:
      'Use different log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL). Configure loggers, handlers (e.g., StreamHandler, FileHandler), and formatters. Use named loggers (e.g., `logging.getLogger(__name__)`) for module-specific logging. Avoid using `print()` for application logging. In libraries, typically configure a `NullHandler` to let the application control logging.',
  },
  {
    question:
      'What are virtual environments and why are they crucial for Python development?',
    answer:
      'Virtual environments are isolated Python environments that allow projects to have their own independent sets of Python packages and interpreter. They prevent conflicts between dependencies of different projects and ensure project reproducibility. Tools like `venv` (built-in) or `conda` are used to create them.',
  },
  {
    question:
      'Describe common ways to manage dependencies in Python projects (e.g., `requirements.txt`, Poetry, PDM).',
    answer:
      '`requirements.txt`: A simple text file listing dependencies, typically generated by `pip freeze`. Good for basic projects.\n`Poetry`/`PDM`: Modern dependency management and packaging tools. They use `pyproject.toml` to manage dependencies, ensure deterministic builds with lock files, handle virtual environments, and assist with packaging and publishing.',
  },
  {
    question:
      'What is the difference between `__str__` and `__repr__` methods in a class?',
    answer:
      "`__str__` is used to return a string representation of an object that is human-readable. It's what `str(object)` and `print(object)` use. `__repr__` is used to return an unambiguous string representation of an object, ideally one that can be used to recreate the object (e.g., `eval(repr(object)) == object`). If `__str__` is not defined, `__repr__` is used as a fallback.",
  },
  {
    question:
      'Explain the concept of `*args` and `**kwargs` in function definitions.',
    answer:
      '`*args` allows a function to accept a variable number of non-keyword (positional) arguments, which are collected into a tuple. `**kwargs` allows a function to accept a variable number of keyword arguments, which are collected into a dictionary.',
  },
  {
    question: 'What is the `super()` function used for in Python inheritance?',
    answer:
      "`super()` is used to call methods of a parent class (superclass) from a subclass. It helps in extending or overriding methods of the parent class while still leveraging the parent's implementation. It's particularly important in multiple inheritance to ensure methods are called in the correct Method Resolution Order (MRO).",
  },
  {
    question: "Explain Python's Method Resolution Order (MRO).",
    answer:
      'MRO defines the order in which base classes are searched when looking for a method or attribute. Python uses the C3 linearization algorithm for MRO, which ensures that if a class inherits from multiple parents, methods are looked up in a consistent and predictable order, respecting inheritance hierarchy and avoiding ambiguity.',
  },
  {
    question: 'What is the difference between a shallow copy and a deep copy?',
    answer:
      'A shallow copy creates a new object but inserts references into it to the objects found in the original. If the original object contains other mutable objects, changes to these nested objects will affect both the original and the copy. A deep copy creates a new object and recursively copies all objects found in the original, including nested objects. Changes to nested objects in the copy do not affect the original.',
  },
  {
    question: 'When would you use the `@property` decorator?',
    answer:
      "The `@property` decorator is used to define methods that can be accessed like attributes (without parentheses). It's useful for creating 'managed attributes' where you want to add logic (like validation or computation) when an attribute is accessed, set, or deleted, while maintaining a simple attribute-like interface for the user of the class.",
  },
  {
    question: 'How can you make a Python class iterable?',
    answer:
      'To make a class iterable, you need to implement the `__iter__()` method, which should return an iterator object. This iterator object must then implement the `__next__()` method to provide the next item in the sequence and raise `StopIteration` when there are no more items.',
  },
  {
    question:
      "What are Python's built-in functions `map()`, `filter()`, and `reduce()`? Give an example of when `map` or `filter` might be less readable than a list comprehension.",
    answer:
      '`map(function, iterable, ...)` applies `function` to every item of `iterable` and returns an iterator of the results. `filter(function, iterable)` constructs an iterator from elements of `iterable` for which `function` returns true. `functools.reduce(function, iterable[, initializer])` applies `function` of two arguments cumulatively to the items of `iterable`, from left to right, so as to reduce the iterable to a single value.\nList comprehension `[x*2 for x in my_list if x > 5]` is often more readable than `list(map(lambda x: x*2, filter(lambda x: x > 5, my_list)))`.',
  },
  {
    question: "How does Python's garbage collection work?",
    answer:
      'Python primarily uses reference counting. Each object has a count of references pointing to it. When the count drops to zero, the object is deallocated. To handle reference cycles (where objects refer to each other, preventing their counts from reaching zero), Python also has a cyclic garbage collector that periodically detects and cleans up these cycles.',
  },
  {
    question:
      'What are f-strings (formatted string literals) and why are they generally preferred since Python 3.6?',
    answer:
      "F-strings provide a concise and convenient way to embed expressions inside string literals for formatting. They are prefixed with `f` or `F`. Example: `name = 'World'; f'Hello, {name}!'`. They are generally preferred because they are more readable, faster, and more concise than older formatting methods like `%`-formatting or `str.format()`.",
  },
  {
    question:
      'Describe a scenario where using `threading` might be beneficial despite the GIL.',
    answer:
      '`threading` is beneficial for I/O-bound tasks where threads spend most of their time waiting for external operations (e.g., network requests, file I/O). While one thread is waiting, the GIL can be released, allowing other threads to run. This can improve responsiveness in applications like web servers handling multiple client requests simultaneously or GUI applications keeping the UI responsive during background tasks.',
  },
  {
    question:
      'How can you profile Python code to find performance bottlenecks?',
    answer:
      "Python's built-in `cProfile` (or `profile`) module can be used to get detailed statistics on function call counts and execution times. The `pstats` module can then be used to analyze this data. For line-by-line profiling, `line_profiler` is a popular third-party tool. For memory profiling, `memory_profiler` can be used.",
  },
  {
    question:
      'What is monkey patching in Python? When might it be used (cautiously)?',
    answer:
      'Monkey patching refers to dynamic (runtime) modifications of a class or module. This means changing or adding methods/attributes of existing classes or modules at runtime. It might be used cautiously to work around bugs in third-party libraries, add custom behavior, or for testing (e.g., replacing a function with a mock). It should be used sparingly as it can make code harder to understand and maintain.',
  },
  {
    question: 'Explain the difference between `is` and `==` in Python.',
    answer:
      '`==` checks for equality of values (i.e., do two objects have the same content?). It calls the `__eq__()` method of the objects. `is` checks for identity (i.e., do two references point to the exact same object in memory?). It cannot be overridden.',
  },
  {
    question:
      'How would you design a simple plugin system in Python using interfaces or protocols?',
    answer:
      'One way is to define a Protocol (or an ABC) that specifies the methods each plugin must implement (e.g., `load()`, `execute()`, `unload()`). Plugins would be separate modules or classes that implement this protocol. The main application could discover plugins (e.g., by looking in a specific directory or using entry points) and then interact with them through the defined protocol, ensuring all plugins behave consistently.',
  },
  {
    question:
      'How do you handle secrets or sensitive configuration in Python applications?',
    answer:
      'Avoid hardcoding secrets. Use environment variables (e.g., via `os.environ`). Use configuration files (e.g., `.ini`, YAML, JSON) that are kept out of version control (e.g., via `.gitignore`) and loaded at runtime. For more robust solutions, use dedicated secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault.',
  },
  {
    question: 'What are Python Entry Points and how can they be used?',
    answer:
      'Entry points are a feature of `setuptools` (and other packaging tools) that allow packages to advertise objects (like functions or classes) for use by other packages or applications. They are defined in `pyproject.toml` (or `setup.py`/`setup.cfg`). A common use case is for defining command-line scripts or plugins, where an application can discover and load extensions provided by installed packages.',
  },
];
