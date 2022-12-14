import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Table from "./Table";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/*<!-- Main Content -->*/}
      <div id="content">
        <TopBar />
        <ContentRowTop />
      </div>
      <Table />
      <Footer />
    </div>
  );
}

export default ContentWrapper;
