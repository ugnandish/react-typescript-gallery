import "./styles.css";

import LazyImage from "../components/LazyImage/LazyImage";
import { data } from "../constant/data";

export default function App() {
  return (
    <div data-test-id="component-app" className="container">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="flexbox">
        {data.map((item, index) => (
          <LazyImage src={item.src} key={index} />
        ))}
      </div>
    </div>
  );
}
