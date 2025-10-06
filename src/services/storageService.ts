
import type TQTranscript from "../interfaces/TQTranscript"

export default class StorageService{

    static async store(transcript: TQTranscript){
        chrome.storage.local.set({'store' : transcript})
        console.log(transcript)
    }

    static async load() : Promise<TQTranscript> {
        const strings = (await chrome.storage.local.get('store')).store
        const transcript = strings as TQTranscript  
        return transcript
    }

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

    static async getFullPotentialResumeData(){
        return (await chrome.storage.local.get('fullResumeData')).fullResumeData
    }
}