import { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const FundingPlan = () => {
  const [activeSection, setActiveSection] = useState<string | null>("");

  return (
    <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
      <section>
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Funding plan</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            or a note
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11pt]">
            This note is just to plan out the steps while making the product.
          </span>

          <span
            onClick={() => setActiveSection("Seed Funding")}
            className="underline cursor-pointer text-blue-600"
          >
            Next 3 years
          </span>
        </div>

        <section
          className={`mt-6 flex flex-col gap-3 ${
            activeSection === "Seed Funding" ? "" : "hidden"
          }`}
        >
          <hr />

          <div className="mb-2 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-[13pt] font-bold">Seed Funding</h2>
              <span className="text-[11pt] text-gray-600 font-semibold">
                What do we need for seed funding?
              </span>
            </div>

            <div>
              <span
                className="cursor-pointer"
                onClick={() => setActiveSection(null)}
              >
                <BiUpArrowAlt size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[10pt]">
            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Strong Network and Local Relationships
              </span>
              <span className="font-light text-gray-800">
                Stockholm's tech and investment community is relatively
                close-knit. Building personal relationships with local
                investors, attending Stockholm's startup events, and networking
                can be crucial. Warm introductions can sometimes matter more
                than a cold pitch.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Engage with Local Accelerators/Incubators
              </span>
              <span className="font-light text-gray-800">
                Joining renowned local programs like Sting or SUP46 can provide
                startups with both valuable mentorship and a more direct line to
                potential investors.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Clear Market Validation</span>
              <span className="font-light text-gray-800">
                Even in the seed stage, Scandinavian investors appreciate some
                form of validation. This could be in the form of an MVP (Minimum
                Viable Product) with some early traction, customer testimonials,
                or clear and compelling market research.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Local Relevance, Global Potential
              </span>
              <span className="font-light text-gray-800">
                While your solution should address a problem relevant to the
                local market, demonstrating how it can scale or adapt to
                international markets can be a strong selling point.
                Stockholm-based investors are familiar with startups that grew
                from Sweden to global prominence, so positioning your startup in
                a similar light can be advantageous.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Crowdfunding</span>
              <span className="font-light text-gray-800">
                Platforms like Kickstarter or Indiegogo allow you to present
                your idea to the public, and if people believe in it, they can
                pledge money to help you develop it.
              </span>
            </div>

            <span
              onClick={() => setActiveSection("Series A")}
              className="underline cursor-pointer text-blue-600"
            >
              And then
            </span>
          </div>
        </section>

        <section
          className={`mt-6 flex flex-col gap-3 ${
            activeSection === "Series A" ? "" : "hidden"
          }`}
        >
          <hr />

          <div className="mb-2 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-[13pt] font-bold">After Seed funding</h2>
              <span className="text-[11pt] text-gray-600 font-semibold">
                Let's say we raised 500,000 USD, then what?
              </span>
            </div>

            <div>
              <span
                className="cursor-pointer"
                onClick={() => setActiveSection(null)}
              >
                <BiUpArrowAlt size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[10pt]">
            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Hire Key Team Members</span>
              <span className="font-light text-gray-800">
                Early-stage startups benefit from having a hands-on marketer who
                can also handle initial sales efforts, refine the product-market
                fit, and start generating traction and additional Developer(s):
                To assist in scaling the development process.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Solidify Product-Market Fit</span>
              <span className="font-light text-gray-800">
                Engage with your users regularly. Use the feedback to iterate
                and improve the product. The closer you are to achieving a clear
                product-market fit, the more appealing you become to future
                investors.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Drive Growth and Traction</span>
              <span className="font-light text-gray-800">
                Develop a Go-to-Market Strategy with your sales and marketing
                lead, create and implement a strategy to reach your target
                audience and drive initial sales or user acquisition then define
                key performance indicators (KPIs) and monitor them closely. This
                can be user growth, revenue, customer acquisition cost,
                retention rates, etc. Consistent growth in these metrics will be
                crucial for your next funding round.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">Prepare for Series A</span>
              <span className="font-light text-gray-800">
                Ensure you have detailed and realistic financial projections.
                This not only helps in internal planning but is also something
                Series A investors will scrutinize. Build Investor Relationships
                Early, Don't wait until you need the money to start talking to
                potential investors. Network, keep them updated with regular
                progress reports, and seek their advice when possible. This way,
                when you're ready for the next round, you've already fostered
                trust and interest. Develop a Clear Vision: Be ready to
                articulate where you see the company in the next 5-10 years.
                Investors want to know that you're aiming for a sizable market
                and have a clear path to get there.
              </span>
            </div>

            <span
              onClick={() => setActiveSection("Series B")}
              className="underline cursor-pointer text-blue-600"
            >
              And then
            </span>
          </div>
        </section>

        <section
          className={`mt-6 flex flex-col gap-3 ${
            activeSection === "Series B" ? "" : "hidden"
          }`}
        >
          <hr />

          <div className="mb-2 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-[13pt] font-bold">Early-stage startup</h2>
              <span className="text-[11pt] text-gray-600 font-semibold">
                Raising $2 million is a significant milestone, then what's the
                next for further growth?
              </span>
            </div>

            <div>
              <span
                className="cursor-pointer"
                onClick={() => setActiveSection(null)}
              >
                <BiUpArrowAlt size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[10pt]">
            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Scale and Optimize Operations
              </span>
              <span className="font-light text-gray-800">
                Expand the Team Strategically, beyond the core team, time do
                consider departmental leaders and specialists like VPs or
                Directors of Sales, Marketing, Engineering, and possibly a CFO
                to handle more complex financial operations. Infrastructure and
                Technology need to scale with the growth. Ensure you're
                investing in scalable solutions, and consider adopting advanced
                technologies or platforms if they bring competitive advantages.
                Streamline operations to handle increased demand. Implement
                systems and tools to improve efficiency across all departments.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Accelerate Growth and Expand Markets
              </span>
              <span className="font-light text-gray-800">
                Consider expanding to new regions or countries. Diversify the
                Product Line, Explore new features, products, or services that
                cater to the needs of your existing customers or attract new
                segments. Strategic Partnerships: Forge alliances with other
                businesses that can complement your offerings, boost your reach,
                or enhance your product.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Demonstrate Strong Financial Health and Metrics
              </span>
              <span className="font-light text-gray-800">
                Profitability vs. Growth: Prioritize rapid growth over
                profitability when aiming for a larger funding round. Understand
                the appetite of the investors you're targeting. Ensure that the
                unit economics of your business are sound. Investors will look
                for healthy metrics like Customer Acquisition Cost (CAC),
                Lifetime Value (LTV), and retention rates. Show consistent
                growth in revenue, user base, and other key metrics. A
                predictable and upward trajectory will make your company more
                attractive for large investments.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Build a Strong Brand and Company Narrative
              </span>
              <span className="font-light text-gray-800">
                Engage with media and influencer to get coverage in industry
                publications. Position your company as a leader in your
                industry. Engage in speaking opportunities, write articles, or
                conduct studies related to your domain. Larger investments are
                bets on the future. Have a clear, compelling vision of where the
                company is headed in the next 5-10 years and how the funds will
                pave the way to that future.
              </span>
            </div>

            <span
              onClick={() => setActiveSection("Series C")}
              className="underline cursor-pointer text-blue-600"
            >
              And then
            </span>
          </div>
        </section>

        <section
          className={`mt-6 flex flex-col gap-3 ${
            activeSection === "Series C" ? "" : "hidden"
          }`}
        >
          <hr />

          <div className="mb-2 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-[13pt] font-bold">Growth-stage</h2>
              <span className="text-[11pt] text-gray-600 font-semibold">
                Approaching or at "unicorn" status ($1 billion valuation).
              </span>
            </div>

            <div>
              <span
                className="cursor-pointer"
                onClick={() => setActiveSection(null)}
              >
                <BiUpArrowAlt size={18} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-[10pt]">
            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Sustainable Growth and Scalability
              </span>
              <span className="font-light text-gray-800">
                While rapid growth often propels startups into the unicorn club,
                it's essential to ensure that this growth is sustainable over
                the long term. Companies need scalable business models,
                efficient operations, and the ability to adapt to changing
                market conditions. Unicorns must be cautious of becoming too
                complacent or overly reliant on a single revenue stream.
                Diversifying product offerings, entering new markets, and
                continuously innovating are crucial.
              </span>
            </div>

            <div className="flex flex-col gap-1 ">
              <span className="font-semibold">
                Robust Corporate Governance and Transparency
              </span>
              <span className="font-light text-gray-800">
                As a company's valuation and size increase, so does scrutiny
                from investors, regulators, and the public. Proper corporate
                governance structures become vital. This includes forming an
                experienced and diverse board of directors, implementing clear
                decision-making processes, and adhering to regulatory standards.
                Transparency is key. Whether it's in financial reporting,
                dealing with potential conflicts of interest, or handling
                corporate crises, being open and accountable strengthens
                stakeholder trust and can mitigate potential reputational risks.
              </span>
            </div>

            <span
              onClick={() => setActiveSection("IPO")}
              className="underline cursor-pointer text-blue-600"
            >
              Advise us how
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FundingPlan;
