import ProfileCard from "../layout/ProfileCard";

function RankPage() {
  return (
    <div>
      <ProfileCard />
      <h2>Classement des joueurs</h2>
      <table className="classement-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jean</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RankPage;
