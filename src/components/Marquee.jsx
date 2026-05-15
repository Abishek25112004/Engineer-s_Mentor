const Marquee = ({ text = "", speed = 30, className = "" }) => {
  // Repeat text enough times to fill and overflow
  const repeated = Array(6).fill(text).join(" — ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold opacity-[0.04] select-none tracking-tight pr-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {repeated}
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold opacity-[0.04] select-none tracking-tight pr-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
