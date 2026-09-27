"use client";

export default function PersonalNote() {
  return (
    <section className="personal-note">
      <div className="note-page">
        <div className="note-content">
          <p>{/* Your first paragraph */}</p>

          <p>{/* Your second paragraph */}</p>

          <p>{/* Your third paragraph */}</p>

          <p>{/* Your fourth paragraph */}</p>
        </div>
      </div>

      <style jsx>{`
        .personal-note {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .note-page {
          position: relative;
          width: min(1200px, 88vw);
          aspect-ratio: 1658 / 911;
          background-image: url("/pages/burnedPage.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
          flex-shrink: 0;
        }

        .note-content {
          position: absolute;
          width: 62%;
          left: 19%;
          top: 50%;
          transform: translateY(-50%);
          color: #261914;
          font-family: "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive;
          font-size: clamp(16px, 1.35vw, 21px);
          line-height: 1.85;
          text-align: left;
        }

        .note-content p {
          margin: 0 0 28px;
          padding: 0;
        }

        .note-content p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 700px) {
          .personal-note {
            height: 100vh;
            min-height: 100vh;
          }

          .note-page {
            width: 96vw;
          }

          .note-content {
            width: 64%;
            left: 18%;
            top: 50%;
            font-size: 11px;
            line-height: 1.65;
          }

          .note-content p {
            margin-bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
}
