//
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

//
export class NodeFetchHelper {
    static get = (url, params, headers, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        fetch(url, {
            method: GET,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            })
            .catch((e) => {
                callback(500, {
                    error: e
                })
            })
    }

    static post = (url, params, headers, body, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        fetch(url, {
            method: POST,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            })
            .catch((e) => {
                callback(500, {
                    error: e
                })
            })
    }

    static put = (url, params, headers, body, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        fetch(url, {
            method: PUT,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        })
            .then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            })
            .catch((e) => {
                callback(500, {
                    error: e
                })
            })
    }

    static deletee = (url, params, headers, callback) => {
        if (params) {
            params = new URLSearchParams(params);
            url = url + "?" + params
        }

        fetch(url, {
            method: DELETE,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            })
            .catch((e) => {
                callback(500, {
                    error: e
                })
            })
    }
}
