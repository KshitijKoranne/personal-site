import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import Head from "next/head";

export default function Software() {
  return (
    <>
      <Head>
        <title>Kshitij's stash !</title>
        <meta
          name="description"
          content="Software and apps built by Kshitij Koranne"
        />
      </Head>
      <PageWrapper>
        <PageContent>
          <div className="text-primary flex flex-col gap-6 text-sm max-md:pb-14">
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
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-primary">SuperAnnotate</p>
                  <p className="text-tertiary text-xs mb-1">— Beautiful Screen Annotations Made Effortless</p>
                  <div className="flex gap-3 text-xs">
                    <a
                      href="https://github.com/KshitijKoranne/personal-site/releases/download/SuperAnnotate-ver.1.0.0/SuperAnnotate-Windows.zip"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-primary hover:underline"
                    >
                      Windows
                    </a>
                    <span className="text-tertiary">|</span>
                    <span className="text-tertiary italic cursor-help" title="Coming Soon">
                      macOS (Coming Soon)
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">
                    <a
                      href="https://yt-snap.vercel.app"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      YTSnap
                    </a>
                  </p>
                  <p className="text-tertiary text-xs">— YouTube Thumbnail Extractor</p>
                </div>
                <div>
                  <p className="font-medium">
                    <a
                      href="https://github.com/KshitijKoranne/good-vibes"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Good Vibe
                    </a>
                  </p>
                  <p className="text-tertiary text-xs mb-1">— A minimal macOS menu bar app for daily quotes</p>
                  <div className="flex gap-3 text-xs">
                    <a
                      href="/GoodVibe.dmg"
                      className="text-primary hover:underline"
                      download
                    >
                      Download for macOS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </PageWrapper>
    </>
  );
}
