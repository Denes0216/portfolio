export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_7s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_9s_ease-in-out_infinite] animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[float_8s_ease-in-out_infinite] animation-delay-4000"></div>
    </div>
  );
}
