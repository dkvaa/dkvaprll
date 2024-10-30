import RowRiwayat from "./rowRiwayat";


export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pekerjaan</h2>
        <div>
        <RowRiwayat tahunbekerja="2026" instansi="Universitas Nusa Bangsa" pekerjaan="Admin"/>
          <RowRiwayat tahunbekerja="2028" instansi="TSA (Talent Scouting Academy)" pekerjaan="Back-End Developer"/>
          <RowRiwayat tahunbekerja="2030" instansi="DV Company" pekerjaan="Web Developer"/>
          <RowRiwayat tahunbekerja="2034" instansi="BUMN" pekerjaan="IT Support"/>
        </div>
      </div>
    )
}