import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "./icons";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 relative">
      <Skeleton className="h-[210px] w-full rounded-md bg-muted-foreground/15" />
      <Icons.spinner className="absolute left-1/2 -translate-x-1/2 top-[45%] -translate-y-1/2 opacity-30" />
    </div>
  );
}
