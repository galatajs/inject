<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@galatajs/inject</h3>
<p align="center">
  Dependency Injection package of <code>galatajs</code> framework. 
</p>

### What Is It?

This package is the inject package of the ``galatajs`` framework. 

With this package, you can provide some values that you will reuse to inject later.

You don't have to use ``galatajs`` framework, `@galatajs/inject` is a nodejs package.

### Installation

```sh
npm install @galatajs/inject
```

> or with yarn
>
> ```
> yarn add @galatajs/inject
> ```

### Usage With Global Provider

```typescript
// main.ts
import { provide } from "@galatajs/inject"

const logger = (...msg: any[]) => {
  console.log(...msg);
}

provide("logger", logger);
provide("city", "galatajs")
provide("population", 15600000)
```

```typescript
// anything.ts
import { inject } from "@galatajs/inject"

const logger = inject("logger")
const city = inject("city")
const population = inject("population")

logger("Hello, ", city, " has ", population, " people.")
// Hello, galatajs has 15600000 people.
```

### Usage With Custom Types

```typescript
import { createInjector } from "@galatajs/inject"

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
