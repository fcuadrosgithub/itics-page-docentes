import NavBar from "@/components/nav-bar" 
import DocentesSection from "@/components/docentes/docentes-section" 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <DocentesSection />
      </div>
    </main>
  )
}