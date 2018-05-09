import StandaloneLayout from "./layout"
import TopbarPlugin from "plugins/topbar"
import FooterPlugin from "plugins/footer"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

let preset = [
  TopbarPlugin,
  ConfigsPlugin,
  FooterPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  }
]

module.exports = preset
