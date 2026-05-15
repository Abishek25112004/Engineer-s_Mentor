import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-cyan w-[300px] h-[300px] top-20 -right-20 opacity-15" />
      <div className="orb orb-violet w-[250px] h-[250px] bottom-20 -left-20 opacity-15" />

      <div className="text-center glass-card rounded-2xl p-12 relative z-10 max-w-md mx-4 hover:!transform-none">
        {/* Large 404 */}
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4 leading-none">
          404
        </h1>

        <p className="text-xl text-foreground mb-2 font-semibold">
          Page not found
        </p>

        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl glow-btn transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
