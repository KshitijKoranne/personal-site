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
            <p className="text-tertiary italic">
              coming soon
            </p>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
