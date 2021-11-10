import axios from "axios";
import { Item } from "..";

export class EftMarketAPI {
  private apikey: string =  "";

  constructor(apikey: string) {
    this.apikey = apikey;
  }

  /**
   * Get an Array of all Items
   * 
   * @returns Promise of array of type Item
   */
  public GetAllItems(): Promise<Item[]> {
    return new Promise<any>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/items/all?x-api-key=${this.apikey}`;
      try {
        this.GetData<Item[]>(url)
        .then(res => resolve(res))
        .catch(error => { throw error});
      }
      catch(error: any) {
        reject(error);
      }
    });
  }

  /**
   * Get an Item by it's name or a part of it's name. Should the name
   * result in multiple hits an array of mutliple items is returned.
   * 
   * @param name part of the item's name or the full name
   * @returns Promise of array of type Item
   */
  public GetItemsByName(name: string): Promise<Item[]> {
    return new Promise<Item[]>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/item?q=${name}&x-api-key=${this.apikey}`;
      try {
        this.GetData<Item[]>(url)
        .then(res => resolve(res))
        .catch(error => { throw error});
      }
      catch(error: any) {
        reject(error);
      }
    });
  }

  /**
   * Get an Item by it's UID.
   * 
   * @param uid string of the item's uid
   * @returns Promise of type Item
   */
  public async GetItemByUID(uid: string): Promise<Item> {
    return new Promise<Item>((resolve, reject) => {
      let url = `https://tarkov-market.com/api/v1/item?uid=${uid}&x-api-key=${this.apikey}`;
      try {
        this.GetData<Item>(url)
        .then(res => resolve(res))
        .catch(error => { throw error});
      }
      catch(error: any) {
        reject(error);
      }
    });
  }

  protected GetData<T>(url: string): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      axios.get(url)
        .then(res => res.data)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }
}