const reqData = async (url = '', body = undefined, method = 'GET') => {
    console.log("calling")
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body
    })
    return response.json();

};

const reqDatatemp = async (url = '', body = undefined, method = 'GET') => {
    console.log("calling")
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body
    })
    return response.json();

};

const postData = async (accessUrl) => {
    const resData = await reqData(accessUrl, undefined, 'POST')
    return resData;
}

const getDatatemp = async (accessUrl) => {
    const resData = await reqDatatemp(accessUrl, undefined, 'GET')
    console.log("rrrrrrrrrrrrrrrr")
    return resData;
}

const getData = async (accessUrl) => {
    const resData = await reqData(accessUrl, undefined, 'GET')
    console.log("rrrrrrrrrrrrrrrr")
    return resData;
}

export { reqData, postData, getData,getDatatemp };