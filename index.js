const axios = require('axios').default;

class EftMarketAPI {
    constructor(apikey) {
        this.apikey = apikey;
    }

    async GetAllItems() {
        let data = await this.GetData(`https://tarkov-market.com/api/v1/items/all?x-api-key=${this.apikey}`);
        return data;
    }

    async GetItemByName(name) {
        let data = await this.GetData(`https://tarkov-market.com/api/v1/item?q=${name}&x-api-key=${this.apikey}`);
        return data;
    }

    async GetItemByUID(uid) {
        let data = await this.GetData(`https://tarkov-market.com/api/v1/item?uid=${uid}&x-api-key=${this.apikey}`);
        return data;
    }

    async GetData(url) {
        let data = await axios.get(url).then(response => response.data);

        return data;
    }
}

exports.default = EftMarketAPI;