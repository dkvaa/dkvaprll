export default function RowRiwayat (props:any) {
    return (
        <div className="border-2 border-blue-400/75 rounded-lg bg-white-600 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-3">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-3">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-3">{props.tahun}</div>
            <div className="col-span-12 md:col-span-3">{props.tahunbekerja}</div>
            <div className="col-span-12 md:col-span-3">{props.instansi}</div>
            <div className="col-span-12 md:col-span-3">{props.pekerjaan}</div>
        </div>
        </div>
        </div>
    );
}