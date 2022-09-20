import Footer from "./layout/footer";
import Header from "./layout/header";

export default (() => {
	customElements.define("site-footer", Footer);
	customElements.define("site-header", Header);
})();