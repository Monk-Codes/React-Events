import PageContent from "./PageContent";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

function HomePage() {
 return (
  <PageContent title="Start Exploring Events">
   <p>Browse all exclusive events near you</p>
   <NavLink to="/events">
    <button className={classes.btn}>EVENTS</button>
   </NavLink>
  </PageContent>
 );
}

export default HomePage;
