import { DashboardProvider } from "@/lib/dashboard-context";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className="flex w-full h-screen overflow-hidden bg-bg-primary">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-support/[0.02] rounded-full blur-3xl pointer-events-none" />
          <Topbar />
          <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-7 lg:py-9 relative z-10">
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
