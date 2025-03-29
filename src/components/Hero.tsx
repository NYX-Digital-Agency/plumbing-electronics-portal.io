
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const Hero = ({
  title,
  subtitle,
  bgImage,
  bgColor = "bg-idel-dark",
  textColor = "text-white",
  className,
  children,
}: HeroProps) => {
  return (
    <div
      className={cn(
        "relative py-16 md:py-24",
        bgColor,
        textColor,
        className
      )}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {bgImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
