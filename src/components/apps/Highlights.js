import Link from "next/dist/client/link";
const Highlights = ({ highlights: { dec, img, title } }) => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-body">
          <div className="profile-blog">
            <h5 className="text-primary d-inline">Today Highlights</h5>
            <img src={img} alt="" className="img-fluid mt-4 mb-4 w-100" />
            <h4>
              <Link href="/apps/post-details">
                <a className="text-black">{title}</a>
              </Link>
            </h4>
            <p className="mb-0">{dec}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
