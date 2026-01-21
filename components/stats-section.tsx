export function StatsSection() {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "2000", label: "Company Established" },
    { value: "230+", label: "Projects Completed" },
    { value: "130+", label: "Happy Clients" },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.value}</div>
              <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
