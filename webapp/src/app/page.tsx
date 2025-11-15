export default function Home() {
  const categories = [
    {
      title: "Vision & proposition de valeur",
      description:
        "Clarifiez l'opportunité afin de vérifier qu'elle répond à un besoin réel et mesurable.",
      questions: [
        "Quel problème précis ce business résout-il et pour qui ?",
        "Quelle est la proposition de valeur unique qui nous différencie ?",
        "Quels sont les indicateurs montrant une traction ou un intérêt du marché aujourd'hui ?",
      ],
    },
    {
      title: "Investissement & modèle financier",
      description:
        "Évaluez la destination exacte de vos 500 € et la viabilité financière du projet.",
      questions: [
        "Comment les 500 € seront-ils utilisés poste par poste ?",
        "Quelles projections de revenus et de marges sont établies pour les 3, 6 et 12 prochains mois ?",
        "Quelles sont les dépenses récurrentes à prévoir après l'investissement initial ?",
        "Quel est le point mort (break-even) estimé et sur quelles hypothèses repose-t-il ?",
      ],
    },
    {
      title: "Structure & responsabilités",
      description:
        "Comprenez la gouvernance, les rôles et le temps nécessaire pour faire tourner l'activité.",
      questions: [
        "Qui sont les associés actuels et quel est le partage des parts et des décisions ?",
        "Qu'attend-on concrètement de moi en termes de temps, de compétences et de responsabilités quotidiennes ?",
        "Qui gère l'administratif, la comptabilité et la relation fournisseurs ?",
      ],
    },
    {
      title: "Offre & clientèle",
      description:
        "Vérifiez la solidité de la cible et la crédibilité de la stratégie commerciale.",
      questions: [
        "Qui est le client idéal et comment est-il acquis aujourd'hui ?",
        "Quel est le cycle de vente moyen (durée, canaux, taux de conversion) ?",
        "Quels retours clients avons-nous déjà reçus (positifs, négatifs, attentes non couvertes) ?",
      ],
    },
    {
      title: "Opérations & logistique",
      description:
        "Assurez-vous que les processus sont réalistes par rapport aux ressources disponibles.",
      questions: [
        "Quelles sont les étapes clés pour délivrer le produit ou service et quels sont les risques opérationnels ?",
        "Quels outils ou fournisseurs sont indispensables et quelles sont les alternatives en cas de rupture ?",
        "Quels indicateurs de performance suivons-nous pour piloter les opérations ?",
      ],
    },
    {
      title: "Cadre légal & conformité",
      description:
        "Confirmez que les obligations légales et contractuelles sont anticipées.",
      questions: [
        "Quel statut juridique est utilisé et pourquoi ce choix ?",
        "Quelles assurances, licences ou conformités réglementaires sont nécessaires ?",
        "De quels contrats (fournisseurs, partenaires, clients) disposons-nous actuellement ?",
      ],
    },
    {
      title: "Risques & plan de sortie",
      description:
        "Identifiez les scénarios défavorables et les options si le projet n'atteint pas ses objectifs.",
      questions: [
        "Quels sont les principaux risques identifiés et comment sont-ils atténués ?",
        "Que se passe-t-il si je souhaite arrêter ma participation ou revendre mes parts ?",
        "Quel est le plan B si la traction attendue n'est pas au rendez-vous ?",
      ],
    },
  ];

  const dueDiligenceChecklist = [
    "Demander un business plan écrit (même simplifié) et les hypothèses sous-jacentes.",
    "Analyser les relevés bancaires ou bilans existants quand ils sont disponibles.",
    "Vérifier la réputation des associés (références, expériences, historique).",
    "Clarifier par écrit les modalités d'entrée au capital ou de partenariat.",
    "Se faire accompagner par un expert-comptable ou un conseiller juridique avant de signer.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-slate-100 font-sans text-slate-900">
      <header className="border-b border-emerald-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Due diligence express
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Questions clés avant d&apos;investir 500&nbsp;€ dans un business
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Utilisez cette checklist pour identifier rapidement les points à
            éclaircir avant d&apos;engager vos fonds. Chaque bloc vous aide à
            évaluer la pertinence du projet, les risques associés et la qualité
            de l&apos;équipe porteuse.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12">
        <section className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {category.description}
                </p>
              </div>
              <ul className="mt-auto space-y-3 text-sm text-slate-700">
                {category.questions.map((question) => (
                  <li
                    key={question}
                    className="flex gap-3 rounded-xl border border-emerald-50 bg-emerald-50/70 px-4 py-3 leading-relaxed"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Mini checklist de vérification
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            En complément des questions, assurez-vous de rassembler des preuves
            concrètes et des avis externes avant de prendre votre décision.
          </p>
          <ol className="mt-6 space-y-4 text-sm text-slate-700">
            {dueDiligenceChecklist.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 font-semibold text-white">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 px-8 py-10">
          <h2 className="text-2xl font-semibold text-emerald-900">
            Note pour aller plus loin
          </h2>
          <p className="mt-3 text-sm text-emerald-900/80 leading-relaxed">
            Si plusieurs réponses restent floues ou non documentées, considérez-le
            comme un signal d&apos;alerte. Demandez des preuves, ralentissez votre
            prise de décision et envisagez un accompagnement professionnel
            (conseiller en investissement, expert-comptable, avocat) avant de
            verser le moindre euro.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Guide express d&apos;évaluation d&apos;opportunité d&apos;investissement.</p>
          <p>Adaptez ces questions au secteur et à la maturité du projet.</p>
        </div>
      </footer>
    </div>
  );
}
