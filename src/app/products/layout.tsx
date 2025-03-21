import Sidebar from "@/components/Sidebar";
export const metadata = {
  title: "Products Page",
  description: " products page",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
