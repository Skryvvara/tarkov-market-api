<div align=center>
  <h1>EFT-Market-API</h1>
  <p>a tiny package to utilize EFT markets api in JavaScript/TypeScript.</p>
</div>

## Table of Contents
- [ Disclaimer ](#disclaimer)
- [ How to Use ](#how-to-use)
- [ License ](#license)

<a name="disclaimer"></a>

## Disclaimer
This nodejs package is **NOT** an official package by the eft market team.
I created this package for personal projects.

You can get your API key [here](https://tarkov-market.com/dev/api).

**Notice:** to get your api key you must pledge the eft market developer on patreon.

This package and the new update 

<a name="how-to-use"></a>

## How to Use
```ts
import { EftMarketAPI } from "eft-market-api";
const api = new EftMarketApi('yourapikey');

api.GetAllItems()
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });

api.GetItemByName("name")
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });

api.GetItemByUID("uid")
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });
```

<a name="license"></a>

## License