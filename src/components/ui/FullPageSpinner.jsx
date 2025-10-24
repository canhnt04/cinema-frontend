import Overlay from "./Overlay";
const FullPageSpinner = () => (
  <Overlay>
    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </Overlay>
);

export default FullPageSpinner;
