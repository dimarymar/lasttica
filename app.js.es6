class App {
  constructor() {
    self.injectScript()
  }

  injectScript() {
    let script = document.createElement('script')

    script.src = chrome.extension.getURL(name)
    document.body.appendChild(script)
  }
}
