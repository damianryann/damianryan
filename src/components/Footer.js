export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center p-4">&copy; {currentYear} Red Tower Ltd. All rights reserved.</footer>
  );
}
