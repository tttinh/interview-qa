export const golang = [
  {
    question:
      'Explain goroutines and how they differ from traditional threads.',
    answer:
      "Goroutines are lightweight, independently executing functions that run concurrently. Unlike OS threads, they are managed by the Go runtime's scheduler, not the operating system. This allows creating thousands or millions of goroutines with minimal overhead compared to the same number of OS threads, making concurrency significantly easier and more efficient.",
  },
  {
    question:
      'What are channels, and how are they used for communication and synchronization?',
    answer:
      'Channels are typed conduits used for communicating and synchronizing goroutines. You send values into a channel using the `<-` operator and receive values using the same operator. By default, sends and receives block until the other end is ready, providing inherent synchronization. They are the primary way goroutines share data without explicit locks.',
  },
  {
    question:
      'Explain the difference between buffered and unbuffered channels.',
    answer:
      'An unbuffered channel has a capacity of zero and requires both the sender and receiver to be ready simultaneously. A send on an unbuffered channel blocks until a receiver is available, and a receive blocks until a sender is available. A buffered channel has a capacity greater than zero. A send blocks only if the buffer is full, and a receive blocks only if the buffer is empty. This allows sends/receives to happen asynchronously up to the buffer capacity.',
  },
  {
    question: 'What is the purpose of the `select` statement in Go?',
    answer:
      'The `select` statement is used with channels to wait on multiple communication operations (sends or receives). It blocks until one of its cases can proceed. If multiple cases are ready, one is chosen non-deterministically. It can include a `default` case to perform a non-blocking check on channels or execute if no case is ready.',
  },
  {
    question:
      'What primitives does the `sync` package provide for synchronization?',
    answer:
      'The `sync` package provides basic synchronization primitives like `sync.Mutex` (mutual exclusion lock), `sync.RWMutex` (reader/writer mutual exclusion lock), and `sync.WaitGroup` (to wait for a collection of goroutines to finish).',
  },
  {
    question: 'How do you use `sync.WaitGroup`?',
    answer:
      '`sync.WaitGroup` is used to wait for a collection of goroutines to finish. You call `Add(n)` to set the number of goroutines to wait for, `Done()` in each goroutine when it completes, and `Wait()` in the main goroutine (or parent goroutine) to block until the counter reaches zero.',
  },
  {
    question: 'Explain the difference between concurrency and parallelism.',
    answer:
      "Concurrency is about dealing with multiple things at the same time by structuring a program so that multiple tasks can make progress independently (e.g., interleaving execution on a single core). Parallelism is about *doing* multiple things at the same time by executing tasks simultaneously on multiple processing cores. Go's goroutines enable concurrency, which the runtime can execute in parallel if multiple cores are available.",
  },
  {
    question: 'What is synchronization in the context of concurrency?',
    answer:
      'Synchronization is the coordination of multiple concurrent processes or goroutines to ensure they interact correctly, particularly when accessing shared resources. It involves mechanisms (like mutexes, channels, wait groups) to control the order and timing of operations and prevent issues like race conditions, deadlocks, or data corruption.',
  },
  {
    question: 'How can you detect race conditions in Go?',
    answer:
      'Go provides a built-in race detector. You can run your program or tests with the `-race` flag (e.g., `go run -race main.go`, `go test -race`). The race detector instruments the code to find potential race conditions during execution and reports them.',
  },
  {
    question: 'What is a goroutine leak and how can you prevent it?',
    answer:
      'A goroutine leak occurs when a goroutine is started but never exits, consuming memory and other resources unnecessarily. Common causes include: a goroutine waiting on a channel that is never sent to/received from, or blocked reads/writes on buffered channels that never empty/fill. Prevention involves ensuring all started goroutines have a way to complete, often using `context.Context` for cancellation signals or ensuring channel operations are matched or handled with `select` statements including a cleanup path.',
  },
  {
    question: 'Describe some common Go concurrency patterns.',
    answer:
      'Common patterns include: Worker Pools (a fixed number of goroutines processing tasks from a channel), Fan-In/Fan-Out (multiple goroutines sending results to a single channel), Pipelines (channels connecting stages of processing), and using `context.Context` for cancellation and timeouts across goroutines.',
  },
  {
    question: 'What is an interface in Go, and how does a type implement it?',
    answer:
      'An interface is a collection of method signatures. A type implicitly implements an interface if it defines all the methods declared in the interface, regardless of whether it explicitly declares it implements the interface. This is known as structural typing or duck typing.',
  },
  {
    question:
      'Explain embedding in structs and how it relates to interfaces or code reuse.',
    answer:
      "Embedding involves including a type (typically a struct or an interface) as an anonymous field within another struct. The methods and fields of the embedded type are 'promoted' to the outer struct. For interfaces, embedding is used to compose interfaces, combining multiple interface method sets into a new interface. For structs, it provides a form of composition and code reuse where the outer struct 'has-a' or 'is-a' relationship with the embedded type, promoting its fields and methods.",
  },
  {
    question:
      'Explain the difference between value and pointer receivers for methods.',
    answer:
      'A method with a value receiver (`func (t MyType) myMethod()`) operates on a copy of the value. Changes made to `t` inside the method are not reflected in the original variable. A method with a pointer receiver (`func (t *MyType) myMethod()`) operates on the original value through its pointer. Changes made to `t` inside the method modify the original variable. Pointer receivers are also necessary for methods that modify the receiver or when the receiver is large to avoid copying overhead.',
  },
  {
    question:
      'Explain method sets for concrete types and pointer types regarding interface implementation.',
    answer:
      "For a concrete type `T`, its method set consists of all methods with a value receiver `(T)`. For a pointer type `*T`, its method set includes all methods with a value receiver `(T)` AND all methods with a pointer receiver `(*T)`. A type implements an interface if its method set is a superset of the interface's method set. This is why a concrete value `T` cannot implement an interface requiring a method with a pointer receiver `(*T)`, but a pointer value `*T` can implement interfaces requiring either receiver type.",
  },
  {
    question:
      'How do you use type assertion and type switches with interfaces?',
    answer:
      'Type assertion (`value.(Type)`) checks if an interface value holds a value of a specific concrete type and extracts it. It can return two values: the concrete value and a boolean indicating success (`v, ok := i.(T)`). A type switch (`switch v := i.(type) { ... }`) is a concise way to perform multiple type assertions on a single interface value, allowing different code branches based on the concrete type held by the interface.',
  },
  {
    question: 'How does Go handle errors, and what are common patterns?',
    answer:
      'Go uses multiple return values, typically returning a result and an error (`(result, error)`). Callers check if the error is `nil` to determine success. Common patterns include: checking errors immediately after calls (`if err != nil { return ..., err }`), sentinel errors (specific error values like `io.EOF`), and custom error types implementing the `error` interface to carry more information.',
  },
  {
    question: 'Explain error wrapping (Go 1.13+) and its benefits.',
    answer:
      'Error wrapping allows an error to contain another error using `fmt.Errorf` with `%w` or packages like `xerrors` (now integrated). This creates a chain of errors, preserving the original error context as the error propagates up the call stack. Benefits include improved debugging (seeing the root cause) and allowing callers to inspect wrapped errors using `errors.Is` (for sentinel errors) or `errors.As` (for specific error types) without needing to know the full wrapping chain.',
  },
  {
    question: 'What is the difference between `make` and `new`?',
    answer:
      '`new` allocates memory for a value of a given type, initializes it to its zero value, and returns a pointer to it. `make` is used for initializing slices, maps, and channels; it allocates and initializes the internal data structure and returns the value itself (not a pointer).',
  },
  {
    question: 'How do you handle panics?',
    answer:
      'Panics can be recovered from using the `recover` built-in function within a `defer`ed function. `recover` stops the panic sequence and returns the value passed to `panic()`. If `recover` is not called within a `defer`ed function or there was no panic, it returns nil.',
  },
  {
    question: 'When should you use `panic` and `recover`?',
    answer:
      "`panic` should be used for truly exceptional, unrecoverable errors or programming errors (like index out of bounds, nil pointer dereference - though the runtime often panics for these). It stops the ordinary flow of control and begins panicking. `recover` is used within a `defer`ed function to stop a panic and resume normal execution. It's typically used for gracefully handling runtime errors that might otherwise crash the program, such as recovering from a bad state in a server request handler.",
  },
  {
    question: 'What is the purpose of the `defer` statement? Give an example.',
    answer:
      "The `defer` statement schedules a function call to be executed just before the surrounding function returns. Deferred calls are executed in LIFO order. It's commonly used for cleanup tasks like closing file handles, database connections, unlocking mutexes, or recovering from panics.\nExample:\n```go\nfunc readFile(filename string) ([]byte, error) {\n    f, err := os.Open(filename)\n    if err != nil {\n        return nil, err\n    }\n    defer f.Close() // Ensure the file is closed\n    data, err := ioutil.ReadAll(f)\n    return data, err\n}\n```",
  },
  {
    question: 'Explain the concept of zero values and `nil` in Go.',
    answer:
      "Variables in Go are automatically initialized to their 'zero value' if not explicitly assigned. This is `0` for numeric types, `false` for booleans, `''` for strings, and `nil` for pointers, slices, maps, channels, interfaces, and functions. `nil` specifically represents the absence of a value or an uninitialized state for these reference/pointer types. Accessing methods or elements on a `nil` pointer, slice, map, or channel often results in a panic, making understanding and handling `nil` crucial.",
  },
  {
    question: 'What is the `context` package used for?',
    answer:
      'The `context` package provides types (`Context`) for carrying deadlines, cancellation signals, and request-scoped values across API boundaries, typically between goroutines in a call chain (e.g., handling an incoming HTTP request, propagating cancellation to database queries or microservice calls). It is essential for managing the lifecycle of operations, especially in concurrent or distributed systems, allowing graceful cancellation and timeout enforcement.',
  },
  {
    question:
      'How do you handle context cancellation in concurrent operations?',
    answer:
      'You pass a `context.Context` (often derived from an incoming request or a parent context) to goroutines or functions that perform work. Inside these goroutines/functions, you select on `context.Done()` alongside other operations (like channel reads). When `context.Done()` receives a signal, it indicates the operation should be cancelled, and the goroutine should clean up and exit. This propagates cancellation through the system.',
  },
  {
    question: 'Explain closures in Go and give an example.',
    answer:
      "A closure is a function value that references variables from outside its body. It 'closes over' variables in its surrounding scope, allowing the function to access and manipulate those variables even after the outer function has returned. They are often used for creating functions with persistent state or within goroutines.\nExample:\n```go\nfunc counter() func() int {\n    i := 0\n    return func() int { // This is the closure\n        i++\n        return i\n    }\n}\n\nfunc main() {\n    c := counter()\n    fmt.Println(c()) // Output: 1\n    fmt.Println(c()) // Output: 2\n}\n```",
  },
  {
    question: 'What is the purpose of the `init` function?',
    answer:
      "The `init` function is a special function (no arguments, no return value, automatically executed) that runs during package initialization, before the `main` function. A package can have multiple `init` functions (in potentially multiple files). They are used for setting up package-specific state, registering components, or performing other necessary initialization tasks before the package's contents are used.",
  },
  {
    question:
      'Why does the Go compiler enforce that local variables must be used?',
    answer:
      'The Go compiler enforces that declared local variables must be used to prevent code bloat and potential bugs. Unused variables can clutter code, indicate logic errors (e.g., a computation result was ignored), and make code harder to read and maintain. This compiler check encourages cleaner and more intentional code.',
  },
  {
    question:
      'What is a Go module and how does it relate to dependency management?',
    answer:
      "A Go module is the unit of source code versioning and dependency management in Go. It's a collection of related Go packages that are versioned together. The `go.mod` file defines the module path, required dependencies, and their versions. The `go.sum` file records cryptographic checksums of module dependencies. The `go mod` command-line tool is used to manage these dependencies.",
  },
  {
    question: 'How do you manage dependencies in Go using Go Modules?',
    answer:
      'Dependencies are managed using the `go mod` command. `go mod init` initializes a new module. `go get` adds, upgrades, or downgrades dependencies. `go mod tidy` cleans up the `go.mod` file by removing unused dependencies and adding missing ones. `go build` and `go test` automatically use the `go.mod` file to resolve and fetch dependencies.',
  },
  {
    question:
      'How do you read from and write to files in Go, ensuring resources are properly closed?',
    answer:
      'File operations are typically done using the `os` package. `os.Open` or `os.OpenFile` opens a file. `file.Read` or functions from `io` are used for reading; `file.Write` or functions from `io` are used for writing. To ensure the file is closed even if errors occur, you use `defer file.Close()` immediately after successfully opening the file. This guarantees the file handle is released when the surrounding function exits.',
  },
  {
    question:
      'What are some common pitfalls when working with shared data (like maps or slices) concurrently without synchronization?',
    answer:
      'Accessing maps or slices concurrently for writing (or even reading if writes are also happening) without proper synchronization (like a `sync.Mutex` or using channels) leads to race conditions. This can result in data corruption, unpredictable behavior, or even runtime panics (especially with maps). Maps in Go are explicitly not safe for concurrent writes or reads/writes.',
  },
  {
    question:
      'What are some general best practices you follow when writing Go code?',
    answer:
      "Common best practices include: Explicit error handling (checking `err != nil`), using interfaces for decoupling and flexibility, writing idiomatic Go code (following `go fmt` and Go's conventions), using `defer` for resource cleanup, using `context` for cancellation and timeouts, designing with concurrency in mind (goroutines, channels, sync primitives), writing comprehensive unit tests, using the race detector, minimizing global state, and documenting public API elements.",
  },
  {
    question: 'How do you write unit tests in Go?',
    answer:
      'Unit tests are written in files ending with `_test.go` in the same package as the code being tested. Test functions must start with `Test` followed by a capital letter (e.g., `TestFunctionName`), take a single argument of type `*testing.T`, and use methods on `*testing.T` like `t.Error`, `t.Errorf`, `t.Fail`, `t.Fatal`, `t.Fatalf` to report failures or stop the test.',
  },
  {
    question:
      'What is the `go test` command used for, and what are some useful flags?',
    answer:
      '`go test` is the command-line tool used to run tests, examples, and benchmarks in Go packages. Useful flags include: `-v` (verbose output, showing test names and results), `-race` (enable the race detector), `-cover` (enable test coverage analysis), `-bench .` (run benchmarks), `-run <regex>` (run tests whose names match the regex), `-count n` (run tests n times to check for flakiness).',
  },
  {
    question: "Explain 'testable examples' and their benefit.",
    answer:
      'Example functions (`func Example...`) placed in `_test.go` files serve as executable documentation. They demonstrate how to use a package, function, or type. The `go test` command runs these examples, and if the function contains an `// Output:` comment line, the actual output is compared against the text following that comment. This ensures that the examples are correct and remain up-to-date with the code, improving documentation reliability.',
  },
  {
    question:
      'Briefly explain the purpose of key Go toolchain commands (`go fmt`, `go vet`, `go run`, `go build`, `go install`).',
    answer:
      '`go fmt`: Formats Go source code according to standard Go style.\n`go vet`: Examines Go source code and reports suspicious constructs (potential bugs).\n`go run`: Compiles and runs a Go program.\n`go build`: Compiles Go packages and their dependencies.\n`go install`: Compiles and installs packages and dependencies, placing the executable or package archives in the appropriate location (`GOPATH/bin` or `GOBIN`).',
  },
  {
    question:
      'How would you profile a Go application for performance bottlenecks?',
    answer:
      'Go has built-in profiling capabilities via the `runtime/pprof` package and the `net/http/pprof` package (for web servers). You can capture CPU profiles (`pprof.StartCPUProfile`, `pprof.StopCPUProfile`), memory profiles (`pprof.WriteHeapProfile`), blocking profiles, mutex profiles, etc. The collected profile data can then be analyzed using the `go tool pprof` command, which provides various views (text, graphical, web UI) to identify hotspots.',
  },
  {
    question:
      'What is the Go Garbage Collector and how does it impact performance?',
    answer:
      'Go uses a concurrent, tri-color mark-and-sweep garbage collector. It automatically reclaims memory that is no longer reachable. The GC runs concurrently with the application, minimizing stop-the-world pauses. While highly efficient, GC cycles still consume CPU resources. Excessive memory allocation (churn) or complex data structures can increase GC pressure and pause times, impacting application performance, especially latency.',
  },
];
