import { SRLWrapper } from "simple-react-lightbox";
const Interest = ({ interest }) => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-body">
          <div className="profile-interest">
            <h5 className="text-primary d-inline">Interest</h5>
            <SRLWrapper>
              <div className="row mt-4 sp4" id="lightgallery">
                {interest &&
                  interest.map((d, i) => (
                    <a
                      key={i}
                      href={d}
                      data-exthumbimage={d}
                      data-src={d}
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      <img src={d} alt="" className="img-fluid" />
                    </a>
                  ))}
              </div>
            </SRLWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
