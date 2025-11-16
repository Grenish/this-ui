import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh h-full bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center relative">
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px] bg-[radial-gradient(ellipse,rgba(255,255,255,0)_0%,rgba(255,245,230,0.3)_45%,rgba(255,255,255,0.75)_100%)]" />
      <div className="w-full min-h-96 relative flex flex-col items-center justify-start">
        <h1 className="text-9xl font-semibold text-background font-adore">
          ThisUI
        </h1>
        <p className="text-xl text-background max-w-2xl text-center">
          Your home for modern, polished UI. Built on top of shadcn and shaped
          into a smoother, more consistent system that helps you design and
          build faster.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <Button variant={"outline"} size={"sm"}>
            Get Started
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            View Components
          </Button>
        </div>
      </div>
    </div>
  );
}
