class Ajax {
    constructor(url, {
        method = 'get',
        data,
        success,
        error
    }) {
        this.url = url;
        this.method = method;
        this.data = data;
        this.success = success;
        this.error = error;
        this.init();
    }
    init() {
        const xhr = new XMLHttpRequest();
        if (this.method === 'get') {
            this.url += this.url.indexOf('?') ? `?${this.dataToString()}` : this.dataToString();
            xhr.open(this.method, this.url);
            xhr.send();
        } else if (this.method === 'post') {
            xhr.open(this.method, this.url);
            xhr.send(this.data);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.success(xhr.responseText);
            }else{
                this.error(xhr);
            }
        }
    }
    dataToString() {
        let result = '';
        for (let key in this.data) {
            result += `${key}=${this.data[key]}&`;
        }
        return result.substring(0, result.length - 1);
    }
    static get(url,data) {
        // es6默认支持Promise  
        return new Promise((resolve,reject)=>{
            new Ajax(url,{
                data,
                success(data){
                    resolve(data);
                },
                error(xhr){
                    reject(xhr);
                }
            })
        })
    }
    static post(url,data) {
        return new Promise((resolve,reject)=>{
            new Ajax(url,{
                data,
                method:'post',
                success(data){
                    resolve(data);
                },
                error(xhr){
                    reject(xhr);
                }
            })
        })
    }
}
