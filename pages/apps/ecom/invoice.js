import { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import Invoice_ from "../../../src/components/apps/Invoice_";
import InvoiceModal from "../../../src/components/apps/modal/InvoiceModal";
import PageTitle_ from "../../../src/components/PageTitle";
import { getInvoiceItems, invoiceData } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";
class Invoice extends Component {
  componentDidMount() {
    if (version !== "dark") {
      moodChange();
    }
    this.props.pageTitle("Invoice");
    this.props.invoiceData();
    this.props.getInvoiceItems();
  }
  state = {
    modal: false,
  };
  render() {
    return (
      <Fragment>
        <PageTitle_ active="Blank" mother="Layout" customText={true} />
        <InvoiceModal
          modal={this.state.modal}
          modalChange={() => this.setState({ modal: false })}
          editData={this.props.invoice}
          invoiceItems={this.props.invoiceItems}
        />

        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div className="d-flex">
                <button className="btn btn-success mr-1" onClick={handlePrint}>
                  Print
                </button>
                <button
                  onClick={() => this.setState({ modal: true })}
                  className="btn btn-primary"
                >
                  Edit Invoice
                </button>
              </div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <Invoice_
          invoice={this.props.invoice && this.props.invoice}
          totalFun={this.totalFun}
          ref={(el) => (this.componentRef = el)}
          invoiceItems={this.props.invoiceItems && this.props.invoiceItems}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  invoice: state.apps.invoiceData,
  invoiceItems: state.apps.invoiceItems,
});

export default connect(mapStateToProps, {
  pageTitle,
  invoiceData,
  getInvoiceItems,
})(Invoice);
