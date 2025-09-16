export default class StorageService{
    static async getApiKey(): Promise<string> {
        return await chrome.storage.local.get("key") 
    }

    static storeApiKey(key: string){
        chrome.storage.local.set({apikey: key})
    }
}