import RowRiwayat from "./rowRiwayat";


export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pendidikan</h2>
        <div>
          <RowRiwayat jenjang="SD" sekolah="SDN Sukalilah" tahun="2010-2016"/>
          <RowRiwayat jenjang="SMP" sekolah="SMPN 2 Pamulihan" tahun="2016-2019"/>
          <RowRiwayat jenjang="MA" sekolah="MAN 1 Sumedang" tahun="2019-2022"/>
          <RowRiwayat jenjang="SARJANA" sekolah="Ma'soem University" tahun="2022-Sekarang"/>
        </div>
      </div>
    )
}