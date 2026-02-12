import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CreateActivityForm } from "@/components/create-activity-form"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CreateActivityForm />
      </main>
      <Footer />
    </div>
  )
}
