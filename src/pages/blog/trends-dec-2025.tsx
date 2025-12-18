import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { BlogContent } from "@/components/blog/BlogContent";
import NextLink from "next/link";
import Image from "next/image";

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
              Living in 2025: The Year AI Agents Took Over
            </header>
          </div>
          <p className="text-secondary text-base">18 Dec 2025</p>
        </div>

        <div className="my-6 w-full relative h-[300px] rounded-lg overflow-hidden border border-slate-700">
             <img
                src="/ai_agents_future_city_1766079127505.png"
                alt="AI Agents City"
                className="object-cover w-full h-full"
             />
        </div>

        <p>
          It's December 2025. Looking back, this year felt... quieter. Not because less happened, but because the noise of "doing" subsided.
        </p>

        <h3 className="font-medium text-lg mt-4">The Rise of the "Silent Web"</h3>
        <p>
           Remember 2024? The endless chat interfaces? We spent hours prompted-engineering ChatGPT just to format a JSON file. Now, in late 2025, direct interaction is rare. Agentic workflows have taken over.
        </p>
        <p>
           We are seeing the first real wave of "set and forget" agents. It's becoming common to have personal models categorize emails, draft replies for trivial matters, and even schedule meetings based on conversational context. The web isn't a place we just <i>go</i> to anymore; for many, it's becoming a layer that acts <i>for</i> them.
        </p>

        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          "The best interface is no interface. 2025 proved that."
        </div>

        <h3 className="font-medium text-lg mt-4">Compute Is the New Currency</h3>
        <p>
           With local LLMs running on our phones (the new Apple M5 chips are insane), privacy is finally making a comeback. We aren't sending every keystroke to the cloud anymore. My "digital twin" lives on my device, knows my secrets, and never leaks them.
        </p>

        <h3 className="font-medium text-lg mt-4">Code Is Ephemeral</h3>
        <p>
           Building small, disposable utilities has become the norm. Need a specific tracker for a hobby? Just describe the problem to an IDE, and it spins up an environment, deploys it, and hands over the link.
        </p>
        <p>
           Coding is shifting away from syntax and towards pure architecture and intent. We are all becoming solution architects.
        </p>

        <p className="mt-6 italic text-secondary">
           Here's to 2026—where hopefully, we finally figure out sustainable fusion energy.
        </p>

      </BlogContent>
    </BlogWrapper>
  );
}
