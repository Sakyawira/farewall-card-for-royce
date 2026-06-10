import './App.css'

function App() {
  const highlights = [
    '🍖 We could not have done a BBQ that good without you.',
    '💣 Without your help, the BOM project might have become an actual bomb.',
    '💻 Your relentless commitment to code quality set a standard we will keep improving.',
  ]

  const signatures = [
    'From the Fisher & Paykel Appliances Platform Team',
    'and the Integration Team',
    'With gratitude, respect, and big shoes to fill',
  ]

  const quoteContributors = [
    'Ark Aditya',
    'Chandan Kumar',
    'Deepak Kumar',
    'Francisco Mabres',
    'Gobalasingam A',
    'Jo Luarez',
    'Kiruthika (Kirthi)',
    'Nikhil Bhatia',
    'Osman Hawlader',
    'Pathum Madush',
    'Reshma Rasquin',
    'Roop Gautam',
    'Sakyawira Ruslim',
    'Sohan Khandaker',
    'Tim Sinyakov',
  ]

  return (
    <main className="page">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <section className="card" aria-label="Farewell card for Royce">
        <p className="eyebrow">Fisher &amp; Paykel Appliances Platform and Integration Team</p>
        <h1>Thank You, Royce</h1>
        <p className="lead">
          Thank you so much from the Fisher &amp; Paykel Appliances Platform and
          Integration Team.
        </p>

        <div className="highlights" role="list" aria-label="Memories and thanks">
          {highlights.map((item) => (
            <article className="highlight" key={item} role="listitem">
              <span className="spark" aria-hidden="true">
                ✦
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="signature-board" aria-label="Signoff">
          {signatures.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <section className="quotes" aria-label="Team quotes for Royce">
          <h2>Team Quotes</h2>
          <p className="quotes-intro">
            Add a short message from everyone to complete Royce&apos;s farewell card.
          </p>

          <div className="quote-grid">
            {quoteContributors.map((name) => (
              <article className="quote-card" key={name}>
                <h3>{name}</h3>
                <p className="quote-placeholder" aria-label={`Placeholder quote from ${name}`}>
                  &quot;Your message for Royce goes here...&quot;
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
