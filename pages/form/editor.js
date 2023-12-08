import { Editor } from "@tinymce/tinymce-react";
import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const FormEditor = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Summernote");
  }, []);
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };
  return (
    <Fragment>
      <PageTitle_ active="Summernote" mother="Form" />
      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Tiny MCE Editor</h4>
            </div>
            <div className="card-body">
              <div className="summernote">
                <Editor
                  initialValue="<p>This is the initial content of the editor</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image code charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | code |link | image | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help ",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(FormEditor);
