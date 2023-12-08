import moment from "moment";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteInvoiceItem, editInvoiceData } from "../../../redux/action/apps";
import ProductItemModal from "./ProductItemModal";
// import ProductItemModal from "./ProductItemModal";
const InvoiceModal = ({
  modal,
  modalChange,
  editData,
  editInvoiceData,
  invoiceItems,
  deleteInvoiceItem,
}) => {
  const [data, setData] = useState({
    fromname: editData ? editData.fromname : "",
    fromlocation: editData ? editData.fromlocation : "",
    fromemail: editData ? editData.fromemail : "",
    fromphn: editData ? editData.fromphn : "",
    status: editData ? editData.status : "",
    toemail: editData ? editData.toemail : "",
    tolocation: editData ? editData.tolocation : "",
    toname: editData ? editData.toname : "",
    tophn: editData ? editData.tophn : "",
    vat: editData ? editData.vat : "",
    discount: editData ? editData.discount : "",
    date: editData ? moment(editData.date).format("yyyy-MM-DD") : "",
    items: invoiceItems ? invoiceItems : [],
  });
  const [modal_, setModal_] = useState(false);
  const [editData_, setEditData_] = useState(null);
  const [itemTitle, setItemTitle] = useState("Update");
  useEffect(() => {
    setData({
      fromname: editData ? editData.fromname : "",
      fromlocation: editData ? editData.fromlocation : "",
      fromemail: editData ? editData.fromemail : "",
      fromphn: editData ? editData.fromphn : "",
      status: editData ? editData.status : "",
      toemail: editData ? editData.toemail : "",
      tolocation: editData ? editData.tolocation : "",
      toname: editData ? editData.toname : "",
      tophn: editData ? editData.tophn : "",
      vat: editData ? editData.vat : "",
      discount: editData ? editData.discount : "",
      date: editData ? moment(editData.date).format("yyyy-MM-DD") : "",
      items: invoiceItems ? invoiceItems : [],
    });
  }, [editData]);

  const {
    fromemail,
    fromname,
    fromlocation,
    fromphn,
    status,
    toemail,
    toname,
    tophn,
    tolocation,
    discount,
    date,
    vat,
    items,
  } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = () => {
    editInvoiceData({
      ...data,
      items,
      date: moment(date).format("DD/MM/yyyy"),
      qrCode: editData && editData.qrCode,
      btcConvert: editData && editData.btcConvert,
    });
  };
  return (
    <Fragment>
      <Modal show={modal} onHide={() => modalChange()}>
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Invoice</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={() => modalChange()}
            >
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="row">
                <div className="col-6">
                  <h4 className="text-black font-w600">Form :</h4>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fromname"
                      placeholder="Name"
                      value={fromname}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fromlocation"
                      placeholder="Location"
                      value={fromlocation}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="fromemail"
                      placeholder="Email"
                      value={fromemail}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fromphn"
                      value={fromphn}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <h4 className="text-black font-w600">To :</h4>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="toname"
                      placeholder="Name"
                      value={toname}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Location <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tolocation"
                      placeholder="Location"
                      value={tolocation}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="toemail"
                      placeholder="Email"
                      value={toemail}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="tophn"
                      value={tophn}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Status <span className="required">*</span>
                    </label>
                    <select
                      name="status"
                      value={status}
                      onChange={(e) => onChange(e)}
                      class="form-control default-select"
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text-black font-w600">
                      Date <span className="required">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={date}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Vat <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="vat"
                      placeholder="Vat"
                      value={vat}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="text-black font-w600">
                      Discount <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="discount"
                      placeholder="Discount"
                      value={discount}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
              </div>
            </form>
            {modal_ && (
              <ProductItemModal
                editData={editData_}
                changeModal={() => setModal_(false)}
                itemTitle={itemTitle}
              />
            )}
            <div className="col-12">
              <h4 className="text-black font-w600">Items</h4>
              <table className="table  w-100">
                <thead>
                  <tr>
                    <th>
                      <strong>NO.</strong>
                    </th>
                    <th>
                      <strong>NAME</strong>
                    </th>

                    <th>
                      <strong>Price</strong>
                    </th>
                    <th>
                      <strong>Qty</strong>
                    </th>
                    <th>
                      <strong>Total</strong>
                    </th>
                    <th>
                      <strong>Action</strong>
                    </th>
                  </tr>
                </thead>
                <tbody id="bs_customers_all">
                  {invoiceItems &&
                    invoiceItems.map((table, i) => (
                      <tr key={i}>
                        <td>
                          <strong>{i + 1}</strong>
                        </td>
                        <td>{table.name}</td>
                        <td>{table.price}</td>
                        <td>{table.qty}</td>
                        <td>{Number(table.qty) * Number(table.price)}</td>

                        <td>
                          <div className="d-flex">
                            <Link href="javascript:void(0)">
                              <a
                                onClick={() => {
                                  setModal_(true);
                                  setEditData_({ table, id: i });
                                  setItemTitle("Update");
                                }}
                                className="btn btn-primary shadow btn-xs sharp mr-1"
                              >
                                <i className="fa fa-pencil" />
                              </a>
                            </Link>
                            <Link href="javascript:void(0)">
                              <a
                                className="btn btn-danger shadow btn-xs sharp"
                                onClick={() => deleteInvoiceItem(i)}
                              >
                                <i className="fa fa-trash" />
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <button
                className="btn btn-info text-right"
                onClick={() => {
                  setModal_(true);
                  setEditData_({ table: {} });
                  setItemTitle("Add");
                }}
              >
                Add item
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger light"
              data-dismiss="modal"
              onClick={() => modalChange()}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
            >
              Update Invoice
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editInvoiceData, deleteInvoiceItem })(
  InvoiceModal
);
