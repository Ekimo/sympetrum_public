"use client";

export function TableSkeleton({
  column = ["loading", "loading"],
  row = 10,
}: {
  column: string[];
  row?: number;
}) {
  return (
    <div className="pb-70">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              {column.map((d, index) => (
                <th key={index} scope="col">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(row)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(column.length)].map((_, colIndex) => (
                  <td key={colIndex}>
                    <div className="skeleton-box"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const BlogSkeleton = () => (
  <div className="blog-area ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row justify-content-center">
            {[...Array(6)].map((_, i) => (
              <div
                className="col-lg-6 col-md-6"
                key={i}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={100}
              >
                <div className="single-blog-item">
                  <div className="blog-image skeleton-loader"></div>
                  <div className="blog-post-content">
                    <div className="skeleton-loader skeleton-title"></div>
                    <div className="skeleton-loader skeleton-text"></div>
                    <div className="skeleton-loader skeleton-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
