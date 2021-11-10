<div align=center>
  <h1>EFT-Market-API</h1>
  <p>a tiny package to utilize EFT markets api in JavaScript/TypeScript.</p>
</div>

## Table of Contents
- [ Disclaimer ](#disclaimer)
- [ Description ](#description)
- [ How to Use ](#how-to-use)
- [ License ](#license)

<a name="disclaimer"></a>

## Disclaimer
This nodejs package is **NOT** an official package by the eft market team.
I created this package for personal projects.

You can get your API key [here](https://tarkov-market.com/dev/api).

**Notice:** to get your api key you must pledge the eft market developer on patreon.

This package and the new update (v1.2.0) are a improvement to the package since this project was created in the early days of my developing journey so I decided to revisit and improve this.

Use this with caution though, I did improve the codebase and added type definitions I did not pledge eft market again so I'm unable to test the changes.

Should this project - for whatever reason - recieve more attention than expected I might become a patreon again and revisit this once more.

Pull Requests Wellcome.

<a name="description"></a>

## Description

This project is a TypeScript/JavaScript wrapper for the [tarkov market api](https://tarkov-market.com/dev/api). I created this back in the day when I didn't know how to consume restful apis. Although I know it know I decided to not delete this project but keep it for nostalgic reasons.

<a name="how-to-use"></a>

## How to Use
```ts
import { EftMarketAPI } from "eft-market-api";
const api = new EftMarketApi('yourapikey');

/**
 * Get an Array of all Items
 * 
 * @returns Promise of array of type Item
 */
api.GetAllItems()
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });

/**
 * Get an Item by it's name or a part of it's name. Should the name
 * result in multiple hits an array of mutliple items is returned.
 * 
 * @param name part of the item's name or the full name
 * @returns Promise of array of type Item
 */
api.GetItemsByName("name")
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });

/**
 * Get an Item by it's name or a part of it's name. Should the name
 * result in multiple hits an array of mutliple items is returned.
 * 
 * @param name part of the item's name or the full name
 * @returns Promise of array of type Item
 */
api.GetItemByUID("uid")
  .then(data => {
    //do something
  })
  .catch(error => {
    console.error(error);
  });
```

To simplify the work with TypeScript all methods use the Item class that looks like this:

```ts
export interface Item {
  uid: string
  name: string,
  tags: string[],
  shortName: string,
  price: number,
  basePrice: number,
  avg24hPrice: number,
  avg7daysPrice: number,
  traderName: string,
  traderPrice: number,
  traderPriceCur: string,
  updated: string,
  slots: number,
  diff24h: number,
  diff7days: number,
  icon: string,
  link: string,
  wikiLink: string,
  img: string,
  imgBig: string,
  bsgId: string,
  isFunctional: boolean,
  reference: string
}
```
perfectly representing the tarkov market object structure:
```
[
  {
    "uid": "5ac84494-465a-424a-b36e-fe22869ba5ec",
    "name": "Physical bitcoin",
    "tags": [
      "Barter"
    ],
    "shortName": "0.2BTC",
    "price": 374097,
    "basePrice": 123577,
    "avg24hPrice": 379526,
    "avg7daysPrice": 357188,
    "traderName": "Therapist",
    "traderPrice": 374097,
    "traderPriceCur": "₽",
    "updated": "2021-10-16T17:00:03.876Z",
    "slots": 1,
    "diff24h": -1.43,
    "diff7days": 4.73,
    "icon": "https://cdn.tarkov-market.com/images/items/physical_bitcoin_(btc)_sm.png",
    "link": "https://tarkov-market.com/item/physical_bitcoin_(btc)",
    "wikiLink": "https://escapefromtarkov.gamepedia.com/Physical_bitcoin",
    "img": "https://cdn.tarkov-market.com/images/items/physical_bitcoin_(btc)_sm.png",
    "imgBig": "https://cdn.tarkov-market.com/images/items/physical_bitcoin_(btc)_lg.png",
    "bsgId": "59faff1d86f7746c51718c9c",
    "isFunctional": true,
    "reference": "https://www.patreon.com/tarkov_market"
  }
]
```

<a name="license"></a>

## License