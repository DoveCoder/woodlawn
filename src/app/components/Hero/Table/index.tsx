const Table = () => {
  return(
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Class</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Little Codets (3-5yrs)</th>
            <th>5:30pm-6pm</th>
            <th>5pm-5:30pm</th>
            <th>5:30pm-6pm</th>
            <th>5pm-5:30pm</th>
            <th>5:30pm-6pm</th>
          </tr>
          <tr>
            <th>Karate Kidz Basic (6-12yrs)</th>
            <th>6:30pm-7:15pm</th>
            <th>6:45pm-7:30pm</th>
            <th>6:30pm-7:15pm</th>
            <th>6:45pm-7:30pm</th>
            <th>6:30pm-7:15pm</th>
          </tr>
          <tr>
            <th>Karate Teen (13-17yrs) & Adult Martial Arts</th>
            <th>7:30pm-8:15pm</th>
            <th>7:30pm-8:15pm <b>Sensei Anthony</b></th>
            <th>7:30pm-8:15pm</th>
            <th>7:30pm-8:15 <b>Sensei Anthony</b></th>
          </tr>
          <tr>
            <th>Adult Cardio</th>
            <th></th>
            <th>5:45pm-6:30pm</th>
            <th></th>
            <th>5:45pm-6:30pm</th>
            <th></th>
            <th>10:30am-11:15am</th>
          </tr>
          <tr className="text-red-600">
            <th>Black Belt Training ONLY</th>
            <th>4:30pm-5:30p</th>
            <th></th>
            <th>4:30pm-5:30pm</th>
            <th></th>
            <th>4:30pm-5:30pm</th>
            <th>11:30am-1pm</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
