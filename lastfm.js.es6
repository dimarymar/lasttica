class LastfmClient {
  constructor(options) {
    this.apiKey = options.apiKey || console.error('LastfmClient: apiKey is absent')
    this.apiSecret = options.apiSecret || console.error('LastfmClient: apiSecret is absent')
    this.apiUrl = options.apiUrl || 'http://ws.audioscrobbler.com/2.0/'
  }

  getApiSignature(data) {
    let keys = Object.keys(data).sort()
    let nameValue = keys.reduce(function(prev, key) {
      return prev + key + data[key]
    }, '')

    return md5(nameValue + this.apiSecret)
  }

  call(type, data, successCallback, errorCallback, context, async) {
  }
}
