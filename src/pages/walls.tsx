import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";

export default function Art() {
  return (
    <PageWrapper>
      <PageContent>
        <div className="flex h-full flex-col gap-6 text-sm">
          <div className="flex flex-col">
            <p className="mb-2">
              some expression of my mind - buying these digital copies greatly helps small devs like me.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             <div className="group relative flex flex-col gap-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-secondary/50">
                <img
                  src="/walls/Geometric Harmony.jpg"
                  alt="Geometric Harmony"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1">
                <a
                  href="/walls/Geometric Harmony.jpg"
                  download="Geometric Harmony.jpg"
                  className="font-serif text-lg text-primary hover:underline hover:decoration-wavy hover:underline-offset-4"
                >
                  Geometric Harmony
                </a>
                <p className="text-xs text-tertiary">4K • Digital Art</p>
              </div>
            </div>
            
            {/* Future wallpapers can be added here */}
          </div>
          

        </div>
      </PageContent>
    </PageWrapper>
  );
}
