import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import AutomaticSelection from "../../src/components/plugins/select2/AutomaticSelection";
import ContainerWidth from "../../src/components/plugins/select2/ContainerWidth";
import DefaultSelectionPlaceholders from "../../src/components/plugins/select2/DefaultSelectionPlaceholders";
import DestroyingTheSelect2Control from "../../src/components/plugins/select2/DestroyingTheSelect2Control";
import DisablingASelect2Control from "../../src/components/plugins/select2/DisablingASelect2Control";
import DisablingOptions from "../../src/components/plugins/select2/DisablingOptions";
import DropdownOptionGroups from "../../src/components/plugins/select2/DropdownOptionGroups";
import DropdownPlacement from "../../src/components/plugins/select2/DropdownPlacement";
import DynamicOptionCreation from "../../src/components/plugins/select2/DynamicOptionCreation";
import FixedOptions from "../../src/components/plugins/select2/FixedOptions";
import LimitingTheNumberOfSelections from "../../src/components/plugins/select2/LimitingTheNumberOfSelections";
import LoadingArrayData from "../../src/components/plugins/select2/LoadingArrayData";
import MultiSelectBoxes from "../../src/components/plugins/select2/MultiSelectBoxes";
import MultiSelectPlaceholders from "../../src/components/plugins/select2/MultiSelectPlaceholders";
import OpeningClosingDropdown from "../../src/components/plugins/select2/OpeningClosingDropdown";
import OpeningTheDropdown from "../../src/components/plugins/select2/OpeningTheDropdown";
import RemainOpenAfterSelection from "../../src/components/plugins/select2/RemainOpenAfterSelection";
import Select2Methods from "../../src/components/plugins/select2/Select2Methods";
import Select2WithLabels from "../../src/components/plugins/select2/Select2WithLabels";
import SingleSelectBoxes from "../../src/components/plugins/select2/SingleSelectBoxes";
import SingleSelectPlaceholders from "../../src/components/plugins/select2/SingleSelectPlaceholders";
import TaggingWithMultiValueSelectBoxes from "../../src/components/plugins/select2/TaggingWithMultiValueSelectBoxes";
import Themes from "../../src/components/plugins/select2/Themes";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const Select2 = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("UC Select 2");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Select" mother="Components" customText={true} />
      <div className="row">
        <SingleSelectBoxes />
        <MultiSelectBoxes />
        <DropdownOptionGroups />
        <DisablingOptions />
        <DisablingASelect2Control />
        <Select2WithLabels />
        <ContainerWidth />
        <Themes />
        <FixedOptions />
        <LoadingArrayData />
        <AutomaticSelection />
        <RemainOpenAfterSelection />
        <DropdownPlacement />
        <LimitingTheNumberOfSelections />
        <DynamicOptionCreation />
        <TaggingWithMultiValueSelectBoxes />
        <SingleSelectPlaceholders />
        <MultiSelectPlaceholders />
        <DefaultSelectionPlaceholders />
        <DestroyingTheSelect2Control />
        <OpeningTheDropdown />
        <OpeningClosingDropdown />
        <Select2Methods />
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Select2);
