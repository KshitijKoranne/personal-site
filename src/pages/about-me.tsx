import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { CurrentAge } from "@/components/more/CurrentAge";

export default function Home() {
  return (
    <PageWrapper>
      <PageContent>
        <div className="flex flex-col gap-6 text-sm">
          <div className="flex flex-col">
            <p className="mb-2">
              you clicked it, you got it. here&apos;s some more:
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">fun facts</h3>
            <div className="ml-3">
              <p>
                - i&apos;m <CurrentAge /> years old
              </p>
              <p>- i am an avid League of Legends (LoL) fan, following the game since 2011</p>
              <p>
                - i wanted to be a developer but somehow ended up pursuing pharmacy
              </p>
              <p>- i am married and have a cute daughter</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">other links</h3>
            <div className="ml-3">
              <p>
                -{" "}
                <a
                  href="https://music.apple.com/in/playlist/kshitijs-favs/pl.u-06oxp93CYKjMKMj"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  apple music playlist
                </a>
              </p>
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
