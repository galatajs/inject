<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px; margin-right: 10px;" />
</p>
<h3 align="center">@istanbul/inject</h3>
<p align="center">
  Dependency Injection package of <code>istanbul</code> framework. 
</p>

### What Is It?

This package is the inject package of the ``istanbul`` framework. 

With this package, you can provide some values that you will reuse to inject later.

You don't have to use ``istanbul`` framework, `@istanbul/inject` is a nodejs package.

### Installation

```sh
npm install @istanbul/inject
```

> or with yarn
>
> ```
> yarn add @istanbul/inject
> ```

### Usage With Global Provider

```typescript
// main.ts
import { provide } from "@istanbul/inject"

const logger = (...msg: any[]) => {
  console.log(...msg);
}

provide("logger", logger);
provide("city", "istanbul")
provide("population", 15600000)
```

```typescript
// anything.ts
import { inject } from "@istanbul/inject"

const logger = inject("logger")
const city = inject("city")
const population = inject("population")

logger("Hello, ", city, " has ", population, " people.")
// Hello, istanbul has 15600000 people.
```

### Usage With Custom Types

```typescript
import { createInjector } from "@istanbul/inject"

type Product = {
  name: string
  price: number
}

const productInjector = createInjector<Product>();

productInjector.provide("product", {
  name: "iPhone X",
  price: 999999
});

const iphoneX = productInjector.inject("product")
```