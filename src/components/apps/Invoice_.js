import React from "react";
class Invoice_ extends React.Component {
  totalFun = (value) => {
    var sum = 0;
    if (value) {
      let i = 0;
      for (i; i <= value.length; i++) {
        if (value[i]) {
          sum += Number(value[i].price * value[i].qty);
        }
      }
    }
    return sum;
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card mt-3">
            <div className="card-header">
              {" "}
              Invoice{" "}
              <strong>
                {this.props.invoice && this.props.invoice.date}
              </strong>{" "}
              <span className="float-right">
                <strong>Status:</strong>{" "}
                {this.props.invoice && this.props.invoice.status}
              </span>{" "}
            </div>
            <div className="card-body">
              <div className="row mb-5">
                <div className="mt-4 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <h6>From:</h6>
                  <div>
                    {" "}
                    <strong>
                      {this.props.invoice && this.props.invoice.fromname}
                    </strong>{" "}
                  </div>
                  {this.props.invoice &&
                    this.props.invoice.fromlocation
                      .split("/n")
                      .map((l, i) => <div key={i}>{l}</div>)}
                  <div>
                    Email: {this.props.invoice && this.props.invoice.fromemail}
                  </div>
                  <div>
                    Phone: {this.props.invoice && this.props.invoice.fromphn}
                  </div>
                </div>
                <div className="mt-4 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <h6>To:</h6>
                  <div>
                    {" "}
                    <strong>
                      {this.props.invoice && this.props.invoice.toname}
                    </strong>{" "}
                  </div>
                  {this.props.invoice &&
                    this.props.invoice.tolocation
                      .split("/n")
                      .map((l, i) => <div key={i}>{l}</div>)}

                  <div>
                    Email: {this.props.invoice && this.props.invoice.toemail}
                  </div>
                  <div>
                    Phone: {this.props.invoice && this.props.invoice.tophn}
                  </div>
                </div>
                <div className="mt-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">
                  <div className="row align-items-center">
                    <div className="col-sm-9">
                      <div className="brand-logo mb-3">
                        <img
                          className="logo-abbr mr-2"
                          width={50}
                          src="/images/logo.png"
                          alt=""
                        />
                        <img
                          className="logo-compact"
                          width={110}
                          src="/images/logo-text.png"
                          alt=""
                        />
                      </div>
                      <span>
                        Please send exact amount:{" "}
                        <strong className="d-block">0.15050000 BTC</strong>
                        <strong>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</strong>
                      </span>
                      <br />
                      <small className="text-muted">
                        Current exchange rate 1BTC = $6590 USD
                      </small>
                    </div>
                    <div className="col-sm-3 mt-3">
                      {" "}
                      <img
                        src={this.props.invoice && this.props.invoice.qrCode}
                        className="img-fluid width110"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="center">#</th>
                      <th>Item</th>
                      <th>Description</th>
                      <th className="right">Unit Cost</th>
                      <th className="center">Qty</th>
                      <th className="right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.invoice &&
                      this.props.invoiceItems &&
                      this.props.invoiceItems.map((invo, i) => (
                        <tr key={i}>
                          <td className="center">{i + 1}</td>
                          <td className="left strong">{invo.name}</td>
                          <td className="left">{invo.dec}</td>
                          <td className="right">${invo.price}</td>
                          <td className="center">{invo.qty}</td>
                          <td className="right">${invo.price * invo.qty}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-5"> </div>
                <div className="col-lg-4 col-sm-5 ml-auto">
                  <table className="table table-clear">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong>Subtotal</strong>
                        </td>

                        <td className="right">
                          ${" "}
                          {this.totalFun(
                            this.props.invoice &&
                              this.props.invoiceItems &&
                              this.props.invoiceItems
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>
                            Discount (
                            {this.props.invoice && this.props.invoice.discount}
                            %)
                          </strong>
                        </td>
                        <td className="right">
                          $
                          {this.props.invoice &&
                            (
                              (this.totalFun(
                                this.props.invoice &&
                                  this.props.invoiceItems &&
                                  this.props.invoiceItems
                              ) *
                                this.props.invoice.discount) /
                              100
                            ).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>
                            VAT ({this.props.invoice && this.props.invoice.vat}
                            %)
                          </strong>
                        </td>
                        <td className="right">
                          $
                          {this.props.invoice &&
                            (
                              ((this.totalFun(
                                this.props.invoice &&
                                  this.props.invoiceItems &&
                                  this.props.invoiceItems
                              ) -
                                (this.totalFun(
                                  this.props.invoice &&
                                    this.props.invoiceItems &&
                                    this.props.invoiceItems
                                ) *
                                  this.props.invoice.discount) /
                                  100) *
                                this.props.invoice.vat) /
                              (this.props.invoice.vat + 100)
                            ).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>Total</strong>
                        </td>
                        <td className="right">
                          <strong>
                            $
                            {this.props.invoice &&
                              (
                                this.totalFun(
                                  this.props.invoice &&
                                    this.props.invoiceItems &&
                                    this.props.invoiceItems
                                ) -
                                (this.totalFun(
                                  this.props.invoice &&
                                    this.props.invoiceItems &&
                                    this.props.invoiceItems
                                ) *
                                  this.props.invoice.discount) /
                                  100 -
                                ((this.totalFun(
                                  this.props.invoice &&
                                    this.props.invoiceItems &&
                                    this.props.invoiceItems
                                ) -
                                  (this.totalFun(
                                    this.props.invoice &&
                                      this.props.invoiceItems &&
                                      this.props.invoiceItems
                                  ) *
                                    this.props.invoice.discount) /
                                    100) *
                                  this.props.invoice.vat) /
                                  (this.props.invoice.vat + 100)
                              ).toFixed(2)}
                          </strong>
                          <br />
                          <strong>0.15050000 BTC</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Invoice_;
