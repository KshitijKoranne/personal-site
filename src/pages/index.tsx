import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <PageContent>
        <div className="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
          <div className="flex flex-col">
            <p className="mb-2">
              I&apos;m a pharmaceutical professional by day and a passionate coder by night. I love being part of the global coding revolution — building tools, experimenting with ideas, and turning late-night curiosity into real projects.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">my principles</h3>
            <div className="ml-3 flex flex-col gap-3">
              <div>
                <p className="font-medium">Create more than you consume.</p>
                <p className="text-tertiary text-xs">— The act of building shapes both the world and the builder.</p>
              </div>
              <div>
                <p className="font-medium">Balance isn&apos;t found — it&apos;s built.</p>
                <p className="text-tertiary text-xs">— Between logic and creativity, between work and passion.</p>
              </div>
              <div>
                <p className="font-medium">Progress over perfection.</p>
                <p className="text-tertiary text-xs">— Every unfinished project is still a step forward in understanding.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">experience</h3>

            <div className="text-primary relative ml-3 flex flex-col gap-1.5">
              <div className="flex flex-col">
                <p>
                  <span className="font-medium">Generating AI slop</span>{" "}
                  <span className="font-normal italic">(2024 - present)</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">python</span>{" "}
                  <span className="font-normal italic">(2021 - present)</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">P.G. in Pharmaceutical Sciences</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">Bachelors of Pharmacy</span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </PageContent>
    </PageWrapper>
  );
}
