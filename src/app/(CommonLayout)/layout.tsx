import SideNavBar from '@components/all/SideNavBar/SideNavBar';

export default function CommonLayoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full flex">
      <SideNavBar />
      {children}
    </div>
  );
}
