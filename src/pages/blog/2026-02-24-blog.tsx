import { BlogWrapper } from "@/components/blog/BlogWrapper";
import { BlogContent } from "@/components/blog/BlogContent";
import NextLink from "next/link";
import Head from "next/head";

export default function BlogPost() {
  const title = "The Year AI Stopped Being a Shortcut and Started Being Your Baseline";
  const description = "30% of Google's code. 25% of Microsoft's code. What happens when AI coding stops being optional and becomes mandatory?";
  const url = "https://kkshitij.vercel.app/blog/2026-02-24-blog";

  return (
    <>
      <Head>
        <title>{title} | Kshitij</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="tech, AI, programming, web development" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
      </Head>
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
                The Year AI Stopped Being a Shortcut and Started Being Your Baseline
              </header>
            </div>
            <p className="text-secondary text-base">24 Feb 2026</p>
          </div>

          <p className="mt-8">
            Two years ago, using AI to write code felt like cheating. It was a productivity hack—something you'd admit to in confidence over coffee, not something you'd put in your resume. Today? If you're not using it, you're falling behind.
          </p>

          <p className="mt-6">
            The numbers are undeniable. Microsoft's chief architect says AI writes 30% of their production code. Google's pulling 25%. Meta's entire vision for the future is most code written by AI agents. This isn't speculation anymore—this is how software gets built in 2026.
          </p>

          <p className="mt-6">
            But here's what changed: it stopped being optional.
          </p>

          <h3 className="font-bold text-lg mt-8">From Tool to Teammate</h3>

          <p className="mt-4">
            The first generation of AI coding assistants were autocomplete on steroids. Useful, sure. But optional. You could ignore them and still ship fast. Not anymore.
          </p>

          <p className="mt-6">
            The gap between developers using AI and developers not using AI isn't 10% faster anymore. It's not even 50% faster. I've watched teams go from week-long sprints to shipping in days. Not because they're smarter. Because they're treating AI like a pair programmer that never sleeps, never gets sick, and never forgets context.
          </p>

          <p className="mt-6">
            And the industry knows it. New job postings aren't asking "Do you know React?" They're asking "How do you work with AI coding assistants?" TypeScript 7.0 is being built natively in Rust, delivering 10x compile speed improvements—optimized for AI-assisted development. Rolldown bundlers are cutting build times from 2.5 minutes to 40 seconds. The entire toolchain is being redesigned around the assumption that AI is writing most of the code.
          </p>

          <h3 className="font-bold text-lg mt-8">What This Means for You</h3>

          <p className="mt-4">
            If you're still sitting down to write every line yourself, you're competing in yesterday's game. The skill isn't "write fast code" anymore. It's:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Know what to ask the AI to build</li>
            <li>Understand the code it generates well enough to trust it or fix it</li>
            <li>Stitch together massive systems from AI-generated components faster than anyone else</li>
            <li>Stay creative while the AI handles the mechanical parts</li>
          </ul>

          <p className="mt-6">
            The developers winning right now? They've accepted that their job description changed. They're not fighting it.
          </p>

          <h3 className="font-bold text-lg mt-8">The Real Shift</h3>

          <p className="mt-4">
            What strikes me most is that this isn't hype anymore. We're past the "AI is coming" phase. We're in the "AI is already here and reshaping what it means to be a developer" phase.
          </p>

          <p className="mt-6">
            The Year of Truth for AI isn't about AI getting better. It's about us getting real. Stop asking "Should I use AI?" Start asking "How do I use it better than the next person?"
          </p>

          <p className="mt-6">
            Build more. Ship faster. Let the AI handle the boilerplate. Your job isn't to write code anymore—it's to architect, validate, and ship better systems than anyone else in the room.
          </p>

          <p className="mt-6">
            Welcome to 2026.
          </p>

          <p className="text-secondary mt-8">
            — kshitij
          </p>
        </BlogContent>
      </BlogWrapper>
    </>
  );
}
