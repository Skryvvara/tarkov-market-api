import axios from "axios";

export class EftMarketAPI {
  private apikey: string =  "";

  constructor(apikey: string) {
    this.apikey = apikey;
  }

  public GetAllItems(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/items/all?x-api-key=${this.apikey}`;
      this.GetData(url)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  public GetItemByName(name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/item?q=${name}&x-api-key=${this.apikey}`;
      this.GetData(url)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  public async GetItemByUID(uid: string) {
    return new Promise<any>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/item?uid=${uid}&x-api-key=${this.apikey}`;
      this.GetData(url)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  protected GetData(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      axios.get(url)
        .then(res => res.data)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }
}