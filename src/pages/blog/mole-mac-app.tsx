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
              Discovering 'Mole': The Minimal Cleaner My Mac Needed
            </header>
          </div>
          <p className="text-secondary text-base">28 Dec 2025</p>
        </div>

        <p className="mt-6">
          I recently stumbled upon a CLI tool called <a href="https://github.com/tw93/Mole" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Mole</a> while browsing GitHub, and it's quickly become one of my favorite utilities. It basically combines the functionality of CleanMyMac, AppCleaner, and DaisyDisk into a single, lightweight binary.
        </p>

        <h3 className="font-medium text-lg mt-6">Why I Use It</h3>
        <p>
          I've always preferred minimal interfaces over bloated GUIs. Mole is purely command-line based, which means it's fast and doesn't sit in your menu bar eating up RAM. I ran it recently and it effectively cleaned up my system cache, logs, and leftover files from old projects, saving me a significant amount of disk space immediately.
        </p>
        <p>
          The "Smart App Uninstaller" is particularly good—it doesn't just delete the app application but hunts down all those hidden preference files and folders that usually get left behind.
        </p>

        <h3 className="font-medium text-lg mt-6">Installation & Usage</h3>
        <p>
          Since it's a CLI tool, installation is just a one-liner in your terminal:
        </p>

        <div className="bg-[#111] p-4 rounded-md my-4 font-mono text-sm overflow-x-auto border border-white/10">
          curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash
        </div>

        <p>
          Once installed, you can just type <code>mo</code> to see the interactive menu, or run specific commands directly. Here are the ones I use most:
        </p>

        <ul className="list-disc list-inside mt-2 space-y-2 text-secondary">
          <li><code>mo clean</code> — Scans and removes junk files (cache, logs, etc).</li>
          <li><code>mo uninstall</code> — Interactively select and fully remove apps.</li>
          <li><code>mo analyze</code> — Visualizes disk usage to see what's taking up space.</li>
        </ul>

        <p className="mt-6">
          If you're a developer or just someone who likes keeping their Mac tidy without the bells and whistles of commercial software, I highly recommend checking it out.
        </p>

      </BlogContent>
    </BlogWrapper>
  );
}
