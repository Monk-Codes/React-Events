import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "./MainNavigation";

function Error() {
 const error = useRouteError();
 let title = "An error occurred";
 let message = "Something went wrong";
 if (error.status === 500) {
  message = error.data.message;
 }
 if (error.status === 404) {
  title = "Not Found";
  message = "No Page Found";
 }
 return (
  <>
   <MainNavigation />
   <PageContent title={title}>
    <p>{message}</p>
   </PageContent>
  </>
 );
}
export default Error;
