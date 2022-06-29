import axios from 'axios';
const KEY = process.env.NEXT_PUBLIC_YOUTUBE_API
let today = new Date()
today.setHours(0,0,0,0)
let yesterday = new Date()
yesterday.setHours(0,0,0,0)
yesterday.setDate(today.getDate() - 1)
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        order:'viewCount',
        regionCode: "US",
        publishedAfter: yesterday.toISOString() ,
        publishedBefore: today.toISOString(),
        key: KEY
    }
})