import foto from "../image/foto.jpg";

export default function Hero(){
    return (
    <div className="contaiter mx-auto p-2 text-center">
      <h1 className="text-black-300 font-bold">CV Online</h1>
      <h2 className="text-3xl">Diva Aprillia</h2>
      <Profile />
      <p>Saya adalah seorang Mahasiswa semester 5 jurusan Sistem Informasi di Universitas Masoem.
        Cita-cita saya menjadi orang sukses dan bisa membahagiakan orang tua. 
      </p>
      </div>
    )
}

function Profile() {
    return (
      <img
        src={foto.src}
        alt="Diva Aprillia"
        className="fotoku"
      />
    );
  }