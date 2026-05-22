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
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <Topbar />
          <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-7 lg:py-9">
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
