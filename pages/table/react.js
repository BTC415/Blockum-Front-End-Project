import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import ProfileTableModal from "../../src/components/table/ProfileTableModal";
import GlobalFilteringTable from "../../src/components/table/reactTable/FeesCollectionReactTable";
import PatientReactTable from "../../src/components/table/reactTable/PatientReactTable";
import ProfileReactTable from "../../src/components/table/reactTable/ProfileReactTable";
// import BasicReactTable from "../../src/components/table/reactTable/BasicTable";
import {
  deleteProfileTable,
  getTableData,
} from "../../src/redux/action/tableAction";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const BasicReactTable = dynamic(
  () => import("../../src/components/table/reactTable/BasicReactTable"),
  {
    ssr: false,
  }
);
const reactTable = ({
  pageTitle,
  getTableData,
  basicTable,
  feeTable,
  patientTable,
  profileTable,
  deleteProfileTable,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    getTableData();
    pageTitle("Datatable");
  }, []);
  const [profileModal, setProfileModal] = useState(false);
  const [profileDataForEdit, setProfileDataForEdit] = useState(null);
  return (
    <Fragment>
      <ProfileTableModal
        modal={profileModal}
        modalChange={() => {
          setProfileModal(false);
          setProfileDataForEdit(null);
        }}
        editData={profileDataForEdit}
        tableData={profileTable && profileTable}
      />
      <PageTitle_ active="Datatable" mother="Table" />
      <div className="row" id="dataTable">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Filtering Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {basicTable && <BasicReactTable basicTable={basicTable} />}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Profile React Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {profileTable && (
                  <ProfileReactTable profileTable={profileTable} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Fees Collection</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {feeTable && <GlobalFilteringTable feeTable={feeTable} />}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Patient Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {patientTable && (
                  <PatientReactTable patientTable={patientTable} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  basicTable: state.table.basic,
  feeTable: state.table.fees,
  patientTable: state.table.patient,
  profileTable: state.table.profile,
});

export default connect(mapStateToProps, {
  pageTitle,
  getTableData,
  deleteProfileTable,
})(reactTable);
