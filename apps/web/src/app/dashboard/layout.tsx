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
      <div
        className="flex w-full h-screen overflow-hidden"
        style={{ backgroundColor: "#F6F3EE" }}
      >
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <Topbar />
          <main
            className="flex-1 overflow-y-auto px-8 lg:px-10 py-8 lg:py-10"
            style={{ backgroundColor: "#F6F3EE" }}
          >
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
