const url = `https://24.javascript.pages.academy/kekstagram/data`

class API {
  private url: string;

  constructor(url: string) {
    this.url = url
  }


  fetchData() {
    return fetch(this.url, {
      method: 'GET'
    }).then(res => res.json()).then(data => data).catch((e)=> console.log(e.text))
  }
}

export const apiServices = new API(url)



