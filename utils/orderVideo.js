export default function orderVideo(list){
    return list.sort((a,b) =>
     (Number(a.viewCount) <  Number(b.viewCount) ? 1: -1))
  }