const solution = (rsp) => {
    const winArr = { 2 : 0, 0 : 5, 5 : 2 }
    const rspArr = [...rsp]
    return rspArr.map(x => winArr[x]).join("")
}