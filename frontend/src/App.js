import EditEventPage from "./components/EditEventPage.js";
import Error from "./components/Error.js";
import EventDetailPage, { loader as detailLoader, action as deleteEvent } from "./components/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./components/EventsPage.js";
import EventsRoot from "./components/EventsRoot.js";
import HomePage from "./components/HomePage";
import NewEventPage from "./components/NewEventPage";
import RootLayout from "./components/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as eventAction } from "./components/EventForm.js";

const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  children: [
   { index: true, element: <HomePage /> },
   {
    path: "events",
    element: <EventsRoot />,
    errorElement: <Error />,
    children: [
     {
      index: true,
      element: <EventsPage />,
      loader: eventsLoader,
     },
     {
      path: ":eventId",
      id: "event-detail",
      loader: detailLoader,
      children: [
       {
        index: true,
        element: <EventDetailPage />,
        action: deleteEvent,
       },
       {
        path: "edit",
        element: <EditEventPage />,
        action: eventAction,
       },
      ],
     },
     { path: "new", element: <NewEventPage />, action: eventAction },
    ],
   },
  ],
 },
]);

function App() {
 return <RouterProvider router={router} />;
}

export default App;
