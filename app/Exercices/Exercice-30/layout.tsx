export default function DashboardLayout({
  modal,
  main,
}: Readonly<{
  modal: React.ReactNode;
  main: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {main}
        {modal}
      </body>
    </html>
  );
}
