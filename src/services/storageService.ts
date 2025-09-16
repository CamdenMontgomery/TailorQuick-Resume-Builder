export default class StorageService{

    static async storeSectionData(section: string, data: {}){
        let fullData = (await chrome.storage.local.get('fullResumeData')).fullResumeData
        if (!fullData) fullData = {}
        
        fullData[section.toLowerCase()] = data
        chrome.storage.local.set({'fullResumeData':fullData})
        console.log(fullData)
    }

    static async getBlocklistData(section: string){
        let fullData = (await chrome.storage.local.get('fullResumeData')).fullResumeData
        if (!fullData) fullData = {}
        console.log(fullData)
        return fullData[section.toLowerCase()] ?? []
    }
}