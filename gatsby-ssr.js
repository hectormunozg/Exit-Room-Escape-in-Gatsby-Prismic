/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

const turitop = [
  <script
    id="js-turitop"
    src="https://app.turitop.com/js/load-turitop.min.js"
    data-company="E247"
    data-ga="no"
    data-buttoncolor="green"
    data-afftag="ttafid"
    type="text/javascript"
  />,
]

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(turitop)
}
