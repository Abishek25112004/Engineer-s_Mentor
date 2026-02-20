const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground/60 py-10">
      <div className="container mx-auto px-4 text-center">
        <p
          className="text-primary-foreground font-bold text-lg mb-1"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Engineer's Mentor
        </p>

        <p className="text-sm mb-4">
          Expert project guidance for final year engineering students.
        </p>

         <p className="text-primary-foreground mb-4">
          Contact No : 8072287692, 9080420738
        </p>

        <p className="text-primary-foreground mb-4">
          Email : engineersmentorservices@gmail.com
        </p>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} Engineer's Mentor. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
