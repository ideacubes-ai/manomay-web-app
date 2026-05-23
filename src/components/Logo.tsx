import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function Logo({ className = "", iconClassName = "", textClassName = "" }: LogoProps) {
  // Replace the image src with your uploaded logo path (e.g., "/logo.png" or "/logo.svg")
  // If you upload an image via the chat, I can update this path for you.
  const logoUrl = "/logo.svg";

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {logoUrl ? (
        <img src={logoUrl} alt="Manomay Logo" className={`h-11 md:h-[62px] w-auto ${iconClassName}`} />
      ) : (
        <>
          <div className={`w-8 h-8 bg-brand rounded-sm flex items-center justify-center text-white font-bold text-xl ${iconClassName}`}>M</div>
          <span className={`font-bold text-xl tracking-tight text-slate-900 ${textClassName}`}>MANOMAY</span>
        </>
      )}
    </Link>
  );
}
