"use client";

export default function PersonalNote() {
  return (
    <section className="personal-note">
      <div className="note-page">
        <div className="note-content">
          <p>
            "<strong>Happy Birthday my cheesecake🧀</strong>. All of this is me
            trying to create something for you from what I know, just to make
            you feel special, coz you are special. I know maine teko pta nhi
            kitni baar bola h, but still I'm telling you — you are my favourite
            person, my favourite cousin, and it'll always be like this."
          </p>

          <p>
            "You know, whenever something happens, mai sbse phle tujhe hi
            batata. And mai tujhe vo sb v batata jo mujhe strictly mna hota kisi
            ko v batana, coz I don't want to keep secrets from you"
          </p>

          <p>
            "You know jb hum 1st time properly mile the, I never thought ki
            hamara itna achha bond hoga and mai aise itna frankly sb kuchh
            discuss kr paunga. Meko aisa tha ki jaise sare cousins h, vaise tu v
            h — like aise jb kbhi milenge to thora bhut hi hello and then avoid.
            But then I got to know you, and tb meko pta chla ki nhi, tu baki sb
            ki trh nhi h. You are different. And the rest is history 😁"
          </p>

          <p>
            "Also pta h, mai aise excited rehta hu for you to yap. Meko mja ata
            h jb tu aise cheeje batati h. And you know I'm waiting ki hum next
            kb milenge. Aise nhi h ki milke hum kuch extraordinary kr lete h,
            but still, samne se baat krne me jada mja ata h."
          </p>
          <p>
            "Also, I'm not going to make it long ki tu padhte-padhte bore ho
            jay. So I'm ending it here. And lastly...{" "}
            <strong>Happy Birthday, babu..... ❤️</strong>"
          </p>
        </div>
      </div>

      <style jsx>{`
        .personal-note {
          width: 100%;
          min-height: 100vh;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 40px;
          box-sizing: border-box;
        }

        .note-page {
          position: relative;
          width: min(92vw, 1500px);
          aspect-ratio: 1658 / 911;
          background-image: url("/pages/burnedPage.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
          flex-shrink: 0;
        }

        .note-content {
          position: absolute;
          left: 17%;
          right: 17%;
          top: 18%;
          bottom: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #292019;
          font-family: "Lora", Georgia, "Times New Roman", serif;
          font-size: clamp(16px, 1.35vw, 22px);
          line-height: 1.5;
          font-weight: 400;
          text-align: left;
        }

        .note-content p {
          margin: 0 0 10px;
        }

        .note-content p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 700px) {
          .personal-note {
            padding: 20px 10px;
          }

          .note-page {
            width: 96vw;
          }

          .note-content {
            left: 17%;
            right: 17%;
            top: 16%;
            bottom: 14%;
            font-size: 11px;
            line-height: 1.55;
          }

          .note-content p {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
