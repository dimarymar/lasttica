class App {
  constructor() {
    this.port = chrome.extension.connect()
    this.injectScript()
  }

  injectScript() {
    let script = document.createElement('script')

    script.src = chrome.extension.getURL(name)
    document.body.appendChild(script)
  }

  injectConnector(connector) {
    const CONNECTOR = { 'vk.com' }
  }
}
