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
    'Shireen',
    'Ivy',
    'Ching',
    'Ruchita',
    'Akshay',
  ]

  const quotesByName = {
    'Kiruthika (Kirthi)':
      'Kirthi: You have been a great asset to the Integration team! Smart worker with some great team spirit, who is always committed to delivering quality work. You will surely be missed! Wishing you the best in your new role. Welcome back anytime, just give me a ring and let us stay in touch.',
    'Osman Hawlader':
      'Osman: Thank you, Royce, for being the live wire of the team. We appreciate your hard work, commitment, and contributions. Wishing you all the best with your future plans and every success in the journey ahead.',
    'Sakyawira Ruslim':
      'Sakya: Thank you, Royce, for all the contributions and help these past few years! Truly appreciate all the hard work! Wishing you great adventures to come!',
    'Nikhil Bhatia':
      'Nikhil: Royce mate, your commitment and accountability toward your work are commendable. You are one of the most dependable folks I have had the pleasure of working with. Congrats on the new role, and I look forward to working with you in the future.',
    'Roop Gautam':
      'Roop: Thank you, Royce, it has been a pleasure working with you. Wishing you all the best and much success in your next role.',
    'Jo Luarez':
      'Jo: Hey Royce, even though it was not a lot of time, I learned a lot and had the pleasure of working with you. Wishing you success in this next part of your journey 😀.',
    Shireen: 'Shireen: Hey Royce, it has been a pleasure working alongside you.',
    Ivy: 'Ivy: Hey Royce, really appreciate your great personality. It seems you were always on the move (from Canada to NZ and then), huh? Active guy, just like your personality 😀 - you will be missed! All the very best for your next adventure. Look after yourself.',
    Ching:
      'Ching: Royce! Thanks so much for putting up with my annoyingness and helping solve problems with me. It is very much appreciated! It has been lovely nagging you to turn your camera on. All the best in your new role 😊.',
    Ruchita:
      'Ruchita: Hey Royce, it was great working alongside you. Best of luck in your future endeavours!',
    Akshay:
      'Akshay: Hi Royce, I really enjoyed working with you and had a great time collaborating on our SF - Azure integration issues. 😊 Best wishes! I know the Azure team will miss you.',
  }

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
            Please add your name before the message.
          </p>

          <div className="quote-grid">
            {quoteContributors.map((name) => (
              <article className="quote-card" key={name}>
                <h3>{name}</h3>
                <p className="quote-placeholder" aria-label={`Placeholder quote from ${name}`}>
                  {quotesByName[name]
                    ? `"${quotesByName[name]}"`
                    : '"Your message for Royce goes here..."'}
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
