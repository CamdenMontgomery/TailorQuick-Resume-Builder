
import type Education from "../interfaces/Education"
import type Experience from "../interfaces/Experience"
import type Project from "../interfaces/Project"
import type TQTranscript from "../interfaces/TQTranscript"

export default class StorageService{

    static async store(transcript: TQTranscript){
        const converted = {
            profile: transcript.profile,
            education: transcript.education.map((ed : Education) => ({...ed, startDate: ed.startDate?.valueOf(), endDate: ed.endDate?.valueOf()})),
            experience: transcript.experience.map((ex : Experience) => ({...ex, startDate: ex.startDate?.valueOf(), endDate: ex.endDate?.valueOf()})),
            projects: transcript.projects.map((pr : Project) => ({...pr, startDate: pr.startDate?.valueOf(), endDate: pr.endDate?.valueOf()})),
            skills: transcript.skills
        }
        chrome.storage.local.set({'store' : converted})
        console.log(converted)
    }

    static async load() : Promise<TQTranscript> {
        const strings = (await chrome.storage.local.get('store')).store
        const transcript : TQTranscript = {
            profile: strings.profile,
            education: strings.education.map((ed : any) => ({...ed, startDate: new Date(ed.startDate), endDate: new Date(ed.endDate)})),
            experience: strings.experience.map((ex : any) => ({...ex, startDate: new Date(ex.startDate), endDate: new Date(ex.endDate)})),
            projects: strings.projects.map((pr : any) => ({...pr, startDate: new Date(pr.startDate), endDate: new Date(pr.endDate)})),
            skills: strings.skills
        }
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