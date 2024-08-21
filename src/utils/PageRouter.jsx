import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "../components/Home"
import ErrorPage from "../components/ErrorPage"
import Community from "../components/Community"
import Sponsorships from "../components/Sponsorships"
import SponsorshipRequest from "../components/Sponsorships/SponsorshipRequest.jsx"
import Hackathons from "../components/Hackathons"
import Seminars from "../components/Seminars"
import Login from "../components/Login"
import OrcaTeaches from "../components/OrcaTeaches/index.jsx"
import ClubCal from "../components/ClubCal"
import CreateHackathon from "../components/Hackathons/CreateHackathon"
import CreateSeminar from "../components/Seminars/CreateSeminar"
import BasicLesson1 from "../components/OrcaTeaches/Basics/Lessons1.jsx"
import BasicLesson2 from "../components/OrcaTeaches/Basics/Lessons2.jsx"
import ProjectBasic from "../components/OrcaTeaches/Basics/ProjectBasics.jsx"
import IntermediateLesson1 from "../components/OrcaTeaches/Intermediate/Lessons1.jsx"
import IntermediateLesson2 from "../components/OrcaTeaches/Intermediate/Lessons2.jsx"
import ProjectIntermediate from "../components/OrcaTeaches/Intermediate/ProjectIntermediate.jsx"
import AdvancedLesson1 from "../components/OrcaTeaches/Advanced/Lesson1.jsx"
import AdvancedLesson2 from "../components/OrcaTeaches/Advanced/Lesson2.jsx"
import ProjectAdvanced from "../components/OrcaTeaches/Advanced/ProjectAdvanced.jsx"
import Whiteboard from "../components/Whiteboard/index.jsx"

function PageRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/community",
      element: <Community />,
    },
    {
      path: "/sponsorships",
      element: <Sponsorships />,
    },
    {
      path: "/sponsorships/submit",
      element: <SponsorshipRequest />,
    },
    {
      path: "/seminars",
      element: <Seminars />,
    },
    {
      path: "/seminars/create",
      element: <CreateSeminar />,
    },
    {
      path: "/hackathons",
      element: <Hackathons />,
    },
    {
      path: "/hackathons/create",
      element: <CreateHackathon />,
    },
    {
      path: "/clubcal",
      element: <ClubCal />,
    },
    {
      path: "/orca-teaches",
      element: <OrcaTeaches />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/orca-teaches/basics-lesson-1",
      element: <BasicLesson1 />,
    },
    {
      path: "/orca-teaches/basics-lesson-2",
      element: <BasicLesson2 />,
    },
    {
      path: "/orca-teaches/basics-project",
      element: <ProjectBasic />,
    },
    {
      path: "/orca-teaches/intermediate-lesson-1",
      element: <IntermediateLesson1 />,
    },
    {
      path: "/orca-teaches/intermediate-lesson-2",
      element: <IntermediateLesson2 />,
    },
    {
      path: "/orca-teaches/intermediate-project",
      element: <ProjectIntermediate />,
    },
    {
      path: "/orca-teaches/advanced-lesson-1",
      element: <AdvancedLesson1 />,
    },
    {
      path: "/orca-teaches/advanced-lesson-2",
      element: <AdvancedLesson2 />,
    },
    {
      path: "/orca-teaches/advanced-project",
      element: <ProjectAdvanced />,
    },
    {
      path: "/whiteboard",
      element: <Whiteboard/>
    }
  ])

  return <RouterProvider router={routes} />
}

export default PageRouter