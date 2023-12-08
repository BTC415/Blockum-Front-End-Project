import { Formik } from "formik";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addCustomer } from "../../src/redux/action/dashboard";
const CustomerModal = ({ modal, modalChange, addCustomer }) => {
  const customerSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter a First Name"),
    lastName: Yup.string().required("Please enter a Last Name"),
    address: Yup.string().required("Please enter a Address"),
    totalSpent: Yup.number()
      .typeError("Please enter only digits!")
      .required("Please enter only digits!"),
    lastOrder: Yup.number()
      .typeError("Please enter only digits!")
      .required("Please enter only digits!"),
  });

  return (
    <Modal show={modal} onHide={() => modalChange()}>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Add Contact</h5>
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              address: "",
              totalSpent: "",
              lastOrder: "",
            }}
            validationSchema={customerSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                //  alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              addCustomer(values);
              values = {
                firstName: "",
                lastName: "",
                address: "",
                totalSpent: "",
                lastOrder: "",
              };
              modalChange();
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="text-black font-w500">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.firstName && errors.firstName}
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.lastName && errors.lastName}
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.address && errors.address}
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Total Spent</label>
                  <input
                    type="text"
                    className="form-control"
                    name="totalSpent"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.totalSpent}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.totalSpent && errors.totalSpent}
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Last Order</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastOrder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastOrder}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.lastOrder && errors.lastOrder}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="SAVE"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { addCustomer })(CustomerModal);
