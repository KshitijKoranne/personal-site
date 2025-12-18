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
              are AI tools making us lazy thinkers?
            </header>
          </div>
          <p className="text-secondary text-base">23 Oct 2025</p>
        </div>
        <p>
          everyone keeps saying AI is making us dumber. people panic about
          ChatGPT and Claude doing our thinking for us. but honestly, i think
          we&apos;re worried about the wrong thing.
        </p>
        <p>
          the real question is simple: are you using AI as a crutch or as a
          tool? because there&apos;s a huge difference between the two.
        </p>
        <h3 className="font-medium text-lg mt-4">remember calculators?</h3>
        <p>
          people said calculators would destroy our math skills. and yeah, most
          of us can&apos;t do long division anymore. but did that actually
          matter?
        </p>
        <p>
          calculators freed us from boring arithmetic. we could finally focus
          on understanding what the math actually means. same thing&apos;s
          happening with AI now.
        </p>
        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          memorizing syntax is pointless. understanding how systems work and
          solving real problems - that&apos;s what counts.
        </div>
        <h3 className="font-medium text-lg mt-4">the wrong way to use AI</h3>
        <p>
          here&apos;s the problem: copy-pasting AI code without reading it.
          taking every suggestion without thinking. using it to skip learning
          basics.
        </p>
        <p>
          i&apos;ve watched people paste errors into ChatGPT, copy whatever it
          says, and move on. they never learn what broke or why. that
          <i> is</i> making you worse - not the AI itself, but how you&apos;re
          using it.
        </p>
        <h3 className="font-medium text-lg mt-4">how i actually use it</h3>
        <p>
          i treat AI like a coding buddy. i figure out what i want to build,
          get help writing it, then review everything. AI writes the boring
          stuff. i handle the thinking and architecture.
        </p>
        <p>
          good developers get faster with AI. bad developers just make mistakes
          quicker. the tool makes you more of what you already are.
        </p>
        <h3 className="font-medium text-lg mt-4">what matters now</h3>
        <p>
          nobody cares if you can remember every function name. what matters is
          understanding how things fit together, making good choices, and
          building stuff people need.
        </p>
        <p>
          AI gives you time for the important work. less time fixing typos,
          more time designing better solutions. less boilerplate, more actual
          problem solving.
        </p>
        <p>
          the winners won&apos;t be people who avoid AI. they&apos;ll be the
          ones who learn when to use it and when to think hard on their own.
        </p>
        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          use AI to move faster. just don&apos;t forget to think about{" "}
          <i>what</i> you&apos;re building and <i>why</i>.
        </div>
      </BlogContent>
    </BlogWrapper>
  );
}
