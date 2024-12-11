interface NotesCardProps {
  notes: string;
}

const NotesCard: React.FC<NotesCardProps> = ({ notes }) => {
  // Pecah string menjadi array baris berdasarkan "\n"
  const notesLines = notes.split("\n").filter((line) => line.trim() !== ""); // Hapus baris kosong

  return (
    <div className="bg-white rounded-xl mx-auto my-4 hover:cursor-pointer flex-shrink-0 shadow-md w-3/4 lg:w-2/3 xl:w-1/2 p-6"> {/* Ubah lebar di sini */}
      <h2 className="font-semibold text-2xl text-gray-700 my-4">Notes</h2>
      <div className="flex flex-col">
        {" "}
        {/* Tambahkan flex-col untuk arah vertikal */}
        {notesLines.map((line, index) => (
          <p
            key={index}
            className="text-base font-normal text-gray-700 mb-4 last:mb-0" // Tambahkan margin antar paragraf
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NotesCard;
