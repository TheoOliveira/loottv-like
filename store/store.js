import  {createState, useState} from '@hookstate/core'

const globalState = createState({
            defaultDateRange: "",
            day: "",
            topViews: {},
            topLiked: {},
            topMusic: {},
            topMoviesShows: {},
            topGaming: {},
            topNews: {},
            topLearning: {},
            topFashion: {},
            topSports: {},
            isLoading: false,
            isError: false
})

export default function useGlobalState(){
    const state = useState(globalState)
    console.log(state.day.get())
    return ({

        get getDay(){
            return state.day.get()
        },
        get getDefaultDateRange(){
            return state.defaultDateRange.get()
        },
        get getTopViews(){
            return state.topViews.get()
        },
        get getTopLiked(){
            return state.topLiked.get()
        },
        get getTopMusic(){
            return state.topMusic.get()
        },
        get getTopMoviesShows(){
            return state.topMoviesShows.get()
        },
        get getTopGaming(){
            return state.topGaming.get()
        },
        get getTopNews(){
            return state.topNews.get()
        },
        get getTopLearning(){
            return state.topLearning.get()
        },
        get getTopFashion(){
            return state.topFashion.get()
        },
        get getTopSports(){
            return state.topSports.get()
        },
        setDefaultDateRange(value){
            state.defaultDateRange.set(value)
        },
        setDay(value){
            state.day.set(value)
        },
        setTopViews(object){
            state.topViews.set(object)
        },
        setTopLiked(object){
            state.topLiked.set(object)
        },
        setTopMusic(object){
            state.topViews.set(object)
        },
        setTopMoviesShows(object){
            state.topMoviesShows.set(object)
        },
        setTopGaming(object){
            state.topGaming.set(object)
        },
        setTopNews(object){
            state.topNews.set(object)
        },
        setTopLearning(object){
            state.topLearning.set(object)
        },
        setTopFashion(object){
            state.topFashion.set(object)
        },
        setTopSports(object){
            state.topSports.set(object)
        }
    })
}