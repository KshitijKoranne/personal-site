import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import Head from "next/head";

export default function Software() {
  return (
    <>
      <Head>
        <title>Software | Kshitij Koranne</title>
        <meta
          name="description"
          content="Software and apps built by Kshitij Koranne"
        />
      </Head>
      <PageWrapper>
        <PageContent>
          <div className="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
            <div className="flex flex-col gap-2">
              <h3 className="leading-none font-bold">softwares / apps</h3>
              <div className="ml-3 flex flex-col gap-3">
                <div>
                  <p className="font-medium">
                    <a
                      href="https://aztools.in"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      AZ Tools
                    </a>
                  </p>
                  <p className="text-tertiary text-xs">— More than 100 free no-login tools</p>
                </div>
                <div>
                  <p className="font-medium">
                    <a
                      href="https://wastemytime.fun"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      wastemytime.fun
                    </a>
                  </p>
                  <p className="text-tertiary text-xs">— Fun & Interactive time wasting activities</p>
                </div>
                <div>
                  <p className="font-medium">
                    <a
                      href="https://github.com/KshitijKoranne/personal-site/releases/download/SuperAnnotate-ver.1.0.0/SuperAnnotate-Windows.zip"
                      target="_blank"
                      rel="noreferrer noopener"
                      download
                    >
                      SuperAnnotate
                    </a>
                  </p>
                  <p className="text-tertiary text-xs">— Beautiful Screen Annotations Made Effortless</p>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
    </>
  );
}
