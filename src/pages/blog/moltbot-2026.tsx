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
              the year 2026 exploded with AI agents – meet Moltbot
            </header>
          </div>
          <p className="text-secondary text-base">28 Jan 2026</p>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden my-6">
          <Image
            src="/blog/moltbot.png"
            alt="AI autonomous agent illustration"
            fill
            className="object-cover"
          />
        </div>

        <p>
          2026 started with a bang. Not with fireworks, but with an open-source
          AI agent that nobody saw coming. Within days, it went from a GitHub
          repo to the talk of tech Twitter. People called it everything from
          "the future of personal AI" to "a security nightmare waiting to
          happen."
        </p>
        <p>
          Its name? Moltbot. But that wasn't always the name.
        </p>

        <h3 className="font-medium text-lg mt-4">
          The chaotic birth of a viral project
        </h3>
        <p>
          Originally called Clawdbot, this thing was built by Peter Steinberger
          as a personal AI assistant that actually does stuff. Not just chat –
          real actions. Book flights. Check your email. Send reminders. Manage
          your calendar. All from WhatsApp, Telegram, Discord, or iMessage.
        </p>
        <p>
          Then Anthropic (the company behind Claude) stepped in. Trademark
          issues. "Clawd" was too close to "Claude." Fair enough. So overnight,
          the project got renamed to Moltbot.
        </p>
        <p>
          But here's where it gets weird. During the renaming chaos, crypto
          scammers hijacked the old @clawdbot Twitter handle. They pumped out a
          fake token that hit $16 million before crashing 90%. People lost
          money. Steinberger had to publicly distance himself from the whole
          mess.
        </p>

        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          This wasn't just a rebrand – it was a masterclass in how fast things
          can spiral in the crypto-AI intersection.
        </div>

        <h3 className="font-medium text-lg mt-4">
          What makes Moltbot different
        </h3>
        <p>
          Most AI chatbots wait for you to ask something. Moltbot doesn't wait.
          It's proactive. It remembers context. It sends you a morning briefing
          without being asked. It can see your files, run scripts, control your
          browser.
        </p>
        <p>
          And here's the kicker – it runs locally. On your machine. Mac, PC,
          Raspberry Pi, whatever. Your data stays yours. No cloud dependency.
          You're in control.
        </p>
        <p>
          People started calling it "agentic AI" – a system that doesn't just
          generate text, but actually takes action on your behalf. That's the
          promise, anyway.
        </p>

        <h3 className="font-medium text-lg mt-4">Why it went viral</h3>
        <p>
          Timing. Capability. Chaos. Moltbot hit at the perfect moment when
          everyone was tired of "just another chatbot." This thing felt like
          the future – an AI assistant that lives in your messaging apps and
          does real work.
        </p>
        <p>
          Tech Twitter exploded. People started showing off their setups. Some
          even bought Mac minis just to run Moltbot 24/7. The hype was real.
        </p>
        <p>
          But virality came with a price. Security researchers found hundreds
          of publicly exposed Moltbot instances online. Bad configurations. Open
          access. The kind of stuff that makes you wince.
        </p>

        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          With great power comes great responsibility – and apparently, a lot of
          misconfigured servers.
        </div>

        <h3 className="font-medium text-lg mt-4">The security elephant</h3>
        <p>
          Here's the thing nobody wants to talk about loudly: giving an AI
          control over your files, emails, and apps is risky. Prompt injections
          are real. Accidental deletions happen. Credentials can leak.
        </p>
        <p>
          Moltbot requires high system permissions to do its job. That's the
          trade-off. Convenience vs. control. It's like giving someone the keys
          to your house and hoping they only water the plants.
        </p>
        <p>
          Experts are split. Some say this is the natural evolution of AI
          assistants. Others say we're moving too fast without proper
          safeguards. Both are probably right.
        </p>

        <h3 className="font-medium text-lg mt-4">
          What this means for the future
        </h3>
        <p>
          Moltbot isn't perfect. It's messy, it's risky, and it's still rough
          around the edges. But it's also a glimpse of where we're heading.
          Personal AI agents that don't just chat – they act.
        </p>
        <p>
          The open-source nature means it'll keep evolving. Plugins,
          customization, community-driven improvements. It's the kind of project
          that thrives on chaos and creativity.
        </p>
        <p>
          Will it replace your virtual assistant? Probably not yet. But it's
          showing us what's possible when you give AI agency, not just
          intelligence.
        </p>

        <div className="mt-4 px-4 py-3 border-l-4 border-tertiary bg-light text-sm text-primary/75 rounded-r-lg leading-5.5">
          The year 2026 just started, and we've already got autonomous AI
          agents living in our chat apps. Buckle up – it's going to be a wild
          ride.
        </div>

        <h3 className="font-medium text-lg mt-4">My take</h3>
        <p>
          I think the Moltbot explosion is fascinating. Not because it's
          flawless, but because it's real. People are actually using it,
          breaking it, fixing it, and building on it. That's how innovation
          happens.
        </p>
        <p>
          Sure, there are security concerns. Yes, the crypto scam thing was
          unfortunate. But at its core, this is developers experimenting with
          what AI agents can actually do when given room to breathe.
        </p>
        <p>
          Would I run it on my main machine right now? Probably not without
          serious sandboxing. But am I excited to see where this goes? Absolutely.
        </p>
        <p>
          The future isn't just about smarter chatbots. It's about AI that
          takes action. And Moltbot, messy as it is, might just be the first
          real taste of that future.
        </p>
      </BlogContent>
    </BlogWrapper>
  );
}
