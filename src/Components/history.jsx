function History_game({ history }) {
  return (
    <div>
      <div className={`grid-cols-1 place-items-center pt-7 ${history.length>0?'grid':'hidden'}`}>
        <table className=" text-lg">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((value, index) => (
              <tr className="text-center" key={index}>
                <td className="px-3 md:px-8">{index + 1}</td>
                <td className="px-3 md:px-8">{value.scor}</td>
                <td className="px-3 md:px-8">{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History_game;
