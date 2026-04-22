import React from "react";

export default function PopularVideos() {
  const videos = [
    {
      title: "Introduction to Ethical Hacking",
      instructor: "John Doe",
      thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    },
    {
      title: "Cybersecurity Basics for Beginners",
      instructor: "Jane Smith",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "Build Your First AI Model",
      instructor: "Michael Lee",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      title: "Full Stack App in 60 Minutes",
      instructor: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Popular Videos</h2>
          <p className="text-muted">
            Learn from top instructors with our most watched lessons
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4">

          {videos.map((video, index) => (

            <div key={index} className="col-lg-3 col-md-6 col-sm-12">

              <div className="video-card h-100">

                {/* THUMBNAIL */}
                <div className="video-thumb position-relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="img-fluid rounded"
                  />

                  {/* PLAY BUTTON */}
                  <div className="play-btn">
                    ▶
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-3">
                  <h6 className="fw-semibold">{video.title}</h6>
                  <p className="text-muted small mb-0">
                    {video.instructor}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .video-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .video-thumb {
          overflow: hidden;
          border-radius: 12px;
        }

        .video-thumb img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .video-card:hover img {
          transform: scale(1.05);
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(90deg, #4f46e5, #06b6d4);
          color: white;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 18px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .video-thumb img {
            height: 180px;
          }
        }

        @media (max-width: 576px) {
          .video-thumb img {
            height: 160px;
          }
        }
      `}</style>

    </section>
  );
}