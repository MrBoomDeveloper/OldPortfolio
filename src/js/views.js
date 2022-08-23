import Header from "./els/header"
import Footer from "./els/footer"

export default (() => {
	customElements.define("site-footer", Footer)
	customElements.define("site-header", Header)
})()