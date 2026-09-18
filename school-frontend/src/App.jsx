import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Academics from './components/Academics'
import Departments from './components/Departments'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Events from './components/Events'
import AdmissionsCTA from './components/AdmissionsCTA'
import Footer from './components/Footer'
import AdmissionForm from './pages/AdmissionForm'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import DepartmentsPage from './pages/DepartmentsPage'
import DepartmentDetail from './pages/DepartmentDetail'
import FacilitiesPage from './pages/FacilitiesPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import LoginPage from './pages/LoginPage'
import DashboardLayout from './dashboard/DashboardLayout'
import AdminDashboard from './dashboard/admin/AdminDashboard'
import adminMenu from './dashboard/admin/adminMenu'
import TeacherDashboard from './dashboard/teacher/TeacherDashboard'
import teacherMenu from './dashboard/teacher/teacherMenu'
import StudentDashboard from './dashboard/student/StudentDashboard'
import studentMenu from './dashboard/student/studentMenu'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Academics />
      <Departments />
      <Facilities />
      <Gallery />
      <Events />
      <AdmissionsCTA />
    </>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:slug" element={<DepartmentDetail />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admission-form" element={<AdmissionForm />} />

        <Route path="/admin" element={<DashboardLayout role="Admin" userName="Jason" menuItems={adminMenu} />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="/teacher" element={<DashboardLayout role="Teacher" userName="Ms. Priya" menuItems={teacherMenu} />}>
          <Route index element={<TeacherDashboard />} />
        </Route>

        <Route path="/student" element={<DashboardLayout role="Student" userName="Ramya" menuItems={studentMenu} />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App