import ArrowRight from "@/assets/arrow-right.svg";

const Panner = () => {
  return (
    <div className="bg-black inline-flex w-full justify-center gap-2 p-3">
      <p className="text-white/60 capitalize">
        your workflow and boost your productivity
      </p>
      <div className="flex items-center gap-2 text-white">
        <p>Get started for free</p>
        <ArrowRight className="size-4" />
      </div>
    </div>
  );
};

export default Panner;
