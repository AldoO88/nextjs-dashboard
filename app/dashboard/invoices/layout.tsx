export default function Layout (
  { children }: { children: React.ReactNode }
)
{
  return (
    <section>
      Esto es el layout de invoices
      {children}
    </section>
  )
}