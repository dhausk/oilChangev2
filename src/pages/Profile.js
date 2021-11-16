import '../styling/LandingStyle.css';

function Profile() {
  return (
    <article className="SignedInProfile">
      <section>
        <h2>User Name</h2>
      </section>
      <section>
        <h3>users Vehicles</h3>
      </section>
      <section>
        <h3>users costs total for year</h3>
      </section>
    </article>
  );
}

// display user name, take in props? or make api call from component mounting and display here. for 
// name of user 
// list vehicles
// display total money spent per year for all vehicles
// 

export default Profile;
