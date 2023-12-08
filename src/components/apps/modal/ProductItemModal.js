import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addInvoiceItem, editInvoiceItem } from "../../../redux/action/apps";

const ProductItemModal = ({
  editData,
  editInvoiceItem,
  itemTitle,
  changeModal,
  addInvoiceItem,
}) => {
  const [data, setData] = useState({
    name: editData ? editData.table.name : "",
    price: editData ? editData.table.price : "",
    qty: editData ? editData.table.qty : "",
    dec: editData ? editData.table.dec : "",
  });
  useEffect(() => {
    setData({
      name: editData ? editData.table.name : "",
      price: editData ? editData.table.price : "",
      qty: editData ? editData.table.qty : "",
      dec: editData ? editData.table.dec : "",
    });
  }, [editData]);
  const { name, price, qty, dec } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (itemTitle.toLowerCase() === "update") {
      editInvoiceItem({ id: editData.id, data });
      setData({
        name: "",
        price: "",
        qty: "",
        dec: "",
      });
      changeModal();
    } else {
      addInvoiceItem(data);
      setData({
        name: "",
        price: "",
        qty: "",
        dec: "",
      });
      changeModal();
    }
  };
  return (
    <div className="row">
      <div className="col-12">
        <h4 className="text-black font-w600">{itemTitle} Item</h4>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group ">
            <label className="text-black font-w600">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group ">
            <label className="text-black font-w600">
              Price <span className="required">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={price}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group ">
            <label className="text-black font-w600">
              Qty <span className="required">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="qty"
              value={qty}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group ">
            <label className="text-black font-w600">
              Dec <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="dec"
              value={dec}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group ">
            <input
              type="submit"
              className="btn btn-primary"
              value={`${itemTitle} Item`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { editInvoiceItem, addInvoiceItem })(
  ProductItemModal
);
