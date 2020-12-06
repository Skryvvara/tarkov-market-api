## Disclaimer
This nodejs package is **NOT** an official package by the eft market team.
I created this package for personal projects so the code might not be the
best possible solution. 

Pull Requests welcome.

You can get your APIKey here https://tarkov-market.com/dev/api
**Notice:** to get your api key you must pledge the eft market developer on patreon.

## How to Use
```js
  const EFTMarketApi = require('eft-market-api').default;
  const api = new EFTMarketApi('yourapikey');

  async function allItems() {
    let data = await api.GetAllItems();
  }

  async function itemByName(name) {
    let data = await api.GetItemByName(name);
  }

  async function itemByUID(uid) {
    let data = await api.GetItemByUID(uid);
  }
```