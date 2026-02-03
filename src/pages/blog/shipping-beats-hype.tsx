import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { BlogContent } from "@/components/blog/BlogContent";
import NextLink from "next/link";

export default function BlogPost() {
  return (
    <BlogWrapper>
      <BlogContent>
        <div>
          <div className="flex items-center gap-3 mt-8">
            <NextLink
              href="/blog"
              shallow={true}
              className="hover:text-primary text-tertiary cursor-pointer transition-colors duration-100"
            >
              ←
            </NextLink>
            <header className="font-bold text-2xl">
              shipping beats hype. why small tools win.
            </header>
          </div>
          <p className="text-secondary text-base">3 Feb 2026</p>
        </div>

        <p className="mt-8">
          I see a lot of developers obsessed with building the next "AI-powered SaaS startup."
        </p>

        <p>
          They spend months planning, perfecting, waiting for the "right idea." Reading frameworks. Taking courses. Waiting for inspiration to strike.
        </p>

        <p>
          Meanwhile, I ship small tools. Boring tools. Tools people actually use.
        </p>

        <h3 className="font-medium text-lg mt-6">
          the tools i built
        </h3>

        <p>
          Quick Chess — play chess without leaving your code editor.
        </p>

        <p>
          Quick Symbols — insert special characters (°, ℃, μ) without googling.
        </p>

        <p>
          YT Snap — extract YouTube thumbnails in one click.
        </p>

        <p>
          X Location Reveal — see where a tweet was posted from.
        </p>

        <p>
          Tab Time Machine — restore closed tabs with scroll position intact.
        </p>

        <p>
          None of them are glamorous. None of them went viral. None of them required VC funding or a grand pitch. Some generate a bit of revenue through tips and ads. Most just solve a real problem for real people.
        </p>

        <h3 className="font-medium text-lg mt-6">
          why small tools win
        </h3>

        <p>
          <strong>You can build them in days, not months.</strong> No need for perfect architecture or months of planning. Quick Chess took me 8 hours. Done.
        </p>

        <p>
          <strong>You validate the idea with real users immediately.</strong> Ship it, see who uses it, listen to feedback. No guessing.
        </p>

        <p>
          <strong>You generate revenue while improving.</strong> While you're iterating based on user feedback, people are already paying or using them.
        </p>

        <p>
          <strong>You build credibility.</strong> Shipping matters more than talking. When you have 5 shipped products, people believe you.
        </p>

        <p>
          <strong>You compound.</strong> Tool #1 → Tool #2 → Tool #3. Each one feeds into the next. Your personal brand becomes "the person who ships."
        </p>

        <h3 className="font-medium text-lg mt-6">
          the contrarian take
        </h3>

        <p>
          Spend less time planning. More time shipping.
        </p>

        <p>
          Your first tool doesn't need to be perfect. It needs to solve one problem really well. Do that. Release it. Listen to feedback. Improve.
        </p>

        <p>
          Repeat 5 times. Now you have 5 income streams, a body of work, and a brand.
        </p>

        <p>
          That's the path forward.
        </p>

        <p className="text-secondary mt-8">
          — kshitij
        </p>
      </BlogContent>
    </BlogWrapper>
  );
}
